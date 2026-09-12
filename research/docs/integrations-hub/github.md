> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# GitHub

> 'Manage repositories, issues, and pull requests: create tickets, comment,

## Overview

Phinite's **GitHub** predefined tool lets workspace agent graphs call GitHub APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

'Manage repositories, issues, and pull requests: create tickets, comment,

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* See integration configuration fields in Phinite

## Setup steps

1. Create a GitHub personal access token or GitHub App with repository permissions.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **GitHub**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **GithubTool** (or search for GitHub)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 11 subtools for GitHub:

* Search Repositories: Search for repositories on GitHub
* List Repositories: List all repositories for the authenticated user
* Get Repository: Get details of a specific repository
* Create Repository: Create a new repository on GitHub
* Create Issue: Create an issue in a repository
* Get Pull Request: Get details of a specific pull request
* Create Pull Request: Create a new pull request in a repository
* List Issues: List issues for a repository with pagination
* Get File Content: Get the content of a file in a repository
* Create File: Create a new file in a repository
* Search Code: Search for code in GitHub repositories

## Documentation & resources

* Official documentation: `https://docs.github.com/en/rest`
* Phinite documentation: [GitHub](https://docs.phinite.ai/docs/integrations-hub/github)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
