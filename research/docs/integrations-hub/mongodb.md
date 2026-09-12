> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# MongoDB

> Perform CRUD and aggregations on MongoDB collections, manage indexes,

## Overview

Phinite's **MongoDB** predefined tool lets workspace agent graphs call MongoDB APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Perform CRUD and aggregations on MongoDB collections, manage indexes,

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

1. Obtain a MongoDB connection string from Atlas or your self-hosted deployment.
2. Identify the target database name for agent operations.
3. Log into your Phinite workspace at app.phinite.ai
4. Navigate to **Integrations** → **Predefined tools**
5. Select **MongoDB**
6. Click **+ Add Configuration**
7. Enter the credential fields listed above
8. Select agent graphs that should use this connection
9. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **MongoDbTool** (or search for MongoDB)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 21 subtools for MongoDB:

* Insert Document: Insert a single document into a MongoDB collection
* Insert Many Documents: Insert multiple documents into a MongoDB collection
* Find Document: Find a single document in a MongoDB collection
* Find Many Documents: Find multiple documents in a MongoDB collection
* Update Document: Update a single document in a MongoDB collection
* Update Many Documents: Update multiple documents in a MongoDB collection
* Delete Document: Delete a single document from a MongoDB collection
* Delete Many Documents: Delete multiple documents from a MongoDB collection
* Count Documents: Count documents in a MongoDB collection
* Aggregate Documents: Perform aggregation operations on MongoDB collection
* Create Collection: Create a new collection in MongoDB
* Drop Collection: Drop a collection from MongoDB
* List Collections: List all collections in a MongoDB database
* Create Index: Create an index on a MongoDB collection
* List Indexes: List all indexes on a MongoDB collection
* Drop Index: Drop an index from a MongoDB collection
* Get Database Stats: Get statistics about a MongoDB database
* Get Collection Stats: Get statistics about a MongoDB collection
* Create Database: Create a new MongoDB database
* Drop Database: Drop a MongoDB database
* List Databases: List all MongoDB databases

## Documentation & resources

* Official documentation: `https://www.mongodb.com/docs/`
* Phinite documentation: [MongoDB](https://docs.phinite.ai/docs/integrations-hub/mongodb)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
