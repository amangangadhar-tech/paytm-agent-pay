> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Power BI

> Manage Power BI datasets, reports, dashboards, workspaces (groups), dataflows, and gateways via the Power BI REST API.

## Overview

Phinite's **Power BI** predefined tool lets workspace agent graphs call Power BI APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Power BI datasets, reports, dashboards, workspaces (groups), dataflows, and gateways via the Power BI REST API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Access Token `access_token` (required)

## Setup steps

1. Azure App registration with Power BI Service permissions, admin consent, enable service principals in Power BI Admin → generate access token.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Power BI**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **PowerBITool** (or search for Power BI)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 60 subtools for Power BI:

* Get Datasets: Returns a list of all datasets from My workspace.
* Get Datasets In Group: Returns a list of all datasets from the specified workspace.
* Get Dataset: Returns a specific dataset from My workspace by dataset\_id.
* Get Dataset In Group: Returns a specific dataset from the specified workspace.
* Delete Dataset: Deletes the specified dataset from My workspace. Irreversible.
* Delete Dataset In Group: Deletes the specified dataset from the specified workspace. Irreversible.
* Refresh Dataset: Triggers a refresh for the specified dataset from My workspace. Basic refresh uses notify\_option; enhanced fields trigger an async refresh.
* Refresh Dataset In Group: Triggers a refresh for the specified dataset from the specified workspace. Basic refresh uses notify\_option; enhanced fields trigger an async refresh.
* Get Refresh History: Returns the refresh history for the specified dataset from My workspace.
* Get Refresh History In Group: Returns the refresh history for the specified dataset from the specified workspace.
* Get Dataset Datasources: Returns a list of data sources for the specified dataset from My workspace.
* Get Dataset Datasources In Group: Returns a list of data sources for the specified dataset from the specified workspace.
* Execute Queries: Executes a DAX query against the specified dataset in My workspace.
* Execute Queries In Group: Executes a DAX query against the specified dataset in the specified workspace.
* Get Refresh Schedule In Group: Returns the refresh schedule for the specified dataset from the specified workspace.
* Update Refresh Schedule In Group: Updates the refresh schedule for the specified dataset in the specified workspace.
* Update Parameters In Group: Updates parameter values for the specified dataset in the specified workspace.
* Get Reports: Returns a list of all reports from My workspace.
* Get Reports In Group: Returns a list of all reports from the specified workspace.
* Get Report: Returns a specific report from My workspace by report\_id.
* Get Report In Group: Returns a specific report from the specified workspace.
* Delete Report: Deletes the specified report from My workspace. Irreversible.
* Delete Report In Group: Deletes the specified report from the specified workspace. Irreversible.
* Clone Report: Clones the specified report from My workspace. Requires report\_id and name.
* Clone Report In Group: Clones the specified report from the specified workspace.
* Get Report Pages: Returns a list of pages within the specified report from My workspace.
* Get Report Pages In Group: Returns a list of pages within the specified report from the specified workspace.
* Export Report To File In Group: Triggers an async export of the specified report to a file format. Returns an export job ID to poll with get\_export\_status\_in\_group.
* Get Export Status In Group: Returns the current status of a report export job in the specified workspace.
* Get Dashboards: Returns a list of all dashboards from My workspace.
* Get Dashboards In Group: Returns a list of all dashboards from the specified workspace.
* Get Dashboard: Returns a specific dashboard from My workspace by dashboard\_id.
* Get Dashboard In Group: Returns a specific dashboard from the specified workspace.
* Add Dashboard: Creates a new empty dashboard in My workspace.
* Add Dashboard In Group: Creates a new empty dashboard in the specified workspace.
* Delete Dashboard: Deletes the specified dashboard from My workspace. Irreversible.
* Delete Dashboard In Group: Deletes the specified dashboard from the specified workspace. Irreversible.
* Get Dashboard Tiles: Returns a list of tiles within the specified dashboard from My workspace.
* Get Dashboard Tiles In Group: Returns a list of tiles within the specified dashboard from the specified workspace.
* Get Groups: Returns a list of workspaces the current user has access to.
* Get Group: Returns a specific workspace by group\_id.
* Create Group: Creates a new workspace.
* Delete Group: Deletes the specified workspace. Irreversible.
* Update Group: Updates properties of the specified workspace.
* Get Group Users: Returns a list of users that have access to the specified workspace.
* Add Group User: Grants a user the specified access right to the workspace.
* Delete User In Group: Removes the specified user's permissions from the workspace.
* Update Group User: Updates the access right of a user in the specified workspace.
* Get Dataflows: Returns a list of all dataflows from the specified workspace.
* Get Dataflow: Returns the definition of the specified dataflow from the specified workspace.
* Delete Dataflow: Deletes the specified dataflow and its definition from the workspace. Irreversible.
* Refresh Dataflow: Triggers a refresh for the specified dataflow in the specified workspace.
* Update Dataflow: Updates properties and settings of the specified dataflow.
* Get Dataflow Datasources: Returns a list of data sources for the specified dataflow.
* Get Dataflow Transactions: Returns a list of refresh transactions for the specified dataflow.
* Get Gateways: Returns a list of gateways for which the current user is an admin.
* Get Gateway: Returns the specified gateway by gateway\_id.
* Get Gateway Datasources: Returns a list of data sources from the specified gateway.
* Get Gateway Datasource: Returns the specified data source from the specified gateway.
* Get Gateway Datasource Status: Checks the connectivity status of the specified data source on the specified gateway.

## Documentation & resources

* Official documentation: `https://learn.microsoft.com/en-us/rest/api/power-bi/`

* Phinite documentation: [Power Bi](https://docs.phinite.ai/docs/integrations-hub/power-bi)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
