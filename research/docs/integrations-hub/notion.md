> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Notion

> Read and update Notion pages and databases, search content, append

## Overview

Phinite's **Notion** predefined tool lets workspace agent graphs call Notion APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Read and update Notion pages and databases, search content, append

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

1. Create an integration at notion.so/my-integrations and copy the internal integration token.
2. Share target pages/databases with the integration.
3. Log into your Phinite workspace at app.phinite.ai
4. Navigate to **Integrations** → **Predefined tools**
5. Select **Notion**
6. Click **+ Add Configuration**
7. Enter the credential fields listed above
8. Select agent graphs that should use this connection
9. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **NotionTool** (or search for Notion)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 20 subtools for Notion:

* Create Database: Create a Notion database under a page
* Retrieve Database: Retrieve a Notion database by id
* Update Database: Update database title/metadata
* Create Page: Create a page in a data source
* Update Page: Update properties/icon/cover of a page
* Retrieve Page: Retrieve a page with selected properties
* Append Block Children: Append blocks to a page or block
* List Block Children: List child blocks for a page/block
* Delete Block: Delete a block by id
* Create Data Source: Create a data source in a database
* Update Data Source: Update data source schema/title/icon
* Retrieve Data Source: Retrieve a data source by id
* Query Data Source: Query a data source with filters/sorts
* List Data Source Templates: List templates for a data source
* Create File Upload: Initiate a Notion file upload
* Send File Upload: Send a public file URL to a file upload
* List File Uploads: List file uploads for the integration
* Search: Search pages/data sources shared with the integration
* List Users: List workspace users
* Retrieve User: Retrieve a user by id

## Documentation & resources

* Official documentation: `https://developers.notion.com/`
* Phinite documentation: [Notion](https://docs.phinite.ai/docs/integrations-hub/notion)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
