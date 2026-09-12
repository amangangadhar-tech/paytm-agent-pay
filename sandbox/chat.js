// Proxy between the demo page and Phinite's Chat API (keeps the workspace token server-side).
//
// Phinite Chat API:
//   POST {base}/chat_api/{integration_id}/{env}   -> { session_id, response:{query}, status }
//   POST {base}/chat_api/{session_id}  {message}   -> NDJSON stream; last line has status "completed"
//
// Config: env vars or sandbox/chat.config.json
//   PHINITE_CHAT_BASE            e.g. https://app.phinite.ai/api/v1/ai   (no trailing slash)
//   PHINITE_CHAT_INTEGRATION_ID  integration id from Integrations -> Chat API
//   PHINITE_CHAT_ENV             dev | uat | production   (default dev)
//   PHINITE_API_KEY              workspace token (Keys page)

import { Router } from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { broadcast } from './events.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function loadConfig() {
  let file = {};
  try { file = JSON.parse(fs.readFileSync(path.join(__dirname, 'chat.config.json'), 'utf8')); } catch { /* optional */ }
  return {
    base: (process.env.PHINITE_CHAT_BASE || file.base || 'https://app.phinite.ai/api/v1/ai').replace(/\/$/, ''),
    integrationId: process.env.PHINITE_CHAT_INTEGRATION_ID || file.integrationId || '',
    env: process.env.PHINITE_CHAT_ENV || file.env || 'dev',
    apiKey: process.env.PHINITE_API_KEY || file.apiKey || '',
  };
}
const authHeaders = (c) => ({ 'Content-Type': 'application/json', Authorization: `Bearer ${c.apiKey}` });

const replyOf = (line) => {
  const r = line?.response;
  if (typeof r === 'string') return r;
  if (r && typeof r.query === 'string') return r.query;
  if (typeof line?.query === 'string') return line.query;
  return '';
};

async function startSession(c) {
  const r = await fetch(`${c.base}/chat_api/${c.integrationId}/${c.env}`, { method: 'POST', headers: authHeaders(c), body: '{}' });
  const text = await r.text();
  let data; try { data = JSON.parse(text); } catch { data = { detail: text }; }
  if (!r.ok) throw new Error(`start ${r.status}: ${data.detail || text.slice(0, 200)}`);
  return { sessionId: data.session_id, greeting: replyOf(data) };
}

async function sendMessage(c, sessionId, message, onLine) {
  const r = await fetch(`${c.base}/chat_api/${sessionId}`, { method: 'POST', headers: authHeaders(c), body: JSON.stringify({ message }) });
  // Read the NDJSON stream incrementally and surface interim lines as they arrive.
  let text = '';
  if (r.ok && r.body && onLine) {
    const reader = r.body.getReader(); const dec = new TextDecoder(); let buf = '';
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      const chunk = dec.decode(value, { stream: true }); text += chunk; buf += chunk;
      let i;
      while ((i = buf.indexOf('\n')) >= 0) {
        const line = buf.slice(0, i).trim(); buf = buf.slice(i + 1);
        if (!line) continue;
        try { const j = JSON.parse(line); if (j.status !== 'completed') onLine(j); } catch { /* partial */ }
      }
    }
  } else {
    text = await r.text();
  }
  if (!r.ok) {
    let d; try { d = JSON.parse(text); } catch { d = {}; }
    const err = new Error(`send ${r.status}: ${d.detail || text.slice(0, 200)}`); err.status = r.status; throw err;
  }
  // NDJSON: keep every non-empty line; prefer the last "completed"/"transferred" one, else the last line.
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean).map((l) => { try { return JSON.parse(l); } catch { return { response: l }; } });
  const final = [...lines].reverse().find((l) => ['completed', 'transferred', 'resolved', 'error'].includes(l.status)) || lines[lines.length - 1];
  if (!final) return { reply: '', status: 'empty' };
  if (final.status === 'error' || final.error) throw new Error(final.error || replyOf(final) || 'agent error');
  return { reply: replyOf(final), status: final.status, interim: lines.slice(0, -1).map(replyOf).filter(Boolean) };
}

const chat = Router();

chat.get('/status', (_req, res) => {
  const c = loadConfig();
  res.json({ configured: Boolean(c.integrationId && c.apiKey), base: c.base, env: c.env, integrationId: c.integrationId ? c.integrationId.slice(0, 4) + '…' : null });
});

// Start a session explicitly (the page calls this on load to show the real greeting).
chat.post('/start', async (_req, res) => {
  const c = loadConfig();
  if (!c.integrationId || !c.apiKey) return res.status(503).json({ error: 'Chat API not configured (PHINITE_CHAT_INTEGRATION_ID / PHINITE_API_KEY).' });
  try { res.json(await startSession(c)); }
  catch (e) { console.error('[chat]', e.message); res.status(502).json({ error: e.message }); }
});

chat.post('/', async (req, res) => {
  const c = loadConfig();
  if (!c.integrationId || !c.apiKey) return res.status(503).json({ error: 'Chat API not configured (PHINITE_CHAT_INTEGRATION_ID / PHINITE_API_KEY).' });
  let message = String(req.body?.message || '').trim();
  if (!message) return res.status(400).json({ error: 'message required' });
  // Voice mode (mic / phone): ask the agent for a short, British, "Sir"-style reply. YES/NO pass through untouched.
  if (req.body?.voice && !/^(yes|no)$/i.test(message)) message += ' (Voice: reply in at most 40 words, British English, address me as Sir, no markdown.)';
  let sessionId = req.body?.sessionId || null;
  broadcast('agent', { agent: 'User', action: 'a2a', detail: `→ Agent Pay: "${message.slice(0, 80)}"`, ts: new Date().toISOString() });
  try {
    if (!sessionId) sessionId = (await startSession(c)).sessionId;
    const onLine = (j) => { const t = replyOf(j); if (t) broadcast('chat', { sessionId, status: j.status || 'processing', text: t }); };
    let out;
    try { out = await sendMessage(c, sessionId, message, onLine); }
    catch (e) {
      if (e.status !== 404) throw e;           // session expired -> start a fresh one and retry once
      sessionId = (await startSession(c)).sessionId;
      out = await sendMessage(c, sessionId, message, onLine);
    }
    res.json({ reply: out.reply || '(no reply)', status: out.status, sessionId });
  } catch (e) {
    console.error('[chat]', e.message);
    res.status(502).json({ error: e.message, sessionId });
  }
});

export default chat;
