> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Shopify

> Manage a Shopify store — create, update, and retrieve products, orders, and customers via the Shopify Admin REST API.

## Overview

Phinite's **Shopify** predefined tool lets workspace agent graphs call Shopify APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage a Shopify store — create, update, and retrieve products, orders, and customers via the Shopify Admin REST API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Store Name `store_name` (required)
* Access Token `access_token` (required)
* API Version `api_version` (optional)

## Setup steps

1. Shopify Admin → Settings → Apps → Develop apps → enable Admin API scopes → Install app → copy Admin API access token and store name.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Shopify**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **ShopifyTools** (or search for Shopify)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 19 subtools for Shopify:

* Get Product: Retrieve a single product by ID from Shopify.
* List Products: Retrieve a list of products from the Shopify store.
* Create Product: Create a new product in the Shopify store.
* Update Product: Update an existing product in Shopify.
* Delete Product: Delete a product from Shopify.
* Count Products: Retrieve the total count of products in the Shopify store.
* Get Order: Retrieve a single order by ID from Shopify.
* List Orders: Retrieve a list of orders from the Shopify store.
* Create Order: Create a new order in Shopify (no payment collected).
* Update Order: Update an existing Shopify order (note, tags, email, shipping address).
* Close Order: Close an order in Shopify (all items fulfilled or refunded).
* Cancel Order: Cancel a Shopify order. Paid orders with fulfillments cannot be cancelled.
* Count Orders: Retrieve the total count of orders in the Shopify store.
* Get Customer: Retrieve a single customer by ID from Shopify.
* List Customers: Retrieve a list of customers from the Shopify store.
* Create Customer: Create a new customer in Shopify.
* Update Customer: Update an existing customer in Shopify.
* Search Customers: Search for Shopify customers by query (email, name, phone, etc.).
* Count Customers: Retrieve the total count of customers in the Shopify store.

## Documentation & resources

* Official documentation: `https://shopify.dev/docs/api/admin-rest`

* Phinite documentation: [Shopify](https://docs.phinite.ai/docs/integrations-hub/shopify)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
