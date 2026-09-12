> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Slack & Microsoft Teams

> Combined setup reference for Slack and Teams channels with Conversational Agent Graphs.

<Note>
  Both Slack and Teams use workspace **Integrations** for credentials and **Deploy to Channel** to assign an **Agent Build** per **DEV / UAT / PROD**. See dedicated guides for platform-specific Azure or Slack app steps.
</Note>

<CardGroup cols={2}>
  <Card title="Slack only" icon="slack" href="/channels/slack">
    Full Slack app and webhook walkthrough.
  </Card>

  <Card title="Microsoft Teams only" icon="microsoft" href="/channels/teams">
    Azure registration and Bot Framework endpoint.
  </Card>
</CardGroup>

Once connected, your **Conversational Agent Graph** can:

* Reply to users in real time
* Send automated updates or alerts
* Handle support conversations from Slack or Teams

<Frame caption="Slack integration configuration">
  <img src="https://mintcdn.com/phinite/uZGcuqqm3D8oV1L4/images/slack.png?fit=max&auto=format&n=uZGcuqqm3D8oV1L4&q=85&s=9f2ca36ff0845897e7bc42fa048b06e3" alt="Slack channel configuration form" width="2914" height="1806" data-path="images/slack.png" />
</Frame>

## Slack — quick path

1. **Integrations** → **Slack** → **Add Configuration** — Signing Secret + Bot Token.
2. Create a [Slack app](https://api.slack.com/apps) with bot scopes (`chat:write`, `channels:read`, `im:history`, etc.).
3. Paste **DEV** webhook URL into **Event Subscriptions** → **Request URL**.
4. **Deploy** → **Deploy to Channel** — assign **Agent Build** to **DEV**.

Full detail: [Slack channel guide](/channels/slack).

## Microsoft Teams — quick path

1. **Integrations** → **Teams** → **Add Configuration** — App ID, App Password, Tenant ID.
2. Register an app in **Azure Portal**; create a client secret.
3. Set Bot Framework **Messaging endpoint** to Phinite **DEV** webhook URL.
4. **Deploy** → **Deploy to Channel** — assign **Agent Build** to **DEV**.

Full detail: [Teams channel guide](/channels/teams).

## Shared deploy checklist

| Step                             | Slack                      | Teams                            |
| -------------------------------- | -------------------------- | -------------------------------- |
| Save credentials in Integrations | Signing Secret + Bot Token | App ID + Password + Tenant       |
| External app registration        | Slack API app              | Azure app registration           |
| Webhook / endpoint               | Event Subscriptions URL    | Bot Framework messaging endpoint |
| Assign build                     | Deploy to Channel          | Deploy to Channel                |
| Test environment                 | DEV first                  | DEV first                        |

<Tip>
  Keep separate configurations per workspace environment. Promote build assignments and webhook URLs together when moving to **PROD**.
</Tip>

## Common issues

**Invalid Request URL / endpoint** — URLs must be HTTPS and publicly reachable.

**Auth failures** — re-copy tokens or secrets; confirm scopes (Slack) or client secret not expired (Teams).

**Wrong build running** — verify **Deploy to Channel** assignment matches the environment users message.

## Related

* [Deploy to channel](/agents/deploy-channel)
* [Supported channels](/channels/supported)
* [Integrations configuration](/configure/integrations)
