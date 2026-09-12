> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Build environments

> DEV, UAT, and PROD — assign Agent Builds and scope env variables.

Phinite uses three deployment **environments** — **DEV**, **UAT**, and **PROD** — for **Agent Builds**, **Env. variables**, and channel/trigger webhook URLs. Assign builds to an environment so runtime uses the correct secrets and endpoints.

<Note>
  Environment variable values are **not** embedded in the Agent Graph canvas. Configure them on the workspace **Env. variables** page and reference keys by name in tools and integrations.
</Note>

## Environment purposes

| Environment           | Typical use                                                |
| --------------------- | ---------------------------------------------------------- |
| **DEV (Development)** | Rapid iteration, developer smoke tests, draft webhook URLs |
| **UAT**               | Stakeholder acceptance, pre-production validation          |
| **PROD (Production)** | Live users and production integrations                     |

## Env. variables

1. Open workspace **Env. variables** (`/{org}/workspace/{id}/environment`).
2. Click **New Environment** or edit an existing variable row.
3. Enter the **Variable Name** and values for **DEV**, **UAT**, and **PROD** as needed.
4. Save each row — sensitive values display masked in the table.

<Frame caption="Env. variables — DEV, UAT, and PROD columns per variable">
  <img src="https://mintcdn.com/phinite/9A3jAaljSLWX8Xhw/images/v2/builds/04-env-variables.png?fit=max&auto=format&n=9A3jAaljSLWX8Xhw&q=85&s=ff9eed6290f01872e6b9e9f9be73c0a4" alt="Environment variables table" width="1772" height="976" data-path="images/v2/builds/04-env-variables.png" />
</Frame>

Permissions: `workspace.sidebar.environment`. Full field reference: [Env. variables](/configure/env-variables).

## Assign a build to an environment

1. Create an **Agent Build** ([Builds overview](/builds/overview)).
2. When deploying:
   * **Deploy to Channel** — pick **Development**, **UAT**, or **Production** and assign the build ([Deploy to channel](/agents/deploy-channel)).
   * **Deploy as API / Cron** — assign build on the trigger connection ([Deploy a trigger](/agents/deploy-trigger)).
   * **A2A** — TEST builds use registry-scoped URLs; LIVE uses production routing ([Endpoints & lifecycle](/agent-registry/endpoints-and-lifecycle)).
3. Test in **DEV** first — send a channel message or call the trigger webhook.
4. Promote assignment and webhook URLs to **UAT**, then **PROD**.

<Tip>
  Keep variable **names** consistent across DEV → PROD. Only the **values** should change (API keys, base URLs, feature flags).
</Tip>

## Access and monitoring

* Restrict who can publish to **PROD** via [User roles](/user-management/user-roles).
* Track errors and session volume per environment in [Observability](/observability/overview).
* Separate credentials per environment — never reuse production secrets in DEV.

## Related

* [Env. variables](/configure/env-variables)
* [Build lifecycle](/builds/lifecycle)
* [Deploy](/agents/deploy)
* [Configuration overview](/configure/overview)
