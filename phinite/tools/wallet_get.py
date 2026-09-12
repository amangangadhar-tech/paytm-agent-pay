"""
Tool: wallet_get
Description: Get the user's Paytm wallet balance, daily limit and recent transactions.
Parameters (Dev Studio):
  user_id  string  optional  Paytm user id (default "aman")
Env variables: SANDBOX_URL
Returns output {balance, dailyLimit, dailySpent, recent[]}; captures wallet_balance.
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
        user_id = inputs.get("user_id") or "aman"
        b = _base(env_variables)
        w = requests.get(f"{b}/api/wallet/{user_id}", timeout=10).json()
        l = requests.get(f"{b}/api/ledger/{user_id}", timeout=10).json()
        recent = [{"txnId": t["txnId"], "amount": t["amount"], "type": t["type"], "note": t.get("note"), "payeeVpa": t["payeeVpa"]}
                  for t in l.get("transactions", [])[:5]]
        _event(env_variables, "Concierge", "info", f"Checked wallet: balance Rs.{w.get('balance')}")
        return {
            "output": {"balance": w.get("balance"), "dailyLimit": w.get("dailyLimit"),
                       "dailySpent": w.get("dailySpent"), "currency": "INR", "recent": recent},
            "captured_variables": {"wallet_balance": w.get("balance")},
        }
    except Exception as e:
        return {"output": {"error": str(e)}, "captured_variables": {}}
