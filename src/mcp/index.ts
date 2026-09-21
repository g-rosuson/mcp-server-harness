import { McpServer } from "@modelcontextprotocol/server";
import { name, version } from "../../package.json" with { type: "json" };

import modules from "../modules";

/**
 * Fresh MCP server with enrolled domain tools. HTTP transport is not this module's concern.
 */
function createServer(): McpServer {
    const server = new McpServer({
        name,
        version,
    });

    for (const domainModule of modules.list) {
        domainModule.register(server);
    }

    return server;
}

/**
 * Enrollment uniqueness. Call once when the HTTP handler is created, not per request.
 */
function validate(): void {
    modules.validate();
}

const mcp = {
    createServer,
    validate,
};

export default mcp;
