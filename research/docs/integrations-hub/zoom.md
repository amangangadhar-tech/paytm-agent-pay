> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Zoom

> Manage Zoom meetings, users, webinars, cloud recordings, chat channels/messages, and past-meeting participants via the Zoom REST API.

## Overview

Phinite's **Zoom** predefined tool lets workspace agent graphs call Zoom APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Zoom meetings, users, webinars, cloud recordings, chat channels/messages, and past-meeting participants via the Zoom REST API.

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

1. Zoom Marketplace → Develop → Server-to-Server OAuth app → copy Account ID, Client ID, Client Secret → activate → generate access token.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Zoom**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **ZoomTool** (or search for Zoom)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 21 subtools for Zoom:

* List Meetings: List all scheduled and live meetings for a user
* Get Meeting: Get details of a specific meeting by meeting ID
* Create Meeting: Create a new meeting for a user. Type 1=instant, 2=scheduled, 3=recurring-no-fixed-time, 8=recurring-fixed-time
* Update Meeting: Update an existing meeting's details
* Delete Meeting: Delete a scheduled meeting permanently
* List Users: List all users on the Zoom account
* Get User: Get details of a specific user by user ID or email
* Create User: Create a new user on the Zoom account. Action 'create' (no email), 'autoCreate' (with email), 'custCreate' (custom), 'ssoCreate' (SSO)
* Update User: Update a user's profile information
* List Webinars: List all webinars for a user
* Get Webinar: Get details of a specific webinar
* Create Webinar: Create a new webinar for a user. Type 5=webinar, 6=recurring-no-fixed-time, 9=recurring-fixed-time
* Delete Webinar: Delete a scheduled webinar permanently
* Update Webinar: Update an existing webinar's details
* List Recordings: List all cloud recordings for a user within a date range
* Get Meeting Recordings: Get all cloud recordings for a specific meeting
* Delete Meeting Recordings: Delete all cloud recordings for a specific meeting permanently
* List Chat Channels: List all chat channels for the authenticated user
* Send Chat Message: Send a chat message to a channel or user. Provide either to\_channel or to\_contact, not both
* List Chat Messages: List chat messages for the authenticated user. Filter by to\_channel or to\_contact
* Get Past Meeting Participants: Get participants of a past meeting by meeting ID or UUID

## Documentation & resources

* Official documentation: `https://developers.zoom.us/docs/api/`

* Phinite documentation: [Zoom](https://docs.phinite.ai/docs/integrations-hub/zoom)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
