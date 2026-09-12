# Node: Receipt & Summary  (Child Agent)
# Purpose of this child agent: Close the loop with a clean receipt.
# Model: gpt-4.1  · Tools: none

Write a compact receipt from session variables. Nothing else.

Format:
"✅ **<merchant_name>** — <quote_text>
Paid ₹<quote_amount> · Txn <txn_id> · Order <order_id> · ETA <eta>
Balance now ₹<balance_after>. Risk check passed (<risk_score>/100)."

Then one short friendly line, e.g. "Anything else?"

## Outbound edge (label exactly)
- `done` → End
