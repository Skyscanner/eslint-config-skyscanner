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

// Internalized from eslint-config-airbnb-base/rules/imports

export default {
  rules: {
    // ensure imports point to files/modules that can be resolved
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

    // ensure named imports correspond to a named export in the remote file
    'import/named': 'error',

    // ensure default import matches default export in remote file
    'import/default': 'off',

    // ensure imported namespaces contain dereferenced properties as they are dereferenced
    'import/namespace': 'off',

    // Helpful warnings:

    // disallow invalid exports, e.g. multiple defaults
    'import/export': 'error',

    // forbid the use of extraneous packages
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          '**/__tests__/**', // jest pattern
          '**/__mocks__/**', // jest pattern
          'test.{js,jsx}', // repos with a single test file
          'test-*.{js,jsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{js,jsx}', // tests where the weights is suffixed
          '**/jest.config.js', // jest config
          '**/jest.setup.js', // jest setup
          '**/vue.config.js', // vue-cli config
          '**/webpack.config.js', // webpack config
          '**/webpack.config.*.js', // webpack config
          '**/rollup.config.js', // rollup config
          '**/rollup.config.*.js', // rollup config
          '**/gulpfile.js', // gulp config
          '**/gulpfile.*.js', // gulp config
          '**/Gruntfile{,.js}', // grunt config
          '**/protractor.conf.js', // protractor config
          '**/protractor.conf.*.js', // protractor config
          '**/karma.conf.js', // karma config
          '**/.eslintrc.js', // eslint config
        ],
        optionalDependencies: false,
      },
    ],

    // Forbid mutable exports
    'import/no-mutable-exports': 'error',

    // Module systems:

    // disallow require()
    'import/no-commonjs': 'off',

    // disallow AMD require/define
    'import/no-amd': 'error',

    // No Node.js builtin modules
    'import/no-nodejs-modules': 'off',

    // Style guide:

    // disallow non-import statements appearing before import statements
    'import/first': 'error',

    // disallow duplicate imports
    'import/no-duplicates': 'error',

    // disallow namespace imports
    'import/no-namespace': 'off',

    // Ensure consistent use of file extension within the import path
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
      },
    ],

    // ensure absolute imports are above relative imports
    'import/order': [
      'error',
      { groups: [['builtin', 'external', 'internal']] },
    ],

    // Require a newline after the last import/require in a group
    'import/newline-after-import': 'error',

    // Require modules with a single export to use a default export
    'import/prefer-default-export': 'error',

    // Restrict which files can be imported in a given folder
    'import/no-restricted-paths': 'off',

    // Forbid modules to have too many dependencies
    'import/max-dependencies': ['off', { max: 10 }],

    // Forbid import of modules using absolute paths
    'import/no-absolute-path': 'error',

    // Forbid require() calls with expressions
    'import/no-dynamic-require': 'error',

    // prevent importing the submodules of other modules
    'import/no-internal-modules': [
      'off',
      {
        allow: [],
      },
    ],

    // Warn if a module could be mistakenly parsed as a script by a consumer
    'import/unambiguous': 'off',

    // Forbid Webpack loader syntax in imports
    'import/no-webpack-loader-syntax': 'error',

    // Prevent unassigned imports
    'import/no-unassigned-import': 'off',

    // Prevent importing the default as if it were named
    'import/no-named-default': 'error',

    // Reports if a module's default export is unnamed
    'import/no-anonymous-default-export': [
      'off',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],

    // This rule enforces that all exports are declared at the bottom of the file
    'import/exports-last': 'off',

    // Reports when named exports are not grouped together in a single export declaration
    'import/group-exports': 'off',

    // forbid default exports
    'import/no-default-export': 'off',

    // Prohibit named exports
    'import/no-named-export': 'off',

    // Forbid a module from importing itself
    'import/no-self-import': 'error',

    // Forbid cyclical dependencies between modules
    'import/no-cycle': ['error', { maxDepth: '∞' }],

    // Ensures that there are no useless path segments
    'import/no-useless-path-segments': ['error', { commonjs: true }],

    // Reports modules without any exports, or with unused exports
    'import/no-unused-modules': [
      'off',
      {
        ignoreExports: [],
        missingExports: true,
        unusedExports: true,
      },
    ],

    // Reports the use of import declarations with CommonJS exports
    'import/no-import-module-exports': [
      'error',
      {
        exceptions: [],
      },
    ],

    // Use this rule to prevent imports to folders in relative parent paths
    'import/no-relative-parent-imports': 'off',

    // Forbid empty named import blocks
    'import/no-empty-named-blocks': 'error',
  },
};
