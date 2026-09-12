> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Variable Capture Logs

> Inspect captured variables and data flow across Agent Graph nodes.

Variable capture logs show what each tool and agent node wrote to the session—essential for debugging data handoffs.

## Use cases

1. Verify extraction prompts populate expected fields.
2. Debug missing or malformed values before downstream nodes run.
3. Confirm tool `captured_variables` match the [Dev Studio tool contract](/devstudio/overview#tool-contract).

<Note>
  Captured variables are **runtime session state**, not workspace [env variables](/configure/env-variables) or Agent Card metadata.
</Note>

## Related

* [Graph Studio variables](/graph-studio/interface#variables)
* [Timeline view](/observability/logs/timeline)
