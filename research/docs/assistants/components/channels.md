> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Channels & Integrations overview

> Connect Conversational Agent Graphs to chat, voice, and email channels.

<Note>
  **Channels** route inbound user messages to a deployed **Agent Build**. Configure credentials in **Integrations**, then assign builds per **DEV / UAT / PROD** from **Deploy to Channel**.
</Note>

**Channels** let **Conversational Agent Graphs** meet users on web chat, WhatsApp, Slack, Teams, voice, and email. **Integration Tools** (Gmail, Jira, etc.) are separate — they power tool nodes and triggers, not end-user messaging.

<CardGroup cols={2}>
  <Card title="Supported channels" icon="list" href="/channels/supported">
    Full channel list and deploy flow.
  </Card>

  <Card title="Deploy to channel" icon="comments" href="/agents/deploy-channel">
    Assign an Agent Build after connecting Integrations.
  </Card>

  <Card title="Integrations hub" icon="plug" href="/configure/integrations">
    Workspace Channels, Tools, and Triggers tabs.
  </Card>

  <Card title="Integrations Hub vendors" icon="grid-2" type="note" href="/integrations-hub/overview">
    CRM, marketing, and app connectors beyond core channels.
  </Card>
</CardGroup>

## Core channels

<Frame caption="Integrations hub — connect messaging channels">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/deploy/04-integrations-hub.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=dd8c922e71c2ffa7b40dbabd35bbc88e" alt="Integrations hub Channels view" width="1772" height="976" data-path="images/v2/deploy/04-integrations-hub.png" />
</Frame>

* [Web Chat](/channels/webchat)
* [WhatsApp](/channels/whatsapp)
* [Slack](/channels/slack) · [Teams](/channels/teams)
* [Twilio Voice](/channels/twilio)
* [Email](/channels/email)

## Integration tools vs channels

| Layer                 | Purpose                                     | Doc                                       |
| --------------------- | ------------------------------------------- | ----------------------------------------- |
| **Channels**          | User-facing messaging surfaces              | This section                              |
| **Integration Tools** | App APIs used inside Agent Graph tool nodes | [Integrations](/configure/integrations)   |
| **Dev Studio tools**  | Custom and prebuilt callable tools          | [Tools & Dev Studio](/devstudio/overview) |

## Related

* [Supported channels](/channels/supported)
* [Builds overview](/builds/overview)
* [Deploy](/agents/deploy)
