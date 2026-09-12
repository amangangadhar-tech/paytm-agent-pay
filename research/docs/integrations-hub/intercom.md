> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Intercom

> Manage Intercom contacts, companies, conversations, notes, tags, admins, and help-center articles via the Intercom REST API.

## Overview

Phinite's **Intercom** predefined tool lets workspace agent graphs call Intercom APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Intercom contacts, companies, conversations, notes, tags, admins, and help-center articles via the Intercom REST API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Access Token `access_token` (required)
* API Version `api_version` (optional)
* Base URL `base_url` (optional)

## Setup steps

1. Sign up at Intercom → Settings → Integrations → Developer Hub → create app → Authentication → copy Access Token.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Intercom**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **IntercomTool** (or search for Intercom)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 22 subtools for Intercom:

* List Contacts: List all contacts (users and leads) with optional pagination
* Get Contact: Get a single contact by ID
* Create Contact: Create a new contact. Role must be 'user' or 'lead'. For 'user' role, email is required.
* Update Contact: Update an existing contact by ID
* Search Contacts: Search contacts using a query object with field, operator, and value keys
* Delete Contact: Permanently delete a contact by ID
* List Companies: List all companies with optional pagination
* Get Company: Get a single company by Intercom ID
* Create Company: Create or update a company. company\_id (your identifier) is required.
* Update Company: Update an existing company by Intercom ID
* List Company Contacts: List all contacts belonging to a company
* List Conversations: List all conversations with optional pagination
* Get Conversation: Get a single conversation by ID, including conversation parts
* Create Conversation: Create a new conversation by sending a message from a contact
* Reply To Conversation: Reply to an existing conversation as an admin
* Create Note: Create a note on a contact
* List Notes: List all notes for a contact
* List Tags: List all tags in the workspace
* Create Or Update Tag: Create a new tag or update an existing one by name. Provide 'id' to rename.
* List Admins: List all admins and teammates in the workspace
* List Articles: List all help-center articles with optional pagination
* Create Article: Create a new help-center article

## Documentation & resources

* Official documentation: `https://developers.intercom.com/`

* Phinite documentation: [Intercom](https://docs.phinite.ai/docs/integrations-hub/intercom)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
