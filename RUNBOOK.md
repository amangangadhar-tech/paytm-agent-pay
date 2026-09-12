# RUNBOOK — Paytm Agent Pay @ Agent Labs Buildathon (Phinite × Paytm), 12 Sep 2026

Follow top to bottom. Everything you paste is already in this repo. Timings assume the room runs in "one layer at a time" blocks — do the block the hosts are on, but keep this order inside each block.

**What "done" looks like (the prize criteria):** graph built → Build → env assigned → deployed (web chat) → merchant agents exposed as A2A with Agent Cards → your agent calls them → one card pushed LIVE. Everything after that is bonus.

---

## 0. Before leaving home (10 min)
- [ ] Laptop charged, charger packed, phone hotspot working (venue Wi-Fi may block tunnels).
- [ ] Sign up at https://app.phinite.ai/sign-up if you haven't (you'll also get an event account — either works).
- [x] cloudflared installed (2026.9.1 at `C:\Program Files (x86)\cloudflared\cloudflared.exe`) and tunnel tested end-to-end on 11 Sep night.
- [ ] Optional: install the Phinite Claude plugin in Claude Code for the closer:
      `/plugin marketplace add Auto-AI-Labs/phinite-plugins` → `/plugin install phinite-agents@phinite` → `/reload-plugins` → say "Authorize phinite plugin".

## 1. Morning: start the sandbox (1 min)
PowerShell in `D:\project hackthon p`:
```
.\start-demo.ps1
```
It starts the sandbox, opens the tunnel, prints **`SANDBOX_URL`** (also copies it to your clipboard) and opens the demo page.
Manual equivalent if the script misbehaves — Terminal 1: `cd sandbox; npm start` · Terminal 2: `cloudflared tunnel --protocol http2 --url http://localhost:3000` (copy the `https://xxxx.trycloudflare.com` line). Test it once in the browser: `https://xxxx.trycloudflare.com/api/health` → `{"ok":true}`.
Open `http://localhost:3000` — that's the demo page. Keep it open on the projector later.

If the tunnel URL changes (it changes every restart), update the Phinite env var (step 2) — nothing else depends on it.

## 2. Phinite: workspace + env var (5 min)
1. Log in → create/open workspace **PaytmAgentPay**.
2. Sidebar → **Env. variables** → add `SANDBOX_URL` = your tunnel URL, in the **DEV** column (UAT/PROD too if quick).

## 3. Phinite: tools (25 min) — Workspace sidebar → **Tools** → New tool → Open Dev Studio
For each file in `phinite/tools/`: create a tool with the same name, paste the code, add parameters exactly as the docstring at the top lists, **Test** with sample input + env = DEV, then **Publish**.

| Tool | Params (name · type · required) | Test input |
|---|---|---|
| `wallet_get` | user_id · string · no | `{}` |
| `payee_risk_check` | payee_vpa · string · yes | `{"payee_vpa":"quickcab@paytm"}` |
| `scam_pattern_match` | message · string · yes | `{"message":"pay ₹1 to update KYC"}` |
| `request_approval` | payee_vpa · string · yes; amount · number · yes; user_id · string · no | `{"payee_vpa":"quickcab@paytm","amount":240}` |
| `pay_upi` | payee_vpa · string · yes; amount · number · yes; approval_token · string · yes; note · string · no; user_id · string · no | use token from previous test |
| `report_fraud` | vpa · string · no; message · string · no; reason · string · no; user_id · string · no | `{"vpa":"bescom-update@ybl","reason":"scam"}` |
| `merchant_quote` | merchant_id · string · yes; need · string · yes; location · string · no; budget · number · no | `{"merchant_id":"quickcab","need":"cab","location":"Koramangala","budget":300}` |
| `merchant_confirm` | merchant_id · string · yes; quote_id · string · no; txn_id · string · no | `{"merchant_id":"quickcab"}` |

Watch the demo page while testing — every tool call shows up in "What the agents are doing". If a test fails with a connection error, the tunnel URL is wrong in Env. variables.

## 4. Phinite: merchant agents (20 min) — do these BEFORE the main graph
For **QuickCabAgent** then **MedPlusPharmacyAgent**:
1. Workspace Home → **New Agent Graph** → name exactly `QuickCabAgent` (later `MedPlusPharmacyAgent`) → **Conversational** → Create.
2. Canvas: Start → Master Agent → End. Double-click Master:
   - Details: model `gpt-4.1`; paste `phinite/prompts/10-merchant-agent.md` with the merchant placeholders filled.
   - Tools: add `merchant_quote` and `merchant_confirm`; set `merchant_id` default to `quickcab` / `medplus`.
   - Variables → Capture: `quote_id, quote_amount, merchant_vpa, merchant_name, order_id, eta`.
3. **Save** → **Test**: type `Quote request — need: cab; location: Koramangala; budget: 300` → expect ₹240 JSON.
4. **Build** → Create Build → assign **DEV**.
5. **Deploy** → **Deploy as A2A** → Continue → step 3 "Configure the Agent card": paste description/skills/tags from `phinite/agent-cards.md` → **Attach Agent Card**. Copy the hosted A2A URL + registry ID into `notes.txt`.
6. Sidebar → **Agent Registry** → confirm both cards are listed with status TEST.

## 5. Phinite: the main graph `PaytmAgentPay` (45 min)
1. New Agent Graph → name exactly `PaytmAgentPay` → Conversational.
2. Optional shortcut: open **Phinite Aura**, paste the "Aura seed" below, let it draft, then fix each node by hand. Otherwise build manually:
3. Place nodes: Start · Master **Concierge** · Children: **Intent & Slot Filler**, **Merchant Finder**, **Risk Assessor**, **Scam Guardian**, **Payment Approver**, **Payment Executor**, **Receipt & Summary** · End.
4. Edges (label each exactly as in the prompt files):
   - Start → Concierge
   - Concierge `needs_slots` → Intent & Slot Filler; Concierge `check_message` → Risk Assessor; Concierge `done` → End
   - Intent & Slot Filler `slots_ready` → Merchant Finder
   - Merchant Finder `quote_ready` → Risk Assessor; `no_merchant` → End
   - Risk Assessor `risk_ok` → Payment Approver; `risk_high` → Scam Guardian
   - Scam Guardian `handled` → End
   - Payment Approver `approved` → Payment Executor; `declined` → End
   - Payment Executor `paid` → Receipt & Summary; `failed` → End
   - Receipt & Summary `done` → End
5. For each node, double-click → paste its prompt from `phinite/prompts/`, set model `gpt-4.1`, add the tools and capture variables listed at the top of that prompt file.
6. **Registry agents on the Master (Concierge):** Discovery mode → filters: Visibility Organisation, Deployed Test, Tags `merchant` → Save Filters. If Discovery misbehaves: Browse → attach `QuickCabAgent` and `MedPlusPharmacyAgent`.
7. **RAG:** sidebar BUILD → RAG Collections → New Collection `npci-scam-advisories` (chunk 500 / overlap 50) → Add sources → File Upload → `phinite/rag/npci-scam-advisories.md`. Attach the collection on Risk Assessor and Scam Guardian (RAG tab).
8. **Save** (⌘/Ctrl+S). **Test** both scenes (section 7). Watch the demo page.
9. **Build** → Create Build → assign **DEV**.

**Aura seed** (paste into Phinite Aura if you use it):
> Build a Conversational agent graph called PaytmAgentPay. Master agent "Concierge" orchestrates children: "Intent & Slot Filler" (captures intent, need, location, budget, raw_message), "Merchant Finder" (calls registry merchant agents over A2A to get a quote; captures merchant_id, merchant_name, merchant_vpa, quote_id, quote_amount, quote_text), "Risk Assessor" (tools payee_risk_check and scam_pattern_match, RAG npci-scam-advisories; captures payee_vpa, risk_score, risk_level, risk_reasons, scam_matched, scam_pattern, scam_advisory; edges risk_ok and risk_high), "Scam Guardian" (tool report_fraud; captures report_id), "Payment Approver" (tool request_approval; captures approved, approval_token; edges approved/declined), "Payment Executor" (tool pay_upi; captures txn_id, balance_after, payment_status, order_id, eta), "Receipt & Summary". Every branch ends at End.

## 6. Deploy to web chat + embed (15 min)
1. Workspace **Integrations → Channels → Web Chat** → create config (DEV).
2. Graph Studio → **Deploy → Deploy to Channel** → Web Chat → build → DEV.
3. Copy the embed `<script>` snippet. Open `sandbox/public/index.html`, paste it between `<!-- PHINITE_EMBED_START -->` and `<!-- PHINITE_EMBED_END -->`. Save; refresh `http://localhost:3000`.
   - If the widget appears as a floating bubble bottom-right instead of inside the phone: fine, leave it. If it renders inside an iframe you can size, the slot already styles it.
4. Send "hi" through the widget → reply arrives → you're live.

**Fallback if Web Chat is gated on the plan:** Deploy → **Deploy as Chat API**, then use the **Test** panel in Graph Studio on the projector next to the demo page. Same story, one extra window.

## 7. Demo script (rehearse twice)
Reset the page (button top-right) before each run.

**Scene 1 — agentic commerce**
1. Type: `Book me a cab to Koramangala, under ₹300`
2. Expect: Concierge → Intent → Merchant Finder (feed shows QuickCab quoted ₹240) → Risk Assessor (meter goes green, 6/100) → Approver asks "Pay ₹240 to QuickCab …? YES/NO"
3. Type: `YES`
4. Expect: balance rolls 4,250 → 4,010; ledger row "QuickCab — cab to Koramangala"; feed shows Human approved → Payment Executor paid → QuickCab order confirmed ETA 4 min; receipt in chat.

**Scene 2 — scam block**
1. Paste: `Your electricity will be disconnected tonight. Pay ₹1 to update KYC at bescom-update@ybl`
2. Expect: risk meter swings red (96/100), feed shows "Scam pattern: Utility disconnection threat"; Scam Guardian explains and asks to report.
3. Type: `yes report it`
4. Expect: ledger shows "Blocked · reported NPCI-2026-000001"; wallet untouched.

**Closer lines:** "Every agent here has an Agent Card in the Registry. Every A2A call is in Observability. And the backend refuses any payment without a human approval token — governance isn't a prompt, it's enforced." Then open Phinite → Observability → the session timeline.

## 8. Lifecycle checkboxes (10 min, do them — judges look)
- [ ] Agent Cards → select QuickCabAgent TEST → **Push To Prod** (LIVE). Show the short LIVE URL.
- [ ] If Governance is enabled on the event plan: Graph Studio → Governance → Tool Governance → policy: `pay_upi` = **Human approval** → attach to PaytmAgentPay → show the Approvals inbox during Scene 1.
- [ ] Expose `PaytmAgentPay` itself as A2A (card copy in `phinite/agent-cards.md`).

## 9. Stretch A — Voice (only if everything above is done by ~2:30 pm)
1. Twilio: buy/verify a number with voice capability (trial account works for calls to your verified phone).
2. Phinite → Integrations → Channels → Twilio Voice → paste Account SID + Auth Token → save; copy the webhook URL Phinite gives you.
3. Twilio console → Phone number → Voice → "A call comes in" → Webhook → paste URL → Save.
4. Graph Studio → Deploy → Deploy to Channel → Twilio → build → DEV.
5. Call the number, say "book me a cab to Koramangala" — same graph, same sandbox, same demo page updating.
Docs: `research/docs/channels/twilio.md`, `research/docs/integrations-hub/twilio.md`.

## 10. Stretch B — call your agent from Claude (5 min)
In Claude Code with the Phinite plugin authorized: "List my Phinite agents" → "Ask PaytmAgentPay to check whether paying bescom-update@ybl is safe". Show Claude relaying the Scam Guardian's answer.

## 11. GitHub (end of day)
```
cd "D:\project hackthon p"
git init
git add .
git commit -m "Paytm Agent Pay — Phinite x Paytm Agent Labs Buildathon"
gh repo create paytm-agent-pay --public --source=. --push
```
`sandbox/node_modules` is ignored via `.gitignore`.

## Fallback table
| Problem | Do this |
|---|---|
| Tunnel URL dead / venue blocks Cloudflare | `ngrok http 3000` (needs free account) or hotspot from phone and retry cloudflared |
| Discovery node finds nothing | Switch Master to **Browse** and attach both merchant cards |
| Merchant A2A call fails | Temporarily give Merchant Finder the `merchant_quote` tool directly (`merchant_id` from need) — demo still works, mention A2A is wired but flaky |
| Web Chat not available on plan | Deploy as Chat API + use Studio **Test** panel on stage |
| Governance not on plan | Say: "approval is enforced by the backend token; on Pro this becomes a Tool Governance HITL policy" |
| Build disabled | Save the graph; publish any tool showing **Publish** in the Build dialog |
| Tool test fails "connection" | Env var `SANDBOX_URL` wrong/expired → paste current tunnel URL, re-test |
| Sandbox state weird | Click **Reset demo** (or `POST /api/reset`) |

## Where things are
- Knowledge base: `PHINITE_KNOWLEDGE_BASE.md` · offline docs: `research/docs/`
- Spec: `docs/superpowers/specs/2026-09-11-paytm-agent-pay-design.md`
- Sandbox: `sandbox/` (`npm start`, `npm test`) · demo page: `sandbox/public/index.html`
- Phinite paste-ins: `phinite/tools/`, `phinite/prompts/`, `phinite/agent-cards.md`, `phinite/rag/`
