# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## 3.0.0 - Upgraded `esling-config-airbnb peer dependencies`

### Changed
- Upgraded the following peer dependencies:
 - babel-eslint:           `^7.2.3` -> `^8.0.1`
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
