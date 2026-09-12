> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Gmail

> Read, search, draft, send, and reply to emails...

## Overview

Phinite's **Gmail** predefined tool lets workspace agent graphs call Gmail APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Read, search, draft, send, and reply to emails...

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Email `email` (required)
* App Password `app_password` (required)

## Setup steps

1. Enable 2-Step Verification on the Google account and create an **App Password** under Google Account security settings.
2. Use the Gmail address and app password in Phinite.
3. Log into your Phinite workspace at app.phinite.ai
4. Navigate to **Integrations** → **Predefined tools**
5. Select **Gmail**
6. Click **+ Add Configuration**
7. Enter the credential fields listed above
8. Select agent graphs that should use this connection
9. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **GmailTool** (or search for Gmail)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 11 subtools for Gmail:

* Get Latest Emails: Get the latest X emails from the user's inbox
* Get Emails From User: Get X number of emails from a specific user (name or email)
* Get Unread Emails: Get the X number of latest unread emails from the user's inbox
* Get Starred Emails: Get X number of starred emails from the user's inbox
* Get Emails By Context: Get X number of emails matching a specific context or search term
* Get Emails By Date: Get emails based on date range. start\_date is an integer representing
* Get Emails By Thread: Retrieve all emails from a specific thread
* Search Emails: Get X number of emails based on a given natural text query. Searches
* Create Draft Email: Create and save a draft email. to and cc are comma separated string
* Send Email: Send an email immediately. to and cc are comma separated string of
* Send Email Reply: Respond to an existing email thread

## Documentation & resources

* Official documentation: `https://developers.google.com/gmail/api`
* Phinite documentation: [Gmail](https://docs.phinite.ai/docs/integrations-hub/gmail)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
