> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Google BigQuery

> Query BigQuery datasets with SQL, inspect tables, export results, and

## Overview

Phinite's **Google BigQuery** predefined tool lets workspace agent graphs call Google BigQuery APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Query BigQuery datasets with SQL, inspect tables, export results, and

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

1. Create a GCP project, enable BigQuery API, and obtain OAuth or service-account credentials.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Google BigQuery**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **GoogleBigQueryTool** (or search for Google BigQuery)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 3 subtools for Google BigQuery:

* List Tables: List tables in the configured dataset
* Describe Table: Describe schema for a BigQuery table
* Run Sql Query: Run a SQL query against the dataset

## Documentation & resources

* Official documentation: `https://cloud.google.com/bigquery/docs`
* Phinite documentation: [Google BigQuery](https://docs.phinite.ai/docs/integrations-hub/google-bigquery)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
