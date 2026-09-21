# Players

- **FR-FPL-PLR-001** — The system shall return players that match a name, a club, or both, including each player's id, name, club, position, price in millions, form, total points, selection percentage, and availability.
- **FR-FPL-PLR-002** — The system shall refuse a player search that supplies neither a name nor a club, and shall return that refusal as a tool error on a completed response.
- **FR-FPL-PLR-003** — When a position or a maximum price is supplied with a name or a club, the system shall return only players that also match that position or maximum price.
- **FR-FPL-PLR-004** — The system shall return one player's id, name, club, position, price in millions, total points, form, per-gameweek history (opponent, minutes, points), and upcoming fixtures (opponent, kickoff, difficulty) when given that player's id.
- **FR-FPL-PLR-005** — The system shall refuse an unknown player id, and shall return that refusal as a tool error on a completed response.
