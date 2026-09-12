// Payee risk scoring. Known payees come from state.payees; unknown ones get a
// deterministic medium score so any VPA typed on stage produces a sane answer.

export function levelFor(score) {
  if (score >= 70) return 'high';
  if (score >= 35) return 'medium';
  return 'low';
}

function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h;
}

export function scoreVpa(rawVpa, payees) {
  const vpa = String(rawVpa || '').trim().toLowerCase();
  const known = payees[vpa];
  if (known) {
    return {
      vpa,
      score: known.score,
      level: levelFor(known.score),
      reasons: [...known.reasons],
      firstSeen: known.firstSeen,
      complaintCount: known.complaintCount,
      txnCount: known.txnCount,
      verified: known.verified,
    };
  }
  const score = 35 + (hash(vpa) % 31); // 35..65
  const ageDays = 20 + (hash(vpa + ':age') % 200);
  return {
    vpa,
    score,
    level: levelFor(score),
    reasons: ['No transaction history', 'Not a verified Paytm merchant', `Handle first seen ${ageDays} days ago`],
    firstSeen: new Date(Date.now() - ageDays * 86400000).toISOString(),
    complaintCount: hash(vpa + ':c') % 3,
    txnCount: hash(vpa + ':t') % 40,
    verified: false,
  };
}
