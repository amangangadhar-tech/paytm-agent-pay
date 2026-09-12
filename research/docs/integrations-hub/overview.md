> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Integrations Hub

> Connect channels and predefined tools for Conversational and Autonomous Agent Graphs.

The **Integrations Hub** catalogs every connector your **Agent Graphs** can use — channel ingress for Conversational graphs and predefined tool actions for both graph types.

<CardGroup cols={2}>
  <Card title="Channels overview" icon="bolt" href="/channels/overview">
    Deploy Conversational graphs to WhatsApp, Slack, Teams, voice, and email.
  </Card>

  <Card title="Configure integrations" icon="sliders" href="/configure/integrations">
    Authenticate connectors once per workspace.
  </Card>

  <Card title="Graph Studio tools" icon="link" href="/graph-studio/interface/node-library">
    Enable subtools on agent nodes after connecting.
  </Card>

  <Card title="Tools & Dev Studio" icon="wrench" type="note" href="/devstudio/overview">
    Custom Python tools — Copilot, test, publish, and attach to agent nodes.
  </Card>
</CardGroup>

## Two integration surfaces

| Surface              | Purpose                                   | Graph type                    |
| -------------------- | ----------------------------------------- | ----------------------------- |
| **Channels**         | Inbound/outbound messaging ingress        | Conversational                |
| **Predefined Tools** | Third-party API actions inside tool nodes | Conversational and Autonomous |

<Frame caption="Integrations Hub — channels, triggers, and predefined tools">
  <img src="https://mintcdn.com/phinite/spbPnSZPWmAXAKhH/images/Integrations-Overview.png?fit=max&auto=format&n=spbPnSZPWmAXAKhH&q=85&s=1faf5d75f73b036cb5929544b68e6fc9" alt="Integrations Hub overview" width="1917" height="873" data-path="images/Integrations-Overview.png" />
</Frame>

<Tip>
  Connect an integration once under workspace **Integrations**, then attach it to Agent Graph nodes in Graph Studio or enable subtools during **Build**.
</Tip>

## Channels

Channel docs cover **Deploy to Channel** for Conversational Agent Graphs. Predefined tools with the same vendor name (for example WhatsApp) have separate API documentation under Predefined Tools below.

<CardGroup cols={3}>
  <Card title="Email" icon="envelope" href="/channels/email">
    Configure email channel for inbound/outbound message handling.
  </Card>

  <Card title="Chat (AI)" icon="comments" href="/integrations-hub/chat-ai">
    AI chat actions and conversational AI integration.
  </Card>

  <Card title="Slack" icon="slack" href="/channels/slack">
    Connect Slack as a conversational channel.
  </Card>

  <Card title="Microsoft Teams" icon="microsoft" href="/channels/teams">
    Connect your agentic chatbot to Microsoft Teams.
  </Card>

  <Card title="Twilio Voice" icon="phone" href="/channels/twilio">
    Connect Twilio for voice assistants.
  </Card>

  <Card title="WhatsApp" icon="whatsapp" href="/channels/whatsapp">
    Connect WhatsApp for conversational assistants.
  </Card>
</CardGroup>

## Predefined Tools

### CRM & Sales

<CardGroup cols={3}>
  <Card title="Apollo.io" icon="https://storage.googleapis.com/phinite-public/integrations/apollo-io.svg" href="/integrations-hub/apollo-io">
    Enrich people and organizations, search prospects, and manage accounts, contacts, and deals via the Apollo.io API.
  </Card>

  <Card title="Close CRM" icon="https://storage.googleapis.com/phinite-public/integrations/close-crm.svg" href="/integrations-hub/close-crm">
    Manage a Close CRM account — leads, contacts, opportunities, tasks, and activities (notes, calls, emails, SMS, meetin...
  </Card>

  <Card title="Copper CRM" icon="https://storage.googleapis.com/phinite-public/integrations/copper-crm.svg" href="/integrations-hub/copper-crm">
    Manage a Copper CRM account — people, companies, leads, opportunities, tasks, projects, activities, plus account/conf...
  </Card>

  <Card title="Freshsales CRM" icon="https://storage.googleapis.com/phinite-public/integrations/freshsales-crm.svg" href="/integrations-hub/freshsales">
    Manage Freshsales CRM contacts, accounts, deals, notes, tasks, and perform search via the Freshsales REST API.
  </Card>

  <Card title="HubSpot CRM" icon="https://storage.googleapis.com/phinite-public/integrations/hubspot.svg" href="/integrations-hub/hubspot-crm">
    Create, read, update, delete, and search HubSpot CRM records (contacts, companies, deals, tickets) and retrieve objec...
  </Card>

  <Card title="Insightly" icon="https://storage.googleapis.com/phinite-public/integrations/insightly.svg" href="/integrations-hub/insightly">
    Manage Insightly CRM records — contacts, organisations, leads, opportunities, projects, tasks, and events — via the I...
  </Card>

  <Card title="Microsoft Dynamics 365" icon="https://storage.googleapis.com/phinite-public/integrations/dynamics-365.svg" href="/integrations-hub/microsoft-dynamics-365">
    Manage Microsoft Dynamics 365 Business Central companies, customers, vendors, items, sales/purchase invoices, sales o...
  </Card>

  <Card title="Outreach" icon="https://storage.googleapis.com/phinite-public/integrations/outreach.svg" href="/integrations-hub/outreach">
    Manage Outreach.io sales-engagement resources — prospects, accounts, sequences, sequence enrollments, mailboxes, task...
  </Card>

  <Card title="Pipedrive" icon="https://storage.googleapis.com/phinite-public/integrations/pipedrive.svg" href="/integrations-hub/pipedrive">
    Manage Pipedrive CRM deals, persons, organizations, activities, notes, pipelines, leads, products, and deal-products ...
  </Card>

  <Card title="Salesforce" icon="https://storage.googleapis.com/phinite-public/salesforce.svg" href="/integrations-hub/salesforce">
    Connect Salesforce to create and update leads, accounts, and opportunities,
  </Card>

  <Card title="Salesloft" icon="https://storage.googleapis.com/phinite-public/integrations/salesloft.svg" href="/integrations-hub/salesloft">
    Manage Salesloft sales-engagement data — people, accounts, cadences and memberships, users, notes, tasks, calls, emai...
  </Card>
</CardGroup>

### Marketing & Social

<CardGroup cols={3}>
  <Card title="ActiveCampaign" icon="https://storage.googleapis.com/phinite-public/integrations/activecampaign.svg" href="/integrations-hub/activecampaign">
    Manage an ActiveCampaign account — contacts, tags, lists, deals, accounts, plus contact-tag/list associations and cus...
  </Card>

  <Card title="Customer.io" icon="https://storage.googleapis.com/phinite-public/integrations/customer-io.svg" href="/integrations-hub/customer-io">
    Manage Customer.io people, events, devices, segments, campaigns, transactional messages, and message history via the ...
  </Card>

  <Card title="Instagram" icon="https://storage.googleapis.com/phinite-public/integrations/instagram.svg" href="/integrations-hub/instagram">
    Manage an Instagram Business or Creator account — profile, media publishing, comments, insights, hashtags, stories, a...
  </Card>

  <Card title="SendGrid" icon="https://storage.googleapis.com/phinite-public/integrations/sendgrid.svg" href="/integrations-hub/sendgrid">
    Send emails, manage contacts and lists, create single sends, retrieve templates, handle suppressions, and view stats ...
  </Card>
</CardGroup>

### Customer Support

<CardGroup cols={3}>
  <Card title="Front" icon="https://storage.googleapis.com/phinite-public/integrations/front.svg" href="/integrations-hub/front">
    Manage Front shared-inbox communication — conversations, messages and replies, contacts, inboxes, channels, teammates...
  </Card>

  <Card title="Gorgias" icon="https://storage.googleapis.com/phinite-public/integrations/gorgias.svg" href="/integrations-hub/gorgias">
    Manage Gorgias helpdesk resources — tickets, ticket messages, customers, users, tags, and views — via the Gorgias RES...
  </Card>

  <Card title="Help Scout" icon="https://storage.googleapis.com/phinite-public/integrations/helpscout.svg" href="/integrations-hub/helpscout">
    Manage Help Scout Mailbox support resources — conversations, threads, customers, mailboxes, users, and tags — via the...
  </Card>

  <Card title="Intercom" icon="https://storage.googleapis.com/phinite-public/integrations/intercom.svg" href="/integrations-hub/intercom">
    Manage Intercom contacts, companies, conversations, notes, tags, admins, and help-center articles via the Intercom RE...
  </Card>

  <Card title="Kustomer" icon="https://storage.googleapis.com/phinite-public/integrations/kustomer.svg" href="/integrations-hub/kustomer">
    Manage a Kustomer account — customers, conversations, messages, notes, tasks, companies, tags, teams, users, and shor...
  </Card>

  <Card title="Zoho Desk" icon="https://storage.googleapis.com/phinite-public/integrations/zoho-desk.svg" href="/integrations-hub/zoho-desk">
    Manage Zoho Desk help-desk tickets, comments, contacts, accounts, agents, departments, and knowledge-base articles vi...
  </Card>
</CardGroup>

### Communication & Messaging

<CardGroup cols={3}>
  <Card title="Facebook Messenger" icon="https://storage.googleapis.com/phinite-public/integrations/facebook-messenger.svg" href="/integrations-hub/facebook-messenger">
    Send messages and manage a Facebook Messenger bot via the Messenger Platform — text, attachments, quick replies, temp...
  </Card>

  <Card title="Gmail" icon="https://storage.googleapis.com/phinite-public/gmail.svg" href="/integrations-hub/gmail">
    Read, search, draft, send, and reply to emails...
  </Card>

  <Card title="Google Meet" icon="https://storage.googleapis.com/phinite-public/integrations/google-meet.svg" href="/integrations-hub/google-meet">
    Manage Google Meet spaces, conference records, participants, recordings, and transcripts via the Google Meet REST API...
  </Card>

  <Card title="Microsoft Teams" icon="https://storage.googleapis.com/phinite-public/integrations/integration-icons.svg" href="/integrations-hub/microsoft-teams">
    Manage Microsoft Teams teams, channels, messages, chats, members, online meetings, and Planner tasks via the Microsof...
  </Card>

  <Card title="Slack" icon="https://storage.googleapis.com/phinite-public/integrations/slack.svg" href="/integrations-hub/slack">
    Send and manage Slack messages, reactions, channels, users, scheduled messages, and pins via the Slack Web API.
  </Card>

  <Card title="Microsoft Teams (Legacy)" icon="https://storage.googleapis.com/phinite-public/teams.svg" href="/integrations-hub/teams">
    Send messages and approvals in Microsoft Teams, integrate Graph permissions,
  </Card>

  <Card title="Telegram" icon="https://storage.googleapis.com/phinite-public/telegram.svg" href="/integrations-hub/telegram">
    Send and receive Telegram bot messages, automate support, deliver notifications,
  </Card>

  <Card title="Twilio" icon="https://storage.googleapis.com/phinite-public/integrations/twilio.svg" href="/integrations-hub/twilio">
    Send SMS/MMS, make voice calls, manage recordings, accounts, phone numbers, conferences, and Conversations via the Tw\...
  </Card>

  <Card title="Vonage" icon="https://storage.googleapis.com/phinite-public/integrations/vonage.svg" href="/integrations-hub/vonage">
    Send SMS and multi-channel messages, run phone verification (OTP) and number insight lookups, and manage account bala...
  </Card>

  <Card title="WhatsApp" icon="https://storage.googleapis.com/phinite-public/integrations/whatsapp-business.svg" href="/integrations-hub/whatsapp">
    Send WhatsApp messages (text, media, location, contacts, reactions, interactive messages, templates) and manage media...
  </Card>

  <Card title="Zoom" icon="https://storage.googleapis.com/phinite-public/integrations/zoom.svg" href="/integrations-hub/zoom">
    Manage Zoom meetings, users, webinars, cloud recordings, chat channels/messages, and past-meeting participants via th...
  </Card>
</CardGroup>

### Productivity & Collaboration

<CardGroup cols={3}>
  <Card title="Google Calendar" icon="https://storage.googleapis.com/phinite-public/google-calendar.svg" href="/integrations-hub/google-calendar">
    Create, update, and query events, check availability, send invites,
  </Card>

  <Card title="Google Drive" icon="https://storage.googleapis.com/phinite-public/google-drive.svg" href="/integrations-hub/google-drive">
    Upload, download, search, and share files, manage folders and permissions,
  </Card>

  <Card title="Google Sheets" icon="https://storage.googleapis.com/phinite-public/google-sheets.svg" href="/integrations-hub/google-sheets">
    Read, write, and append spreadsheet rows, format ranges, and automate
  </Card>

  <Card title="Notion" icon="https://storage.googleapis.com/phinite-public/notion.svg" href="/integrations-hub/notion">
    Read and update Notion pages and databases, search content, append
  </Card>

  <Card title="Zoho Office Integrator" icon="https://storage.googleapis.com/phinite-public/integrations/zoho-office.svg" href="/integrations-hub/zoho-office-integrator">
    Create, edit, preview, convert, and compare documents, spreadsheets, and presentations via Zoho Office Integrator.
  </Card>
</CardGroup>

### Analytics & Business Intelligence

<CardGroup cols={3}>
  <Card title="Amplitude" icon="https://storage.googleapis.com/phinite-public/integrations/amplitude.svg" href="/integrations-hub/amplitude">
    Manage Amplitude event tracking, analytics queries, taxonomy, cohorts, and user lookups via the Amplitude REST APIs.
  </Card>

  <Card title="Google BigQuery" icon="https://storage.googleapis.com/phinite-public/bigquery.svg" href="/integrations-hub/google-bigquery">
    Query BigQuery datasets with SQL, inspect tables, export results, and
  </Card>

  <Card title="Looker" icon="https://storage.googleapis.com/phinite-public/integrations/looker.svg" href="/integrations-hub/looker">
    Query Looker data, manage Looks, dashboards, folders, users, and scheduled plans on a Looker BI instance via the Look...
  </Card>

  <Card title="Mixpanel" icon="https://storage.googleapis.com/phinite-public/integrations/mixpanel.svg" href="/integrations-hub/mixpanel">
    Manage Mixpanel event tracking, identity, user/group profiles, analytics queries, cohorts, annotations, and lookup ta...
  </Card>

  <Card title="Power BI" icon="https://storage.googleapis.com/phinite-public/integrations/power-bi.svg" href="/integrations-hub/power-bi">
    Manage Power BI datasets, reports, dashboards, workspaces (groups), dataflows, and gateways via the Power BI REST API.
  </Card>

  <Card title="Tableau" icon="https://storage.googleapis.com/phinite-public/integrations/tableau.svg" href="/integrations-hub/tableau">
    Manage Tableau workbooks, datasources, views, users, groups, and projects via the Tableau REST API.
  </Card>
</CardGroup>

### Databases & Data Storage

<CardGroup cols={3}>
  <Card title="Azure Blob Storage" icon="https://storage.googleapis.com/phinite-public/integrations/azure.svg" href="/integrations-hub/azure-blob">
    Manage Azure Blob Storage containers and blobs via the Azure Blob Storage REST API.
  </Card>

  <Card title="Azure Cosmos DB" icon="https://storage.googleapis.com/phinite-public/integrations/azure.svg" href="/integrations-hub/azure-cosmos-db">
    Manage Azure Cosmos DB containers and items (documents) via the Cosmos DB REST API.
  </Card>

  <Card title="MongoDB" icon="https://storage.googleapis.com/phinite-public/mongodb.svg" href="/integrations-hub/mongodb">
    Perform CRUD and aggregations on MongoDB collections, manage indexes,
  </Card>

  <Card title="MySQL" icon="https://storage.googleapis.com/phinite-public/integrations/mysql.svg" href="/integrations-hub/mysql">
    Execute queries, manage tables and schema, and perform CRUD operations on a MySQL database via async connection.
  </Card>

  <Card title="Redis" icon="https://storage.googleapis.com/phinite-public/integrations/redis.svg" href="/integrations-hub/redis">
    Run Redis operations — strings, hashes, lists, sets, sorted sets, pub/sub, TTL management, and server info via the Re...
  </Card>
</CardGroup>

### Cloud & DevOps

<CardGroup cols={3}>
  <Card title="Azure" icon="https://storage.googleapis.com/phinite-public/integrations/azure.svg" href="/integrations-hub/azure">
    Manage Azure resources via the Azure Resource Manager REST API — subscriptions, resource groups, virtual machines, st...
  </Card>

  <Card title="Docker" icon="https://storage.googleapis.com/phinite-public/integrations/docker.svg" href="/integrations-hub/docker">
    Manage Docker containers, images, networks, and volumes on a remote Docker daemon via the Docker Engine REST API.
  </Card>

  <Card title="GitHub" icon="https://storage.googleapis.com/phinite-public/github.svg" href="/integrations-hub/github">
    'Manage repositories, issues, and pull requests: create tickets, comment,
  </Card>

  <Card title="Google Cloud" icon="https://storage.googleapis.com/phinite-public/integrations/google-cloud.svg" href="/integrations-hub/google-cloud">
    Manage Google Cloud Platform resources — Compute Engine VMs, Cloud Storage buckets and objects, Cloud SQL instances, ...
  </Card>

  <Card title="Jira" icon="https://storage.googleapis.com/phinite-public/integrations/jira.svg" href="/integrations-hub/jira">
    Create, search, update, and transition Jira issues, add comments, and
  </Card>

  <Card title="ServiceNow" icon="https://storage.googleapis.com/phinite-public/integrations/servicenow.svg" href="/integrations-hub/servicenow">
    Manage ServiceNow incidents, change requests, problems, users, knowledge articles, CMDB CIs, and any table record via...
  </Card>
</CardGroup>

### Identity & Security

<CardGroup cols={3}>
  <Card title="Auth0" icon="https://storage.googleapis.com/phinite-public/integrations/auth0.svg" href="/integrations-hub/auth0">
    Manage an Auth0 tenant via the Management API v2 — users, roles, user blocks, applications, connections, organization...
  </Card>

  <Card title="Okta" icon="https://storage.googleapis.com/phinite-public/integrations/okta.svg" href="/integrations-hub/okta">
    Manage Okta users, groups, applications, user lifecycle, and system log events via the Okta Management API.
  </Card>
</CardGroup>

### Finance & Payments

<CardGroup cols={3}>
  <Card title="Braintree" icon="https://storage.googleapis.com/phinite-public/integrations/braintree-light.svg" href="/integrations-hub/braintree">
    Interact with the Braintree (PayPal) GraphQL API — run GraphQL queries/mutations plus convenience operations for tran...
  </Card>

  <Card title="Chargebee" icon="https://storage.googleapis.com/phinite-public/integrations/chargebee.svg" href="/integrations-hub/chargebee">
    Manage Chargebee billing — customers, subscriptions, invoices, transactions, credit notes, and the product catalog (i...
  </Card>

  <Card title="PayPal" icon="https://storage.googleapis.com/phinite-public/integrations/paypal.svg" href="/integrations-hub/paypal">
    Manage PayPal operations — orders, payouts, invoices, products, billing plans, and subscriptions via the PayPal REST ...
  </Card>

  <Card title="Razorpay" icon="https://storage.googleapis.com/phinite-public/integrations/razorpay.svg" href="/integrations-hub/razorpay">
    Manage Razorpay orders, payments, refunds, customers, items, and settlements via the Razorpay REST API.
  </Card>

  <Card title="Recurly" icon="https://storage.googleapis.com/phinite-public/integrations/recurly.svg" href="/integrations-hub/recurly">
    Manage a Recurly subscription-billing site — accounts, subscriptions, plans, invoices, transactions, and coupons — vi...
  </Card>

  <Card title="Square" icon="https://storage.googleapis.com/phinite-public/integrations/square.svg" href="/integrations-hub/square">
    Manage Square payments, refunds, orders, catalog, customers, cards, invoices, payment links, subscriptions, inventory...
  </Card>
</CardGroup>

### E-Commerce & Shipping

<CardGroup cols={3}>
  <Card title="ShipStation" icon="https://storage.googleapis.com/phinite-public/integrations/shipstation.svg" href="/integrations-hub/shipstation">
    Manage ShipStation shipping and fulfillment — orders, shipments and labels, carriers, products, customers, warehouses...
  </Card>

  <Card title="Shopify" icon="https://storage.googleapis.com/phinite-public/integrations/shopify.svg" href="/integrations-hub/shopify">
    Manage a Shopify store — create, update, and retrieve products, orders, and customers via the Shopify Admin REST API.
  </Card>
</CardGroup>

### HR Management

<CardGroup cols={3}>
  <Card title="Workday HCM" icon="https://storage.googleapis.com/phinite-public/integrations/workday.svg" href="/integrations-hub/workday-hcm">
    Access Workday HCM data — workers, organizations, job profiles, positions, locations, time off, and business titles v...
  </Card>
</CardGroup>

### Forms & Surveys

<CardGroup cols={3}>
  <Card title="Tally" icon="https://storage.googleapis.com/phinite-public/integrations/tally.svg" href="/integrations-hub/tally">
    Manage Tally forms, submissions, webhooks, workspaces, and organization members via the Tally REST API.
  </Card>
</CardGroup>

### AI & Developer Tools

<CardGroup cols={3}>
  <Card title="API" icon="https://storage.googleapis.com/phinite-public/api.svg" href="/integrations-hub/api">
    Connect any REST API with configurable auth, headers, and retries,
  </Card>

  <Card title="Brave Search" icon="https://storage.googleapis.com/phinite-public/brave.svg" href="/integrations-hub/brave-search">
    Run privacy-first web, news, and image searches with rich snippets,
  </Card>

  <Card title="Firecrawl" icon="https://storage.googleapis.com/phinite-public/firecrawl.svg" href="/integrations-hub/firecrawl">
    Scrape pages into clean markdown, crawl domains, extract structured
  </Card>

  <Card title="MCP Client" icon="https://storage.googleapis.com/phinite-public/api.svg" href="/integrations-hub/mcp-client-tool">
    Dynamically proxy any tool exposed by a remote MCP server over SSE or Streamable HTTP transport with optional authent...
  </Card>
</CardGroup>
