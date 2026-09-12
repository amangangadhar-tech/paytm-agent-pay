> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Attach RAG collections to nodes

> Ground Master and Child Agent nodes in workspace collections with threshold and top k.

In Graph Studio, agent nodes retrieve from **collections**, not from individual uploaded files. Open the node drawer **RAG** tab to attach collections and tune retrieval.

<Frame caption="Node RAG tab — Attach collection and Knowledge list">
  <img src="https://mintcdn.com/phinite/1VctjSmXCA5rNwu2/images/v2/rag/06-node-rag-collections.png?fit=max&auto=format&n=1VctjSmXCA5rNwu2&q=85&s=d5478c974aefd3f8ecec800bb94764a6" alt="Phinite agent RAG tab with Attach collection and asif-test attached" width="1440" height="900" data-path="images/v2/rag/06-node-rag-collections.png" />
</Frame>

## Attach a collection

1. Open the **Agent Graph** in Graph Studio.
2. Select a **Master Agent** or **Child Agent** node (double-click if the drawer is closed).
3. Open the **RAG** tab.
4. Click **Attach collection**.
5. Select one or more workspace collections, then confirm.
6. Click **Save** on the Studio toolbar.

Attached collections show under **Knowledge** with a **rag** badge and on the node card as a folder label.

<Info>
  The drawer copy reads **Ground answers in your collections** — the agent retrieves relevant chunks before responding, not only what the model already knows.
</Info>

## Threshold and top k

On the **RAG** tab, set retrieval controls for the node:

| Control       | Meaning                              | Defaults (product)         |
| ------------- | ------------------------------------ | -------------------------- |
| **Threshold** | Similarity floor for returned chunks | `0.20`                     |
| **Top k**     | Maximum chunks retrieved per query   | `3` (range typically 1–20) |

Raise **top k** when answers need broader context; raise **threshold** when you want only strong matches. Changes persist on the node when you commit the sliders/steppers — still **Save** the graph before **Build**.

## Detach or view

* Use **View** on a collection row to open collection details.
* Remove a collection from the node when it should no longer ground that agent.
* Manage sources and chunking on **BUILD → RAG Collections** ([connectors](/rag/connectors)).

## Related

<CardGroup cols={2}>
  <Card title="RAG overview" href="/rag/overview">
    Workspace collections and chunking.
  </Card>

  <Card title="Node library" href="/graph-studio/interface/node-library">
    Agent node drawers: Details, RAG, Tools, Variables.
  </Card>
</CardGroup>
