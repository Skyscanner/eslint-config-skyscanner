# eslint-config-skyscanner

[![Build Status](https://travis-ci.org/Skyscanner/eslint-config-skyscanner.svg?branch=master)](https://travis-ci.org/Skyscanner/eslint-config-skyscanner)
[![npm version](https://img.shields.io/npm/v/eslint-config-skyscanner.svg)](https://www.npmjs.com/package/eslint-config-skyscanner)

This package includes the shareable ESLint configuration used by Skyscanner.

## Installation

```bash
npm install --save-dev eslint-config-skyscanner
```

Add `"extends": "skyscanner"` to your `.eslintrc`.

## React

`eslint-config-skyscanner` will try to detect automatically the version of React installed.

If your project doesn't use it or it is not installed in the same `package.json` as `eslint-config-skyscanner`, it must be manually set in `.eslintrc`:

```
"settings": {
  "react": {
    "version": "16.4"
  }
}
```

## Changelog

[View our up-to-date changelog](./CHANGELOG.md).
