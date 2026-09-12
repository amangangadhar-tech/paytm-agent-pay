> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Square

> Manage Square payments, refunds, orders, catalog, customers, cards, invoices, payment links, subscriptions, inventory, and locations via the Square API.

## Overview

Phinite's **Square** predefined tool lets workspace agent graphs call Square APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Square payments, refunds, orders, catalog, customers, cards, invoices, payment links, subscriptions, inventory, and locations via the Square API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Access Token `access_token` (required)
* Location ID `location_id` (optional)

## Setup steps

1. In the Square Developer Dashboard create an application and obtain an access token.
2. Set environment to `sandbox` or `production`.
3. Log into your Phinite workspace at app.phinite.ai
4. Navigate to **Integrations** → **Predefined tools**
5. Select **Square**
6. Click **+ Add Configuration**
7. Enter the credential fields listed above
8. Select agent graphs that should use this connection
9. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **SquareTool** (or search for Square)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 33 subtools for Square:

* Create Payment: Creates a payment from a source. Requires source\_id, idempotency\_key, and amount\_money.
* Get Payment: Retrieves details of a specific payment by ID.
* List Payments: Lists payments for the account with optional date range and cursor pagination.
* Cancel Payment: Cancels (voids) a payment that has not yet been completed.
* Complete Payment: Captures an authorized payment, completing the charge.
* Refund Payment: Issues a full or partial refund for a completed payment.
* Get Refund: Retrieves details of a specific refund by ID.
* List Refunds: Lists refunds for the account with optional date range and pagination.
* Create Order: Creates a new order with line items, taxes, and discounts.
* Get Order: Retrieves a specific order by ID.
* Search Orders: Searches orders across one or more locations with filters and sorting.
* List Catalog: Lists all CatalogObjects of specified types (ITEM, ITEM\_VARIATION, CATEGORY, TAX, DISCOUNT, etc.).
* Upsert Catalog Object: Creates or updates a single CatalogObject (item, variation, category, tax, discount, etc.).
* Retrieve Catalog Object: Retrieves a single CatalogObject by ID, optionally including related objects.
* Delete Catalog Object: Deletes a CatalogObject and its associated objects.
* Search Catalog: Searches the product catalog by supported attributes (name, custom attribute, etc.).
* Get Inventory Count: Retrieves the current inventory count for a catalog object (item variation) at a location.
* List Customers: Lists all customer profiles for the account with optional sorting and pagination.
* Create Customer: Creates a new customer profile.
* Get Customer: Retrieves a specific customer profile by ID.
* Update Customer: Updates a customer profile. Only provided fields are changed.
* Delete Customer: Deletes a customer profile permanently.
* Search Customers: Searches customer profiles by filter criteria (email, phone, name, group membership, etc.).
* Create Card: Saves a card on file for future charges.
* List Cards: Lists all active cards on file, optionally filtered by customer or status.
* Create Invoice: Creates a draft invoice linked to an existing order.
* Publish Invoice: Publishes a draft invoice, sending it to the customer via the configured delivery method.
* Get Invoice: Retrieves a specific invoice by ID.
* Create Payment Link: Creates a Square-hosted checkout page and returns a shareable URL.
* Create Subscription: Enrolls a customer in a subscription plan.
* Cancel Subscription: Schedules a cancellation for an active subscription at the end of the billing period.
* List Locations: Lists all locations for the merchant account, including inactive ones.
* List Merchants: Lists merchant info for the access token.

## Documentation & resources

* Official documentation: `https://developer.squareup.com/reference/square`
* Phinite documentation: [Square](https://docs.phinite.ai/docs/integrations-hub/square)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
