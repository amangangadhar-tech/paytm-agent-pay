> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Agent Cards & builds

> Manage A2A registry builds per Agent Graph, compare TEST and LIVE deployments, and promote to production.

<Note>
  **Agent Cards** is the graph-scoped view of **A2A registry builds**. Each expose action creates a TEST row; **Push To Prod** promotes one build to LIVE per Agent Graph per workspace.
</Note>

**Agent Cards** lists **A2A registry builds** for each exposed **Agent Graph**. Inspect build history, compare **TEST** and **LIVE** deployments, and **promote** a build to production.

## Open Agent Cards

In **Graph Studio**, open **Graph assets** → **Agent Cards** (URL includes `&tab=agent-cards`).

You can also reach cards from **Deploy** → **Deploy as A2A** (existing endpoints appear in the modal), or from the workspace Agent Registry catalog when granted.

<Frame caption="Agent Cards — Active deployments and version list">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/a2a/01-agent-cards-sidebar.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=5bc8ccf59c32ef2cc4c7583c1b36d3fa" alt="Agent Cards panel in Graph Studio" width="1440" height="900" data-path="images/v2/a2a/01-agent-cards-sidebar.png" />
</Frame>

## Panel layout

| Element                | Description                                                                              |
| ---------------------- | ---------------------------------------------------------------------------------------- |
| **Title**              | **Agent Cards** with total version count                                                 |
| **Active deployments** | **Live** (Prod) and **Latest** build chips when assigned                                 |
| **Version list**       | Rows per registry version: description, timestamp, **TEAM** / **LIVE** / **TEST** badges |

Empty state: **No deployed agent cards for this graph** — use **Deploy** → **Deploy as A2A** after creating a build.

## Version rows

Each row represents one A2A registration for the graph:

| Field           | Notes                                     |
| --------------- | ----------------------------------------- |
| **Version N**   | Registry version number for this graph    |
| **Description** | Agent Card summary from the expose wizard |
| **Status**      | **LIVE**, **TEST**, or team-scoped badges |
| **Updated**     | Last update timestamp                     |

## TEST vs LIVE

| Status   | Purpose                                                | Hosted URL                                       |
| -------- | ------------------------------------------------------ | ------------------------------------------------ |
| **Test** | Validate Agent Card, skills, and integrations          | Longer path — often includes registry / build id |
| **Live** | Production endpoint (one LIVE per graph per workspace) | Short path: `{gateway}/api/v1/ai/a2a/{flowId}`   |

See [Endpoints & lifecycle](/agent-registry/endpoints-and-lifecycle) for URL and auth details. Copy the LIVE URL from **Deploy** → existing endpoints, or from the catalog.

## Promote to production

1. From Agent Cards (or workspace catalog), use **Push To Prod** when available.
2. Select the **TEST** build to promote.
3. Confirm promotion.

The app calls:

```text theme={null}
PUT /api/v1/a2a-registry/{a2aregistryid}/promote-live
```

**Promotion rules:**

* The chosen build becomes **`live`**.
* Any previous **LIVE** build for the same Agent Graph in the workspace is demoted to **`test`**.
* Agent Card visibility is unchanged by promotion — only deployment status updates.

## Create a new build

New A2A registrations start from Graph Studio:

1. Create an **Agent Build** ([Builds overview](/builds/overview)) — see Studio → **Agent Builds**.
2. [Expose your Agent Graph](/agent-registry/expose-your-flow) via **Deploy** → **Deploy as A2A**.
3. Return to Agent Cards to compare the new version row.

## Permissions

| Action          | Permission                         |
| --------------- | ---------------------------------- |
| View builds     | `assistants.flows:read`            |
| Promote to live | `assistants.flows:update`          |
| Sidebar entry   | `workspace.sidebar.agent_registry` |

## Related pages

<CardGroup cols={2}>
  <Card title="Expose an agent" icon="rocket" href="/agent-registry/expose-your-flow">
    Create a new TEST build and Agent Card.
  </Card>

  <Card title="Endpoints & lifecycle" icon="plug" href="/agent-registry/endpoints-and-lifecycle">
    URL patterns and API reference.
  </Card>
</CardGroup>
