> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Connections and logic

> Handles, edges, and conditional branches on the Agent Graph canvas.

**Connections** define execution order: **handles** are attachment points; **edges** link nodes.

## Handles

Each node exposes **source** (outbound) and **target** (inbound) handles. Hover a node to reveal them. Only compatible pairs can be linked.

## Edges

1. Drag from a **source** handle on the upstream node.
2. Drop on a **target** handle on the downstream node.
3. **Save** the graph.

<Tip>
  Invalid connections are rejected in the UI.
</Tip>

## Conditional edges

Branch by creating **multiple outbound edges** from a Master or Child Agent and labeling each path (for example `delegate_flight_search`, `complete_itinerary_delivered`):

1. Drag additional edges from the source handle to each target node.
2. Name or label edges so the orchestrator can choose a path from capture/session state.
3. **Save** and **Test** every branch path to **End**.

<Warning>
  Dead branches cause incomplete runs — test all paths.
</Warning>

## Related

* [Node types](/graph-studio/interface/node-library)
* [Variables](/graph-studio/interface#variables)
* [Agent configuration](/graph-studio/interface/node-library)
