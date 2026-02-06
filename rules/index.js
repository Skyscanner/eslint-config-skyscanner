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

// Aggregates all internalized airbnb-base rules

import bestPractices from './base/best-practices.js';
import errors from './base/errors.js';
import es6 from './base/es6.js';
import imports from './base/imports.js';
import node from './base/node.js';
import strict from './base/strict.js';
import style from './base/style.js';
import variables from './base/variables.js';

export const baseRules = [
  { name: 'skyscanner/best-practices', ...bestPractices },
  { name: 'skyscanner/errors', ...errors },
  { name: 'skyscanner/es6', ...es6 },
  { name: 'skyscanner/imports', ...imports },
  { name: 'skyscanner/node', ...node },
  { name: 'skyscanner/strict', ...strict },
  { name: 'skyscanner/style', ...style },
  { name: 'skyscanner/variables', ...variables },
];

export default baseRules;
