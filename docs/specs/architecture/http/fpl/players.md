# HTTP — Players

`POST /mcp`

## HTTP-FPL-PLR-001 — Search by name

- Request:
  - Modern MCP request
  - `Mcp-Method: tools/call`
  - `Mcp-Name: fpl_search_players`
  - Method: `tools/call`
  - `params.name` = `fpl_search_players`
  - `params.arguments` = `{ "name": "Saka" }`
- Response:
  - Status: `200`
  - `result.isError` is not `true`
  - `result.content[0].type` = `text`
  - `result.content[0].text` is JSON with a `players` array
  - Each player has `id`, `name`, `club`, `position`, `price`, `form`, `total_points`, `selected_by_percent`, and `availability`
  - `price` is in millions

Traces:

- [FR-FPL-PLR-001](../../../requirements/fr/fpl/players.md)
- [FR-MCP-TLS-002](../../../requirements/fr/mcp/tools.md)

## HTTP-FPL-PLR-002 — Search with no name or club

- Request:
  - Modern MCP request
  - `Mcp-Method: tools/call`
  - `Mcp-Name: fpl_search_players`
  - Method: `tools/call`
  - `params.name` = `fpl_search_players`
  - `params.arguments` = `{}`
- Response:
  - Status: `200`
  - `result.isError` = `true`
  - `result.content[0].type` = `text`
  - `result.content[0].text` contains `name` and `club`
  - No `error` member

Traces:

- [FR-FPL-PLR-002](../../../requirements/fr/fpl/players.md)

## HTTP-FPL-PLR-003 — One player

- Request:
  - Modern MCP request
  - `Mcp-Method: tools/call`
  - `Mcp-Name: fpl_player`
  - Method: `tools/call`
  - `params.name` = `fpl_player`
  - `params.arguments` = `{ "player_id": 1 }`
- Response:
  - Status: `200`
  - `result.isError` is not `true`
  - `result.content[0].type` = `text`
  - `result.content[0].text` is JSON with `id`, `name`, `club`, `position`, `price`, `total_points`, `form`, `history`, and `fixtures`
  - Each `history` item has `opponent`, `minutes`, and `points`
  - Each `fixtures` item has `opponent`, `kickoff`, and `difficulty`

Traces:

- [FR-FPL-PLR-004](../../../requirements/fr/fpl/players.md)
- [FR-MCP-TLS-002](../../../requirements/fr/mcp/tools.md)

## HTTP-FPL-PLR-004 — Unknown player

- Request:
  - Modern MCP request
  - `Mcp-Method: tools/call`
  - `Mcp-Name: fpl_player`
  - Method: `tools/call`
  - `params.name` = `fpl_player`
  - `params.arguments` = `{ "player_id": 999999 }`
- Response:
  - Status: `200`
  - `result.isError` = `true`
  - `result.content[0].type` = `text`
  - `result.content[0].text` contains `999999`
  - No `error` member

Traces:

- [FR-FPL-PLR-005](../../../requirements/fr/fpl/players.md)
