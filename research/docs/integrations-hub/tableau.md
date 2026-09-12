> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Tableau

> Manage Tableau workbooks, datasources, views, users, groups, and projects via the Tableau REST API.

## Overview

Phinite's **Tableau** predefined tool lets workspace agent graphs call Tableau APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Tableau workbooks, datasources, views, users, groups, and projects via the Tableau REST API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Server URL `server_url` (required)
* Personal Access Token Name `token_name` (required)
* Personal Access Token Secret `personal_access_token` (required)
* Site Content URL `site_content_url` (optional)
* API Version `api_version` (optional)

## Setup steps

1. Enable PAT on Tableau Server/Cloud → My Account Settings → Personal Access Tokens → create token → sign in via REST API for auth token and site ID.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Tableau**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **TableauTool** (or search for Tableau)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 30 subtools for Tableau:

* Get Workbooks: Returns a list of workbooks on the current site. Supports filtering and pagination.
* Get Workbook: Returns details of the specified workbook by workbook\_id.
* Get Workbook Views: Returns a list of views in the specified workbook.
* Refresh Workbook: Triggers an extract refresh job for the specified workbook.
* Update Workbook: Updates properties of the specified workbook (e.g. name, project, show\_tabs, owner).
* Delete Workbook: Deletes the specified workbook from the site. Irreversible.
* Get Datasources: Returns a list of published data sources on the current site.
* Get Datasource: Returns details of the specified data source by datasource\_id.
* Get Datasource Connections: Returns a list of connections (server, port, username) for the specified data source.
* Refresh Datasource: Triggers an extract refresh job for the specified data source.
* Update Datasource: Updates properties of the specified data source (e.g. name, project, owner, certification).
* Delete Datasource: Deletes the specified data source from the site. Irreversible.
* Get Views: Returns a list of views on the current site.
* Get View: Returns details of the specified view by view\_id.
* Get Users: Returns a list of users on the current site.
* Get User: Returns details of the specified user by user\_id.
* Add User To Site: Adds a user to the current site with the specified site role. Requires name and site\_role.
* Update User: Updates properties of the specified user (e.g. site role, email, full name).
* Remove User From Site: Removes the specified user from the current site.
* Get Groups: Returns a list of groups on the current site.
* Create Group: Creates a local group on the current site. Requires name.
* Update Group: Updates the name of the specified group.
* Delete Group: Deletes the specified group from the site. Irreversible.
* Get Group Users: Returns a list of users in the specified group.
* Add User To Group: Adds a user to the specified group.
* Remove User From Group: Removes a user from the specified group.
* Get Projects: Returns a list of projects on the current site.
* Create Project: Creates a project on the current site. Requires name.
* Update Project: Updates properties of the specified project (name, description, content permissions).
* Delete Project: Deletes the specified project from the site. Irreversible.

## Documentation & resources

* Official documentation: `https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api.htm`

* Phinite documentation: [Tableau](https://docs.phinite.ai/docs/integrations-hub/tableau)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
