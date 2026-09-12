> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# ServiceNow

> Manage ServiceNow incidents, change requests, problems, users, knowledge articles, CMDB CIs, and any table record via the Table and Aggregate APIs.

## Overview

Phinite's **ServiceNow** predefined tool lets workspace agent graphs call ServiceNow APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage ServiceNow incidents, change requests, problems, users, knowledge articles, CMDB CIs, and any table record via the Table and Aggregate APIs.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Instance Name `instance` (required)
* Username `username` (optional)
* Password `password` (optional)
* Access Token `access_token` (optional)

## Setup steps

1. developer.servicenow\.com → Request Instance → use instance URL, admin username, and password or access token.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **ServiceNow**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **ServiceNowTool** (or search for ServiceNow)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 31 subtools for ServiceNow:

* List Incidents: List incidents from the ServiceNow incident table. Supports encoded query filtering and pagination.
* Get Incident: Retrieve a single incident by its sys\_id.
* Create Incident: Create a new incident. Provide field name-value pairs (e.g. short\_description, urgency, impact, category, assignment\_group).
* Update Incident: Update an existing incident by sys\_id. Only supply the fields to change.
* Delete Incident: Delete an incident by sys\_id. This action is irreversible.
* List Change Requests: List change requests. Supports encoded query filtering and pagination.
* Get Change Request: Retrieve a single change request by sys\_id.
* Create Change Request: Create a new change request with the given field values.
* Update Change Request: Update an existing change request by sys\_id.
* List Problems: List problem records. Supports encoded query filtering and pagination.
* Get Problem: Retrieve a single problem record by sys\_id.
* Create Problem: Create a new problem record.
* List Users: List users from the sys\_user table. Supports query filtering and pagination.
* Get User: Retrieve a single user by sys\_id.
* Create User: Create a new user in sys\_user table.
* List Knowledge Articles: List knowledge articles from the kb\_knowledge table.
* Get Knowledge Article: Retrieve a single knowledge article by sys\_id.
* List Cmdb Cis: List CMDB configuration items from the cmdb\_ci table.
* Get Cmdb Ci: Retrieve a single CMDB configuration item by sys\_id.
* Get Table Stats: Get aggregate statistics (count, min, max, avg, sum) for a table using the Aggregate API. Use group\_by to group results.
* Update User: Update an existing user by sys\_id. Only supply the fields to change.
* Delete User: Delete a user by sys\_id. This action is irreversible.
* List Table Records: List records from any ServiceNow table. Use table\_name to target any table (e.g. incident, change\_request, sys\_user, cmdb\_ci).
* Get Table Record: Get a single record from any ServiceNow table by sys\_id.
* Create Table Record: Create a new record in any ServiceNow table.
* Update Table Record: Update a record in any ServiceNow table by sys\_id.
* Delete Table Record: Delete a record from any ServiceNow table by sys\_id.
* List Business Services: List business services from the cmdb\_ci\_service table.
* List Departments: List departments from the cmn\_department table.
* List User Groups: List user groups from the sys\_user\_group table.
* List User Roles: List user roles from the sys\_user\_role table.

## Documentation & resources

* Official documentation: `https://developer.servicenow.com/dev.do`

* Phinite documentation: [Servicenow](https://docs.phinite.ai/docs/integrations-hub/servicenow)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
