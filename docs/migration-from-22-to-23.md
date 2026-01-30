# Migration Guide: v22 to v23

This guide covers migrating from `@skyscanner/eslint-config-skyscanner` v22 (ESLint 8, eslintrc format) to v23 (ESLint 9, flat config format).

## Breaking Changes

### ESLint 9 Flat Config

v23 uses ESLint 9's flat config format. This is a fundamentally different configuration approach.

### Node.js Requirements

- **Minimum Node.js version**: 18.18.0
- **Minimum npm version**: 9.8.1

### Removed Dependencies

The following dependencies have been removed:

- `eslint-config-airbnb` - Rules have been internalized
- `@babel/core`, `@babel/eslint-parser`, `@babel/preset-react` - Babel parser removed
- `colors` - Postinstall script removed
- `eslint-plugin-eslint-comments` - Replaced with `@eslint-community/eslint-plugin-eslint-comments`
- `eslint-plugin-jest-formatting` - Not compatible with ESLint 9

### Postinstall Script Removed

The automatic creation of `.eslintrc.json` and `.prettierrc` files on install has been removed. You'll need to create your configuration files manually.

## Migration Steps

### Step 1: Update Node.js

Ensure you're using Node.js 18.18.0 or later:

```bash
node --version  # Should be >= 18.18.0
```

### Step 2: Update Dependencies

Update your `package.json`:

```json
{
  "devDependencies": {
    "@skyscanner/eslint-config-skyscanner": "^23.0.0"
  }
}
```

Then run:

```bash
npm install
```

### Step 3: Create `eslint.config.js`

Replace your `.eslintrc`, `.eslintrc.js`, `.eslintrc.json`, or `.eslintrc.yaml` file with a new `eslint.config.js` file.

**Before (v22 - .eslintrc.json):**

```json
{
  "extends": ["@skyscanner/eslint-config-skyscanner"],
  "rules": {
    "your-custom-rule": "error"
  }
}
```

**After (v23 - eslint.config.js):**

```javascript
import skyscannerConfig from '@skyscanner/eslint-config-skyscanner';

export default [
  ...skyscannerConfig,
  {
    rules: {
      'your-custom-rule': 'error',
    },
  },
];
```

### Step 4: Update package.json Type

Add `"type": "module"` to your `package.json` to enable ES modules:

```json
{
  "type": "module"
}
```

Or alternatively, rename `eslint.config.js` to `eslint.config.mjs`.

### Step 5: Update npm Scripts

ESLint 9 no longer uses the `--ext` flag. Update your scripts:

**Before:**

```json
{
  "scripts": {
    "lint": "eslint . --ext js,jsx,ts,tsx"
  }
}
```

**After:**

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

ESLint 9 automatically determines which files to lint based on the configuration.

### Step 6: Delete Old Config Files

Remove the old configuration file(s):

```bash
rm .eslintrc .eslintrc.js .eslintrc.json .eslintrc.yaml .eslintrc.yml
```

## Converting Common Patterns

### Environment Variables (`env`)

**Before:**

```json
{
  "env": {
    "browser": true,
    "node": true
  }
}
```

**After:**

```javascript
import globals from 'globals';

export default [
  ...skyscannerConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
```

### Overrides (File-specific Config)

**Before:**

```json
{
  "overrides": [
    {
      "files": ["*.test.js"],
      "rules": {
        "no-console": "off"
      }
    }
  ]
}
```

**After:**

```javascript
export default [
  ...skyscannerConfig,
  {
    files: ['**/*.test.js'],
    rules: {
      'no-console': 'off',
    },
  },
];
```

### Ignore Patterns

**Before (.eslintignore):**

```
node_modules/
dist/
build/
```

**After (in eslint.config.js):**

```javascript
export default [
  ...skyscannerConfig,
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
  },
];
```

### Parser Options

**Before:**

```json
{
  "parserOptions": {
    "ecmaVersion": 2024,
    "sourceType": "module"
  }
}
```

**After:**

```javascript
export default [
  ...skyscannerConfig,
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
    },
  },
];
```

## Vitest Migration

If you use Vitest, update your configuration:

**Before:**

```json
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

**After:**

```javascript
import vitestConfig from '@skyscanner/eslint-config-skyscanner/vitest';

export default [...vitestConfig];
```

Or for selective application:

```javascript
import skyscannerConfig from '@skyscanner/eslint-config-skyscanner';
import vitestConfig from '@skyscanner/eslint-config-skyscanner/vitest';

export default [
  ...skyscannerConfig,
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    ...vitestConfig[vitestConfig.length - 1],
  },
];
```

## ESLint Comments Plugin

The eslint-comments rules now use the community fork namespace:

**Before:**

```json
{
  "rules": {
    "eslint-comments/no-unused-disable": "warn"
  }
}
```

**After:**

```javascript
{
  rules: {
    '@eslint-community/eslint-comments/no-unused-disable': 'warn',
  },
}
```

## Troubleshooting

### "Cannot find module" Errors

Ensure your `package.json` has `"type": "module"` or rename your config to `eslint.config.mjs`.

### Plugin Not Found

Some plugins may not yet support ESLint 9. Check the plugin's repository for updates or alternatives.

### Rules Not Working

Rule names may have changed. Check the ESLint 9 documentation for any renamed or deprecated rules.

### TypeScript Files Not Linted

The Skyscanner config automatically handles TypeScript files. Ensure your TypeScript files have `.ts` or `.tsx` extensions.

## Getting Help

If you encounter issues during migration:

1. Check the [ESLint 9 Migration Guide](https://eslint.org/docs/latest/use/configure/migration-guide)
2. Review the [ESLint Flat Config Documentation](https://eslint.org/docs/latest/use/configure/configuration-files-new)
3. Open an issue on the [eslint-config-skyscanner repository](https://github.com/Skyscanner/eslint-config-skyscanner/issues)
