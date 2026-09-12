> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Tool authoring methods

> Build custom tools with Dev Studio Copilot or manual Python.

Choose how you author a custom tool before [testing and publishing](/devstudio/custom-tools).

## Copilot-generated tools

Dev Studio **Copilot** drafts Python handlers from a natural-language spec.

<Frame caption="Dev Studio Copilot">
  <img src="https://mintcdn.com/phinite/v6GjfYwnktkwjIBa/images/image.png?fit=max&auto=format&n=v6GjfYwnktkwjIBa&q=85&s=d32bc55661d06ec22f15be898a2e1e97" alt="Copilot tool generation panel" width="2914" height="1786" data-path="images/image.png" />
</Frame>

1. Open **Dev Studio** from workspace **Tools**.
2. Describe purpose, **inputs**, **outputs**, and target system.
3. Review generated handler, parameters, and error handling.
4. Edit validation and return shape to match the [tool contract](/devstudio/custom-tools#tool-contract).
5. [Test](/devstudio/custom-tools#test-tools), then **Publish**.

<Tip>
  Copilot scaffolds need review before production. Write a clear tool **description** — agents use it to decide when to call the tool.
</Tip>

## Manual Python

Use manual coding when Copilot or a [predefined integration](/devstudio/prebuilt-tools) is not enough.

See the full [tool contract and example](/devstudio/custom-tools#tool-contract) on the Custom tools page.

## When to use which

| Method      | Best for                                         |
| ----------- | ------------------------------------------------ |
| **Copilot** | Quick CRUD wrappers, prototypes                  |
| **Manual**  | Complex rules, compliance-sensitive logic        |
| **Both**    | Generate scaffold, then hand-edit before publish |

## Related

* [Custom tools](/devstudio/custom-tools)
* [Tools & Dev Studio overview](/devstudio/overview)
