> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Kustomer

> Manage a Kustomer account — customers, conversations, messages, notes, tasks, companies, tags, teams, users, and shortcuts — via the Kustomer API v1.

## Overview

Phinite's **Kustomer** predefined tool lets workspace agent graphs call Kustomer APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage a Kustomer account — customers, conversations, messages, notes, tasks, companies, tags, teams, users, and shortcuts — via the Kustomer API v1.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* API Token `api_token` (required)
* Organization Name `org_name` (optional)

## Setup steps

1. Obtain a Kustomer workspace (typically provisioned through Kustomer sales/demo).
2. Sign in and go to **Settings → Platform → API Keys**.
3. Create an API key with appropriate permissions and copy the token.
4. Copy your organization name from the browser URL (e.g. `yourorg` from `yourorg.kustomerapp.com`).
5. Log into your Phinite workspace at app.phinite.ai
6. Navigate to **Integrations** → **Predefined tools**
7. Select **Kustomer**
8. Click **+ Add Configuration**
9. Enter the credential fields listed above
10. Select agent graphs that should use this connection
11. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **KustomerTool** (or search for Kustomer)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 52 subtools for Kustomer:

* Create Customer: Create a new customer. Use additional\_fields for emails, phones, externalId, custom attributes, etc.
* Get Customer: Fetch a single customer by its id.
* Get Customer By Email: Fetch a customer by email address.
* Get Customer By Phone: Fetch a customer by phone number.
* List Customers: List customers with pagination.
* Update Customer: Update a customer. Provide only fields to change via update\_fields.
* Delete Customer: Delete a customer by id. Irreversible.
* Search Customers: Search customers using a KQL query body (and/or/sort across customer, conversation, message and company data).
* Create Conversation: Create a conversation for a customer. Requires customer\_id.
* Get Conversation: Fetch a single conversation by id.
* List Conversations: List conversations with pagination.
* Update Conversation: Update a conversation (e.g. change status, assignment). Provide fields via update\_fields.
* Delete Conversation: Delete a conversation by id. Irreversible.
* Create Message: Create/send a message on an existing conversation. Requires channel, direction and app.
* Get Message: Fetch a single message by id.
* List Conversation Messages: List messages within a conversation.
* Update Message: Update a message (e.g. status). Provide fields via update\_fields.
* Create Note: Add an internal note to a customer. Requires customer\_id and note text.
* Get Note: Fetch a single note by id.
* List Customer Notes: List notes attached to a customer.
* Delete Note: Delete a note by id. Irreversible.
* Create Task: Create a task. Requires name.
* Get Task: Fetch a single task by id.
* List Tasks: List tasks with pagination.
* Update Task: Update a task (e.g. mark complete). Provide fields via update\_fields.
* Delete Task: Delete a task by id. Irreversible.
* Create Company: Create a company. Requires name.
* Get Company: Fetch a single company by id.
* List Companies: List companies with pagination.
* Update Company: Update a company. Provide only fields to change via update\_fields.
* Delete Company: Delete a company by id. Irreversible.
* Create Tag: Create a tag. Requires name.
* Get Tag: Fetch a single tag by id.
* List Tags: List tags with pagination.
* Update Tag: Update a tag. Provide only fields to change via update\_fields.
* Delete Tag: Delete a tag by id. Irreversible.
* Create Team: Create a team. Requires name.
* Get Team: Fetch a single team by id.
* List Teams: List teams with pagination.
* Update Team: Update a team. Provide only fields to change via update\_fields.
* Delete Team: Delete a team by id. Irreversible.
* Get Current User: Get the user associated with the current API token.
* Get User: Fetch a single user by id.
* List Users: List users with pagination.
* Create User: Create a user (agent). Requires name and email.
* Update User: Update a user. Provide only fields to change via update\_fields.
* Delete User: Delete a user by id. Irreversible.
* Create Shortcut: Create a shortcut (saved reply). Requires name.
* Get Shortcut: Fetch a single shortcut by id.
* List Shortcuts: List shortcuts with pagination.
* Update Shortcut: Update a shortcut. Provide only fields to change via update\_fields.
* Delete Shortcut: Delete a shortcut by id. Irreversible.

## Documentation & resources

* Official documentation: `https://developer.kustomer.com/`
* Phinite documentation: [Kustomer](https://docs.phinite.ai/docs/integrations-hub/kustomer)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
