# HTTP — Manager

`POST /mcp`

## HTTP-FPL-ENT-001 — Manager by id

- Request:
  - Modern MCP request
  - `Mcp-Method: tools/call`
  - `Mcp-Name: fpl_entry`
  - Method: `tools/call`
  - `params.name` = `fpl_entry`
  - `params.arguments` = `{ "entry_id": 1 }`
- Response:
  - Status: `200`
  - `result.isError` is not `true`
  - `result.content[0].type` = `text`
  - `result.content[0].text` is JSON with `team_name`, `overall_points`, `overall_rank`, and `classic_league_ids`

Traces:

- [FR-FPL-ENT-001](../../../requirements/fr/fpl/entry.md)
- [FR-MCP-TLS-002](../../../requirements/fr/mcp/tools.md)

## HTTP-FPL-ENT-002 — Unknown manager

- Request:
  - Modern MCP request
  - `Mcp-Method: tools/call`
  - `Mcp-Name: fpl_entry`
  - Method: `tools/call`
  - `params.name` = `fpl_entry`
  - `params.arguments` = `{ "entry_id": 999999 }`
- Response:
  - Status: `200`
  - `result.isError` = `true`
  - `result.content[0].type` = `text`
  - `result.content[0].text` contains `999999`
  - No `error` member

Traces:

- [FR-FPL-ENT-004](../../../requirements/fr/fpl/entry.md)
