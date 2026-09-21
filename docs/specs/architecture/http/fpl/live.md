# HTTP — Live points

`POST /mcp`

## HTTP-FPL-LIV-001 — Live points for named players

- Request:
  - Modern MCP request
  - `Mcp-Method: tools/call`
  - `Mcp-Name: fpl_live`
  - Method: `tools/call`
  - `params.name` = `fpl_live`
  - `params.arguments` = `{ "gameweek": 1, "player_ids": [1] }`
- Response:
  - Status: `200`
  - `result.isError` is not `true`
  - `result.content[0].type` = `text`
  - `result.content[0].text` is JSON with a `players` array
  - Each player has `id`, `points`, `minutes`, and `bonus`

Traces:

- [FR-FPL-LIV-001](../../../requirements/fr/fpl/live.md)
- [FR-MCP-TLS-002](../../../requirements/fr/mcp/tools.md)
