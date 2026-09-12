import { test } from 'node:test';
import assert from 'node:assert/strict';
import { state, seed } from '../state.js';
import { scoreVpa } from '../lib/risk.js';

test('known verified merchant scores low', () => {
  seed();
  const r = scoreVpa('quickcab@paytm', state.payees);
  assert.equal(r.level, 'low');
  assert.ok(r.score <= 10);
  assert.equal(r.verified, true);
  assert.ok(r.reasons.length > 0);
});

test('known bad payee scores high', () => {
  seed();
  const r = scoreVpa('bescom-update@ybl', state.payees);
  assert.equal(r.level, 'high');
  assert.ok(r.score >= 70);
  assert.equal(r.complaintCount, 47);
});

test('unknown vpa is medium and deterministic', () => {
  seed();
  const a = scoreVpa('random-shop@okhdfc', state.payees);
  const b = scoreVpa('random-shop@okhdfc', state.payees);
  assert.equal(a.score, b.score);
  assert.ok(a.score >= 35 && a.score <= 65);
  assert.equal(a.level, 'medium');
  assert.equal(a.verified, false);
  assert.ok(a.reasons.includes('No transaction history'));
});

test('vpa lookup is case-insensitive and trimmed', () => {
  seed();
  const r = scoreVpa('  QuickCab@Paytm ', state.payees);
  assert.equal(r.level, 'low');
});
