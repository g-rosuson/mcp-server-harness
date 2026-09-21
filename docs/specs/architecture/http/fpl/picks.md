# HTTP — Picks

`POST /mcp`

## HTTP-FPL-PCK-001 — Lineup for a manager and gameweek

- Request:
  - Modern MCP request
  - `Mcp-Method: tools/call`
  - `Mcp-Name: fpl_picks`
  - Method: `tools/call`
  - `params.name` = `fpl_picks`
  - `params.arguments` = `{ "entry_id": 1, "gameweek": 1 }`
- Response:
  - Status: `200`
  - `result.isError` is not `true`
  - `result.content[0].type` = `text`
  - `result.content[0].text` is JSON with `starters`, `bench`, `captain`, `vice_captain`, `active_chip`, and `gameweek_points`

Traces:

- [FR-FPL-PCK-001](../../../requirements/fr/fpl/picks.md)
- [FR-MCP-TLS-002](../../../requirements/fr/mcp/tools.md)
