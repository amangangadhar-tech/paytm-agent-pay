> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Azure Cosmos DB

> Manage Azure Cosmos DB containers and items (documents) via the Cosmos DB REST API.

## Overview

Phinite's **Azure Cosmos DB** predefined tool lets workspace agent graphs call Azure Cosmos DB APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Azure Cosmos DB containers and items (documents) via the Cosmos DB REST API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Tenant ID `tenant_id` (required)
* Client ID `client_id` (required)
* Client Secret `client_secret` (required)
* Account Name `account_name` (required)
* Database Name `database_name` (required)

## Setup steps

1. Create an Azure Cosmos DB account in the Azure Portal.
2. Copy the account endpoint and primary key from **Keys**.
3. Log into your Phinite workspace at app.phinite.ai
4. Navigate to **Integrations** → **Predefined tools**
5. Select **Azure Cosmos DB**
6. Click **+ Add Configuration**
7. Enter the credential fields listed above
8. Select agent graphs that should use this connection
9. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **AzureCosmosDbTool** (or search for Azure Cosmos DB)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 10 subtools for Azure Cosmos DB:

* Create Container: Creates a new container (collection) in the Cosmos DB database. Requires a container ID and partition key path.
* Delete Container: Deletes a container and ALL its items. Irreversible.
* Get Container: Returns the properties of a Cosmos DB container including partition key, indexing policy, and throughput.
* List Containers: Lists all containers in the Cosmos DB database.
* Create Item: Creates a new item (document) in a container. The item body must include the partition key field.
* Delete Item: Deletes an item from a container by its ID and partition key value.
* Get Item: Returns a single item from a container by its ID and partition key value.
* List Items: Lists all items in a container. For large containers, use query\_items with a filter instead.
* Query Items: Executes a SQL query against a container and returns matching items. Supports parameterized queries.
* Update Item: Replaces an existing item (full replace/upsert). The item body must include the id and partition key field.

## Documentation & resources

* Official documentation: `https://learn.microsoft.com/en-us/azure/cosmos-db/`
* Phinite documentation: [Azure Cosmos DB](https://docs.phinite.ai/docs/integrations-hub/azure-cosmos-db)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
