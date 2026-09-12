> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Firecrawl

> Scrape pages into clean markdown, crawl domains, extract structured

## Overview

Phinite's **Firecrawl** predefined tool lets workspace agent graphs call Firecrawl APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Scrape pages into clean markdown, crawl domains, extract structured

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

1. Sign up at firecrawl.dev and copy your API key from the dashboard.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Firecrawl**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **FirecrawlTool** (or search for Firecrawl)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 8 subtools for Firecrawl:

* Scrape: Scrape a single URL and convert it to markdown, HTML, or other formats.
* Crawl: Crawl a website starting from a URL. Blocks until completion and returns
* Start Crawl: Start a crawl job without waiting. Returns a job ID that can be used
* Get Crawl Status: Check the status of a crawl job by its ID.
* Cancel Crawl: Cancel a running crawl job by its ID.
* Map Website: Generate a list of URLs from a website. Useful for getting a site structure
* Batch Scrape: Scrape multiple URLs in batch. Blocks until completion and returns
* Search: Search the web using Firecrawl's search functionality.

## Documentation & resources

* Official documentation: `https://docs.firecrawl.dev/`
* Phinite documentation: [Firecrawl](https://docs.phinite.ai/docs/integrations-hub/firecrawl)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
