> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Docker

> Manage Docker containers, images, networks, and volumes on a remote Docker daemon via the Docker Engine REST API.

## Overview

Phinite's **Docker** predefined tool lets workspace agent graphs call Docker APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Manage Docker containers, images, networks, and volumes on a remote Docker daemon via the Docker Engine REST API.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Docker Host URL `host` (required)
* TLS Certificate Path `tls_cert` (optional)
* TLS Key Path `tls_key` (optional)
* TLS CA Path `tls_ca` (optional)
* API Version `api_version` (optional)

## Setup steps

1. Ensure Docker Engine is reachable from Phinite (local socket or remote TCP with TLS).
2. Copy host URL and any TLS certificates or API version settings required by your environment.
3. Log into your Phinite workspace at app.phinite.ai
4. Navigate to **Integrations** → **Predefined tools**
5. Select **Docker**
6. Click **+ Add Configuration**
7. Enter the credential fields listed above
8. Select agent graphs that should use this connection
9. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **DockerTool** (or search for Docker)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 35 subtools for Docker:

* List Containers: Lists Docker containers. By default only running containers are returned; set all=true to include stopped ones.
* Create Container: Creates a new container without starting it. Use start\_container afterward to run it.
* Inspect Container: Returns detailed information about a container including state, config, network settings, and mounts.
* Start Container: Starts a stopped or newly created container.
* Stop Container: Stops a running container by sending SIGTERM, then SIGKILL after the timeout.
* Restart Container: Restarts a container.
* Kill Container: Sends a signal to a container. Default signal is SIGKILL which immediately terminates it.
* Rename Container: Renames a container.
* Pause Container: Pauses all processes in a running container using cgroup freezer.
* Unpause Container: Resumes a paused container.
* Remove Container: Removes a container. The container must be stopped first unless force=true.
* Get Container Logs: Returns stdout and/or stderr logs from a container.
* Get Container Stats: Returns a snapshot of resource usage stats for a container (CPU, memory, network I/O, block I/O).
* Prune Containers: Removes all stopped containers. Returns the list of deleted container IDs and reclaimed disk space.
* Exec Run: Runs a command inside a running container and returns its output.
* List Images: Lists Docker images available on the local daemon.
* Pull Image: Pulls an image from a registry to the local daemon. Waits for the pull to complete.
* Inspect Image: Returns detailed metadata about a local image including its config, layers, and OS.
* Tag Image: Tags a local image with a new name and optional tag.
* Remove Image: Removes a local image. Fails if the image is in use unless force=true.
* Search Images: Searches Docker Hub for images matching a term.
* Prune Images: Removes unused/dangling images. Reclaims disk space.
* List Networks: Lists Docker networks.
* Create Network: Creates a Docker network.
* Inspect Network: Returns detailed information about a network including its containers and configuration.
* Remove Network: Removes a Docker network. The network must have no active endpoints.
* Connect Container To Network: Connects a running container to an existing network.
* Disconnect Container From Network: Disconnects a container from a network.
* List Volumes: Lists Docker volumes.
* Create Volume: Creates a Docker volume.
* Inspect Volume: Returns detailed information about a volume including its driver, mount point, and labels.
* Remove Volume: Removes a volume. Fails if the volume is still in use by a container.
* Get System Info: Returns system-wide Docker information (containers/images count, OS, kernel, memory, CPU, storage driver).
* Get Version: Returns the Docker Engine version, API version, Go version, OS, and architecture.
* Get Disk Usage: Returns disk usage by images, containers, and local volumes including reclaimable space.

## Documentation & resources

* Official documentation: `https://docs.docker.com/reference/api/engine/`
* Phinite documentation: [Docker](https://docs.phinite.ai/docs/integrations-hub/docker)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
