# Migration Guide: v22 to v23

This guide covers migrating from `@skyscanner/eslint-config-skyscanner` v22 (ESLint 8, eslintrc format) to v23 (ESLint 9, flat config format).

## Summary

All breaking changes are **expected**. They come from updated ESLint core and plugin recommended configs that reflect industry conventions and best practices. If you prefer legacy behavior, you can override specific rules in your own `eslint.config.js`.

Key sources of change:

- ESLint core: new rules and stricter defaults (for example `no-constant-binary-expression`, `no-unused-private-class-members`, `prefer-object-has-own`).
- React: `react/jsx-key` is now enforced; `react/display-name` and `react/jsx-uses-react` are disabled in v23 to preserve v22 behavior.
- React Hooks: v7 recommended adds compiler rules like `set-state-in-effect`, `static-components`, `use-memo`.
- Import plugin: stricter checks like `import/named` and `import/no-empty-named-blocks`.
- JSX a11y: `jsx-a11y/autocomplete-valid` is now enforced.

## What to Expect

⚠️ **After migration, you will see new linting errors** - this is expected! See the [Expected New Linting Errors](#expected-new-linting-errors) section for details.

The most common issues:

- **`no-unused-vars`** (~75% of errors) - Unused function parameters must be prefixed with `_`
- **`prefer-object-has-own`** - Auto-fixable modernization
- **React Hooks warnings** - New performance rules from plugin v7

## Breaking Changes

### ESLint 9 Flat Config

v23 uses ESLint 9's flat config format. This is a fundamentally different configuration approach.

### Node.js Requirements

- **Minimum Node.js version**: 18.18.0
- **Minimum npm version**: 9.8.1

### Removed Dependencies

The following dependencies have been removed:

- `eslint-config-airbnb` - Rules have been internalized
- `@babel/core`, `@babel/eslint-parser`, `@babel/preset-react` - **Babel parser removed** (see Parser Changes below)
- `colors` - Postinstall script removed
- `eslint-plugin-eslint-comments` - Replaced with `@eslint-community/eslint-plugin-eslint-comments`
- `eslint-plugin-jest-formatting` - Not compatible with ESLint 9

### Removed/Deprecated Rules

ESLint 9 removed some deprecated core rules. If you still reference them in your own config, remove them:

- `valid-jsdoc`
- `require-jsdoc`

### Parser Changes

⚠️ **Important**: v23 uses ESLint's default Espree parser instead of the Babel parser.

**Experimental Babel syntax is no longer supported**:

- Legacy decorators (`@decorator`)
- Pipeline operator (`|>`)

**Standard ES2022+ features are still supported**:

- Class fields (public and private)
- Private methods (`#method`)
- Static class blocks
- Top-level await
- All other standard JavaScript features

If your code uses experimental Babel syntax, you'll need to migrate to standard syntax or use TypeScript.

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

### Parsing Errors with Decorators

If you see "Unexpected character '@'" errors, you're using legacy Babel decorators which are no longer supported. Options:

1. **Migrate to TypeScript** (recommended) - Use standard decorators
2. **Remove decorators** - Refactor code to not use them
3. **Use a different config** - If decorators are essential, you'll need a custom parser

### "Cannot find module" Errors

Ensure your `package.json` has `"type": "module"` or rename your config to `eslint.config.mjs`.

### Plugin Not Found

Some plugins may not yet support ESLint 9. Check the plugin's repository for updates or alternatives.

### Rules Not Working

Rule names may have changed. Check the ESLint 9 documentation for any renamed or deprecated rules.

### TypeScript Files Not Linted

The Skyscanner config automatically handles TypeScript files. Ensure your TypeScript files have `.ts` or `.tsx` extensions.

## Expected New Linting Errors

After migration, you'll likely encounter new linting errors. **This is expected** as v23 enforces stricter rules and includes updated plugin versions. Here's what to expect and how to handle them:

### `no-unused-vars` (Most Common)

**What changed**: Stricter enforcement on JavaScript files for unused function parameters.

**The error**:

```javascript
// ❌ ERROR: 'date' is defined but never used. Allowed unused args must match /^_/u
function handleClick(event, date, type) {
  console.log(event);
  // 'date' and 'type' are unused but required by the signature
}
```

**How to fix**: Prefix unused parameters with underscore:

```javascript
// ✅ FIXED
function handleClick(event, _date, _type) {
  console.log(event);
}
```

---

### `prefer-object-has-own`

**What changed**: Enforces modern ES2022 `Object.hasOwn()` over legacy `Object.prototype.hasOwnProperty.call()`.

**The error**:

```javascript
// ❌ ERROR: Use Object.hasOwn() instead
if (Object.prototype.hasOwnProperty.call(obj, 'key')) {
  // ...
}
```

**How to fix** (auto-fixable):

```javascript
// ✅ FIXED
if (Object.hasOwn(obj, 'key')) {
  // ...
}
```

Run `eslint --fix` to automatically update these.

---

### React Hooks Rules (New Errors and Warnings)

**What changed**: v23 enables all recommended rules from `eslint-plugin-react-hooks` v7, which includes many new rules not present in v4. Many of these are errors, not just warnings.

**Common new rules**:

- `react-hooks/static-components`
- `react-hooks/use-memo`
- `react-hooks/immutability`
- `react-hooks/preserve-manual-memoization`
- `react-hooks/set-state-in-effect`

**How to handle**:

1. **Review each rule** - Many point to real performance issues
2. **Fix if applicable** - These rules help optimize React components
3. **Disable specific rules if needed**:
   ```javascript
   export default [
     ...skyscannerConfig,
     {
       rules: {
         'react-hooks/static-components': 'off', // if too noisy
       },
     },
   ];
   ```

---

### React Rules (v23 Defaults)

**What changed**: The React plugin recommended config now enforces more rules by default.

**Common new errors**:

- `react/jsx-key`

**Notable v23 defaults**:

- `react/display-name` is **disabled** by default to preserve v22 behavior.
- `react/jsx-uses-react` is **disabled** by default (React 17+ JSX runtime).

If you re-enable full React plugin recommended rules in your own config, expect new errors.

---

### Import/Module Errors

**What changed**: `eslint-plugin-import` v2.32.0 has stricter module resolution in flat config mode.

**Common errors**:

- `import/named` - Named imports not found
- `import/no-extraneous-dependencies` - Package not in dependencies
- `import/no-empty-named-blocks` - Empty named import blocks
- `import/order` - Import ordering differences

**How to fix**:

- Ensure imports match actual exports
- Add missing dependencies to `package.json`
- Configure import resolver if using custom module paths

---

### Other ESLint Core Rule Changes

ESLint 9 updates defaults/options for several core rules. You may see new or different behavior in rules like `class-methods-use-this`, `consistent-return`, and `no-underscore-dangle`. This is expected and comes from the ESLint core upgrade.

---

### Global Variables Change

⚠️ **Important**: v23 includes both browser AND Node.js globals by default.

**What changed**:

- v22: Only browser globals (`window`, `document`, etc.)
- v23: Browser + Node.js globals (`process`, `Buffer`, `require`, `module`, etc.)

**Why this changed**: To support CommonJS config files (`webpack.config.js`, `jest.config.js`) without `no-undef` errors.

**Potential issue**: Browser-only code might accidentally use Node.js APIs without triggering errors.

**Example**:

```javascript
// In browser-only code
const API_URL = process.env.REACT_APP_API; // ✅ No error (but may be wrong!)

// Should be:
const API_URL = import.meta.env.REACT_APP_API;
```

**Best practice**: Be mindful when using Node.js APIs. For browser-only projects, you may want to add a custom config to restrict to browser globals only:

```javascript
export default [
  ...skyscannerConfig,
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        // Intentionally not including Node globals for browser code
      },
    },
  },
];
```

---

### TypeScript Unused Vars

If you see `@typescript-eslint/no-unused-vars` as **errors**, that is not the default in v23. The config keeps it as `warn`. Check for overrides in your project config.

---

### Other Plugin-Specific Changes

If your repo uses additional plugins (for example Cypress), upgrades can surface new warnings like `cypress/no-unnecessary-waiting`. Review those plugin changelogs or pin versions if needed.

## Handling Large Codebases

If you have many errors after migration:

### 1. Categorize errors

```bash
npm run lint -- --format json --output-file eslint-errors.json
cat eslint-errors.json | jq '.[] | .messages[] | .ruleId' | sort | uniq -c | sort -nr
```

### 2. Auto-fix what you can

```bash
npm run lint -- --fix
```

This will fix:

- `prefer-object-has-own`
- Some `import/order` issues
- Formatting issues

### 3. Fix `no-unused-vars` in bulk

```bash
# Review carefully before committing!
# Consider fixing file by file for better review

# Option 1: Manual search and replace with your editor
# Find: function (\w+)\((\w+),
# Replace: function $1(_$2,

# Option 2: Use a codemod (careful review needed)
# Create a custom jscodeshift script or use sed
```

### 4. Temporarily downgrade errors to warnings (not recommended)

```javascript
// Only as a last resort for very large codebases
export default [
  ...skyscannerConfig,
  {
    files: ['src/legacy/**/*.js'],
    rules: {
      'no-unused-vars': 'warn', // TODO: Fix and change back to error
    },
  },
];
```

---

## Getting Help

If you encounter issues during migration:

1. Check the [ESLint 9 Migration Guide](https://eslint.org/docs/latest/use/configure/migration-guide)
2. Review the [ESLint Flat Config Documentation](https://eslint.org/docs/latest/use/configure/configuration-files-new)
3. Review common errors in this guide above
4. Open an issue on the [eslint-config-skyscanner repository](https://github.com/Skyscanner/eslint-config-skyscanner/issues)
