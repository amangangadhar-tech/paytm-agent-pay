> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Zoho Desk

> Manage Zoho Desk help-desk tickets, comments, contacts, accounts, agents, departments, and knowledge-base articles via the Zoho Desk REST API.

## Overview

Phinite's **Zoho Desk** predefined tool lets workspace agent graphs call Zoho Desk APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Zoho Desk help-desk tickets, comments, contacts, accounts, agents, departments, and knowledge-base articles via the Zoho Desk REST API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Access Token `access_token` (required)
* Organization ID `org_id` (required)
* Base URL `base_url` (optional)

## Setup steps

1. Zoho API Console → Server-based app → OAuth → exchange code for access token → get Org ID from Desk Setup → Developer Space → APIs.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Zoho Desk**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **ZohoDeskTool** (or search for Zoho Desk)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 26 subtools for Zoho Desk:

* List Tickets: List tickets in Zoho Desk. Supports pagination and filtering.
* Get Ticket: Get a single ticket by ID from Zoho Desk.
* Create Ticket: Create a new ticket in Zoho Desk.
* Update Ticket: Update an existing ticket in Zoho Desk.
* Delete Ticket: Move a ticket to trash in Zoho Desk.
* List Ticket Comments: List comments on a ticket in Zoho Desk.
* Add Ticket Comment: Add a comment to a ticket in Zoho Desk.
* List Contacts: List contacts in Zoho Desk.
* Get Contact: Get a single contact by ID from Zoho Desk.
* Create Contact: Create a new contact in Zoho Desk.
* Update Contact: Update an existing contact in Zoho Desk.
* Delete Contact: Delete a contact from Zoho Desk.
* List Accounts: List accounts (companies) in Zoho Desk.
* Get Account: Get a single account by ID from Zoho Desk.
* Create Account: Create a new account (company) in Zoho Desk.
* Update Account: Update an existing account in Zoho Desk.
* Delete Account: Delete an account from Zoho Desk.
* List Agents: List agents in Zoho Desk.
* Get Agent: Get a single agent by ID from Zoho Desk.
* List Departments: List departments in Zoho Desk.
* List Articles: List knowledge-base articles in Zoho Desk.
* Create Article: Create a knowledge-base article in Zoho Desk.
* Get Article: Get a single knowledge-base article by ID from Zoho Desk.
* Update Article: Update an existing knowledge-base article in Zoho Desk.
* Delete Article: Delete a knowledge-base article from Zoho Desk.
* Search Records: Search across tickets, contacts, accounts, and articles in Zoho Desk.

## Documentation & resources

* Official documentation: `https://desk.zoho.com/DeskAPIDocument#Introduction`

* Phinite documentation: [Zoho Desk](https://docs.phinite.ai/docs/integrations-hub/zoho-desk)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
