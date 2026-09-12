> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Interface layout

> Canvas, toolbar, node drawer, graph-level sidebar assets, variables, and RAG in Graph Studio.

Graph Studio splits design work across the **canvas**, **toolbar**, **node drawer**, and the left **sidebar** — including **graph-scoped assets** (versions, builds, cards, triggers, tools, integrations).

## Layout at a glance

| Area             | Role                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------- |
| **Left sidebar** | Phinite Aura, workspace links, **Graph assets** for the open graph                    |
| **Canvas**       | Design the Agent Graph; floating [node library](/graph-studio/interface/node-library) |
| **Node drawer**  | Configure the selected Master / Child agent                                           |
| **Toolbar**      | **Save** → **Build** → **Deploy** → **Test**                                          |

<Frame caption="Graph Studio — canvas, sidebar Graph assets, and toolbar">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/studio/14-github-studio-shell.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=3337e05dc951e8a2e89895faa437a13c" alt="GitHub graph with Graph assets sidebar" width="1440" height="900" data-path="images/v2/studio/14-github-studio-shell.png" />
</Frame>

## Canvas

* React Flow surface — pan, zoom, arrange nodes from the [node library](/graph-studio/interface/node-library).
* Drag **handles** to create [connections](/graph-studio/connections).
* Bottom controls: **With Prompt** / view mode, lock, fit, organize, zoom, undo/redo.
* Status footer shows block count (legacy label), intents count, last saved, and **⌘ + S Save**.

## Toolbar

| Control          | Action                                                                                |
| ---------------- | ------------------------------------------------------------------------------------- |
| **Save**         | Persist the current graph draft                                                       |
| **Build**        | Opens **Build Agent** — pins graph + tool versions                                    |
| **Deploy**       | Opens **Deploy Agent Build** (A2A / Channel / Chat API) — enabled when a build exists |
| **Test**         | Chat, voice, or autonomous test drawer                                                |
| **More actions** | Edit, Rename, Duplicate, Delete / Archive                                             |

See [Publishing](/graph-studio/publishing) and [Expose as A2A](/agent-registry/expose-your-flow).

## Node drawer (inspector)

Double-click a Master or Child agent to open the inspector. Tabs: **Details**, **RAG**, **Tools**, **Variables**.

Full tab walkthrough: [Node library — Configure Master / Child](/graph-studio/interface/node-library#configure-master--child-drawer).

<Frame caption="Node drawer — Details">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/studio/06-node-drawer-details.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=210108b4c8893120afa11fa1488b6cba" alt="Master Agent Details tab" width="1440" height="900" data-path="images/v2/studio/06-node-drawer-details.png" />
</Frame>

## Graph-level sidebar (Graph assets)

When a graph is open, the left nav shows **GRAPH ASSETS** — scoped to that graph (`?tab=` in the Studio URL). These manage assets **for the current Agent Graph**.

| Asset              | Opens                | What you do                                                                             |
| ------------------ | -------------------- | --------------------------------------------------------------------------------------- |
| **Graph Versions** | Design snapshots     | Compare / restore saved graph revisions before a new build                              |
| **Agent Builds**   | Build list + env map | Create builds, **Assign** to **DEV / UAT / PROD**, view tool & RAG counts, test a build |
| **Agent Cards**    | A2A versions         | See **Active deployments** (LIVE / Latest), version history                             |
| **Triggers**       | Graph triggers       | List API (and other) triggers bound to this graph                                       |
| **Integrations**   | Graph integrations   | Integrations referenced by nodes on this canvas                                         |
| **Tools**          | Graph tools          | Tools attached on Master / Child / Tool nodes for this graph                            |

### Graph Versions

Saved **design** snapshots of the canvas (prompts, nodes, edges) — separate from immutable **Agent Builds**.

### Agent Builds

Immutable snapshots of graph + published tools (+ RAG). The panel shows:

* **Environment assignments** — which build is on **DEV**, **UAT**, **PROD**
* Build rows — description, tool count, RAG count, timestamp
* Actions — **Build**, **Assign**, **Test build**, **View build details**

<Frame caption="Agent Builds — DEV / UAT / PROD and build history">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/studio/19-github-agent-builds.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=9577110046acc98522892be62bc15d75" alt="Agent Builds sidebar" width="1440" height="900" data-path="images/v2/studio/19-github-agent-builds.png" />
</Frame>

After a build exists, toolbar **Deploy** unlocks. See [Publishing](/graph-studio/publishing).

### Agent Cards

Graph-scoped **A2A registry** view — **Active deployments**, version list, or empty until **Deploy → Deploy as A2A**.

<Frame caption="Agent Cards — Active deployments">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/a2a/01-agent-cards-sidebar.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=5bc8ccf59c32ef2cc4c7583c1b36d3fa" alt="Agent Cards sidebar" width="1440" height="900" data-path="images/v2/a2a/01-agent-cards-sidebar.png" />
</Frame>

See [Agent Cards](/agent-registry/agent-cards).

### Triggers

Lists triggers attached to this graph. Configure payloads under [Triggers](/triggers-intents/overview).

<Frame caption="Triggers — graph-scoped list">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/studio/18-github-triggers.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=e4df7778e3091b7fbf5a966c7a279e96" alt="Triggers asset panel" width="1440" height="900" data-path="images/v2/studio/18-github-triggers.png" />
</Frame>

### Integrations

Integrations Hub connections used by this graph. Manage credentials in [Integrations Hub](/integrations-hub/overview).

### Tools

Graph-level inventory of tools on the canvas. Author tools in [Tools & Dev Studio](/devstudio/overview); attach from the node drawer (**Add a new tool**).

## Workspace sidebar (above Graph assets)

| Item             | Role                                                    |
| ---------------- | ------------------------------------------------------- |
| **Phinite Aura** | Studio assistant — generate or edit the graph from chat |
| **Agent Graphs** | Switch or create graphs                                 |
| **Evaluations**  | Workspace evaluation runs (not a Graph asset)           |
| **Governance**   | Workspace governance policies                           |

## Variables

Variables carry state through an Agent Graph at three layers: **graph schemas**, **per-node input/capture**, and **runtime session** values.

<Frame caption="Node drawer — Capture Variables">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/studio/07-node-drawer-variables.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=542afea5bcb40b02b7bdd301b764928e" alt="Capture Variables on an agent node" width="1440" height="900" data-path="images/v2/studio/07-node-drawer-variables.png" />
</Frame>

| Layer                      | Where                                          | Purpose                                        |
| -------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| **Graph / flow variables** | Workspace / graph schemas                      | Defaults for the whole graph                   |
| **Node input**             | Drawer → **Variables** → **Input Variables**   | Map flow or session into an agent step         |
| **Node capture**           | Drawer → **Variables** → **Capture Variables** | Fields the model extracts for downstream steps |
| **Session variables**      | Runtime                                        | User, system, tool-returned, and capture state |

### Input and capture

1. Double-click a Master or Child agent → **Variables** tab.
2. Under **Input Variables**, use **Pick from Session variables** to map values.
3. Under **Capture Variables**, click **Create a variable** for each field to extract.
4. **Save** the graph.

### Session variable types

| Type                       | How it is set                                         |
| -------------------------- | ----------------------------------------------------- |
| **Capture variables**      | Agent extracts during the run                         |
| **Tool-returned capture**  | Custom tools return `captured_variables`              |
| **User variables**         | Passed in the API payload before a run                |
| **System variables**       | Auto-set — e.g. `workflow_id`, `conversation_history` |
| **Predefined tool output** | Entire tool output stored as session state            |

<Note>
  Environment secrets belong in [Env. variables](/configure/env-variables), not graph variable definitions.
</Note>

Variable chips also appear on agent nodes on the canvas. Runtime inspection: [Variable capture logs](/observability/logs/variables).

## RAG

**RAG** grounds agent answers in your documents and structured data.

| Layer               | Where                            | Purpose                              |
| ------------------- | -------------------------------- | ------------------------------------ |
| **RAG Data**        | Workspace sidebar **RAG Data**   | Create and index collections once    |
| **Node attachment** | Graph Studio → agent **RAG** tab | Select sources per Master/Child step |

### Create collections

1. Open workspace **RAG Data**.
2. Create a **data source** and add documents or structured items.
3. Index collections before attaching to graphs.

Supported sources include PDF, CSV, text, datasets, and API-connected endpoints.

<Frame caption="Workspace RAG Data — collections">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/rag/01-data-sources.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=5e22d955ca26206e4e95a0054ed90faf" alt="RAG Data workspace page" width="1772" height="976" data-path="images/v2/rag/01-data-sources.png" />
</Frame>

### Attach to an agent node

1. Select an agent node → **RAG** tab.
2. Use **Attach Files** or select data source items for this step only.
3. **Save** the graph.

<Frame caption="Node drawer — RAG tab">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/studio/11-node-drawer-rag.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=11b6f7576df36192acdf4c1f55f851e2" alt="RAG tab on agent node" width="1440" height="900" data-path="images/v2/studio/11-node-drawer-rag.png" />
</Frame>

<Tip>
  Attach only collections relevant to each step — narrower retrieval improves answer quality.
</Tip>

Attached RAG lists save with the graph version and pin on **Build**. See [Publishing](/graph-studio/publishing).

## Related

* [Node library](/graph-studio/interface/node-library) — palette, types, anatomy, drawer tabs
* [Connections](/graph-studio/connections)
* [Publishing](/graph-studio/publishing)
