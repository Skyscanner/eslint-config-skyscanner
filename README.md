# eslint-config-skyscanner

[![Build Status](https://github.com/Skyscanner/eslint-config-skyscanner/workflows/ESLint%20Config%20Skyscanner%20CI/badge.svg)](https://github.com/Skyscanner/eslint-config-skyscanner/actions)
[![npm version](https://img.shields.io/npm/v/@skyscanner/eslint-config-skyscanner.svg)](https://www.npmjs.com/package/@skyscanner/eslint-config-skyscanner)

This package includes the shareable ESLint configuration used by Skyscanner.

## Installation

```bash
npm install --save-dev @skyscanner/eslint-config-skyscanner
```

Add `"extends": "@skyscanner/skyscanner"` to your `.eslintrc`.

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
