> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Salesloft

> Manage Salesloft sales-engagement data — people, accounts, cadences and memberships, users, notes, tasks, calls, email templates, email activity, successes, and stages — via the Salesloft v2 API.

## Overview

Phinite's **Salesloft** predefined tool lets workspace agent graphs call Salesloft APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Salesloft sales-engagement data — people, accounts, cadences and memberships, users, notes, tasks, calls, email templates, email activity, successes, and stages — via the Salesloft v2 API.

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

1. In Salesloft go to **Your Profile → API** or OAuth settings and obtain an API key or OAuth token.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Salesloft**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **SalesloftTool** (or search for Salesloft)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 30 subtools for Salesloft:

* List People: Lists people (contacts) with optional filters and pagination.
* Get Person: Retrieves a single person by ID.
* Create Person: Creates a person. Must include a unique identifier (email\_address, or phone/last\_name).
* Update Person: Updates a person by ID. Only provided fields are changed.
* Delete Person: Deletes a person by ID.
* List Accounts: Lists accounts (companies) with optional filters and pagination.
* Get Account: Retrieves a single account by ID.
* Create Account: Creates an account. name is required.
* Update Account: Updates an account by ID. Only provided fields are changed.
* Delete Account: Deletes an account by ID.
* List Cadences: Lists cadences with optional pagination.
* Get Cadence: Retrieves a single cadence by ID.
* Add To Cadence: Adds a person to a cadence (creates a cadence membership).
* Remove From Cadence: Removes a person from a cadence by deleting the cadence membership.
* Get Current User: Returns the authenticated user (the owner of the API token).
* List Users: Lists users in the team, with optional search and pagination.
* List Notes: Lists notes, optionally filtered by the record they are associated with.
* Create Note: Creates a note associated with a person or account.
* Update Note: Updates a note's content by ID.
* Delete Note: Deletes a note by ID.
* List Tasks: Lists tasks with optional filters and pagination.
* Create Task: Creates a task for a person.
* Update Task: Updates a task by ID. Only provided fields are changed.
* List Calls: Lists logged calls with optional filters and pagination.
* Log Call: Logs a call activity for a person.
* List Email Templates: Lists email templates with optional search and pagination.
* List Emails: Lists email activities with tracking counts, filterable by person.
* List Successes: Lists successes (people marked successful on a cadence).
* List Person Stages: Lists person stages (reference data for person\_stage\_id).
* List Account Stages: Lists account stages (reference data for the account company\_stage\_id).

## Documentation & resources

* Official documentation: `https://developers.salesloft.com/api.html`
* Phinite documentation: [Salesloft](https://docs.phinite.ai/docs/integrations-hub/salesloft)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
