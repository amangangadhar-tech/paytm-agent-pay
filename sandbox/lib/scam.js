// Keyword-based scam pattern matcher over state.scamPatterns.

export function matchPatterns(text, patterns) {
  const t = String(text || '').toLowerCase();
  if (!t) return { matched: false, patterns: [] };
  const hits = [];
  for (const p of patterns) {
    const found = p.keywords.filter((k) => t.includes(k.toLowerCase()));
    if (found.length) {
      hits.push({
        id: p.id,
        name: p.name,
        advisory: p.advisory,
        matchedKeywords: found,
        confidence: Math.round((found.length / p.keywords.length) * 100) / 100,
      });
    }
  }
  hits.sort((a, b) => b.confidence - a.confidence || b.matchedKeywords.length - a.matchedKeywords.length);
  return { matched: hits.length > 0, patterns: hits };
}
