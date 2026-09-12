> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# WhatsApp

> Send WhatsApp messages (text, media, location, contacts, reactions, interactive messages, templates) and manage media via the WhatsApp Business Cloud API.

## Overview

Phinite's **WhatsApp** predefined tool lets workspace agent graphs call WhatsApp APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Send WhatsApp messages (text, media, location, contacts, reactions, interactive messages, templates) and manage media via the WhatsApp Business Cloud API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Access Token `access_token` (required)
* Phone Number ID `phone_number_id` (required)
* Graph API Version `graph_version` (optional)

## Setup steps

1. Configure WhatsApp Business via Meta or Twilio and obtain phone number ID and access token.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **WhatsApp**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **WhatsAppTool** (or search for WhatsApp)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 17 subtools for WhatsApp:

* Send Text: Sends a plain text message. Body max 4096 characters; preview\_url enables link previews.
* Send Image: Sends an image by public HTTPS link or by an uploaded media id, with an optional caption.
* Send Video: Sends a video by public HTTPS link or by an uploaded media id, with an optional caption.
* Send Audio: Sends an audio message by public HTTPS link or by an uploaded media id. Audio does not support captions.
* Send Document: Sends a document by public HTTPS link or by an uploaded media id, with optional caption and display filename.
* Send Sticker: Sends a sticker (WebP, 512x512) by public HTTPS link or uploaded media id.
* Send Location: Sends a location pin with latitude/longitude and an optional name and address.
* Send Contact: Sends one or more contact cards. Each contact requires at least name.formatted\_name.
* Send Reaction: Reacts to a message with an emoji. Pass an empty emoji string to remove a previous reaction.
* Send Interactive Buttons: Sends an interactive message with up to 3 reply buttons.
* Send Interactive List: Sends an interactive list message (up to 10 rows across sections), opened by a button label.
* Send Cta Url: Sends an interactive call-to-action message with a URL button.
* Send Interactive Flow: Sends an interactive WhatsApp Flow message that opens a multi-screen flow on tap.
* Send Template: Sends a pre-approved template message. Required to message a user outside the 24-hour service window.
* Mark As Read: Marks an incoming message as read (blue ticks), optionally showing a typing indicator.
* Get Media Url: Retrieves the temporary download URL and metadata for an uploaded media ID.
* Delete Media: Deletes an uploaded media asset by its media ID.

## Documentation & resources

* Official documentation: `https://developers.facebook.com/docs/whatsapp`
* Phinite documentation: [WhatsApp](https://docs.phinite.ai/docs/integrations-hub/whatsapp)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
