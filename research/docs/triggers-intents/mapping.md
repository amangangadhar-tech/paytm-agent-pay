> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Mapping triggers to workflows

> Assign triggers to Agent Builds and validate runs per environment.

**Mapping** connects a trigger (API, Cron, or integration webhook) to a specific **Agent Build** for each **environment**. When the trigger fires, the platform runs that pinned graph snapshot — not the live canvas draft.

<Note>
  Legacy docs used **intents**; triggers and **Agent Builds** are the current model.
</Note>

## Map a trigger to an Agent Build

1. Open **Integrations** → **Triggers** (or Studio sidebar → **Triggers** → add in Integrations).
2. Create or edit the trigger — select workflow type (API, Background Task, Cron).
3. Choose **Agent Graph** scope if prompted (graph-scoped triggers from Studio).
4. Assign the **Agent Build** to **DEV** first.
5. Copy the environment-specific webhook URL or cron schedule.
6. Send a test request or wait for a scheduled tick — confirm in [Observability logs](/observability/logs).
7. Promote build assignment to **UAT**, then **PROD**.

## Validate the mapping

1. Note the **build number** on the assigned build row ([Builds overview](/builds/overview)).
2. Invoke the trigger with a known test payload ([API usage examples](/triggers-intents/api-usage-examples)).
3. Confirm log entries reference nodes from the expected graph version.
4. If the wrong build runs, re-select the build for that environment in the trigger config.

<Check>
  Keep **DEV** and **PROD** webhook URLs separate in external systems.
</Check>

## Related

* [Deploy a trigger](/agents/deploy-trigger)
* [Trigger APIs](/triggers-intents/trigger-apis)
* [API usage examples](/triggers-intents/api-usage-examples)
* [Build lifecycle](/builds/lifecycle)
