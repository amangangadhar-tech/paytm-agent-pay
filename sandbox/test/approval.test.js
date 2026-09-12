import { test } from 'node:test';
import assert from 'node:assert/strict';
import { state, seed } from '../state.js';
import { issueToken, consumeToken } from '../lib/approval.js';

const req = { userId: 'aman', payeeVpa: 'quickcab@paytm', amount: 240 };

test('issued token consumes once for matching payee+amount', () => {
  seed();
  const { approvalToken, expiresAt } = issueToken(state, req);
  assert.ok(approvalToken.startsWith('apr_'));
  assert.ok(new Date(expiresAt) > new Date());
  const ok = consumeToken(state, { approvalToken, payeeVpa: 'quickcab@paytm', amount: 240 });
  assert.equal(ok.ok, true);
  const again = consumeToken(state, { approvalToken, payeeVpa: 'quickcab@paytm', amount: 240 });
  assert.equal(again.ok, false);
  assert.equal(again.error, 'token_used');
});

test('missing or unknown token is rejected', () => {
  seed();
  assert.equal(consumeToken(state, { approvalToken: undefined, payeeVpa: 'x', amount: 1 }).error, 'token_missing');
  assert.equal(consumeToken(state, { approvalToken: 'apr_nope', payeeVpa: 'x', amount: 1 }).error, 'token_unknown');
});

test('token bound to payee and amount', () => {
  seed();
  const { approvalToken } = issueToken(state, req);
  assert.equal(consumeToken(state, { approvalToken, payeeVpa: 'evil@ybl', amount: 240 }).error, 'token_mismatch');
  assert.equal(consumeToken(state, { approvalToken, payeeVpa: 'quickcab@paytm', amount: 999 }).error, 'token_mismatch');
  // still unused after mismatches
  assert.equal(consumeToken(state, { approvalToken, payeeVpa: 'quickcab@paytm', amount: 240 }).ok, true);
});

test('expired token is rejected', () => {
  seed();
  const { approvalToken } = issueToken(state, req);
  state.tokens[approvalToken].expiresAt = Date.now() - 1;
  assert.equal(consumeToken(state, { approvalToken, payeeVpa: 'quickcab@paytm', amount: 240 }).error, 'token_expired');
});
