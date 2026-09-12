> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Vonage

> Send SMS and multi-channel messages, run phone verification (OTP) and number insight lookups, and manage account balance and virtual numbers via the Vonage (Nexmo) APIs.

## Overview

Phinite's **Vonage** predefined tool lets workspace agent graphs call Vonage APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Send SMS and multi-channel messages, run phone verification (OTP) and number insight lookups, and manage account balance and virtual numbers via the Vonage (Nexmo) APIs.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* API Key `api_key` (required)
* API Secret `api_secret` (required)

## Setup steps

1. In the Vonage Dashboard create an application and copy API key, API secret, and application ID.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Vonage**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **VonageTool** (or search for Vonage)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 17 subtools for Vonage:

* Send Sms: Sends an SMS via the Vonage SMS API.
* Request Verification: Starts a Verify (OTP) request and returns a request\_id used to check the code.
* Check Verification: Checks a PIN code entered by the user against a Verify request\_id.
* Control Verification: Controls an in-progress Verify request - cancel it or trigger the next verification event.
* Start Verify V2: Starts a Verify v2 request with a workflow of one or more channels. Returns a request\_id.
* Check Verify V2: Checks a code against a Verify v2 request\_id.
* Number Insight Basic: Basic Number Insight - validates a number's format and returns its country.
* Number Insight Standard: Standard Number Insight - adds line type and current carrier information.
* Number Insight Advanced: Advanced Number Insight - adds roaming, ported, and reachability data on top of standard insight.
* Send Message: Sends a message over any Messages API channel (sms, mms, whatsapp, viber\_service, messenger).
* Get Balance: Returns the account balance (in EUR) and auto-reload status.
* Top Up: Tops up the account balance using the transaction reference from a prior auto-reload-enabled payment.
* List Numbers: Lists virtual numbers owned by the account, with optional filters.
* Search Numbers: Searches for available numbers to buy in a country, optionally filtered by features and pattern.
* Buy Number: Purchases a specific available number for the account.
* Cancel Number: Cancels (releases) a number owned by the account.
* Update Number: Updates webhook and routing configuration for an owned number.

## Documentation & resources

* Official documentation: `https://developer.vonage.com/en/api`
* Phinite documentation: [Vonage](https://docs.phinite.ai/docs/integrations-hub/vonage)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
