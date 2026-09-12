"""
Tool: merchant_quote
Description: (Used by MERCHANT agents: QuickCab, MedPlus.) Return a price quote for what the customer needs. merchant_id is fixed per merchant agent.
Parameters (Dev Studio):
  merchant_id  string  required  quickcab | medplus | chaipoint  (set as a default on the merchant agent's node)
  need         string  required  What the customer wants, e.g. "cab" or "paracetamol and ORS"
  location     string  optional  Destination / delivery area, e.g. "Koramangala"
  budget       number  optional  Customer's max amount in INR
  raw_message  string  optional  The user's full original sentence (auto-filled from session)
Env variables: SANDBOX_URL
Captures: quote_id, quote_amount, merchant_vpa, merchant_name
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
        # Fold the user's full sentence into `need` so the backend can find the destination / stations / items
        need = " ".join(x for x in [inputs.get("need") or "", inputs.get("raw_message") or ""] if x)
        body = {"need": need, "location": inputs.get("location") or "", "budget": inputs.get("budget")}
        r = requests.post(f"{_base(env_variables)}/api/merchants/{mid}/quote", json=body, timeout=10)
        q = r.json()
        if r.status_code != 200:
            return {"output": q, "captured_variables": {}}
        return {
            "output": q,
            "captured_variables": {"quote_id": q["quoteId"], "quote_amount": q["amount"],
                                   "merchant_vpa": q["vpa"], "merchant_name": q["merchantName"]},
        }
    except Exception as e:
        return {"output": {"error": str(e)}, "captured_variables": {}}
