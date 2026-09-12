> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Guardrails setup

> End-to-end — create a profile (Phinite or cloud), attach it, verify In Use.

LLM guardrails are configured in Studio under **Governance → LLM Governance** (not a separate Studio rail). Workspace **Governance → Guardrails** is analytics.

## Prerequisites

* Pro+ (same Governance entitlement)
* `workspace.governance.create` / `attach`
* For AWS/Azure/GCP: credentials or env secrets ready

## Full path — Phinite (recommended start)

1. Open Graph Studio → **Governance** → **LLM Governance**.
2. **New profile**.
3. **Provider** → select **Phinite** → **Continue**.
4. **Configure** → set **Profile name**.
5. Under **Control library**:
   * Optionally filter **Compliance framework**.
   * Enable controls in **Before the model**, **After the model**, **Session data**.
   * Per control: toggle on, choose **Block** / **Log only** / **Redact**, set threshold if shown.
6. **Save profile**.
7. **Attach** → **Entire flow** or **One agent** → select profile → **Attach guardrails**.
8. Confirm **In Use (N)** and Summary **LLM Governance** card shows attached.
9. **Save** the graph → **Build** → exercise a turn that should block or log.

Detail: [Phinite Guardrails](/guardrails/phinite).

## Full path — cloud provider (AWS / Azure / GCP)

1. **New profile** → pick **AWS Bedrock**, **Azure Content Safety**, or **GCP Model Armor** → **Continue**.
2. **Profile name**.
3. **Credentials** → **Enter credentials** or **Use Environment secret**.
4. Fill credential + **Resource** fields ([Profiles](/guardrails/profiles)).
5. Optional **Test connection**.
6. **Save profile**.
7. **Attach** as above.
8. **Save** + **Build**.

Cloud consoles still own topic lists, PII policies, and Model Armor templates — Phinite stores the binding and credentials reference.

## Attach-only (existing profile)

1. **LLM Governance** → **Library**.
2. **Attach** on a row (or header **Attach**).
3. Modal **Attach guardrails** → scope + profiles → confirm.

## Verify

| Check              | Where                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------- |
| Profile in library | Studio **LLM Governance** → **Library**                                               |
| Bound to flow      | **In Use** + Summary card                                                             |
| Runtime activity   | Workspace **Governance → Guardrails** analytics                                       |
| Session impact     | [Observability Insights](/observability/insights) (failures / policy-related signals) |

## Checklist

* [ ] Profile saved
* [ ] Attached to flow or agent
* [ ] Graph saved and built
* [ ] Tested a violating turn in DEV

## Related

* [Guardrails overview](/guardrails/overview)
* [Phinite](/guardrails/phinite)
* [Profiles](/guardrails/profiles)
* [Attach](/guardrails/attach)
* [Governance setup](/governance/setup)
