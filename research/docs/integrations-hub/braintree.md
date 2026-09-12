> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Braintree

> Interact with the Braintree (PayPal) GraphQL API — run GraphQL queries/mutations plus convenience operations for transactions and customers.

## Overview

Phinite's **Braintree** predefined tool lets workspace agent graphs call Braintree APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Interact with the Braintree (PayPal) GraphQL API — run GraphQL queries/mutations plus convenience operations for transactions and customers.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Public Key `public_key` (required)
* Private Key `private_key` (required)
* Environment `environment` (optional)
* API Version `api_version` (optional)

## Setup steps

1. Create a Braintree sandbox account at braintreepayments.com.
2. In the Control Panel go to **Settings → API** and generate API keys.
3. Copy the public key, private key, and set environment to `sandbox` or `production`.
4. Log into your Phinite workspace at app.phinite.ai
5. Navigate to **Integrations** → **Predefined tools**
6. Select **Braintree**
7. Click **+ Add Configuration**
8. Enter the credential fields listed above
9. Select agent graphs that should use this connection
10. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **BraintreeTool** (or search for Braintree)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 7 subtools for Braintree:

* Execute Graphql: Run an arbitrary Braintree GraphQL query or mutation with optional variables.
* Ping: Connectivity/auth check (GraphQL ping).
* Create Transaction: Charge a stored payment method. Requires payment\_method\_id and amount.
* Find Transaction: Fetch a transaction by its node id.
* Refund Transaction: Refund a settled transaction. Optionally provide a partial amount.
* Create Customer: Create a customer. Pass an input object (firstName, lastName, email, ...).
* Find Customer: Fetch a customer by its node id.

## Documentation & resources

* Official documentation: `https://developer.paypal.com/braintree/docs`
* Phinite documentation: [Braintree](https://docs.phinite.ai/docs/integrations-hub/braintree)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
