// Phone voice channel: the page asks us to call the user; Twilio calls back with TwiML requests;
// we transcribe (Twilio speech), run the turn through the Phinite Chat API (same agent as the chat),
// and speak the reply with a British neural voice. Twilio needs each webhook answered within ~15 s,
// so long agent turns are bridged with a polite hold + poll loop.
//
// Config (sandbox/chat.config.json):
//   "twilio": { "accountSid": "AC…", "authToken": "…", "from": "+1…", "to": "+91…" }
// Public URL for Twilio callbacks: PUBLIC_URL env, or "publicUrl" in config, or read from the cloudflared log.

import { Router } from 'express';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { broadcast } from './events.js';
import { state } from './state.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const VOICE = 'Polly.Brian-Neural';   // British English, male
const LANG = 'en-GB';
const HINT = ' (Voice call: reply in at most 40 words, British English, address me as Sir, no markdown.)';

function cfg() {
  let f = {};
  try { f = JSON.parse(fs.readFileSync(path.join(__dirname, 'chat.config.json'), 'utf8')); } catch { /* optional */ }
  const t = f.twilio || {};
  return {
    accountSid: process.env.TWILIO_ACCOUNT_SID || t.accountSid || '',
    authToken: process.env.TWILIO_AUTH_TOKEN || t.authToken || '',
    from: process.env.TWILIO_FROM || t.from || '',
    to: process.env.TWILIO_TO || t.to || '',
    publicUrl: process.env.PUBLIC_URL || f.publicUrl || '',
  };
}
function publicUrl(c) {
  if (c.publicUrl) return c.publicUrl.replace(/\/$/, '');
  try {
    const log = fs.readFileSync(path.join(os.tmpdir(), 'cf-tunnel.log'), 'utf8');
    const m = log.match(/https:\/\/[a-z0-9-]+\.trycloudflare\.com/);
    if (m) return m[0];
  } catch { /* no tunnel log */ }
  return '';
}

const xml = (s) => String(s ?? '').replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[c]));
const twiml = (inner) => `<?xml version="1.0" encoding="UTF-8"?><Response>${inner}</Response>`;
const say = (text) => `<Say voice="${VOICE}" language="${LANG}">${xml(text)}</Say>`;
const gather = (prompt) => `<Gather input="speech" language="en-IN" speechTimeout="auto" speechModel="phone_call" enhanced="true" action="/api/voice/heard" method="POST" actionOnEmptyResult="true">${prompt ? say(prompt) : ''}</Gather><Redirect method="POST">/api/voice/heard</Redirect>`;

// Make agent text pleasant to hear on a phone.
function speechify(t) {
  return String(t || '')
    .replace(/[✅⚠️*_#`·]/g, ' ')
    .replace(/₹\s?([\d,]+)/g, (_, n) => `${n.replace(/,/g, '')} rupees`)
    .replace(/[\w.\-]+@\w+/g, (m) => m.replace('@', ' at '))
    .replace(/\bTxn\b/gi, 'transaction').replace(/\bVPA\b/g, 'UPI ID').replace(/\bUPI\b/g, 'U P I')
    .replace(/\(\s*\d{1,3}\s*\/\s*100\s*\)/g, '')
    .replace(/(please\s+)?reply\s+(with\s+)?yes[^.?!]*[.?!]?/i, 'Shall I proceed, Sir? Please say yes or no.')
    .replace(/\(yes\/no\)/i, '— please say yes or no.')
    .replace(/\s+/g, ' ').trim().slice(0, 600);
}

// ---- per-call state
const calls = new Map(); // callSid -> { sessionId, pending: Promise|null, reply: string|null, polls: number, to }
const log = (action, detail) => { const e = { agent: 'Voice call', action, detail, ts: new Date().toISOString() }; state.agentLog.unshift(e); broadcast('agent', e); broadcast('voice', e); };

async function chatStart() {
  const r = await fetch('http://localhost:' + (process.env.PORT || 3000) + '/api/chat/start', { method: 'POST' });
  const d = await r.json(); if (!r.ok) throw new Error(d.error || 'chat start failed');
  return d;
}
async function chatSend(sessionId, message) {
  const r = await fetch('http://localhost:' + (process.env.PORT || 3000) + '/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message, sessionId }) });
  const d = await r.json(); if (!r.ok) throw new Error(d.error || 'chat failed');
  return d;
}

const voice = Router();

voice.get('/status', (_req, res) => {
  const c = cfg();
  res.json({ configured: Boolean(c.accountSid && c.authToken && c.from), to: c.to ? c.to.replace(/\d(?=\d{4})/g, '•') : null, publicUrl: publicUrl(c) || null });
});

// Page -> place an outbound call to the user's phone.
voice.post('/call', async (req, res) => {
  const c = cfg();
  if (!c.accountSid || !c.authToken || !c.from) return res.status(503).json({ error: 'Twilio not configured (twilio.accountSid / authToken / from in chat.config.json).' });
  const to = String(req.body?.to || c.to || '').trim();
  if (!/^\+\d{8,15}$/.test(to)) return res.status(400).json({ error: 'to must be E.164, e.g. +919845012345' });
  const base = publicUrl(c);
  if (!base) return res.status(503).json({ error: 'No public URL — start the cloudflared tunnel first.' });
  const body = new URLSearchParams({ To: to, From: c.from, Url: `${base}/api/voice/answer`, Method: 'POST', StatusCallback: `${base}/api/voice/status-cb`, StatusCallbackMethod: 'POST', StatusCallbackEvent: 'initiated ringing answered completed' });
  const r = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${c.accountSid}/Calls.json`, {
    method: 'POST', headers: { Authorization: 'Basic ' + Buffer.from(`${c.accountSid}:${c.authToken}`).toString('base64'), 'Content-Type': 'application/x-www-form-urlencoded' }, body,
  });
  const d = await r.json();
  if (!r.ok) { log('blocked', `Call failed: ${d.message || r.status}`); return res.status(502).json({ error: d.message || `Twilio ${r.status}` }); }
  calls.set(d.sid, { sessionId: null, pending: null, reply: null, polls: 0, to });
  log('a2a', `Calling ${to.replace(/\d(?=\d{4})/g, '•')} …`);
  res.json({ ok: true, callSid: d.sid, status: d.status });
});

voice.post('/status-cb', (req, res) => {
  const st = req.body?.CallStatus; if (st) log(st === 'completed' ? 'info' : 'a2a', `Call ${st}`);
  if (st === 'completed' || st === 'failed' || st === 'busy' || st === 'no-answer') calls.delete(req.body.CallSid);
  res.sendStatus(204);
});

// Twilio -> call connected: greet and listen.
voice.post('/answer', async (req, res) => {
  const sid = req.body?.CallSid; const call = calls.get(sid) || { sessionId: null, pending: null, reply: null, polls: 0 };
  calls.set(sid, call);
  res.type('text/xml');
  try {
    if (!call.sessionId) { const s = await chatStart(); call.sessionId = s.sessionId; }
    log('a2a', 'Call answered — agent greeting');
    res.send(twiml(gather('Good afternoon, Sir. This is Paytm Agent Pay. How may I help you today?')));
  } catch (e) {
    res.send(twiml(say('I am sorry, Sir, I cannot reach the agent right now. Goodbye.') + '<Hangup/>'));
  }
});

// Twilio -> we heard something. Kick off the agent turn and hold.
voice.post('/heard', async (req, res) => {
  const sid = req.body?.CallSid; const call = calls.get(sid);
  res.type('text/xml');
  if (!call) return res.send(twiml(say('Sorry, Sir, the session has expired. Goodbye.') + '<Hangup/>'));
  const heard = String(req.body?.SpeechResult || '').trim();
  if (!heard) return res.send(twiml(gather("I didn't catch that, Sir. Please say it again.")));
  log('info', `You said: “${heard}”`);
  broadcast('voice', { kind: 'transcript', text: heard });
  if (/^(bye|goodbye|that's all|thats all|nothing else|no thanks|no thank you)\b/i.test(heard)) {
    return res.send(twiml(say('Very good, Sir. Goodbye.') + '<Hangup/>'));
  }
  const msg = /^(yes|yeah|yep|haan|ok|okay|confirm|go ahead|proceed)\b/i.test(heard) ? 'YES' : /^(no|nope|nah|cancel|stop)\b/i.test(heard) ? 'NO' : heard + HINT;
  call.reply = null; call.polls = 0;
  call.pending = chatSend(call.sessionId, msg).then((d) => { call.reply = d.reply || 'Done, Sir.'; }).catch((e) => { call.reply = 'I am sorry, Sir, something went wrong: ' + e.message; });
  res.send(twiml(say(/^YES$/.test(msg) ? 'Very good, Sir. Processing the payment.' : 'Certainly, Sir. One moment.') + '<Redirect method="POST">/api/voice/wait</Redirect>'));
});

// Twilio -> polling loop while the agent works (each response well under Twilio's timeout).
voice.post('/wait', (req, res) => {
  const sid = req.body?.CallSid; const call = calls.get(sid);
  res.type('text/xml');
  if (!call) return res.send(twiml(say('Sorry, Sir, the session has expired. Goodbye.') + '<Hangup/>'));
  if (call.reply) {
    const text = speechify(call.reply); call.reply = null;
    log('info', `Agent said: “${text.slice(0, 90)}${text.length > 90 ? '…' : ''}”`);
    broadcast('voice', { kind: 'reply', text });
    return res.send(twiml(gather(text)));
  }
  call.polls += 1;
  const filler = call.polls % 3 === 0 ? say('Still working on it, Sir.') : '';
  if (call.polls > 30) return res.send(twiml(say('I am terribly sorry, Sir, this is taking too long. Please try again.') + '<Hangup/>'));
  res.send(twiml(filler + '<Pause length="4"/><Redirect method="POST">/api/voice/wait</Redirect>'));
});

export default voice;
