# HTTP — Fixtures

`POST /mcp`

## HTTP-FPL-FIX-001 — Current gameweek fixtures

- Request:
  - Modern MCP request
  - `Mcp-Method: tools/call`
  - `Mcp-Name: fpl_fixtures`
  - Method: `tools/call`
  - `params.name` = `fpl_fixtures`
  - `params.arguments` = `{}`
- Response:
  - Status: `200`
  - `result.isError` is not `true`
  - `result.content[0].type` = `text`
  - `result.content[0].text` is JSON with a `fixtures` array for the current gameweek
  - Each fixture has `home`, `away`, `kickoff`, `home_difficulty`, and `away_difficulty`
  - A played fixture also has `home_score` and `away_score`

Traces:

- [FR-FPL-FIX-001](../../../requirements/fr/fpl/fixtures.md)
- [FR-FPL-FIX-002](../../../requirements/fr/fpl/fixtures.md)
- [FR-MCP-TLS-002](../../../requirements/fr/mcp/tools.md)
