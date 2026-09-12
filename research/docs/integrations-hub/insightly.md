> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Insightly

> Manage Insightly CRM records — contacts, organisations, leads, opportunities, projects, tasks, and events — via the Insightly REST API v3.1.

## Overview

Phinite's **Insightly** predefined tool lets workspace agent graphs call Insightly APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Insightly CRM records — contacts, organisations, leads, opportunities, projects, tasks, and events — via the Insightly REST API v3.1.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* API Key `api_key` (required)
* Pod `pod` (optional)
* Base URL `base_url` (optional)

## Setup steps

1. In Insightly go to **User Settings → API** and note your API key.
2. Use your Insightly pod URL as the API base URL.
3. Log into your Phinite workspace at app.phinite.ai
4. Navigate to **Integrations** → **Predefined tools**
5. Select **Insightly**
6. Click **+ Add Configuration**
7. Enter the credential fields listed above
8. Select agent graphs that should use this connection
9. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **InsightlyTool** (or search for Insightly)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 42 subtools for Insightly:

* Create Contact: Creates a contact (POST). Provide a field map.
* Get Contact: Fetches a single contact by ID.
* List Contacts: Lists contacts. Page with top (max 500) and skip.
* Search Contacts: Searches contacts by an exact field match (field\_name + field\_value).
* Update Contact: Updates a contact (partial update).
* Delete Contact: Permanently deletes a contact by ID.
* Create Organisation: Creates a organisation (POST). Provide a field map.
* Get Organisation: Fetches a single organisation by ID.
* List Organisations: Lists organisations. Page with top (max 500) and skip.
* Search Organisations: Searches organisations by an exact field match (field\_name + field\_value).
* Update Organisation: Updates a organisation (partial update).
* Delete Organisation: Permanently deletes a organisation by ID.
* Create Lead: Creates a lead (POST). Provide a field map.
* Get Lead: Fetches a single lead by ID.
* List Leads: Lists leads. Page with top (max 500) and skip.
* Search Leads: Searches leads by an exact field match (field\_name + field\_value).
* Update Lead: Updates a lead (partial update).
* Delete Lead: Permanently deletes a lead by ID.
* Create Opportunity: Creates a opportunity (POST). Provide a field map.
* Get Opportunity: Fetches a single opportunity by ID.
* List Opportunities: Lists opportunities. Page with top (max 500) and skip.
* Search Opportunities: Searches opportunities by an exact field match (field\_name + field\_value).
* Update Opportunity: Updates a opportunity (partial update).
* Delete Opportunity: Permanently deletes a opportunity by ID.
* Create Project: Creates a project (POST). Provide a field map.
* Get Project: Fetches a single project by ID.
* List Projects: Lists projects. Page with top (max 500) and skip.
* Search Projects: Searches projects by an exact field match (field\_name + field\_value).
* Update Project: Updates a project (partial update).
* Delete Project: Permanently deletes a project by ID.
* Create Task: Creates a task (POST). Provide a field map.
* Get Task: Fetches a single task by ID.
* List Tasks: Lists tasks. Page with top (max 500) and skip.
* Search Tasks: Searches tasks by an exact field match (field\_name + field\_value).
* Update Task: Updates a task (partial update).
* Delete Task: Permanently deletes a task by ID.
* Create Event: Creates a event (POST). Provide a field map.
* Get Event: Fetches a single event by ID.
* List Events: Lists events. Page with top (max 500) and skip.
* Search Events: Searches events by an exact field match (field\_name + field\_value).
* Update Event: Updates a event (partial update).
* Delete Event: Permanently deletes a event by ID.

## Documentation & resources

* Official documentation: `https://api.insightly.com/v3.1/`
* Phinite documentation: [Insightly](https://docs.phinite.ai/docs/integrations-hub/insightly)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
