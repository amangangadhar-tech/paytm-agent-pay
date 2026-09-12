> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Telegram

> Send and receive Telegram bot messages, automate support, deliver notifications,

## Overview

Phinite's **Telegram** predefined tool lets workspace agent graphs call Telegram APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Send and receive Telegram bot messages, automate support, deliver notifications,

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

1. Create a bot via @BotFather on Telegram and copy the bot token.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Telegram**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **TelegramTool** (or search for Telegram)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 17 subtools for Telegram:

* Send Message: Send a text message to a Telegram chat
* Send Photo: Send a photo to a Telegram chat
* Send Document: Send a document to a Telegram chat
* Send Poll: Send a poll to a Telegram chat
* Get Updates: Get incoming updates from Telegram
* Get Chat Info: Get information about a chat
* Edit Message: Edit a text message
* Delete Message: Delete a message
* Forward Message: Forward a message
* Get Chat Member: Get information about a chat member
* Get Chat Administrators: Get a list of administrators in a chat
* Set Chat Title: Set the title of a chat
* Set Chat Description: Set the description of a chat
* Pin Message: Pin a message in a chat
* Unpin Message: Unpin a message in a chat
* Get Chat Member Count: Get the number of members in a chat
* Leave Chat: Leave a chat

## Documentation & resources

* Official documentation: `https://core.telegram.org/bots/api`
* Phinite documentation: [Telegram](https://docs.phinite.ai/docs/integrations-hub/telegram)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
