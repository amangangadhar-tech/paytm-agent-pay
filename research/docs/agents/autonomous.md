> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Autonomous Agent Graphs

> Schedule or trigger background Agent Graphs — API webhooks, cron jobs, and event-driven automation.

**Autonomous Agent Graphs** run without a live user. External systems, schedules, or events start a session; the graph executes tools, routing, and optional registry agent calls in the background.

<CardGroup cols={2}>
  <Card title="Triggers overview" icon="bolt" href="/triggers-intents/overview">
    API, cron, and background-task trigger types.
  </Card>

  <Card title="Deploy a trigger" icon="paper-plane" href="/agents/deploy-trigger">
    Wire a build to API or Cron ingress.
  </Card>

  <Card title="Graph Studio" icon="diagram-project" href="/graph-studio/overview">
    Design automation logic on the canvas.
  </Card>

  <Card title="Observability" icon="chart-line" type="note" href="/observability/overview">
    Monitor runs, logs, and token usage.
  </Card>
</CardGroup>

## What Autonomous graphs do

| Capability                     | Detail                                                          |
| ------------------------------ | --------------------------------------------------------------- |
| **Webhook ingress**            | HTTP API triggers start a graph run on demand                   |
| **Scheduled runs**             | Cron jobs execute graphs on a timetable                         |
| **Background tasks**           | Long-running or queued automation without user sessions         |
| **Multi-system orchestration** | Tools, RAG, and registry agent nodes in one graph               |
| **Full audit trail**           | Every run recorded in [Observability logs](/observability/logs) |

<Frame caption="Integrations — Triggers tab for Autonomous deploy targets">
  <img src="https://mintcdn.com/phinite/spbPnSZPWmAXAKhH/images/Integrations-Overview.png?fit=max&auto=format&n=spbPnSZPWmAXAKhH&q=85&s=1faf5d75f73b036cb5929544b68e6fc9" alt="Workspace Integrations hub with Triggers tab" width="1917" height="873" data-path="images/Integrations-Overview.png" />
</Frame>

## Trigger types

| Trigger             | Use when                                       | Doc                                                                                               |
| ------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **API (webhook)**   | External system POSTs a payload to start a run | [Trigger APIs](/triggers-intents/trigger-apis)                                                    |
| **Cron**            | Runs on a fixed schedule                       | [Trigger APIs — Cron](/triggers-intents/trigger-apis#cron-job-mode)                               |
| **Background task** | Queued or async execution                      | [Trigger APIs — Background task](/triggers-intents/trigger-apis#background-task-mode-recommended) |
| **Event-based**     | React to integration events                    | [Event triggers](/triggers-intents/event-triggers)                                                |

See [Triggers overview](/triggers-intents/overview) for the full automation hub.

## Design workflow

1. Create an **Autonomous** Agent Graph from Workspace Home.
2. In Graph Studio, model the automation as nodes — typically **Start** → agent/tool chain → **End**.
3. Attach [tools](/graph-studio/interface/node-library) for each external action (CRM update, email send, data fetch).
4. Use [variables](/graph-studio/interface#variables) to pass trigger payload fields into tool inputs.
5. Click **Save**, then **Build** ([Builds overview](/builds/overview)).
6. Assign the build to **DEV** / **UAT** / **PROD**.
7. Click **Deploy** and choose a target:

| Deploy tab        | Outcome                                           |
| ----------------- | ------------------------------------------------- |
| **Deploy as API** | Webhook URL that starts a graph run               |
| **Cron job**      | Scheduled execution with cron expression          |
| **Deploy as A2A** | Expose as Agent Card (coming soon for Autonomous) |

## Deploy an API trigger

1. **Build** and assign your Autonomous graph to the target environment.
2. Click **Deploy** → **Deploy as API**.
3. Select build version and confirm trigger configuration.
4. Copy the webhook URL and authenticate with your workspace API key.
5. POST a JSON payload from your upstream system to start a run.

See [Deploy a trigger](/agents/deploy-trigger) and [Trigger APIs](/triggers-intents/trigger-apis).

## Deploy a cron schedule

1. **Build** and assign the graph.
2. Click **Deploy** → **Cron job**.
3. Enter the cron expression and timezone.
4. Select environment and build version.
5. Confirm — Phinite runs the graph on schedule.

See [Trigger APIs — Cron](/triggers-intents/trigger-apis#cron-job-mode).

## Best practices

* Design actions to be **idempotent** — triggers may retry or duplicate.
* Return structured outputs and capture variables for downstream auditing.
* Set timeouts and error branches so failed tool calls do not leave silent failures.
* Test with sample payloads in **DEV** before promoting builds to PROD.
* Monitor runs in [Observability](/observability/overview) — there is no user to report errors.

<Warning>
  Autonomous graphs run with production credentials in PROD. Validate env variables and integration auth in UAT first.
</Warning>

## Related

* [Conversational Agent Graphs](/agents/conversational)
* [Triggers & automation hub](/triggers-intents/overview)
* [Configure integrations](/configure/integrations)
* [Builds overview](/builds/overview)
