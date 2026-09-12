> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Google Calendar

> Create, update, and query events, check availability, send invites,

## Overview

Phinite's **Google Calendar** predefined tool lets workspace agent graphs call Google Calendar APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Create, update, and query events, check availability, send invites,

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

1. Create a Google Cloud project, enable Calendar API, and configure OAuth or a service account.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Google Calendar**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **GoogleCalendarTool** (or search for Google Calendar)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 7 subtools for Google Calendar:

* List Events: List upcoming events from a calendar
* Create Event: Create a new calendar event
* Update Event: Update an existing calendar event
* Delete Event: Delete a calendar event
* Fetch All Events: Fetch events within a date range
* Find Available Slots: Find available time slots between dates
* List Calendars: List calendars for the authenticated user

## Documentation & resources

* Official documentation: `https://developers.google.com/calendar`
* Phinite documentation: [Google Calendar](https://docs.phinite.ai/docs/integrations-hub/google-calendar)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
