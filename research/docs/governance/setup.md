> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Governance setup

> End-to-end — create a tool policy, attach it, set approval delivery, and triage approvals.

Follow this path to put Tool Governance live on an Agent Graph. LLM safety is a separate chapter: [Guardrails setup](/guardrails/setup).

## Prerequisites

* **Professional** or **Enterprise** (Pro+)
* Workspace role that can create/attach policies (`workspace.governance.create` / `attach`)
* Workspace **Governance** page itself is **Admin / Superadmin** only; Studio configuration works with broader read/write perms

## Path A — Create and attach a tool policy in Studio

### 1. Open Studio Governance

1. Open the Agent Graph in Graph Studio.
2. Click **Governance** in the Studio rail (`?tab=governance`).
3. Open **Summary**, then **Tool Governance** (or the **Tool Governance** tab).

### 2. Create policy — Details

1. Start **New policy** (create wizard).
2. Step **Details**:
   * **Name** (required — placeholder `Policy name`)
   * **Description** (placeholder `Describe what this policy controls`)
3. Click **Continue to Tools**.

Validation: *Enter a policy name before continuing.*

### 3. Create policy — Tools

1. Select at least one tool from the catalog (**Integration Hub**, **MCP**, or **code runner**).
2. Click **Continue** to the next step.

Validation: *Select at least one tool integration.*

* If you only selected **code runner** tools → next step is **Sandbox config** (skip Actions).
* If you selected actionable (non–code-runner) tools → next is **Actions & arguments**.

### 4. Create policy — Actions & arguments (when shown)

1. For each tool action, set the effect:
   * **Allow** — call proceeds (optional argument rules)
   * **Human approval** — pause for a person ([Approvals](/governance/approvals))
   * **Deny** — block (default for actions you do not change)
2. Configure argument constraints when Allow or Human approval needs them.
3. Continue.

Copy in product: all actions default to **deny** unless you change them.

### 5. Create policy — Sandbox config (when code runner selected)

1. Optionally enable **Kill switch** / **Disable all code execution** and set **Reason**.
2. Set **Limits**: **Timeout (seconds)**, **Max output bytes**, **Max code size bytes**, **Max input size bytes**.
3. Set **Env variable filtering** to **allowlist** or **denylist**.
4. Continue to **Review**.

### 6. Create policy — Review

1. Read the **Policy document**.
2. Optional **Test policy (simulate)**: pick env (**Development** / **UAT** / **Production**), action, **channel id**, **Simulate**.
3. Save the policy — it appears in the **Library**.

### 7. Attach the policy

1. On **Tool Governance**, find the policy under **Library**.
2. Click **Attach** (or **Attach governance**).
3. Step **Attach policy**:
   * **Apply to**: **Entire flow** or **One agent**
   * Confirm the workspace policy selection
4. If the policy has **Human approval** rules, continue to **Approval delivery**:
   * Channels: **Dashboard** and/or **Email**
   * **Users** (email recipients) when Email is on
5. Finish attach. Binding type is `policy`.

**In Use** shows the policy on this flow version (**Edit**, **Detach**, **Attach HIL**, **Approval delivery**).

### 8. (Optional) HIL New profiles

If you need richer destinations than Dashboard/Email:

1. Open **HIL New**.
2. Create a profile (**Dashboard** / **Slack** / **Microsoft Teams**).
3. **Attach** to tools that need HIL.

See [HITL](/governance/hitl) — Slack/Teams are preview until the profile API ships.

### 9. Triage approvals

1. When a run hits **Human approval**, open **OPERATE → Governance → Approvals** or Studio **HIL Approvals**.
2. Filter **Pending**.
3. **Accept** or **Reject**.

Full decide flow: [Approvals](/governance/approvals).

## Path B — Workspace operate view

1. As Admin, open **OPERATE → Governance**.
2. **Policies** — watch decisions, rule mix, approvals resolved (7 / 30 / 90 days).
3. **Approvals** — same inbox as Studio.
4. **Guardrails** tab — analytics only; create/attach profiles in Studio ([Guardrails](/guardrails/overview)).
5. **Budget** — **Soon** (not available).

## Checklist

* [ ] Policy saved in Library
* [ ] Policy **In Use** on the flow (or agent)
* [ ] HITL policies have **Approval delivery** (Dashboard and/or Email)
* [ ] Graph **Saved** and **Built** so the binding ships with the build
* [ ] Test a deny / approval path in DEV

## Related

* [Tool policies](/governance/tool-policies)
* [HITL](/governance/hitl)
* [Approvals](/governance/approvals)
* [Guardrails setup](/guardrails/setup)
