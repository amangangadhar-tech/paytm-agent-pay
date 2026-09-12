> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Web Chat

> Embed web chat and configure appearance for a Conversational Agent Graph.

<Note>
  Web chat deploys a **Conversational Agent Graph** via an embed script. Create an **Agent Build** and use **Deploy to Channel** to map the widget to **DEV / UAT / PROD**.
</Note>

## Set up web chat

1. **Save** your Conversational Agent Graph and create an **Agent Build** ([Builds overview](/builds/overview)).
2. Open workspace **Integrations** → **Channels** → **Web Chat** (or the web chat option in your tenant).
3. Create a channel configuration — note webhook or embed settings for **Development** first.
4. In Graph Studio, **Deploy** → **Deploy to Channel** — select web chat and assign the build to **DEV**.
5. Add the embed script to your site (copy from the integration or deploy confirmation).
6. Configure appearance — colors, logo, position, and greeting copy in the channel settings.
7. Test the widget in DEV; promote build assignment to **UAT** / **PROD** when ready.

<Frame caption="Web chat channel configuration">
  <img src="https://mintcdn.com/phinite/k_FcFyxdDajW0von/images/webchat.png?fit=max&auto=format&n=k_FcFyxdDajW0von&q=85&s=0f9bb67fadf2800d7d68978b327dcc09" alt="Web chat integration settings" width="2920" height="1816" data-path="images/webchat.png" />
</Frame>

<Tip>
  Test in **DEV** before exposing the embed on production pages. Confirm env variables used by the graph resolve in the DEV column.
</Tip>

## Related

* [Deploy to channel](/agents/deploy-channel)
* [Supported channels](/channels/supported)
* [Build environments](/builds/environments)
