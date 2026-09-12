> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Common Build Failures

> Diagnose and fix common Agent Graph build failures.

**Build** freezes an Agent Graph plus pinned tool versions into an immutable **Agent Build**. Failures usually mean missing publish steps or failing tests.

## Frequent issues

| Symptom                  | Likely cause                                                          |
| ------------------------ | --------------------------------------------------------------------- |
| Build button disabled    | Graph not **Saved** or validation errors on canvas                    |
| Unpublished tools listed | Tool lacks a published version in Dev Studio                          |
| Env export warnings      | Missing [env variables](/configure/env-variables) referenced by tools |
| Test failures            | Tool test failed in target environment                                |

## Resolution checklist

1. **Save** the graph in Graph Studio; resolve canvas validation errors.
2. **Publish** all tools referenced on agent nodes ([Tools & Dev Studio](/devstudio/overview)).
3. Run tool tests with realistic inputs in Dev/UAT ([Custom tools — Test](/devstudio/custom-tools#test-tools)).
4. Add version notes for each changed tool.
5. Verify credentials per environment before rebuilding for Prod.

<Note>
  Builds capture graph + tool versions together. Fixing a tool requires a new publish **and** a new build before redeploy.
</Note>

## Related

* [Builds overview](/builds/overview)
* [Build export](/configure/build-export)
