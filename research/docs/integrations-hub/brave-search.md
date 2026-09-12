> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Brave Search

> Run privacy-first web, news, and image searches with rich snippets,

## Overview

Phinite's **Brave Search** predefined tool lets workspace agent graphs call Brave Search APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Run privacy-first web, news, and image searches with rich snippets,

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

1. Sign up at api.search.brave.com and create an API key.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Brave Search**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **BraveSearchTool** (or search for Brave Search)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 7 subtools for Brave Search:

* Web Search: Search the web using Brave Search. Returns web search results including
* Ai Grounding: Perform AI grounding search using Brave Search. Returns enhanced search
* Image Search: Search for images using Brave Search. Returns image search results
* Video Search: Search for videos using Brave Search. Returns video search results
* News Search: Search for news articles using Brave Search. Returns news search results
* Suggest: Get search suggestions/autocomplete suggestions for a query prefix.
* Spellcheck: Check spelling and get corrections for a query string.

## Documentation & resources

* Official documentation: `https://api.search.brave.com/app/documentation`
* Phinite documentation: [Brave Search](https://docs.phinite.ai/docs/integrations-hub/brave-search)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
