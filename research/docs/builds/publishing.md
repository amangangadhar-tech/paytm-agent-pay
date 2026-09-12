> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Publishing Agent Graphs & tools

> Publish tool versions and promote Agent Builds safely across environments.

**Publishing** in Phinite covers two related actions: publishing **tool** versions so they can be pinned in builds, and promoting **Agent Builds** (and A2A Agent Cards) across **DEV → UAT → PROD**.

<Note>
  Unpublished tools appear with a **Publish** action in the **Build Agent** dialog. You cannot create a build that references unpublished tool versions.
</Note>

## Publish tools before building

1. Open Graph Studio for the Agent Graph.
2. Click **Build** (graph must be **Saved**).
3. In the **TOOLS** section, locate any row showing **Publish**.
4. Click **Publish** for each unpublished tool — this creates a versioned tool artifact the build can pin.
5. Confirm all required tools show published versions, then **Create Build**.

See [Build configuration](/builds/configuration) for optional export of additional tools into the build or Agent Card version.

## Publish and deploy an Agent Build

1. **Validate** the graph — run **Test** in Studio and review [Observability logs](/observability/logs) for errors.
2. **Create the build** with a clear **Description** (audit trail for your team).
3. **Assign DEV** — deploy to a channel, trigger, or A2A TEST endpoint ([Deploy](/agents/deploy)).
4. **Smoke test** in DEV — confirm env variables and integrations resolve correctly.
5. **Promote to UAT** — reassign the build or switch webhook URLs to the UAT endpoint.
6. **Promote to PROD** when approved — update production webhooks and env-scoped credentials.

<Tip>
  Document build descriptions with what changed in the graph or tools. Future you (and auditors) will thank you when comparing rows in **Agent Builds**.
</Tip>

## Publish A2A Agent Cards

A2A exposure adds a registry layer on top of builds:

1. [Expose your Agent Graph](/agent-registry/expose-your-flow) — creates a **TEST** Agent Card version.
2. Validate against the TEST hosted URL ([Endpoints & lifecycle](/agent-registry/endpoints-and-lifecycle)).
3. **Push To Prod** from [Agent Cards](/agent-registry/agent-cards) — promotes to **LIVE** public URL.

<Warning>
  Production A2A promotion and some workspace deploy actions require elevated roles. Coordinate with workspace admins before pushing LIVE.
</Warning>

## Related

* [Builds overview](/builds/overview)
* [Build lifecycle](/builds/lifecycle)
* [Agent Cards](/agent-registry/agent-cards)
* [Build export](/configure/build-export)
