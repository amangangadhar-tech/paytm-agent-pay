> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Email

> Configure email as a channel for Conversational Agent Graphs.

<Note>
  The workspace filter may still show an **Email** chip for legacy graphs. New **Agent Graphs** are created as **Conversational** or **Autonomous** only — email channel deploy applies to Conversational graphs handling inbound mail.
</Note>

## Set up email channel

1. Open workspace **Integrations** → **Channels** → **Email**.
2. Connect your provider — configure SMTP/IMAP or provider API credentials for **Development**.
3. Set inbound routing so new messages hit the Phinite channel endpoint (webhook or polling per your integration type).
4. **Save** your Conversational Agent Graph and create an **Agent Build**.
5. **Deploy** → **Deploy to Channel** — select email, assign build to **DEV**.
6. Send a test inbound email; confirm the Agent Graph session starts and replies as expected.
7. Promote build assignment to **UAT** / **PROD** when validated.

<Frame caption="Email channel configuration">
  <img src="https://mintcdn.com/phinite/KoQt-WwNIMd_FyyU/images/email.png?fit=max&auto=format&n=KoQt-WwNIMd_FyyU&q=85&s=49c5e0d6e492c92fd38ba3f6fdc533fc" alt="Email channel integration settings" width="2906" height="1808" data-path="images/email.png" />
</Frame>

<Tip>
  Sanitize HTML bodies and scan attachments before passing content into Agent Graph nodes. Use env variables for provider secrets — never embed credentials in the graph.
</Tip>

## Related

* [Deploy to channel](/agents/deploy-channel)
* [Supported channels](/channels/supported)
* [Build environments](/builds/environments)
