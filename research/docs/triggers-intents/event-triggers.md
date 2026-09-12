> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Event-based triggers

> Cron schedules and email-driven automation for Autonomous Agent Graphs.

**Event-based triggers** start **Autonomous Agent Graphs** on a schedule or when an external event occurs.

<Note>
  Platform **Cron jobs** are configured in **Integrations** → **Triggers** or **Deploy** → **Cron job** in Graph Studio. HTTP webhooks use [Trigger APIs](/triggers-intents/trigger-apis).
</Note>

## Trigger types

| Type         | Behavior                                       | Configuration                                    |
| ------------ | ---------------------------------------------- | ------------------------------------------------ |
| **Cron**     | Runs on a schedule inside Phinite              | Cron expression in trigger UI                    |
| **Email**    | Starts when inbound mail matches routing rules | [Email channel](/channels/email) + build mapping |
| **Webhooks** | External systems POST to trigger URL           | [Trigger APIs](/triggers-intents/trigger-apis)   |

## Cron example

```cron theme={null}
0 * * * *  # Run hourly
```

1. Create an **Agent Build** for the Autonomous Agent Graph.
2. **Integrations** → **Triggers** → create **Cron** trigger (or **Deploy** → **Cron job** in Studio).
3. Set the cron expression and initial **message** / **user\_variables** if exposed in the UI.
4. Assign the build to **DEV**; confirm in [Observability logs](/observability/logs).
5. Promote to **UAT** / **PROD** when validated.

<Tip>
  Design Cron flows to be **idempotent** — a missed or duplicate tick should not corrupt data.
</Tip>

## Related

* [Trigger APIs](/triggers-intents/trigger-apis)
* [Mapping triggers](/triggers-intents/mapping)
* [Deploy a trigger](/agents/deploy-trigger)
