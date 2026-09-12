# Paytm Agent Pay — Tonight's Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A locally runnable Paytm Sandbox backend + demo page, plus every Phinite asset (tools, prompts, Agent Card copy, RAG doc, runbook) pre-written so tomorrow is copy-paste.

**Architecture:** One Express server (`sandbox/server.js`) holds in-memory state (`sandbox/state.js`), exposes the JSON API (`sandbox/routes.js`), broadcasts changes over SSE (`sandbox/events.js`), and serves `sandbox/public/index.html`. Pure logic (risk scoring, scam matching, quotes, approval tokens) lives in `sandbox/lib/*.js` so it is unit-testable with `node --test`. Phinite-side assets are plain files under `phinite/`.

**Tech Stack:** Node 20+, Express 4, vanilla HTML/CSS/JS, `node:test`. No DB, no build step.

**Spec:** `docs/superpowers/specs/2026-09-11-paytm-agent-pay-design.md`

## Global Constraints
- No git commits/pushes tonight (user creates GitHub tomorrow). Steps say "verify" instead of "commit".
- Server listens on `PORT` env or 3000. All API under `/api`. All JSON.
- `/api/pay` MUST reject any request without a valid, unused `approvalToken` bound to the same `payeeVpa` + `amount`.
- Seed user id `aman`, balance 4250, daily limit 10000.
- Quotes must be deterministic (same input → same amount).

---

## File structure

```
sandbox/
  package.json            scripts: start, test
  server.js               boots express, mounts routes, static, SSE
  state.js                seed() + module-level state object
  events.js               SSE hub: addClient(res), broadcast(type, payload)
  routes.js               all /api handlers (thin; calls lib)
  lib/risk.js             scoreVpa(vpa, state) → {score, level, reasons, ...}
  lib/scam.js             matchPatterns(text, patterns) → {matched, patterns}
  lib/quote.js            quote(merchant, {need, location, budget}) → {...}
  lib/approval.js         issueToken(state, ...) / consumeToken(state, ...)
  test/*.test.js          node:test unit tests for lib/
  public/index.html       demo page (phone frame + live panel)
phinite/
  tools/*.py              7 Dev Studio tools
  prompts/*.md            Master + 6 children + merchant prompt
  agent-cards.md          Agent Card names/descriptions/skills/tags
  rag/npci-scam-advisories.md
RUNBOOK.md
```

---

### Task 1: State, seed data, and SSE hub

**Files:**
- Create: `sandbox/package.json`, `sandbox/state.js`, `sandbox/events.js`

**Interfaces:**
- Produces: `state.js` exports `{ state, seed }` where `seed()` resets `state` to `{ users, merchants, payees, scamPatterns, ledger, reports, tokens, agentLog, seededAt }`. `events.js` exports `{ addClient(res), broadcast(type, payload) }`.

- [ ] **Step 1: package.json**
```json
{ "name": "paytm-sandbox", "private": true, "type": "module",
  "scripts": { "start": "node server.js", "test": "node --test test/" },
  "dependencies": { "express": "^4.19.2" } }
```
- [ ] **Step 2: state.js** with seed data from spec §4 (users, 3 merchants, trusted + bad payees, 6 scam patterns, empty ledger/reports/tokens/agentLog).
- [ ] **Step 3: events.js** — keep `Set` of SSE responses; `broadcast` writes `event: <type>\ndata: <json>\n\n` to each; remove on `close`.
- [ ] **Step 4: verify** — `node -e "import('./state.js').then(m=>{m.seed();console.log(m.state.users.aman.balance)})"` prints 4250.

### Task 2: Pure logic libs with tests (TDD)

**Files:**
- Create: `sandbox/lib/risk.js`, `sandbox/lib/scam.js`, `sandbox/lib/quote.js`, `sandbox/lib/approval.js`
- Test: `sandbox/test/risk.test.js`, `scam.test.js`, `quote.test.js`, `approval.test.js`

**Interfaces:**
- `scoreVpa(vpa, payees) → { vpa, score, level, reasons, firstSeen, complaintCount, verified }`; level = score≥70 high, ≥35 medium, else low; unknown VPA → deterministic score 35–65 from string hash, reason "No transaction history".
- `matchPatterns(text, patterns) → { matched, patterns: [{id,name,advisory,confidence}] }`; a pattern matches if ≥1 of its `keywords` (case-insensitive) appears; confidence = matchedKeywords/keywords.length rounded 2dp; sorted desc.
- `quote(merchant, {need, location, budget}) → { merchantId, vpa, amount, currency:"INR", description, quoteId, withinBudget }`; cab: 120 + 15*km where km from `DISTANCES` keyword table (default 6); pharmacy: sum of matched items from `merchant.catalog` (default single item 50); quoteId = `q_` + short hash of merchantId+need+location.
- `issueToken(state, {userId, payeeVpa, amount}) → { approvalToken, expiresAt }` (10 min); `consumeToken(state, {approvalToken, payeeVpa, amount}) → { ok, error? }` — single use, must match vpa+amount, not expired.

- [ ] **Step 1: write failing tests** (known-good vpa low, known-bad high, unknown medium+deterministic; scam text matches "electricity"/"₹1"/"KYC"; benign text no match; cab Koramangala = 240 twice; token required/mismatch/single-use/expired).
- [ ] **Step 2: run `npm test` → fails (modules missing).**
- [ ] **Step 3: implement libs.**
- [ ] **Step 4: run `npm test` → all pass.**

### Task 3: Routes + server

**Files:**
- Create: `sandbox/routes.js`, `sandbox/server.js`

**Interfaces:**
- Consumes Task 1 & 2 exports. Implements every route in spec §3 exactly (paths, bodies, status codes 403/402/404).
- Every state change calls `broadcast`: `wallet` (user), `ledger` (txn), `risk` (scoreVpa result), `agent` ({agent, action, detail, ts}), `report`, `reset`.

- [ ] **Step 1: write routes.js** (thin handlers).
- [ ] **Step 2: write server.js** — `express.json()`, `/api` router, `express.static('public')`, `GET /api/events` SSE with heartbeat every 25 s, listen on PORT.
- [ ] **Step 3: verify with curl** — start server; `GET /api/wallet/aman` → 4250; `POST /api/pay` without token → 403; `POST /api/approve` then `/api/pay` → 200, balance 4010; `GET /api/risk/bescom-update@ybl` → level high; `GET /api/scam-patterns?q=electricity%20disconnected%20pay%20₹1%20KYC` → matched true; `POST /api/reset` → balance back to 4250.

### Task 4: Demo page

**Files:**
- Create: `sandbox/public/index.html`

- [ ] **Step 1: layout** — two columns (stack under 900px): left phone frame (Paytm-blue header "Paytm · Agent Pay", body = `<div id="phinite-slot">` with placeholder text and a comment showing where to paste the Phinite embed snippet); right panel: wallet card, risk card, agent activity feed, ledger list, Reset button.
- [ ] **Step 2: JS** — on load fetch wallet/ledger; open `EventSource('/api/events')`; handlers per event type; balance count-up/down animation; risk card color by level; feed prepends rows; Reset posts `/api/reset` and reloads panels.
- [ ] **Step 3: verify** — open `http://localhost:3000`, run the Task 3 curl sequence in another shell, watch balance/ledger/risk/feed update live without refresh.

### Task 5: Phinite assets

**Files:**
- Create: `phinite/tools/{wallet_get,payee_risk_check,scam_pattern_match,request_approval,pay_upi,report_fraud,merchant_quote}.py`, `phinite/prompts/{00-concierge-master,01-intent-slot-filler,02-merchant-finder,03-risk-assessor,04-scam-guardian,05-payment-approver,06-payment-executor,07-receipt-summary,10-merchant-agent}.md`, `phinite/agent-cards.md`, `phinite/rag/npci-scam-advisories.md`

- [ ] **Step 1: tools** — each `def main(inputs, env_variables)` using `requests`, base URL `env_variables.get("SANDBOX_URL")`, returns `{"output":…, "captured_variables":…}`, try/except returning `{"output":{"error":…}}`; each posts an `/api/agent-event` line for the live feed. Parameter schema documented in a docstring at top of each file (name, type, description) for the Dev Studio parameter form.
- [ ] **Step 2: prompts** — Markdown, each states role, inputs (session variables), tools to call and when, capture variables to emit, exact edge label to route on, output style (short, Hindi-English friendly).
- [ ] **Step 3: agent-cards.md** — name/description/skills(input/output `text/plain`, `application/json`)/tags/visibility for QuickCab, MedPlus, and PaytmAgentPay.
- [ ] **Step 4: RAG doc** — ~1 page: 6 scam patterns with red flags + what to do, in NPCI/RBI advisory tone.
- [ ] **Step 5: verify** — `python -m py_compile phinite/tools/*.py` passes; run one tool locally against the sandbox with a stub `env_variables` dict.

### Task 6: RUNBOOK.md

- [ ] **Step 1: write** — tonight checklist (signup, plugin), morning start (`npm start`, `cloudflared tunnel --url http://localhost:3000`, copy URL → Phinite env var `SANDBOX_URL` DEV), then numbered Phinite click path per spec §1 order, demo script (spec §… scene 1/2), fallback table (Discovery→Browse, Web Chat blocked→Chat API+tiny JS, Pro missing→conversational approval only), voice stretch steps (Twilio), Claude plugin closer.
- [ ] **Step 2: verify** — every URL/path in the runbook exists in `research/docs` or in this repo.

---

## Self-review
- Spec coverage: §2 → Task 5; §3 → Tasks 1–3; §4 → Task 1; §5 → Task 4; §6 → Task 2/3; §7 respected. ✔
- Placeholders: none. Type names consistent (`scoreVpa`, `matchPatterns`, `quote`, `issueToken`, `consumeToken`, `broadcast`). ✔
