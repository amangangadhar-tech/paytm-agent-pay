> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# ActiveCampaign

> Manage an ActiveCampaign account — contacts, tags, lists, deals, accounts, plus contact-tag/list associations and custom fields via the ActiveCampaign v3 API.

## Overview

Phinite's **ActiveCampaign** predefined tool lets workspace agent graphs call ActiveCampaign APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage an ActiveCampaign account — contacts, tags, lists, deals, accounts, plus contact-tag/list associations and custom fields via the ActiveCampaign v3 API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* API Token `api_token` (required)
* Account Name `account_name` (required)
* Base URL `base_url` (optional)

## Setup steps

1. In ActiveCampaign go to **Settings → Developer** and copy your API URL and API key.
2. Note your account name/subdomain used in the API base URL.
3. Log into your Phinite workspace at app.phinite.ai
4. Navigate to **Integrations** → **Predefined tools**
5. Select **ActiveCampaign**
6. Click **+ Add Configuration**
7. Enter the credential fields listed above
8. Select agent graphs that should use this connection
9. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **ActiveCampaignTool** (or search for ActiveCampaign)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 29 subtools for ActiveCampaign:

* Create Contact: Create a contact. Requires email. Use additional\_fields for firstName, lastName, phone, fieldValues, etc.
* Get Contact: Fetch a single contact by id.
* List Contacts: List/search contacts. Use params for filters (email, search, listid, limit, offset).
* Update Contact: Update a contact. Provide fields to change via update\_fields.
* Delete Contact: Delete a contact by id. Irreversible.
* Create Tag: Create a tag. Requires tag name. tag\_type is 'contact' or 'template' (default contact).
* Get Tag: Fetch a single tag by id.
* List Tags: List/search tags. Use params for filters (search, limit, offset).
* Update Tag: Update a tag. Provide fields to change via update\_fields.
* Delete Tag: Delete a tag by id. Irreversible.
* Create List: Create a list. Requires name and stringid; sender\_url and sender\_reminder are required by ActiveCampaign.
* Get List: Fetch a single list by id.
* List Lists: List all lists. Use params for filters (limit, offset).
* Delete List: Delete a list by id. Irreversible.
* Create Deal: Create a deal. Besides title, ActiveCampaign requires (in additional\_fields) a pipeline group id, stage id, owner, and contact or account.
* Get Deal: Fetch a single deal by id.
* List Deals: List/search deals. Use params for filters (search, stage, status, limit, offset).
* Update Deal: Update a deal. Provide fields to change via update\_fields.
* Delete Deal: Delete a deal by id. Irreversible.
* Create Account: Create an account (company). Requires name.
* Get Account: Fetch a single account by id.
* List Accounts: List/search accounts. Use params for filters (search, limit, offset).
* Update Account: Update an account. Provide fields to change via update\_fields.
* Delete Account: Delete an account by id. Irreversible.
* Add Contact To List: Subscribe (or unsubscribe) a contact to a list. status 1=subscribe, 2=unsubscribe.
* Add Tag To Contact: Add a tag to a contact. Returns the contactTag association id.
* Remove Tag From Contact: Remove a tag from a contact using the contactTag association id.
* Create Deal Note: Add a note to a deal. Requires deal\_id and note text.
* List Contact Custom Fields: List all custom field definitions for contacts.

## Documentation & resources

* Official documentation: `https://developers.activecampaign.com/reference/overview`
* Phinite documentation: [ActiveCampaign](https://docs.phinite.ai/docs/integrations-hub/activecampaign)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
