"""
Tool: request_approval
Description: Record the user's explicit YES for one payment and get a single-use approval token. Call ONLY after the user has clearly said yes to the exact amount and payee.
Parameters (Dev Studio):
  payee_vpa  string  required  UPI ID being paid
  amount     number  required  Exact amount in INR the user approved
  user_id    string  optional  default "aman"
  merchant_vpa  string  optional  fallback for payee_vpa (auto-filled from session)
  quote_amount  number  optional  fallback for amount (auto-filled from session)
Env variables: SANDBOX_URL
Captures: approval_token, approved (true)
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
        payee = (inputs.get("payee_vpa") or inputs.get("merchant_vpa") or "").strip()
        amount = float(inputs.get("amount") or inputs.get("quote_amount") or 0)
        user_id = inputs.get("user_id") or "aman"
        if not payee or amount <= 0:
            return {"output": {"error": "payee_vpa and positive amount are required"}, "captured_variables": {"approved": False}}
        r = requests.post(f"{_base(env_variables)}/api/approve",
                          json={"userId": user_id, "payeeVpa": payee, "amount": amount}, timeout=10)
        data = r.json()
        if r.status_code != 200:
            return {"output": data, "captured_variables": {"approved": False}}
        return {
            "output": {"approved": True, "approvalToken": data["approvalToken"], "expiresAt": data["expiresAt"]},
            "captured_variables": {"approval_token": data["approvalToken"], "approved": True},
        }
    except Exception as e:
        return {"output": {"error": str(e)}, "captured_variables": {"approved": False}}
