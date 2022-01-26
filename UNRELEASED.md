# UNRELEASED

This project adheres to [Semantic Versioning](http://semver.org/).

**Breaking**

- Published under the `@skyscanner/` scope. To upgrade:
  - First uninstall `eslint-config-skyscanner`, then install `@skyscanner/eslint-config-skyscanner`.
  - In `eslintrc` file, update from `extends: ['skyscanner']` to `extends: ['@skyscanner/skyscanner']`.
- Change import groups order, and paths must be sorted alphabetically (fixable using `--fix`).
- Require object destructure key to be sorted (fixable using `--fix`).
- Bump eslint-plugin-jest-formatting from 2.0.1 to 3.1.0
- Bump eslint-plugin-jest from 24.3.6 to 26.0.0

**Updated**

- Bump eslint from 7.25.0 to 7.32.0
- Bump eslint-plugin-import from 2.22.1 to 2.25.4
- Bump @typescript-eslint/parser from 5.9.1 to 5.10.1
- Bump @typescript-eslint/eslint-plugin from 5.9.0 to 5.10.1
