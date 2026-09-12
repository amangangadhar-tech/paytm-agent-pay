> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Access Controls & Security

> How workspace RBAC and sign-in protect your organization's Agent Graph work.

## Role-based access

Permissions apply **per workspace** through [user roles](/user-management/user-roles). This is workspace **RBAC**—not [Agent Card](/agent-registry/overview) registry identity or external agent authentication.

<Note>
  Granting someone **Developer** on a workspace lets them edit Agent Graphs and tools. It does **not** create or expose an Agent Card on the public registry.
</Note>

## Sign-in and sessions

* You stay signed in while your session is valid; when it expires, sign in again.
* If you can’t reach a page you expect, your administrator may need to adjust your access.

## Best practices

* Grant people the **least access** they need for their job.
* Separate **development**, **test**, and **production** access when your organization uses multiple environments.
* Review **who has access** after role changes or when someone leaves the team.

## Related

* [User Management](/user-management/user-management)
* [Workspace Users page](/user-management/workspace-ui)
* [Workspace Overview](/workspaces/workspace-overview)
* [Agent Registry overview](/agent-registry/overview) — sidebar access uses `workspace.sidebar.agent_registry`
