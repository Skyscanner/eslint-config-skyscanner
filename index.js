/*
 Copyright 2020 Skyscanner
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

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:jest-formatting/strict',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['backpack', 'prettier', 'jest-formatting'],
  rules: {
    'prettier/prettier': 'error',
    'valid-jsdoc': ['error'],
    'backpack/use-tokens': 'error',
    'backpack/use-components': 'off',

    // This rule is prettry restrictive and we feel this decision should be left to developers to decide on a case by case basis.
    // A file can contain more than one class and still have a single responsibility
    'max-classes-per-file': ['error', 3],

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
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],

    // Additional ESLint rules for directive comments of ESLint
    // See: https://github.com/mysticatea/eslint-plugin-eslint-comments
    'eslint-comments/disable-enable-pair': ['warn', { allowWholeFile: true }],
    'eslint-comments/no-aggregating-enable': 'warn',
    'eslint-comments/no-duplicate-disable': 'warn',
    'eslint-comments/no-unlimited-disable': 'warn',
    'eslint-comments/no-unused-disable': 'warn',
    'eslint-comments/no-unused-enable': 'warn',

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
  },
};
