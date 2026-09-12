> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Run on draft

> Launch evaluations on the current flow version — Simulation, Autonomous, or Production.

**Run on draft** evaluates the **current flow version** with mixed metrics. Permission: `workspace.evaluations.run`. Final CTA: **Launch evaluation**.

## Wizard by dataset

| Dataset                         | Steps                                                                |
| ------------------------------- | -------------------------------------------------------------------- |
| **Simulation** / **Autonomous** | **Dataset** → **Generalized** → **Metrics** → **Review**             |
| **Production**                  | **Dataset** → **Sessions** → **Metadata** → **Metrics** → **Review** |

### Dataset cards

**Simulation** · **Autonomous** · **Production**

Then choose mode: **Agentic eval** · **Single-turn eval** · **Multi-turn eval**, and env: **Development** · **UAT** · **Production** (Production restricted to Superadmin/QA).

### Simulation case groups

| Group                        | Fields (ids)                                                   |
| ---------------------------- | -------------------------------------------------------------- |
| **Conversation**             | `scenario`, `user_description`                                 |
| **Grounding & expectations** | `context`, `expected_outcome`, `chatbot_role`                  |
| **Run settings**             | `language`, `max_user_simulations` · also **Default language** |

Exact field **labels** come from `GET /eval/config`.

### Autonomous cases

**User message** · **User variable** · **Outcome**

### Production path

1. **Sessions** — pick observability sessions (or filters that resolve to sessions).
2. **Metadata** — fields from `/eval/config` (includes ids such as `expected_outcome`).
3. **Metrics** → **Review** → **Launch evaluation**.

API helpers include `/eval/run-production-sessions` and mixed-metric run streams.

### Metrics step

* Catalog metrics with **threshold** sliders
* Custom metric: `metric_id`, mode `agentic` / `single_turn` / `multi_turn`, score types `numeric` / `boolean` / `category`
* Context: **Global context** / **Metric context**

## After launch

Progress may stream in Studio. Results land on workspace **Analytics** and **History / Sessions**. Open a run for the detail drawer.

## Related

* [Connect to Build](/evaluations/connect-to-build)
* [Studio evaluations](/evaluations/studio)
* [Evaluations overview](/evaluations/overview)
* [Observability sessions](/observability/insights)
