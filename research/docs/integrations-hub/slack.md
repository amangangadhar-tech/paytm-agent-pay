> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Slack

> Send and manage Slack messages, reactions, channels, users, scheduled messages, and pins via the Slack Web API.

## Overview

Phinite's **Slack** predefined tool lets workspace agent graphs call Slack APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Send and manage Slack messages, reactions, channels, users, scheduled messages, and pins via the Slack Web API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Bot Token `bot_token` (required)
* App Token `app_token` (optional)

## Setup steps

1. Create a Slack app at api.slack.com and install it to your workspace.
2. Copy the Bot User OAuth Token with the scopes your subtools require.
3. Log into your Phinite workspace at app.phinite.ai
4. Navigate to **Integrations** → **Predefined tools**
5. Select **Slack**
6. Click **+ Add Configuration**
7. Enter the credential fields listed above
8. Select agent graphs that should use this connection
9. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **SlackTool** (or search for Slack)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 14 subtools for Slack:

* Update Message: Update the text content of an existing Slack message
* Delete Message: Delete a message from a Slack channel
* Schedule Message: Schedule a message to be sent to a Slack channel at a future Unix timestamp (up to 120 days ahead)
* Add Reaction: Add an emoji reaction to a message in a Slack channel
* Remove Reaction: Remove an emoji reaction from a message in a Slack channel
* List Users: List all users in the Slack workspace
* Get User Info: Get detailed information about a specific Slack user by their user ID
* Lookup User By Email: Find a Slack user by their email address
* Create Channel: Create a new public or private Slack channel
* Invite To Channel: Invite one or more users to a Slack channel
* Set Channel Topic: Set the topic of a Slack channel
* Archive Channel: Archive a Slack channel. Archived channels cannot receive new messages.
* Pin Message: Pin a message to a Slack channel
* Unpin Message: Unpin a message from a Slack channel

## Documentation & resources

* Official documentation: `https://api.slack.com/docs`
* Phinite documentation: [Slack](https://docs.phinite.ai/docs/integrations-hub/slack)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
