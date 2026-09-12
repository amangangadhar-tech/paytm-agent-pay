> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Twilio Voice

> Connect Twilio for voice channels with Conversational Agent Graphs.

<Note>
  Twilio Voice routes phone calls to a deployed **Agent Build**. Provision a number, point the voice webhook to Phinite, then assign the build via **Deploy to Channel** for **DEV / UAT / PROD**.
</Note>

## Set up Twilio Voice

1. Provision a **Twilio phone number** in your Twilio console.
2. Open workspace **Integrations** → **Channels** → **Twilio** (or voice integration for your tenant).
3. Enter Account SID, Auth Token, and related voice settings.
4. Copy the **DEV** voice webhook URL from the saved Phinite configuration.
5. In Twilio → **Phone Numbers** → your number → **Voice Configuration**, set the webhook URL to **POST** to Phinite's DEV endpoint.
6. **Save** your Conversational Agent Graph and create an **Agent Build**.
7. **Deploy** → **Deploy to Channel** — select Twilio, assign build to **DEV**.
8. Place a test call; review [Observability logs](/observability/logs) and telephony metrics.
9. Promote to **UAT** / **PROD** with matching webhook URLs per environment.

<Frame caption="Twilio voice channel configuration">
  <img src="https://mintlify.s3.us-west-1.amazonaws.com/phinite/Twilio.png" alt="Twilio voice integration settings" />
</Frame>

<Tip>
  Design your Agent Graph for DTMF input and speech transcription if your flow collects keypad or spoken responses. Test latency in DEV before production traffic.
</Tip>

## Related

* [Deploy to channel](/agents/deploy-channel)
* [Telephony metrics](/observability/metrics/telephony)
* [Supported channels](/channels/supported)
