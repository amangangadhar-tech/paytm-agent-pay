> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Freshsales CRM

> Manage Freshsales CRM contacts, accounts, deals, notes, tasks, and perform search via the Freshsales REST API.

## Overview

Phinite's **Freshsales CRM** predefined tool lets workspace agent graphs call Freshsales CRM APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Freshsales CRM contacts, accounts, deals, notes, tasks, and perform search via the Freshsales REST API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* API Key `api_key` (required)
* Domain (e.g. yourcompany.myfreshworks.com) `domain` (required)

## Setup steps

1. Log in to Freshsales → profile → Profile Settings → API Settings → copy API Key and domain (e.g. acme.myfreshworks.com).
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Freshsales CRM**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **FreshsalesCRMTool** (or search for Freshsales CRM)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 20 subtools for Freshsales CRM:

* Create Contact: Create a new contact in Freshsales CRM
* View Contact: View details of a specific contact by ID
* List Contacts: List contacts from a specific view. Use list\_contact\_filters first to get view IDs.
* Update Contact: Update an existing contact's information
* Delete Contact: Delete a contact by ID
* Create Account: Create a new sales account in Freshsales CRM
* View Account: View details of a specific sales account by ID
* Update Account: Update an existing sales account's information
* List Accounts: List accounts using view ID
* Create Deal: Create a new deal in Freshsales CRM
* View Deal: View details of a specific deal by ID
* Update Deal: Update an existing deal's information
* List Deals: List deals using view ID
* Create Note: Create a note attached to a contact, account, or deal
* Update Note: Update a note by ID
* Create Task: Create a task associated with a CRM record
* List Tasks: List tasks by filter (open, due\_today, due\_tomorrow, overdue, completed)
* Update Task: Update a task by ID
* List Contact Filters: List contact views/filters
* Search: Search across contacts, accounts, and deals by keyword

## Documentation & resources

* Official documentation: `https://developers.freshworks.com/crm/api/`

* Phinite documentation: [Freshsales CRM](https://docs.phinite.ai/docs/integrations-hub/freshsales)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
