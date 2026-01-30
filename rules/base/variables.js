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

// Internalized from eslint-config-airbnb-base/rules/variables
import confusingBrowserGlobals from 'confusing-browser-globals';

export default {
  rules: {
    // require or disallow initialization in variable declarations
    'init-declarations': 'off',

    // disallow deleting variables
    'no-delete-var': 'error',

    // disallow labels that share a name with a variable
    'no-label-var': 'error',

    // disallow specific globals
    'no-restricted-globals': [
      'error',
      {
        name: 'isFinite',
        message:
          'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
      },
      {
        name: 'isNaN',
        message:
          'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
      },
    ].concat(confusingBrowserGlobals),

    // disallow variable declarations from shadowing variables declared in the outer scope
    'no-shadow': 'error',

    // disallow identifiers from shadowing restricted names
    'no-shadow-restricted-names': 'error',

    // disallow the use of undeclared variables unless mentioned in /*global */ comments
    'no-undef': 'error',

    // disallow initializing variables to undefined
    'no-undef-init': 'error',

    // disallow the use of undefined as an identifier
    'no-undefined': 'off',

    // disallow unused variables
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],

    // disallow the use of variables before they are defined
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: true },
    ],
  },
};
