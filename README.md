# eslint-config-skyscanner

[![Build Status](https://github.com/Skyscanner/eslint-config-skyscanner/workflows/ESLint%20Config%20Skyscanner%20CI/badge.svg)](https://github.com/Skyscanner/eslint-config-skyscanner/actions)
[![npm version](https://img.shields.io/npm/v/@skyscanner/eslint-config-skyscanner.svg)](https://www.npmjs.com/package/@skyscanner/eslint-config-skyscanner)

This package includes the shareable ESLint configuration used by Skyscanner.

## Installation

```bash
npm install --save-dev @skyscanner/eslint-config-skyscanner
```

Add `"extends": "@skyscanner/eslint-config-skyscanner"` to your `.eslintrc`.

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

## Rules included in this repository

Custom rules are currently wrapped in a locally-installed package.
This will no longer be needed once the eslint version used accepts objects as shown in
[custom rules tutorial](https://eslint.org/docs/latest/extend/custom-rule-tutorial#step-8-use-the-plugin-locally).

## Changelog

[View our up-to-date changelog](./CHANGELOG.md).
