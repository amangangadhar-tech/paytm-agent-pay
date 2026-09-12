> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Copper CRM

> Manage a Copper CRM account — people, companies, leads, opportunities, tasks, projects, activities, plus account/config lookups — via the Copper REST API.

## Overview

Phinite's **Copper CRM** predefined tool lets workspace agent graphs call Copper CRM APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage a Copper CRM account — people, companies, leads, opportunities, tasks, projects, activities, plus account/config lookups — via the Copper REST API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* API Access Token `access_token` (required)
* User Email `user_email` (required)
* Application Name `app_name` (optional)

## Setup steps

1. In Copper go to **Settings → Integrations → API Keys** and generate a key.
2. Use your Copper email together with the API key for authentication.
3. Log into your Phinite workspace at app.phinite.ai
4. Navigate to **Integrations** → **Predefined tools**
5. Select **Copper CRM**
6. Click **+ Add Configuration**
7. Enter the credential fields listed above
8. Select agent graphs that should use this connection
9. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **CopperCRMTool** (or search for Copper CRM)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 43 subtools for Copper CRM:

* Create Person: Create a new person (contact). Requires name.
* Get Person: Fetch a single person by id.
* List People: List/search people with optional filters and pagination.
* Update Person: Update a person. Provide only fields to change via update\_fields.
* Delete Person: Delete a person by id. Irreversible.
* Create Company: Create a new company. Requires name.
* Get Company: Fetch a single company by id.
* List Companies: List/search companies with optional filters and pagination.
* Update Company: Update a company. Provide only fields to change via update\_fields.
* Delete Company: Delete a company by id. Irreversible.
* Create Lead: Create a new lead. Requires name.
* Get Lead: Fetch a single lead by id.
* List Leads: List/search leads with optional filters and pagination.
* Update Lead: Update a lead. Provide only fields to change via update\_fields.
* Delete Lead: Delete a lead by id. Irreversible.
* Convert Lead: Convert a lead into a person/company/opportunity.
* Create Opportunity: Create a new opportunity. Requires name.
* Get Opportunity: Fetch a single opportunity by id.
* List Opportunities: List/search opportunities with optional filters and pagination.
* Update Opportunity: Update an opportunity. Provide only fields to change via update\_fields.
* Delete Opportunity: Delete an opportunity by id. Irreversible.
* Create Task: Create a new task. Requires name.
* Get Task: Fetch a single task by id.
* List Tasks: List/search tasks with optional filters and pagination.
* Update Task: Update a task. Provide fields via update\_fields.
* Delete Task: Delete a task by id. Irreversible.
* Create Project: Create a new project. Requires name.
* Get Project: Fetch a single project by id.
* List Projects: List/search projects with optional filters and pagination.
* Update Project: Update a project. Provide only fields to change via update\_fields.
* Delete Project: Delete a project by id. Irreversible.
* Create Activity: Log an activity on a parent record. Requires parent\_id, parent\_type, activity\_type\_id.
* Get Activity: Fetch a single activity by id.
* List Activities: List/search activities with optional filters and pagination.
* Delete Activity: Delete an activity by id. Irreversible.
* List Users: List users in the Copper account.
* List Customer Sources: List all customer sources.
* List Pipelines: List all opportunity pipelines.
* List Pipeline Stages: List all pipeline stages (optionally for one pipeline).
* List Activity Types: List all activity types (user and system).
* List Custom Field Definitions: List all custom field definitions in the account.
* List Tags: List all tags in the account.
* Get Account: Fetch details about the authenticated Copper account.

## Documentation & resources

* Official documentation: `https://developer.copper.com/`
* Phinite documentation: [Copper CRM](https://docs.phinite.ai/docs/integrations-hub/copper-crm)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
