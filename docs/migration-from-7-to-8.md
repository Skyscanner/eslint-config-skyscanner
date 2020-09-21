# Migration Guide from v7.x to v8.x

The main motivation for this is upgrading linters to their latest major versions.

# Jest

`eslint-config-skyscanner` will try to detect automatically the version of Jest installed.

If your project doesn't use it or it is not installed in the same `package.json` as `eslint-config-skyscanner`, it must be manually set in `.eslintrc` to your desired version:

```
"settings": {
  "jest": {
    "version": "VERSION"
  }
}
```

# Breaking rules that have been disabled

- `jest/no-large-snapshots` https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-large-snapshots.md
  - This rule has a big impact as it means that test files would need to be broken down further so that the generated snapshot files could shrink but this might be difficult on some snapshots where the component being tested, is rendered on many lines.

# Breaking rules we are keeping without changes

- Added `plugin:react-hooks/recommended` to enforce the recommended rules of hooks to config.
- `prettier/arrowParens` https://prettier.io/blog/2020/03/21/2.0.0.html#change-default-value-for-arrowparens-to-always-7430httpsgithubcomprettierprettierpull7430-by-kachkaevhttpsgithubcomkachkaev
  - This rule is useful as it brings many benefits which aid development such as adding type annotations, extra arguments, default values, etc.
- `prettier/endOfLine` https://prettier.io/blog/2020/03/21/2.0.0.html#change-default-value-for-endofline-to-lf-7435httpsgithubcomprettierprettierpull7435-by-kachkaevhttpsgithubcomkachkaev
  - This rule helps maintain consistency to line endings in development.

# Breaking rules we are keeping with changes

# General breaking rules

# The change from v7 to v8 includes the following updates:

- Upgraded linter dependencies. See [CHANGELOG](../CHANGELOG.md)
- `eslint` no-longer supports Node 6 and Node 8.
