> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Token Usage (LLM, STT, TTS)

> Measure token consumption across language, speech-to-text, and text-to-speech for Agent Graph runs.

Token metrics break down model and speech service usage during Agent Graph execution.

## Dimensions

| Dimension       | Description                    |
| --------------- | ------------------------------ |
| **Model**       | LLM or speech model identifier |
| **Agent Graph** | Graph consuming tokens         |
| **Environment** | DEV / UAT / PROD               |
| **Channel**     | Surface driving the run        |
| **Time**        | Trend windows                  |

## Use cases

* Cost monitoring and [billing](/observability/billing) allocation
* Model selection and prompt/tool optimization
* Budget alerts before Prod traffic spikes

<Tip>
  Compare token usage before and after prompt or tool changes on the same graph version filter.
</Tip>

## Related

* [Session count](/observability/metrics/session-count)
* [Workspace models](/workspace/models)
