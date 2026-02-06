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

// Internalized from eslint-config-airbnb/rules/react

export default {
  rules: {
    // Specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': ['error', 'prefer-double'],

    // Enforces consistent naming for boolean props
    'react/boolean-prop-naming': [
      'off',
      {
        propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        message: '',
      },
    ],

    // Prevent usage of button elements without an explicit type attribute
    'react/button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: false,
      },
    ],

    // Enforce all defaultProps have a corresponding non-required PropType
    'react/default-props-match-prop-types': [
      'error',
      { allowRequiredDefaults: false },
    ],

    // Enforce consistent usage of destructuring assignment of props, state, and context
    'react/destructuring-assignment': ['error', 'always'],

    // Prevent missing displayName in a React component definition
    'react/display-name': ['off', { ignoreTranspilerName: false }],

    // Forbid certain props on Components
    'react/forbid-component-props': ['off', { forbid: [] }],

    // Forbid certain props on DOM Nodes
    'react/forbid-dom-props': ['off', { forbid: [] }],

    // Forbid certain elements
    'react/forbid-elements': ['off', { forbid: [] }],

    // Forbid certain propTypes
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any', 'array', 'object'],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],

    // Forbid foreign propTypes
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],

    // Prevent using this.state inside this.setState
    'react/no-access-state-in-setstate': 'error',

    // Prevent adjacent inline elements not separated by whitespace
    'react/no-adjacent-inline-elements': 'off',

    // Prevent usage of Array index in keys
    'react/no-array-index-key': 'error',

    // Lifecycle methods should be methods on the prototype, not class fields
    'react/no-arrow-function-lifecycle': 'error',

    // Prevent passing children as props
    'react/no-children-prop': 'error',

    // Prevent usage of dangerous JSX properties
    'react/no-danger': 'warn',

    // Prevent problem with children and props.dangerouslySetInnerHTML
    'react/no-danger-with-children': 'error',

    // Prevent usage of deprecated methods
    'react/no-deprecated': 'error',

    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': 'off',

    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 'error',

    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 'off',

    // Prevent usage of findDOMNode
    'react/no-find-dom-node': 'error',

    // Forbid certain props on DOM Nodes
    'react/no-invalid-html-attribute': 'error',

    // Prevent usage of isMounted
    'react/no-is-mounted': 'error',

    // Prevent multiple component definition per file
    'react/no-multi-comp': 'off',

    // Disallow namespace
    'react/no-namespace': 'error',

    // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    'react/no-redundant-should-component-update': 'error',

    // Prevent usage of the return value of React.render
    'react/no-render-return-value': 'error',

    // Prevent usage of setState
    'react/no-set-state': 'off',

    // Prevent using string references in ref attribute
    'react/no-string-refs': 'error',

    // Prevent this from being used in stateless functional components
    'react/no-this-in-sfc': 'error',

    // Prevent common casing typos
    'react/no-typos': 'error',

    // Prevent invalid characters from appearing in markup
    'react/no-unescaped-entities': 'error',

    // Prevent usage of unknown DOM property
    'react/no-unknown-property': 'error',

    // Prevent usage of UNSAFE_ methods
    'react/no-unsafe': 'off',

    // Prevent creating unstable components inside components
    'react/no-unstable-nested-components': 'error',

    // Prevent declaring unused methods of component class
    'react/no-unused-class-component-methods': 'error',

    // Prevent definitions of unused prop types
    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        skipShapeProps: true,
      },
    ],

    // Prevent definitions of unused state properties
    'react/no-unused-state': 'error',

    // Prevent usage of setState in componentWillUpdate
    'react/no-will-update-set-state': 'error',

    // Require ES6 class declarations over React.createClass
    'react/prefer-es6-class': ['error', 'always'],

    // Require read-only props
    'react/prefer-read-only-props': 'off',

    // Require stateless functions when not using lifecycle methods, setState or ref
    'react/prefer-stateless-function': [
      'error',
      { ignorePureComponents: true },
    ],

    // Prevent missing props validation in a React component definition
    'react/prop-types': [
      'error',
      {
        ignore: [],
        customValidators: [],
        skipUndeclared: false,
      },
    ],

    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 'error',

    // Enforce a defaultProps definition for every prop that is not a required prop
    'react/require-default-props': [
      'error',
      {
        forbidDefaultForRequired: true,
      },
    ],

    // Require shouldComponentUpdate
    'react/require-optimization': ['off', { allowDecorators: [] }],

    // Require render() methods to return something
    'react/require-render-return': 'error',

    // Prevent extra closing tags for components without children
    'react/self-closing-comp': 'error',

    // Enforce component methods order
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^handle.+$/',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],

    // Enforce defaultProps declarations alphabetical sorting
    'react/sort-default-props': 'off',

    // Enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': [
      'off',
      {
        ignoreCase: true,
        callbacksLast: false,
        requiredFirst: false,
        sortShapeProp: true,
      },
    ],

    // Enforce state initialization style
    'react/state-in-constructor': ['error', 'always'],

    // Enforces where React component static properties should be positioned
    'react/static-property-placement': ['error', 'property assignment'],

    // Enforce style prop value being an object
    'react/style-prop-object': 'error',

    // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
    'react/void-dom-elements-no-children': 'error',

    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],

    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
    'react/jsx-child-element-spacing': 'off',

    // Validate closing bracket location in JSX
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

    // Validate closing tag location in JSX
    'react/jsx-closing-tag-location': 'error',

    // Enforce curly braces or disallow unnecessary curly braces in JSX
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],

    // Enforce linebreaks in curly braces in JSX attributes and expressions
    'react/jsx-curly-newline': [
      'error',
      {
        multiline: 'consistent',
        singleline: 'consistent',
      },
    ],

    // Enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],

    // Enforce or disallow spaces around equal signs in JSX attributes
    'react/jsx-equals-spacing': ['error', 'never'],

    // Restrict file extensions that may contain JSX
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],

    // Enforce position of the first prop in JSX
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

    // Enforce event handler naming conventions in JSX
    'react/jsx-handler-names': [
      'off',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],

    // Validate JSX indentation
    'react/jsx-indent': ['error', 2],

    // Validate props indentation in JSX
    'react/jsx-indent-props': ['error', 2],

    // Validate JSX has key prop when in array or iterator
    'react/jsx-key': 'error',

    // Validate JSX maximum depth
    'react/jsx-max-depth': 'off',

    // Limit maximum of props on a single line in JSX
    'react/jsx-max-props-per-line': [
      'error',
      { maximum: 1, when: 'multiline' },
    ],

    // Require or prevent a new line after jsx elements and expressions
    'react/jsx-newline': 'off',

    // Prevent usage of .bind() and arrow functions in JSX props
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true,
      },
    ],

    // Prevent comments from being inserted as text nodes
    'react/jsx-no-comment-textnodes': 'error',

    // Prevent react contexts from taking non-stable values
    'react/jsx-no-constructed-context-values': 'error',

    // Prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

    // Disallow problematic leaked values from being rendered
    'react/jsx-no-leaked-render': 'off',

    // Prevent usage of unwrapped JSX strings
    'react/jsx-no-literals': ['off', { noStrings: true }],

    // Prevent usage of javascript: URLs
    'react/jsx-no-script-url': [
      'error',
      [
        {
          name: 'Link',
          props: ['to'],
        },
      ],
    ],

    // Prevent usage of unsafe target='_blank'
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],

    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 'error',

    // Disallow unnecessary fragments
    'react/jsx-no-useless-fragment': 'error',

    // One JSX Element Per Line
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],

    // Enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],

    // Disallow multiple spaces between inline JSX props
    'react/jsx-props-no-multi-spaces': 'error',

    // Disallow JSX props spreading
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore',
        exceptions: [],
      },
    ],

    // Deprecated in favor of react/jsx-sort-props
    'react/jsx-sort-default-props': 'off',

    // Enforce props alphabetical sorting
    'react/jsx-sort-props': [
      'off',
      {
        ignoreCase: true,
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],

    // Validate whitespace in and around the JSX opening and closing brackets
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],

    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 'error',

    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 'error',

    // Prevent missing parentheses around multilines JSX
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
  },
};
