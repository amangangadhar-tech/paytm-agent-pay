> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Google Sheets

> Read, write, and append spreadsheet rows, format ranges, and automate

## Overview

Phinite's **Google Sheets** predefined tool lets workspace agent graphs call Google Sheets APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Read, write, and append spreadsheet rows, format ranges, and automate

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

1. Create a Google Cloud project, enable the Sheets API, and configure OAuth or a service account.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Google Sheets**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **GoogleSheetsTool** (or search for Google Sheets)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 4 subtools for Google Sheets:

* Read Sheet: Read values from a Google Sheet range
* Update Sheet: Overwrite values in a Google Sheet range
* Create Sheet: Create a new Google Spreadsheet
* Duplicate Sheet: Duplicate an existing Google Spreadsheet

## Documentation & resources

* Official documentation: `https://developers.google.com/sheets/api`
* Phinite documentation: [Google Sheets](https://docs.phinite.ai/docs/integrations-hub/google-sheets)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
