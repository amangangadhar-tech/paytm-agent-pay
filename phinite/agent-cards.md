# Agent Cards — copy/paste for "Deploy as A2A → Configure the Agent Card"

Agent Name is read-only (comes from the graph name), so name the graphs exactly as below when you create them.

---

## Graph: `QuickCabAgent`  (expose FIRST)

**Agent Description**
Ride booking desk for QuickCab, Bengaluru. Give it a destination (and optional budget) and it returns a fixed fare quote with pickup ETA; send it a paid transaction id and it confirms the ride. Payments are made by the customer's own agent to quickcab@paytm.

**Skills**
| Name | Description | Input modes | Output modes |
|---|---|---|---|
| `get_quote` | Quote a ride fare for a destination and optional budget | `text/plain`, `application/json` | `application/json`, `text/plain` |
| `confirm_order` | Confirm a ride once the customer's payment txnId is provided | `text/plain`, `application/json` | `application/json`, `text/plain` |

**Discoverability Tags**: `merchant`, `cab`, `ride`, `taxi`, `bengaluru`, `paytm`
**Visibility**: Organisation (switch to Public only if the Discovery filter needs it)
**Auth**: platform default (API key)

---

## Graph: `MedPlusPharmacyAgent`

**Agent Description**
Pharmacy order desk for MedPlus. Give it the medicines you need (e.g. "paracetamol and ORS") and a delivery area; it returns a priced quote and delivery ETA, and confirms the order once the customer's payment txnId is provided. Payments go to medplus@paytm via the customer's agent.

**Skills**
| Name | Description | Input modes | Output modes |
|---|---|---|---|
| `get_quote` | Price a list of medicines / health items with delivery ETA | `text/plain`, `application/json` | `application/json`, `text/plain` |
| `confirm_order` | Confirm delivery once the customer's payment txnId is provided | `text/plain`, `application/json` | `application/json`, `text/plain` |

**Discoverability Tags**: `merchant`, `pharmacy`, `medicine`, `health`, `bengaluru`, `paytm`
**Visibility**: Organisation

---

## Graph: `PaytmAgentPay`  (expose LAST — this is the one Claude calls in the closer)

**Agent Description**
Paytm Agent Pay: a personal payments agent for Paytm users. It discovers merchant agents in the registry, gets quotes over A2A, scores every payee for fraud risk against NPCI/RBI scam advisories, blocks and reports scams, and only executes a UPI payment after the human's explicit approval token. Say "book me a cab to Koramangala under ₹300" or paste a suspicious payment request to check it.

**Skills**
| Name | Description | Input modes | Output modes |
|---|---|---|---|
| `find_and_pay` | Find a merchant agent for a need, quote it, risk-check, get human approval, pay | `text/plain` | `text/plain` |
| `check_payment_request` | Check whether a payment request / UPI ID is a scam and optionally report it | `text/plain` | `text/plain` |
| `wallet_status` | Report wallet balance and recent transactions | `text/plain` | `text/plain`, `application/json` |

**Discoverability Tags**: `paytm`, `payments`, `upi`, `fraud-check`, `agentic-commerce`, `consumer`
**Visibility**: Organisation

---

## Discovery filter for the Master node (Merchant Finder)
Visibility: Organisation · Deployed: Test (switch to Live after Push To Prod) · Tags: `merchant` · Input mode: `text/plain`

## Browse fallback
Attach `QuickCabAgent` and `MedPlusPharmacyAgent` explicitly on the Master node; the Merchant Finder prompt already tells it which one to pick.
