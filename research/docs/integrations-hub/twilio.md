> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Twilio

> Send SMS/MMS, make voice calls, manage recordings, accounts, phone numbers, conferences, and Conversations via the Twilio REST API.

## Overview

Phinite's **Twilio** predefined tool lets workspace agent graphs call Twilio APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Send SMS/MMS, make voice calls, manage recordings, accounts, phone numbers, conferences, and Conversations via the Twilio REST API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Account SID `account_sid` (required)
* Auth Token `auth_token` (required)

## Setup steps

1. In the Twilio Console copy Account SID, Auth Token, and any phone number SIDs you need.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Twilio**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **TwilioTool** (or search for Twilio)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 33 subtools for Twilio:

* Send Message: Send an SMS or MMS message via Twilio
* Get Message: Fetch a single message by its SID
* List Messages: List messages with optional filters (to, from, date\_sent). Results sorted by DateSent descending.
* Update Message: Update (redact) a message body. Set body to empty string to redact.
* Delete Message: Delete a message record by SID
* Make Call: Initiate an outbound voice call via Twilio. Requires a TwiML URL or inline TwiML.
* Get Call: Fetch details of a specific call by its SID
* List Calls: List calls with optional filters (to, from, status, start\_time). Results sorted by StartTime descending.
* Update Call: Modify an in-progress call - redirect to new TwiML, or end the call by setting status to 'completed' or 'canceled'.
* Delete Call: Delete a call record from your account. Cannot delete an in-progress call.
* List Recordings: List recordings in your account, optionally filtered by call SID or date
* Get Recording: Fetch metadata of a specific recording by SID
* Delete Recording: Delete a recording by SID
* Get Account: Fetch details of the current Twilio account (or a specific sub-account)
* List Accounts: List accounts (sub-accounts) under the main account
* List Incoming Phone Numbers: List incoming phone numbers owned by the account
* Get Incoming Phone Number: Fetch details of a specific incoming phone number by SID
* Buy Phone Number: Purchase (provision) a new incoming phone number. The number must be available.
* List Conferences: List conferences in your account, optionally filtered by status or friendly name
* Get Conference: Fetch details of a specific conference by SID
* Create Conversation: Create a new Twilio Conversation (multi-party messaging thread).
* Get Conversation: Retrieve a specific Twilio Conversation by SID or unique name.
* List Conversations: List all Twilio Conversations.
* Update Conversation: Update a Twilio Conversation (e.g. change state, friendly name).
* Delete Conversation: Delete a Twilio Conversation by SID.
* Add Conversation Participant: Add a participant to a Twilio Conversation. For SMS provide messaging\_binding\_address and messaging\_binding\_proxy\_address. For chat provide identity.
* List Conversation Participants: List all participants in a Twilio Conversation.
* Get Conversation Participant: Get a specific participant in a Twilio Conversation.
* Remove Conversation Participant: Remove a participant from a Twilio Conversation.
* Send Conversation Message: Send a message in a Twilio Conversation.
* List Conversation Messages: List messages in a Twilio Conversation.
* Get Conversation Message: Get a specific message in a Twilio Conversation.
* Delete Conversation Message: Delete a message from a Twilio Conversation.

## Documentation & resources

* Official documentation: `https://www.twilio.com/docs/api`
* Phinite documentation: [Twilio](https://docs.phinite.ai/docs/integrations-hub/twilio)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
