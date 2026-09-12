> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Glossary

> Current Phinite terms for the agent-first product model.

Primary reference for the **Agent Graph** mental model. Avoid legacy terms listed under [Dead terms](#dead-terms-do-not-use).

## Primary objects

| Term                     | Meaning                                                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Agent Graph**          | The workflow you design in Graph Studio. Types: Conversational or Autonomous.                                                         |
| **Conversational**       | Voice/chat graph for real-time user conversations.                                                                                    |
| **Autonomous**           | Background graph for scheduled tasks, monitoring, and automation without a live user.                                                 |
| **Node**                 | Canvas building block (Start, Master Agent, Child Agent, Tool, End, registry agent). Legacy: Block.                                   |
| **Build**                | Immutable snapshot of an agent graph + pinned tool versions, ready to deploy.                                                         |
| **Agent Build**          | Same as **Build** — the deployable artifact created from the Build dialog.                                                            |
| **Environment**          | DEV, UAT, or PROD — where a build runs and which env variables apply.                                                                 |
| **Channel**              | Messaging ingress (WhatsApp, Slack, Teams, web chat, voice, email, …) wired to a build.                                               |
| **Chat API**             | HTTP chat endpoint for Conversational graphs — deploy target separate from channels.                                                  |
| **Trigger**              | Webhook or schedule that starts an Autonomous graph run (API, Cron, background task).                                                 |
| **Session**              | One execution of an agent graph run, recorded in observability logs.                                                                  |
| **Agent Card**           | Public identity + metadata for an agent exposed over A2A (skills, tags, visibility).                                                  |
| **Agent Card version**   | One expose registration; status **TEST** or **LIVE**.                                                                                 |
| **Agent Registry**       | Workspace catalog of exposed A2A agents.                                                                                              |
| **Tool**                 | Callable integration or custom function used by nodes in an agent graph.                                                              |
| **RAG Collections**      | Workspace knowledge collections attached to agent nodes for retrieval (sidebar: **BUILD → RAG Collections**). Legacy label: RAG Data. |
| **Custom Models / BYOM** | Bring your own model — workspace-defined endpoints outside the Phinite catalog.                                                       |
| **Model Keys / BYOK**    | Provider API keys for catalog models, plus the platform **Phinite Key**.                                                              |
| **Insights**             | Default Observability landing — session health, policy blocks, **Cost (Phinite)**.                                                    |
| **HITL**                 | Human in the loop — tool calls that require **Human approval** before continuing.                                                     |
| **HIL New**              | Studio profiles for Accept/Reject destinations (Dashboard / Slack / Teams; Slack/Teams preview).                                      |
| **HIL Approvals**        | Studio dialog + workspace Approvals inbox (**Accept** / **Reject**).                                                                  |
| **LLM Governance**       | Studio module for guardrail profiles (docs chapter: Guardrails).                                                                      |
| **Guardrails**           | LLM safety profiles (Phinite, AWS Bedrock, Azure Content Safety, GCP Model Armor).                                                    |
| **Workspace**            | Top-level collaboration container for Agent Graphs, tools, integrations, and users.                                                   |

## A2A terms

| Term                     | Meaning                                                                         |
| ------------------------ | ------------------------------------------------------------------------------- |
| **Browse**               | Registry agent node mode — calls one selected `a2aregistryid`.                  |
| **Discovery**            | Registry agent node mode — runtime match using saved filters.                   |
| **TEST**                 | Agent Card / build status for validation URL (`.../a2a/{flowId}/{registryId}`). |
| **LIVE**                 | Production Agent Card; short URL (`.../a2a/{flowId}`).                          |
| **Discoverability Tags** | Metadata on Agent Card for search and Discovery filters.                        |
| **Skills**               | Callable capabilities on Agent Card with input/output MIME modes.               |
| **Hosted A2A URL**       | Callable endpoint for an exposed Agent Graph over the A2A protocol.             |

## Surfaces

| Surface                | Where                                                                     |
| ---------------------- | ------------------------------------------------------------------------- |
| **Workspace Home**     | Agent Graphs list; create and open graphs                                 |
| **Graph Studio**       | Canvas to design nodes, tools, RAG, variables; Save, Build, Deploy, Test  |
| **Tools**              | Workspace tool library; **Open Dev Studio** edits tool code               |
| **Tools & Dev Studio** | Canonical nav label for tool authoring (legacy: DevStudio)                |
| **Integrations**       | Channels, Integration Tools, Triggers hub                                 |
| **Env. variables**     | DEV / UAT / PROD secrets and config                                       |
| **RAG Collections**    | Workspace collections under BUILD (URL still `/data-sources`)             |
| **Models**             | Accordion: Custom Models (BYOM) + Model Keys (BYOK)                       |
| **Model Keys**         | BYOK provider keys (`workspace.sidebar.byok`)                             |
| **Custom Models**      | BYOM endpoints (`/custom-models`)                                         |
| **Agent Registry**     | Browse exposed A2A agents                                                 |
| **Phinite Aura**       | Natural-language copilot in Graph Studio for assisted graph edits         |
| **Observability**      | Insights (default), Sessions, metrics, logs, billing                      |
| **Governance**         | OPERATE policies, Guardrails library, Approvals; Studio Tool / HITL / LLM |
| **Evaluations**        | OPERATE Analytics / History; Studio Agent Evaluations panel (Pro+)        |

## Configuration

| Term             | Meaning                                                         |
| ---------------- | --------------------------------------------------------------- |
| **Node config**  | Prompt, tools, RAG, variables, model on a node drawer           |
| **Build export** | Export tools/MCP/env into build or Agent Card version           |
| **config\_id**   | Connected integration config on Browse registry nodes           |
| **Golden path**  | Design → Save → Build → Environment → Deploy (or Expose as A2A) |

## Dead terms (do not use)

| Old term              | Use instead                                            |
| --------------------- | ------------------------------------------------------ |
| Assistant             | Agent Graph (or Agent)                                 |
| Flow / Flow Studio    | Agent Graph / Graph Studio                             |
| Block                 | Node                                                   |
| DevStudio (nav label) | Tools & Dev Studio                                     |
| Intent                | Trigger (Autonomous) or graph routing (Conversational) |
| Prompt training       | Graph Studio prompt configuration                      |

## Deploy vs expose

| Path                         | Outcome                                                   |
| ---------------------------- | --------------------------------------------------------- |
| **Deploy to Channel**        | Assign build to a channel environment + webhook           |
| **Deploy as Chat API**       | HTTP chat endpoint for apps/backends                      |
| **Deploy as API / Cron**     | Autonomous trigger webhook or schedule                    |
| **Deploy as A2A**            | Publish Agent Card → TEST → Push To Prod → LIVE URL       |
| **Expose as External Agent** | Same as Deploy as A2A — three-step wizard in Graph Studio |

## Related

* [Agent Registry glossary](/agent-registry/glossary) — A2A-specific MIME modes and API fields
* [About Phinite](/getting-started/about-phinite)
* [Agents overview](/agents/overview)
