> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Jira

> Create, search, update, and transition Jira issues, add comments, and

## Overview

Phinite's **Jira** predefined tool lets workspace agent graphs call Jira APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Create, search, update, and transition Jira issues, add comments, and

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* See integration configuration fields in Phinite

## Setup steps

1. Create an Atlassian API token at id.atlassian.com/manage-profile/security/api-tokens.
2. Use your Atlassian email, API token, and Jira site URL (e.g. `https://your-domain.atlassian.net`).
3. Log into your Phinite workspace at app.phinite.ai
4. Navigate to **Integrations** → **Predefined tools**
5. Select **Jira**
6. Click **+ Add Configuration**
7. Enter the credential fields listed above
8. Select agent graphs that should use this connection
9. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **JiraTools** (or search for Jira)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 7 subtools for Jira:

* Get Issue: Retrieves issue details from Jira
* Create Issue: Creates a new issue in Jira
* Search Issues: Searches for issues using a JQL query
* Add Comment: Adds a comment to an issue
* Update Issue: Updates an existing issue
* Transition Issue: Transitions an issue to a different status
* Get Projects: Gets all accessible projects

## Documentation & resources

* Official documentation: `https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/`
* Phinite documentation: [Jira](https://docs.phinite.ai/docs/integrations-hub/jira)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
