> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Workday HCM

> Access Workday HCM data — workers, organizations, job profiles, positions, locations, time off, and business titles via the Workday REST API.

## Overview

Phinite's **Workday HCM** predefined tool lets workspace agent graphs call Workday HCM APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Access Workday HCM data — workers, organizations, job profiles, positions, locations, time off, and business titles via the Workday REST API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Base URL `base_url` (required)
* Tenant `tenant` (required)
* Access Token `access_token` (required)

## Setup steps

1. Requires a Workday tenant from your organization. Obtain base URL, tenant name, and OAuth access token from your Workday admin.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Workday HCM**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

<Warning>
  Workday does not offer a public developer sandbox. You need access to a tenant provided by an organization using Workday.
</Warning>

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **WorkdayHCMTools** (or search for Workday HCM)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 16 subtools for Workday HCM:

* Get Workers: Retrieve a paginated list of workers from Workday.
* Get Worker: Retrieve detailed information about a specific Workday worker by their Workday ID (WID).
* Search Workers: Search for Workday workers by name, email, or employee ID. Limit controls the number of results returned.
* Get Organizations: Retrieve a paginated list of supervisory organizations from Workday.
* Get Organization: Retrieve details of a specific Workday organization by its ID.
* Get Organization Workers: Retrieve workers belonging to a specific Workday supervisory organization.
* Get Job Profiles: Retrieve a paginated list of job profiles from Workday.
* Get Positions: Retrieve a paginated list of positions from Workday.
* Get Locations: Retrieve a paginated list of locations from Workday.
* Get Location: Retrieve details of a specific Workday location by its ID.
* Get Time Off Balances: Retrieve time off and absence plan balances for a specific Workday worker.
* Request Time Off: Submit a time off request for a Workday worker.
* Get Worker Business Title: Retrieve the current business title of a Workday worker.
* Update Business Title: Update the business title of a Workday worker.
* Get People: Retrieve a paginated list of people (personal info) from Workday.
* Get Person: Retrieve detailed personal information for a specific person by their Workday ID.

## Documentation & resources

* Official documentation: `https://community.workday.com/sites/default/files/file-hosting/productionapi/index.html`

* Phinite documentation: [Workday Hcm](https://docs.phinite.ai/docs/integrations-hub/workday-hcm)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
