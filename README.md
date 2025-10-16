# eslint-config-skyscanner

[![Build Status](https://github.com/Skyscanner/eslint-config-skyscanner/workflows/ESLint%20Config%20Skyscanner%20CI/badge.svg)](https://github.com/Skyscanner/eslint-config-skyscanner/actions)
[![npm version](https://img.shields.io/npm/v/@skyscanner/eslint-config-skyscanner.svg)](https://www.npmjs.com/package/@skyscanner/eslint-config-skyscanner)

This package includes the shareable ESLint configuration used by Skyscanner.

## Installation

```bash
npm install --save-dev @skyscanner/eslint-config-skyscanner
```

Add `"extends": "@skyscanner/eslint-config-skyscanner"` to your `.eslintrc`.

"@skyscanner/eslint-config-skyscanner" currently uses the Jest configuration by default. If your project uses Vitest, you can use the `@skyscanner/eslint-config-skyscanner/vitest` to override test files configuration. For example:

```json
// .eslintrc.json
{
  "extends": ["@skyscanner/eslint-config-skyscanner"],
  "overrides": [
    {
      "files": ["**/*.test.ts?(x)"],
      "extends": ["@skyscanner/eslint-config-skyscanner/vitest"]
    }
  ]
}
```

You can apply it directly at the root if your entire repository uses Vitest, or per project if only some projects, or parts of a project, use Vitest.

## React

`@skyscanner/eslint-config-skyscanner` will try to detect automatically the version of React installed.

If your project doesn't use it or it is not installed in the same `package.json` as `@skyscanner/eslint-config-skyscanner`, it must be manually set in `.eslintrc`:

```
"settings": {
  "react": {
    "version": "16.4"
  }
}
```

## Changelog

[View our up-to-date changelog](./CHANGELOG.md).
