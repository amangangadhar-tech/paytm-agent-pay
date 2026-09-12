"""
Tool: pay_upi
Description: Execute a UPI payment from the user's Paytm wallet. Requires the approval_token from request_approval for the SAME payee and amount; the backend rejects anything else.
Parameters (Dev Studio):
  payee_vpa       string  required
  amount          number  required
  approval_token  string  required  From request_approval
  note            string  optional  Short description shown in the ledger, e.g. "QuickCab to Koramangala"
  user_id         string  optional  default "aman"
  merchant_vpa    string  optional  fallback for payee_vpa (auto-filled from session)
  quote_amount    number  optional  fallback for amount (auto-filled from session)
Env variables: SANDBOX_URL
Captures: txn_id, balance_after, payment_status
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
        body = {
            "userId": inputs.get("user_id") or "aman",
            "payeeVpa": (inputs.get("payee_vpa") or inputs.get("merchant_vpa") or "").strip(),
            "amount": float(inputs.get("amount") or inputs.get("quote_amount") or 0),
            "note": inputs.get("note") or "",
            "approvalToken": inputs.get("approval_token") or "",
        }
        r = requests.post(f"{_base(env_variables)}/api/pay", json=body, timeout=10)
        data = r.json()
        if r.status_code != 200:
            return {"output": {"status": "FAILED", **data}, "captured_variables": {"payment_status": "FAILED"}}
        return {
            "output": data,
            "captured_variables": {"txn_id": data["txnId"], "balance_after": data["balanceAfter"], "payment_status": "SUCCESS"},
        }
    except Exception as e:
        return {"output": {"status": "FAILED", "error": str(e)}, "captured_variables": {"payment_status": "FAILED"}}
