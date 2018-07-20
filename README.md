# eslint-config-skyscanner

[![Build Status](https://travis-ci.org/Skyscanner/eslint-config-skyscanner.svg?branch=master)](https://travis-ci.org/Skyscanner/eslint-config-skyscanner) [![Greenkeeper badge](https://badges.greenkeeper.io/Skyscanner/eslint-config-skyscanner.svg)](https://greenkeeper.io/)

This package includes the shareable ESLint configuration used by Skyscanner. It requires `eslint`, `babel-eslint`, `eslint-config-airbnb`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-jsx-a11y` and `eslint-plugin-backpack`.

## Usage

1. Ensure packages are installed with correct version numbers by running:

    ```sh
    npx install-peerdeps --dev eslint-config-skyscanner
    ```

    If using **npm < 5**, Linux/OSX users can run

    ```sh
    (
      export PKG=eslint-config-skyscanner;
      npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
    )
    ```

    Which produces and runs a command like:

    ```sh
    npm install --save-dev eslint-config-skyscanner eslint@^#.#.# babel-eslint@^#.#.# eslint-config-airbnb@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# eslint-plugin-backpack@^#.#.#
    ```

    If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

    ```sh
    npm install -g install-peerdeps
    install-peerdeps --dev eslint-config-skyscanner
    ```
    The cli will produce and run a command like:

    ```sh
    npm install --save-dev eslint-config-skyscanner eslint@^#.#.# babel-eslint@^#.#.# eslint-config-airbnb@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# eslint-plugin-backpack@^#.#.#
    ```

2. Add `"extends": "skyscanner"` to your .eslintrc
