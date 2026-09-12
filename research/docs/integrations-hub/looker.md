> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Looker

> Query Looker data, manage Looks, dashboards, folders, users, and scheduled plans on a Looker BI instance via the Looker REST API.

## Overview

Phinite's **Looker** predefined tool lets workspace agent graphs call Looker APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Query Looker data, manage Looks, dashboards, folders, users, and scheduled plans on a Looker BI instance via the Looker REST API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Base URL `base_url` (required)
* Client ID `client_id` (required)
* Client Secret `client_secret` (required)

## Setup steps

1. Google Cloud → enable Looker → create instance → Admin → Users → your user → API3 Keys → copy Client ID and Secret.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Looker**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **LookerTools** (or search for Looker)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 20 subtools for Looker:

* Run Inline Query: Run an inline query by specifying model, view, fields, filters, sorts, limit. Returns data in the requested format (json, csv, sql, etc.).
* Run Query: Run a previously saved query by its ID. Returns data in the requested format.
* Create Query: Create a saved query. Looker queries are immutable; if an identical query exists it is returned. Use the returned query ID with run\_query.
* Get Query: Get a query definition by ID.
* Search Looks: Search for Looks. Supports wildcard '%' matching on title. Returns array of Look objects.
* Get Look: Get detailed information about a Look and its associated query.
* Run Look: Run a Look's query and return results in the requested format.
* Create Look: Create a new Look. First create a query with create\_query, then pass the query\_id here.
* Delete Look: Permanently delete a Look.
* Search Dashboards: Search for dashboards. Supports wildcard '%' matching on title.
* Get Dashboard: Get detailed information about a dashboard including its elements, filters, and layout.
* Create Dashboard: Create a new dashboard.
* Delete Dashboard: Permanently delete a dashboard.
* Search Folders: Search for folders. Supports wildcard '%' matching on name.
* Get Folder: Get a folder by ID including its child count and metadata.
* Create Folder: Create a new folder.
* Get Me: Get the current authenticated user's information.
* Search Users: Search for users. Supports wildcard '%' matching on names and email.
* Get All Scheduled Plans: Get all scheduled plans (admin only for all users, otherwise returns current user's plans).
* Create Scheduled Plan: Create a new scheduled plan to deliver a Look or Dashboard on a schedule.

## Documentation & resources

* Official documentation: `https://cloud.google.com/looker/docs`

* Phinite documentation: [Looker](https://docs.phinite.ai/docs/integrations-hub/looker)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
