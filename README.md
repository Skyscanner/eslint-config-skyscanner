# eslint-config-skyscanner

This package includes the shareable ESLint configuration used by Skyscanner.

## Installation

```bash
npm install --save-dev @skyscanner/eslint-config-skyscanner
```

Add `"extends": "@skyscanner/eslint-config-skyscanner"` to your `.eslintrc`.

"@skyscanner/eslint-config-skyscanner" currently uses the Jest configuration by default. If your project uses Vitest, you can use the `@skyscanner/eslint-config-skyscanner/vitest` to override test files configuration. For example:

```json
// .eslintrc
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

If your project doesn't use it, or it is not installed in the same `package.json` as `@skyscanner/eslint-config-skyscanner`, it must be manually set in `.eslintrc`:

```
"settings": {
  "react": {
    "version": "16.4"
  }
}
```

## Browser compatibility

This eslint configuration includes the [compat plugin](https://github.com/amilajack/eslint-plugin-compat) to ensure browser compatibility based on your defined browserslist. In case of no browserslist defined, default values are taken into account, which may not be the exact ones you would expect. If your repository experiences issues regarding browser compatibility which are not relevant to your project, solve them by applying one of these two solutions:
- If the repository only contains **server side code** and browser compatibility doesn't apply, disable the plugin entirely:
```json
// .eslintrc
{
  extends: ['@skyscanner/eslint-config-skyscanner'],
  ...
  rules: {
    ...
    'compat/compat': 'off'
  }
}
```
- If the repository contains client side code, define a **browserslist** in your `package.json` by extending `browserslist-config-skyscanner`, which defines the current browser support required by Skyscanner:
```json
// package.json
{
  ...
  "browserslist": [
    "extends browserslist-config-skyscanner"
  ],
  ...
  "devDependencies": {
    ...
    "browserslist-config-skyscanner": "^5.0.0"
  }
}
```
