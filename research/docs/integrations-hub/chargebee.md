> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Chargebee

> Manage Chargebee billing — customers, subscriptions, invoices, transactions, credit notes, and the product catalog (items / item prices) — via the Chargebee API v2.

## Overview

Phinite's **Chargebee** predefined tool lets workspace agent graphs call Chargebee APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Chargebee billing — customers, subscriptions, invoices, transactions, credit notes, and the product catalog (items / item prices) — via the Chargebee API v2.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* API Key `api_key` (required)
* Site `site` (required)
* Base URL `base_url` (optional)

## Setup steps

1. Create a Chargebee account at chargebee.com and sign in.
2. Go to **Settings → Configure Chargebee → API Keys and Webhooks**.
3. Create an API key with the permissions you need.
4. Copy your site name from the Chargebee site URL (e.g. `acme-test` from `acme-test.chargebee.com`).
5. Log into your Phinite workspace at app.phinite.ai
6. Navigate to **Integrations** → **Predefined tools**
7. Select **Chargebee**
8. Click **+ Add Configuration**
9. Enter the credential fields listed above
10. Select agent graphs that should use this connection
11. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **ChargebeeTool** (or search for Chargebee)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 22 subtools for Chargebee:

* Create Customer: Creates a customer. Common fields are first\_name, last\_name, email, phone, company, billing\_address.
* Get Customer: Retrieves a customer by ID.
* List Customers: Lists customers. Filter with Chargebee operator maps.
* Update Customer: Updates a customer's fields (partial).
* Delete Customer: Permanently deletes a customer by ID. Must have no active subscriptions or unpaid invoices.
* Create Subscription: Creates a subscription for an existing customer (Product Catalog 2.0 by default).
* Get Subscription: Retrieves a subscription by ID.
* List Subscriptions: Lists subscriptions. Filter with operators.
* Update Subscription: Updates a subscription (e.g. change items/quantity).
* Cancel Subscription: Cancels a subscription. By default cancels immediately; set end\_of\_term=true to cancel at end of term.
* Reactivate Subscription: Reactivates a cancelled subscription, moving it back to active (or in\_trial).
* Delete Subscription: Permanently deletes a subscription by ID.
* Get Invoice: Retrieves an invoice by ID.
* List Invoices: Lists invoices. Filter with operators.
* Get Invoice Pdf: Returns a temporary download URL for an invoice's PDF.
* Get Transaction: Retrieves a payment transaction by ID.
* List Transactions: Lists payment transactions. Filter with operators.
* Get Credit Note: Retrieves a credit note by ID.
* List Credit Notes: Lists credit notes. Filter with operators.
* List Items: Lists catalog items (Product Catalog 2.0). Filter with operators.
* Get Item: Retrieves a catalog item by ID (Product Catalog 2.0).
* List Item Prices: Lists item prices (Product Catalog 2.0). Filter with operators.

## Documentation & resources

* Official documentation: `https://apidocs.chargebee.com/docs/api`
* Phinite documentation: [Chargebee](https://docs.phinite.ai/docs/integrations-hub/chargebee)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
