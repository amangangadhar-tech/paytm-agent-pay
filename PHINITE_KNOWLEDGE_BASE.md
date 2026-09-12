# Phinite.ai — Complete Knowledge Base (Hackathon Reference)

> Compiled 2026-09-11 from https://www.phinite.ai, https://docs.phinite.ai (all 210 pages, saved offline in `research/docs/`), the Phinite blog, pricing page, the Agent Labs Buildathon event page, and the `Auto-AI-Labs/phinite-plugins` GitHub repo.

---

## 1. What Phinite is (one paragraph)

Phinite is a **cloud-agnostic "operating system" for multi-agent AI**. You **design** multi-agent workflows ("Agent Graphs") on a visual canvas, freeze them into immutable **Builds**, assign builds to **DEV / UAT / PROD** environments, and **deploy** them to channels (web chat, WhatsApp, Slack, Teams, voice, email), HTTP APIs, cron schedules, or expose them as **A2A agents** in an **Agent Registry** so other agents (including Claude) can call them. It bundles observability (traces, cost per agent), governance (RBAC, human-in-the-loop approval gates, tool policies, guardrails), and evaluations, with **no vendor lock-in** on cloud or LLM (BYOK/BYOM).

Tagline: *"The Operating System for Multi-Agent AI."* Company: Phinite.ai (Auto-AI-Labs on GitHub). Bengaluru presence; co-founders include Shashank Somal / Swapnil Somal.

---

## 2. Platform pillars (5-stage lifecycle, 4 modules)

| Stage | What it means |
|---|---|
| **Design** | Agent graphs, tools, prompts on a visual canvas (Graph Studio) |
| **Deploy** | Versioned releases, rollback, multi-environment |
| **Observe** | Traces, latency, cost per agent, session logs |
| **Govern** | RBAC, audit trails, human approval gates, spend limits |
| **Evaluate** | Benchmarks, custom scoring, regression testing, production replay |

| Module | Purpose |
|---|---|
| **Agent Graph Studio** | Visual canvas — Master/Child agents, tools, conditional branching, parallel paths, HITL checkpoints, Phinite Aura (AI copilot that drafts graphs from natural language) |
| **Dev Studio** | Write reusable **Python tools**, test against DEV/UAT/PROD env vars, publish versioned |
| **Evaluation** | Test agents vs scenarios, replay production traffic, custom metrics (Pro+) |
| **Governance** | Tool policies (Allow / Human approval / Deny), HITL, guardrails (Pro+) |

**90+ integrations** (Slack, Salesforce, Jira, Gmail, HubSpot, MongoDB, GitHub, Razorpay, Shopify, Twilio, WhatsApp, Telegram, MCP servers, etc.).

---

## 3. Core concepts / glossary

| Term | Meaning |
|---|---|
| **Workspace** | Container for graphs, tools, integrations, users. RBAC is per-workspace. |
| **Agent Graph** | Visual decision graph of nodes (was called "Assistant" in old docs) |
| **Conversational graph** | Real-time chat/voice with a live user → deploy to Channel, Chat API, or A2A |
| **Autonomous graph** | Background run, no live user → deploy as API trigger, Cron, (A2A coming soon) |
| **Node** | Start · Master Agent · Child Agent · Tool · End · Registry agent (Browse/Discovery) |
| **Master Agent** | Orchestrator. Tabs: Details / RAG / Tools / Variables. Can attach registry agents. |
| **Child Agent** | Delegated specialist. Same tabs + "Purpose of this child agent". |
| **Tool node** | Runs a published tool with no LLM step |
| **Tool** | Custom (Python in Dev Studio), System (RAG Tool, Finish Tool, End Agent Graph Tool, Agent Graph Insight Tool), Predefined (Integrations Hub) |
| **Build** | Immutable snapshot: graph version + pinned tool versions (+ RAG) |
| **Environment** | DEV / UAT / PROD — each has its own env variables/secrets |
| **Channel** | Messaging ingress: web chat, WhatsApp, Slack, Teams, Twilio voice, email |
| **Trigger** | Webhook (API), Background Task, or Cron that starts an Autonomous run (replaces legacy "Intents") |
| **Session** | One execution; logged with inputs, decisions, timeline, variables, token usage |
| **Variables** | Graph/flow vars · Node **Input** vars · Node **Capture** vars (LLM extracts) · Session vars (user_variables from API, tool `captured_variables`) |
| **RAG Collection** | Workspace knowledge (files, URLs, Notion, Confluence, Drive, SharePoint); attach whole collection to a node; set chunk size/overlap, threshold, top-k |
| **Agent Card** | A2A public identity: name, description, skills (input/output MIME modes), tags, visibility (public / organisation) |
| **Agent Registry** | Workspace catalog of Agent Cards + hosted A2A URLs |
| **Browse mode** | Master Agent calls one specific registry agent (`a2aregistryid`) |
| **Discovery mode** | Master Agent auto-selects registry agents at runtime by saved filters (one Discovery per Master) |
| **Phinite Aura** | In-studio AI assistant: drafts graphs, refines prompts |
| **BYOK / BYOM** | Bring your own provider key / bring your own model endpoint (Models → Model Keys / Custom Models) |

**Roles:** Superadmin, Admin, Developer, Tester, Viewer (+ Analyst/Architect personas). Publishing tools/graphs is usually Admin+ (Developers when policy allows).

---

## 4. The Golden Path (memorize this)

```
Design in Graph Studio → Save → Build → Assign Environment (DEV→UAT→PROD) → Deploy  (or Expose as A2A)
```

### Step-by-step (from Quickstart)
1. **Workspace Home → New Agent Graph** → name, description → choose **Conversational** or **Autonomous**.
2. Graph Studio opens. Skeleton: **Start → Master Agent → End**. Add Child Agents / Tool nodes. Wire handles (Start: 1 outbound; End: 1 inbound).
3. Double-click agent → drawer:
   - **Details**: Orchestration Model (e.g. `gpt-4.1`, `gemini-2.5-pro`), Agent Task Prompt (Markdown), Refine Prompt (Aura).
   - **Tools**: Add from Workspace tools / Integrations / MCP Servers; map inputs.
   - **RAG**: attach collections or files.
   - **Variables**: Input Variables (pick from session), Capture Variables (create).
4. **Conditional edges**: multiple labeled outbound edges from an agent (e.g. `delegate_flight_search`); orchestrator picks a path from capture/session state. Every branch must reach **End**.
5. **Save** (⌘+S). **Test** (chat/voice/autonomous test drawer) — see node-by-node timeline.
6. **Build** → validates, pins tool versions (unpublished tools show **Publish**), add description → **Create Build**.
7. **Assign** build to **DEV**.
8. **Deploy**:
   - Conversational: **Deploy as A2A** · **Deploy to Channel** · **Deploy as Chat API**
   - Autonomous: **Deploy as API** · **Cron job** · (A2A coming soon)
9. Promote to UAT / PROD.

**Troubleshooting:** Build disabled → Save first / publish tools. Deploy disabled → need ≥1 build. Test fails → tools unpublished or DEV env vars missing. Integration limit → plan upgrade.

---

## 5. Custom tools (Dev Studio) — the Python contract

```python
def main(inputs, env_variables):
    # inputs: session variables (user vars, captured vars, API payload)
    # env_variables: DEV/UAT/PROD secrets  -> env_variables.get("API_KEY")
    try:
        product_id = inputs.get("product_id")
        api_key = env_variables.get("INVENTORY_API_KEY")
        return {
            "output": {"stock": 42, "product_name": "Example"},     # returned to calling agent
            "captured_variables": {"current_stock": 42}             # stored on session
        }
    except Exception as e:
        return {"output": {"error": str(e)}, "captured_variables": {}}
```

- Lifecycle: Draft → Test (Test tab, pick DEV/UAT/PROD) → **Publish** (immutable version + release notes) → attach in Graph Studio → Build pins it.
- Dev Studio has a **Copilot** to scaffold tools, or write manually.
- Define parameter types/descriptions so the agent knows how to call it.
- Never hardcode secrets; never put real secrets in test inputs.

### Predefined tools (Integrations Hub)
Integrations → Predefined tools → vendor → **+ Add Configuration** → save connection → in Graph Studio node Tools tab pick the integration and enable **subtools** (e.g. `GmailTool.send_email`, `JiraTools.create_issue`). Least privilege: enable only needed subtools.

### MCP Client tool
Connect any remote MCP server (SSE or Streamable HTTP, optional bearer auth, timeout) as a predefined tool → subtool **Call Tool** (tool name + params). This lets Phinite agents call *your* MCP server.

---

## 6. APIs (everything you can call from outside)

### Auth
`Authorization: Bearer <WORKSPACE_API_KEY>` (issued under workspace **API keys**). A2A invokes use org API key (JWT) in `X-API-Key`.

### Autonomous triggers
| Mode | Endpoint | Limits |
|---|---|---|
| **API (sync)** | `POST https://app.phinite.ai/api/v1/ai/trigger/{workspace_id}/{trigger_id}/{environment}` | ~120–150 s; simple flows |
| **Background start** (recommended) | `POST https://app.phinite.ai/api/v1/ai/trigger/start/{workspace_id}/{trigger_id}/{environment}` → `{workflow_id, status:"pending"}` | up to 45 min |
| **Background status** | `GET https://app.phinite.ai/api/v1/ai/trigger/status/{workspace_id}/{workflow_id}` (docs also show `https://ai-core.phinite.ai/trigger/status/...`) → `pending` / `completed` / `failed` with `logs`, `response`, `error` | poll every ~5 s w/ backoff |
| **Cron** | configured in Integrations → Triggers, cron expression + default message/user_variables | platform-scheduled |

Payload:
```json
{ "message": "start the task", "user_variables": { "key1": "value1" } }
```
`environment` ∈ `DEV | UAT | PROD`. Triggers run **deployed builds**, not drafts. Design autonomous/cron graphs to be **idempotent**.

Python background-task example:
```python
import requests, time
H = {"Authorization": "Bearer WORKSPACE_API_KEY", "Content-Type": "application/json"}
r = requests.post(f"https://app.phinite.ai/api/v1/ai/trigger/start/{WS}/{TRIG}/DEV",
                  headers=H, json={"message": "start", "user_variables": {...}})
wf = r.json()["workflow_id"]
while True:
    s = requests.get(f"https://app.phinite.ai/api/v1/ai/trigger/status/{WS}/{wf}", headers=H).json()
    if s["status"] in ("completed", "failed"): break
    time.sleep(5)
print(s["response"])
```

### Conversational — Chat API
Deploy → **Deploy as Chat API** → copy endpoint URL, auth with workspace API key, send user messages / receive agent responses (multi-turn session). Exact payload shape is shown in the deploy modal (docs don't publish it — copy from the UI).

### A2A (Agent-to-Agent protocol — https://a2a-protocol.org)
| | URL |
|---|---|
| LIVE | `{gateway}/api/v1/ai/a2a/{flowId}` |
| TEST | `{gateway}/api/v1/ai/a2a/{flowId}/{registryId}` (or `/build-{n}`) |
| Invoke (SendMessage) | `POST /api/v1/ai/a2a/agents/{registryId}` |
| Promote | `PUT /api/v1/a2a-registry/{a2aregistryid}/promote-live` |
| Registry CRUD | `GET/POST/PUT/DELETE /api/v1/a2a-registry?workspaceid=…&status=live&visibility=public&flowid=…` |

Example gateway host seen in docs: `webhook.dev.phinite.ai`. Always copy the hosted URL from the UI. One LIVE build per graph per workspace; Push To Prod demotes previous LIVE to TEST. If a called agent needs integration creds, you get `TASK_STATE_AUTH_REQUIRED` + link to `/public/agent-config`. Multi-turn: reuse `task_id`.

### MCP server (call Phinite agents from Claude / any MCP client)
`https://app.phinite.ai/api/v1/ai/mcp` — OAuth. Tools: `discover_agents`, `list_agents` (≤50), `call_agent(registry_id)`.
Claude Code install:
```
/plugin marketplace add Auto-AI-Labs/phinite-plugins
/plugin install phinite-agents@phinite
/reload-plugins
```
Claude.ai: Settings → Connectors → Add custom connector → paste MCP URL.

---

## 7. Channels (Conversational only)
Web chat (embed script, themeable) · WhatsApp Business API · Slack · Microsoft Teams · Twilio Voice (phone/IVR) · Email. Flow: connect in Integrations → Channels → Deploy to Channel → assign build per env → env-specific webhook URLs generated.

## 8. RAG
BUILD → RAG Collections (`/{org}/workspace/{ws}/data-sources`). Create collection (name, chunk size, overlap) → Add sources (File Upload / Website URLs / Wikis: Notion, Confluence / Synced: Google Drive, SharePoint — admin-gated) → wait for indexing → attach on node **RAG** tab (threshold, top-k). Mention the **RAG Tool** in the prompt.

## 9. Models
BUILD → Models → **Model Keys** (BYOK: OpenAI, Gemini, etc., or platform **Phinite Key**) and **Custom Models** (BYOM endpoints; BYOM graphs can't be public Agent Cards). Per-node "Change model" in Details.

## 10. Observability (all plans)
OPERATE → Observability → **Insights** (KPIs, cost, trends) and **Sessions** (filterable list → session logs: timeline, decision joints, variables, token usage, telephony metrics). Billing & usage page. Log retention: 14 d (Starter), 60–90 d (Pro).

## 11. Governance & Guardrails (Pro+)
- **Tool Governance**: policies with rules **Allow / Human approval / Deny** per tool; attach flow-level or node-level.
- **HITL**: Human approval effect → approvals inbox (Dashboard/Email delivery; Slack/Teams destinations are UI-preview only). Approvers Accept/Reject pending tool calls.
- **Guardrails / LLM Governance**: prompt-injection, toxicity, PII detection — providers: Phinite built-in, AWS Bedrock Guardrails, Azure Content Safety, GCP Model Armor. Attach to flow or single agent.
- Budget tab: "Soon".

## 12. Evaluations (Pro+)
Datasets: Simulation (scripted convos), Autonomous (message/variable/outcome cases), Production (replay real sessions). Modes: Agentic / Single-turn / Multi-turn. Run on draft or connect to build (live/scheduled scoring). Analytics: pass rate, runs, by dataset/env/flow.

## 13. Pricing
| Plan | Price | Sessions/mo | Users | Notes |
|---|---|---|---|---|
| **Starter** | $0 | 1,000 | 1 | Builder, community support, 14-day logs, limited API access |
| **Professional** | $100/mo | 12,000 | 25 | DEV/UAT/PROD, API + external triggers (beta), advanced analytics, 60–90-day logs, governance/evals |
| **Enterprise** | Custom | Custom | Custom | Private cloud, SSO/SAML, dedicated infra, SLAs |
Studio/test runs are unlimited on all plans. Model: pay for agent sessions, not seats.

## 14. Integrations catalog (by category)
- **CRM & Sales**: Apollo.io, Close, Copper, Freshsales, HubSpot, Insightly, MS Dynamics 365, Outreach, Pipedrive, Salesforce, Salesloft
- **Marketing**: ActiveCampaign, Customer.io, Instagram, SendGrid
- **Support**: Front, Gorgias, Help Scout, Intercom, Kustomer, Zoho Desk
- **Messaging**: Facebook Messenger, Gmail, Google Meet, MS Teams, Slack, Telegram, Twilio, Vonage, WhatsApp, Zoom, Voice, Email, Chat AI
- **Productivity**: Google Calendar, Google Drive, Google Sheets, Notion, Zoho Office
- **Analytics/BI**: Amplitude, BigQuery, Looker, Mixpanel, Power BI, Tableau
- **Data**: Azure Blob, Azure Cosmos DB, MongoDB, MySQL, Redis
- **Cloud/DevOps**: Azure, Docker, GitHub, Google Cloud, Jira, ServiceNow
- **Identity**: Auth0, Okta
- **Finance/Payments**: Braintree, Chargebee, PayPal, **Razorpay**, Recurly, Square, Shopify, ShipStation
- **Other**: Brave Search, Firecrawl (web scraping), Tally (forms), Workday HCM, **MCP Client**, generic **API** tool

## 15. Hackathon: Agent Labs Buildathon — Phinite × Paytm (Bengaluru)
Event: https://luma.com/ii0pip0d (registration shows **closed** as of 2026-09-11 — confirm which event you're actually in).
Hosts: Phinite AI, Paytm Community, Ignite Room.
- **Track 1 — AI for Paytm Users**: speed/trust/experience inside the Paytm app — payments, recharge, transfer, investment, transactions.
- **Track 2 — AI for Small Businesses**: agents that help SMBs grow/operate/scale on Paytm's merchant stack.
- Rules: themes are *problem spaces*, not prescribed solutions; solutions must work as **features inside existing Paytm products**; deliver **working multi-agent systems on Phinite**, not demo videos.

### What judges of a Phinite hackathon will likely reward (inferred from the platform's emphasis)
1. **Real multi-agent orchestration** — Master + several Child agents with labeled conditional edges, not one prompt.
2. **Tools that do things** — custom Python tools + predefined integrations (Razorpay, WhatsApp, Gmail, Sheets, MongoDB…).
3. **RAG grounding** for policy/FAQ/knowledge.
4. **Governance** — HITL approval gate on risky actions (refunds, transfers), tool Deny policies, guardrails for PII.
5. **Deployment to a real channel** — WhatsApp/web chat/Telegram — plus an Autonomous cron/API agent.
6. **A2A composition** — expose one agent as an Agent Card and have another graph call it via Browse/Discovery; or call it from Claude via the MCP connector.
7. **Observability story** — show session timeline, cost, and an eval run.

### Starter idea shapes (Paytm tracks)
- *Track 1*: "Transaction dispute concierge" — WhatsApp conversational graph → Child agents: intent classifier, transaction lookup (custom tool), refund-eligibility (RAG on policy), refund executor behind **HITL approval**, notifier.
- *Track 1*: "Smart recharge/bill autopilot" — Autonomous cron graph that reviews upcoming bills, drafts a plan, sends WhatsApp confirmation, executes on reply.
- *Track 2*: "Merchant growth copilot" — Master agent + Children: sales analytics (Sheets/MySQL), inventory reorder (HITL), customer re-engagement (WhatsApp/SMS templates), GST/compliance Q&A (RAG), exposed as A2A so other merchant tools can call it.
- *Track 2*: "Settlement & reconciliation agent" — Autonomous background task: pull Razorpay/Paytm settlements, reconcile with ledger (MongoDB), flag anomalies, Jira/Slack escalation.

---

## 16. Useful URLs
- App / login: https://app.phinite.ai/login · Sign up: https://app.phinite.ai/sign-up
- Docs: https://docs.phinite.ai · Index: https://docs.phinite.ai/llms.txt
- Status: https://status.phinite.ai · Demo: https://cal.com/team/phinite-ai/demo
- Plugin repo: https://github.com/Auto-AI-Labs/phinite-plugins
- MCP server: https://app.phinite.ai/api/v1/ai/mcp
- A2A spec: https://a2a-protocol.org/latest/specification/
- Blog highlights: "MCP vs A2A", "What Is an AI Agent Registry?", "Human-in-the-Loop AI Agents", "How to Deploy AI Agents Across Slack, WhatsApp, and Email", "How to Test and Evaluate AI Agents Before Production"

## 17. Where the raw docs live in this repo
`research/docs/<section>/<page>.md` — every page from llms.txt (210 files). Key folders: `getting-started/`, `graph-studio/`, `devstudio/`, `agents/`, `builds/`, `triggers-intents/`, `agent-registry/`, `a2a/`, `channels/`, `rag/`, `governance/`, `guardrails/`, `evaluations/`, `observability/`, `integrations-hub/` (72 connector pages), `workspace/`, `user-management/`, `support/`, `reference/`. `research/llms.txt` is the index; `research/urls.txt` the URL list. Note `assistants/` pages are the **legacy** (pre-v2.0) vocabulary — prefer `agents/`.
