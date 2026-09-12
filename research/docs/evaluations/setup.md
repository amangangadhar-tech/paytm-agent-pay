> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Evaluations setup

> End-to-end — Run on draft or Connect to Build, then read Analytics and History.

Use this checklist to score an Agent Graph. Requires **Professional** / **Enterprise**.

## Prerequisites

* Pro+ (`evaluationsIncluded`)
* Permissions: `workspace.evaluations.read` + `run` and/or `configure`
* For **Production** env or Production datasets: **Superadmin** or **QA** only
* A saved Agent Graph (and a **Build** if using Connect to Build / Signal)

## Path 1 — Run on draft (iterate while designing)

1. Open Graph Studio → **Evaluations** (`?tab=eval`).
2. Click **Run on draft**.
3. **Dataset** — pick **Simulation**, **Autonomous**, or **Production**.
4. Choose mode (**Agentic eval** / **Single-turn eval** / **Multi-turn eval**) and env (**Development** / **UAT** / **Production**).
5. Continue by dataset:

### Simulation / Autonomous

| Step | Label           | Hint          | What to do                                                                                                                      |
| ---- | --------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 2    | **Generalized** | Test input    | Fill cases (Simulation: Conversation, Grounding & expectations, Run settings; Autonomous: User message, User variable, Outcome) |
| 3    | **Metrics**     | Select & tune | Thresholds, custom metrics, Global / Metric context                                                                             |
| 4    | **Review**      | Launch        | Confirm → **Launch evaluation**                                                                                                 |

### Production

| Step | Label        | Hint               | What to do                  |
| ---- | ------------ | ------------------ | --------------------------- |
| 2    | **Sessions** | Select             | Pick observability sessions |
| 3    | **Metadata** | Scenario & outcome | Fields from `/eval/config`  |
| 4    | **Metrics**  | Select & tune      | Same as above               |
| 5    | **Review**   | Launch             | **Launch evaluation**       |

6. Watch progress in Studio; open **OPERATE → Evaluations** for results.

Detail: [Run on draft](/evaluations/run-on-draft).

## Path 2 — Connect to Build (live or scheduled)

1. Studio **Evaluations** → **Connect to Build**.
2. **Mode** — **Live** (*Score traffic as it hits this build*) or **Schedule** (*Score the top anomalies from the last N days*).
3. **Build** — **Name**, **Build** picker; if Schedule: **Last N days** (1–7), **Top anomalies** (1–100), **Run at (UTC)**; optional **Enable signal**.
4. **Metrics** — Select & tune.
5. **Review** — **Save & attach**.

API: `POST /eval/evaluations/connect-to-build`. Detail: [Connect to Build](/evaluations/connect-to-build).

## Path 3 — Signal only

1. Studio **Evaluations** → **Signal**.
2. Toggle **Signal** per build (**Build** · **Version** · **Since** · **Signal**).

## Read results

1. **OPERATE → Evaluations → Analytics** — Runs in range, Completed, Pass rate, Failed runs; By dataset / environment / mode / flow.
2. **History / Sessions** — search Run ID / session ID; filter Flow, Version, Env, Status; open run detail; delete if permitted.

## Experiment

**Experiment** is listed in Studio but is a **stub** today (compare builds / build vs draft). Use Connect to Build or Run on draft instead.

## Checklist

* [ ] Pro+ unlocked
* [ ] Dataset + metrics chosen
* [ ] Launch or Save & attach succeeded
* [ ] Run visible in Analytics / History
* [ ] Production paths only used by Superadmin/QA

## Related

* [Evaluations overview](/evaluations/overview)
* [Studio panel](/evaluations/studio)
* [Connect to Build](/evaluations/connect-to-build)
* [Run on draft](/evaluations/run-on-draft)
