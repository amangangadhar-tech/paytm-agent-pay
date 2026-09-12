> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# API Reference

> Authenticate and call Phinite APIs to trigger Agent Graph runs and automations.

Phinite APIs let external systems start **Agent Graph** runs—typically via [triggers](/triggers-intents/trigger-apis)—using workspace API keys or OAuth tokens your admin provisions.

## Authentication

<ParamField header="Authorization" type="string" required>
  Bearer token for API authentication. Format: `Bearer YOUR_API_KEY`
</ParamField>

<Warning>
  Never expose API keys in client-side code or public repos. Store keys in [env variables](/configure/env-variables) or your secret manager.
</Warning>

## Example: Trigger a webhook

<RequestExample>
  ```bash cURL theme={null}
  curl -X POST 'https://api.example.com/api/triggers/webhook/flow_123' \
    -H 'Authorization: Bearer YOUR_API_KEY' \
    -H 'Content-Type: application/json' \
    -d '{"event":"order.created","data":{"orderId":"12345"}}'
  ```
</RequestExample>

<ResponseExample>
  ```json Success theme={null}
  { "status": "accepted", "triggerId": "trig_abc" }
  ```
</ResponseExample>

## Related flows

1. Create and deploy an Agent Graph with a [trigger](/triggers-intents/trigger-apis).
2. Issue an API key under workspace **API keys** (role permitting).
3. Call the trigger endpoint from your system; monitor runs in [observability](/observability/overview).

<Note>
  Trigger APIs execute **deployed graph builds**—not draft Studio saves. **Build** and assign an environment before testing production traffic.
</Note>

## Related

* [Trigger APIs](/triggers-intents/trigger-apis)
* [API usage examples](/triggers-intents/api-usage-examples)
* [Deploy trigger](/agents/deploy-trigger)
