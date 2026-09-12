> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# A2A endpoints & lifecycle

> Hosted URL patterns, TEST vs LIVE builds, promotion, authentication, and registry API endpoints.

<Note>
  Always use the **hosted A2A URL** copied from **Agent Registry** or **Agent Cards** — URL host varies by tenant and environment.
</Note>

## Hosted A2A URLs

External callers reach registered agents through the **API gateway** AI-core lane. The frontend builds URLs with the same rules as `buildA2aUrl` in the product:

| Deployment status | URL pattern                                     | Example shape                                    |
| ----------------- | ----------------------------------------------- | ------------------------------------------------ |
| **Live**          | `{gateway}/api/v1/ai/a2a/{flowId}`              | Production routing; registry ID omitted          |
| **Test**          | `{gateway}/api/v1/ai/a2a/{flowId}/{registryId}` | Validation build tied to a specific registry row |

```text theme={null}
# Live (example from Deploy modal)
https://webhook.dev.phinite.ai/api/v1/ai/a2a/{flowId}

# Test / build-scoped (shape shown in Deploy as A2A copy)
…/a2a/{flowId}/build-{n}
# or registry-id path
…/a2a/{flowId}/{a2aregistryid}
```

Replace the host with your environment's gateway base (for example `webhook.dev.phinite.ai`). Always **Copy URL** from **Deploy** → existing endpoints or Agent Cards rather than hand-building paths.

## Registry lifecycle

Each expose action creates an **A2A registry** row with deployment status **`test`** by default.

| Status     | Meaning                                    | Hosted URL                      |
| ---------- | ------------------------------------------ | ------------------------------- |
| **`test`** | Internal validation before broad discovery | Includes `{registryId}` in path |
| **`live`** | Production build for the Agent Graph       | Short path with `{flowId}` only |

**One LIVE build per Agent Graph per workspace.** Promoting a build to LIVE demotes any previous LIVE row for the same `flowid` back to **`test`**.

### Lifecycle workflow

1. **Expose** — [Deploy as A2A](/agent-registry/expose-your-flow) creates a TEST registry row and Agent Card.
2. **Validate** — call the TEST hosted URL; verify skills and exported tool/env config.
3. **Push To Prod** — `PUT /api/v1/a2a-registry/{a2aregistryid}/promote-live`.
4. Previous LIVE for the same graph demotes to **TEST**.

### Promote to LIVE

From [Agent Cards](/agent-registry/agent-cards), select a TEST build and use **Push To Prod**:

```text theme={null}
PUT /api/v1/a2a-registry/{a2aregistryid}/promote-live
```

No request body required. Response is the updated registry document with `status: "live"`.

## Visibility and authentication

| Visibility         | UI label     | Invoke behaviour                                                    |
| ------------------ | ------------ | ------------------------------------------------------------------- |
| **`public`**       | Public       | Callable by any client with a valid Phinite **API key**             |
| **`organization`** | Organisation | Callable only when the API key belongs to the **same organisation** |

At runtime, gateway **`A2ARegistryAccess`** middleware validates visibility (e.g. `POST /api/v1/ai/a2a/agents/{registryId}`).

**Auth scheme:** callers use your organisation's **API key** (JWT) in the `X-API-Key` header unless your deployment configures additional schemes.

Integrators consume from the **Agent Card**:

* Name, description, skills (input/output MIME modes)
* Discoverability tags
* Hosted URL (TEST vs LIVE pattern above)

Protocol reference: [A2A specification](https://a2a-protocol.org/latest/specification/).

## External clients (Claude Connector)

End users can call registry agents from **Claude** via the [Phinite Connector](/agent-registry/invoke-a2a-from-claude) without constructing A2A URLs manually.

| Layer                | Behaviour                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Connector auth**   | User signs in to Phinite when connecting the plugin                                                         |
| **Discovery**        | `discover_agents` / `list_agents` query the same registry metadata as the workspace catalog                 |
| **Invocation**       | `call_agent` maps to A2A `SendMessage` on `POST /api/v1/ai/a2a/agents/{registryId}`                         |
| **Multi-turn**       | Pass `task_id` from a prior response to continue the same A2A task                                          |
| **Tool credentials** | Missing integration config returns **`TASK_STATE_AUTH_REQUIRED`** with a link to **`/public/agent-config`** |

## Registry management API

Base path: **`/api/v1/a2a-registry`**. Requires gateway authentication (session cookie or Bearer / API key).

| Method   | Path                                         | Purpose                                          |
| -------- | -------------------------------------------- | ------------------------------------------------ |
| `GET`    | `/a2a-registry`                              | List registry rows                               |
| `GET`    | `/a2a-registry/{a2aregistryid}`              | Get one row (`?flow=true` includes flow payload) |
| `POST`   | `/a2a-registry?workspaceid=...`              | Create registration (Expose wizard)              |
| `PUT`    | `/a2a-registry/{a2aregistryid}`              | Update registration                              |
| `PUT`    | `/a2a-registry/{a2aregistryid}/promote-live` | Promote to LIVE                                  |
| `DELETE` | `/a2a-registry/{a2aregistryid}`              | Delete registration                              |

**Permissions:** `assistants.flows:read|create|update|delete` depending on operation.

### Useful list query parameters

| Parameter        | Values                   | Use                                        |
| ---------------- | ------------------------ | ------------------------------------------ |
| `workspaceid`    | string                   | **Required** — scopes to workspace         |
| `orgid`          | string                   | Organisation filter                        |
| `status`         | `test`, `live`           | Deployment filter                          |
| `visibility`     | `public`, `organization` | Visibility filter                          |
| `flowid`         | string                   | All builds for one Agent Graph             |
| `flow_list=true` | boolean                  | Distinct flows only (Agent Cards dropdown) |
| `pagination`     | `true` / `false`         | Paginated vs full list                     |

## Related pages

<CardGroup cols={2}>
  <Card title="Invoke from Claude" href="/agent-registry/invoke-a2a-from-claude" icon="plug">
    Phinite Connector install, tools, and credential setup.
  </Card>

  <Card title="Expose an agent" href="/agent-registry/expose-your-flow" icon="rocket">
    Create a TEST build and Agent Card.
  </Card>

  <Card title="Agent Cards" href="/agent-registry/agent-cards" icon="layers">
    Promote TEST builds to LIVE.
  </Card>

  <Card title="Glossary" href="/agent-registry/glossary" icon="book-open">
    A2A terms and MIME modes.
  </Card>
</CardGroup>
