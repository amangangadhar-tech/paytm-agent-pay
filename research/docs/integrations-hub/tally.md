> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Tally

> Manage Tally forms, submissions, webhooks, workspaces, and organization members via the Tally REST API.

## Overview

Phinite's **Tally** predefined tool lets workspace agent graphs call Tally APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Tally forms, submissions, webhooks, workspaces, and organization members via the Tally REST API.

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

1. In Tally go to **Settings → Integrations → API** and create an API key.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Tally**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **TallyTool** (or search for Tally)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 26 subtools for Tally:

* List Forms: Returns a paginated list of all forms you have access to.
* Get Form: Returns a single form with all its blocks (questions), settings, and metadata.
* Create Form: Creates a new form, optionally based on a template or within a specific workspace.
* Update Form: Updates a form's settings, title, or status. Only the fields you provide are changed.
* Delete Form: Deletes a form by moving it to trash. Submissions are preserved.
* Get Form Questions: Returns all questions (blocks) in a form with their IDs, types, labels, and options.
* List Submissions: Returns a paginated list of submissions for a form with all response values.
* Get Submission: Returns a specific submission with all its response values.
* Delete Submission: Permanently deletes a specific form submission.
* List Webhooks: Returns a paginated list of all webhooks across forms you have access to.
* Create Webhook: Creates a webhook for a form to receive real-time event notifications.
* Update Webhook: Updates a webhook. Tally requires the full object (form\_id, url, events, enabled).
* Delete Webhook: Deletes a webhook.
* List Webhook Events: Returns a paginated list of delivery events for a webhook.
* Retry Webhook Event: Retries sending a previously failed webhook event.
* List Workspaces: Returns a paginated list of all workspaces you have access to.
* Get Workspace: Returns a single workspace by ID including its members.
* Create Workspace: Creates a new workspace and assigns the authenticated user as a member.
* Update Workspace: Updates a workspace's name or other information.
* Delete Workspace: Deletes a workspace and all its associated forms. Irreversible.
* List Org Users: Returns a list of all users in your organization.
* Remove Org User: Removes a user from your organization.
* List Invites: Returns a list of all pending organization invites.
* Create Invite: Invites one or more users (by email) to join specific workspaces within your organization.
* Delete Invite: Cancels a pending organization invite.
* Get Current User: Returns information about the currently authenticated user (name, email, plan, organization).

## Documentation & resources

* Official documentation: `https://tally.so/help/api-integration`
* Phinite documentation: [Tally](https://docs.phinite.ai/docs/integrations-hub/tally)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
