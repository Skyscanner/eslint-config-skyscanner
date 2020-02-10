# Migration Guide from v4.x to v5.x

The change from v4 to v5 includes two main items:

- Adding [Prettier](https://prettier.io/) as code formatter.
- Moving the `peerDependencies` into `dependencies` to simplify the usage.

## Moving `peerDependencies` into `dependencies`

`eslint-config-skyscanner` used to require a few devDependencies that had to be installed manually.
When upgrading to v5, all these dependencies can be removed from the project (unless used explicitly):

- `babel-eslint`
- `eslint`
- `eslint-config-airbnb`
- `eslint-plugin-eslint-comments`
- `eslint-plugin-import`
- `eslint-plugin-jest`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-react`
- `eslint-plugin-backpack`
- `eslint-plugin-skyscanner-dates`

## Using Prettier

Prettier is an opinionated code formatter, with few configuration options.
When installing `eslint-config-skyscanner`, the file `.prettierrc` is automatically generated with the default configuration.

Prettier is able to fix many of the issues that reports, so after installing v5, eslint must be executed with the `--fix` flag to format the code according to the new rules.

### Pre-commit hook integration

It's possible to add a pre-commit hook that automatically fixes code formatting issues when committing using [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).
The source code of this repo can be used as a reference for this configuration.

### Editor integration

Many editors allow running eslint fix on save.

## Testing framework

[Jest](https://jestjs.io/) is the standard testing framework defined by `eslint-config-skyscanner`, and it includes [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest), a plugin that enforces good testing practices with Jest.

In case of using a different testing framework, the rules defined in [`eslint-plugin-jest/recommended`](https://github.com/jest-community/eslint-plugin-jest#recommended) can be disabled to prevent false errors being reported.

Edit `.eslintrc` file to disable (globally) the needed rules, e.g.:

```json
"rules": {
  "jest/valid-expect": "off"
}
```

The rules can also be disabled per file/folder:

```json
"overrides": [{
  "files": ["test/**/*.test.js"],
  "rules": {
    "jest/valid-expect": "off"
  }
}]
```
