> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Microsoft Dynamics 365

> Manage Microsoft Dynamics 365 Business Central companies, customers, vendors, items, sales/purchase invoices, sales orders, employees, and general ledger entries via the Business Central API v2.0.

## Overview

Phinite's **Microsoft Dynamics 365** predefined tool lets workspace agent graphs call Microsoft Dynamics 365 APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Microsoft Dynamics 365 Business Central companies, customers, vendors, items, sales/purchase invoices, sales orders, employees, and general ledger entries via the Business Central API v2.0.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Access Token `access_token` (required)
* Environment `environment` (optional)
* Company ID `company_id` (optional)
* Tenant Domain `tenant_domain` (optional)
* Base URL Override `base_url` (optional)

## Setup steps

1. Start Business Central trial → Azure App registration → API permissions for Dynamics 365 → client credentials token → get company ID from API.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Microsoft Dynamics 365**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **MicrosoftDynamics365Tool** (or search for Microsoft Dynamics 365)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 26 subtools for Microsoft Dynamics 365:

* List Companies: List all companies available in the Business Central environment.
* Get Company: Get details of a specific company by ID.
* List Customers: List customers in the company. Supports OData filtering.
* Get Customer: Get details of a specific customer by ID.
* Create Customer: Create a new customer in Business Central.
* Update Customer: Update an existing customer in Business Central.
* List Vendors: List vendors in the company. Supports OData filtering.
* Get Vendor: Get details of a specific vendor by ID.
* Create Vendor: Create a new vendor in Business Central.
* List Items: List items (products) in the company. Supports OData filtering.
* Get Item: Get details of a specific item by ID.
* Create Item: Create a new item (product) in Business Central.
* List Sales Orders: List sales orders in the company. Supports OData filtering.
* Get Sales Order: Get details of a specific sales order by ID.
* Create Sales Order: Create a new sales order in Business Central.
* List Sales Invoices: List sales invoices in the company. Supports OData filtering.
* Get Sales Invoice: Get details of a specific sales invoice by ID.
* Create Sales Invoice: Create a new sales invoice in Business Central.
* List Purchase Invoices: List purchase invoices in the company. Supports OData filtering.
* Get Purchase Invoice: Get details of a specific purchase invoice by ID.
* Create Purchase Invoice: Create a new purchase invoice in Business Central.
* List Employees: List employees in the company. Supports OData filtering.
* Get Employee: Get details of a specific employee by ID.
* Create Employee: Create a new employee in Business Central.
* Update Employee: Update an existing employee in Business Central.
* List General Ledger Entries: List general ledger entries in the company. Read-only. Supports OData filtering.

## Documentation & resources

* Official documentation: `https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/`

* Phinite documentation: [Microsoft Dynamics 365](https://docs.phinite.ai/docs/integrations-hub/microsoft-dynamics-365)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
