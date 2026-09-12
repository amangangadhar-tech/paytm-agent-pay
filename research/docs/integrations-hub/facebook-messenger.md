> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Facebook Messenger

> Send messages and manage a Facebook Messenger bot via the Messenger Platform — text, attachments, quick replies, templates, sender actions, user profile, Messenger Profile config, and handover protocol.

## Overview

Phinite's **Facebook Messenger** predefined tool lets workspace agent graphs call Facebook Messenger APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Send messages and manage a Facebook Messenger bot via the Messenger Platform — text, attachments, quick replies, templates, sender actions, user profile, Messenger Profile config, and handover protocol.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Page Access Token `page_access_token` (required)
* Page ID `page_id` (optional)
* Graph API Version `graph_version` (optional)

## Setup steps

1. Create a Meta app at developers.facebook.com and add the Messenger product.
2. Generate a Page access token with messaging permissions for your Facebook Page.
3. Copy the Page ID and access token.
4. Log into your Phinite workspace at app.phinite.ai
5. Navigate to **Integrations** → **Predefined tools**
6. Select **Facebook Messenger**
7. Click **+ Add Configuration**
8. Enter the credential fields listed above
9. Select agent graphs that should use this connection
10. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **FacebookMessengerTool** (or search for Facebook Messenger)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 24 subtools for Facebook Messenger:

* Send Text: Sends a plain text message to a user. Text must be UTF-8 and at most 2000 characters.
* Send Attachment: Sends a media attachment (image, audio, video, or file) by URL or by a previously uploaded attachment\_id.
* Send Quick Replies: Sends a text message with quick reply buttons (max 13).
* Send Button Template: Sends a button template - text plus up to 3 buttons.
* Send Generic Template: Sends a generic template carousel (up to 10 elements).
* Send Media Template: Sends a media template - an image or video with up to 3 buttons.
* Send Receipt Template: Sends a receipt/order-confirmation template with recipient name, order number, items, and cost summary.
* Send Tagged Message: Sends a text message OUTSIDE the standard 24-hour window using a message tag.
* Typing On: Shows the typing indicator (bubble) to the user.
* Typing Off: Hides the typing indicator for the user.
* Mark Seen: Marks the user's last message as seen (read receipt).
* Get User Profile: Retrieves a user's public profile fields by PSID.
* Upload Attachment: Uploads a media asset by URL to the attachment store and returns a reusable attachment\_id.
* Set Get Started: Sets the Get Started button payload, shown to new users before they message the bot.
* Set Greeting: Sets the welcome-screen greeting text. Supports user name personalization.
* Set Persistent Menu: Sets the persistent menu (always-available hamburger menu) with call-to-action items.
* Set Ice Breakers: Sets ice breakers — predefined questions shown to new users to start a conversation.
* Get Messenger Profile: Reads configured Messenger Profile fields (get\_started, greeting, persistent\_menu, ice\_breakers, etc.).
* Delete Messenger Profile Fields: Deletes specified Messenger Profile fields, resetting them.
* Pass Thread Control: Passes thread control to another app (e.g. a live-agent app or the Page Inbox).
* Take Thread Control: Takes thread control back from a secondary receiver (Primary Receiver app only).
* Request Thread Control: Requests thread control from the Primary Receiver (secondary receiver app).
* Get Secondary Receivers: Lists the apps registered as secondary receivers for the page (id and name).
* Get Thread Owner: Returns the app ID that currently owns (controls) the conversation thread with a user.

## Documentation & resources

* Official documentation: `https://developers.facebook.com/docs/messenger-platform`
* Phinite documentation: [Facebook Messenger](https://docs.phinite.ai/docs/integrations-hub/facebook-messenger)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
