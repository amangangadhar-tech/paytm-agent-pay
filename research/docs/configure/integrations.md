> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Integrations configuration

> Channels, Integration Tools, and Triggers in the workspace hub and Graph Studio.

**Integrations** connect **Agent Graphs** to the outside world: messaging **Channels**, callable **Integration Tools**, and autonomous **Triggers** (API, Cron, background tasks).

Configuration happens in the workspace **Integrations** hub and can be scoped to an **Agent Graph** from Graph Studio.

<Note>
  Configure credentials in **Development** first, validate with a **DEV** build assignment, then promote to UAT and PROD.
</Note>

## Where in the product

| Surface                   | Path                                       | Purpose                                                   |
| ------------------------- | ------------------------------------------ | --------------------------------------------------------- |
| Integrations hub          | `.../integration?tab=channels`             | Connect WhatsApp, Slack, Teams, email, voice, web chat, … |
| Integration Tools         | `.../integration?tab=predefined-tools`     | App integrations used as tools                            |
| Triggers                  | `.../integration?tab=triggers`             | API / Cron / conversational triggers                      |
| Graph Studio Integrations | Graph Studio → **Integrations** → Channels | Agent Graph–scoped channel connections                    |
| Graph Studio Triggers     | Graph Studio → **Triggers**                | Agent Graph–scoped trigger links                          |

<Frame caption="Integrations hub — Channels, Tools, and Triggers">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/configure/01-integrations-hub.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=5cda9da8ed14370acdd162a26e4cbcf4" alt="Integrations hub" width="1772" height="976" data-path="images/v2/configure/01-integrations-hub.png" />
</Frame>

## Connect a channel

1. Open workspace **Integrations** → **Channels** tab (or sidebar **Channels**).
2. Click **New Integration** / pick a channel type.
3. Complete credential and webhook configuration for **Development** first.
4. In Graph Studio, **Deploy** → **Deploy to Channel** and assign your **Agent Build** ([Deploy to channel](/agents/deploy-channel)).

## Configure a trigger

1. Open **Integrations** → **Triggers** tab.
2. Create **Autonomous** (API / Cron) or **Conversational** trigger as needed.
3. Assign an **Agent Build** to DEV / UAT / PROD on the trigger connection.
4. Copy the webhook URL or cron schedule from the trigger config page.

## Graph Studio shortcut

Graph Studio → **Integrations** submenu lists **Channels** and **Integration Tools** without leaving the canvas. The **Triggers** panel links to **Add trigger in Integrations** when none exist.

<Tip>
  Tools reference **Env. variables** by key name — configure [Env. variables](/configure/env-variables) before wiring channel or trigger credentials.
</Tip>

## Related

<CardGroup cols={2}>
  <Card title="Deploy" icon="rocket" href="/agents/deploy">
    Branch deploy vs expose from Graph Studio.
  </Card>

  <Card title="Deploy to channel" icon="comments" href="/agents/deploy-channel">
    Assign a build to a messaging channel.
  </Card>

  <Card title="Deploy a trigger" icon="bolt" href="/agents/deploy-trigger">
    API, Cron, and background task webhooks.
  </Card>

  <Card title="Configuration overview" icon="sliders" href="/configure/overview">
    All configuration layers in one place.
  </Card>
</CardGroup>
