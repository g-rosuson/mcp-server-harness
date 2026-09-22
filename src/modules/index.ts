import echo from "./echo";
import fpl from "./fpl";

import type { Module } from "./types";

const list: readonly Module[] = [echo, fpl];

const modules = {
    list,
};

export default modules;
