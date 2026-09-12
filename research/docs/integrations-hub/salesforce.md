> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Salesforce

> Connect Salesforce to create and update leads, accounts, and opportunities,

## Overview

Phinite's **Salesforce** predefined tool lets workspace agent graphs call Salesforce APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Connect Salesforce to create and update leads, accounts, and opportunities,

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* See integration configuration fields in Phinite

## Setup steps

1. Create a Salesforce Connected App or use username/password/security token for API access.
2. Copy instance URL, client credentials, or security token as required.
3. Log into your Phinite workspace at app.phinite.ai
4. Navigate to **Integrations** → **Predefined tools**
5. Select **Salesforce**
6. Click **+ Add Configuration**
7. Enter the credential fields listed above
8. Select agent graphs that should use this connection
9. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **SalesforceTool** (or search for Salesforce)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 12 subtools for Salesforce:

* Query: Execute a SOQL query and return records
* Query More: Continue a SOQL query using nextRecordsUrl or Id
* Query All: Execute a SOQL query and fetch all records
* Search: Execute a SOSL search and return matches
* Get Record: Fetch a record by object name and ID
* Get Record By Custom Id: Fetch a record by a custom external ID field
* Create Record: Create a record for a given object
* Update Record: Update a record by ID for a given object
* Upsert Record: Upsert a record using an external ID field
* Delete Record: Delete a record by object name and ID
* Describe Object: Describe a Salesforce object (fields, labels, etc.)
* List Objects: List available Salesforce objects

## Documentation & resources

* Official documentation: `https://developer.salesforce.com/docs/apis`
* Phinite documentation: [Salesforce](https://docs.phinite.ai/docs/integrations-hub/salesforce)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
