> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# MCP Client

> Dynamically proxy any tool exposed by a remote MCP server over SSE or Streamable HTTP transport with optional authentication.

## Overview

Phinite's **MCP Client** predefined tool lets workspace agent graphs call MCP Client APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Dynamically proxy any tool exposed by a remote MCP server over SSE or Streamable HTTP transport with optional authentication.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

<Note>
  MCP Client connects agents to external MCP servers dynamically. Ensure the endpoint is reachable from Phinite and uses a supported transport.
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* MCP Server Endpoint URL `endpoint` (required)
* Transport (sse or httpStreamable) `transport` (required)
* Authentication Type `authentication_type` (optional)
* Authentication Token `authentication_token` (optional)
* Timeout (ms) `timeout` (optional)

## Setup steps

1. Deploy or identify the MCP server endpoint URL (SSE or streamable HTTP).
2. Configure authentication (none, bearer token, or custom) as required by the server.
3. Choose transport (`sse` or `httpStreamable`) and optional timeout in milliseconds.
4. Log into your Phinite workspace at app.phinite.ai
5. Navigate to **Integrations** → **Predefined tools**
6. Select **MCP Client**
7. Click **+ Add Configuration**
8. Enter the credential fields listed above
9. Select agent graphs that should use this connection
10. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **McpClientTool** (or search for MCP Client)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 1 subtool for MCP Client:

* Call Tool: Call a specific tool exposed by the connected MCP server, passing the tool name and its input parameters.

## Documentation & resources

* Official documentation: `https://modelcontextprotocol.io/`
* Phinite documentation: [MCP Client](https://docs.phinite.ai/docs/integrations-hub/mcp-client-tool)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
