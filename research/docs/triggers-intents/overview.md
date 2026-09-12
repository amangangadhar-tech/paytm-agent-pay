> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Triggers & automation overview

> Conversational vs Autonomous ingress — channels, Chat API, webhooks, and cron.

**Triggers and ingress** start Agent Graph runs from outside the canvas. What you configure depends on graph type: **Conversational** graphs use channels and Chat API; **Autonomous** graphs use API webhooks, background tasks, and cron.

<CardGroup cols={2}>
  <Card title="Trigger APIs" icon="code" href="/triggers-intents/trigger-apis">
    Autonomous — API, background task, and cron modes.
  </Card>

  <Card title="API usage examples" icon="terminal" href="/triggers-intents/api-usage-examples">
    cURL, Python, JavaScript, and more.
  </Card>

  <Card title="Event triggers" icon="calendar" href="/triggers-intents/event-triggers">
    Schedules and email-driven runs.
  </Card>

  <Card title="Mapping" icon="diagram-project" href="/triggers-intents/mapping">
    Assign triggers to Agent Builds per environment.
  </Card>
</CardGroup>

## Trigger types

|                            | **Conversational**                                                              | **Autonomous**                                                                          |
| -------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **Graph type**             | Real-time chat or voice with a user                                             | Background automation — no live chat UI                                                 |
| **Typical ingress**        | Messaging **channels**, **Chat API** POST                                       | **API webhook**, **background task**, **cron**                                          |
| **Deploy in Studio**       | **Deploy to Channel**, **Deploy as Chat API**                                   | **Deploy as API**, **Cron job**                                                         |
| **Configure in workspace** | **Integrations** → **Channels**                                                 | **Integrations** → **Triggers**                                                         |
| **Docs**                   | [Conversational graphs](/agents/conversational), [Channels](/channels/overview) | [Autonomous graphs](/agents/autonomous), [Trigger APIs](/triggers-intents/trigger-apis) |

### Conversational ingress

Use when a user talks to the agent through a connected surface:

| Ingress             | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| **Channel message** | Inbound WhatsApp, Slack, Teams, email, voice, web chat       |
| **Chat API**        | Your app POSTs user messages to a deployed Chat API endpoint |

These paths do **not** use Autonomous trigger execution modes (single endpoint / background task / cron).

### Autonomous triggers

Use when an external system or schedule starts a graph without a user in chat:

| Trigger                   | Description                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| **API (single endpoint)** | Synchronous webhook — short runs (\~120–150 s)                                                    |
| **Background task**       | Async start + status polling — **recommended** for multi-step graphs                              |
| **Cron job**              | Platform runs the graph on a schedule                                                             |
| **Event-based**           | Cron, email routing, or webhook patterns — see [Event triggers](/triggers-intents/event-triggers) |

## How a run starts

```mermaid theme={null}
flowchart LR
  ingress[Ingress or trigger]
  build[Pinned Agent Build]
  graph[Agent Graph run]
  logs[Observability logs]

  ingress --> build --> graph --> logs
```

## Configure and deploy (Autonomous)

1. Design an **Autonomous** Agent Graph in [Graph Studio](/graph-studio/overview).
2. **Save** and **Build** ([Builds](/builds/overview)).
3. Assign the build to **DEV** / **UAT** / **PROD**.
4. Create the trigger under **Integrations** → **Triggers** ([Configure integrations](/configure/integrations)).
5. **Deploy** in Graph Studio → **Deploy as API** or **Cron job** ([Deploy a trigger](/agents/deploy-trigger)).
6. Test with [API usage examples](/triggers-intents/api-usage-examples); monitor in [Observability](/observability/overview).

<Frame caption="Integrations — Triggers tab">
  <img src="https://mintcdn.com/phinite/spbPnSZPWmAXAKhH/images/Integrations-Overview.png?fit=max&auto=format&n=spbPnSZPWmAXAKhH&q=85&s=1faf5d75f73b036cb5929544b68e6fc9" alt="Workspace Integrations Triggers tab" width="1917" height="873" data-path="images/Integrations-Overview.png" />
</Frame>

<Tip>
  Design Autonomous graphs to be **idempotent** — webhooks may retry. Map payload fields to [variables](/graph-studio/interface#variables) for auditability in logs.
</Tip>

## Related

* [Deploy a trigger](/agents/deploy-trigger)
* [Autonomous Agent Graphs](/agents/autonomous)
* [Conversational Agent Graphs](/agents/conversational)
