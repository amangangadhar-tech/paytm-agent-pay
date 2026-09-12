> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Azure

> Manage Azure resources via the Azure Resource Manager REST API — subscriptions, resource groups, virtual machines, storage accounts, and App Services.

## Overview

Phinite's **Azure** predefined tool lets workspace agent graphs call Azure APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Azure resources via the Azure Resource Manager REST API — subscriptions, resource groups, virtual machines, storage accounts, and App Services.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Tenant ID `tenant_id` (required)
* Client ID `client_id` (required)
* Client Secret `client_secret` (required)
* Subscription ID `subscription_id` (optional)

## Setup steps

1. Register an application in Microsoft Entra ID and create a client secret or certificate.
2. Grant the application access to the Azure resources you need and obtain an access token.
3. Copy subscription ID, tenant ID, and client credentials into Phinite.
4. Log into your Phinite workspace at app.phinite.ai
5. Navigate to **Integrations** → **Predefined tools**
6. Select **Azure**
7. Click **+ Add Configuration**
8. Enter the credential fields listed above
9. Select agent graphs that should use this connection
10. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **AzureTool** (or search for Azure)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 24 subtools for Azure:

* List Subscriptions: Lists all Azure subscriptions the service principal has access to.
* Get Subscription: Returns details of a specific subscription by subscription ID.
* List Resource Groups: Lists all resource groups in the subscription.
* Get Resource Group: Returns details of a specific resource group.
* Create Resource Group: Creates or updates a resource group in the specified location.
* Delete Resource Group: Deletes a resource group and ALL resources it contains. Irreversible.
* List Resources: Lists all resources in a subscription or resource group, with optional type/tag filters.
* List Virtual Machines: Lists all virtual machines in a resource group or subscription.
* Get Virtual Machine: Returns the properties of a virtual machine.
* Get Virtual Machine Status: Returns the current power state and provisioning status of a virtual machine.
* Start Virtual Machine: Starts a stopped or deallocated virtual machine. Async operation.
* Stop Virtual Machine: Stops (deallocates) a virtual machine, releasing compute resources.
* Restart Virtual Machine: Restarts a running virtual machine.
* Delete Virtual Machine: Deletes a virtual machine. Associated disks and NICs are not automatically deleted.
* List Storage Accounts: Lists all storage accounts in a resource group or the entire subscription.
* Get Storage Account: Returns the properties of a storage account.
* List Storage Account Keys: Returns the access keys for a storage account.
* Create Storage Account: Creates a new storage account. Account name must be globally unique, 3-24 lowercase letters and numbers.
* Delete Storage Account: Deletes a storage account and all data it contains. Irreversible.
* List Web Apps: Lists all App Service web apps in a resource group or subscription.
* Get Web App: Returns properties of an App Service web app including its URL, state, and runtime stack.
* Start Web App: Starts a stopped App Service web app.
* Stop Web App: Stops a running App Service web app.
* Restart Web App: Restarts an App Service web app.

## Documentation & resources

* Official documentation: `https://learn.microsoft.com/en-us/azure/developer/intro`
* Phinite documentation: [Azure](https://docs.phinite.ai/docs/integrations-hub/azure)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
