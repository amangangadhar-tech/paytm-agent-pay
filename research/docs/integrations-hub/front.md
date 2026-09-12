> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Front

> Manage Front shared-inbox communication — conversations, messages and replies, contacts, inboxes, channels, teammates, tags, comments, and drafts — via the Front Core API.

## Overview

Phinite's **Front** predefined tool lets workspace agent graphs call Front APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Front shared-inbox communication — conversations, messages and replies, contacts, inboxes, channels, teammates, tags, comments, and drafts — via the Front Core API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* API Token `api_token` (required)

## Setup steps

1. Create a Front account at front.com and sign in.
2. Go to **Settings → Company → Developers → API Tokens**.
3. Create an API token with the scopes your workflow needs and copy the token.
4. Verify with a `GET /me` request, then save `api_token`.
5. Log into your Phinite workspace at app.phinite.ai
6. Navigate to **Integrations** → **Predefined tools**
7. Select **Front**
8. Click **+ Add Configuration**
9. Enter the credential fields listed above
10. Select agent graphs that should use this connection
11. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **FrontTool** (or search for Front)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 30 subtools for Front:

* List Conversations: Lists conversations. Optionally filter with a structured query and paginate.
* Get Conversation: Retrieves a single conversation by ID (e.g. 'cnv\_123').
* Update Conversation: Updates a conversation: assign, change status, move inbox, or replace its tag set.
* List Conversation Messages: Lists messages within a conversation.
* Assign Conversation: Assigns a conversation to a teammate (or unassigns when assignee\_id is null).
* Get Message: Retrieves a single message by ID (e.g. 'msg\_123').
* Send Message: Sends a new outbound message through a channel, starting a new conversation.
* Reply To Conversation: Sends a reply within an existing conversation (archives after sending by default).
* List Contacts: Lists contacts with optional filtering and pagination.
* Get Contact: Retrieves a contact by ID ('crd\_123') or alias ('alt:email:[a@b.com](mailto:a@b.com)').
* Create Contact: Creates a contact. Provide one or more handles ({handle, source}).
* Update Contact: Updates a contact's details (PATCH).
* Delete Contact: Deletes a contact by ID.
* Add Contact Handle: Adds a handle (e.g. an email or phone) to a contact.
* Delete Contact Handle: Removes a handle from a contact.
* List Inboxes: Lists all inboxes.
* Get Inbox: Retrieves a single inbox by ID (e.g. 'inb\_123').
* List Inbox Conversations: Lists conversations in a specific inbox.
* List Channels: Lists all channels.
* Get Channel: Retrieves a single channel by ID (e.g. 'cha\_123').
* List Teammates: Lists all teammates in the company.
* Get Teammate: Retrieves a teammate by ID ('tea\_123') or email alias.
* Update Teammate: Updates a teammate's profile or availability.
* List Tags: Lists all tags.
* Create Tag: Creates a tag.
* Apply Tag: Adds (additively) one or more tags to a conversation.
* Remove Tag: Removes one or more tags from a conversation.
* List Conversation Comments: Lists the internal comments on a conversation (newest first).
* Add Comment: Adds an internal comment (markdown) to a conversation, visible only to teammates.
* Create Draft Reply: Creates a draft reply on a conversation (not sent). channel\_id is required.

## Documentation & resources

* Official documentation: `https://dev.frontapp.com/reference/introduction`
* Phinite documentation: [Front](https://docs.phinite.ai/docs/integrations-hub/front)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
