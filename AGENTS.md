# AGENTS.md

Guidance for AI coding agents working in this repository.

## What this package is

`@skyscanner/eslint-config-skyscanner` is Skyscanner's shareable ESLint config, distributed as an npm package. Consumers add `"extends": "@skyscanner/eslint-config-skyscanner"` to their `.eslintrc`. There is no application here — every change ripples out to every Skyscanner repo that consumes the config, so be conservative with rule changes.

The package is ESLint v8 / legacy `.eslintrc`-style only. It does not ship a flat-config entrypoint.

## Commands

- `npm run lint` — lint this repo's own JS (the config source). Equivalent to `npm run lint:js`.
- `npm run lint:js:fix` — auto-fix where possible.
- `npm test` — runs `test/e2e-test.sh`, which `cd`s into `test/`, does a fresh `npm install --no-shrinkwrap --no-package-lock`, and lints fixtures. There is no unit-test layer.
- `(cd test && npm run test:fail-react)` — run a single fixture (substitute any of `test:pass`, `test:fail-jsdoc`, `test:fail-bpk`, `test:fail-prettier`, `test:fail-react`, `test:fail-import-order`, `test:fail-no-axios`, `test:fail-compat`).
- Pre-commit runs `lint-staged` via husky; it formats markdown/JSON/YAML with prettier and runs `lint:js:fix` on `**/*.js`.

If `npm install` fails on the Skyscanner network, append `--registry=https://artifactory.skyscannertools.net/artifactory/api/npm/npm/`.

## Architecture

Three top-level entry files, all CommonJS:

- **`index.js`** — the main config (`exports["."]`). Extends `airbnb` + `prettier` + a stack of plugin recommendeds (`compat`, `eslint-comments`, `jest`, `jest-formatting`, `react-hooks`, `import/typescript`, `react/jsx-runtime`). It also configures `import/resolver` to find `eslint-import-resolver-typescript` whether the consumer uses npm (nested `node_modules`) or pnpm (hoisted) — see the comment block at `index.js:28` for the reasoning. A `**/*.ts?(x)` override swaps in `@typescript-eslint/parser` and turns on the TS-flavoured equivalents of the JS rules.
- **`vitest.js`** — alternate test-files config (`exports["./vitest"]`). Extends `./index.js` and `plugin:@vitest/legacy-recommended`, then explicitly turns off every `jest/*` rule and re-enables a couple of vitest-equivalents. Consumers apply this via `overrides` for their test glob (see README).
- **`main.js`** — a `postinstall` bin script. When a consumer installs the package, it scaffolds `.eslintrc.json` and `.prettierrc` from the `*.template` files if the consumer doesn't already have them. Skipped when `DISABLE_SKYSCANNER_ESLINT_WITH_PRETTIER_INSTALL_SCRIPT=1`. Touch this carefully — it runs in every consumer's install.

### How tests work

The test suite is end-to-end: each `test/*-fail.*` fixture is a file deliberately written to violate a specific rule, and each `test/package.json` script runs ESLint against it and asserts a non-zero exit. `test/pass.jsx` is the inverse — must lint clean. `test/react-fail.tsx` is unusual because it uses `--max-warnings=0` so that the React-19 prep rules (which we ship at `warn`) still cause a failure. When adding a rule:

1. Add a fixture under `test/` that triggers it.
2. Add a `test:fail-*` script in `test/package.json` and chain it into the `test` script.
3. If the rule is `warn`, use `--max-warnings=0` like `test:fail-react` does.

### React 18→19 transition rules

`index.js` ships three `@eslint-react/*` rules at `warn` (`no-default-props`, `no-forward-ref`, `no-unstable-default-props`) as pre-migration signals. They are intentionally non-breaking — the plan is to flip to `error` in a later major once consumers are clean. See `docs/react-19-migration-prep.md` and the inline comments at `index.js:87` for the rationale. `REACT_19_ESLINT_PLAN.md` (untracked, working notes) has the longer plan.

`peerDependencies` declares `react`/`react-dom` as `18.3.1 - 19.2.5` and both are optional — don't tighten this without coordinating with consuming repos.

## Conventions specific to this repo

- **Do not bump `package.json#version` in PRs.** The version on `main` is stale (`15.0.0` at time of writing) while published releases are far ahead (22.x). Releases are cut post-merge via the GitHub Releases UI; CI publishes on the resulting tag. See `docs/releasing.md`. The one exception is local alpha/beta workflows, which use `npm version` _without committing_.
- New JS files need the Apache-2.0 header — see `CONTRIBUTING.md` for the exact block.
- When disabling or relaxing a rule from `airbnb`, leave a comment explaining _why_ (this is the existing pattern throughout `index.js`) — these decisions are read by every consumer trying to understand a lint error.
- Node `>=20.19.0` is required (`.nvmrc` pins the dev version); don't use syntax newer than that.
