# eslint-config-skyscanner

This package includes the shareable ESLint configuration used by Skyscanner.

## Installation

```bash
npm install --save-dev @skyscanner/eslint-config-skyscanner
```

## Usage (ESLint 9 Flat Config)

Create an `eslint.config.js` file in your project root:

```javascript
import skyscannerConfig from '@skyscanner/eslint-config-skyscanner';

export default [...skyscannerConfig];
```

If you need to customize the configuration:

```javascript
import skyscannerConfig from '@skyscanner/eslint-config-skyscanner';

export default [
  ...skyscannerConfig,
  {
    rules: {
      // Your custom rules here
    },
  },
];
```

## Vitest Configuration

If your project uses Vitest instead of Jest, use the vitest configuration to override test file settings:

```javascript
import skyscannerConfig from '@skyscanner/eslint-config-skyscanner';
import vitestConfig from '@skyscanner/eslint-config-skyscanner/vitest';

export default [
  ...skyscannerConfig,
  {
    // Apply vitest rules to test files
    files: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
    ...vitestConfig[vitestConfig.length - 1], // Get the vitest rules config
  },
];
```

Or apply directly to your entire project if all tests use Vitest:

```javascript
import vitestConfig from '@skyscanner/eslint-config-skyscanner/vitest';

export default [...vitestConfig];
```

## React Version

`@skyscanner/eslint-config-skyscanner` will try to detect automatically the version of React installed.

If your project doesn't use React, or it is not installed in the same `package.json` as `@skyscanner/eslint-config-skyscanner`, you can set it manually:

```javascript
import skyscannerConfig from '@skyscanner/eslint-config-skyscanner';

export default [
  ...skyscannerConfig,
  {
    settings: {
      react: {
        version: '18.2',
      },
    },
  },
];
```

## Browser Compatibility

This ESLint configuration includes the [compat plugin](https://github.com/amilajack/eslint-plugin-compat) to ensure browser compatibility based on your defined browserslist. In case of no browserslist defined, default values are taken into account, which may not be the exact ones you would expect.

If your repository experiences issues regarding browser compatibility which are not relevant to your project, solve them by applying one of these two solutions:

### Server-side code only

If the repository only contains **server side code** and browser compatibility doesn't apply, disable the plugin entirely:

```javascript
import skyscannerConfig from '@skyscanner/eslint-config-skyscanner';

export default [
  ...skyscannerConfig,
  {
    rules: {
      'compat/compat': 'off',
    },
  },
];
```

### Client-side code

If the repository contains client side code, define a **browserslist** in your `package.json` by extending `browserslist-config-skyscanner`, which defines the current browser support required by Skyscanner:

```json
// package.json
{
  "browserslist": ["extends browserslist-config-skyscanner"],
  "devDependencies": {
    "browserslist-config-skyscanner": "^5.0.0"
  }
}
```

## Migration from v22 to v23

See the [migration guide](./docs/migration-from-22-to-23.md) for detailed instructions on upgrading from ESLint 8 (eslintrc format) to ESLint 9 (flat config format).

## Requirements

- Node.js >= 18.18.0
- npm >= 9.8.1
- ESLint 9.x
