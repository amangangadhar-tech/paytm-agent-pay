> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# ShipStation

> Manage ShipStation shipping and fulfillment — orders, shipments and labels, carriers, products, customers, warehouses, stores, and fulfillments via the ShipStation V1 API.

## Overview

Phinite's **ShipStation** predefined tool lets workspace agent graphs call ShipStation APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage ShipStation shipping and fulfillment — orders, shipments and labels, carriers, products, customers, warehouses, stores, and fulfillments via the ShipStation V1 API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* API Key `api_key` (required)
* API Secret `api_secret` (required)

## Setup steps

1. In ShipStation go to **Account → API Settings** and generate API Key and API Secret.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **ShipStation**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **ShipStationTool** (or search for ShipStation)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 28 subtools for ShipStation:

* List Orders: Lists orders with optional filters and pagination.
* Get Order: Gets a single order by ID.
* Create Order: Creates or updates a single order (upsert keyed on orderKey).
* Create Orders: Creates or updates multiple orders in one call (max 100).
* Delete Order: Deletes (deactivates) an order by ID.
* Mark As Shipped: Marks an order as shipped without creating a label.
* Add Tag: Adds a tag to an order.
* Remove Tag: Removes a tag from an order.
* Hold Until: Holds an order until a specified date.
* Restore From Hold: Restores an order from hold back to awaiting shipment.
* Assign User: Assigns a user to one or more orders.
* List By Tag: Lists orders that have a specific tag and status.
* List Shipments: Lists shipments (ShipStation-generated labels) with optional filters.
* Create Label For Order: Creates a shipping label for an existing order. Returns a base64 PDF in labelData.
* Create Label: Creates a shipping label without an order. Returns a base64 PDF in labelData.
* Void Label: Voids a previously created shipping label.
* Get Rates: Gets shipping rate quotes for a shipment.
* List Carriers: Lists carriers connected to the account.
* List Packages: Lists package types available for a carrier.
* List Services: Lists shipping services available for a carrier.
* List Products: Lists products with optional filters.
* Get Product: Gets a single product by ID.
* Update Product: Updates a product (full-resource PUT — include all fields).
* List Customers: Lists customers with optional filters.
* Get Customer: Gets a single customer by ID.
* List Warehouses: Lists warehouses (ship-from locations).
* List Stores: Lists stores (sales channels).
* List Fulfillments: Lists fulfillments (externally fulfilled shipments) with optional filters.

## Documentation & resources

* Official documentation: `https://www.shipstation.com/docs/api/`
* Phinite documentation: [ShipStation](https://docs.phinite.ai/docs/integrations-hub/shipstation)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
