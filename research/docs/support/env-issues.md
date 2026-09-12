> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Environment Misconfigurations

> Find and fix environment-specific configuration issues for Agent Graph deploys.

Agent Graphs often work in **Dev** but fail in **UAT** or **Prod** when environment-specific secrets or endpoints differ.

## Symptoms

* Tool succeeds in Dev, fails in UAT/Prod with auth errors
* Integration connections valid in one environment only
* Missing env variable keys at runtime

## Checklist

1. Separate credentials and base URLs per environment in [Env. variables](/configure/env-variables).
2. Confirm the **Build** assigned to Prod pins tool versions tested in UAT.
3. Review feature flags or network egress rules per environment.
4. Compare [session logs](/observability/logs) between Dev and failing environment with the same input.

<Tip>
  Log env variable **keys** used at runtime (never secret values) to verify the graph resolves the expected configuration.
</Tip>

<Note>
  Workspace **Users** roles do not grant Prod credentials—env variables are configured separately from [RBAC](/user-management/user-management).
</Note>

## Related

* [Configure env variables](/configure/env-variables)
* [Error codes](/support/error-codes)
