> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Invoke A2A agents from Claude

> Install the Phinite Connector plugin and call Agent Registry agents from Claude.

<Note>
  The Phinite Connector lets Claude **discover** and **call** agents from your workspace **Agent Registry** using OAuth — no manual A2A URL construction required.
</Note>

The Phinite plugin lives in this GitHub marketplace:

> [**https://github.com/Auto-AI-Labs/phinite-plugins**](https://github.com/Auto-AI-Labs/phinite-plugins)

## Install in Cowork (desktop — paid Claude)

1. Open **Customize → Plugins → Personal**.
2. Click **+**.
3. Click **Add marketplace → Add from a repository**.
4. Add a marketplace using the GitHub link above.
5. Install the **Phinite Agents** plugin.
6. Click **Manage**.
7. Open **Connectors** → **Install → Connect**, and sign in to your Phinite account.
8. Send a request to Claude — it will discover and invoke registry agents for you.

## Install in Claude Code (CLI / terminal)

```text theme={null}
/plugin marketplace add Auto-AI-Labs/phinite-plugins
/plugin install phinite-agents@phinite
/reload-plugins
```

Send **Authorize phinite plugin** and sign in to Phinite when prompted (OAuth).

## Install in Claude web (claude.ai) or free Claude

On claude.ai there is no plugin marketplace — add Phinite as a **custom connector**:

1. Go to **Settings → Connectors → Add custom connector**.
2. Paste the Phinite MCP server URL:

```text theme={null}
https://app.phinite.ai/api/v1/ai/mcp
```

3. Click **Add**, then **Connect**, and sign in to your Phinite account.

## How to use it

Once connected, talk to Claude naturally:

```text theme={null}
"What agents do I have?"
"Find an agent that can book my appointments"
"Ask the sales agent to qualify this lead: ..."
"Now make that shorter"
```

**Behind the scenes**, the plugin exposes three tools:

| Tool                  | Purpose                                    |
| --------------------- | ------------------------------------------ |
| **`discover_agents`** | Find the right agent from natural language |
| **`list_agents`**     | List agents in your workspace (up to 50)   |
| **`call_agent`**      | Invoke an agent by `registry_id`           |

**Follow-ups stay in the same thread** — Claude reuses the agent's `task_id` for multi-turn context.

**If an agent needs integration credentials** (Gmail, Slack, etc.), the response includes a **setup link** to `/public/agent-config`. Complete setup, then ask Claude to continue.

<Tip>
  Agent **visibility** (`public` vs `organisation`) and API key rules apply at invoke time — see [Endpoints & lifecycle](/agent-registry/endpoints-and-lifecycle).
</Tip>

You'll need a Phinite account. Build and expose Agent Graphs at [phinite.ai](https://app.phinite.ai/sign-up).

## Related pages

<CardGroup cols={2}>
  <Card title="Overview" icon="circle-info" href="/agent-registry/overview">
    How the registry fits into build and compose workflows.
  </Card>

  <Card title="Browse the catalog" icon="layout-grid" href="/agent-registry/catalog">
    Workspace search — same metadata `discover_agents` uses.
  </Card>

  <Card title="Endpoints & lifecycle" icon="plug" href="/agent-registry/endpoints-and-lifecycle">
    Hosted A2A URLs, TEST vs LIVE, and authentication.
  </Card>

  <Card title="Glossary" icon="book-open" href="/agent-registry/glossary">
    A2A terms, connector tools, and UI label mapping.
  </Card>
</CardGroup>
