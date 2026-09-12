> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Pipedrive

> Manage Pipedrive CRM deals, persons, organizations, activities, notes, pipelines, leads, products, and deal-products via the Pipedrive REST API.

## Overview

Phinite's **Pipedrive** predefined tool lets workspace agent graphs call Pipedrive APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Pipedrive CRM deals, persons, organizations, activities, notes, pipelines, leads, products, and deal-products via the Pipedrive REST API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* API Token `api_token` (required)
* Company Domain `company_domain` (required)

## Setup steps

1. Pipedrive → profile → Settings → Personal Preferences → API → copy API token and company subdomain from your workspace URL.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Pipedrive**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **PipedriveTool** (or search for Pipedrive)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 46 subtools for Pipedrive:

* List Deals: List all deals with optional filtering by user, person, org, pipeline, stage, or status
* Get Deal: Get details of a specific deal by ID
* Create Deal: Create a new deal in Pipedrive
* Update Deal: Update an existing deal's properties
* Delete Deal: Delete a deal by ID (marks as deleted, permanently removed after 30 days)
* List Persons: List all persons (contacts) with optional filtering
* Get Person: Get details of a specific person by ID
* Create Person: Create a new person (contact) in Pipedrive
* Update Person: Update an existing person's properties
* List Organizations: List all organizations with optional filtering
* Get Organization: Get details of a specific organization by ID
* Create Organization: Create a new organization in Pipedrive
* Update Organization: Update an existing organization's properties
* List Activities: List all activities with optional filtering by user, deal, or done status
* Create Activity: Create a new activity (call, meeting, task, etc.) in Pipedrive
* Update Activity: Update an existing activity's properties
* Create Note: Create a new note attached to a deal, person, or organization
* Delete Note: Delete a note by ID
* List Pipelines: List all sales pipelines in the account
* Search Items: Search across deals, persons, organizations, products, and files by keyword
* Duplicate Deal: Duplicate a deal by ID
* Search Deals: Search deals by term across title, notes, and custom fields
* Delete Person: Delete a person by ID
* Search Persons: Search persons by term across name, email, phone, and custom fields
* Delete Organization: Delete an organization by ID
* Search Organizations: Search organizations by term across name and custom fields
* Get Activity: Get details of a specific activity by ID
* Delete Activity: Delete an activity by ID
* Get Note: Get details of a specific note by ID
* List Notes: List notes with optional filtering by deal, person, or organization
* Update Note: Update an existing note's content or pinned status
* List Leads: List all leads with optional filtering
* Get Lead: Get details of a specific lead by ID (UUID string)
* Create Lead: Create a new lead in Pipedrive
* Update Lead: Update an existing lead's properties
* Delete Lead: Delete a lead by ID
* List Products: List all products in the catalog
* Get Product: Get details of a specific product by ID
* Create Product: Create a new product in the Pipedrive catalog
* Update Product: Update an existing product's properties
* Delete Product: Delete a product from the catalog
* Search Products: Search products by term across name, code, and custom fields
* List Deal Products: List all products attached to a deal
* Add Deal Product: Add a product to a deal
* Update Deal Product: Update a product attached to a deal
* Remove Deal Product: Remove a product from a deal

## Documentation & resources

* Official documentation: `https://developers.pipedrive.com/docs/api/v1`

* Phinite documentation: [Pipedrive](https://docs.phinite.ai/docs/integrations-hub/pipedrive)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
