> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Guardrails overview

> LLM safety — Studio LLM Governance and workspace Guardrails analytics.

**Guardrails** inspect prompts and model output for injection, toxicity, PII, and related risks before a turn completes.

| Surface                                | Role                                                   |
| -------------------------------------- | ------------------------------------------------------ |
| Studio **Governance → LLM Governance** | Create profiles, Control library, attach to flow/agent |
| Workspace **Governance → Guardrails**  | Analytics (Blocked / Logged, Decisions / Triggers)     |

Pro+ · `workspace.governance.*`. There is no separate Studio Guardrails rail in this IA.

<CardGroup cols={2}>
  <Card title="Phinite Guardrails" href="/guardrails/phinite">
    Built-in Control library — Before / After the model, Session data.
  </Card>

  <Card title="All providers" href="/guardrails/profiles">
    Phinite, AWS Bedrock, Azure Content Safety, GCP Model Armor.
  </Card>

  <Card title="Attach" href="/guardrails/attach">
    Entire flow or one agent.
  </Card>

  <Card title="Setup guide" href="/guardrails/setup">
    End-to-end create → attach → verify.
  </Card>
</CardGroup>

<Frame caption="Studio LLM Governance">
  <img src="https://mintcdn.com/phinite/1VctjSmXCA5rNwu2/images/v2/governance/06-studio-llm.png?fit=max&auto=format&n=1VctjSmXCA5rNwu2&q=85&s=ce760fc31822cfaf2caec100a8e48a6d" alt="LLM Governance library" width="1440" height="900" data-path="images/v2/governance/06-studio-llm.png" />
</Frame>

## Providers

| Provider                 | What it is                                                         |
| ------------------------ | ------------------------------------------------------------------ |
| **Phinite**              | Built-in guard library (prompt injection, toxicity, PII, and more) |
| **AWS Bedrock**          | Bedrock Guardrails — topics, PII, word filters, content policies   |
| **Azure Content Safety** | Hate, self-harm, sexual, violence detection                        |
| **GCP Model Armor**      | Prompt/response sanitization via Model Armor template              |

## Quick start

1. [Create a Phinite profile](/guardrails/phinite) (fastest path).
2. [Attach](/guardrails/attach) to the flow.
3. Follow [Guardrails setup](/guardrails/setup) to verify.

## Related

* [Governance](/governance/overview) — tool policies (separate binding type)
* [Observability Insights](/observability/insights)
