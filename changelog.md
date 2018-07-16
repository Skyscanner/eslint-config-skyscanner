# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## 4.0.0-beta.8 - Disabled `react/jsx-one-expression-per-line` 
### Changed
- Disabled `react/jsx-one-expression-per-line`, temporarilly - https://github.com/airbnb/javascript/commit/b6a268f780177e03b573a4f0df95ecc0d2e8783e#diff-c0191b2bdd5bfebebb8cec31d0f3993c

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
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/CHANGELOG.md): -> `^6.0.2` -> `^6.1.0`
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react/blob/master/CHANGELOG.md): -> `^7.4.0` -> `^7.10.0`
  - [eslint-plugin-backpack](https://github.com/Skyscanner/eslint-plugin-backpack/blob/master/changelog.md): -> `^0.0.2` -> `^0.1.0`

## 4.0.0-beta.3 - Auto-import Backpack tokens

### Changed
  - Upgraded eslint-plugin-backpack: `^0.0.2` -> `^0.1.0`
  - Added `backpack/auto-import-tokens` rule to the shared config

## 4.0.0-beta.2 - New Backpack rules

### Changed
 - Added support for [backpack plugin](https://github.com/Skyscanner/eslint-plugin-backpack)

## 3.0.0 - Upgraded `esling-config-airbnb` peer dependencies

### Changed
- Upgraded the following peer dependencies:
  - babel-eslint: `^7.2.3` -> `^8.0.1`
  - [eslint](https://github.com/eslint/eslint/blob/master/CHANGELOG.md): `^3.17.1` -> `^4.9.0`
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/CHANGELOG.md): `^14.1.0` -> `^16.1.0`
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import/blob/master/CHANGELOG.md): `^2.2.0`  -> `^2.8.0`
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/CHANGELOG.md): `^4.0.0`  -> `^6.0.2`
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react/blob/master/CHANGELOG.md): `^6.10.0` -> `^7.4.0`

## 2.0.0 - Changed parser to `babel-eslint`
## Changed
- Changed parser to `babel-eslint` to support dynamic `import()` statements used with Webpack 2

## 1.1.0 - Add JSDoc validation
### Changed
- Validate JSDoc (when present)

## 1.0.0 - Upgraded airbnb config to v14
### Changed
- Upgraded peerDependencies to latest versions: `eslint`, `eslint-config-airbnb`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react`

## 0.0.2 - Fixing install
### Fixed
- Mirroring eslint-config-airbnb’s peerDependencies so that install works

## 0.0.1 - Initial config
### Added
- Initial config based on [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb)
