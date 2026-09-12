> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Redis

> Run Redis operations — strings, hashes, lists, sets, sorted sets, pub/sub, TTL management, and server info via the Redis protocol.

## Overview

Phinite's **Redis** predefined tool lets workspace agent graphs call Redis APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Run Redis operations — strings, hashes, lists, sets, sorted sets, pub/sub, TTL management, and server info via the Redis protocol.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Redis URL `url` (optional)
* Host `host` (optional)
* Port `port` (optional)
* Password `password` (optional)
* Database Index `db` (optional)
* Enable SSL `ssl` (optional)

## Setup steps

1. Deploy Redis or use a managed instance and note host, port, password, and database index.
2. Enable TLS if your provider requires it.
3. Log into your Phinite workspace at app.phinite.ai
4. Navigate to **Integrations** → **Predefined tools**
5. Select **Redis**
6. Click **+ Add Configuration**
7. Enter the credential fields listed above
8. Select agent graphs that should use this connection
9. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **RedisTool** (or search for Redis)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 43 subtools for Redis:

* Get Value: Gets the value of a key. Automatically detects type and returns the full value.
* Set Value: Sets the value of a key. Supports string, hash, list, and set types.
* Delete Key: Deletes one or more keys from Redis. Returns the number of keys actually deleted.
* Exists Key: Returns the number of the given keys that exist in Redis.
* Get Type: Returns the data type of the value stored at a key.
* Rename Key: Renames a key. If the new name already exists, it is overwritten.
* Get Keys: Returns all keys matching a glob-style pattern. Avoid on large databases.
* Scan Keys: Iterates keys matching a pattern using SCAN (cursor-based, non-blocking).
* Mget: Gets the values of multiple string keys in a single call.
* Mset: Sets multiple string keys to their values in a single atomic operation.
* Expire: Sets a TTL on a key so it is automatically deleted after the given number of seconds.
* Get Ttl: Returns the remaining TTL of a key in seconds.
* Persist: Removes the TTL from a key, making it persist indefinitely.
* Increment: Atomically increments a key's integer value by 1.
* Increment By: Atomically increments a key's integer value by the specified amount.
* Increment Float: Atomically increments a key's floating-point value by the specified amount.
* Decrement: Atomically decrements a key's integer value by 1.
* Decrement By: Atomically decrements a key's integer value by the specified amount.
* List Push: Pushes one or more values onto a Redis list. Pushes to the head by default; set tail=true for RPUSH.
* List Pop: Pops and returns one value from a Redis list. Pops from head by default; set tail=true for RPOP.
* List Length: Returns the number of elements in a Redis list.
* List Range: Returns a range of elements from a Redis list. Index 0 is first; -1 is last.
* Hash Get: Gets the value of a specific field in a hash, or multiple fields at once.
* Hash Set: Sets one or more fields in a hash. Creates the hash if it does not exist.
* Hash Get All: Returns all fields and values of a hash as a dict.
* Hash Delete: Deletes one or more fields from a hash. Returns the number of fields removed.
* Hash Keys: Returns all field names in a hash.
* Hash Increment: Increments the integer or float value of a hash field by the given amount.
* Set Add: Adds one or more members to a Redis set. Returns the number actually added.
* Set Remove: Removes one or more members from a Redis set. Returns the number removed.
* Set Members: Returns all members of a Redis set.
* Set Is Member: Returns true if the specified member exists in a Redis set.
* Zset Add: Adds one or more members with their scores to a sorted set.
* Zset Remove: Removes one or more members from a sorted set.
* Zset Range: Returns members of a sorted set within the given rank range, ordered by score.
* Zset Score: Returns the score of a member in a sorted set.
* Zset Rank: Returns the rank (0-indexed) of a member in a sorted set, ordered by score ascending.
* Zset Count: Returns the number of members in a sorted set with scores between min and max (inclusive).
* Publish Message: Publishes a message to a Redis channel. Returns the number of clients that received it.
* Get Info: Returns server information and statistics, optionally for a specific section.
* Ping: Pings the Redis server to verify the connection is alive. Returns PONG on success.
* Db Size: Returns the total number of keys in the currently selected Redis database.
* Flush Db: Deletes all keys in the currently selected database. Irreversible.

## Documentation & resources

* Official documentation: `https://redis.io/docs/latest/develop/clients/`
* Phinite documentation: [Redis](https://docs.phinite.ai/docs/integrations-hub/redis)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
