> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Azure Blob Storage

> Manage Azure Blob Storage containers and blobs via the Azure Blob Storage REST API.

## Overview

Phinite's **Azure Blob Storage** predefined tool lets workspace agent graphs call Azure Blob Storage APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Azure Blob Storage containers and blobs via the Azure Blob Storage REST API.

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
* Storage Account `storage_account` (required)

## Setup steps

1. Create a Storage Account in the Azure Portal.
2. Copy the account name and access key (or configure a service principal for OAuth).
3. Log into your Phinite workspace at app.phinite.ai
4. Navigate to **Integrations** → **Predefined tools**
5. Select **Azure Blob Storage**
6. Click **+ Add Configuration**
7. Enter the credential fields listed above
8. Select agent graphs that should use this connection
9. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **AzureBlobTool** (or search for Azure Blob Storage)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 8 subtools for Azure Blob Storage:

* Create Container: Creates a new blob container in the storage account.
* Delete Container: Deletes a blob container and all blobs it contains. Irreversible.
* Get Container: Returns properties and metadata of a blob container.
* List Containers: Lists all blob containers in the storage account.
* Upload Blob: Uploads a blob from a URL source or from plain text/JSON content.
* Delete Blob: Deletes a blob from a container.
* Download Blob: Downloads a blob's content. Text/JSON blobs are returned as a string; binary blobs as base64.
* List Blobs: Lists blobs in a container, optionally filtered by prefix.

## Documentation & resources

* Official documentation: `https://learn.microsoft.com/en-us/azure/storage/blobs/`
* Phinite documentation: [Azure Blob Storage](https://docs.phinite.ai/docs/integrations-hub/azure-blob)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
