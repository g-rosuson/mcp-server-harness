import {
    ENTRY_DESCRIPTION,
    FIXTURES_DESCRIPTION,
    GAMEWEEK_DESCRIPTION,
    LEAGUE_DESCRIPTION,
    LIVE_DESCRIPTION,
    MY_TEAM_DESCRIPTION,
    NAME,
    PICKS_DESCRIPTION,
    PLAYER_DESCRIPTION,
    SEARCH_PLAYERS_DESCRIPTION,
    TOOL_ENTRY,
    TOOL_FIXTURES,
    TOOL_GAMEWEEK,
    TOOL_LEAGUE,
    TOOL_LIVE,
    TOOL_MY_TEAM,
    TOOL_NAMES,
    TOOL_PICKS,
    TOOL_PLAYER,
    TOOL_SEARCH_PLAYERS,
} from "./constants";
import {
    entryInputSchema,
    fixturesInputSchema,
    gameweekInputSchema,
    leagueInputSchema,
    liveInputSchema,
    picksInputSchema,
    playerInputSchema,
    searchPlayersInputSchema,
    squadInputSchema,
} from "./schemas";
import { entry } from "./tools/entry";
import { fixtures } from "./tools/fixtures";
import { gameweek } from "./tools/gameweek";
import { league } from "./tools/league";
import { live } from "./tools/live";
import { picks } from "./tools/picks";
import { player, searchPlayers } from "./tools/players";
import { squad } from "./tools/squad";

import type { McpServer } from "@modelcontextprotocol/server";
import type { Module } from "../types";

// TODO: review for redundancy and useless tools

/**
 * Registers the Fantasy Premier League read tools. Does not touch HTTP or process lifecycle.
 */
function register(server: McpServer): void {
    server.registerTool(
        TOOL_GAMEWEEK,
        {
            description: GAMEWEEK_DESCRIPTION,
            inputSchema: gameweekInputSchema,
        },
        gameweek,
    );

    server.registerTool(
        TOOL_SEARCH_PLAYERS,
        {
            description: SEARCH_PLAYERS_DESCRIPTION,
            inputSchema: searchPlayersInputSchema,
        },
        searchPlayers,
    );

    server.registerTool(
        TOOL_PLAYER,
        {
            description: PLAYER_DESCRIPTION,
            inputSchema: playerInputSchema,
        },
        player,
    );

    server.registerTool(
        TOOL_FIXTURES,
        {
            description: FIXTURES_DESCRIPTION,
            inputSchema: fixturesInputSchema,
        },
        fixtures,
    );

    server.registerTool(
        TOOL_ENTRY,
        {
            description: ENTRY_DESCRIPTION,
            inputSchema: entryInputSchema,
        },
        entry,
    );

    server.registerTool(
        TOOL_MY_TEAM,
        {
            description: MY_TEAM_DESCRIPTION,
            inputSchema: squadInputSchema,
        },
        squad,
    );

    server.registerTool(
        TOOL_PICKS,
        {
            description: PICKS_DESCRIPTION,
            inputSchema: picksInputSchema,
        },
        picks,
    );

    server.registerTool(
        TOOL_LIVE,
        {
            description: LIVE_DESCRIPTION,
            inputSchema: liveInputSchema,
        },
        live,
    );

    server.registerTool(
        TOOL_LEAGUE,
        {
            description: LEAGUE_DESCRIPTION,
            inputSchema: leagueInputSchema,
        },
        league,
    );
}

const fplModule: Module = {
    name: NAME,
    toolNames: TOOL_NAMES,
    register,
};

export default fplModule;
