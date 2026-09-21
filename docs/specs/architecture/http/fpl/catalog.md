# HTTP — FPL tool catalog

`POST /mcp`

## HTTP-FPL-CAT-001 — List Fantasy Premier League tools

- Request:
  - [HTTP-MCP-PRT-001](../mcp/protocol.md)
- Response:
  - Status: `200`
  - `result.tools` includes each tool below with that description
  - `inputSchema.required` is absent or empty when no argument is required

`fpl_gameweek` — Returns the current and next gameweek, or one numbered gameweek. Optional `gameweek` integer.

`fpl_search_players` — Returns players matching a name, a club, or both. Optional `name`, `club`, and `position` strings, and optional `max_price` number.

`fpl_player` — Returns one player's season summary, gameweek history, and upcoming fixtures. Required `player_id` integer.

`fpl_fixtures` — Returns fixtures for a gameweek. Optional `gameweek` integer.

`fpl_entry` — Returns a manager's rank, points, and classic-league ids. Optional `entry_id` integer.

`fpl_my_team` — Returns the operator's squad, bank, free transfers, and chips. No arguments.

`fpl_picks` — Returns a manager's lineup, captain, chip, and gameweek points. Optional `entry_id` and `gameweek` integers.

`fpl_live` — Returns live points for named players or the operator's squad. Optional `gameweek` integer and optional `player_ids` array of integers.

`fpl_league` — Returns a page of classic-league standings. Required `league_id` integer. Optional `page` integer.

Traces:

- [FR-MCP-TLS-001](../../../requirements/fr/mcp/tools.md)
