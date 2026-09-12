> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Google Drive

> Upload, download, search, and share files, manage folders and permissions,

## Overview

Phinite's **Google Drive** predefined tool lets workspace agent graphs call Google Drive APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Upload, download, search, and share files, manage folders and permissions,

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

1. Create a Google Cloud project, enable the Drive API, and configure OAuth or a service account.
2. Obtain credentials with the Drive scopes your workflow needs.
3. Log into your Phinite workspace at app.phinite.ai
4. Navigate to **Integrations** → **Predefined tools**
5. Select **Google Drive**
6. Click **+ Add Configuration**
7. Enter the credential fields listed above
8. Select agent graphs that should use this connection
9. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **GoogleDriveTool** (or search for Google Drive)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 2 subtools for Google Drive:

* List Files: List all files from google drive
* Upload File: upload file in google drive

## Documentation & resources

* Official documentation: `https://developers.google.com/drive`
* Phinite documentation: [Google Drive](https://docs.phinite.ai/docs/integrations-hub/google-drive)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
