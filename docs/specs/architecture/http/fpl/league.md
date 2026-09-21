# HTTP — League

`POST /mcp`

## HTTP-FPL-LGE-001 — First page of a classic league

- Request:
  - Modern MCP request
  - `Mcp-Method: tools/call`
  - `Mcp-Name: fpl_league`
  - Method: `tools/call`
  - `params.name` = `fpl_league`
  - `params.arguments` = `{ "league_id": 1 }`
- Response:
  - Status: `200`
  - `result.isError` is not `true`
  - `result.content[0].type` = `text`
  - `result.content[0].text` is JSON with a `standings` array for page 1
  - Each row has `rank`, `last_rank`, `manager`, `team_name`, `gameweek_points`, and `total_points`

Traces:

- [FR-FPL-LGE-001](../../../requirements/fr/fpl/league.md)
- [FR-FPL-LGE-002](../../../requirements/fr/fpl/league.md)
- [FR-MCP-TLS-002](../../../requirements/fr/mcp/tools.md)

## HTTP-FPL-LGE-002 — Unknown league

- Request:
  - Modern MCP request
  - `Mcp-Method: tools/call`
  - `Mcp-Name: fpl_league`
  - Method: `tools/call`
  - `params.name` = `fpl_league`
  - `params.arguments` = `{ "league_id": 999999 }`
- Response:
  - Status: `200`
  - `result.isError` = `true`
  - `result.content[0].type` = `text`
  - `result.content[0].text` contains `999999`
  - No `error` member

Traces:

- [FR-FPL-LGE-003](../../../requirements/fr/fpl/league.md)
