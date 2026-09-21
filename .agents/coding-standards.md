# Coding standards

Write TypeScript a teammate can read top to bottom. Prefer clear names and small files over cleverness.

## Types

Use an `interface` for object shapes. Use a `type` alias for unions, intersections, and mapped types.

Shared shapes live in `src/shared/types` (Zod in `src/shared/schemas`). Feature types live in that feature's `types/` when they are shared between feature files and/or are more then one.

Import types with the `type` keyword `import type ...`.

## Folders

Colocate a module when it has tests, types, schemas, helpers, mappers, or constants:

```text
src/<feature>/<module>/
  <module>.ts
  <module>.test.ts
  helpers/index.ts
  schemas/index.ts
  mappers/index.ts
  constants/index.ts
  types/index.ts
```

Import those folders as `./helpers`, `./schemas`, `./mappers`, `./constants`, or `./types`.

Declare names in the file and export them together at the bottom (`export { start, state }`). Do not export on the declaration.

## Functions

JSDoc every function: what it does, plus defaults, throws, and side effects a caller needs.

Name parameters for what they are (`context`, `config`, `error`). No single-letter names.

Separate logic blocks with a blank line. Comment in plain English, next to the code, only when the next block is not obvious.
