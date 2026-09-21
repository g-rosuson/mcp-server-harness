# TKT-FPL-001 — Fantasy Premier League module

`feat/tkt-fpl-001-fantasy-module`

Labels: `feature`

## User story

As a Fantasy Premier League manager, I want the current gameweek, my squad, fixtures, player form, live points, rank, and league table so that I can plan the gameweek from the MCP client.

## Definition of done

- [ ] Enroll module `fpl` in [`src/modules/index.ts`](../../../src/modules/index.ts) (`name`, `toolNames`, `register` per [ADR-0004](../../specs/architecture/adr/0004-module-catalog.md))
- [ ] Register these read tools. [HTTP-FPL-CAT-001](../../specs/architecture/http/fpl/catalog.md) lists each name, description, and input schema:
  - [ ] `fpl_gameweek` — [FR-FPL-GWK](../../specs/requirements/fr/fpl/gameweek.md), [HTTP-FPL-GWK](../../specs/architecture/http/fpl/gameweek.md)
  - [ ] `fpl_search_players` and `fpl_player` — [FR-FPL-PLR](../../specs/requirements/fr/fpl/players.md), [HTTP-FPL-PLR](../../specs/architecture/http/fpl/players.md). Search hits are a filtered subset of bootstrap players
  - [ ] `fpl_fixtures` — [FR-FPL-FIX](../../specs/requirements/fr/fpl/fixtures.md), [HTTP-FPL-FIX](../../specs/architecture/http/fpl/fixtures.md)
  - [ ] `fpl_entry` — [FR-FPL-ENT](../../specs/requirements/fr/fpl/entry.md), [HTTP-FPL-ENT](../../specs/architecture/http/fpl/entry.md)
  - [ ] `fpl_my_team` — [FR-FPL-SQD](../../specs/requirements/fr/fpl/squad.md), [HTTP-FPL-SQD](../../specs/architecture/http/fpl/squad.md)
  - [ ] `fpl_picks` — [FR-FPL-PCK](../../specs/requirements/fr/fpl/picks.md), [HTTP-FPL-PCK](../../specs/architecture/http/fpl/picks.md)
  - [ ] `fpl_live` — [FR-FPL-LIV](../../specs/requirements/fr/fpl/live.md), [HTTP-FPL-LIV](../../specs/architecture/http/fpl/live.md)
  - [ ] `fpl_league` — [FR-FPL-LGE](../../specs/requirements/fr/fpl/league.md), [HTTP-FPL-LGE](../../specs/architecture/http/fpl/league.md)
- [ ] Public reads use `bootstrap-static`, `element-summary/{id}`, `fixtures`, `event/{gameweek}/live`, `entry/{id}`, `entry/{id}/event/{gameweek}/picks`, and `leagues-classic/{id}/standings`. The squad tool uses `my-team/{entry}` with `X-API-Authorization`
- [ ] Keep one in-memory copy of bootstrap data for the process and reuse it across tools
- [ ] Read `FPL_REFRESH_TOKEN` and `FPL_ENTRY_ID` in the module, and document both in [`.env.example`](../../../.env.example). Leave them out of the platform env schema. Token exchange, refresh-token rotation, and one retry on 401/403 follow [FPL authentication](../../fpl-authentication.md)
- [ ] Unit tests under `src/modules/fpl/` mock the Fantasy Premier League API and cite the FR id, as in [`echo.test.ts`](../../../src/modules/echo/tools/echo.test.ts). Cover position and price filters ([FR-FPL-PLR-003](../../specs/requirements/fr/fpl/players.md)), operator-team defaults ([FR-FPL-ENT-002](../../specs/requirements/fr/fpl/entry.md), [FR-FPL-PCK-002](../../specs/requirements/fr/fpl/picks.md), [FR-FPL-PCK-003](../../specs/requirements/fr/fpl/picks.md), [FR-FPL-LIV-002](../../specs/requirements/fr/fpl/live.md), [FR-FPL-LIV-003](../../specs/requirements/fr/fpl/live.md)), missing operator team ([FR-FPL-ENT-003](../../specs/requirements/fr/fpl/entry.md), [FR-FPL-PCK-004](../../specs/requirements/fr/fpl/picks.md), [FR-FPL-LIV-004](../../specs/requirements/fr/fpl/live.md)), token rotation ([FR-FPL-SQD-005](../../specs/requirements/fr/fpl/squad.md)), public access without a refresh token ([FR-FPL-ACC-001](../../specs/requirements/fr/fpl/access.md)), and upstream failure ([HTTP-FPL-ERR-001](../../specs/architecture/http/fpl/errors.md))
- [ ] `bun test` passes

## Traces

- [FR-FPL-GWK-001](../../specs/requirements/fr/fpl/gameweek.md)
- [FR-FPL-GWK-002](../../specs/requirements/fr/fpl/gameweek.md)
- [FR-FPL-GWK-003](../../specs/requirements/fr/fpl/gameweek.md)
- [FR-FPL-PLR-001](../../specs/requirements/fr/fpl/players.md)
- [FR-FPL-PLR-002](../../specs/requirements/fr/fpl/players.md)
- [FR-FPL-PLR-003](../../specs/requirements/fr/fpl/players.md)
- [FR-FPL-PLR-004](../../specs/requirements/fr/fpl/players.md)
- [FR-FPL-PLR-005](../../specs/requirements/fr/fpl/players.md)
- [FR-FPL-FIX-001](../../specs/requirements/fr/fpl/fixtures.md)
- [FR-FPL-FIX-002](../../specs/requirements/fr/fpl/fixtures.md)
- [FR-FPL-ENT-001](../../specs/requirements/fr/fpl/entry.md)
- [FR-FPL-ENT-002](../../specs/requirements/fr/fpl/entry.md)
- [FR-FPL-ENT-003](../../specs/requirements/fr/fpl/entry.md)
- [FR-FPL-ENT-004](../../specs/requirements/fr/fpl/entry.md)
- [FR-FPL-SQD-001](../../specs/requirements/fr/fpl/squad.md)
- [FR-FPL-SQD-002](../../specs/requirements/fr/fpl/squad.md)
- [FR-FPL-SQD-003](../../specs/requirements/fr/fpl/squad.md)
- [FR-FPL-SQD-004](../../specs/requirements/fr/fpl/squad.md)
- [FR-FPL-SQD-005](../../specs/requirements/fr/fpl/squad.md)
- [FR-FPL-PCK-001](../../specs/requirements/fr/fpl/picks.md)
- [FR-FPL-PCK-002](../../specs/requirements/fr/fpl/picks.md)
- [FR-FPL-PCK-003](../../specs/requirements/fr/fpl/picks.md)
- [FR-FPL-PCK-004](../../specs/requirements/fr/fpl/picks.md)
- [FR-FPL-LIV-001](../../specs/requirements/fr/fpl/live.md)
- [FR-FPL-LIV-002](../../specs/requirements/fr/fpl/live.md)
- [FR-FPL-LIV-003](../../specs/requirements/fr/fpl/live.md)
- [FR-FPL-LIV-004](../../specs/requirements/fr/fpl/live.md)
- [FR-FPL-LGE-001](../../specs/requirements/fr/fpl/league.md)
- [FR-FPL-LGE-002](../../specs/requirements/fr/fpl/league.md)
- [FR-FPL-LGE-003](../../specs/requirements/fr/fpl/league.md)
- [FR-FPL-ACC-001](../../specs/requirements/fr/fpl/access.md)
- [FR-FPL-ERR-001](../../specs/requirements/fr/fpl/errors.md)
- [FR-MCP-TLS-001](../../specs/requirements/fr/mcp/tools.md)
- [FR-MCP-TLS-002](../../specs/requirements/fr/mcp/tools.md)
- [FR-MCP-CAT-002](../../specs/requirements/fr/mcp/catalog.md)
- [HTTP-FPL-CAT-001](../../specs/architecture/http/fpl/catalog.md)
- [HTTP-FPL-GWK-001](../../specs/architecture/http/fpl/gameweek.md)
- [HTTP-FPL-GWK-002](../../specs/architecture/http/fpl/gameweek.md)
- [HTTP-FPL-GWK-003](../../specs/architecture/http/fpl/gameweek.md)
- [HTTP-FPL-PLR-001](../../specs/architecture/http/fpl/players.md)
- [HTTP-FPL-PLR-002](../../specs/architecture/http/fpl/players.md)
- [HTTP-FPL-PLR-003](../../specs/architecture/http/fpl/players.md)
- [HTTP-FPL-PLR-004](../../specs/architecture/http/fpl/players.md)
- [HTTP-FPL-FIX-001](../../specs/architecture/http/fpl/fixtures.md)
- [HTTP-FPL-ENT-001](../../specs/architecture/http/fpl/entry.md)
- [HTTP-FPL-ENT-002](../../specs/architecture/http/fpl/entry.md)
- [HTTP-FPL-SQD-001](../../specs/architecture/http/fpl/squad.md)
- [HTTP-FPL-SQD-002](../../specs/architecture/http/fpl/squad.md)
- [HTTP-FPL-PCK-001](../../specs/architecture/http/fpl/picks.md)
- [HTTP-FPL-LIV-001](../../specs/architecture/http/fpl/live.md)
- [HTTP-FPL-LGE-001](../../specs/architecture/http/fpl/league.md)
- [HTTP-FPL-LGE-002](../../specs/architecture/http/fpl/league.md)
- [HTTP-FPL-ERR-001](../../specs/architecture/http/fpl/errors.md)
