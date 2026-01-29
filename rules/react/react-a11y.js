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

// Internalized from eslint-config-airbnb/rules/react-a11y

export default {
  rules: {
    // Enforce that anchors have content
    'jsx-a11y/anchor-has-content': ['error', { components: [] }],

    // Ensure <a> tags are valid
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],

    // Enforce that elements with ARIA roles must have all required attributes for that role
    'jsx-a11y/aria-role': ['error', { ignoreNonDOM: false }],

    // Enforce all aria-* props are valid
    'jsx-a11y/aria-props': 'error',

    // Enforce ARIA state and property values are valid
    'jsx-a11y/aria-proptypes': 'error',

    // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes
    'jsx-a11y/aria-unsupported-elements': 'error',

    // Enforce that all elements that require alternative text have meaningful information
    'jsx-a11y/alt-text': [
      'error',
      {
        elements: ['img', 'object', 'area', 'input[type="image"]'],
        img: [],
        object: [],
        area: [],
        'input[type="image"]': [],
      },
    ],

    // Enforce that <img> alt prop does not contain the word image, picture, or photo
    'jsx-a11y/img-redundant-alt': 'error',

    // Enforce that elements with interactive handlers like onClick must be focusable
    'jsx-a11y/interactive-supports-focus': 'error',

    // Enforce that <label> elements have the htmlFor attribute
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'both',
        depth: 25,
      },
    ],

    // Enforce lang attribute has a valid value
    'jsx-a11y/lang': 'error',

    // Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur
    'jsx-a11y/mouse-events-have-key-events': 'error',

    // Enforce that the accessKey prop is not used on any element
    'jsx-a11y/no-access-key': 'error',

    // Enforce autoFocus prop is not used
    'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],

    // Enforce distracting elements are not used
    'jsx-a11y/no-distracting-elements': [
      'error',
      {
        elements: ['marquee', 'blink'],
      },
    ],

    // Interactive elements should not be assigned non-interactive roles
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      'error',
      {
        tr: ['none', 'presentation'],
      },
    ],

    // Non-interactive elements should not be assigned mouse or keyboard event listeners
    'jsx-a11y/no-noninteractive-element-interactions': [
      'error',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],

    // Non-interactive elements should not be assigned interactive roles
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'error',
      {
        ul: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid',
        ],
        ol: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid',
        ],
        li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
      },
    ],

    // tabIndex should only be declared on interactive elements
    'jsx-a11y/no-noninteractive-tabindex': [
      'error',
      {
        tags: [],
        roles: ['tabpanel'],
      },
    ],

    // Enforce explicit role is not the same as implicit/default role property on element
    'jsx-a11y/no-redundant-roles': 'error',

    // Enforce that non-interactive, visible elements (such as <div>) have a role
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],

    // Enforce onClick is accompanied by onKeyUp, onKeyDown, or onKeyPress
    'jsx-a11y/click-events-have-key-events': 'error',

    // Enforce heading (h1, h2, etc) elements contain accessible content
    'jsx-a11y/heading-has-content': ['error', { components: [''] }],

    // Enforce that <html> element has lang attribute
    'jsx-a11y/html-has-lang': 'error',

    // Enforce iframe elements have a title attribute
    'jsx-a11y/iframe-has-title': 'error',

    // Enforce <audio> and <video> elements must have a <track> for captions
    'jsx-a11y/media-has-caption': [
      'error',
      {
        audio: [],
        video: [],
        track: [],
      },
    ],

    // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role
    'jsx-a11y/role-has-required-aria-props': 'error',

    // Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role
    'jsx-a11y/role-supports-aria-props': 'error',

    // Enforce scope attribute is only used on <th> elements
    'jsx-a11y/scope': 'error',

    // Enforce tabIndex value is not greater than zero
    'jsx-a11y/tabindex-no-positive': 'error',
  },
};
