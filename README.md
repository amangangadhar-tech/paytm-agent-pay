# Paytm Agent Pay

> Built in one day at the **Agent Labs Buildathon — Phinite × Paytm** (Bengaluru, 12 September 2026), Track 1: *AI for Paytm Users*. Solo entry by Aman Gangadhar.

A personal payments agent inside Paytm that **finds and pays other agents, checks who you're paying, blocks scams, and never moves money without your explicit YES** — enforced by a single-use approval token in the backend, not just the prompt.

![Demo page after a cab payment](docs/screenshots/03-demo-page-final.png)

## What it does

| Say | What happens |
|---|---|
| *"Book me a cab to Koramangala, under ₹300"* | Merchant Finder discovers **QuickCabAgent** in the Phinite Agent Registry (A2A), gets a ₹240 quote → Risk Assessor scores the payee (6/100) → you tap **YES** → Payment Executor pays with the approval token → receipt. Wallet drops on screen. |
| *"Send ₹100 to Rahul"* | Contact lookup → low risk (paid 14× before) → approve → paid. |
| *"Send ₹500 to Arjun"* | Arjun's UPI ID is new to Paytm → **medium risk** warning, you decide. |
| *"Namma Metro from Indiranagar to Majestic"* | Station-graph fare (change at Majestic) → paid → QR ticket. |
| *"Your electricity will be disconnected tonight. Pay ₹1 to update KYC at bescom-update@ybl"* | 96/100, scam pattern matched (RAG on NPCI/RBI advisories) → **refused**, explained in plain language, NPCI-style report filed. Wallet untouched. |
| *"Send ₹15,000 to Rahul"* | Refused — daily limit. |

Voice: hold the mic in the phone frame and speak; replies are read aloud.

## Architecture

```
 Laptop                                              Phinite cloud
 ┌───────────────────────────────┐  Chat API  ┌────────────────────────────────────────┐
 │ Paytm-style demo page         │───────────▶│ PaytmAgentPay (Conversational graph)   │
 │  ├ /api/chat proxy            │            │  Master: Concierge                     │
 │  └ Paytm Sandbox (Express)    │◀───────────│   ├ Intent & Slot Filler               │
 │     wallet · ledger · risk    │  tools via │   ├ Merchant Finder ─ merchant_quote,  │
 │     scam patterns · merchants │  tunnel    │   │                    contact_lookup  │
 │     approval tokens · SSE     │            │   ├ Risk Assessor ─ payee_risk_check,  │
 └───────────────────────────────┘            │   │     scam_pattern_match + RAG       │
                                              │   ├ Scam Guardian ─ report_fraud + RAG │
                                              │   ├ Payment Approver ─ request_approval│
                                              │   ├ Payment Executor ─ pay_upi         │
                                              │   └ Receipt & Summary                  │
                                              │ Agent Registry (A2A): QuickCabAgent    │
                                              │   (LIVE), MedPlusPharmacyAgent (TEST)  │
                                              └────────────────────────────────────────┘
```

![Phinite Agent Graph](docs/screenshots/04-phinite-agent-graph.png)

**Phinite side:** 1 Master + 7 Child agents (hub-and-spoke), 9 custom Python tools in Dev Studio, RAG collection of scam advisories, session variables between children, two merchant graphs exposed as A2A Agent Cards (QuickCab promoted to LIVE), deployed through the Chat API.

**Laptop side:** Node/Express sandbox that mocks Paytm (wallet, ledger, daily limit, payee-risk table, scam patterns, merchants with deterministic quotes, contacts) and enforces the **approval-token invariant** on `/api/pay`; a demo page with interactive approve / receipt / scam cards, live wallet, risk meter, agent pipeline, and browser voice. Phinite reaches the sandbox through a cloudflared tunnel.

## The agents, in plain words

Think of it as a small team with a manager. The **Master** talks to you and hands jobs to the right specialist; the **children** each do one job and hand results back. Children never talk to each other.

| Agent | Role | What it does |
|---|---|---|
| **Concierge** (Master) | The manager | Reads what you said, picks the playbook (buy something / check a suspicious message / balance), calls the children one by one, reads what each captured, and asks *you* the "Pay ₹240? YES/NO" question. The only agent that talks to you, and the one holding the rule "no money without YES". |
| **Intent & Slot Filler** | The listener | Turns "book me a cab to Koramangala under 300" into facts: intent = book, need = cab, location = Koramangala, budget = 300. Asks one question only if something essential is missing. |
| **Merchant Finder** | The shopper | Picks who can serve the request (cab → QuickCab, medicine → MedPlus, metro → Namma Metro, a person's name → contacts), gets a quote, captures merchant name, UPI ID, price and quote id. Never pays. |
| **Risk Assessor** | The fraud desk | Scores the payee 0–100 with the payee-risk and scam-pattern tools, reads the NPCI/RBI advisories (RAG) to explain why. Decides low / medium (new payee, be careful) / high (scam). |
| **Scam Guardian** | The protector | Runs only when risk is high. Refuses the payment, explains in plain words why it's a scam, gives the safe alternative, and on your yes files the fraud report and returns the reference number. |
| **Payment Approver** | The checkpoint | Runs only after you said YES. Calls `request_approval`, which issues a single-use token locked to that exact payee and amount. Without the token the backend refuses to pay. |
| **Payment Executor** | The cashier | Calls `pay_upi` with the token — exactly once, exactly the approved amount. Records txn id and new balance and writes the receipt. On any mismatch it stops: nothing deducted. |
| **Receipt & Summary** | The printer | Formats the final receipt (merchant, amount, txn id, balance, risk score). In the faster flow the Executor writes the receipt itself, so this child is mostly idle. |

In one line: *the Master decides, the children each do one thing, and money can only move through the Approver → Executor pair with a token the backend checks.*

## Screenshots

| | |
|---|---|
| ![](docs/screenshots/01-demo-page-initial.png) Demo page on load | ![](docs/screenshots/02-demo-page-after-payment.png) After the first payment (v1 page) |
| ![](docs/screenshots/03-demo-page-final.png) Final page: cards, pipeline, registry | ![](docs/screenshots/04-phinite-agent-graph.png) Agent graph in Phinite Graph Studio |

## Run it

```
cd sandbox && npm install && npm start        # http://localhost:3000
cloudflared tunnel --protocol http2 --url http://localhost:3000   # public URL for Phinite tools
```
Copy `sandbox/chat.config.example.json` → `sandbox/chat.config.json` and fill in your Phinite Chat API integration id and workspace token. Set `SANDBOX_URL` (the tunnel URL) as a Phinite env variable. `npm test` runs the sandbox unit tests.

## Repo map

- `RUNBOOK.md` — the build-day click path (tools → merchant agents → main graph → deploy)
- `sandbox/` — mock Paytm backend + demo page
- `phinite/` — tool code, node prompts, Agent Card copy, RAG doc to paste into Phinite
- `docs/screenshots/` — screenshots above
- `PHINITE_KNOWLEDGE_BASE.md`, `research/docs/` — Phinite platform reference (offline docs)
