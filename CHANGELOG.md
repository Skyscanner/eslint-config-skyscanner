# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## UNRELEASED

### Breaking

- Updated [`eslint`]() to `7.11.0`
- Updated [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest/releases) to `24.1.0`
- Updated [`eslint-plugin-react-hooks`](https://github.com/facebook/react/blob/master/packages/eslint-plugin-react-hooks/CHANGELOG.md) to `4.1.2`
- Updated [`prettier`](https://github.com/prettier/prettier/releases) to `2.1.2`

### Changed

- Turned off `backpack/use-components` due to a bug with `autoImport` not correctly turning off when configured.

- Updated [`eslint-config-airbnb`](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/CHANGELOG.md) to `18.2.0`
- Updated [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/CHANGELOG.md) to `6.3.1`
- Updated [`eslint-plugin-react`]() to `7.21.4`

## 7.0.0 - Upgraded `eslint-plugin-backpack`

- Upgraded `eslint-plugin-backpack` to the latest version. This introduces web support for the `backpack/use-components` rule. It accepts a `platform` option that can be set to `web` (default) or `native`. See the [eslint-plugin-backpack docs](https://github.com/Skyscanner/eslint-plugin-backpack/blob/master/README.md#use-components) for more information.
- **This is only a breaking change for React Native users**, because the rule now defaults to web components.

## 6.0.0 - Upgraded `eslint-config-airbnb` to latest major version

### Breaking

- Update eslint-config-airbnb to 18.1.0
  - Migration guide here [v5 to v6](./docs/migration-from-5-to-6.md)
- Remove `eslint-plugin-jest-dom`, as it can create issues if `@testing-library/jest-dom` is not used.

### Added

- Integrate `eslint-plugin-react-hooks`.

## 5.4.0 - Added `eslint-plugin-jest-dom`

### Added

- Integrate `eslint-plugin-jest-dom`, see [documentation](https://github.com/testing-library/eslint-plugin-jest-dom) for more into.

## 5.3.0 - Allow alias for deprecated React methods

### Added

- Allow alias for deprecated React component lifecycle methods (like `UNSAFE_componentWillReceiveProps`). See https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html

## 5.2.0 - Added `eslint-plugin-jest-formatting` and dependency updates

### Added

- Integrate `eslint-plugin-jest-formatting`, see [documentation](https://github.com/dangreenisrael/eslint-plugin-jest-formatting) for more into.

### Changed

- Updated `babel-eslint` to `10.1.0`
- Updated `eslint-plugin-react` to `7.19.0`

## 5.1.0 - This has been deprecated due to a publishing issue

## 5.0.0 - Added Prettier, new linting libraries and clean-up.

### Added

- Integrated [Prettier](https://prettier.io/). See the [migration guide from v4 to v5](docs/migration-from-4-to-5.md).
- Integrate `eslint-plugin-jest`, see [documentation](https://github.com/jest-community/eslint-plugin-jest) for more into.
- Integrate `eslint-plugin-eslint-comments`, see [documentation](https://mysticatea.github.io/eslint-plugin-eslint-comments/) for more info.

### Removed

- Remove `eslint-plugin-skyscanner-dates`.

### Changed

- Upgraded Node 8 (lts/carbon) to Node 12 (lts/erbium).
- Moved `peerDependencies` into `dependencies`.

## 5.0.0-beta.2 - Add skyscanner dates plugin

### Changed

- Integrate `eslint-plugin-skyscanner-dates`, see [readme](https://github.com/Skyscanner/eslint-plugin-skyscanner-dates) for more info.

## 5.0.0-beta.1 - Add import/order rule

### Changed

- New `import/order` rule (see [#21](https://github.com/Skyscanner/eslint-config-skyscanner/pull/21)).
  - **Note:** This can introduce visual bugs where CSS rule order is influenced by the order in which stylesheets are imported (either directly `import 'my-style.scss';` or indirectly via a component `import MyComponent from './MyComponent'`). An [example](https://github.com/Skyscanner/backpack/pull/1322) exists in the Backpack documentation website homepage.

## 4.1.0 - Add skyscanner dates plugin

### Changed

- Integrate `eslint-plugin-skyscanner-dates`, see [readme](https://github.com/Skyscanner/eslint-plugin-skyscanner-dates) for more info.

## 4.0.0

Includes all changes published in the previous betas.

## 4.0.0-beta.11 - Upgraded dependencies

### Changed

- Upgraded the following peer dependencies:
  - [babel-eslint](https://github.com/babel/babel-eslint/releases): `^10.0.0` -> `^10.0.1`
  - [eslint](https://github.com/eslint/eslint/blob/master/CHANGELOG.md): `^5.6.0` -> `^5.12.0`
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/CHANGELOG.md): `^6.1.1` -> `^6.1.2`
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react/blob/master/CHANGELOG.md): `^7.11.1` -> `^7.12.3`

## 4.0.0-beta.10 - Upgraded `babel-eslint`

### Changed

- Upgraded the following peer dependencies:
  - [babel-eslint](https://github.com/babel/babel-eslint/releases): `^8.2.6` -> `^10.0.0`
  - [eslint](https://github.com/eslint/eslint/blob/master/CHANGELOG.md): `^5.4.0` -> `^5.6.0`

## 4.0.0-beta.9 - Upgraded `eslint-config-airbnb`

### Changed

- Upgraded the following peer dependencies:
  - babel-eslint: `^8.2.5` -> `^8.2.6`
  - [eslint](https://github.com/eslint/eslint/blob/master/CHANGELOG.md): `^4.19.1` -> `^5.4.0`
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/CHANGELOG.md): `^17.0.0` -> `^17.1.0`
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import/blob/master/CHANGELOG.md): `^2.13.0` -> `^2.14.0`
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/CHANGELOG.md): `^6.1.0` -> `^6.1.1`
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react/blob/master/CHANGELOG.md): `^7.10.0` -> `^7.11.1`
  - [eslint-plugin-backpack](https://github.com/Skyscanner/eslint-plugin-backpack/blob/master/changelog.md): `^0.2.0` -> `^0.2.2`
- Relaxed the rule for `jsx-a11y/label-has-associated-control` to only assert `either` as opposed to `both`.

## 4.0.0-beta.8 - Disabled `react/jsx-one-expression-per-line`

### Changed

- Disabled `react/jsx-one-expression-per-line`, temporarily - https://github.com/airbnb/javascript/commit/b6a268f780177e03b573a4f0df95ecc0d2e8783e#diff-c0191b2bdd5bfebebb8cec31d0f3993c

## 4.0.0-beta.6 - New `backpack/use-components` rule added

### Changed

- Removed `backpack/auto-import-tokens` rule
- Added `backpack/use-components` rule

## 4.0.0-beta.5 - React Destructuring assignment removed

### Changed

- Removed `react/destructuring-assignment` rule

## 4.0.0-beta.4 - Upgraded `esling-config-airbnb` peer dependencies

### Changed

- Upgraded the following peer dependencies:
  - babel-eslint: `^8.0.1` -> `^8.2.5`
  - [eslint](https://github.com/eslint/eslint/blob/master/CHANGELOG.md): `^4.9.0` -> `^4.19.1`
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/CHANGELOG.md): `^16.1.0` -> `^17.0.0`
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import/blob/master/CHANGELOG.md): `^2.8.0` -> `^2.10.0`
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/CHANGELOG.md): `^6.0.2` -> `^6.1.0`
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react/blob/master/CHANGELOG.md): `^7.4.0` -> `^7.10.0`
  - [eslint-plugin-backpack](https://github.com/Skyscanner/eslint-plugin-backpack/blob/master/changelog.md): `^0.0.2` -> `^0.1.0`

## 4.0.0-beta.3 - Auto-import Backpack tokens

### Changed

- Upgraded eslint-plugin-backpack: `^0.0.2` -> `^0.1.0`
- Added `backpack/auto-import-tokens` rule to the shared config

## 4.0.0-beta.2 - New Backpack rules

### Changed

- Added support for [backpack plugin](https://github.com/Skyscanner/eslint-plugin-backpack)

## 3.1.0 - Add skyscanner dates plugin

### Changed

- Integrate `eslint-plugin-skyscanner-dates`, see [readme](https://github.com/Skyscanner/eslint-plugin-skyscanner-dates) for more info.

## 3.0.0 - Upgraded `esling-config-airbnb` peer dependencies

### Changed

- Upgraded the following peer dependencies:
  - babel-eslint: `^7.2.3` -> `^8.0.1`
  - [eslint](https://github.com/eslint/eslint/blob/master/CHANGELOG.md): `^3.17.1` -> `^4.9.0`
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/CHANGELOG.md): `^14.1.0` -> `^16.1.0`
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import/blob/master/CHANGELOG.md): `^2.2.0` -> `^2.8.0`
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/CHANGELOG.md): `^4.0.0` -> `^6.0.2`
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react/blob/master/CHANGELOG.md): `^6.10.0` -> `^7.4.0`

## 2.0.0 - Changed parser to `babel-eslint`

### Changed

- Changed parser to `babel-eslint` to support dynamic `import()` statements used with Webpack 2

## 1.1.0 - Add JSDoc validation

### Added

- Validate JSDoc (when present)

## 1.0.0 - Upgraded airbnb config to v14

### Changed

- Upgraded peerDependencies to latest versions: `eslint`, `eslint-config-airbnb`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react`

## 0.0.2 - Fixing install

### Fixed

- Mirroring eslint-config-airbnb's peerDependencies so that install works

## 0.0.1 - Initial config

### Added

- Initial config based on [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb)
