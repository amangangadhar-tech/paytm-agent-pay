> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# What you can build

> Explore what you can build on Phinite — Conversational and Autonomous Agent Graphs across channels and automation.

Phinite enables teams to build and deploy **Agent Graphs** securely across channels, triggers, and the [Agent Registry](/agent-registry/overview). Every graph follows the same spine: **Design → Save → Build → Environment → Deploy** (or **Expose as A2A**).

<CardGroup cols={2}>
  <Card title="Conversational" icon="comments" href="/agents/conversational">
    Voice and chat agents for real-time user conversations.
  </Card>

  <Card title="Autonomous" icon="robot" href="/agents/autonomous">
    Background automation via API triggers and cron schedules.
  </Card>

  <Card title="Graph Studio" icon="diagram-project" href="/graph-studio/overview">
    Visual workflow builder for both graph types.
  </Card>

  <Card title="Integrations Hub" icon="plug" type="note" href="/integrations-hub/overview">
    Prebuilt tools and channel connectors.
  </Card>
</CardGroup>

## Conversational Agent Graphs

**Purpose:** Engage users through chat or voice channels with context, retrieval, and multi-step orchestration.

| Capability | Detail                                                              |
| ---------- | ------------------------------------------------------------------- |
| Context    | Multi-turn conversations with session memory and captured variables |
| Channels   | Web chat, WhatsApp, Slack, Teams, Twilio Voice, email               |
| Knowledge  | RAG collections grounded in workspace data sources                  |
| Governance | RBAC-controlled environments, audit logs, and observability         |

**Examples:**

* Support or HR FAQ agents
* Appointment schedulers
* Knowledge-grounded internal helpdesks
* Order status and ticket-creation flows

<AccordionGroup>
  <Accordion title="Customer support and HR">
    Answer FAQs, escalate tickets, and sync outcomes to CRM or Slack using predefined tools.
  </Accordion>

  <Accordion title="Appointment and scheduling">
    Automate booking flows with Google Calendar, HubSpot Meetings, or custom APIs.
  </Accordion>

  <Accordion title="Knowledge Q&A">
    Ground conversations on internal documents or RAG collections for accurate responses.
  </Accordion>
</AccordionGroup>

**Deploy targets:** [Deploy to Channel](/agents/deploy-channel), [Deploy as Chat API](/agents/deploy), [Expose as A2A](/agent-registry/expose-your-flow).

<Note>
  Workspace filters may still show an **Email** chip. New graphs only offer **Conversational** and **Autonomous**.
</Note>

***

## Autonomous Agent Graphs

**Purpose:** Execute background and cross-system workflows without a live user — triggered by webhooks, schedules, or events.

| Capability    | Detail                                                                          |
| ------------- | ------------------------------------------------------------------------------- |
| Orchestration | Visual multi-agent graphs in Graph Studio                                       |
| Triggers      | API webhooks, cron jobs, background tasks                                       |
| Composition   | [Agent Registry](/agent-registry/overview) for Browse and Discovery agent nodes |
| Governance    | Environment-specific credentials, RBAC, and full observability                  |

**Examples:**

* Data enrichment and validation pipelines
* Compliance evidence collection
* Scheduled report generation
* Monitoring and alerting workflows

<AccordionGroup>
  <Accordion title="Operations and back office">
    Automate repetitive processes like data enrichment, validation, and reporting.
  </Accordion>

  <Accordion title="Compliance and audit">
    Collect evidence, run validations, and maintain compliance logs.
  </Accordion>

  <Accordion title="Data pipelines">
    Ingest, transform, and publish structured data using external APIs and schedulers.
  </Accordion>
</AccordionGroup>

**Deploy targets:** [Deploy as API](/agents/deploy-trigger), [Cron job](/triggers-intents/trigger-apis#cron-job-mode), [Expose as A2A](/agent-registry/expose-your-flow) (coming soon for Autonomous).

<Tip>
  Design Autonomous graphs for **idempotent** actions and clear error handling — there is no user in the loop to recover from failures.
</Tip>

***

## Compare graph types

| Dimension           | Conversational           | Autonomous                      |
| ------------------- | ------------------------ | ------------------------------- |
| **User present**    | Yes — live chat or voice | No — background execution       |
| **Primary ingress** | Channel or Chat API      | API trigger or Cron             |
| **Typical latency** | Real-time (seconds)      | Batch or scheduled              |
| **Best for**        | Support, sales, HR, Q\&A | ETL, monitoring, ops automation |
| **Test in Studio**  | **Test** chat panel      | Trigger test payloads           |

***

## Getting started

1. **Create a workspace** — name it after your department or project.
2. **Add users** — assign roles and permissions ([User roles](/user-management/user-roles)).
3. **Create an Agent Graph** — choose Conversational or Autonomous.
4. **Design in Graph Studio** — nodes, tools, RAG, variables.
5. **Ship securely** — Save, Build, assign DEV/UAT/PROD, then Deploy.

## Related topics

* [Workspaces overview](/workspaces/workspace-overview)
* [Graph Studio](/graph-studio/overview)
* [Builds overview](/builds/overview)
* [Channels overview](/channels/overview)
* [Triggers overview](/triggers-intents/overview)
