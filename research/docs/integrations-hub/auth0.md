> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Auth0

> Manage an Auth0 tenant via the Management API v2 — users, roles, user blocks, applications, connections, organizations, logs, and verification tickets.

## Overview

Phinite's **Auth0** predefined tool lets workspace agent graphs call Auth0 APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage an Auth0 tenant via the Management API v2 — users, roles, user blocks, applications, connections, organizations, logs, and verification tickets.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Tenant Domain `domain` (required)
* Management API Access Token `access_token` (required)

## Setup steps

1. In the Auth0 Dashboard open your tenant and go to **Applications → APIs → Auth0 Management API**.
2. Authorize a Machine-to-Machine application and copy a Management API access token.
3. Save your tenant domain (e.g. `your-tenant.auth0.com`).
4. Log into your Phinite workspace at app.phinite.ai
5. Navigate to **Integrations** → **Predefined tools**
6. Select **Auth0**
7. Click **+ Add Configuration**
8. Enter the credential fields listed above
9. Select agent graphs that should use this connection
10. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **Auth0Tool** (or search for Auth0)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 30 subtools for Auth0:

* List Users: Lists/searches users. Provide a Lucene query (sent to Auth0 as the q param with search\_engine v3).
* Get User: Retrieves a single user by user\_id.
* Create User: Creates a user. connection is required (e.g. Username-Password-Authentication).
* Update User: Updates a user (PATCH). When changing email/password, include connection in fields.
* Delete User: Permanently deletes a user by user\_id.
* Search Users By Email: Finds users by exact email address. Auth0 stores emails lowercased.
* Get User Roles: Lists the roles assigned to a user.
* Assign Roles To User: Assigns one or more roles to a user.
* Remove Roles From User: Removes one or more roles from a user.
* Get User Logs: Retrieves log events for a specific user.
* Get User Blocks: Gets the brute-force protection blocks for a user by user\_id.
* Unblock User: Removes all brute-force protection blocks for a user by user\_id.
* List Roles: Lists roles, optionally filtered by name.
* Get Role: Retrieves a single role by ID.
* Create Role: Creates a role.
* Update Role: Updates a role's name and/or description (PATCH).
* Delete Role: Deletes a role by ID.
* Add Permissions To Role: Adds permissions to a role. Each permission is resource\_server\_identifier plus permission\_name.
* List Clients: Lists applications (clients).
* Get Client: Retrieves a single application (client) by client\_id.
* Create Client: Creates an application (client).
* List Connections: Lists connections, optionally filtered by strategy or name.
* Get Connection: Retrieves a single connection by ID.
* List Organizations: Lists organizations.
* Create Organization: Creates an organization.
* Add Organization Members: Adds users as members of an organization.
* Create Email Verification Ticket: Creates an email-verification ticket (a one-time URL you deliver to the user).
* Create Password Change Ticket: Creates a password-change ticket (a one-time URL). Provide user\_id, or email plus connection\_id.
* List Logs: Lists/searches tenant log events with a Lucene query.
* Get Log: Retrieves a single log event by its log\_id.

## Documentation & resources

* Official documentation: `https://auth0.com/docs/api/management/v2`
* Phinite documentation: [Auth0](https://docs.phinite.ai/docs/integrations-hub/auth0)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
