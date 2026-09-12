// Human-approval tokens. /api/pay refuses to move money without one that
// matches the exact payee + amount, is unexpired, and has not been used.

import { randomBytes } from 'node:crypto';

const TTL_MS = 10 * 60 * 1000;

export function issueToken(state, { userId, payeeVpa, amount }) {
  const approvalToken = 'apr_' + randomBytes(6).toString('hex');
  const expiresAt = Date.now() + TTL_MS;
  state.tokens[approvalToken] = {
    userId,
    payeeVpa: String(payeeVpa).trim().toLowerCase(),
    amount: Number(amount),
    expiresAt,
    used: false,
  };
  return { approvalToken, expiresAt: new Date(expiresAt).toISOString() };
}

export function consumeToken(state, { approvalToken, payeeVpa, amount }) {
  if (!approvalToken) return { ok: false, error: 'token_missing' };
  const t = state.tokens[approvalToken];
  if (!t) return { ok: false, error: 'token_unknown' };
  if (t.used) return { ok: false, error: 'token_used' };
  if (Date.now() > t.expiresAt) return { ok: false, error: 'token_expired' };
  if (t.payeeVpa !== String(payeeVpa).trim().toLowerCase() || t.amount !== Number(amount)) {
    return { ok: false, error: 'token_mismatch' };
  }
  t.used = true;
  return { ok: true, userId: t.userId };
}
