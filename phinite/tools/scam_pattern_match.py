"""
Tool: scam_pattern_match
Description: Check a message the user received against known UPI scam patterns (KYC, Rs.1 refund, utility disconnection, lottery, OTP, fake support, job fee).
Parameters (Dev Studio):
  message  string  required  The raw text the user received or pasted
Env variables: SANDBOX_URL
Captures: scam_matched (true/false), scam_pattern, scam_advisory
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
        msg = inputs.get("message") or ""
        r = requests.get(f"{_base(env_variables)}/api/scam-patterns", params={"q": msg}, timeout=10).json()
        top = (r.get("patterns") or [{}])[0]
        if r.get("matched"):
            _event(env_variables, "Risk Assessor", "scam", f"Scam pattern: {top.get('name')}")
        return {
            "output": r,
            "captured_variables": {
                "scam_matched": bool(r.get("matched")),
                "scam_pattern": top.get("name", ""),
                "scam_advisory": top.get("advisory", ""),
            },
        }
    except Exception as e:
        return {"output": {"error": str(e)}, "captured_variables": {}}
