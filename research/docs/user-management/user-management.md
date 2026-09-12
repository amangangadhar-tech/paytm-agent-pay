> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# User Management

> Invite users, assign workspace roles, and manage access from the workspace Users page.

## Overview

Workspace **Users** is where **Super Admin** and **Admin** (in most setups) invite teammates, set **workspace roles** (Admin, QA, Developer), update access, and resend invitations when accounts are still pending. Other roles usually don’t see **Users** unless your organization customizes permissions.

<Note>
  This section covers **workspace membership and RBAC**. [Agent Card](/agent-registry/overview) identity and A2A exposure are configured separately under Agent Registry and Graph Studio **Expose as A2A**.
</Note>

<CardGroup cols={2}>
  <Card title="Workspace Users page" icon="monitor" href="/user-management/workspace-ui">Where to find Users, what you see, invites, and actions</Card>
  <Card title="Inviting & managing users" icon="user-plus" href="/user-management/inviting-users">Invites and ongoing membership</Card>
  <Card title="Access controls" icon="shield" href="/user-management/access-controls">Security practices for workspaces</Card>
  <Card title="User roles" icon="id-badge" href="/user-management/user-roles">What each role can do in Phinite</Card>
</CardGroup>

## Quick facts

| Topic                  | Summary                                                                   |
| ---------------------- | ------------------------------------------------------------------------- |
| **Where**              | Sidebar **Users** inside your workspace                                   |
| **List & search**      | Sortable table; search stays scoped to the **current workspace**          |
| **Invite**             | **+ New User** opens **Add User to Workspace**                            |
| **Your name**          | On your row, **Edit user details** updates your display name when allowed |
| **Pending activation** | **Resend Email** on their row when available                              |

<Note>
  Some member rows (for example certain administrators) may not show the usual actions. See [Workspace Users page](/user-management/workspace-ui).
</Note>

## Roles & permissions

Roles you choose on the Users page tie into broader capabilities in [User Roles & Permissions](/user-management/user-roles).

## Auditing access

* Review members and roles periodically.
* Remove workspace access for people who no longer need it.
* Use [Billing Dashboard](/observability/billing) if your team tracks usage there.
