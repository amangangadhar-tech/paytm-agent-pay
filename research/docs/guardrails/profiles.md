> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Guardrail profiles

> Create profiles for Phinite, AWS Bedrock, Azure Content Safety, and GCP Model Armor.

Create profiles from Studio **Governance → LLM Governance → New profile**. Wizard steps: **Provider** → **Configure**.

## Step 1 — Provider

Pick one card, then **Continue**:

| Provider                 | Description (UI)                                                             | Credentials                                          |
| ------------------------ | ---------------------------------------------------------------------------- | ---------------------------------------------------- |
| **Phinite**              | Phinite’s built-in guard library (prompt injection, toxicity, PII, and more) | None — see [Phinite Guardrails](/guardrails/phinite) |
| **AWS Bedrock**          | Topic denial, PII redaction, word filters, content policies                  | Access key ID, Secret access key, Region             |
| **Azure Content Safety** | Hate, self-harm, sexual content, violence in text                            | Endpoint URL, API key                                |
| **GCP Model Armor**      | Sanitizes prompts/responses with a Model Armor template                      | Service account JSON, Project ID, Location           |

## Step 2 — Configure (all providers)

1. Enter **Profile name** (placeholder `e.g. Production guards`).
2. Follow the provider-specific path below.
3. Click **Save profile** (optional **Test connection** for non-Phinite when supported).

Profile field `on_violation` defaults to **block\_turn**.

***

## Path — Phinite

See the full Control library walkthrough: [Phinite Guardrails](/guardrails/phinite).

Summary: open **Control library** → filter by **Compliance framework** → enable controls under **Before the model** / **After the model** / **Session data** → set **Block** / **Log only** / **Redact** per control → **Save profile**.

***

## Path — AWS Bedrock / Azure / GCP

### Credentials

1. Section **Credentials**.
2. **How do you want to provide secrets?**
   * **Enter credentials** — fill fields inline
   * **Use Environment secret** — pick a workspace env secret (`envencryptid`)
3. Fill required fields:

#### AWS Bedrock

| Field               | Label                         |
| ------------------- | ----------------------------- |
| `access_key_id`     | **Access key ID**             |
| `secret_access_key` | **Secret access key**         |
| `region`            | **Region** (e.g. `us-east-1`) |

**Resource**

| Field                  | Label                 |
| ---------------------- | --------------------- |
| `guardrail_identifier` | **Guardrail ID**      |
| `guardrail_version`    | **Guardrail version** |

Needs IAM permission `bedrock:ApplyGuardrail`. Topic/PII filters stay in the AWS console.

#### Azure Content Safety

| Field      | Label            |
| ---------- | ---------------- |
| `endpoint` | **Endpoint URL** |
| `api_key`  | **API key**      |

From Azure Portal → Content Safety (or Cognitive Services) → Keys and Endpoint.

#### GCP Model Armor

| Field                | Label                    |
| -------------------- | ------------------------ |
| Service account JSON | **Service account JSON** |
| `project_id`         | **Project ID**           |
| Location             | **Location**             |

**Resource:** **Template / policy ID**.

### Test and docs

* **Test connection** when the provider supports it and credentials are ready.
* **Documentation** / **{Provider} setup guide** opens the in-product credentials guide.

### Save

**Save profile** → profile appears in **Library** with the provider badge.

***

## After create

1. [Attach](/guardrails/attach) to the flow or an agent.
2. Confirm **In Use** on **LLM Governance**.
3. **Save** + **Build** the Agent Graph.

## Related

* [Phinite Guardrails](/guardrails/phinite)
* [Guardrails setup](/guardrails/setup)
* [Attach](/guardrails/attach)
