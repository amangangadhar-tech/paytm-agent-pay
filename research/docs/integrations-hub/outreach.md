> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Outreach

> Manage Outreach.io sales-engagement resources — prospects, accounts, sequences, sequence enrollments, mailboxes, tasks, calls, and users — via the Outreach REST API.

## Overview

Phinite's **Outreach** predefined tool lets workspace agent graphs call Outreach APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Outreach.io sales-engagement resources — prospects, accounts, sequences, sequence enrollments, mailboxes, tasks, calls, and users — via the Outreach REST API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Access Token `access_token` (required)

## Setup steps

1. In Outreach go to **Settings → API** and create OAuth or S2S credentials per your integration type.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Outreach**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **OutreachTool** (or search for Outreach)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 28 subtools for Outreach:

* Create Prospect: Creates a prospect (a contact at an account). Provide at least an email or a name.
* Get Prospect: Fetches a single prospect by ID.
* List Prospects: Lists/searches prospects. Filter with the filters map.
* Update Prospect: Updates a prospect's attributes (partial update via PATCH).
* Delete Prospect: Permanently deletes a prospect by ID.
* Create Account: Creates an account (a company/organization record).
* Get Account: Fetches a single account by ID.
* List Accounts: Lists/searches accounts. Filter with the filters map.
* Update Account: Updates an account's attributes (partial update via PATCH).
* Delete Account: Permanently deletes an account by ID.
* Get Sequence: Fetches a single sequence by ID.
* List Sequences: Lists sequences. Filter with the filters map.
* Add Prospect To Sequence: Enrolls a prospect into a sequence by creating a sequenceState.
* Get Sequence State: Fetches a single sequence state (enrollment) by ID.
* List Sequence States: Lists sequence states (enrollments). Filter with the filters map.
* Delete Sequence State: Removes a prospect from a sequence by deleting the sequenceState by ID.
* Get Mailbox: Fetches a single mailbox by ID.
* List Mailboxes: Lists mailboxes (sending email accounts).
* Create Task: Creates a task. Provide the action (e.g. call, email, general).
* Get Task: Fetches a single task by ID.
* List Tasks: Lists/searches tasks. Filter with the filters map.
* Update Task: Updates a task's attributes (partial update via PATCH).
* Delete Task: Permanently deletes a task by ID.
* Create Call: Logs a call against a prospect.
* Get Call: Fetches a single call by ID.
* List Calls: Lists/searches calls. Filter with the filters map.
* Get User: Fetches a single Outreach user (team member) by ID.
* List Users: Lists Outreach users (team members). Filter with the filters map.

## Documentation & resources

* Official documentation: `https://developers.outreach.io/api/reference/overview/`
* Phinite documentation: [Outreach](https://docs.phinite.ai/docs/integrations-hub/outreach)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
