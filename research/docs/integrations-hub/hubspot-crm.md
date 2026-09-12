> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# HubSpot CRM

> Create, read, update, delete, and search HubSpot CRM records (contacts, companies, deals, tickets) and retrieve object properties.

## Overview

Phinite's **HubSpot CRM** predefined tool lets workspace agent graphs call HubSpot CRM APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Create, read, update, delete, and search HubSpot CRM records (contacts, companies, deals, tickets) and retrieve object properties.

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

1. HubSpot → Settings → Integrations → Private Apps → Create app with CRM scopes → copy access token (pat-...).
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **HubSpot CRM**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **HubSpotCRMTool** (or search for HubSpot CRM)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 10 subtools for HubSpot CRM:

* Create Record: Create a single CRM record in HubSpot. Supported object types include contacts, companies, deals, tickets, etc.
* Get Record: Retrieve a single CRM record by its ID from HubSpot.
* Update Record: Update a single CRM record in HubSpot by its ID.
* Delete Record: Delete (archive) a single CRM record in HubSpot by its ID. Can be restored within 90 days.
* List Records: List CRM records of a given object type from HubSpot with optional pagination.
* Search Records: Search CRM records in HubSpot using filters, sorting, and query text. Supports filterGroups with AND/OR logic and various operators.
* Batch Create Records: Create multiple CRM records in a single batch request (max 100). Each input should have a properties dict.
* Batch Update Records: Update multiple CRM records in a single batch request (max 100). Each input should have an id and a properties dict.
* Batch Delete Records: Delete (archive) multiple CRM records in a single batch request (max 100).
* Get Properties: List all properties defined for a CRM object type in HubSpot. Useful for discovering available fields before creating or searching records.

## Documentation & resources

* Official documentation: `https://developers.hubspot.com/docs/api/overview`

* Phinite documentation: [Hubspot Crm](https://docs.phinite.ai/docs/integrations-hub/hubspot-crm)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
