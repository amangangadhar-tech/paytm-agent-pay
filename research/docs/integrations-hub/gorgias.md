> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Gorgias

> Manage Gorgias helpdesk resources — tickets, ticket messages, customers, users, tags, and views — via the Gorgias REST API.

## Overview

Phinite's **Gorgias** predefined tool lets workspace agent graphs call Gorgias APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Gorgias helpdesk resources — tickets, ticket messages, customers, users, tags, and views — via the Gorgias REST API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Subdomain `subdomain` (required)
* Account Email `email` (required)
* API Key `api_key` (required)
* Base URL `base_url` (optional)

## Setup steps

1. Create a Gorgias account and sign in at app.gorgias.com.
2. Go to **Settings → REST API** and create an API key.
3. Note your Gorgias subdomain, account email, and API key.
4. Verify with a users API call using basic auth (`email:api_key`).
5. Log into your Phinite workspace at app.phinite.ai
6. Navigate to **Integrations** → **Predefined tools**
7. Select **Gorgias**
8. Click **+ Add Configuration**
9. Enter the credential fields listed above
10. Select agent graphs that should use this connection
11. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **GorgiasTool** (or search for Gorgias)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 18 subtools for Gorgias:

* Create Ticket: Creates a ticket. The fields map must include a customer and a non-empty messages array.
* Get Ticket: Fetches a single ticket by ID.
* List Tickets: Lists tickets (cursor-paginated). Filter by customer\_id, external\_id, view\_id, or rule\_id only.
* Update Ticket: Updates a ticket's fields (e.g. status, assignee\_user, subject, tags).
* Delete Ticket: Permanently deletes a ticket by ID.
* Create Message: Adds a message to a ticket (agent reply or internal note).
* List Messages: Lists the messages on a ticket (cursor-paginated).
* Create Customer: Creates a customer. Provide a name and/or email.
* Get Customer: Fetches a single customer by ID.
* List Customers: Lists/searches customers (cursor-paginated). Filter by email or external\_id.
* Update Customer: Updates a customer's fields (e.g. name, language, timezone, data).
* Get User: Fetches a single user (agent) by ID.
* List Users: Lists users (agents) (cursor-paginated).
* List Tags: Lists ticket tags defined in the account (cursor-paginated).
* Create Tag: Creates a new ticket tag.
* List Views: Lists views (saved ticket filters) (cursor-paginated).
* Get View: Fetches a single view by ID.
* List View Items: Lists the items (tickets) contained in a view (cursor-paginated).

## Documentation & resources

* Official documentation: `https://developers.gorgias.com/reference/introduction`
* Phinite documentation: [Gorgias](https://docs.phinite.ai/docs/integrations-hub/gorgias)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
