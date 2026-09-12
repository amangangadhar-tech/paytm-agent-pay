> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Google Cloud

> Manage Google Cloud Platform resources — Compute Engine VMs, Cloud Storage buckets and objects, Cloud SQL instances, Pub/Sub topics, and Firestore documents via GCP REST APIs.

## Overview

Phinite's **Google Cloud** predefined tool lets workspace agent graphs call Google Cloud APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Google Cloud Platform resources — Compute Engine VMs, Cloud Storage buckets and objects, Cloud SQL instances, Pub/Sub topics, and Firestore documents via GCP REST APIs.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Access Token `access_token` (required)
* Project ID `project_id` (required)
* Default Region `region` (optional)
* Default Zone `zone` (optional)

## Setup steps

1. Create a GCP project, enable required APIs, create OAuth credentials or service account, and obtain an access token with cloud-platform scope.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **Google Cloud**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **GoogleCloudTool** (or search for Google Cloud)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 26 subtools for Google Cloud:

* List Compute Instances: List all Compute Engine VM instances in a zone.
* Get Compute Instance: Get details of a specific Compute Engine instance.
* Create Compute Instance: Create a new Compute Engine VM instance.
* Delete Compute Instance: Delete a Compute Engine VM instance.
* Start Compute Instance: Start a stopped Compute Engine instance.
* Stop Compute Instance: Stop a running Compute Engine instance.
* List Storage Buckets: List all Cloud Storage buckets in the project.
* Get Storage Bucket: Get details of a specific Cloud Storage bucket.
* Create Storage Bucket: Create a new Cloud Storage bucket.
* Delete Storage Bucket: Delete a Cloud Storage bucket (bucket must be empty).
* List Storage Objects: List objects in a Cloud Storage bucket.
* Upload Storage Object: Upload an object to a Cloud Storage bucket.
* Download Storage Object: Download an object from Cloud Storage.
* Delete Storage Object: Delete an object from Cloud Storage.
* List Sql Instances: List all Cloud SQL instances in the project.
* Get Sql Instance: Get details of a specific Cloud SQL instance.
* Create Sql Instance: Create a new Cloud SQL instance.
* Delete Sql Instance: Delete a Cloud SQL instance.
* List Pubsub Topics: List all Cloud Pub/Sub topics in the project.
* Create Pubsub Topic: Create a new Cloud Pub/Sub topic.
* Delete Pubsub Topic: Delete a Cloud Pub/Sub topic.
* List Firestore Documents: List documents in a Firestore collection.
* Get Firestore Document: Get a specific Firestore document.
* Create Firestore Document: Create a new Firestore document.
* Update Firestore Document: Update an existing Firestore document.
* Delete Firestore Document: Delete a Firestore document.

## Documentation & resources

* Official documentation: `https://cloud.google.com/docs`

* Phinite documentation: [Google Cloud](https://docs.phinite.ai/docs/integrations-hub/google-cloud)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
