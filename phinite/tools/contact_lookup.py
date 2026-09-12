"""
Tool: contact_lookup
Description: Find a person in the user's Paytm contacts by name and return their UPI ID. Use when the user wants to send money to a person (e.g. "send 100 to Rahul").
Parameters (Dev Studio):
  name  string  required  The person's name as the user said it, e.g. "Rahul"
Env variables: SANDBOX_URL
Captures: merchant_name, merchant_vpa
"""
import requests


def _base(env_variables):
    return (env_variables.get("SANDBOX_URL") or "http://localhost:3000").rstrip("/")


def main(inputs, env_variables):
    try:
        name = (inputs.get("name") or "").strip()
        if not name:
            return {"output": {"error": "name is required"}, "captured_variables": {}}
        r = requests.get(f"{_base(env_variables)}/api/contacts", params={"name": name}, timeout=10).json()
        contacts = r.get("contacts", [])
        if not contacts:
            return {"output": {"found": False, "message": f"No contact named {name}"}, "captured_variables": {}}
        c = contacts[0]
        return {
            "output": {"found": True, "name": c["name"], "vpa": c["vpa"], "phone": c["phone"], "paidBefore": c["paidBefore"],
                       "others": [x["name"] for x in contacts[1:]]},
            "captured_variables": {"merchant_name": c["name"], "merchant_vpa": c["vpa"]},
        }
    except Exception as e:
        return {"output": {"error": str(e)}, "captured_variables": {}}
