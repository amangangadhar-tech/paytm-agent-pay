> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Microsoft Teams

> Manage Microsoft Teams teams, channels, messages, chats, members, online meetings, and Planner tasks via the Microsoft Graph API.

## Overview

Phinite's **Microsoft Teams** predefined tool lets workspace agent graphs call Microsoft Teams APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Microsoft Teams teams, channels, messages, chats, members, online meetings, and Planner tasks via the Microsoft Graph API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Access Token `access_token` (required)

## Setup steps

1. Register an app in Microsoft Entra ID with Microsoft Graph permissions for Teams.
2. Obtain an access token with `ChannelMessage.Send` or related scopes.
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
3. Choose **MicrosoftTeamsTool** (or search for Microsoft Teams)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 27 subtools for Microsoft Teams:

* List Joined Teams: List all Microsoft Teams teams the authenticated user has joined
* Get Team: Get details of a specific Microsoft Teams team by its ID
* Create Team: Create a new Microsoft Teams team. Returns 202 Accepted with an async operation location.
* Update Team: Update a Microsoft Teams team's settings (display name, description, member/guest/messaging settings)
* List Channels: List all channels in a Microsoft Teams team
* Get Channel: Get details of a specific channel in a team
* Create Channel: Create a new channel in a Microsoft Teams team. Max 50 chars for displayName.
* Delete Channel: Delete a channel from a Microsoft Teams team. Cannot delete the General channel.
* Update Channel: Update a channel's display name and/or description in a Microsoft Teams team
* Send Channel Message: Send a message to a channel in a Microsoft Teams team
* List Channel Messages: List messages in a channel. Returns top N messages.
* Reply To Message: Reply to a specific message in a channel thread
* Send Chat Message: Send a message to a 1:1 or group chat
* List Chats: List all chats the authenticated user is part of
* Get Chat: Get details of a specific chat by its ID
* List Chat Messages: List messages in a specific chat
* Get Chat Message: Get a specific message from a chat by message ID
* List Members: List all members of a Microsoft Teams team
* Add Member: Add a member to a Microsoft Teams team
* Remove Member: Remove a member from a Microsoft Teams team
* Create Online Meeting: Create a Microsoft Teams online meeting
* Get Online Meeting: Get details of a specific online meeting by its ID
* Create Task: Create a new Microsoft Planner task in a plan bucket
* Get Task: Get details of a specific Microsoft Planner task by its ID
* List Tasks: List Planner tasks — all tasks in a specific plan (if plan\_id provided), or all tasks assigned to the current user
* Update Task: Update a Planner task's title, due date, percent complete, or bucket
* Delete Task: Delete a Microsoft Planner task by its ID

## Documentation & resources

* Official documentation: `https://learn.microsoft.com/en-us/graph/api/resources-teams-overview`
* Phinite documentation: [Microsoft Teams](https://docs.phinite.ai/docs/integrations-hub/microsoft-teams)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
