> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Quickstart

> Empty workspace to a deployable Agent Graph build.

End-to-end path from **Workspace Home** to a deployed build using current Graph Studio labels.

<CardGroup cols={2}>
  <Card title="About Phinite" icon="book-open" href="/getting-started/about-phinite">
    Platform overview and golden path.
  </Card>

  <Card title="Graph Studio" icon="diagram-project" href="/graph-studio/overview">
    Design nodes, tools, RAG, and variables on the canvas.
  </Card>

  <Card title="Builds" icon="layer-group" href="/builds/overview">
    Freeze graph + tool versions into an immutable build.
  </Card>

  <Card title="Deploy" icon="paper-plane" type="tip" href="/agents/deploy">
    Channel, Chat API, trigger, or A2A targets.
  </Card>
</CardGroup>

## Before you begin

You should already have:

* A verified **Phinite account**
* Access to a **workspace** (created at signup)
* Permission to create Agent Graphs in that workspace

<Note>
  If you haven't signed up yet, start at [Signing Up](/setup-account/signing-up).
</Note>

## Create and design an Agent Graph

1. Open **Workspace Home**.
2. Click **New Agent Graph**.
3. Enter **Agent Graph Name** and **Description**.
4. Choose **Conversational** or **Autonomous**.
5. Click **Create Agent Graph** — Graph Studio opens on the canvas.
6. Add and connect [nodes](/graph-studio/interface/node-library); attach [tools](/devstudio/custom-tools) and [RAG collections](/rag/attach-to-nodes) as needed.
7. Click **Save** on the toolbar.

<Frame caption="New Agent Graph — choose Conversational or Autonomous">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/agents/01-new-agent-graph-modal.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=029327c537bf856ac1282c0b5829683e" alt="New Agent Graph modal with type picker" width="1312" height="938" data-path="images/v2/agents/01-new-agent-graph-modal.png" />
</Frame>

<Tip>
  Use **Phinite Aura** in Graph Studio to scaffold a first draft from natural language, then refine on the canvas. See [Graph Studio methods](/graph-studio/methods).
</Tip>

## Build and assign an environment

1. Click **Build** on the Graph Studio toolbar.
2. Wait while Phinite validates the graph and packages tool versions.
3. Add a **Description** and confirm **Agent Graph** version and **Tools** (click **Publish** on any unpublished tool).
4. Click **Create Build**.
5. Assign the build to **DEV** (then **UAT** / **PROD** when ready).

<Frame caption="Build dialog — pin graph and tool versions">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/builds/03-build-form.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=6d31e2df50071cc2f9baa90ad6e12799" alt="Build form with graph and tool version pins" width="1772" height="976" data-path="images/v2/builds/03-build-form.png" />
</Frame>

## Deploy

1. Click **Deploy** on the Graph Studio toolbar.
2. Pick a target tab:

| Agent Graph type   | Deploy tabs                                          |
| ------------------ | ---------------------------------------------------- |
| **Conversational** | Deploy as A2A, Deploy to Channel, Deploy as Chat API |
| **Autonomous**     | Deploy as API, Cron job, Deploy as A2A (coming soon) |

3. Follow the in-modal steps for your chosen target.
4. Finish channel or trigger configuration in **Integrations** if prompted.

## Test before production

1. Click **Test** in Graph Studio to open the live chat or execution panel.
2. Send sample messages or trigger payloads.
3. Review node-by-node execution in the timeline ([Observability logs](/observability/logs)).

## After first deploy

| Goal             | Page                                                 |
| ---------------- | ---------------------------------------------------- |
| Channel webhooks | [Deploy to a channel](/agents/deploy-channel)        |
| API / Cron       | [Deploy a trigger](/agents/deploy-trigger)           |
| Public A2A link  | [Expose your flow](/agent-registry/expose-your-flow) |

## Troubleshooting

| Issue               | Resolution                                                   |
| ------------------- | ------------------------------------------------------------ |
| **Build** disabled  | **Save** the graph first; publish any unpublished tools      |
| **Deploy** disabled | Create at least one build                                    |
| Test messages fail  | Verify tools are published and env variables are set for DEV |
| Integration limit   | Upgrade workspace plan for multi-tool support                |

## Related

* [Build an agent graph](/graph-studio/overview)
* [Builds overview](/builds/overview)
* [Configure overview](/configure/overview)
* [Channels overview](/channels/overview)
