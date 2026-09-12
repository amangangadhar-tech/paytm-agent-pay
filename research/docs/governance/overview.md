> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Governance overview

> Workspace policies and Studio Tool / HITL controls for Agent Graphs (Pro+).

**Governance** controls which tools agents may call and when a person must approve. LLM prompt/output safety lives under **[Guardrails](/guardrails/overview)** (Studio **LLM Governance**). Use the workspace page for fleet analytics and the approvals inbox; use Graph Studio to attach policies to a specific Agent Graph.

<Note>
  Requires **Professional** or **Enterprise** (Pro+). Workspace **OPERATE → Governance** is **Admin / Superadmin** only. Studio read uses `workspace.governance.read`; create/attach need write permissions.
</Note>

<CardGroup cols={2}>
  <Card title="Setup guide" href="/governance/setup">
    Create policy → attach → approval delivery → triage.
  </Card>

  <Card title="Tool policies" href="/governance/tool-policies">
    Allow, Human approval, Deny — wizard steps.
  </Card>

  <Card title="HITL & HIL New" href="/governance/hitl">
    Human-in-the-loop policies and destination profiles.
  </Card>

  <Card title="Approvals" href="/governance/approvals">
    Accept or Reject pending tool calls.
  </Card>

  <Card title="Guardrails" href="/guardrails/overview">
    LLM safety (separate chapter).
  </Card>
</CardGroup>

## Where in the product

| Surface      | Path / entry                                                           |
| ------------ | ---------------------------------------------------------------------- |
| Workspace    | **OPERATE → Governance** → `/{org}/workspace/{workspaceId}/governance` |
| Studio panel | Graph Studio rail **Governance** → `?tab=governance`                   |
| Studio queue | Rail **HIL Approvals** (dialog)                                        |

## Workspace tabs

| Tab            | `?tab=`              | Purpose                                                                                             |
| -------------- | -------------------- | --------------------------------------------------------------------------------------------------- |
| **Policies**   | `policies` (default) | Policy activity, decisions blocked/logged, approvals resolved, rule mix                             |
| **Guardrails** | `guardrails`         | Guardrail activity analytics (library attach is in Studio — see [Guardrails](/guardrails/overview)) |
| **Budget**     | `budget`             | Badge **Soon** — not enabled yet                                                                    |
| **Approvals**  | `approvals`          | Human approval inbox                                                                                |

Toolbar on Policies / Guardrails: **Last 7 days** / **Last 30 days** / **Last 90 days** · **Refresh**. Optional `?view=sessions` drills into session history for policy or guardrail purpose.

<Frame caption="Workspace Governance — Policies tab">
  <img src="https://mintcdn.com/phinite/1VctjSmXCA5rNwu2/images/v2/governance/01-workspace-policies.png?fit=max&auto=format&n=1VctjSmXCA5rNwu2&q=85&s=5ceddc4f3b50003d17cd41bcd05953c0" alt="Governance Policies dashboard" width="1440" height="900" data-path="images/v2/governance/01-workspace-policies.png" />
</Frame>

### Policies analytics labels

| Card / metric           | Meaning                                               |
| ----------------------- | ----------------------------------------------------- |
| **Policy decisions**    | Blocked vs logged share for the range                 |
| **Approvals resolved**  | Pending / Approved / Rejected                         |
| **Policy sessions**     | Sessions with policy events                           |
| **Policies configured** | Counts with human approval / deny rules / total rules |
| **Rule mix**            | DENY · HITL · ALLOW                                   |
| **Code execution**      | Sandbox profiles Enabled / Kill switch / Total        |
| **Policy activity**     | Heatmap of daily volume                               |

Quick links: **Human approvals** · **Observability** · **Billing & usage**.

## Studio Governance modules

Open an Agent Graph → **Governance**. Chrome title **Governance**. Tabs:

| Tab                   | Module    | Prominence                                                                     |
| --------------------- | --------- | ------------------------------------------------------------------------------ |
| **Summary**           | Home      | Cards for Tool / HITL / HIL New / LLM with **Attached** badges                 |
| **Tool Governance**   | `tool`    | Allow, deny, or send writes to a person                                        |
| **Human in the Loop** | `hitl`    | Policies that require a person before an action runs                           |
| **HIL New**           | `hil_new` | Profiles for where Accept/Reject lands                                         |
| **LLM Governance**    | `llm`     | Prompt/output inspection — documented under [Guardrails](/guardrails/overview) |

<Frame caption="Studio Governance Summary">
  <img src="https://mintcdn.com/phinite/1VctjSmXCA5rNwu2/images/v2/governance/04-studio-summary.png?fit=max&auto=format&n=1VctjSmXCA5rNwu2&q=85&s=aef3b56b0047aa76bb0a62cd08bffe5d" alt="Governance Summary cards" width="1440" height="900" data-path="images/v2/governance/04-studio-summary.png" />
</Frame>

<Tip>
  There is no separate Studio **Guardrails** rail in this IA. Use **LLM Governance** inside Governance, or the docs chapter [Guardrails](/guardrails/overview).
</Tip>

## Permissions and APIs (summary)

| Concern          | Value                                                                         |
| ---------------- | ----------------------------------------------------------------------------- |
| Plan             | `MinPlan.Governance` = Pro+                                                   |
| RBAC             | `workspace.governance.{read,create,update,delete,attach,detach}`              |
| Approvals decide | Admin/Superadmin + `workspace.governance.update`                              |
| HTTP prefix      | `/governance` (analytics, policies, bindings, human-approvals, guardrails, …) |

## Related

* [Tool policies](/governance/tool-policies)
* [HITL](/governance/hitl)
* [Approvals](/governance/approvals)
* [Guardrails overview](/guardrails/overview)
* [Evaluations](/evaluations/overview)
* [Observability Insights](/observability/insights)
