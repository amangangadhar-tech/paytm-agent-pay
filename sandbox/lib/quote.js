// Deterministic merchant quotes so the stage demo is repeatable.

export const DISTANCES = {
  koramangala: 8, indiranagar: 10, hsr: 6, 'hsr layout': 6, whitefield: 22, airport: 35,
  'mg road': 12, jayanagar: 9, marathahalli: 14, electronic: 18, 'electronic city': 18,
  bellandur: 7, btm: 5, 'btm layout': 5, majestic: 13, hebbal: 20, yelahanka: 25,
};
const DEFAULT_KM = 6;

// Typo/voice-tolerant place matching: exact substring first, then a consonant-skeleton
// comparison so "indranagar", "kormangala", "white field" still resolve.
const skel = (x) => String(x).toLowerCase().replace(/[^a-z]/g, '').replace(/(?!^)[aeiou]/g, '');
export function findPlace(text, keys) {
  const t = String(text).toLowerCase();
  const hits = []; // [key, position]
  for (const k of keys) { const i = t.indexOf(k); if (i >= 0) hits.push([k, i]); }
  const words = t.replace(/[^a-z ]/g, ' ').split(/ +/).filter((w) => w.length > 3);
  for (let i = 0; i < words.length; i++) {
    for (const span of [words[i], words[i] + ' ' + (words[i + 1] || '')]) {
      const sk = skel(span);
      const k = keys.find((key) => skel(key) === sk || (sk.length > 4 && (skel(key).startsWith(sk) || sk.startsWith(skel(key)))));
      if (k && !hits.some(([h]) => h === k)) hits.push([k, t.indexOf(words[i])]);
    }
  }
  // drop keys that are substrings of a longer matched key at the same spot (e.g. "btm" inside "btm layout")
  const keep = hits.filter(([k, pos]) => !hits.some(([o, p2]) => o !== k && o.includes(k) && Math.abs(p2 - pos) <= 1));
  return keep.sort((x, y) => x[1] - y[1]).map(([k]) => k);
}

function shortHash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) >>> 0;
  return h.toString(36).slice(0, 8);
}

export function quote(merchant, { need = '', location = '', budget } = {}) {
  const needL = String(need).toLowerCase();
  const locL = String(location).toLowerCase().trim();
  let amount;
  let description;

  if (merchant.kind === 'cab') {
    // Destination may arrive in `location` or buried in `need` ("cab to Koramangala").
    const key = findPlace(locL, Object.keys(DISTANCES))[0] || findPlace(needL, Object.keys(DISTANCES))[0];
    const km = key ? DISTANCES[key] : DEFAULT_KM;
    const dest = key ? key.charAt(0).toUpperCase() + key.slice(1) : (location || 'destination');
    amount = merchant.baseFare + merchant.perKm * km;
    description = `${merchant.name} ride to ${dest} (~${km} km): ₹${merchant.baseFare} base + ₹${merchant.perKm}/km`;
  } else if (merchant.kind === 'metro') {
    const text = `${needL} ${locL}`;
    const found = findPlace(text, Object.keys(merchant.stations)); // exact (in text order) or typo-tolerant
    const from = found[0], to = found.find((x) => x !== from);
    if (from && to) {
      const [la, ia] = merchant.stations[from];
      const [lb, ib] = merchant.stations[to];
      const hops = la === lb ? Math.abs(ia - ib) : Math.abs(ia) + Math.abs(ib);
      amount = Math.min(60, 10 + 5 * hops);
      const cap = (x) => x.split(' ').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      description = `${merchant.name} QR ticket ${cap(from)} → ${cap(to)} (${hops} stops${la !== lb ? ', change at Majestic' : ''})`;
    } else {
      amount = 30;
      description = `${merchant.name} QR ticket (stations unclear, standard fare)`;
    }
  } else if (merchant.kind === 'recharge') {
    const raw = `${needL} ${locL}`;
    const digits = (raw.match(/\d{10}/) || [])[0];
    const text = digits ? raw.replace(digits, ' ') : raw;   // don't mistake the phone number for the amount
    const m = text.match(/(\d{2,4})/);
    const asked = m ? Number(m[1]) : (budget ? Number(budget) : 0);
    const plans = Object.keys(merchant.plans).map(Number);
    // exact plan if named, else the closest plan at or below the amount, else cheapest
    const pick = plans.includes(asked) ? asked : (plans.filter((p) => p <= asked).pop() ?? plans[0]);
    amount = pick;
    description = `${merchant.operator} prepaid ₹${pick} — ${merchant.plans[pick]}${digits ? ` for ${digits}` : ''}`;
  } else {
    const items = Object.entries(merchant.catalog || {}).filter(([name]) => needL.includes(name));
    if (items.length) {
      amount = items.reduce((s, [, p]) => s + p, 0);
      description = `${merchant.name}: ${items.map(([n, p]) => `${n} ₹${p}`).join(', ')}`;
    } else {
      amount = 50;
      description = `${merchant.name}: standard item ₹50`;
    }
  }

  const quoteId = 'q_' + shortHash(`${merchant.id}|${needL}|${locL}`);
  const withinBudget = budget == null || budget === '' ? true : amount <= Number(budget);
  return {
    merchantId: merchant.id,
    merchantName: merchant.name,
    vpa: merchant.vpa,
    amount,
    currency: 'INR',
    description,
    quoteId,
    withinBudget,
  };
}
