> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Apollo.io

> Enrich people and organizations, search prospects, and manage accounts, contacts, and deals via the Apollo.io API.

## Overview

Phinite's **Apollo.io** predefined tool lets workspace agent graphs call Apollo.io APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Enrich people and organizations, search prospects, and manage accounts, contacts, and deals via the Apollo.io API.

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

1. Sign up at apollo.io → Settings → Integrations → API → Create API Key and copy it.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Apollo.io**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **ApolloIOTools** (or search for Apollo.io)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 20 subtools for Apollo.io:

* Enrich Person: Enrich a person's profile using Apollo's database. Provide identifying info like name, email, or LinkedIn URL to get enriched data including title, company, and contact info.
* Enrich Organization: Enrich data for a company using its domain name. Returns industry, revenue, employee count, funding details, and contact info.
* Search People: Search for people in Apollo's database using filters like job title, location, company, and seniority. Returns up to 100 results per page.
* Search Organizations: Search for organizations in Apollo's database using filters like employee count, location, revenue, and technologies.
* Create Account: Create a new account (company) in your team's Apollo CRM.
* Update Account: Update an existing account in your team's Apollo CRM.
* Search Accounts: Search for accounts in your team's Apollo CRM. Supports filtering by stage and sorting.
* View Account: Retrieve details of an Apollo CRM account by its ID.
* Create Contact: Create a new contact in your team's Apollo CRM.
* Update Contact: Update an existing contact in your team's Apollo CRM.
* Search Contacts: Search for contacts in your team's Apollo CRM. Supports stage filtering and sorting.
* View Contact: Retrieve details of a contact by its Apollo ID.
* Create Deal: Create a new deal (opportunity) in your team's Apollo CRM.
* Update Deal: Update an existing deal in your team's Apollo CRM.
* List Deals: List all deals in your team's Apollo CRM.
* View Deal: Retrieve details of a deal by its Apollo ID.
* List Deal Stages: List all deal stages configured in your Apollo account.
* List Account Stages: List all account stages configured in your Apollo account.
* List Contact Stages: List all contact stages configured in your Apollo account.
* List Users: Get a list of all users in your Apollo team.

## Documentation & resources

* Official documentation: `https://docs.apollo.io/`

* Phinite documentation: [Apollo.io](https://docs.phinite.ai/docs/integrations-hub/apollo-io)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
