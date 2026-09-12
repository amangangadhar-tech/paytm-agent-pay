> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Amplitude

> Manage Amplitude event tracking, analytics queries, taxonomy, cohorts, and user lookups via the Amplitude REST APIs.

## Overview

Phinite's **Amplitude** predefined tool lets workspace agent graphs call Amplitude APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Amplitude event tracking, analytics queries, taxonomy, cohorts, and user lookups via the Amplitude REST APIs.

Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* API Key `api_key` (required)
* Secret Key `secret_key` (required)
* Region `region` (optional)
* Project App ID `app_id` (optional)

## Setup steps

1. Sign in at amplitude.com → Settings → API Keys → select project → copy API Key and generate Secret Key. Set region to US or EU.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Amplitude**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **AmplitudeTool** (or search for Amplitude)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 31 subtools for Amplitude:

* Send Event: Uploads a single event to Amplitude via the HTTP V2 API. Requires event\_type and at least one of user\_id or device\_id.
* Send Batch Events: Uploads multiple events to Amplitude in a single batch request. Each event must include event\_type and at least user\_id or device\_id.
* Identify User: Sets or updates user properties without sending a behavioral event. Requires user\_id or device\_id plus user\_properties.
* Group Identify: Sets or updates properties on a group (e.g. company, org) without sending a behavioral event.
* Track Revenue: Tracks a revenue event for a user. Requires user\_id or device\_id and at least one revenue field.
* Get Event Segmentation: Returns event segmentation data — event counts or metrics broken down over a time range. Requires event, start, and end.
* Get Funnel Analysis: Returns funnel conversion data between a sequence of events over a time range.
* Get Retention Analysis: Returns retention data showing how many users return after performing an initial event.
* Get User Sessions: Returns average session length and session count data over a time range.
* Get User Composition: Returns a breakdown of active users by a user property (e.g. country, platform, version).
* Get User Event List: Returns the recent event stream for a specific user by their numeric Amplitude ID.
* Get Annotations: Returns a list of all chart annotations defined in the project.
* Export Chart: Exports a saved chart as a PNG, SVG, or PDF image. Returns the binary image as a base64-encoded string.
* Get Event Types: Returns a list of all event types defined in the taxonomy for the project.
* Create Event Type: Creates a new event type in the project taxonomy. Requires event\_type (name).
* Update Event Type: Updates an existing event type in the taxonomy. Requires event\_type (current name).
* Delete Event Type: Deletes an event type from the taxonomy. Irreversible.
* Get Event Properties: Returns all properties defined for the specified event type.
* Create Event Property: Creates a new property for the specified event type. Requires event\_type and event\_property (name).
* Get User Properties: Returns all user properties defined in the project taxonomy.
* Create User Property: Creates a new user property in the taxonomy. Requires user\_property (name).
* Get Group Properties: Returns all properties defined for the specified group type.
* Get Cohorts: Returns a list of all cohorts in the project.
* Get Cohort: Returns metadata for the specified cohort by cohort\_id.
* Create Cohort: Creates (uploads) a new cohort from an explicit list of user IDs. Requires name, ids, and an owner email.
* Update Cohort: Adds and/or removes members of an existing cohort. Cannot rename a cohort.
* Download Cohort: Downloads the full membership list of a cohort as a CSV (base64-encoded). Polls until ready, then returns the CSV data.
* Search Users: Searches for a user by user\_id or Amplitude ID. Returns matching user profiles.
* Get User Activity: Returns the full event activity stream for the specified user by Amplitude ID.
* Get User Properties By Id: Returns the current user property values for the specified user by Amplitude ID.
* Update User Properties: Updates user properties for the specified user by user\_id using the Identify API.

## Documentation & resources

* Official documentation: `https://www.docs.developers.amplitude.com/`

* Phinite documentation: [Amplitude](https://docs.phinite.ai/docs/integrations-hub/amplitude)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
