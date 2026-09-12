> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Google Meet

> Manage Google Meet spaces, conference records, participants, recordings, and transcripts via the Google Meet REST API v2.

## Overview

Phinite's **Google Meet** predefined tool lets workspace agent graphs call Google Meet APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Google Meet spaces, conference records, participants, recordings, and transcripts via the Google Meet REST API v2.

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

1. Use a Google Cloud project with Google Meet API enabled and OAuth or service-account credentials with Meet scopes.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Google Meet**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **GoogleMeetTool** (or search for Google Meet)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 16 subtools for Google Meet:

* Create Space: Create a new Google Meet meeting space. Returns the meeting URI, meeting code, and space name.
* Get Space: Get details about a Google Meet meeting space by its space name or meeting code.
* Update Space: Update a Google Meet meeting space configuration such as access type or entry point access.
* End Active Conference: End the active conference in a Google Meet meeting space.
* Get Conference Record: Get a Google Meet conference record by its resource name. Returns start/end times and space info.
* List Conference Records: List Google Meet conference records with optional pagination.
* Get Participant: Get a participant from a Google Meet conference record by their resource name.
* List Participants: List participants in a Google Meet conference record.
* Get Participant Session: Get a specific participant session from a Google Meet conference record.
* List Participant Sessions: List participant sessions for a participant in a Google Meet conference record.
* Get Recording: Get a recording from a Google Meet conference record. Returns state, timestamps, and Drive file info.
* List Recordings: List recordings from a Google Meet conference record.
* Get Transcript: Get a transcript from a Google Meet conference record. Returns state, timestamps, and Docs destination.
* List Transcripts: List transcripts from a Google Meet conference record.
* Get Transcript Entry: Get a specific transcript entry (single speech segment) from a Google Meet transcript.
* List Transcript Entries: List transcript entries (speech segments) for a Google Meet transcript.

## Documentation & resources

* Official documentation: `https://developers.google.com/meet`

* Phinite documentation: [Google Meet](https://docs.phinite.ai/docs/integrations-hub/google-meet)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
