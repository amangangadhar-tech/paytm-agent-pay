// All /api handlers. Thin: validate, call lib, mutate state, broadcast.

import { Router } from 'express';
import { state, seed } from './state.js';
import { broadcast } from './events.js';
import { scoreVpa } from './lib/risk.js';
import { matchPatterns } from './lib/scam.js';
import { quote } from './lib/quote.js';
import { issueToken, consumeToken } from './lib/approval.js';

const api = Router();
const now = () => new Date().toISOString();

function logAgent(agent, action, detail) {
  const entry = { agent, action, detail, ts: now() };
  state.agentLog.unshift(entry);
  state.agentLog = state.agentLog.slice(0, 200);
  broadcast('agent', entry);
  return entry;
}

function getUser(res, userId) {
  const u = state.users[userId];
  if (!u) res.status(404).json({ error: 'user_not_found', userId });
  return u;
}

api.get('/health', (_req, res) => res.json({ ok: true, seededAt: state.seededAt }));

api.get('/wallet/:userId', (req, res) => {
  const u = getUser(res, req.params.userId);
  if (u) res.json(u);
});

api.get('/ledger/:userId', (req, res) => {
  const u = getUser(res, req.params.userId);
  if (u) res.json({ transactions: state.ledger.filter((t) => t.userId === u.userId) });
});

api.get('/risk/:vpa', (req, res) => {
  const r = scoreVpa(req.params.vpa, state.payees);
  state.lastRisk = r;
  broadcast('risk', r);
  res.json(r);
});

api.get('/scam-patterns', (req, res) => {
  const r = matchPatterns(req.query.q, state.scamPatterns);
  if (r.matched) broadcast('scam', { q: req.query.q, ...r });
  res.json(r);
});

api.get('/contacts', (req, res) => {
  const q = String(req.query.name || '').trim().toLowerCase();
  let list = state.contacts.filter((c) => !q || c.aliases.some((a) => a.includes(q) || q.includes(a)));
  // Unknown name: synthesize a plausible contact so any "send X to <name>" works on stage.
  // Their VPA is unknown to the risk table -> scores medium ("new to Paytm, proceed only if you know them").
  if (q && !list.length) {
    const slug = q.replace(/[^a-z ]/g, '').trim().split(/\s+/).join('.');
    const name = q.split(' ').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    list = [{ name, aliases: [q], vpa: `${slug}@okhdfc`, phone: '9xxxx xxxxx', paidBefore: 0, synthesized: true }];
  }
  if (q) logAgent('Contact Lookup', 'info', `Resolved "${req.query.name}" → ${list[0].name} (${list[0].vpa})`);
  res.json({ contacts: list });
});

api.get('/merchants', (req, res) => {
  const tag = String(req.query.tag || '').toLowerCase();
  const list = Object.values(state.merchants)
    .filter((m) => !tag || m.tags.includes(tag))
    .map(({ id, name, vpa, tags, skills, kind }) => ({ id, name, vpa, tags, skills, kind }));
  res.json({ merchants: list });
});

api.post('/merchants/:id/quote', (req, res) => {
  const m = state.merchants[req.params.id];
  if (!m) return res.status(404).json({ error: 'merchant_not_found' });
  const q = quote(m, req.body || {});
  state.quotes[q.quoteId] = { ...q, createdAt: now() };
  logAgent(m.name, 'quote', `Quoted ₹${q.amount} — ${q.description}`);
  res.json(q);
});

api.post('/merchants/:id/confirm', (req, res) => {
  const m = state.merchants[req.params.id];
  if (!m) return res.status(404).json({ error: 'merchant_not_found' });
  const { quoteId, txnId } = req.body || {};
  const q = state.quotes[quoteId];
  const order = {
    orderId: `ORD${String(state.counters.order++).padStart(4, '0')}`,
    merchantId: m.id, quoteId: quoteId || null, txnId: txnId || null,
    status: 'CONFIRMED',
    eta: m.kind === 'cab' ? '4 min' : m.kind === 'pharmacy' ? '25 min' : m.kind === 'metro' ? 'QR valid 2 hours' : m.kind === 'recharge' ? 'active in 2 min' : '10 min',
    description: q ? q.description : `${m.name} order`,
    ts: now(),
  };
  state.orders.push(order);
  logAgent(m.name, 'confirm', `Order ${order.orderId} confirmed, ETA ${order.eta}`);
  broadcast('order', order);
  res.json(order);
});

api.post('/approve', (req, res) => {
  const { userId = 'aman', payeeVpa, amount } = req.body || {};
  if (!payeeVpa || !(Number(amount) > 0)) return res.status(400).json({ error: 'payeeVpa and positive amount required' });
  if (!getUser(res, userId)) return;
  const t = issueToken(state, { userId, payeeVpa, amount });
  logAgent('Human', 'approve', `Approved ₹${amount} to ${payeeVpa}`);
  broadcast('approval', { userId, payeeVpa, amount: Number(amount), ...t });
  res.json(t);
});

api.post('/pay', (req, res) => {
  const { userId = 'aman', payeeVpa, amount, note = '', approvalToken } = req.body || {};
  const u = getUser(res, userId);
  if (!u) return;
  const amt = Number(amount);
  if (!payeeVpa || !(amt > 0)) return res.status(400).json({ error: 'payeeVpa and positive amount required' });

  const gate = consumeToken(state, { approvalToken, payeeVpa, amount: amt });
  if (!gate.ok) {
    logAgent('Sandbox', 'blocked', `Payment of ₹${amt} to ${payeeVpa} refused: ${gate.error}`);
    return res.status(403).json({ error: gate.error, message: 'Payment requires a valid human approval token for this exact payee and amount.' });
  }
  if (u.balance < amt) return res.status(402).json({ error: 'insufficient_balance', balance: u.balance });
  if (u.dailySpent + amt > u.dailyLimit) return res.status(402).json({ error: 'daily_limit_exceeded', dailyLimit: u.dailyLimit, dailySpent: u.dailySpent });

  u.balance -= amt;
  u.dailySpent += amt;
  const txn = {
    txnId: `T${state.counters.txn++}`, userId, type: 'DEBIT', amount: amt,
    payeeVpa: String(payeeVpa).trim().toLowerCase(), note, ts: now(), status: 'SUCCESS', approvalToken,
  };
  state.ledger.unshift(txn);
  logAgent('Payment Executor', 'pay', `Paid ₹${amt} to ${txn.payeeVpa} (${txn.txnId})`);
  broadcast('wallet', u);
  broadcast('ledger', txn);
  res.json({ txnId: txn.txnId, status: 'SUCCESS', amount: amt, payeeVpa: txn.payeeVpa, balanceAfter: u.balance });
});

api.post('/fraud-report', (req, res) => {
  const { userId = 'aman', vpa = '', message = '', reason = '' } = req.body || {};
  const report = {
    reportId: `NPCI-${new Date().getFullYear()}-${String(state.counters.report++).padStart(6, '0')}`,
    userId, vpa, message, reason, status: 'FILED', ts: now(),
  };
  state.reports.unshift(report);
  logAgent('Scam Guardian', 'report', `Fraud report ${report.reportId} filed against ${vpa || 'unknown VPA'}`);
  broadcast('report', report);
  res.json(report);
});

api.post('/agent-event', (req, res) => {
  const { agent = 'Agent', action = 'info', detail = '' } = req.body || {};
  res.json({ ok: true, entry: logAgent(agent, action, detail) });
});

api.get('/agent-log', (_req, res) => res.json({ entries: state.agentLog, lastRisk: state.lastRisk || null }));

api.post('/reset', (_req, res) => {
  seed();
  broadcast('reset', { seededAt: state.seededAt });
  res.json({ ok: true, seededAt: state.seededAt });
});

export default api;
