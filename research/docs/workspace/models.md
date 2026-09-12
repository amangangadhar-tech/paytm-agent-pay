> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Models

> Models hub — Custom Models (BYOM) and Model Keys (BYOK) for agent nodes.

**Models** in the workspace sidebar groups two related surfaces:

| Child             | Purpose                                                                     |
| ----------------- | --------------------------------------------------------------------------- |
| **Custom Models** | BYOM — your own model endpoints ([Custom Models](/workspace/custom-models)) |
| **Model Keys**    | BYOK — provider keys for catalog models, plus **Phinite Key**               |

<Frame caption="BUILD → Models accordion — Custom Models and Model Keys">
  <img src="https://mintcdn.com/phinite/1VctjSmXCA5rNwu2/images/v2/workspace/02-models-hub.png?fit=max&auto=format&n=1VctjSmXCA5rNwu2&q=85&s=4660333591a584b1e76773692eb2c86e" alt="Models accordion with Custom Models and Model Keys" width="1440" height="900" data-path="images/v2/workspace/02-models-hub.png" />
</Frame>

## Model Keys (BYOK)

**Model Keys** let you bring your own provider credentials (BYOK) or use the platform **Phinite Key**. **Master Agent** and **Child Agent** nodes select which model and key to use for LLM calls on the **Agent Graph**.

<Note>
  **Save** the Agent Graph before **Build** after changing model or key on a node. Permission: `workspace.sidebar.byok`.
</Note>

### Where in the product

| Surface                        | Path                                                |
| ------------------------------ | --------------------------------------------------- |
| Workspace **Models** accordion | **Model Keys**                                      |
| URL                            | `/{org}/workspace/{workspaceId}/model-key`          |
| Per-node model                 | Graph Studio → agent node drawer → **Change model** |

<Frame caption="Model Keys — BYOK providers and Phinite Key">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/workspace/01-model-keys.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=2a92472d72a02ae9278aad7817baad80" alt="Model Keys workspace page" width="1772" height="976" data-path="images/v2/workspace/01-model-keys.png" />
</Frame>

### Workspace keys

1. Open **BUILD → Models → Model Keys** (or **Keys** if your nav still lists Model Keys there).
2. Add a provider key or use the default **Phinite Key** card.
3. Set which key is default for the workspace if prompted.

### Use on an agent node

1. Open **Graph Studio** and select a **Master Agent** or **Child Agent** node.
2. On **Details**, open **Change model**.
3. Leave **Bring your Own(Custom)** off to use Phinite credentials, or turn it on and choose **Bring your own Key** for BYOK.
4. Pick model and key, then **Done**.
5. **Save** the **Agent Graph** before **Build**.

<Info>
  The **Phinite Key** uses platform-managed credentials. BYOK keys are stored per workspace and never embedded in the graph JSON. For endpoints outside the catalog, use [Custom Models](/workspace/custom-models) (**Bring your own Model**).
</Info>

## Custom Models (BYOM)

See [Custom Models](/workspace/custom-models) for adding endpoints and the public Agent Card restriction on BYOM graphs.

## Related

<CardGroup cols={2}>
  <Card title="Custom Models" href="/workspace/custom-models">
    BYOM endpoints for Graph Studio.
  </Card>

  <Card title="Agent node" href="/graph-studio/interface/node-library">
    Drawer fields for prompts, tools, and model.
  </Card>

  <Card title="Graph Studio overview" href="/graph-studio/overview">
    Design Agent Graphs on the canvas.
  </Card>

  <Card title="Builds overview" href="/builds/overview">
    Freeze graph and tool versions into Agent Builds.
  </Card>
</CardGroup>
