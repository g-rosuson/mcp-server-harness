# HTTP — FPL upstream failure

`POST /mcp`

## HTTP-FPL-ERR-001 — Fantasy Premier League unavailable

- Request:
  - Modern MCP request
  - `Mcp-Method: tools/call`
  - `Mcp-Name: fpl_gameweek`
  - Method: `tools/call`
  - `params.name` = `fpl_gameweek`
  - `params.arguments` = `{}`
  - Fantasy Premier League does not return gameweek data
- Response:
  - Status: `200`
  - `result.isError` = `true`
  - `result.content[0].type` = `text`
  - No `error` member

Traces:

- [FR-FPL-ERR-001](../../../requirements/fr/fpl/errors.md)
