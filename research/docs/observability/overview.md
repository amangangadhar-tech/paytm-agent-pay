> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Observability overview

> Insights and Sessions for Agent Graph runs.

**Observability** shows how Agent Graphs behave in production. Open **OPERATE → Observability**. The hub has two tabs: **Insights** (default) and **Sessions**.

Permission: `workspace.reports.read` (sidebar `workspace.sidebar.reports`). Not Pro-gated.

<CardGroup cols={2}>
  <Card title="Insights" href="/observability/insights">
    KPIs, Cost (Phinite), trends — then drill to Sessions.
  </Card>

  <Card title="Governance" href="/governance/overview">
    Policy blocks on Insights come from tool policies.
  </Card>

  <Card title="Evaluations" href="/evaluations/overview">
    Score quality separately from runtime telemetry.
  </Card>

  <Card title="Guardrails" href="/guardrails/overview">
    LLM safety profiles that shape session outcomes.
  </Card>
</CardGroup>

## Tabs

| Tab          | `?tab=`              | Purpose                                                       |
| ------------ | -------------------- | ------------------------------------------------------------- |
| **Insights** | `insights` (default) | Fleet KPIs and charts for the selected range                  |
| **Sessions** | `sessions`           | Filterable session list — open a row for classic session logs |

Route: `/{org}/workspace/{workspaceId}/observability`

<Frame caption="Observability — Insights">
  <img src="https://mintcdn.com/phinite/1VctjSmXCA5rNwu2/images/v2/observability/01-insights.png?fit=max&auto=format&n=1VctjSmXCA5rNwu2&q=85&s=298bf06e1030b039da648ca2f8e79de7" alt="Observability Insights" width="1440" height="900" data-path="images/v2/observability/01-insights.png" />
</Frame>

See [Insights & Sessions](/observability/insights) for KPI definitions, filters, and the Sessions table.

## Related

* [Insights & Sessions](/observability/insights)
* [Governance](/governance/overview)
* [Evaluations](/evaluations/overview)
