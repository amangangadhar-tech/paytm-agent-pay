> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Error Codes & Logs

> Common error patterns, where to find logs, and how to resolve Agent Graph failures.

When an **Agent Graph** run fails, HTTP status codes and session logs together point to the root cause—credentials, validation, or tool errors.

## Common errors

| Code                     | Meaning                                                    | First checks                               |
| ------------------------ | ---------------------------------------------------------- | ------------------------------------------ |
| **401 Unauthorized**     | Invalid or expired token                                   | API key, session, role assignment          |
| **403 Forbidden**        | Insufficient [workspace RBAC](/user-management/user-roles) | Role, workspace membership                 |
| **404 Not Found**        | Missing graph, build, or trigger ID                        | Deploy state, environment assignment       |
| **422 Validation Error** | Bad trigger payload or tool input                          | Parameter schema, sample JSON              |
| **500 Server Error**     | Platform or unhandled tool failure                         | [Session logs](/observability/logs), retry |

<Note>
  **403** on registry endpoints may indicate Agent Card policy—not workspace Users RBAC. See [Agent Registry](/agent-registry/overview).
</Note>

## Debugging workflow

1. Reproduce with the smallest sample input (trigger payload or tool test JSON).
2. Open [Session logs](/observability/logs) filtered by Agent Graph and environment.
3. Inspect tool/graph configuration and [env variables](/configure/env-variables).
4. Verify integration connections for the failing subtool.

<Tip>
  When contacting support, include input, expected output, build version, and the error code or log excerpt.
</Tip>

## Related

* [Timeline view](/observability/logs/timeline)
* [Environment misconfigurations](/support/env-issues)
