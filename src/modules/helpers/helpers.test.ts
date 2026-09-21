import { describe, expect, test } from "bun:test";

import { validateModuleNames, validateToolNames } from "./";

import type { Module } from "../types";

function createFixtureModule(name: string, toolNames: readonly string[]): Module {
    return {
        name,
        toolNames,
        register() {},
    };
}

describe("validateModuleNames", () => {
    test("empty enrollment is ok", () => {
        expect(() => validateModuleNames([])).not.toThrow();
    });

    test("distinct names are ok", () => {
        expect(() => validateModuleNames([createFixtureModule("a", ["one"]), createFixtureModule("b", ["two"])])).not.toThrow();
    });

    test("duplicate names throw", () => {
        expect(() => validateModuleNames([createFixtureModule("a", ["one"]), createFixtureModule("a", ["two"])])).toThrow(
            "Duplicate module name: a",
        );
    });
});

describe("validateToolNames", () => {
    test("empty enrollment is ok", () => {
        expect(() => validateToolNames([])).not.toThrow();
    });

    test("distinct tool names are ok", () => {
        expect(() => validateToolNames([createFixtureModule("a", ["one"]), createFixtureModule("b", ["two"])])).not.toThrow();
    });

    test("duplicate tool names throw", () => {
        expect(() => validateToolNames([createFixtureModule("a", ["echo"]), createFixtureModule("b", ["echo"])])).toThrow(
            "Duplicate tool name: echo",
        );
    });

    test("two tools in one module with the same name throw", () => {
        expect(() => validateToolNames([createFixtureModule("a", ["echo", "echo"])])).toThrow("Duplicate tool name: echo");
    });
});
