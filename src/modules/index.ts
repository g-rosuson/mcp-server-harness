import echo from "./echo";
import { validate as validateCatalog } from "./helpers";

import type { Module } from "./types";

const list: readonly Module[] = [echo];

/**
 * Checks the enrolled catalog. Safe to call more than once; does not mutate `list`.
 */
function validate(): void {
    validateCatalog(list);
}

const modules = {
    list,
    validate,
};

export default modules;
