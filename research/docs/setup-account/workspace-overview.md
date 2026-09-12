> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Workspace overview

> How workspaces organize Agent Graphs, tools, integrations, and team collaboration in Phinite.

A **workspace** is the central collaboration environment in Phinite. It brings together your **Agent Graphs**, tools, integrations, and data sources into one governed space.

When you log in, you land on **Workspace Home** — your dashboard for creating and opening Agent Graphs.

<CardGroup cols={2}>
  <Card title="About Phinite" icon="book-open" href="/getting-started/about-phinite">
    Platform overview and golden path.
  </Card>

  <Card title="Agent Graphs" icon="diagram-project" href="/agents/overview">
    Conversational vs Autonomous graph types.
  </Card>

  <Card title="User roles" icon="users" href="/user-management/user-roles">
    RBAC for developers, admins, and testers.
  </Card>

  <Card title="Inviting users" icon="user-plus" type="note" href="/user-management/inviting-users">
    Add teammates to a workspace.
  </Card>
</CardGroup>

<Info>
  Workspaces help teams isolate projects, manage access levels, and reuse tools and integrations across Agent Graphs within a common environment.
</Info>

## Workspace Home

Workspace Home provides a quick overview of your Agent Graphs and workspace-level activity.

| Element             | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| Agent Graph list    | Grid or list of existing graphs with type and status          |
| **New Agent Graph** | Create Conversational or Autonomous graphs                    |
| **Phinite Aura**    | Optional copilot launcher for natural-language graph creation |
| Metrics             | Usage analytics for your plan (when enabled)                  |

<Frame caption="Workspace Home — Agent Graph list and create entry point">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/agents/00-workspace-home.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=7816585b365be135e0e3aa89abd3123e" alt="Workspace Home with Agent Graph cards" width="1772" height="976" data-path="images/v2/agents/00-workspace-home.png" />
</Frame>

<Note>
  Depending on workspace configuration, the home page may also display activity logs, performance charts, or project summaries.
</Note>

## Multi-workspace access

From the global header, switch between workspaces or create new ones if you have permission.

1. Click the workspace name in the header.
2. Select an existing workspace or **Create workspace** (Super Admin / Admin).
3. Super Admins can assign Admins to manage each workspace independently.

<Frame caption="Create workspace — organization-level setup">
  <img src="https://mintcdn.com/phinite/ZXcKMQWZVzAWmmqI/images/create_workspace.gif?s=1005eeda31563131c2176d336875dae1" alt="Create workspace flow" width="2940" height="1912" data-path="images/create_workspace.gif" />
</Frame>

<Check>
  If you see multiple workspaces in the dropdown, your organization supports multi-workspace collaboration.
</Check>

## Sidebar navigation

Each workspace sidebar is grouped into **Agents**, **BUILD**, **OPERATE**, and **ACCOUNT**.

### Agents

| Item                        | Purpose                                                      |
| --------------------------- | ------------------------------------------------------------ |
| **Agents** (Workspace Home) | Agent Graph list; create Conversational or Autonomous graphs |
| **Agent Registry**          | Catalog of agents exposed over A2A                           |

Open a graph in **Graph Studio** (Save → Build → Deploy → Test). Use **Phinite Aura** for natural-language drafts. See [Agents overview](/agents/overview) and [Agent Registry](/agent-registry/overview).

<Tip>
  Use consistent naming conventions (for example `support-faq-conv`, `nightly-etl-auto`) to group related graphs.
</Tip>

### BUILD

| Item                | Purpose                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------- |
| **Tools**           | Custom and prebuilt tools; open Dev Studio to edit and publish                              |
| **MCP Servers**     | MCP connections for tools and agents                                                        |
| **RAG Collections** | Knowledge collections for retrieval ([RAG overview](/rag/overview))                         |
| **Integrations**    | Channels, Integration Tools, Triggers hub                                                   |
| **Models**          | [Custom Models](/workspace/custom-models) (BYOM) and [Model Keys](/workspace/models) (BYOK) |
| **Env. variables**  | DEV / UAT / PROD secrets and config                                                         |

Authenticate integrations once, then wire channels and triggers to deployed builds. See [Configure integrations](/configure/integrations).

### OPERATE

Product sidebar groups these under **OPERATE**. In docs they are separate chapters:

| Item              | Docs                                                       |
| ----------------- | ---------------------------------------------------------- |
| **Observability** | [Insights & Sessions](/observability/insights) only        |
| **Governance**    | [Setup](/governance/setup), tool policies, HITL, approvals |
| **Evaluations**   | [Setup](/evaluations/setup), Studio wizards — Pro+         |

LLM safety: [Guardrails](/guardrails/overview) · [Phinite Control library](/guardrails/phinite) · [Guardrails setup](/guardrails/setup).

### ACCOUNT

| Item                | Purpose                                                            |
| ------------------- | ------------------------------------------------------------------ |
| **Users**           | Invite members and assign roles                                    |
| **Keys**            | Workspace API keys for Chat API, triggers, and programmatic access |
| **Billing & Usage** | Plan, invoices, and usage (Organization Owners)                    |

| Role            | Scope                                      |
| --------------- | ------------------------------------------ |
| **Super Admin** | Full platform access                       |
| **Admin**       | Workspace management, billing, user access |
| **Developer**   | Build and test Agent Graphs and tools      |
| **Tester (QA)** | Validate workflows and review logs         |

See [Access controls](/user-management/access-controls) and [User roles](/user-management/user-roles).

<Warning>
  Treat API keys as confidential credentials. Revoking a key immediately disables all external requests using that key.
</Warning>

## Bottom navigation

| Item                   | Purpose                                      |
| ---------------------- | -------------------------------------------- |
| **Workspace Settings** | Name, environment configuration, preferences |
| **Documentation**      | Link to Phinite docs                         |
| **User Profile**       | Personal details, preferences, sign-out      |

## Summary

A workspace is your team's shared environment where Agent Graphs, integrations, and data sources coexist with governance, modularity, and role-based collaboration.

<Tip>
  Use one workspace per functional team or business unit to maintain clarity, security, and scalable growth.
</Tip>
