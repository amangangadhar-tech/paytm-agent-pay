> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Agent Registry glossary

> Industry and A2A terminology mapped to Phinite UI labels, API fields, and MIME modes.

This glossary aligns **Agent-to-Agent (A2A)** vocabulary with what you see in Graph Studio, Agent Registry, and the gateway. For protocol details beyond Phinite, see the official **[A2A protocol specification](https://a2a-protocol.org/latest/specification/)**.

## Industry terminology map

| Industry / A2A term                 | Phinite UI / API                                | Meaning                                                                                     |
| ----------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **Agent Card**                      | Agent Card (wizard step 3)                      | Public identity: name, description, skills, tags, visibility                                |
| **Agent Registry**                  | Agent Registry sidebar                          | Workspace catalog of registered A2A agents                                                  |
| **A2A endpoint / Hosted agent URL** | `/api/v1/ai/a2a/{flowId}` or `.../{registryId}` | Callable agent over the Agent-to-Agent protocol                                             |
| **Skills**                          | Skills in wizard                                | Callable capabilities with input/output MIME modes                                          |
| **Discoverability tags**            | Discoverability Tags                            | Metadata for search and Discovery filters                                                   |
| **Deployment status**               | Test / Live badges                              | `test` = validation build; `live` = production (one live per flow per workspace)            |
| **Visibility**                      | Public / Organisation                           | `public` = any A2A client with a valid API key; `organization` = same organisation only     |
| **Promote to Live**                 | Agent Cards / promote action                    | `PUT .../promote-live` — demotes other live builds for the same flow                        |
| **Browse mode**                     | Browse tab on agent node                        | Master agent calls a **specific** registry agent                                            |
| **Discovery mode**                  | Discovery tab on agent node                     | Master agent **auto-selects** agents matching saved filters at runtime                      |
| **Agent Graph**                     | Agent Graph (Studio)                            | The workflow backing the registered agent — replaces legacy "Assistant" / "Flow" in UI copy |

## Phinite Connector (Claude)

Terms used when calling registry agents from Claude via the [Phinite Connector](/agent-registry/invoke-a2a-from-claude):

| Term                      | Meaning                                                                                                           |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Phinite Connector**     | Claude plugin that authenticates to Phinite and exposes registry tools                                            |
| **`list_agents`**         | Returns up to 50 published agents in your organisation (unfiltered browse)                                        |
| **`discover_agents`**     | Natural-language search over agent name, description, and skills; optional `status` (`live` / `test`) and `limit` |
| **`call_agent`**          | Sends a message to an agent by `registry_id`; optional `task_id` for multi-turn context                           |
| **`task_id`**             | A2A task identifier returned on first `call_agent` response; pass on follow-ups to continue the same conversation |
| **Credential setup link** | URL to `/public/agent-config` when an agent needs integration credentials before running                          |

## UI labels vs documentation terms

| Product UI label | Preferred docs term | Where it appears                                                      |
| ---------------- | ------------------- | --------------------------------------------------------------------- |
| **Agent Block**  | **Agent Node**      | Browse / Discovery panel when attaching registry agents on the canvas |
| **Flow**         | **Agent Graph**     | Project and Studio navigation (same underlying workflow)              |
| **Organisation** | Organisation        | Registry filters and Agent Card visibility (British spelling in UI)   |

When writing integrations or internal runbooks, prefer **Agent Node** and **Agent Graph** for consistency with **[Graph Studio](/graph-studio/overview)** documentation.

## MIME input and output modes

Skills and registry filters declare which content types an agent accepts and returns. Phinite supports the following MIME types in Agent Registry filters and skill configuration:

| MIME type                                                        | Typical use               |
| ---------------------------------------------------------------- | ------------------------- |
| `text/plain`                                                     | Plain text messages       |
| `text/markdown`                                                  | Markdown-formatted text   |
| `text/html`                                                      | HTML content              |
| `application/json`                                               | Structured JSON payloads  |
| `application/pdf`                                                | PDF documents             |
| `application/octet-stream`                                       | Binary or opaque payloads |
| `image/png`, `image/jpeg`, `image/webp`                          | Image inputs or outputs   |
| `video/mp4`                                                      | Video content             |
| `audio/mpeg`, `audio/wav`, `audio/ogg`, `audio/aac`, `audio/mp4` | Audio content             |

**Input modes** describe what callers may send to a skill; **output modes** describe what the agent may return. Discovery mode on an agent node can filter registry agents by matching input and output MIME modes at runtime.

## Related pages

<CardGroup cols={2}>
  <Card title="Invoke from Claude" href="/agent-registry/invoke-a2a-from-claude" icon="plug">
    Install the connector, discover agents, and manage credentials.
  </Card>

  <Card title="Overview" href="/agent-registry/overview" icon="circle-info">
    End-to-end Agent Registry concepts and workflow.
  </Card>

  <Card title="Endpoints & lifecycle" href="/agent-registry/endpoints-and-lifecycle" icon="plug">
    Hosted URL patterns, test vs live, and promotion.
  </Card>

  <Card title="Registry agent nodes" href="/agent-registry/registry-agent-nodes" icon="share-nodes">
    Browse vs Discovery on the canvas.
  </Card>

  <Card title="Platform glossary" href="/reference/glossary-v2" icon="book">
    Broader Phinite terminology (Agent Graphs, builds, tools).
  </Card>
</CardGroup>
