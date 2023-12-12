const { RuleTester } = require('eslint');

const noAxios = require('./no-axios');

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
});

ruleTester.run('no-axios', noAxios, {
  valid: [
    {
      code: 'const test = require("foo-axios");',
    },
    {
      code: 'import test from "foo-axios";',
    },
    {
      // we can only detect actual strings,
      // not string templates and other things that evaluate to string
      code: 'const axios = await import(`axios`);',
    },
  ],
  invalid: [
    {
      code: 'const axios = require("axios");',
      errors: [
        {
          message: 'Deprecated require of axios package',
        },
      ],
    },
    {
      code: 'import axios from "axios";',
      errors: [
        {
          message: 'Deprecated import of axios package',
        },
      ],
    },
    {
      code: 'const foo = require("axios/some/internal/thing");',
      errors: [
        {
          message: 'Deprecated require of axios package',
        },
      ],
    },
    {
      code: 'import foo from "axios/some/internal/thing";',
      errors: [
        {
          message: 'Deprecated import of axios package',
        },
      ],
    },
    {
      code: 'const { foo } = require("axios");',
      errors: [
        {
          message: 'Deprecated require of axios package',
        },
      ],
    },
    {
      code: 'const foo = require("axios").default;',
      errors: [
        {
          message: 'Deprecated require of axios package',
        },
      ],
    },
    {
      code: 'import { foo } from "axios";',
      errors: [
        {
          message: 'Deprecated import of axios package',
        },
      ],
    },

    {
      code: 'import("axios").then(() => console.log("foo"));',
      errors: [
        {
          message: 'Deprecated import of axios package',
        },
      ],
    },

    {
      code: 'const axios = await import("axios");',
      errors: [
        {
          message: 'Deprecated import of axios package',
        },
      ],
    },

    {
      code: 'import("axios").then(() => console.log("foo"));',
      errors: [
        {
          message: 'Deprecated import of axios package',
        },
      ],
    },
  ],
});
