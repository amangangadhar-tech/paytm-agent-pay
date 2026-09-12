> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Phinite Guardrails

> Built-in Control library — Before the model, After the model, Session data.

**Phinite** is the built-in guardrail provider — *Phinite’s built-in guard library (prompt injection, toxicity, PII, and more)*. No cloud credentials. You turn individual controls on in the **Control library**.

## When to use Phinite

| Use Phinite when…                                            | Use AWS / Azure / GCP when…                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------------------ |
| You want Phinite-hosted checks without external keys         | You already run Bedrock Guardrails, Azure Content Safety, or Model Armor |
| You need per-control toggles and violation actions in Studio | Filters and templates stay in the cloud console                          |

## Create a Phinite profile — step by step

### 1. Open LLM Governance

1. Graph Studio → **Governance** → **LLM Governance**.
2. Click **New profile** (or create from the library).

### 2. Provider step

1. Select **Phinite** (description: built-in guard library).
2. Click **Continue**.

Wizard steps: **Provider** → **Configure**.

### 3. Configure — Profile name

Enter **Profile name** (placeholder `e.g. Production guards`).

### 4. Configure — Control library

Section title **Control library** · subtitle *Turn on the guards this profile should enforce* · counter `{n}/{total} on`.

#### Compliance framework filter

* Card **Compliance framework** — *Filter controls by mapped standard*
* Dropdown: **All frameworks** or a mapped framework category from the catalog API

#### Phases

Controls are grouped by phase (from the catalog; names/descriptions come from AI Core):

| Phase id   | UI title             | Subtitle                                       |
| ---------- | -------------------- | ---------------------------------------------- |
| `pre_llm`  | **Before the model** | Checks on user input before it reaches the LLM |
| `post_llm` | **After the model**  | Checks on model output before users see it     |
| `session`  | **Session data**     | Mask or block sensitive session variables      |

Per phase header actions: **Enable all** · **Disable all**.

#### Each control card

For every catalog guard you see:

* **Name** (from catalog)
* Severity badge (`low` / `medium` / `high`)
* Default action badge (`DENY` / `BLOCK` / `STEER` / `OBSERVE`, …)
* Optional **recommended** (catalog `default_enabled`)
* Optional **mapped** (non-runtime mapping)
* Category and description
* Toggle (on/off)
* **On violation** action:
  * Most guards: **Block** (`block_turn`) or **Log only** (`log_only`)
  * Guards with default action **steer**: **Redact** (`log_only`) or **Block** (`block_turn`)
* Optional **score threshold** slider (0–1, default `0.7`) when the catalog marks the guard as threshold-based

Known legacy control ids (catalog may expose more): `prompt_injection` (pre), `toxicity` / `secret_exfiltration` (post), `session_masking` (session).

### 5. Save profile

1. Click **Save profile**.
2. Profile appears under **Library (N)** with provider badge **Phinite**.
3. Profile-level `on_violation` defaults to **block\_turn** when creating.

Phinite does **not** show **Test connection** (no external credentials).

### 6. Attach

1. Click **Attach** on the profile or header **Attach**.
2. Follow [Attach guardrails](/guardrails/attach) — **Entire flow** or **One agent**.
3. **Save** the Agent Graph and **Build**.

## Workspace Guardrails tab

**OPERATE → Governance → Guardrails** shows **Guardrail activity** analytics (Blocked / Logged, Decisions / Triggers). Create and attach still happen in Studio **LLM Governance**.

## Related

* [Profiles (all providers)](/guardrails/profiles)
* [Attach](/guardrails/attach)
* [Guardrails setup](/guardrails/setup)
* [Guardrails overview](/guardrails/overview)
