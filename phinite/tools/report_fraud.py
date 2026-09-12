"""
Tool: report_fraud
Description: File a fraud report (NPCI-style reference) against a suspicious UPI ID or message.
Parameters (Dev Studio):
  vpa      string  optional  Suspicious UPI ID if known
  message  string  optional  The scam message text
  reason   string  optional  Short reason, e.g. "utility disconnection scam"
  user_id  string  optional  default "aman"
Env variables: SANDBOX_URL
Captures: report_id
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
        body = {"userId": inputs.get("user_id") or "aman", "vpa": inputs.get("vpa") or "",
                "message": inputs.get("message") or "", "reason": inputs.get("reason") or ""}
        r = requests.post(f"{_base(env_variables)}/api/fraud-report", json=body, timeout=10).json()
        return {"output": r, "captured_variables": {"report_id": r.get("reportId")}}
    except Exception as e:
        return {"output": {"error": str(e)}, "captured_variables": {}}
