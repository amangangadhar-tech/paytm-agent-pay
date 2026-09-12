> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Workspace Users page

> Open the Users screen, see who can do what, and use invites, roles, and member actions.

The **Users** page manages **workspace RBAC**—who can access this workspace and in which role. It does not configure [Agent Card](/agent-registry/overview) exposure.

## What it is

The **Users** page is where you manage **who can access this workspace**: see members, invite people or add existing accounts, choose **workspace roles** (Admin, QA, Developer), edit display names where allowed, remove someone’s access to this workspace, and resend invitations when an account is not active yet.

In-app help (next to the page title):

> Manage workspace users, their access permissions, and roles. Invite new users, update access levels, and control who can view or modify different parts of your workspace. Use the search to find specific users, and click on user actions to edit permissions or remove access.

## How to open it

1. Open your **organization** (your site URL reflects your org).
2. Open the **workspace** you want.
3. In the **sidebar**, choose **Users**.

If **Users** does not appear, your workspace role may not include user management—most often only **Super Admin** and **Admin** see **Users** in the sidebar. Ask your administrator if you need access.

## Who can use what

Your organization’s settings decide who sees **Users** and what they can do there. **By default:**

* **Super Admin** and **Admin** — Can open **Users**, view the list, invite or add members, edit access, resend invites, and remove people from the workspace (when the org grants those actions).
* **Developer** and **QA** — Usually **do not** see **Users** and cannot manage workspace members unless an administrator changes access.

Once you’re allowed in, the UI behaves like this:

| If you can…                       | You’ll get…                                                                                                                                 |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| View the member list              | The **Users** page with a searchable table.                                                                                                 |
| Invite or add people              | **+ New User** and the **Add User to Workspace** flow.                                                                                      |
| Change access or names            | **Edit Access**, **Edit user details** on your row, **Resend Email** for inactive accounts, and confirmation dialogs when you save changes. |
| Remove someone from the workspace | **Remove User** in the row menu (with confirmation).                                                                                        |

Some **super administrator** accounts may bypass fine-grained checks in the product.

You may see a short loading state while the app checks whether you’re allowed to open this page.

For how roles compare in plain language, see [User Roles & Permissions](/user-management/user-roles).

## What you see

### Header

* **Title:** “Users” with a **count** of members.
* **Search:** **Search user** — finds people in the **current workspace**.
* **+ New User:** Appears when you’re allowed to invite or add members.

### Table

Members are listed in a sortable table. Scrolling down loads more rows when needed.

Typical columns:

* **Name** — avatar and display name (sortable).
* **Email address** (sortable).
* **Workspace role** — how this person is set up **for this workspace** (often Admin, QA, or Developer).
* **Actions** — depends on the person and what you’re allowed to do (see below).

Your **own** row may offer different actions than other rows (for example editing **your** name).

### Sorting

Use the column headers to sort by name or email.

## Roles you can assign

When you **add** someone or **edit workspace access**, you usually pick:

* **Admin**
* **QA**
* **Developer**

The list may still show **other labels** for certain accounts (for example broad administrators). Those rows sometimes **don’t show** the usual action menu. For how roles map to capabilities across Phinite, see [User Roles & Permissions](/user-management/user-roles).

## Actions on each row

### Your own row

If allowed, **Edit user details** (pencil) opens a panel to change **your full name**.

### Other members — menu (**⋮**)

Options depend on status and your access:

* **Resend Email** — When the account **hasn’t finished activating**, sends the invitation again.
* **Edit Access** — Opens **Edit Workspace Access**. After you confirm **Update Access**, their **workspace role** for this workspace changes.
* **Remove User** — Removes their access **to this workspace** after you confirm.

Some **administrator-type** rows may not show a menu.

## Add User to Workspace (**+ New User**)

The drawer is titled **Add User to Workspace**.

1. **Email address** — required; you can’t use **your own** email to invite yourself.
2. **Full name** — usually required for someone **new**.
3. **User role** — Admin, QA, or Developer.

You may see **User will be sent an invite email** when an email goes out.

The button depends on the situation:

| Situation                                                       | Button          | What happens                                                                               |
| --------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------ |
| New person (new email)                                          | **Add User**    | Phinite sends an invitation to join and activate.                                          |
| Already in your **organization**, not yet on **this workspace** | **Update User** | Adds them to this workspace.                                                               |
| Already uses Phinite with another organization                  | **Add User**    | Follows your organization’s rules for linking or adding them (contact an admin if unsure). |

You can’t add yourself. If they’re **already on this workspace**, you’ll see **User already exists in the workspace.**

## Removing access vs deleting an account

**Remove User** removes access **to this workspace**. It doesn’t always delete their Phinite account—they might still belong to other workspaces.

## Messages you might see

* **You don't have permission to view users.** — You aren’t allowed to open this page.
* **No Users Found** — No matches for your search (or an empty workspace list).
* **User workspace access has been updated successfully.** — Access change saved.

***

If invites don’t arrive or roles look wrong, contact your **organization administrator** or **Phinite support** with your workspace name and the affected email address.
