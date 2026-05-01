# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

`@skyscanner/eslint-config-skyscanner` — Skyscanner's shareable ESLint configuration, published to npm. It is consumed by other Skyscanner repos via `extends: ["@skyscanner/eslint-config-skyscanner"]`. The package itself is small; most changes here are rule tweaks or dependency bumps that propagate outward to every consumer, so regressions have a wide blast radius.

## Commands

- `npm run lint` / `npm run lint:js:fix` — lint this repo's own JS (via the root `.eslintrc.json`, which extends `./index.js`).
- `npm test` — runs `test/e2e-test.sh`, which `cd`s into `test/`, does a fresh `npm install --no-shrinkwrap --no-package-lock`, then runs eslint against a set of pass/fail fixtures. The fresh install is intentional — it exercises the package as a real consumer would, so `package-lock.json` must not be committed under `test/`.
- Run a single fixture: `cd test && npx eslint pass.jsx` (or any `*-fail.*` fixture). Fail fixtures are expected to exit with code 1; see `test/package.json` scripts for the wrapper that inverts exit codes.
- `./main.js` is the postinstall script that runs in consumer repos (not here) — do not execute it locally unless simulating an install.

## Architecture

Three entry points, each doing a different job:

- **`index.js`** — the default config. Extends `airbnb`, `prettier`, `plugin:compat/recommended`, `plugin:jest/recommended`, `plugin:react-hooks/recommended`, plus Skyscanner's `@skyscanner/eslint-plugin-rules` (provides `no-axios`, `no-enum`). Parser is `@babel/eslint-parser` for JS/JSX; a TypeScript override block swaps in `@typescript-eslint/parser` for `*.ts`/`*.tsx` and layers on TS-specific rules. `env.browser = true` — this config assumes browser code by default.
- **`vitest.js`** — exported via the `./vitest` subpath (`package.json#exports`). Extends `./index.js` and `plugin:@vitest/legacy-recommended`, then explicitly turns off every `jest/*` rule and re-enables Vitest equivalents. Consumers opt in per-override (see README) — it's not the default because Jest still dominates the consumer base.
- **`main.js`** — postinstall hook (`"postinstall": "node ./main.js"`). In the _consumer's_ `INIT_CWD`, creates `.eslintrc.json` and `.prettierrc` from the `*.template` files if none exist, else prints guidance. Gated by `DISABLE_SKYSCANNER_ESLINT_WITH_PRETTIER_INSTALL_SCRIPT=1`. Changes here affect first-install UX in every downstream repo.

### Import resolver quirk

`index.js` resolves `eslint-import-resolver-typescript` via `require.resolve(..., { paths: [...] })` rather than naming it directly. This is deliberate: it makes the config work under both nested (npm) and hoisted (pnpm) `node_modules` layouts without forcing consumers to install the resolver themselves. If you touch this block, test against both package managers.

### Test fixtures

`test/*.jsx|tsx|js` fixtures each target one rule or rule group (`bpk-token-fail`, `jsdoc-fail`, `no-axios-fail`, `no-browser-fail` for compat, `order-fail` for import/order, `prettier-fail`, `react-fail`, and a single `pass.jsx`). When adding or changing a rule, add or update a fixture and wire it into `test/package.json`'s `test` script — the e2e pipeline is the safety net for rule changes.

## Adding/changing rules

- Most consumer-visible changes are breaking even when they look small. The migration docs in `docs/migration-from-*.md` are the model for how major-version bumps are communicated — if a change would force consumers to modify code or disable a rule, it probably needs a major version and a migration note.
- When overriding an airbnb rule, keep the comment block explaining _why_ (see existing examples in `index.js`) — these comments are the primary record of design intent and the rationale the maintainers will reach for next time the rule is questioned.
- TypeScript rules live in the `overrides` block at the bottom of `index.js`. If adding a `@typescript-eslint/*` version of an existing ESLint rule, disable the base rule in the same block (pattern already established for `no-unused-vars`, `no-redeclare`, etc.).

## Releasing

Stable releases are cut from the GitHub Releases UI (see `docs/releasing.md`) — CI publishes on tag. Alpha/beta: `npm version <x.y.z-beta.N>` then `npm publish --registry=https://registry.npmjs.org/ --tag alpha|beta`. Do not publish from a local machine for stable versions.

## Licence header

New source files need the Apache 2.0 header shown in `CONTRIBUTING.md`. The existing files all use the 2021 year — match the style of neighbouring files.
