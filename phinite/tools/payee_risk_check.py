"""
Tool: payee_risk_check
Description: Score how risky a payee UPI ID (VPA) is before paying. Returns score 0-100, level low/medium/high and reasons.
Parameters (Dev Studio):
  payee_vpa  string  required  UPI ID to check, e.g. quickcab@paytm or bescom-update@ybl
Env variables: SANDBOX_URL
Captures: risk_score, risk_level, risk_reasons
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
        vpa = (inputs.get("payee_vpa") or "").strip()
        if not vpa:
            return {"output": {"error": "payee_vpa is required"}, "captured_variables": {}}
        r = requests.get(f"{_base(env_variables)}/api/risk/{vpa}", timeout=10).json()
        _event(env_variables, "Risk Assessor", "blocked" if r["level"] == "high" else "info",
               f"{vpa}: {r['level']} risk, score {r['score']}/100")
        return {
            "output": r,
            "captured_variables": {
                "risk_score": r.get("score"),
                "risk_level": r.get("level"),
                "risk_reasons": "; ".join(r.get("reasons", [])),
            },
        }
    except Exception as e:
        return {"output": {"error": str(e)}, "captured_variables": {}}
