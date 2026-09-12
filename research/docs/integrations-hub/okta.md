> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Okta

> Manage Okta users, groups, applications, user lifecycle, and system log events via the Okta Management API.

## Overview

Phinite's **Okta** predefined tool lets workspace agent graphs call Okta APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Okta users, groups, applications, user lifecycle, and system log events via the Okta Management API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Okta Domain `domain` (required)
* SSWS API Token `api_token` (optional)
* OAuth Bearer Token `access_token` (optional)
* Token Type `token_type` (optional)

## Setup steps

1. In the Okta Admin Console go to **Security → API → Tokens** and create an SSWS API token.
2. Copy your Okta domain (e.g. `dev-123456.okta.com`).
3. Log into your Phinite workspace at app.phinite.ai
4. Navigate to **Integrations** → **Predefined tools**
5. Select **Okta**
6. Click **+ Add Configuration**
7. Enter the credential fields listed above
8. Select agent graphs that should use this connection
9. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **OktaTool** (or search for Okta)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 28 subtools for Okta:

* Create User: Creates a new Okta user. By default the user is activated immediately and gains access to assigned applications.
* Get User: Returns a user by ID, login (email), or short name. Includes profile, credentials metadata, and status.
* List Users: Lists users in the organization. Supports filtering and search.
* Update User: Updates a user's profile fields. Only the fields you provide are changed (partial update).
* Delete User: Permanently deletes a deactivated user. The user must be deactivated first.
* Activate User: Activates a user. Sends an activation email by default. Returns an activation token if send\_email=false.
* Deactivate User: Deactivates a user, blocking all access. Required before delete\_user.
* Suspend User: Suspends an ACTIVE user. Suspended users cannot sign in. The account is preserved and can be unsuspended.
* Unsuspend User: Restores a SUSPENDED user to ACTIVE status.
* Unlock User: Unlocks a LOCKED\_OUT user, restoring their ability to sign in.
* Reset User Password: Generates a one-time password reset link for the user. Optionally sends it by email.
* Expire User Password: Expires a user's password, requiring them to set a new one on next sign-in.
* List User Groups: Returns all groups the user is a member of.
* List User Apps: Returns all applications assigned to the user.
* List Groups: Lists groups in the organization.
* Get Group: Returns a group by ID.
* Create Group: Creates a new OKTA\_GROUP (manually managed group).
* Update Group: Updates a group's name or description.
* Delete Group: Deletes an OKTA\_GROUP. Cannot delete APP\_GROUP or BUILT\_IN groups.
* List Group Members: Returns all users who are members of the group.
* Add User To Group: Adds a user to an OKTA\_GROUP.
* Remove User From Group: Removes a user from an OKTA\_GROUP.
* List Apps: Lists applications in the organization.
* Get App: Returns an application by ID including its settings, features, and sign-on configuration.
* List App Users: Returns all users assigned to an application.
* Assign User To App: Assigns a user to an application. Optionally sets app-specific profile and credentials.
* Remove User From App: Removes (unassigns) a user from an application.
* List Events: Queries the Okta System Log for audit events (sign-ins, user changes, policy triggers, etc.).

## Documentation & resources

* Official documentation: `https://developer.okta.com/docs/reference/`
* Phinite documentation: [Okta](https://docs.phinite.ai/docs/integrations-hub/okta)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
