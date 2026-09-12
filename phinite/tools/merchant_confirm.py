"""
Tool: merchant_confirm
Description: (Used by MERCHANT agents.) Confirm an order after the customer's payment succeeded. Returns order id and ETA.
Parameters (Dev Studio):
  merchant_id  string  required  quickcab | medplus | chaipoint
  quote_id     string  optional  From merchant_quote
  txn_id       string  optional  Customer's payment transaction id
Env variables: SANDBOX_URL
Captures: order_id, eta
"""
import requests


def _base(env_variables):
    return (env_variables.get("SANDBOX_URL") or "http://localhost:3000").rstrip("/")


def _event(env_variables, agent, action, detail):
    try:
        requests.post(f"{_base(env_variables)}/api/agent-event",
                      json={"agent": agent, "action": action, "detail": detail}, timeout=5)
    except Exception:
        pass


def main(inputs, env_variables):
    try:
        mid = (inputs.get("merchant_id") or "quickcab").strip().lower()
        body = {"quoteId": inputs.get("quote_id") or "", "txnId": inputs.get("txn_id") or ""}
        r = requests.post(f"{_base(env_variables)}/api/merchants/{mid}/confirm", json=body, timeout=10).json()
        return {"output": r, "captured_variables": {"order_id": r.get("orderId"), "eta": r.get("eta")}}
    except Exception as e:
        return {"output": {"error": str(e)}, "captured_variables": {}}
