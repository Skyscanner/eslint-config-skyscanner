/*
 Copyright 2021 Skyscanner
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

import js from '@eslint/js';
import eslintCommentsConfigs from '@eslint-community/eslint-plugin-eslint-comments/configs';
import skyscannerRulesPlugin from '@skyscanner/eslint-plugin-rules';
import prettierConfig from 'eslint-config-prettier/flat';
import backpackPlugin from 'eslint-plugin-backpack';
import compatPlugin from 'eslint-plugin-compat';
import importPlugin from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import sortDestructureKeysPlugin from 'eslint-plugin-sort-destructure-keys';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import { baseRules } from './rules/index.js';
import reactA11yRules from './rules/react/react-a11y.js';
import reactRules from './rules/react/react.js';

export default [
  // Base JS recommended
  js.configs.recommended,

  // Internalized airbnb-base rules (loaded before plugin configs)
  ...baseRules,

  // Internalized airbnb react rules (loaded before plugin configs)
  { name: 'skyscanner/react', ...reactRules },
  { name: 'skyscanner/react-a11y', ...reactA11yRules },

  // React plugin configs
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],

  // JSX A11y plugin
  jsxA11yPlugin.flatConfigs.recommended,

  // React Hooks plugin
  reactHooksPlugin.configs.flat.recommended,

  // Import plugin
  importPlugin.flatConfigs.recommended,

  // Jest plugin
  jestPlugin.configs['flat/recommended'],

  // Compat plugin
  compatPlugin.configs['flat/recommended'],

  // ESLint Comments plugin
  eslintCommentsConfigs.recommended,

  // Prettier must be last to override formatting rules
  prettierConfig,

  // Main Skyscanner configuration
  {
    name: 'skyscanner/main',
    files: [
      '**/*.js',
      '**/*.jsx',
      '**/*.mjs',
      '**/*.cjs',
      '**/*.ts',
      '**/*.tsx',
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 2024,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      backpack: backpackPlugin,
      '@skyscanner/rules': skyscannerRulesPlugin,
      'sort-destructure-keys': sortDestructureKeysPlugin,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
        node: true,
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'backpack/use-tokens': 'error',
      'backpack/use-components': 'off',
      '@skyscanner/rules/no-axios': 'error',

      // This rule is pretty restrictive and we feel this decision should be left to developers to decide on a case by case basis.
      // A file can contain more than one class and still have a single responsibility
      'max-classes-per-file': ['error', 3],

      'react/display-name': 'off',
      'react/jsx-uses-react': 'off',

      // defaultProps on function components is getting deprecated by React
      // and recommends to use defaultArguments instead
      // See https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md#deprecate-defaultprops-on-function-components
      'react/require-default-props': [
        2,
        {
          forbidDefaultForRequired: true,
          functions: 'defaultArguments',
        },
      ],

      // This rule is purely subjective and for consistency sake.
      // The impact of turning this on outweighs our perceived benefit of enforcing it
      'react/destructuring-assignment': 'off',

      // Disabled whilst incompatibilities still exist with react/jsx-closing-tag-location, react/jsx-indent & max-len.
      // See https://github.com/airbnb/javascript/issues/1584#issuecomment-335667272
      'function-paren-newline': 'off',

      // Disabled whilst false positives still exist with custom propTypes + isRequired.
      // See https://github.com/yannickcr/eslint-plugin-react/issues/1389
      'react/no-typos': 'off',

      // Disabled as the rule enforces using the shorthand syntax which is optional in React
      // https://github.com/yannickcr/eslint-plugin-react/blob/bc976b837abeab1dffd90ac6168b746a83fc83cc/docs/rules/jsx-fragments.md
      // https://github.com/airbnb/javascript/commit/a23f93eb001ec398ff42f37945b01db2787f6c93
      'react/jsx-fragments': 'off',

      // One JSX Element Per Line
      // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-one-expression-per-line.md
      // https://github.com/airbnb/javascript/commit/b6a268f780177e03b573a4f0df95ecc0d2e8783e#diff-c0191b2bdd5bfebebb8cec31d0f3993c
      // TODO: re-enable when an option for text children is available
      'react/jsx-one-expression-per-line': 'off',

      // This is widely used in Backpack and internally and the impact turning this on outweighs our perceived benefit of enforcing it
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
      'react/jsx-props-no-spreading': 'off',

      // Disabled as it conflicts with flow annotations and there is a TODO for them to fix this once an upstream dependency has support
      // See https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js#L484
      'react/state-in-constructor': 'off',

      // This rule is purely about code style and the impact turning this on outweighs our perceived benefit of enforcing it
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
      'react/static-property-placement': 'off',

      // This rule is purely about code style and the impact turning this on outweighs our perceived benefit of enforcing it
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
      'react/function-component-definition': 'off',

      // This rule is about code style, and is auto-fixable, so we keep it turned on. We extend it to 'allowExpressions' as it allows a common TypeScript pattern
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md#allowexpressions
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],

      // Linting specific to Flow and PropTypes. We are fully committed to TypeScript, so disabled to not create toil for repos not yet migrated.
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
      'react/prefer-exact-props': 'off',

      // Added 'to' as a specialLink property, which prevents react-router's
      // 'Link' component from triggering this rule.
      // See https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/339
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['to'],
          aspects: ['noHref', 'invalidHref', 'preferButton'],
        },
      ],

      // Modified from upstream eslint configuration to assert 'either' as opposed to 'both'.
      // See https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react-a11y.js#L61.
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          labelComponents: [],
          labelAttributes: [],
          controlComponents: [],
          assert: 'either',
          depth: 25,
        },
      ],

      // Enforce a convention in the order of require/import statements
      // See https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
      // Order:
      //   1. builtin (node native)
      //   2. react, react-dom, prop-types
      //   3. external (other external libraries)
      //   4. Backpack components
      //   5. common package (shared functionalities between client and server)
      //   6. parent (parent folders)
      //   7. sibling (sibling folders)
      //   8. index (same folder)
      //   9. Types
      //  10. Style files (scss, css)
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'type'],
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: '{react,react-dom,react-dom/server,prop-types}',
              group: 'external',
              position: 'before',
            },
            {
              pattern:
                '{bpk-*,bpk-**,bpk-*/**,bpk-*/**/**,@skyscanner/bpk-*/**/**,@skyscanner/backpack-web/**/**}',
              group: 'external',
              position: 'after',
            },
            {
              pattern: 'common/**',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '{*.scss,*.css}',
              group: 'type',
              patternOptions: { matchBase: true },
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react', 'react-dom', 'prop-types'],
          alphabetize: {
            order: 'asc',
          },
        },
      ],

      // Ensure consistent use of file extension within the import path
      // The airbnb config we extend does not support TypeScript so we override it here
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          mjs: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],

      // This rule 'is useful in Yarn/Lerna workspaces'. In our monorepo setups we
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
      'import/no-relative-packages': 'off',

      // Additional ESLint rules for directive comments of ESLint
      // See: https://github.com/mysticatea/eslint-plugin-eslint-comments
      '@eslint-community/eslint-comments/disable-enable-pair': [
        'warn',
        { allowWholeFile: true },
      ],
      '@eslint-community/eslint-comments/no-aggregating-enable': 'warn',
      '@eslint-community/eslint-comments/no-duplicate-disable': 'warn',
      '@eslint-community/eslint-comments/no-unlimited-disable': 'warn',
      '@eslint-community/eslint-comments/no-unused-disable': 'warn',
      '@eslint-community/eslint-comments/no-unused-enable': 'warn',

      // Allow alias for deprecated React component lifecycle methods
      // https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
      camelcase: [
        'error',
        {
          properties: 'never',
          ignoreDestructuring: false,
          allow: ['^UNSAFE_'],
        },
      ],

      'jest/no-large-snapshots': 'off',

      // disallow certain syntax forms
      // https://eslint.org/docs/rules/no-restricted-syntax
      // should be similar to https://github.com/airbnb/javascript/blob/37d48dbf6082bd8958fdc5db5df207bb1166d653/packages/eslint-config-airbnb-base/rules/style.js#L337-L357
      // however, missing the ForOfStatement rule as we don't support IE11 (so we don't need the polyfill) and aren't currently opinionated about loops
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ForInStatement',
          message:
            'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        },
        {
          selector: 'LabeledStatement',
          message:
            'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        },
        {
          selector: 'WithStatement',
          message:
            '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        },
      ],

      // This ensures that the 'preferred style' is used for react imports:
      // "
      //   Change all default React imports (i.e. import React from "react") to destructured
      //   named imports (ex. import { useState } from "react") which is the preferred style
      //   going into the future.
      // "
      // There is a codemod here created by the react team to change this in your codebase:
      // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports
      'no-restricted-imports': [
        'error',
        {
          name: 'react',
          importNames: ['default'],
          message:
            "Please import directly (e.g. import { useEffect } from 'react').",
        },
      ],

      // Require object destructure key to be sorted
      // https://github.com/mthadley/eslint-plugin-sort-destructure-keys
      'sort-destructure-keys/sort-destructure-keys': 'error',

      // This causes issues in Redux reducers. Disabled while this is our global state tool of choice
      // https://eslint.org/docs/latest/rules/default-param-last
      'default-param-last': 'off',

      // Disable prop-types validation - we use TypeScript
      'react/prop-types': 'off',

      // Don't require React to be in scope (not needed with new JSX transform)
      'react/react-in-jsx-scope': 'off',

      // Allow jsx in both .jsx and .tsx files
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.jsx', '.tsx'] },
      ],
    },
  },

  // TypeScript files override
  {
    name: 'skyscanner/typescript',
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      '@skyscanner/rules': skyscannerRulesPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
      'default-case': 'off',
      // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
      'no-dupe-class-members': 'off',
      // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
      'no-undef': 'off',

      // Disallow using TypeScript's language feature of Enums. We only want to use type annotations never language features.
      '@skyscanner/rules/no-enum': 'error',

      // Add TypeScript specific rules (and turn off ESLint equivalents)
      '@typescript-eslint/consistent-type-assertions': 'warn',
      'no-array-constructor': 'off',
      '@typescript-eslint/no-array-constructor': 'warn',
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': 'warn',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': [
        'warn',
        {
          functions: false,
          classes: false,
          variables: false,
          typedefs: false,
        },
      ],
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'none',
          ignoreRestSiblings: true,
        },
      ],
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'warn',
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
        },
      ],
    },
  },

  // TypeScript declaration files
  {
    name: 'skyscanner/typescript-declarations',
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          disallowTypeAnnotations: false,
          prefer: 'type-imports',
        },
      ],
    },
  },
];
