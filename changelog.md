# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

## 3.0.0 - Upgraded `eslint-config-airbnb` peer depedencies
### Changed
- Upgraded the following peer dependencies:
  - eslint:                 `^3.17.1` -> `^3.19.0`
  - eslint-config-airbnb:   `^14.1.0` -> `^15.0.1`
  - eslint-plugin-import:   `^2.2.0`  -> `^2.6.1`
  - eslint-plugin-jsx-a11y: `^4.0.0`  -> `^5.1.0`
  - eslint-plugin-react:    `^6.10.0` -> `^7.1.0`

## 2.0.0 - Changed parser to `babel-eslint`
### Changed
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
