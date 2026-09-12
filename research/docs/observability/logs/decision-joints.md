> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Decision Joints & Exceptions

> Analyze branching decisions and exceptions in Agent Graph runs.

Decision joints explain **why** a graph took a particular edge; exception entries capture tool and node failures.

## Decision analysis

* Which conditional edge fired and which variables influenced it
* Inputs present at the branch point

## Exception tracking

* Error messages and stack traces from tools or nodes
* Correlation with integration credentials or env misconfiguration

<Note>
  Decision logs reflect graph design in [Graph Studio](/graph-studio/overview). They do not evaluate workspace RBAC permissions.
</Note>

## Related

* [Conditional edges](/graph-studio/connections)
* [Error codes](/support/error-codes)
