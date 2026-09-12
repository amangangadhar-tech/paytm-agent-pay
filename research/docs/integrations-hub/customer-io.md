> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Customer.io

> Manage Customer.io people, events, devices, segments, campaigns, transactional messages, and message history via the Track and App APIs.

## Overview

Phinite's **Customer.io** predefined tool lets workspace agent graphs call Customer.io APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Customer.io people, events, devices, segments, campaigns, transactional messages, and message history via the Track and App APIs.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Track API Site ID `site_id` (required)
* Track API Key `track_api_key` (required)
* App API Key `app_api_key` (required)
* Region `region` (optional)

## Setup steps

1. In Customer.io go to **Settings → Account Settings → API Credentials**.
2. Copy the Track API Site ID, Track API Key, and App API Key.
3. Set region to `us` or `eu` if your workspace requires it.
4. Log into your Phinite workspace at app.phinite.ai
5. Navigate to **Integrations** → **Predefined tools**
6. Select **Customer.io**
7. Click **+ Add Configuration**
8. Enter the credential fields listed above
9. Select agent graphs that should use this connection
10. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **CustomerIoTool** (or search for Customer.io)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 24 subtools for Customer.io:

* Identify Customer: Creates or updates a person (upsert) with attributes. Merge semantics; a null attribute value deletes it.
* Delete Customer: Deletes a person and their associated data.
* Suppress Customer: Suppresses a person — deletes their profile and stops all messaging to them.
* Unsuppress Customer: Removes a person from the suppression list, allowing messaging to resume.
* Track Event: Tracks an event for a known person. Can trigger campaigns and is recorded on the person's activity timeline.
* Track Anonymous Event: Tracks an event not yet tied to a known person, identified by an anonymous\_id.
* Track Page View: Records a page view for a known person (an event with type='page').
* Add Device: Adds or updates a push device (token + platform) for a person.
* Delete Device: Removes a push device from a person.
* Merge Customers: Merges two people; the primary survives and the secondary is deleted, with its data folded in.
* Add To Segment: Adds people to a manual segment (max 1000 IDs per call).
* Remove From Segment: Removes people from a manual segment (max 1000 IDs per call).
* Get Campaign: Retrieves a single campaign by ID.
* List Campaigns: Lists all campaigns in the workspace.
* Get Campaign Metrics: Retrieves delivery metrics for a campaign over a period.
* Trigger Broadcast: Triggers an API-triggered broadcast campaign. Only API-triggered broadcasts can be triggered.
* Send Transactional Email: Sends a transactional email using a transactional message template.
* Send Transactional Push: Sends a transactional push notification using a transactional push template.
* List Segments: Lists all segments in the workspace.
* Get Segment: Retrieves a single segment by ID.
* Create Manual Segment: Creates a manual segment that people can be added to or removed from via the Track API.
* Delete Segment: Deletes a segment by ID.
* Get Customer Attributes: Retrieves a person's stored attributes via the App API.
* List Messages: Lists message-delivery history for the workspace with optional filters.

## Documentation & resources

* Official documentation: `https://docs.customer.io/`
* Phinite documentation: [Customer.io](https://docs.phinite.ai/docs/integrations-hub/customer-io)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
