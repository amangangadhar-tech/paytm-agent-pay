import { test } from 'node:test';
import assert from 'node:assert/strict';
import { state, seed } from '../state.js';
import { quote } from '../lib/quote.js';

test('cab to Koramangala is ₹240 and deterministic', () => {
  seed();
  const a = quote(state.merchants.quickcab, { need: 'cab', location: 'Koramangala', budget: 300 });
  const b = quote(state.merchants.quickcab, { need: 'cab', location: 'koramangala', budget: 300 });
  assert.equal(a.amount, 240);
  assert.equal(b.amount, 240);
  assert.equal(a.quoteId, b.quoteId);
  assert.equal(a.withinBudget, true);
  assert.equal(a.currency, 'INR');
  assert.equal(a.vpa, 'quickcab@paytm');
  assert.match(a.description, /Koramangala/i);
});

test('cab over budget is flagged', () => {
  seed();
  const q = quote(state.merchants.quickcab, { need: 'cab', location: 'Airport', budget: 300 });
  assert.ok(q.amount > 300);
  assert.equal(q.withinBudget, false);
});

test('unknown location uses default distance', () => {
  seed();
  const q = quote(state.merchants.quickcab, { need: 'cab', location: 'Nowhere Street' });
  assert.equal(q.amount, 120 + 15 * 6);
  assert.equal(q.withinBudget, true); // no budget → within
});

test('pharmacy sums catalog items found in need', () => {
  seed();
  const q = quote(state.merchants.medplus, { need: 'paracetamol and ORS', location: 'HSR' });
  assert.equal(q.amount, 30 + 20);
  assert.match(q.description, /paracetamol/i);
});

test('pharmacy with no known items falls back to 50', () => {
  seed();
  const q = quote(state.merchants.medplus, { need: 'something', location: 'HSR' });
  assert.equal(q.amount, 50);
});

test('metro fare Indiranagar to Majestic', () => {
  seed();
  const q = quote(state.merchants.nammametro, { need: 'metro from Indiranagar to Majestic', location: '' });
  assert.equal(q.amount, 45); // 7 stops on purple -> 10 + 35
  assert.match(q.description, /Indiranagar → Majestic/);
});

test('metro fare short hop', () => {
  seed();
  const q = quote(state.merchants.nammametro, { need: 'metro', location: 'MG Road to Trinity' });
  assert.equal(q.amount, 15); // MG Road(4) -> Trinity(5), 1 stop
});

test('metro cross-line fare changes at Majestic', () => {
  seed();
  const q = quote(state.merchants.nammametro, { need: 'metro from Yeshwanthpur to Indiranagar' });
  assert.equal(q.amount, 60); // 8 + 7 = 15 stops -> 85, capped 60
  assert.match(q.description, /change at Majestic/);
});

test('recharge ignores the phone number when finding the amount', () => {
  seed();
  const q = quote(state.merchants.jio, { need: 'recharge my jio 9845012345 with 299' });
  assert.equal(q.amount, 299);
  assert.match(q.description, /9845012345/);
});

test('recharge picks the named plan or closest below', () => {
  seed();
  assert.equal(quote(state.merchants.jio, { need: 'recharge jio 299' }).amount, 299);
  assert.equal(quote(state.merchants.jio, { need: 'recharge jio with 300' }).amount, 299);
  assert.equal(quote(state.merchants.airtel, { need: 'airtel recharge', budget: 400 }).amount, 359);
});

test('cab destination tolerates typos', () => {
  seed();
  assert.equal(quote(state.merchants.quickcab, { need: 'book me a cab to indranagar under 500' }).amount, 120 + 15 * 10);
  assert.equal(quote(state.merchants.quickcab, { need: 'cab to kormangala' }).amount, 240);
});

test('metro tolerates typos and split words', () => {
  seed();
  const q = quote(state.merchants.nammametro, { need: 'metro from indra nagar to majestic' });
  assert.match(q.description, /Indiranagar → Majestic/);
});
