> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Custom Models

> Bring your own model (BYOM) endpoints for Graph Studio orchestration.

**Custom Models** (BYOM — bring your own model) are workspace-defined endpoints for models outside the Phinite catalog — OpenAI-compatible, Azure, Anthropic, Bedrock, or Vertex. Configure API compatibility, deployment name, credentials, and capabilities here. Saved models appear in Graph Studio when you turn on **Bring your Own(Custom)** and choose **Bring your own Model**.

<Frame caption="Custom Models — workspace BYOM list">
  <img src="https://mintcdn.com/phinite/1VctjSmXCA5rNwu2/images/v2/byom/01-custom-models.png?fit=max&auto=format&n=1VctjSmXCA5rNwu2&q=85&s=7dd7fab4d90462bd24c5ebbf5e0b8586" alt="Custom Models workspace page" width="1440" height="900" data-path="images/v2/byom/01-custom-models.png" />
</Frame>

## Where in the product

| Surface           | Path                                                                                                       |
| ----------------- | ---------------------------------------------------------------------------------------------------------- |
| Workspace sidebar | **BUILD → Models → Custom Models**                                                                         |
| URL               | `/{org}/workspace/{workspaceId}/custom-models`                                                             |
| Per-node use      | Graph Studio → node **Details** → **Change model** → **Bring your Own(Custom)** → **Bring your own Model** |

<Note>
  Custom Models are distinct from [Model Keys](/workspace/models) (BYOK provider keys for catalog models). Models hub shows both: Custom Models + Model Keys.
</Note>

## Add a custom model

1. Open **BUILD → Models → Custom Models**.
2. Add a model (provider compatibility, endpoint, deployment name, credentials, capabilities).
3. Save — the model appears in the workspace list.
4. In Graph Studio, open an agent node **Details** tab and open **Change model**.
5. Enable **Bring your Own(Custom)**, select **Bring your own Model**, pick the model (or **+ Add New Model**), then **Done**.
6. **Save** the Agent Graph before **Build**.

<Frame caption="Change model — Bring your own Model selected">
  <img src="https://mintcdn.com/phinite/1VctjSmXCA5rNwu2/images/v2/byom/02-studio-byom.png?fit=max&auto=format&n=1VctjSmXCA5rNwu2&q=85&s=66284b5af5095aa3868b6a69aaf06e5b" alt="Change model modal with Bring your Own Custom and Bring your own Model" width="1440" height="900" data-path="images/v2/byom/02-studio-byom.png" />
</Frame>

## Public Agent Card restriction

Agent Graphs that use a **BYOM** model **cannot** be published as a **public** Agent Card. Replace the BYOM model with a supported catalog (or Phinite-managed) model before publishing publicly.

<Warning>
  This Agent Graph cannot be published as a Public Agent Card while it uses a BYOM model. Swap to a supported model first.
</Warning>

## Related

<CardGroup cols={2}>
  <Card title="Models hub" href="/workspace/models">
    Custom Models and Model Keys together.
  </Card>

  <Card title="Expose as A2A" href="/agent-registry/expose-your-flow">
    Agent Card publish path and visibility.
  </Card>
</CardGroup>
