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

// Internalized from eslint-config-airbnb-base/rules/strict

export default {
  rules: {
    // babel/preset-env inserts `'use strict';` for us in CommonJS modules
    // For ESM, strict mode is always enabled
    strict: ['error', 'never'],
  },
};
