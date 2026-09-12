> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Microsoft Teams

> Connect Microsoft Teams for Conversational Agent Graphs.

<Note>
  Teams uses Azure Bot registration and Bot Framework messaging endpoints. Save Phinite webhook URLs for **DEV / UAT / PROD**, then assign an **Agent Build** with **Deploy to Channel**.
</Note>

Your Agent Graph can respond in Teams channels and chats, send proactive updates, and provide in-Teams support once the bot is registered and deployed.

## Connect Microsoft Teams

### 1. Create a Teams configuration in Phinite

1. Open **Integrations** → **Teams** → **Add Configuration**.
2. Enter **Microsoft App ID**, **Microsoft App Password**, and **Microsoft Tenant ID**.
3. Optionally add **Channel ID**, **Conversation ID**, and a configuration name.
4. Click **Save** — webhook URLs generate for **DEV**, **UAT**, and **PROD**.

Example webhook shape:

```bash theme={null}
https://api-server-dev.yourdomain.ai/teams/xxxxxxxx/development
```

### 2. Register the bot in Azure

1. Azure Portal → **App registrations** → **New registration**.
2. Name: e.g. *Agent Graph Bot for Teams*.
3. Supported accounts: any org directory + personal Microsoft accounts.
4. Register and copy **Application (client) ID** → **Microsoft App ID**.
5. Copy **Directory (tenant) ID** → **Microsoft Tenant ID**.

### 3. Create a client secret

1. **Certificates & secrets** → **New client secret**.
2. Copy the **Value** immediately → paste as **Microsoft App Password** in Phinite.

### 4. Connect the messaging endpoint

1. In Azure Bot / Bot Framework settings, set **Messaging endpoint** to the environment-specific webhook URL from Phinite (**DEV** first).
2. Save.

### 5. Deploy your Agent Graph

1. **Save** the Conversational Agent Graph and create an **Agent Build**.
2. **Deploy** → **Deploy to Channel** — select Teams, assign build to **DEV**.
3. Message the bot in Teams; verify logs.
4. Promote to **UAT** / **PROD** and update the messaging endpoint URL.

### Proactive messages (optional)

Add **channelId** (channels) or **conversationId** (1:1) to the Phinite configuration. Message the bot `getchannelid` or `getconversationId` to retrieve IDs from bot replies.

## Related

* [Deploy to channel](/agents/deploy-channel)
* [Slack / Teams combined guide](/channels/slack-teams)
* [Supported channels](/channels/supported)
