> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Supported channels

> Messaging and voice channels for Conversational Agent Graphs.

<Note>
  Channels connect **Conversational Agent Graphs** to end users. Create an **Agent Build**, connect the channel in **Integrations**, then **Deploy to Channel** and assign the build per **DEV / UAT / PROD**.
</Note>

Phinite supports the following deployment channels. Each generates environment-specific webhook URLs when you save a configuration.

| Channel             | Guide                                  | Best for                 |
| ------------------- | -------------------------------------- | ------------------------ |
| **Web chat**        | [Web Chat](/channels/webchat)          | Embedded site widget     |
| **WhatsApp**        | [WhatsApp](/channels/whatsapp)         | WhatsApp Business API    |
| **Slack**           | [Slack](/channels/slack)               | Team messaging           |
| **Microsoft Teams** | [Teams](/channels/teams)               | Enterprise chat          |
| **Slack & Teams**   | [Slack / Teams](/channels/slack-teams) | Combined setup reference |
| **Twilio Voice**    | [Twilio](/channels/twilio)             | Phone / IVR              |
| **Email**           | [Email](/channels/email)               | Inbound/outbound mail    |

<Frame caption="Integrations hub — Channels tab">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/deploy/04-integrations-hub.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=dd8c922e71c2ffa7b40dbabd35bbc88e" alt="Integrations hub with Channels tab" width="1772" height="976" data-path="images/v2/deploy/04-integrations-hub.png" />
</Frame>

## Typical channel deploy flow

1. Design and **Save** a **Conversational Agent Graph** in Graph Studio.
2. Create an **Agent Build** ([Builds overview](/builds/overview)).
3. Connect the channel under workspace **Integrations** → **Channels**.
4. **Deploy** → **Deploy to Channel** — assign the build to **DEV** first.
5. Test, then promote to **UAT** / **PROD** ([Deploy to channel](/agents/deploy-channel)).

## Related

* [Channels overview](/channels/overview)
* [Integrations configuration](/configure/integrations)
* [Deploy](/agents/deploy)
