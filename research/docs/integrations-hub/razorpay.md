> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Razorpay

> Manage Razorpay orders, payments, refunds, customers, items, and settlements via the Razorpay REST API.

## Overview

Phinite's **Razorpay** predefined tool lets workspace agent graphs call Razorpay APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Razorpay orders, payments, refunds, customers, items, and settlements via the Razorpay REST API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Key ID `key_id` (required)
* Key Secret `key_secret` (required)

## Setup steps

1. Razorpay Dashboard → enable Test Mode → Account & Settings → API Keys → Generate Test Key (Key ID and Key Secret).
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Razorpay**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

<Warning>
  Use test mode keys for development. Production keys require a verified Razorpay account.
</Warning>

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **RazorpayTool** (or search for Razorpay)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 23 subtools for Razorpay:

* Create Order: Create a new Razorpay order. Amount is in the smallest currency unit (e.g. paise for INR).
* Fetch Order: Fetch details of a specific Razorpay order by its order ID.
* Fetch All Orders: Fetch all Razorpay orders with optional pagination.
* Update Order: Update notes on a Razorpay order.
* Fetch Payments For Order: Fetch all payments linked to a specific Razorpay order.
* Capture Payment: Capture an authorized Razorpay payment. Amount is in smallest currency unit.
* Fetch Payment: Fetch details of a specific Razorpay payment by its payment ID.
* Fetch All Payments: Fetch all Razorpay payments with optional pagination.
* Update Payment: Update notes on a Razorpay payment.
* Create Refund: Create a refund for a Razorpay payment. Omit amount for a full refund.
* Fetch Refund: Fetch details of a specific refund for a Razorpay payment.
* Fetch All Refunds: Fetch all refunds for a specific Razorpay payment.
* Create Customer: Create a new customer in Razorpay.
* Fetch Customer: Fetch details of a Razorpay customer by their customer ID.
* Fetch All Customers: Fetch all Razorpay customers with optional pagination.
* Edit Customer: Edit an existing Razorpay customer's details.
* Create Item: Create a new item in Razorpay. Amount is in smallest currency unit.
* Fetch Item: Fetch details of a specific Razorpay item by its item ID.
* Fetch All Items: Fetch all Razorpay items with optional pagination.
* Update Item: Update an existing Razorpay item's details.
* Delete Item: Delete a Razorpay item by its item ID.
* Fetch Settlement: Fetch details of a specific Razorpay settlement by its settlement ID.
* Fetch All Settlements: Fetch all Razorpay settlements with optional pagination.

## Documentation & resources

* Official documentation: `https://razorpay.com/docs/api/`

* Phinite documentation: [Razorpay](https://docs.phinite.ai/docs/integrations-hub/razorpay)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
