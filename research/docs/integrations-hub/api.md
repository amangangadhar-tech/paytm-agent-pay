> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# API

> Connect any REST API with configurable auth, headers, and retries,

## Overview

Phinite's **Custom API** predefined tool lets workspace agent graphs call Custom API APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Connect any REST API with configurable auth, headers, and retries,

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* See integration configuration fields in Phinite

## Setup steps

1. Identify the REST API base URL and authentication method (basic auth, API key, or headers).
2. Prepare username/password, API key, and any custom headers your API requires.
3. Log into your Phinite workspace at app.phinite.ai
4. Navigate to **Integrations** → **Predefined tools**
5. Select **Custom API**
6. Click **+ Add Configuration**
7. Enter the credential fields listed above
8. Select agent graphs that should use this connection
9. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **CustomApiTools** (or search for Custom API)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 1 subtool for Custom API:

* Make Request: Make an HTTP request to any API endpoint

## Documentation & resources

* Official documentation: `https://developer.mozilla.org/en-US/docs/Web/HTTP`
* Phinite documentation: [Custom API](https://docs.phinite.ai/docs/integrations-hub/api)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
