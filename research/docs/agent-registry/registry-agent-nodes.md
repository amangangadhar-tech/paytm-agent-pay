> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Registry agent nodes (Browse & Discovery)

> Attach Agent Registry agents to a master agent node in Browse mode or let Discovery auto-select by filters.

<Note>
  **Registry agent nodes** let a **Master Agent** call other exposed A2A agents. **Browse** picks one registration; **Discovery** matches agents at runtime using saved filters.
</Note>

Registry **agent nodes** connect a **Master Agent** node to agents published in the [Agent Registry catalog](/agent-registry/catalog). Unlike a standard agent node configured only with prompts and tools, a registry agent node references an **A2A registration** — either a **specific** agent (**Browse**) or a **dynamic set** matched at runtime (**Discovery**).

<Frame caption="Browse / Discovery panel — attach registry agents on the canvas">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/a2a/05-browse-discovery.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=79ad0ad94bcfa929dd220da8da60676c" alt="Browse and Discovery filters in Graph Studio" width="1772" height="976" data-path="images/v2/a2a/05-browse-discovery.png" />
</Frame>

<Info>
  The browse panel title in the product may read **Agent Block**; documentation uses **Agent Node** for consistency with [Graph Studio](/graph-studio/overview).
</Info>

## When to use Browse vs Discovery

| Mode          | Use when                                | Runtime behaviour                                                                                 |
| ------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Browse**    | You know which registry agent to call   | Master agent invokes the selected registration (fixed `a2aregistryid`, tools/env from that build) |
| **Discovery** | The right specialist depends on context | Master agent searches the registry using saved filters and attaches matching agents automatically |

Both modes require agents to be **exposed** with appropriate **visibility**, **skills**, and **tags**. See [Expose your Agent Graph](/agent-registry/expose-your-flow).

## Open the registry panel

1. Open **Graph Studio** for your Agent Graph.
2. Add or select an **agent node** on the canvas under a **Master Agent** node.
3. When the node is unconfigured — or when you open registry tooling — the **Browse / Discovery** panel appears on the right.

The panel loads registry data via **`GET /a2a-registry?workspaceid=...&orgid=...`**.

## Browse mode

1. Search and filter agents (visibility, deployed status, MIME modes, tags) — same dimensions as [Agent Registry catalog](/agent-registry/catalog).
2. Select an agent card from the list.
3. Review the **Agent Card preview** (hosted URL, skills, build status).
4. Click to **add** the agent to the canvas (or replace the current registry agent node).
5. Configure **tools and environment variables** exported with that registry build in the **Configuration** sub-view.
6. **Save** the graph — node stores `agent_node_type: "browse"`, `a2aregistryid`, and `config_id`.

Validation requires a connected configuration (`config_id`) and satisfied tool/env requirements before publish.

## Discovery mode

In **Discovery** mode the Master Agent does not point at one fixed registration. You define **Discovery filters**; at runtime the platform finds registry agents that match.

### Set Discovery filters

| Filter           | Purpose                              |
| ---------------- | ------------------------------------ |
| **Visibility**   | Public and/or Organisation           |
| **Deployed**     | Live and/or Test                     |
| **Input Modes**  | MIME types callers may send          |
| **Output Modes** | MIME types agents may return         |
| **Tags**         | Discoverability tags on Agent Cards  |
| **Auth**         | Auth scheme filters where applicable |

1. Configure filters parallel to the catalog sidebar.
2. Click **Save Filters** — creates a **Discovery Agent** node with `agent_node_type: "discovery"` and `discovery_filters`.
3. Open **Configuration** to select the **API key** (`apikeyid`) for runtime calls.
4. **Save** the graph.

UI copy:

> In Discovery Mode, the Master Agent will find and attach the agents automatically based on your filter criteria.

<Warning>
  Only **one Discovery** registry agent node is allowed per **Master Agent** node. Adding a second shows **Discovery Already Connected**.
</Warning>

Discovery nodes skip per-tool configuration validation used in Browse mode — the filter set defines what may attach at runtime.

## Persisted node fields

| Field               | Browse                 | Discovery                  |
| ------------------- | ---------------------- | -------------------------- |
| `agent_node_type`   | `"browse"`             | `"discovery"`              |
| `a2aregistryid`     | Selected registration  | —                          |
| `config_id`         | Build tool/env config  | —                          |
| `discovery_filters` | —                      | Saved filter object        |
| `apikeyid`          | Optional               | Required for runtime calls |
| `flowid`, `status`  | From selected build    | —                          |
| `integration_link`  | A2A endpoint reference | —                          |

## Permissions

* Configure registry nodes: **`flow_gen.studio.save_flow`** and related Graph Studio permissions
* Load registry list: **`assistants.flows:read`**

## Related pages

<CardGroup cols={2}>
  <Card title="Browse the catalog" icon="layout-grid" href="/agent-registry/catalog">
    Full workspace search and filters.
  </Card>

  <Card title="Endpoints & lifecycle" icon="plug" href="/agent-registry/endpoints-and-lifecycle">
    Hosted URLs and visibility at invoke time.
  </Card>

  <Card title="Agent node anatomy" icon="cube" href="/graph-studio/interface/node-library">
    Prompts, RAG, tools, and variables on standard agent nodes.
  </Card>
</CardGroup>
