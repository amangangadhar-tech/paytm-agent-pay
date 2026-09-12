> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Mixpanel

> Manage Mixpanel event tracking, identity, user/group profiles, analytics queries, cohorts, annotations, and lookup tables via the Mixpanel APIs.

## Overview

Phinite's **Mixpanel** predefined tool lets workspace agent graphs call Mixpanel APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Mixpanel event tracking, identity, user/group profiles, analytics queries, cohorts, annotations, and lookup tables via the Mixpanel APIs.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Project Token `project_token` (required)
* Service Account Username `service_account_username` (optional)
* Service Account Secret `service_account_secret` (optional)
* Project ID `project_id` (optional)
* Region `region` (optional)

## Setup steps

1. In Mixpanel go to **Project Settings → Access Keys** and copy the project token and API secret.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Mixpanel**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **MixpanelTool** (or search for Mixpanel)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 29 subtools for Mixpanel:

* Track Event: Tracks a single event in real time. Requires event name and distinct\_id.
* Import Events: Batch-imports historical or server-side events (up to 2000 per call).
* Create Identity: Links an anonymous device ID to an identified user ID, unifying their event history.
* Create Alias: Creates a permanent alias mapping one distinct\_id to another.
* Merge Identities: Merges two Mixpanel IDs together using the simplified ID merge system.
* Set User Properties: Sets or overwrites user profile properties. Creates the profile if it does not exist.
* Set User Properties Once: Sets user profile properties only if they do not already exist (non-overwriting).
* Increment User Property: Adds a number to a numeric user profile property.
* Append To User List: Appends a value to a list-type user profile property (allows duplicates).
* Union To User List: Merges values into a list-type user profile property ensuring uniqueness.
* Remove From User List: Removes specific values from a list-type user profile property.
* Delete User Property: Permanently removes specific properties from a user profile.
* Delete User Profile: Permanently deletes the entire user profile and all its properties. Irreversible.
* Set Group Properties: Creates or overwrites properties on a group profile (e.g. company, org).
* Delete Group Property: Removes specific properties from a group profile.
* Delete Group: Permanently deletes a group profile and all its properties. Irreversible.
* Get Top Events: Returns the most common events in the project over the last 31 days, ordered by volume.
* Get Aggregate Event Counts: Returns aggregated event counts broken down by day over a time range.
* Get Event Segmentation: Returns event data segmented and filtered by a property over a time range.
* Get Funnel: Returns conversion data for a saved funnel over a time range.
* Get Retention: Returns retention data — how many users return after performing a starting event.
* Execute Jql: Executes an arbitrary JQL script against Mixpanel event data.
* Query Profiles: Queries user profiles with optional filtering and pagination.
* List Cohorts: Returns all saved cohorts in the project with their IDs, names, sizes, and descriptions.
* Query Cohort Profiles: Returns user profiles belonging to a specific cohort.
* List Annotations: Returns all annotations for the project. Requires project\_id.
* Create Annotation: Creates a new annotation on the project timeline. Requires project\_id and Analyst role.
* Delete Annotation: Deletes an annotation by ID. Requires project\_id.
* List Lookup Tables: Returns all lookup tables defined in the project.

## Documentation & resources

* Official documentation: `https://developer.mixpanel.com/reference/overview`
* Phinite documentation: [Mixpanel](https://docs.phinite.ai/docs/integrations-hub/mixpanel)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
