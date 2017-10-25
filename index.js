/*
 Copyright 2017 Skyscanner
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
  extends: 'airbnb',
  rules: {
    'valid-jsdoc': ['error'],

    // We've decided we don't want this for now as it makes writing JSX more painful.
    // See https://github.com/airbnb/javascript/issues/1584#issuecomment-335667272
    "function-paren-newline": 0,

    // False positive on custom propTypes + isRequired. https://github.com/yannickcr/eslint-plugin-react/issues/1389
    "react/no-typos": 0,

    // See https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/339
    "jsx-a11y/anchor-is-valid": ["error", {
      "components": ["Link"],
      "specialLink": ["to"],
      "aspects": ["noHref", "invalidHref", "preferButton"],
    }],

    // See https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/282
    // We should probably change our code to adhere to the standard here.
    "jsx-a11y/label-has-for": [ 2, {
      "components": [ "Label" ],
      "required": {
          "some": [ "nesting", "id" ]
      },
      "allowChildren": false
    }]
  }
};
