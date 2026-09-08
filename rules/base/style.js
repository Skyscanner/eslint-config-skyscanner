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

// Internalized from eslint-config-airbnb-base/rules/style

export default {
  rules: {
    // enforce line breaks after opening and before closing array brackets
    'array-bracket-newline': ['off', 'consistent'],

    // enforce consistent spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],

    // enforce line breaks between array elements
    'array-element-newline': ['off', { multiline: true, minItems: 3 }],

    // enforce consistent spacing inside single-line blocks
    'block-spacing': ['error', 'always'],

    // enforce consistent brace style for blocks
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // enforce camelcase naming convention
    camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

    // enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': [
      'off',
      'never',
      {
        line: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
        block: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
      },
    ],

    // require or disallow trailing commas
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],

    // enforce consistent spacing before and after commas
    'comma-spacing': ['error', { before: false, after: true }],

    // enforce consistent comma style
    'comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],

    // enforce consistent spacing inside computed property brackets
    'computed-property-spacing': ['error', 'never'],

    // enforce consistent naming when capturing the current execution context
    'consistent-this': 'off',

    // require or disallow newline at the end of files
    'eol-last': ['error', 'always'],

    // require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': ['error', 'never'],

    // require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': [
      'off',
      'always',
      {
        includeCommonJSModuleExports: false,
        considerPropertyDescriptor: true,
      },
    ],

    // require or disallow named function expressions
    'func-names': 'warn',

    // enforce the consistent use of either function declarations or expressions
    'func-style': ['off', 'expression'],

    // enforce line breaks between arguments of a function call
    'function-call-argument-newline': ['error', 'consistent'],

    // enforce consistent line breaks inside function parentheses
    'function-paren-newline': ['error', 'multiline-arguments'],

    // disallow specified identifiers
    'id-denylist': 'off',

    // enforce minimum and maximum identifier lengths
    'id-length': 'off',

    // require identifiers to match a specified regular expression
    'id-match': 'off',

    // enforce the location of arrow function bodies
    'implicit-arrow-linebreak': ['error', 'beside'],

    // enforce consistent indentation
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        ignoreComments: false,
      },
    ],

    // enforce the consistent use of either double or single quotes in JSX attributes
    'jsx-quotes': ['off', 'prefer-double'],

    // enforce consistent spacing between keys and values in object literal properties
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // enforce consistent spacing before and after keywords
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],

    // enforce position of line comments
    'line-comment-position': [
      'off',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true,
      },
    ],

    // enforce consistent linebreak style
    'linebreak-style': ['error', 'unix'],

    // require empty lines around comments
    'lines-around-comment': 'off',

    // require or disallow an empty line between class members
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: false },
    ],

    // require or disallow logical assignment operator shorthand
    'logical-assignment-operators': [
      'off',
      'always',
      {
        enforceForIfStatements: true,
      },
    ],

    // enforce a maximum depth that blocks can be nested
    'max-depth': ['off', 4],

    // enforce a maximum line length
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // enforce a maximum number of lines per file
    'max-lines': [
      'off',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // enforce a maximum number of lines of code in a function
    'max-lines-per-function': [
      'off',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],

    // enforce a maximum depth that callbacks can be nested
    'max-nested-callbacks': 'off',

    // enforce a maximum number of parameters in function definitions
    'max-params': ['off', 3],

    // enforce a maximum number of statements allowed in function blocks
    'max-statements': ['off', 10],

    // enforce a maximum number of statements allowed per line
    'max-statements-per-line': ['off', { max: 1 }],

    // enforce a particular style for multiline comments
    'multiline-comment-style': ['off', 'starred-block'],

    // enforce newlines between operands of ternary expressions
    'multiline-ternary': ['off', 'never'],

    // require constructor names to begin with a capital letter
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: [
          'Immutable.Map',
          'Immutable.Set',
          'Immutable.List',
        ],
      },
    ],

    // enforce or disallow parentheses when invoking a constructor with no arguments
    'new-parens': 'error',

    // require a newline after each call in a method chain
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // disallow Array constructors
    'no-array-constructor': 'error',

    // disallow bitwise operators
    'no-bitwise': 'error',

    // disallow continue statements
    'no-continue': 'error',

    // disallow inline comments after code
    'no-inline-comments': 'off',

    // disallow if statements as the only statement in else blocks
    'no-lonely-if': 'error',

    // disallow mixed binary operators
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['/', '*'],
          ['&', '|', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!=='],
          ['&&', '||'],
        ],
        allowSamePrecedence: false,
      },
    ],

    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',

    // disallow use of chained assignment expressions
    'no-multi-assign': ['error'],

    // disallow multiple empty lines
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

    // disallow negated conditions
    'no-negated-condition': 'off',

    // disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // disallow Object constructors
    'no-object-constructor': 'error',

    // disallow the unary operators ++ and --
    'no-plusplus': 'error',

    // disallow specified syntax
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
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

    // disallow all tabs
    'no-tabs': 'error',

    // disallow ternary operators
    'no-ternary': 'off',

    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],

    // disallow dangling underscores in identifiers
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      },
    ],

    // disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // disallow whitespace before properties
    'no-whitespace-before-property': 'error',

    // enforce the location of single-line statements
    'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

    // enforce consistent line breaks after opening and before closing braces
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
        ImportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
      },
    ],

    // enforce consistent spacing inside braces
    'object-curly-spacing': ['error', 'always'],

    // enforce placing object properties on separate lines
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],

    // enforce variables to be declared either together or separately in functions
    'one-var': ['error', 'never'],

    // require or disallow newlines around variable declarations
    'one-var-declaration-per-line': ['error', 'always'],

    // require or disallow assignment operator shorthand where possible
    'operator-assignment': ['error', 'always'],

    // enforce consistent linebreak style for operators
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

    // require or disallow padding within blocks
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
      {
        allowSingleLineBlocks: true,
      },
    ],

    // require or disallow padding lines between statements
    'padding-line-between-statements': 'off',

    // disallow the use of Math.pow in favor of the ** operator
    'prefer-exponentiation-operator': 'error',

    // disallow using Object.assign with an object literal as the first argument
    'prefer-object-spread': 'error',

    // require quotes around object literal property names
    'quote-props': [
      'error',
      'as-needed',
      { keywords: false, unnecessary: true, numbers: false },
    ],

    // enforce the consistent use of either backticks, double, or single quotes
    quotes: ['error', 'single', { avoidEscape: true }],

    // require or disallow semicolons instead of ASI
    semi: ['error', 'always'],

    // enforce consistent spacing before and after semicolons
    'semi-spacing': ['error', { before: false, after: true }],

    // enforce location of semicolons
    'semi-style': ['error', 'last'],

    // require object keys to be sorted
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

    // require variables within the same declaration block to be sorted
    'sort-vars': 'off',

    // enforce consistent spacing before blocks
    'space-before-blocks': 'error',

    // enforce consistent spacing before function definition opening parenthesis
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // enforce consistent spacing inside parentheses
    'space-in-parens': ['error', 'never'],

    // require spacing around infix operators
    'space-infix-ops': 'error',

    // enforce consistent spacing before or after unary operators
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],

    // enforce consistent spacing after the // or /* in a comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/'],
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!', ':', '::'],
          balanced: true,
        },
      },
    ],

    // enforce spacing around colons of switch statements
    'switch-colon-spacing': ['error', { after: true, before: false }],

    // require or disallow spacing between template tags and their literals
    'template-tag-spacing': ['error', 'never'],

    // require or disallow Unicode byte order mark (BOM)
    'unicode-bom': ['error', 'never'],

    // require parentheses around immediate function invocations
    'wrap-regex': 'off',
  },
};
