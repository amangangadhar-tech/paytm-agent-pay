> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Connect to Build

> Attach evaluation metrics to a build for live or scheduled scoring.

Use **Connect to Build** when you want ongoing or scheduled scoring on a pinned **Agent Build**.

Permission: `workspace.evaluations.configure`. API: `POST /eval/evaluations/connect-to-build`.

## Wizard steps

| Step | Title       | Purpose                                           |
| ---- | ----------- | ------------------------------------------------- |
| 1    | **Mode**    | Live or Schedule                                  |
| 2    | **Build**   | Select build + schedule fields                    |
| 3    | **Metrics** | Choose scoring metrics                            |
| 4    | **Review**  | Confirm · CTA **Save & attach** (hint **Attach**) |

### 1. Mode

| Option       | Copy                                         |
| ------------ | -------------------------------------------- |
| **Live**     | Score traffic as it hits this build          |
| **Schedule** | Score the top anomalies from the last N days |

### 2. Build / Evaluation

Fields include:

* **Name** — evaluation name
* **Build** — target Agent Build
* If **Schedule**: **Last N days** (1–7), **Top anomalies** (1–100), **Run at (UTC)**
* Toggle **Enable signal** when you also want signal ingest

### 3. Metrics

Select metrics (and thresholds / custom metrics as offered). Same metric catalog as Run on draft.

### 4. Review

Confirm mode, build, schedule, and metrics → **Save & attach**.

## After attach

* Live scoring applies as traffic hits the build.
* Scheduled runs appear under workspace **Analytics** / **History / Sessions**.
* Manage signal toggles from the Studio **Signal** entry ([Studio evaluations](/evaluations/studio)).

## Related

* [Run on draft](/evaluations/run-on-draft)
* [Studio evaluations](/evaluations/studio)
* [Evaluations overview](/evaluations/overview)
