> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Browse the Agent Registry

> Search, filter, and inspect organisation and public A2A agents in the workspace catalog.

<Note>
  The **Agent Registry** catalogs agents exposed over A2A. Each entry links an **Agent Build** to an **Agent Card**, hosted URL, and **TEST** / **LIVE** status.
</Note>

## Open Agent Registry

In the workspace sidebar, open **Agent Registry** when your organisation grants **`workspace.sidebar.agent_registry`**.

**Route:** `/{organisation}/workspace/{workspaceId}/agent-registry`

<Info>
  The same registry data powers **Browse** mode on agent nodes in Graph Studio. The workspace page is the full catalog with search, filters, and detail views.
</Info>

<Frame caption="Agent Registry — search, filters, and agent cards">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/a2a/04-registry-catalog.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=50924bc4cdce0b60f92c0230ebd5d565" alt="Agent Registry catalog with search and filters" width="1772" height="976" data-path="images/v2/a2a/04-registry-catalog.png" />
</Frame>

## Page layout

| Area               | Description                                                       |
| ------------------ | ----------------------------------------------------------------- |
| **Hero**           | *Find the Perfect AI Agent* — subtitle and agent count            |
| **Search**         | *Search for agents...* — filters by name, summary, tags, metadata |
| **Filter sidebar** | Visibility, deployed status, input/output MIME modes, tags        |
| **View toggle**    | Grid or list layout                                               |
| **Detail**         | Skills, status, visibility, copyable endpoint                     |

## Filter dimensions

| Filter          | Options                                            | Purpose                       |
| --------------- | -------------------------------------------------- | ----------------------------- |
| **Visibility**  | Public, Organisation                               | Match Agent Card visibility   |
| **Deployed**    | Live, Test                                         | Match registry build status   |
| **Input Mode**  | MIME types (e.g. `text/plain`, `application/json`) | Skill input compatibility     |
| **Output Mode** | MIME types                                         | Skill output compatibility    |
| **Tags**        | Discoverability tags from Agent Cards              | Narrow by topic or capability |

Filters apply **client-side** on the loaded registry list in addition to API query parameters.

## Organisation vs public listings

| View                | API behaviour                                                  | What you see                                 |
| ------------------- | -------------------------------------------------------------- | -------------------------------------------- |
| **Organisation**    | `GET /a2a-registry?workspaceid=...&orgid=...&pagination=false` | TEST and LIVE builds under your organisation |
| **Public-oriented** | Same with **`status=live`**                                    | LIVE builds only — catalogue-style discovery |

<Warning>
  Public-oriented filtering emphasises **`status=live`** at the API. **Visibility** (`public` vs `organization`) is enforced at **invoke time** by the gateway; apply the **Public** visibility filter in the sidebar to narrow results.
</Warning>

## Agent cards in the list

Each card typically shows:

* Agent name and description (from **Agent Card**)
* Deployment badge (**Test** or **Live**)
* Visibility (**Public** or **Organisation**)
* Skills summary and discoverability tags
* Hosted **A2A URL** (LIVE builds omit registry ID in path — [Endpoints & lifecycle](/agent-registry/endpoints-and-lifecycle))

Selecting a card opens a detail panel where you can copy the endpoint and review build metadata.

## Browse the catalog

1. Open **Agent Registry** from the workspace sidebar.
2. Search or apply filters to narrow agents.
3. Select an agent to view **Agent Card** details and hosted URL.
4. Use **TEST** URLs for validation; **LIVE** URL after [Push To Prod](/agent-registry/agent-cards).

## API reference (listing)

```text theme={null}
GET /api/v1/a2a-registry?workspaceid={id}&orgid={id}&pagination=false
GET /api/v1/a2a-registry?workspaceid={id}&orgid={id}&status=live&pagination=false
```

Optional query params: `flowid`, `visibility`, `tag`, `input_mode`, `output_mode`, `page`, `limit`.

## Permissions

* **View registry:** `assistants.flows:read`
* **Sidebar entry:** `workspace.sidebar.agent_registry`

## Related pages

<CardGroup cols={2}>
  <Card title="Expose an agent" icon="rocket" href="/agent-registry/expose-your-flow">
    Create a new registry entry from Graph Studio.
  </Card>

  <Card title="Registry agent nodes" icon="share-nodes" href="/agent-registry/registry-agent-nodes">
    Attach catalog agents on the canvas (Browse mode).
  </Card>
</CardGroup>
