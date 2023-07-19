# UNRELEASED

This project adheres to [Semantic Versioning](http://semver.org/).

# 15.0.0

## Breaking

- Bump eslint-config-airbnb from 18 to 19
- Bump eslint from 7 to 8

This update is intended to be as low friction as possible, with incoming rules that cause more toil than gain disabled.

However, it does bring in several new, very valuable, rules, so it is expected to need work to fix these lint errors when making this upgrade. If you do not agree with any of the incoming rules please reach out to talk about solving it in a centralised way before making local overrides.

All new rules will point to documentation about that rule, with examples of fixes, if they trigger in your codebase.

If you use `@skyscanner/stylelint-config-skyscanner` please update to version 9, to match this change, as it shares transitive dependencies: https://github.com/Skyscanner/stylelint-config-skyscanner/blob/main/docs/eslint-as-dependency.md

ESLint release notes:

- https://eslint.org/docs/latest/use/migrate-to-8.0.0

AirBnB Config Release notes:

- https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.0/packages/eslint-config-airbnb/CHANGELOG.md#1900--2021-11-10
- https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v19.0.0/packages/eslint-config-airbnb-base/CHANGELOG.md#1500--2021-11-08
