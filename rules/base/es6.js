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

// Internalized from eslint-config-airbnb-base/rules/es6

export default {
  rules: {
    // require braces around arrow function bodies
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],

    // require parentheses around arrow function arguments
    'arrow-parens': ['error', 'always'],

    // enforce consistent spacing before and after the arrow in arrow functions
    'arrow-spacing': ['error', { before: true, after: true }],

    // verify super() callings in constructors
    'constructor-super': 'error',

    // enforce consistent spacing around * operators in generator functions
    'generator-star-spacing': ['error', { before: false, after: true }],

    // disallow reassigning class members
    'no-class-assign': 'error',

    // disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],

    // disallow reassigning const variables
    'no-const-assign': 'error',

    // disallow duplicate class members
    'no-dupe-class-members': 'error',

    // disallow duplicate module imports (handled by import/no-duplicates)
    'no-duplicate-imports': 'off',

    // disallow new operators with the Symbol object
    'no-new-symbol': 'error',

    // disallow specified names in exports
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: [
          'default', // use export default instead
          'then', // this will cause issues with Promise-based modules
        ],
      },
    ],

    // disallow to use this/super before super() calling in constructors
    'no-this-before-super': 'error',

    // disallow unnecessary computed property keys in objects and classes
    'no-useless-computed-key': 'error',

    // disallow unnecessary constructors
    'no-useless-constructor': 'error',

    // disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],

    // require let or const instead of var
    'no-var': 'error',

    // require method and property shorthand syntax for object literals
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],

    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],

    // suggest using of const declaration for variables that are never reassigned
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],

    // prefer destructuring from arrays and objects
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 'error',

    // require rest parameters instead of arguments
    'prefer-rest-params': 'error',

    // require spread operators instead of .apply()
    'prefer-spread': 'error',

    // require template literals instead of string concatenation
    'prefer-template': 'error',

    // disallow generator functions that do not have yield
    'require-yield': 'error',

    // enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': ['error', 'never'],

    // enforce sorted import declarations within modules
    'sort-imports': [
      'off',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],

    // require symbol descriptions
    'symbol-description': 'error',

    // require or disallow spacing around embedded expressions of template strings
    'template-curly-spacing': 'error',

    // require or disallow spacing around the * in yield* expressions
    'yield-star-spacing': ['error', 'after'],
  },
};
