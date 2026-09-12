> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Zoho Office Integrator

> Create, edit, preview, convert, and compare documents, spreadsheets, and presentations via Zoho Office Integrator.

## Overview

Phinite's **Zoho Office Integrator** predefined tool lets workspace agent graphs call Zoho Office Integrator APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Create, edit, preview, convert, and compare documents, spreadsheets, and presentations via Zoho Office Integrator.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* API Key `api_key` (required)
* Region Domain `domain` (optional)

## Setup steps

1. officeintegrator.zoho.com → register → Generate API Key from dashboard.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Zoho Office Integrator**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **ZohoOfficeIntegratorTool** (or search for Zoho Office Integrator)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 11 subtools for Zoho Office Integrator:

* Create Document: Create a new blank document in Zoho Writer. Returns an editor session URL.
* Edit Document: Open an existing document for editing in Zoho Writer from a publicly accessible URL. Returns an editor session URL.
* Preview Document: Open a document in read-only preview mode in Zoho Writer from a publicly accessible URL.
* Convert Document: Convert a document to another format using Zoho Writer. Supports docx, doc, pdf, odt, html, txt, zdoc.
* Compare Documents: Compare two document versions and highlight differences using Zoho Writer. Returns a comparison viewer URL.
* Get Document Details: Get details of a document in Zoho Writer by its document ID.
* Get Session Info: Get details of a document session in Zoho Writer by its session ID.
* Delete Document: Delete a document in Zoho Writer by its document ID.
* Create Spreadsheet: Create a new blank spreadsheet in Zoho Sheet. Returns an editor session URL.
* Create Presentation: Create a new blank presentation in Zoho Show. Returns an editor session URL.
* Get Plan Details: Get the current plan details including API call usage for Zoho Office Integrator.

## Documentation & resources

* Official documentation: `https://www.zoho.com/officeintegrator/api/`

* Phinite documentation: [Zoho Office Integrator](https://docs.phinite.ai/docs/integrations-hub/zoho-office-integrator)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
