import { test } from 'node:test';
import assert from 'node:assert/strict';
import { state, seed } from '../state.js';
import { matchPatterns } from '../lib/scam.js';

test('electricity + ₹1 KYC message matches two patterns, strongest first', () => {
  seed();
  const r = matchPatterns('Your electricity will be disconnected tonight. Pay ₹1 to update KYC at bescom-update@ybl', state.scamPatterns);
  assert.equal(r.matched, true);
  const ids = r.patterns.map((p) => p.id);
  assert.ok(ids.includes('utility_disconnection'));
  assert.ok(ids.includes('small_amount_kyc'));
  for (let i = 1; i < r.patterns.length; i++) assert.ok(r.patterns[i - 1].confidence >= r.patterns[i].confidence);
  assert.ok(r.patterns[0].advisory.length > 20);
});

test('benign message does not match', () => {
  seed();
  const r = matchPatterns('Book me a cab to Koramangala under 300', state.scamPatterns);
  assert.equal(r.matched, false);
  assert.deepEqual(r.patterns, []);
});

test('matching is case-insensitive', () => {
  seed();
  const r = matchPatterns('YOU HAVE WON a LOTTERY, pay PROCESSING FEE', state.scamPatterns);
  assert.equal(r.patterns[0].id, 'lottery');
  assert.ok(r.patterns[0].confidence > 0.3);
});

test('empty text is safe', () => {
  seed();
  assert.equal(matchPatterns('', state.scamPatterns).matched, false);
  assert.equal(matchPatterns(undefined, state.scamPatterns).matched, false);
});
