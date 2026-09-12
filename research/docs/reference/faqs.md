> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# FAQs

> Frequently asked questions about Phinite Agent Graphs, tools, and workspace access.

## General

<AccordionGroup>
  <Accordion title="Can I reuse an Agent Graph design across workspaces?">
    Graphs, tools, and integrations are workspace-scoped. Export/import patterns depend on your org process—clone graphs inside a workspace or rebuild with the same tool versions pinned on **Build**.
  </Accordion>

  <Accordion title="Do I need coding to build Agent Graphs?">
    No for canvas design—[Graph Studio](/graph-studio/overview) and Phinite Aura support visual authoring. **Tools & Dev Studio** often requires Python for custom integrations.
  </Accordion>

  <Accordion title="What happened to Assistants and Intents?">
    **Agent Graphs** replace Assistants; [Triggers](/triggers-intents/overview) replace the legacy Intents nav. See [Agents overview](/agents/overview).
  </Accordion>
</AccordionGroup>

## Access & roles

* **Who can publish graphs and tools?** Typically Admin or Super Admin; Developers publish when policy allows—see [User roles](/user-management/user-roles).
* **Can a user have different roles in different workspaces?** Yes—RBAC is per workspace, separate from [Agent Card](/agent-registry/overview) registry identity.

## Troubleshooting

* **Why is my tool failing?** Check parameters, [env variables](/configure/env-variables), integration connections, and [session logs](/observability/logs).
* **Why is a trigger misfiring?** Review trigger payload mapping and graph entry conditions; inspect [timeline logs](/observability/logs/timeline).

## Related

* [Glossary](/reference/glossary-v2)
* [Error codes](/support/error-codes)
