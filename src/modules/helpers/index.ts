import type { Module } from "../types";

/**
 * Throws when two enrolled modules share a `name`.
 */
function validateModuleNames(modules: readonly Module[]): void {
    const names = new Set<string>();

    for (const domainModule of modules) {
        if (names.has(domainModule.name)) {
            throw new Error(`Duplicate module name: ${domainModule.name}`);
        }

        names.add(domainModule.name);
    }
}

/**
 * Throws when two enrolled tools share a name, including two tools in one module.
 * MCP looks up tools by name only.
 */
function validateToolNames(modules: readonly Module[]): void {
    const toolNames = new Set<string>();

    for (const domainModule of modules) {
        for (const toolName of domainModule.toolNames) {
            if (toolNames.has(toolName)) {
                throw new Error(`Duplicate tool name: ${toolName}`);
            }

            toolNames.add(toolName);
        }
    }
}

/**
 * Enrollment invariants for a module catalog. Call once at boot, not per request.
 */
function validate(modules: readonly Module[]): void {
    validateModuleNames(modules);
    validateToolNames(modules);
}

export { validate, validateModuleNames, validateToolNames };
