> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Session Count

> Track number of sessions by Agent Graph, channel, and environment.

Session count measures how often deployed Agent Graphs are invoked over time.

## Dimensions

| Dimension       | Description                          |
| --------------- | ------------------------------------ |
| **Agent Graph** | Graph that served the session        |
| **Channel**     | Webchat, Slack, API, telephony, etc. |
| **Environment** | DEV, UAT, or PROD assignment         |
| **Time**        | Hourly, daily, weekly rollups        |

## Use cases

* Monitor adoption after a channel deploy
* Capacity planning for peak traffic
* Anomaly detection when counts diverge from baselines

<Note>
  A **session** is one end-user or API invocation of a deployed graph—not a Graph Studio edit session.
</Note>

## Related

* [Usage metrics](/observability/usage-metrics)
* [Filtering](/observability/filtering)
