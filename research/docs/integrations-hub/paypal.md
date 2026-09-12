> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# PayPal

> Manage PayPal operations — orders, payouts, invoices, products, billing plans, and subscriptions via the PayPal REST API.

## Overview

Phinite's **PayPal** predefined tool lets workspace agent graphs call PayPal APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage PayPal operations — orders, payouts, invoices, products, billing plans, and subscriptions via the PayPal REST API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Client ID `client_id` (required)
* Client Secret `client_secret` (required)
* Environment `environment` (optional)

## Setup steps

1. In the PayPal Developer Dashboard create a REST app for sandbox or live.
2. Copy Client ID and Client Secret and set mode to `sandbox` or `live`.
3. Log into your Phinite workspace at app.phinite.ai
4. Navigate to **Integrations** → **Predefined tools**
5. Select **PayPal**
6. Click **+ Add Configuration**
7. Enter the credential fields listed above
8. Select agent graphs that should use this connection
9. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **PayPalTool** (or search for PayPal)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 28 subtools for PayPal:

* Create Payout: Creates a PayPal payout batch to send payments to one or more recipients.
* Get Payout: Returns the status and details of a payout batch by its batch ID.
* Get Payout Item: Returns details of a single payout item by its item ID.
* Cancel Payout Item: Cancels an unclaimed payout item. Only items with status UNCLAIMED can be cancelled.
* Create Order: Creates a PayPal order for a buyer to pay. Returns an order ID and approval URL.
* Get Order: Returns the details and current status of an order by order ID.
* Capture Order: Captures payment for an approved order. Returns the capture ID and payment status.
* Authorize Order: Authorizes payment for an approved AUTHORIZE-intent order. Reserves funds without capturing them.
* Update Order: Updates an order's fields using JSON Patch operations before the buyer approves it.
* Get Capture: Returns details of a captured payment by capture ID.
* Refund Capture: Refunds a captured payment, in full or partially. Returns the refund ID and status.
* Get Refund: Returns details of a refund by refund ID.
* Create Invoice: Creates a draft invoice. Requires detail and at minimum one item or amount.
* Get Invoice: Returns full details of an invoice by invoice ID.
* List Invoices: Returns a paginated list of invoices for the merchant.
* Update Invoice: Replaces an invoice with the provided data. Invoice must be in DRAFT or SCHEDULED status.
* Send Invoice: Sends a draft invoice to the recipient(s) by email. Changes status from DRAFT to SENT.
* Delete Invoice: Deletes a draft or cancelled invoice. Sent invoices cannot be deleted.
* Create Product: Creates a product in the PayPal catalog. Used as the basis for subscription billing plans.
* Get Product: Returns details of a catalog product by product ID.
* List Products: Returns a paginated list of products in the PayPal catalog.
* Create Plan: Creates a subscription billing plan linked to a product.
* Get Plan: Returns details of a billing plan by plan ID.
* List Plans: Returns a paginated list of billing plans, optionally filtered by product ID.
* Create Subscription: Creates a subscription for a buyer under the specified billing plan.
* Get Subscription: Returns details and current status of a subscription by subscription ID.
* Suspend Subscription: Suspends an active subscription. Billing is paused; can be reactivated later.
* Cancel Subscription: Cancels an active or suspended subscription permanently. Irreversible.

## Documentation & resources

* Official documentation: `https://developer.paypal.com/api/rest/`
* Phinite documentation: [PayPal](https://docs.phinite.ai/docs/integrations-hub/paypal)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
