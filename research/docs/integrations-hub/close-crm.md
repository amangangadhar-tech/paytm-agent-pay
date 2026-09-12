> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Close CRM

> Manage a Close CRM account — leads, contacts, opportunities, tasks, and activities (notes, calls, emails, SMS, meetings), plus statuses, users, custom fields, pipelines, and smart views — via the Close REST API.

## Overview

Phinite's **Close CRM** predefined tool lets workspace agent graphs call Close CRM APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage a Close CRM account — leads, contacts, opportunities, tasks, and activities (notes, calls, emails, SMS, meetings), plus statuses, users, custom fields, pipelines, and smart views — via the Close REST API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* API Key `api_key` (required)

## Setup steps

1. In Close go to **Settings → Developer → API Keys** and create an API key.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Close CRM**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **CloseCRMTool** (or search for Close CRM)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 55 subtools for Close CRM:

* Create Lead: Create a new lead (company/organization).
* Get Lead: Retrieve a single lead by its id.
* List Leads: List leads, optionally filtered by a Close search query string.
* Update Lead: Update a lead. Provide only the fields to change.
* Delete Lead: Delete a lead by its id. Irreversible.
* Search Leads: Search leads using the Close query language.
* Create Contact: Create a contact under a lead. Requires lead\_id.
* Get Contact: Retrieve a single contact by id.
* List Contacts: List contacts, optionally filtered by lead\_id.
* Update Contact: Update a contact. Provide only the fields to change.
* Delete Contact: Delete a contact by id. Irreversible.
* Create Opportunity: Create an opportunity on a lead. Value is in cents.
* Get Opportunity: Retrieve a single opportunity by id.
* List Opportunities: List opportunities, optionally filtered by lead\_id.
* Update Opportunity: Update an opportunity. Provide only the fields to change.
* Delete Opportunity: Delete an opportunity by id. Irreversible.
* Create Task: Create a task on a lead. Requires lead\_id and text.
* Get Task: Retrieve a single task by id.
* List Tasks: List tasks, optionally filtered by lead\_id, completion state, or assignee.
* Update Task: Update a task (e.g. mark complete or change date).
* Delete Task: Delete a task by id. Irreversible.
* Create Note: Create a note activity on a lead. Requires lead\_id and note.
* Get Note: Retrieve a single note activity by id.
* List Notes: List note activities, optionally filtered by lead\_id.
* Update Note: Update the text of a note activity.
* Delete Note: Delete a note activity by id. Irreversible.
* Log Call: Log a call activity against a lead. Requires lead\_id.
* Get Call: Retrieve a single call activity by id.
* List Calls: List call activities, optionally filtered by lead\_id.
* Delete Call: Delete a call activity by id. Irreversible.
* Create Email: Create an email activity (draft or send). Requires lead\_id.
* Get Email: Retrieve a single email activity by id.
* List Emails: List email activities, optionally filtered by lead\_id.
* Update Email: Update an email activity (e.g. edit a draft or change status to send).
* Delete Email: Delete an email activity by id. Irreversible.
* Create Sms: Create an SMS activity (draft or send). Requires lead\_id.
* Get Sms: Retrieve a single SMS activity by id.
* List Sms: List SMS activities, optionally filtered by lead\_id.
* Delete Sms: Delete an SMS activity by id. Irreversible.
* Get Meeting: Retrieve a single meeting activity by id.
* List Meetings: List meeting activities, optionally filtered by lead\_id or user\_id.
* Create Lead Status: Create a new lead status. Requires label.
* List Lead Statuses: List all lead statuses in the organization.
* Update Lead Status: Update a lead status label.
* Delete Lead Status: Delete a lead status by id. Irreversible.
* Create Opportunity Status: Create a new opportunity status. Requires label and type.
* List Opportunity Statuses: List all opportunity statuses in the organization.
* Update Opportunity Status: Update an opportunity status label or type.
* Delete Opportunity Status: Delete an opportunity status by id. Irreversible.
* Get Me: Get the currently authenticated user.
* Get User: Retrieve a single user by id.
* List Users: List users in the organization.
* List Lead Custom Fields: List all custom fields defined for leads.
* List Pipelines: List all opportunity pipelines in the organization.
* List Smart Views: List all smart views (saved searches).

## Documentation & resources

* Official documentation: `https://developer.close.com/`
* Phinite documentation: [Close CRM](https://docs.phinite.ai/docs/integrations-hub/close-crm)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
