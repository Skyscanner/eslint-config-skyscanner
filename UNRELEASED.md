# UNRELEASED

This project adheres to [Semantic Versioning](http://semver.org/).

# 14.0.0

## Updated

- Update from babel-eslint to @babel/eslint-parser

`babel-eslint` was deprecated on July 31, 2020 in favour of the package from Babel's main mono repo; ` @babel/eslint-parser`.

If using the standard Skyscanner tool chain as described in our Production Standards then for the majority of consumers this will be a patch level change.

However, if your repository is using non-standard presets then some additional configuration may be required.

<details>
<summary>Upgrade Details</summary>

### Parser

`eslint-config-skyscanner` sets

```js
parser: '@babel/eslint-parser',
```

by default, and overrides this for `.ts?(x)` files to

```js
parser: '@typescript-eslint/parser',
```

If you were previous declaring `parser` explicitly in your `eslintrc` this will need to be updated, or removed (to inherit the behaviour as above).

### Parser Options

For JavaScript `eslint-config-skyscanner` sets

```js
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },

```

and for `.ts?(x)`

```js
plugins: ['@typescript-eslint'],
```

This will not require a Babel config file, but if one is present will use it by default. It includes support for React syntax and TypeScript by default.

If you have extended your project beyond this to non-standard Skyscanner syntax, and this is not in your root Babel config, then you will need to override these settings in your `eslintrc` for Babel to be able to parse your code while ESLint runs.

https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser#additional-parser-configuration

</details>
