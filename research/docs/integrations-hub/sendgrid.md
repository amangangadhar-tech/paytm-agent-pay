> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# SendGrid

> Send emails, manage contacts and lists, create single sends, retrieve templates, handle suppressions, and view stats via the SendGrid API.

## Overview

Phinite's **SendGrid** predefined tool lets workspace agent graphs call SendGrid APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Send emails, manage contacts and lists, create single sends, retrieve templates, handle suppressions, and view stats via the SendGrid API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* API Key `api_key` (required)

## Setup steps

1. Sign up at sendgrid.com → Settings → API Keys → Create API Key with appropriate permissions → copy key (shown once).
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **SendGrid**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **SendGridTools** (or search for SendGrid)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 20 subtools for SendGrid:

* Send Email: Send an email via SendGrid. Supports plain text, HTML, templates, categories, and scheduling.
* Upsert Contacts: Add or update contacts in SendGrid Marketing Campaigns. Each contact needs at least an email. Can optionally assign to lists.
* Get Contact: Retrieve a contact's full details by their SendGrid contact ID.
* Search Contacts: Search contacts using SGQL query language. Returns up to 50 contacts. Email addresses must be lowercase in the query.
* Get Contact Count: Get the total number of contacts stored in your SendGrid account.
* Delete Contacts: Delete one or more contacts by IDs, or all contacts.
* Create List: Create a new SendGrid contact list.
* Get All Lists: Retrieve all SendGrid contact lists.
* Update List: Update the name of a SendGrid contact list.
* Delete List: Delete a SendGrid contact list. Optionally delete associated contacts.
* Create Single Send: Create a new Single Send (draft campaign). Must be scheduled separately to send.
* Get All Single Sends: Retrieve all Single Sends with condensed details.
* Schedule Single Send: Schedule a Single Send to be sent immediately (use now) or at a future ISO 8601 date-time.
* Get Templates: Retrieve all transactional templates (paged).
* Get Template: Retrieve a single transactional template by its ID.
* Get Global Suppressions: Retrieve globally suppressed email addresses (unsubscribed from all).
* Add Global Suppression: Add email addresses to the global suppression group (unsubscribe from all).
* Get Verified Senders: Retrieve all verified sender identities for the account.
* Get Email Stats: Retrieve global email statistics for a date range.
* Validate Email: Validate an email address in real time. Returns verdict, score, and details. Requires Email Validation API key (Pro/Premier).

## Documentation & resources

* Official documentation: `https://docs.sendgrid.com/`

* Phinite documentation: [Sendgrid](https://docs.phinite.ai/docs/integrations-hub/sendgrid)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
