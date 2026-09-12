# Paytm Agent Pay — Design Spec

**Event:** Agent Labs Buildathon: Phinite × Paytm, Bengaluru, 2026-09-12. Track 1 (AI for Paytm Users). Solo.
**Pitch:** A personal payments agent inside Paytm that finds and pays *other agents* over A2A, risk-checks every payee, blocks scams, and never moves money without a human approval token.

## 1. Components

| Component | Where | When built |
|---|---|---|
| `PaytmAgentPay` agent graph (Master + 6 Children) | Phinite Graph Studio | Tomorrow |
| `QuickCabAgent`, `MedPlusPharmacyAgent` (A2A merchant agents) | Phinite, exposed via Agent Cards | Tomorrow |
| 7 Python custom tools | Phinite Dev Studio (pre-written in `phinite/tools/`) | Tomorrow (paste) |
| Prompts, Agent Card copy, RAG advisory doc | `phinite/prompts/`, `phinite/agent-cards.md`, `phinite/rag/` | Tonight |
| Paytm Sandbox backend (mock wallet/ledger/risk/merchants) | `sandbox/` — Node + Express, in-memory | Tonight |
| Demo page (phone frame + Phinite web chat embed + live panel) | `sandbox/public/index.html`, served by the same server | Tonight |
| `RUNBOOK.md` — tomorrow's exact click path | repo root | Tonight |

Runs locally with `npm start` on `http://localhost:3000`. Tomorrow it gets a public URL via a Cloudflare quick tunnel (`cloudflared tunnel --url http://localhost:3000`, no account) so Phinite tools can reach it. Vercel is an alternative but in-memory state + SSE across serverless instances is unreliable for a live demo; tunnel is the primary path.

## 2. Agent graph (Phinite)

```
Start → Master "Concierge"
  Child "Intent & Slot Filler"    captures: intent(pay|book|check|report), need, location, budget, raw_message
  Child "Merchant Finder"          Discovery registry node (tags: merchant) → A2A get_quote → captures: merchant_id, merchant_vpa, amount, quote_text
  Child "Risk Assessor"            tools: payee_risk_check, scam_pattern_match; RAG: npci-scam-advisories → captures: risk_score, risk_level, risk_reasons
     edge risk_high → Child "Scam Guardian"  tool: report_fraud → End
     edge risk_ok   → Child "Payment Approver"  tool: request_approval → captures: approval_token, approved
  Child "Payment Executor"         tools: pay_upi, (A2A confirm_order to merchant) → captures: txn_id
  Child "Receipt & Summary" → End
```
Fallback: Browse mode pinned to both merchant cards if Discovery misbehaves.
Approval: conversational YES + backend `approval_token` (always). Tool Governance HITL policy on `pay_upi` only if Pro is enabled on the event account.

## 3. Sandbox backend API (all JSON, no auth)

| Method & path | Body / query | Returns |
|---|---|---|
| `GET /api/wallet/:userId` | | `{userId, name, balance, dailyLimit, dailySpent}` |
| `GET /api/ledger/:userId` | | `{transactions: [...]}` newest first |
| `GET /api/risk/:vpa` | | `{vpa, score, level(low|medium|high), reasons[], firstSeen, complaintCount, verified}` |
| `GET /api/scam-patterns` | `?q=<message>` | `{matched: bool, patterns: [{id, name, advisory, confidence}]}` |
| `GET /api/merchants` | `?tag=cab` | `{merchants: [{id, name, vpa, tags[], skills[]}]}` |
| `POST /api/merchants/:id/quote` | `{need, location, budget}` | `{merchantId, vpa, amount, currency, description, quoteId, withinBudget}` |
| `POST /api/approve` | `{userId, payeeVpa, amount}` | `{approvalToken, expiresAt}` (token valid 10 min, single use) |
| `POST /api/pay` | `{userId, payeeVpa, amount, note, approvalToken}` | `{txnId, status:"SUCCESS", balanceAfter}`; 403 if token missing/invalid/mismatched amount+payee; 402 if insufficient balance |
| `POST /api/fraud-report` | `{userId, vpa, message, reason}` | `{reportId (NPCI-style), status:"FILED"}` |
| `POST /api/merchants/:id/confirm` | `{quoteId, txnId}` | `{orderId, status:"CONFIRMED", eta}` |
| `POST /api/agent-event` | `{agent, action, detail}` | `{ok}` — agents post activity for the live feed |
| `GET /api/events` | | SSE stream: `wallet`, `ledger`, `risk`, `agent`, `report`, `reset` events |
| `POST /api/reset` | | reseeds state |
| `GET /api/health` | | `{ok, seededAt}` |

**Invariant:** `/api/pay` never succeeds without a valid `approvalToken` bound to the same `payeeVpa` + `amount`. Enforced in the backend.

Unknown VPAs get a synthesized medium-risk profile (deterministic hash) so any input works on stage.

## 4. Seed data
- User `aman`: Aman, balance ₹4,250, daily limit ₹10,000.
- Merchants: `quickcab` (QuickCab, `quickcab@paytm`, tags cab/ride/merchant), `medplus` (MedPlus Pharmacy, `medplus@paytm`, tags pharmacy/medicine/merchant), `chaipoint` (decoy, tags food/merchant).
- Trusted payees: merchants above (score ≤10, verified, thousands of txns).
- Bad payees: `bescom-update@ybl`, `refund-helpdesk@ybl`, `kyc-verify@okaxis`, `lucky-draw@ibl` (score ≥85, complaints 20–60, first seen days ago).
- Scam patterns: utility disconnection, ₹1 KYC/refund, lottery/lucky draw, "share OTP", fake customer care, job fee.
- Quote rules: cab = ₹120 base + ₹15/km with distance table by location keyword (Koramangala 8 km → ₹240); pharmacy = fixed list (paracetamol ₹30, etc.).

## 5. Demo page
Single HTML file, vanilla JS, no build. Left: phone frame with Paytm-blue header, area for Phinite web chat embed (embed snippet injected from `window.PHINITE_EMBED` placeholder / a `<script>` slot). Right: wallet card (balance animates), ledger list, risk card (green/amber/red), agent activity feed, Reset button. All driven by `/api/events` SSE. Works standalone before the widget exists (shows placeholder "Phinite widget goes here").

## 6. Testing
`node --test` on the backend: pay requires token; token bound to vpa+amount; single use; insufficient funds; risk scoring for known good/bad/unknown VPAs; scam pattern match; quote determinism.

## 7. Out of scope tonight
Phinite graphs, Vercel deploy, GitHub push, voice channel (stretch tomorrow, steps in RUNBOOK).
