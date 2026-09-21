# Live points

- **FR-FPL-LIV-001** — The system shall return live points, minutes, and bonus for each supplied player in a gameweek.
- **FR-FPL-LIV-002** — When no players are supplied, the system shall return live points for the players in the operator's squad for that gameweek.
- **FR-FPL-LIV-003** — When no gameweek is supplied, the system shall use the current gameweek.
- **FR-FPL-LIV-004** — The system shall refuse a live request that supplies no players when no operator team is configured, and shall return that refusal as a tool error on a completed response.
