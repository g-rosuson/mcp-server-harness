# HTTP — Gameweek

`POST /mcp`

## HTTP-FPL-GWK-001 — Current and next gameweek

- Request:
  - Modern MCP request
  - `Mcp-Method: tools/call`
  - `Mcp-Name: fpl_gameweek`
  - Method: `tools/call`
  - `params.name` = `fpl_gameweek`
  - `params.arguments` = `{}`
- Response:
  - Status: `200`
  - `result.isError` is not `true`
  - `result.content[0].type` = `text`
  - `result.content[0].text` is JSON with `current` and `next`, each having `name`, `deadline`, and `finished`

Traces:

- [FR-FPL-GWK-001](../../../requirements/fr/fpl/gameweek.md)
- [FR-MCP-TLS-002](../../../requirements/fr/mcp/tools.md)

## HTTP-FPL-GWK-002 — One gameweek

- Request:
  - Modern MCP request
  - `Mcp-Method: tools/call`
  - `Mcp-Name: fpl_gameweek`
  - Method: `tools/call`
  - `params.name` = `fpl_gameweek`
  - `params.arguments` = `{ "gameweek": 1 }`
- Response:
  - Status: `200`
  - `result.isError` is not `true`
  - `result.content[0].type` = `text`
  - `result.content[0].text` is JSON with `name`, `deadline`, and `finished` for gameweek 1

Traces:

- [FR-FPL-GWK-002](../../../requirements/fr/fpl/gameweek.md)
- [FR-MCP-TLS-002](../../../requirements/fr/mcp/tools.md)

## HTTP-FPL-GWK-003 — Gameweek not in the season

- Request:
  - Modern MCP request
  - `Mcp-Method: tools/call`
  - `Mcp-Name: fpl_gameweek`
  - Method: `tools/call`
  - `params.name` = `fpl_gameweek`
  - `params.arguments` = `{ "gameweek": 99 }`
- Response:
  - Status: `200`
  - `result.isError` = `true`
  - `result.content[0].type` = `text`
  - `result.content[0].text` contains `99`
  - No `error` member

Traces:

- [FR-FPL-GWK-003](../../../requirements/fr/fpl/gameweek.md)
