> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Recurly

> Manage a Recurly subscription-billing site — accounts, subscriptions, plans, invoices, transactions, and coupons — via the Recurly v3 API.

## Overview

Phinite's **Recurly** predefined tool lets workspace agent graphs call Recurly APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage a Recurly subscription-billing site — accounts, subscriptions, plans, invoices, transactions, and coupons — via the Recurly v3 API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* API Key `api_key` (required)
* Region `region` (optional)
* API Version `api_version` (optional)

## Setup steps

1. Create a Recurly account at recurly.com and sign in.
2. Go to **Integrations → API Credentials** and create a private API key.
3. Determine your API region (`us` or `eu`) from your Recurly site URL.
4. Log into your Phinite workspace at app.phinite.ai
5. Navigate to **Integrations** → **Predefined tools**
6. Select **Recurly**
7. Click **+ Add Configuration**
8. Enter the credential fields listed above
9. Select agent graphs that should use this connection
10. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **RecurlyTool** (or search for Recurly)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 34 subtools for Recurly:

* Create Account: Create a new account. Requires a unique account code.
* Get Account: Fetch a single account. account\_id may be the Recurly id or `code-<your_code>`.
* List Accounts: List accounts with optional filters/pagination.
* Update Account: Update an account. Provide fields to change via update\_fields.
* Deactivate Account: Deactivate (close) an account.
* Reactivate Account: Reactivate a previously deactivated account.
* List Account Subscriptions: List subscriptions belonging to an account.
* List Account Invoices: List invoices belonging to an account.
* List Account Transactions: List transactions belonging to an account.
* Create Subscription: Create a subscription. Requires plan\_code, account\_code and currency.
* Get Subscription: Fetch a single subscription. subscription\_id may be the id or `uuid-<uuid>`.
* List Subscriptions: List subscriptions with optional filters/pagination.
* Update Subscription: Update a subscription. Provide fields to change via update\_fields.
* Cancel Subscription: Cancel a subscription (lapses at end of current term).
* Pause Subscription: Pause a subscription for a number of upcoming billing cycles.
* Resume Subscription: Resume a paused subscription.
* Terminate Subscription: Terminate (end immediately) a subscription via DELETE, with an optional refund.
* Create Plan: Create a plan. Requires code, name, and currencies (via additional\_fields).
* Get Plan: Fetch a single plan. plan\_id may be the id or `code-<plan_code>`.
* List Plans: List plans with optional filters/pagination.
* Update Plan: Update a plan. Provide fields to change via update\_fields.
* Remove Plan: Remove (deactivate) a plan.
* Get Invoice: Fetch a single invoice. invoice\_id may be the id or `number-<invoice_number>`.
* List Invoices: List invoices with optional filters/pagination.
* Update Invoice: Update an invoice (e.g. PO number, notes). Provide fields via update\_fields.
* Collect Invoice: Attempt to collect payment on an open/past-due invoice.
* Mark Invoice Failed: Mark an open invoice as failed collection.
* Get Transaction: Fetch a single transaction by id.
* List Transactions: List transactions across the site with optional filters/pagination.
* Create Coupon: Create a coupon. Requires code, name and a discount definition (via additional\_fields).
* Get Coupon: Fetch a single coupon. coupon\_id may be the id or `code-<coupon_code>`.
* List Coupons: List coupons with optional filters/pagination.
* Update Coupon: Update a coupon. Provide fields to change via update\_fields.
* Expire Coupon: Expire (deactivate) a coupon so it can no longer be redeemed.

## Documentation & resources

* Official documentation: `https://recurly.com/developers/api/v2021-02-25/`
* Phinite documentation: [Recurly](https://docs.phinite.ai/docs/integrations-hub/recurly)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
