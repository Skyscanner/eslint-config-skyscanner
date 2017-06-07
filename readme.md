# eslint-config-skyscanner

[![Build Status](https://travis-ci.org/Skyscanner/eslint-config-skyscanner.svg?branch=master)](https://travis-ci.org/Skyscanner/eslint-config-skyscanner)

This package includes the shareable ESLint configuration used by Skyscanner.

## Usage

Ensure packages are installed with correct version numbers by running:

```sh
(
  export PKG=eslint-config-skyscanner;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

Which produces and runs a command like:

```sh
npm install --save-dev eslint-config-skyscanner babel-eslint@#.#.# eslint-config-airbnb@#.#.# eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
```

Add `"extends": "skyscanner"` to your `.eslintrc`.
