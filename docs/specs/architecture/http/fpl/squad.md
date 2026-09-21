# HTTP — Squad

`POST /mcp`

## HTTP-FPL-SQD-001 — Operator squad

- Request:
  - Modern MCP request
  - `Mcp-Method: tools/call`
  - `Mcp-Name: fpl_my_team`
  - Method: `tools/call`
  - `params.name` = `fpl_my_team`
  - `params.arguments` = `{}`
  - Operator refresh token and team id are configured
- Response:
  - Status: `200`
  - `result.isError` is not `true`
  - `result.content[0].type` = `text`
  - `result.content[0].text` is JSON with `bank`, `squad_value`, `free_transfers`, `players`, and `chips`
  - Each player has `name`, `club`, `position`, `slot`, and `price`
  - `chips` has `available` and `used`
  - `price`, `bank`, and `squad_value` are in millions

Traces:

- [FR-FPL-SQD-001](../../../requirements/fr/fpl/squad.md)
- [FR-FPL-SQD-002](../../../requirements/fr/fpl/squad.md)
- [FR-FPL-SQD-003](../../../requirements/fr/fpl/squad.md)
- [FR-MCP-TLS-002](../../../requirements/fr/mcp/tools.md)

## HTTP-FPL-SQD-002 — Squad without credentials

- Request:
  - Modern MCP request
  - `Mcp-Method: tools/call`
  - `Mcp-Name: fpl_my_team`
  - Method: `tools/call`
  - `params.name` = `fpl_my_team`
  - `params.arguments` = `{}`
  - No operator refresh token configured
- Response:
  - Status: `200`
  - `result.isError` = `true`
  - `result.content[0].type` = `text`
  - `result.content[0].text` contains `FPL_REFRESH_TOKEN`
  - No `error` member

Traces:

- [FR-FPL-SQD-004](../../../requirements/fr/fpl/squad.md)
