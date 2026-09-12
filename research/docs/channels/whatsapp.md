> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# WhatsApp

> Connect WhatsApp Business API for Conversational Agent Graphs.

<Note>
  WhatsApp requires Business API credentials and a verified webhook. Assign an **Agent Build** per environment after the channel is connected in **Integrations**.
</Note>

## Set up WhatsApp

1. Obtain **WhatsApp Business API** credentials from Meta or your BSP.
2. Open workspace **Integrations** → **Channels** → **WhatsApp**.
3. Create a configuration — enter API tokens, phone number ID, and related fields for **Development**.
4. Copy the **DEV** webhook URL from the saved configuration.
5. In your WhatsApp / Meta developer console, point inbound message webhooks to that URL.
6. **Save** your Conversational Agent Graph and create an **Agent Build**.
7. In Graph Studio, **Deploy** → **Deploy to Channel** — select WhatsApp and assign the build to **DEV**.
8. Send a test message; verify the session in [Observability logs](/observability/logs).
9. Promote to **UAT** / **PROD** with environment-specific webhook URLs.

<Frame caption="WhatsApp channel integration">
  <img src="https://mintcdn.com/phinite/R2bQNXkNr-Dvts8Q/images/chatbot-integration.png?fit=max&auto=format&n=R2bQNXkNr-Dvts8Q&q=85&s=63606684405dae98892b8558afbf46e9" alt="WhatsApp Business API channel setup" width="2940" height="1818" data-path="images/chatbot-integration.png" />
</Frame>

<Warning>
  Verify webhook signatures from Meta to prevent spoofed inbound messages.
</Warning>

## Related

* [Deploy to channel](/agents/deploy-channel)
* [Supported channels](/channels/supported)
* [Integrations configuration](/configure/integrations)
