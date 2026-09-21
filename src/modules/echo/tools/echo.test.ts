import { describe, expect, test } from "bun:test";

import { echo } from "./echo";

describe("echo", () => {
    test("returns the provided message", async () => {
        const result = await echo({ message: "hello" });

        expect(result.content[0]?.text).toBe("You said: hello");
    });
});
