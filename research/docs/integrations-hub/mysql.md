> ## Documentation Index
> Fetch the complete documentation index at: https://docs.phinite.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# MySQL

> Execute queries, manage tables and schema, and perform CRUD operations on a MySQL database via async connection.

## Overview

Phinite's **MySQL** predefined tool lets workspace agent graphs call MySQL APIs through DevStudio after you save a connection under **Integrations → Predefined tools**.

Execute queries, manage tables and schema, and perform CRUD operations on a MySQL database via async connection.

<Note>
  Predefined tools require a saved connection before they appear in Graph Studio's tool picker. See [Predefined Tools in GraphStudio](/configure/integrations).
</Note>

## What this integration enables

* Automate workflows using this predefined tool from agent graphs
* Connect once under Integrations and reuse across agent graphs
* Enable individual subtools per agent in Graph Studio

## Required credentials

* Host `host` (required)
* Port `port` (optional)
* Username `user` (required)
* Password `password` (required)
* Default Database `database` (optional)

## Setup steps

1. Install MySQL or use a hosted instance. Note host, port (default 3306), username, password, and database name.
2. Log into your Phinite workspace at app.phinite.ai
3. Navigate to **Integrations** → **Predefined tools**
4. Select **MySQL**
5. Click **+ Add Configuration**
6. Enter the credential fields listed above
7. Select agent graphs that should use this connection
8. Click **Save Configuration**

## Configure in Graph Studio

1. Open an agent in Graph Studio
2. Select the agent node → **Tools** tab → **Add a new tool**
3. Choose **MySQLTool** (or search for MySQL)
4. Select your saved connection or add a new one
5. Enable the subtools your workflow needs and save

## Predefined tools

Phinite provides 20 subtools for MySQL:

* Get Server Status: Get MySQL server version, connection ID, character set, and current database.
* List Databases: List all databases on the MySQL server.
* Create Database: Create a new MySQL database.
* Drop Database: Drop a MySQL database and all its tables permanently.
* List Tables: List all tables in a MySQL database.
* Describe Table: Show column names, types, nullability, keys, and defaults for a MySQL table.
* Show Create Table: Show the full CREATE TABLE DDL statement for a MySQL table.
* Create Table: Create a new MySQL table with the given column definitions.
* Drop Table: Drop a MySQL table permanently.
* Truncate Table: Remove all rows from a MySQL table without deleting the table structure.
* Execute Query: Execute a read-only SQL query (SELECT, SHOW, DESCRIBE, EXPLAIN). Returns columns and rows.
* Insert Row: Insert a single row into a MySQL table. Data is provided as column-value pairs.
* Insert Many Rows: Insert multiple rows into a MySQL table in a single operation.
* Update Rows: Update rows matching the given conditions. Conditions are required to prevent accidental full-table updates.
* Delete Rows: Delete rows matching the given conditions. Conditions are required to prevent accidental full-table deletes.
* Count Rows: Count rows in a MySQL table, optionally filtered by conditions.
* Add Column: Add a new column to an existing MySQL table.
* Drop Column: Remove a column from an existing MySQL table permanently.
* Create Index: Create an index on one or more columns of a MySQL table.
* Drop Index: Drop an index from a MySQL table.

## Documentation & resources

* Official documentation: `https://dev.mysql.com/doc/`

* Phinite documentation: [Mysql](https://docs.phinite.ai/docs/integrations-hub/mysql)

## Notes

* Store API keys and tokens securely; many providers show secrets only once
* Use separate connections for Dev, UAT, and Prod environments where possible
* Test with a minimal subtool call after saving credentials
