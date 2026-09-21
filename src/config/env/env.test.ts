import { describe, expect, test } from "bun:test";
import { version } from "../../../package.json" with { type: "json" };
import { parseEnv } from "./env.ts";

const requiredEnv = {
    HOST: "127.0.0.1",
    PORT: "3000",
    LOG_LEVEL: "info",
    SHUTDOWN_TIMEOUT_MS: "10000",
};

describe("parseEnv", () => {
    test("happy path on loopback fills allowed hosts from LOOPBACK_HOSTS", () => {
        const config = parseEnv(requiredEnv);

        expect(config.HOST).toBe("127.0.0.1");
        expect(config.PORT).toBe(3000);
        expect(config.LOG_LEVEL).toBe("info");
        expect(config.MCP_ALLOWED_HOSTS).toEqual(["localhost", "127.0.0.1", "::1"]);
        expect(config.MCP_ALLOWED_ORIGINS).toBeUndefined();
        expect(config.SENTRY_DSN).toBeUndefined();
        expect(config.SENTRY_ENVIRONMENT).toBe("production");
        expect(config.SENTRY_RELEASE).toBe(version);
        expect(config.SENTRY_TRACES_SAMPLE_RATE).toBe(0);
        expect(config.SHUTDOWN_TIMEOUT_MS).toBe(10000);
    });

    test("missing required keys fails", () => {
        expect(() => parseEnv({})).toThrow();
    });

    test("empty SENTRY_DSN is ok", () => {
        const config = parseEnv({ ...requiredEnv, SENTRY_DSN: "" });

        expect(config.SENTRY_DSN).toBeUndefined();
    });

    test("HOST=0.0.0.0 without MCP_ALLOWED_HOSTS fails", () => {
        expect(() => parseEnv({ ...requiredEnv, HOST: "0.0.0.0" })).toThrow();
    });

    test("HOST=0.0.0.0 with MCP_ALLOWED_HOSTS succeeds", () => {
        const config = parseEnv({
            ...requiredEnv,
            HOST: "0.0.0.0",
            MCP_ALLOWED_HOSTS: "localhost,example.com",
        });

        expect(config.HOST).toBe("0.0.0.0");
        expect(config.MCP_ALLOWED_HOSTS).toEqual(["localhost", "example.com"]);
    });

    test("SENTRY_DSN sets a default traces sample rate", () => {
        const config = parseEnv({
            ...requiredEnv,
            SENTRY_DSN: "https://public@o0.ingest.sentry.io/1",
        });

        expect(config.SENTRY_DSN).toBe("https://public@o0.ingest.sentry.io/1");
        expect(config.SENTRY_ENVIRONMENT).toBe("production");
        expect(config.SENTRY_RELEASE).toBe(version);
        expect(config.SENTRY_TRACES_SAMPLE_RATE).toBe(0.1);
    });

    test("SENTRY_ENVIRONMENT and SENTRY_RELEASE pass through", () => {
        const config = parseEnv({
            ...requiredEnv,
            SENTRY_ENVIRONMENT: "staging",
            SENTRY_RELEASE: "1.2.3",
        });

        expect(config.SENTRY_ENVIRONMENT).toBe("staging");
        expect(config.SENTRY_RELEASE).toBe("1.2.3");
    });

    test("SENTRY_ENVIRONMENT with a space fails", () => {
        expect(() => parseEnv({ ...requiredEnv, SENTRY_ENVIRONMENT: "staging us" })).toThrow();
    });
});
