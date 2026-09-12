> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Telephony Metrics

> Track calls, durations, and call quality for voice-enabled Agent Graph channels.

Telephony metrics apply when Agent Graphs serve **voice channels** (for example Twilio-backed flows).

## Metrics

| Metric            | Description                                    |
| ----------------- | ---------------------------------------------- |
| **Call count**    | Inbound/outbound sessions                      |
| **Duration**      | Talk time and hold patterns                    |
| **Drop rate**     | Abandoned or failed calls                      |
| **ASR / latency** | Speech recognition accuracy and responsiveness |

## Use cases

* Voice quality monitoring after model or prompt changes
* Vendor or trunk comparison
* Capacity planning for contact-center peaks

<Note>
  Telephony metrics attach to **Agent Graph** voice deploys. Email or chat-only graphs will not populate these series.
</Note>

## Related

* [Twilio channel](/channels/twilio)
* [Billing dashboard](/observability/billing)
