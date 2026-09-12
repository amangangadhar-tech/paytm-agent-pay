> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# User Roles & Permissions

> Understand workspace RBAC capabilities by role across Phinite.

Workspace roles control what someone can do **in that workspace**. This is **workspace RBAC**—who can edit graphs, publish tools, or manage members—not [Agent Card](/agent-registry/overview) identity used for A2A exposure.

<Note>
  **Agent Card** describes how external agents discover your graph on the registry. **Users & roles** here govern Phinite workspace access only. See [Agent Registry overview](/agent-registry/overview) for card permissions.
</Note>

The **Summary** is the fast view; the sections below spell out the same rules in more detail. Defaults can differ if your organization changes access.

**Roles:** **Super Admin**, **Admin**, **Developer**, and **QA** are assigned per workspace. **Viewer** is described at the end—it is often used for read-only stakeholders.

**Legend:** **Yes** means that role has the capability in the default setup; **—** means it does not.

## Summary

| Capability                                                                              | Super Admin | Admin | Developer | QA  |
| --------------------------------------------------------------------------------------- | ----------- | ----- | --------- | --- |
| Open **Users** and manage workspace members                                             | Yes         | Yes   | No        | No  |
| Create, rename, or **delete the workspace**                                             | Yes         | No    | No        | No  |
| **Change** subscription or payment methods                                              | Yes         | No    | No        | No  |
| Create Agent Graphs and workspace-level tools, integrations, data sources, and API keys | Yes         | Yes   | Yes       | No  |
| Edit graphs in **Graph Studio**, tools in **Dev Studio**, triggers, environments        | Yes         | Yes   | Yes       | No  |
| **Publish** Agent Graphs and tools                                                      | Yes         | Yes   | Yes       | No  |
| **Run tests** (graphs, triggers, builds, Dev Studio tools)                              | Yes         | Yes   | Yes       | Yes |
| View **reports**, **usage**, and billing information                                    | Yes         | Yes   | Yes       | Yes |

***

## Workspace (create / view / change / delete)

Actions on the **workspace itself** (not Agent Graphs inside it).

| Action           | Super Admin | Admin | Developer | QA  |
| ---------------- | ----------- | ----- | --------- | --- |
| Create workspace | Yes         | —     | —         | —   |
| View workspace   | Yes         | Yes   | Yes       | Yes |
| Update workspace | Yes         | —     | —         | —   |
| Delete workspace | Yes         | —     | —         | —   |

***

## Workspace navigation (sidebar)

Which items appear in the **workspace** left sidebar.

| Section       | Super Admin | Admin | Developer | QA  |
| ------------- | ----------- | ----- | --------- | --- |
| Agent Graphs  | Yes         | Yes   | Yes       | Yes |
| Tools         | Yes         | Yes   | Yes       | Yes |
| Integrations  | Yes         | Yes   | Yes       | Yes |
| MCP servers   | Yes         | Yes   | Yes       | Yes |
| Data sources  | Yes         | Yes   | Yes       | Yes |
| API keys      | Yes         | Yes   | Yes       | Yes |
| Users         | Yes         | Yes   | —         | —   |
| Usage         | Yes         | Yes   | Yes       | Yes |
| Billing       | Yes         | —     | —         | —   |
| Reports       | Yes         | Yes   | Yes       | Yes |
| Support       | Yes         | Yes   | Yes       | Yes |
| Settings      | Yes         | Yes   | Yes       | Yes |
| Documentation | Yes         | Yes   | Yes       | Yes |
| Profile       | Yes         | Yes   | Yes       | Yes |

***

## Workspace — Agent Graphs list

Creating and managing Agent Graphs from workspace home (not inside Graph Studio).

| Action                            | Super Admin | Admin | Developer | QA  |
| --------------------------------- | ----------- | ----- | --------- | --- |
| View Agent Graphs                 | Yes         | Yes   | Yes       | Yes |
| Create Agent Graph                | Yes         | Yes   | Yes       | —   |
| Update Agent Graph                | Yes         | Yes   | —         | —   |
| Delete Agent Graph                | Yes         | Yes   | —         | —   |
| Edit Agent Graph (workspace list) | Yes         | Yes   | —         | —   |
| Open Studio / Assets              | Yes         | Yes   | Yes       | Yes |
| Create new Agent Graph            | Yes         | Yes   | Yes       | —   |

***

## Workspace — Tools

| Action                    | Super Admin | Admin | Developer | QA  |
| ------------------------- | ----------- | ----- | --------- | --- |
| View workspace tools      | Yes         | Yes   | Yes       | Yes |
| Create tool               | Yes         | Yes   | Yes       | —   |
| Update tool               | Yes         | Yes   | —         | —   |
| Delete tool               | Yes         | Yes   | —         | —   |
| Edit tool                 | Yes         | Yes   | —         | —   |
| Archive tool              | Yes         | Yes   | —         | —   |
| Create new workspace tool | Yes         | Yes   | Yes       | —   |

***

## Workspace — Integrations

| Action             | Super Admin | Admin | Developer | QA  |
| ------------------ | ----------- | ----- | --------- | --- |
| View integrations  | Yes         | Yes   | Yes       | Yes |
| Create integration | Yes         | Yes   | Yes       | —   |
| Update integration | Yes         | Yes   | Yes       | —   |
| Delete integration | Yes         | Yes   | Yes       | —   |
| Edit integration   | Yes         | Yes   | Yes       | —   |

***

## Workspace — MCP servers

| Action            | Super Admin | Admin | Developer | QA  |
| ----------------- | ----------- | ----- | --------- | --- |
| View MCP servers  | Yes         | Yes   | Yes       | Yes |
| Create MCP server | Yes         | Yes   | Yes       | —   |
| Update MCP server | Yes         | Yes   | Yes       | —   |
| Delete MCP server | Yes         | Yes   | Yes       | —   |
| Edit MCP server   | Yes         | Yes   | Yes       | —   |

***

## Workspace — Data sources

| Action                | Super Admin | Admin | Developer | QA  |
| --------------------- | ----------- | ----- | --------- | --- |
| View data sources     | Yes         | Yes   | Yes       | Yes |
| Create data source    | Yes         | Yes   | Yes       | —   |
| Update data source    | Yes         | Yes   | Yes       | —   |
| Delete data source    | Yes         | Yes   | Yes       | —   |
| Edit data source      | Yes         | Yes   | Yes       | —   |
| Archive data source   | Yes         | Yes   | Yes       | —   |
| Create new collection | Yes         | Yes   | Yes       | —   |

***

## Workspace — Data source details

| Action                | Super Admin | Admin | Developer | QA  |
| --------------------- | ----------- | ----- | --------- | --- |
| View details          | Yes         | Yes   | Yes       | Yes |
| Create                | Yes         | Yes   | Yes       | —   |
| Update                | Yes         | Yes   | Yes       | —   |
| Delete                | Yes         | Yes   | Yes       | —   |
| Create new collection | Yes         | Yes   | Yes       | —   |
| Edit                  | Yes         | Yes   | Yes       | —   |
| Archive               | Yes         | Yes   | Yes       | —   |

***

## Workspace — API keys

| Action         | Super Admin | Admin | Developer | QA  |
| -------------- | ----------- | ----- | --------- | --- |
| View API keys  | Yes         | Yes   | Yes       | Yes |
| Create API key | Yes         | Yes   | Yes       | —   |
| Update API key | Yes         | Yes   | Yes       | —   |
| Delete API key | Yes         | Yes   | Yes       | —   |
| Edit API key   | Yes         | Yes   | Yes       | —   |
| Copy API key   | Yes         | Yes   | Yes       | —   |
| Create new key | Yes         | Yes   | Yes       | —   |

***

## Workspace — Users (members)

| Action               | Super Admin | Admin | Developer | QA |
| -------------------- | ----------- | ----- | --------- | -- |
| View member list     | Yes         | Yes   | —         | —  |
| Invite or add member | Yes         | Yes   | —         | —  |
| Update member access | Yes         | Yes   | —         | —  |
| Remove member        | Yes         | Yes   | —         | —  |

***

## Billing & payments

### Billing

| Action                | Super Admin | Admin | Developer | QA  |
| --------------------- | ----------- | ----- | --------- | --- |
| View billing          | Yes         | Yes   | Yes       | Yes |
| Create billing record | Yes         | —     | —         | —   |
| Update billing record | Yes         | —     | —         | —   |
| Delete billing record | Yes         | —     | —         | —   |

### Payments

| Action                | Super Admin | Admin | Developer | QA  |
| --------------------- | ----------- | ----- | --------- | --- |
| View payments         | Yes         | Yes   | Yes       | Yes |
| Create payment record | Yes         | —     | —         | —   |
| Update payment record | Yes         | —     | —         | —   |
| Delete payment record | Yes         | —     | —         | —   |

***

## Reports & workspace settings

### Reports

| Action       | Super Admin | Admin | Developer | QA  |
| ------------ | ----------- | ----- | --------- | --- |
| View reports | Yes         | Yes   | Yes       | Yes |

### Workspace settings

| Action                  | Super Admin | Admin | Developer | QA  |
| ----------------------- | ----------- | ----- | --------- | --- |
| Workspace settings page | Yes         | Yes   | Yes       | Yes |
| Save settings           | Yes         | Yes   | Yes       | Yes |

### Profile (workspace scope)

| Action          | Super Admin | Admin | Developer | QA  |
| --------------- | ----------- | ----- | --------- | --- |
| Save profile    | Yes         | Yes   | Yes       | Yes |
| Change password | Yes         | Yes   | Yes       | Yes |

***

## Inside an Agent Graph — navigation

Sidebar sections when you open an Agent Graph in Graph Studio.

| Section       | Super Admin | Admin | Developer | QA  |
| ------------- | ----------- | ----- | --------- | --- |
| Overview      | Yes         | Yes   | Yes       | Yes |
| Graph Studio  | Yes         | Yes   | Yes       | Yes |
| Triggers      | Yes         | Yes   | Yes       | Yes |
| Environment   | Yes         | Yes   | Yes       | —   |
| Builds        | Yes         | Yes   | Yes       | Yes |
| Support       | Yes         | Yes   | Yes       | Yes |
| Settings      | Yes         | Yes   | Yes       | Yes |
| Documentation | Yes         | Yes   | Yes       | Yes |

***

## Graph versions (legacy flows UI)

| Action          | Super Admin | Admin | Developer | QA  |
| --------------- | ----------- | ----- | --------- | --- |
| View flows      | Yes         | Yes   | Yes       | Yes |
| Create flow     | Yes         | Yes   | Yes       | —   |
| Update flow     | Yes         | Yes   | Yes       | —   |
| Delete flow     | Yes         | Yes   | Yes       | —   |
| Create new flow | Yes         | Yes   | Yes       | —   |
| Open flow       | Yes         | Yes   | Yes       | Yes |
| Edit flow       | Yes         | Yes   | Yes       | —   |
| Archive flow    | Yes         | Yes   | Yes       | —   |

***

<Note>
  Legacy **Intents** UI may still appear in older workspaces. New IA uses [Triggers](/triggers-intents/overview) only—intent-specific rows below reflect historical permissions if your org has not migrated.
</Note>

## Intents (legacy)

| Action            | Super Admin | Admin | Developer | QA  |
| ----------------- | ----------- | ----- | --------- | --- |
| View intents      | Yes         | Yes   | Yes       | Yes |
| Create intent     | Yes         | Yes   | Yes       | —   |
| Update intent     | Yes         | Yes   | Yes       | —   |
| Delete intent     | Yes         | Yes   | Yes       | —   |
| Create new intent | Yes         | Yes   | Yes       | —   |
| Test intent       | Yes         | Yes   | Yes       | Yes |
| Open intent       | Yes         | Yes   | Yes       | Yes |
| Edit intent       | Yes         | Yes   | Yes       | —   |
| Archive intent    | Yes         | Yes   | Yes       | —   |

***

## Triggers

| Action                       | Super Admin | Admin | Developer | QA  |
| ---------------------------- | ----------- | ----- | --------- | --- |
| View triggers                | Yes         | Yes   | Yes       | Yes |
| Create trigger               | Yes         | Yes   | Yes       | —   |
| Update trigger               | Yes         | Yes   | Yes       | —   |
| Delete trigger               | Yes         | Yes   | Yes       | —   |
| Create new trigger           | Yes         | Yes   | Yes       | —   |
| Test trigger (from triggers) | Yes         | Yes   | Yes       | Yes |
| Open trigger                 | Yes         | Yes   | Yes       | Yes |
| Edit trigger                 | Yes         | Yes   | Yes       | —   |
| Archive trigger              | Yes         | Yes   | Yes       | —   |

***

## Agent Graph tools (configured tools)

| Action          | Super Admin | Admin | Developer | QA  |
| --------------- | ----------- | ----- | --------- | --- |
| View tools      | Yes         | Yes   | Yes       | Yes |
| Create tool     | Yes         | Yes   | Yes       | —   |
| Update tool     | Yes         | Yes   | Yes       | —   |
| Delete tool     | Yes         | Yes   | Yes       | —   |
| Create new tool | Yes         | Yes   | Yes       | —   |
| Open tool       | Yes         | Yes   | Yes       | Yes |
| Edit tool       | Yes         | Yes   | Yes       | —   |
| Archive tool    | Yes         | Yes   | Yes       | —   |

***

## Environment

| Action                   | Super Admin | Admin | Developer | QA  |
| ------------------------ | ----------- | ----- | --------- | --- |
| View environment         | Yes         | Yes   | Yes       | Yes |
| Create environment       | Yes         | Yes   | Yes       | —   |
| Update environment       | Yes         | Yes   | Yes       | —   |
| Delete environment       | Yes         | Yes   | Yes       | —   |
| Create new environment   | Yes         | Yes   | Yes       | —   |
| View environment details | Yes         | Yes   | Yes       | Yes |
| Edit environment         | Yes         | Yes   | Yes       | —   |
| Copy environment         | Yes         | Yes   | Yes       | —   |

***

## Builds

| Action             | Super Admin | Admin | Developer | QA  |
| ------------------ | ----------- | ----- | --------- | --- |
| View builds        | Yes         | Yes   | Yes       | Yes |
| Create build       | Yes         | Yes   | Yes       | —   |
| Update build       | Yes         | Yes   | Yes       | —   |
| Delete build       | Yes         | Yes   | Yes       | —   |
| Create new build   | Yes         | Yes   | Yes       | —   |
| Assign build       | Yes         | Yes   | Yes       | —   |
| Test build         | Yes         | Yes   | Yes       | Yes |
| View build details | Yes         | Yes   | Yes       | Yes |

***

## Graph Studio — Auto Copilot

| Action            | Super Admin | Admin | Developer | QA  |
| ----------------- | ----------- | ----- | --------- | --- |
| View Auto Copilot | Yes         | Yes   | Yes       | Yes |
| Create            | Yes         | Yes   | Yes       | —   |
| Update            | Yes         | Yes   | Yes       | —   |
| Delete            | Yes         | Yes   | Yes       | —   |
| Edit              | Yes         | Yes   | Yes       | —   |
| Copy              | Yes         | Yes   | Yes       | —   |

***

## Graph Studio — Flow editor

| Action                 | Super Admin | Admin | Developer | QA  |
| ---------------------- | ----------- | ----- | --------- | --- |
| View studio            | Yes         | Yes   | Yes       | Yes |
| Create flow            | Yes         | Yes   | Yes       | —   |
| Update flow            | Yes         | Yes   | Yes       | —   |
| Delete flow            | Yes         | Yes   | Yes       | —   |
| Create new flow        | Yes         | Yes   | Yes       | —   |
| Rename flow            | Yes         | Yes   | Yes       | —   |
| Edit flow on canvas    | Yes         | Yes   | Yes       | —   |
| Save flow              | Yes         | Yes   | Yes       | —   |
| Publish flow           | Yes         | Yes   | Yes       | —   |
| Test flow              | Yes         | Yes   | Yes       | Yes |
| Agent nodes — read     | Yes         | Yes   | Yes       | —   |
| Agent nodes — actions  | Yes         | Yes   | Yes       | —   |
| Copy flow              | Yes         | Yes   | Yes       | —   |
| Sidebar: Auto Copilot  | Yes         | Yes   | Yes       | —   |
| Sidebar: Flow view     | Yes         | Yes   | Yes       | Yes |
| Sidebar: Versions      | Yes         | Yes   | Yes       | Yes |
| Sidebar: Support       | Yes         | Yes   | Yes       | Yes |
| Sidebar: Settings      | Yes         | Yes   | Yes       | Yes |
| Sidebar: Documentation | Yes         | Yes   | Yes       | Yes |
| Sidebar: Profile       | Yes         | Yes   | Yes       | Yes |

***

## Dev Studio — Auto Copilot

| Action | Super Admin | Admin | Developer | QA  |
| ------ | ----------- | ----- | --------- | --- |
| View   | Yes         | Yes   | Yes       | Yes |
| Create | Yes         | Yes   | Yes       | —   |
| Update | Yes         | Yes   | Yes       | —   |
| Delete | Yes         | Yes   | Yes       | —   |
| Edit   | Yes         | Yes   | Yes       | —   |
| Copy   | Yes         | Yes   | Yes       | —   |

***

## Dev Studio — Tool editor

| Action                         | Super Admin | Admin | Developer | QA  |
| ------------------------------ | ----------- | ----- | --------- | --- |
| View Dev Studio tools          | Yes         | Yes   | Yes       | Yes |
| Create tool                    | Yes         | Yes   | Yes       | —   |
| Update tool                    | Yes         | Yes   | Yes       | —   |
| Delete tool                    | Yes         | Yes   | Yes       | —   |
| Edit tool                      | Yes         | Yes   | Yes       | —   |
| Test tool                      | Yes         | Yes   | Yes       | Yes |
| Save tool                      | Yes         | Yes   | Yes       | —   |
| Publish tool                   | Yes         | Yes   | Yes       | —   |
| Copy tool                      | Yes         | Yes   | Yes       | —   |
| Keyboard shortcuts             | Yes         | Yes   | Yes       | Yes |
| Settings: storage              | Yes         | Yes   | Yes       | —   |
| Settings: editor               | Yes         | Yes   | Yes       | Yes |
| Open tool                      | Yes         | Yes   | Yes       | Yes |
| Archive tool                   | Yes         | Yes   | Yes       | —   |
| Environment variables (panel)  | Yes         | Yes   | Yes       | Yes |
| Environment variables — read   | Yes         | Yes   | Yes       | Yes |
| Environment variables — create | Yes         | Yes   | Yes       | —   |
| Environment variables — view   | Yes         | Yes   | Yes       | Yes |
| Environment variables — edit   | Yes         | Yes   | Yes       | —   |
| Environment variables — copy   | Yes         | Yes   | Yes       | —   |
| Capture variables — edit       | Yes         | Yes   | Yes       | —   |
| Capture variables — read       | Yes         | Yes   | Yes       | Yes |
| Capture variables — create     | Yes         | Yes   | Yes       | —   |
| Sidebar: Tools                 | Yes         | Yes   | Yes       | Yes |
| Sidebar: Variables             | Yes         | Yes   | Yes       | Yes |
| Sidebar: Versions              | Yes         | Yes   | Yes       | Yes |
| Sidebar: Auto Copilot          | Yes         | Yes   | Yes       | —   |
| Sidebar: Support               | Yes         | Yes   | Yes       | Yes |
| Sidebar: Settings              | Yes         | Yes   | Yes       | Yes |
| Sidebar: Documentation         | Yes         | Yes   | Yes       | Yes |
| Sidebar: Profile               | Yes         | Yes   | Yes       | Yes |

***

## Super Admin vs Admin

* **Super Admin** can create, update, or delete the **workspace**, use the **Billing** sidebar entry, and change **billing / payment** records.
* **Admin** matches **Super Admin** for building work and **Users**; Admins can **view** billing and payments but not the mutating actions above.

## QA vs Developer

* **Developer** can edit and publish in Graph Studio and Dev Studio per the tables above.
* **QA** can run tests and open many views but not edit or publish Agent Graphs and tools.

## Viewer role

**Viewer** is for read-only access. See [Viewer](/user-management/roles/viewer). It is often configured outside the four workspace roles in this page.

## Role detail pages

* [Admin](/user-management/roles/admin)
* [Developer](/user-management/roles/developer)
* [QA](/user-management/roles/tester)
* [Viewer](/user-management/roles/viewer)

Roles are **per workspace**. The same person can be an Admin in one workspace and a Developer in another.
