> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Microsoft Teams (Legacy)

> Send messages and approvals in Microsoft Teams, integrate Graph permissions,

## Overview

Phinite's **Microsoft Teams** predefined tool lets workspace agent graphs call Microsoft Teams APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Send messages and approvals in Microsoft Teams, integrate Graph permissions,

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

<Note>
  This legacy Teams tool variant is superseded by the **Microsoft Teams** predefined tool. See [Microsoft Teams](/integrations-hub/microsoft-teams) for the recommended integration.
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* See integration configuration fields in Phinite

## Setup steps

1. Register an app in Microsoft Entra ID and obtain App ID, App Secret, and Tenant ID.
2. Configure Teams channel or conversation IDs if sending to a specific channel.
3. Log into your Phinite workspace at app.phinite.ai
4. Navigate to **Integrations** → **Predefined tools**
5. Select **Microsoft Teams**
6. Click **+ Add Configuration**
7. Enter the credential fields listed above
8. Select agent graphs that should use this connection
9. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **TeamsTool** (or search for Microsoft Teams)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 1 subtool for Microsoft Teams:

* Send For Approval: Send a confirmation message on Teams with captured variable values

## Documentation & resources

* Official documentation: `https://learn.microsoft.com/en-us/graph/teams-concept-overview`
* Phinite documentation: [Microsoft Teams](https://docs.phinite.ai/docs/integrations-hub/teams)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
