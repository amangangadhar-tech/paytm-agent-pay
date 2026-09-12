> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Help Scout

> Manage Help Scout Mailbox support resources — conversations, threads, customers, mailboxes, users, and tags — via the Help Scout Mailbox API v2. Authenticate with an access token, or client_id + client_secret.

## Overview

Phinite's **Help Scout** predefined tool lets workspace agent graphs call Help Scout APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Help Scout Mailbox support resources — conversations, threads, customers, mailboxes, users, and tags — via the Help Scout Mailbox API v2. Authenticate with an access token, or client\_id + client\_secret.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Access Token `access_token` (optional)
* Client ID `client_id` (optional)
* Client Secret `client_secret` (optional)

## Setup steps

1. Create a Help Scout account at helpscout.com and sign in.
2. Go to **Manage → Apps → Create My App** and copy the Client ID and Client Secret.
3. Generate an access token via the Help Scout OAuth2 client-credentials flow.
4. Verify access with a mailboxes API call, then save `access_token` (or client ID/secret if your workflow exchanges tokens).
5. Log into your Phinite workspace at app.phinite.ai
6. Navigate to **Integrations** → **Predefined tools**
7. Select **Help Scout**
8. Click **+ Add Configuration**
9. Enter the credential fields listed above
10. Select agent graphs that should use this connection
11. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **HelpScoutTool** (or search for Help Scout)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 20 subtools for Help Scout:

* Create Conversation: Creates a conversation in a mailbox. Requires subject, mailbox\_id, a customer, and an initial message.
* Get Conversation: Fetches a single conversation by ID. Use embed='threads' to include its messages.
* List Conversations: Lists/searches conversations. Filter by mailbox, status, tag, assignee, or a free-text query.
* Update Conversation: Updates a single conversation property via a JSON-Patch operation.
* Update Conversation Tags: Sets (overwrites) the full list of tags on a conversation.
* Delete Conversation: Permanently deletes a conversation by ID.
* Create Thread: Adds a thread (reply, note, customer message, chat, or phone) to an existing conversation.
* List Threads: Lists all threads (messages) on a conversation.
* Create Customer: Creates a customer. Provide at least one identifying field.
* Get Customer: Fetches a single customer by ID.
* List Customers: Lists/searches customers. Filter by email, name, or a free-text query.
* Update Customer: Updates a customer's core fields (overwrite of top-level fields).
* List Customer Properties: Lists the customer property definitions (custom customer fields) configured for the account.
* Get Mailbox: Fetches a single mailbox by ID.
* List Mailboxes: Lists all mailboxes the authenticated app can access.
* List Mailbox Fields: Lists the custom fields defined for a mailbox.
* List Mailbox Folders: Lists the folders in a mailbox.
* Get User: Fetches a single user (team member) by ID.
* List Users: Lists users (team members). Optionally filter by email or mailbox.
* List Tags: Lists all tags defined in the account.

## Documentation & resources

* Official documentation: `https://developer.helpscout.com/`
* Phinite documentation: [Help Scout](https://docs.phinite.ai/docs/integrations-hub/helpscout)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
