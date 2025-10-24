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
module.exports = {
  extends: ['./index.js', 'plugin:@vitest/legacy-recommended'],
  env: {
    'jest/globals': false,
  },
  plugins: ['@vitest'],
  rules: {
    // Switch off all Jest rules
    'jest/no-large-snapshots': 'off',
    'jest/expect-expect': 'off',
    'jest/no-alias-methods': 'off',
    'jest/no-commented-out-tests': 'off',
    'jest/no-conditional-expect': 'off',
    'jest/no-deprecated-functions': 'off',
    'jest/no-disabled-tests': 'off',
    'jest/no-done-callback': 'off',
    'jest/no-export': 'off',
    'jest/no-focused-tests': 'off',
    'jest/no-identical-title': 'off',
    'jest/no-interpolation-in-snapshots': 'off',
    'jest/no-jasmine-globals': 'off',
    'jest/no-mocks-import': 'off',
    'jest/no-standalone-expect': 'off',
    'jest/no-test-prefixes': 'off',
    'jest/valid-describe-callback': 'off',
    'jest/valid-expect': 'off',
    'jest/valid-expect-in-promise': 'off',
    'jest/valid-title': 'off',
    // Replace with Vitest equivalent
    '@vitest/no-large-snapshots': 'off',
    // The vitest/recommended configuration differs slightly from jest/recommended so we are adding back in some rules that proved valuable
    '@vitest/no-conditional-expect': 'error',
    '@vitest/no-focused-tests': 'error',
  },
};
