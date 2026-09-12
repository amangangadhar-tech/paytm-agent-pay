> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Expose your Agent Graph as an A2A agent

> Register a published Agent Build in the Agent Registry using Deploy as A2A and attach an Agent Card.

<Note>
  **Deploy as A2A** exposes an **Agent Build** with an **Agent Card** — the agent's public identity. Create a **Build** before opening the deploy wizard (**Deploy** stays disabled until one exists).
</Note>

## Prerequisites

Before you expose an Agent Graph:

1. **Save** the graph and create at least one **Agent Build** ([Builds overview](/builds/overview)).
2. Hold **Developer** role or higher for Graph Studio save/build actions.
3. Have permission to call registry APIs (`assistants.flows:create` via gateway **`POST /a2a-registry`**).
4. **Publish** any tools referenced by the graph — unpublished tools show **Publish** in the build step.

## Open the expose flow

1. Open **Graph Studio** for the Agent Graph.
2. Click **Deploy** — the **Deploy Agent Build** modal opens.
3. **Select a Build** (immutable snapshot of graph + tools).
4. Choose **Deploy as A2A** (other tabs: **Deploy to Channel**, **Deploy as Chat API**).
5. Review the three-step A2A path shown in the modal, then **Continue to A2A with Build N**.
6. Existing LIVE / TEST endpoints for this agent appear at the bottom of the modal when already registered.

<Frame caption="Deploy Agent Build — Deploy as A2A">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/a2a/06-deploy-as-a2a.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=904f84401aaca9c808aed4589eca499a" alt="Deploy Agent Build modal with Deploy as A2A tab" width="1440" height="900" data-path="images/v2/a2a/06-deploy-as-a2a.png" />
</Frame>

### What Deploy as A2A does

| Step | UI copy                                                                              |
| ---- | ------------------------------------------------------------------------------------ |
| 01   | **Publish the agent card** — package this build's dependencies and agent card        |
| 02   | **Share the hosted URL** — callers reach it at a URL like `…/a2a/{flow}/build-{n}`   |
| 03   | **Callers invoke it** — other agents and clients send requests over the A2A protocol |

You can also open graph-scoped cards from Studio → **Agent Cards** under Graph assets.

<Frame caption="Agent Cards — Active deployments and versions">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/a2a/01-agent-cards-sidebar.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=5bc8ccf59c32ef2cc4c7583c1b36d3fa" alt="Agent Cards sidebar in Graph Studio" width="1440" height="900" data-path="images/v2/a2a/01-agent-cards-sidebar.png" />
</Frame>

Use **Create New Build** in the deploy modal when you need a fresh snapshot before exposing.

## Wizard steps (after Continue to A2A)

| Step | Label                        | Purpose                                         |
| ---- | ---------------------------- | ----------------------------------------------- |
| 1    | **Agent Build Config**       | Pick graph version and published tools          |
| 2    | **Additional Config**        | Optional export of tools/variables to the build |
| 3    | **Configure the Agent card** | Agent Card identity, skills, tags, visibility   |

Primary actions: **Next** (steps 1–2), **Attach Agent Card** (step 3).

### Step 1 — Agent Build Config

<Frame caption="Expose wizard — confirm Agent Graph and tool versions">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/configure/02-build-export.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=9f39ea143474d3bd91f9893124ee3fb9" alt="Agent Build Config step with graph and tools" width="1772" height="976" data-path="images/v2/configure/02-build-export.png" />
</Frame>

1. **Agent Graph** accordion — select the saved graph version (name, version number, notes, timestamp).
2. **Tools Associated** accordion — select published tool versions. Unpublished tools show **Publish** inline.
3. Validation requires a selected graph version and at least one published tool when tools exist on the graph.

### Step 2 — Additional Config

1. Toggle **Export value for agent version** to include predefined tools, MCP tools, or env variables in the registry build.
2. When enabled, use tabs **Predefined**, **MCP**, and **Env** — search **Search tools and variables...**
3. For each exported row, provide a **description** (required).

See [Build export configuration](/configure/build-export) for when to export credentials for external callers.

### Step 3 — Configure the Agent Card

<Frame caption="Agent Card identity — skills, tags, and visibility">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/a2a/03-agent-card-identity.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=e4248e3ef92618a50d24986e1b641df1" alt="Agent Card configuration step" width="1772" height="976" data-path="images/v2/a2a/03-agent-card-identity.png" />
</Frame>

Wizard copy: *Agent Card is the identity of your agent on the Internet.*

| Field                    | Notes                                                                            |
| ------------------------ | -------------------------------------------------------------------------------- |
| **Agent Name**           | Read-only; derived from the Agent Graph name                                     |
| **Agent Description**    | Editable summary for catalog and A2A clients                                     |
| **Skills**               | Unique name, description, **Input Modes**, **Output Modes** (MIME types)         |
| **Discoverability Tags** | Search and Discovery filter metadata                                             |
| **Visibility & access**  | **Public** — any A2A client with valid API key. **Organisation** — same org only |
| **Auth Schemes**         | Platform default: organisation **API key**                                       |
| **Refine Card**          | Optional AI refinement for description and skills                                |

1. Edit fields as needed.
2. Click **Attach Agent Card** — calls **`POST /a2a-registry?workspaceid={workspaceId}`** with wizard payload.

## After registration

On success:

1. Note the **Agent Registry ID** and **hosted A2A URL** (LIVE builds use the short `{flowId}` path — [Endpoints & lifecycle](/agent-registry/endpoints-and-lifecycle)).
2. The build is available to **Test**.
3. Open Studio → **Agent Cards** or the workspace [Agent Registry](/agent-registry/catalog) to inspect the entry.
4. Promote to **`live`** from [Agent Cards](/agent-registry/agent-cards) when ready for production routing.

<Tip>
  One **LIVE** version per Agent Graph per workspace. **Push To Prod** demotes the previous LIVE row to TEST.
</Tip>

## Related pages

<CardGroup cols={2}>
  <Card title="Endpoints & lifecycle" icon="plug" href="/agent-registry/endpoints-and-lifecycle">
    TEST vs LIVE URL patterns and promotion.
  </Card>

  <Card title="Browse the catalog" icon="layout-grid" href="/agent-registry/catalog">
    Find and inspect registered agents.
  </Card>

  <Card title="Agent Cards" icon="id-card" href="/agent-registry/agent-cards">
    Compare builds and Push To Prod.
  </Card>

  <Card title="Build export" icon="gear" href="/configure/build-export">
    Export tools, MCP, and env into the build.
  </Card>
</CardGroup>
