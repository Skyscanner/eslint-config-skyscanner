# Migration Guide from v5.x to v6.x

The main motivation for this is adding rule-of-hooks for react. (https://www.npmjs.com/package/eslint-plugin-react-hooks)

# Breaking rules that have been disabled

- `react/jsx-props-no-spreading` https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md

  - This is has a big impact, not only in code style but in how we design our components and the impact of turning this on clearly outweighs the benefit of enforcing it.

- `react/static-property-placement` https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md

  - This rule is purely about code style and also has a big impact.

- `react/jsx-fragments` https://github.com/yannickcr/eslint-plugin-react/blob/bc976b837abeab1dffd90ac6168b746a83fc83cc/docs/rules/jsx-fragments.md

  - This rule is about enforcing the shorthand version when using Fragments which is optional and doesn't have a big impact in using either syntax.

- `react/state-in-constructor` https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
  - This rule is disabled as it conflicts with flow annotations, there is a TODO for them to fix this once an upstream dependency has support. See https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js#L484

# Breaking rules we are keeping without changes

- `arrow-parens` https://eslint.org/docs/rules/arrow-parens

  - This is now enabled in config-base by default, this is breaking but can be auto fixed. The argument in favour of this is that it - `Minimizes diff churn when adding or removing arguments`.

- `Require parens for arrow function args` https://eslint.org/docs/rules/arrow-parens

  - This is now enabled in config-base by default, this is breaking but can be auto fixed.

- `prefer-object-spread` https://eslint.org/docs/rules/prefer-object-spread.

  - This is mostly how we write code and can be disabled on a case by case basis.

- `no-async-promise-executor` https://eslint.org/docs/rules/no-async-promise-executor.

  - This rule helps preventing bugs.

- `no-misleading-character-class` https://eslint.org/docs/rules/no-misleading-character-class.

  - A very specific rule with low impact.

- `no-useless-catch` https://eslint.org/docs/rules/no-useless-catch.

  - Enabled `props` option. Low impact and prevents unnecessary extra code.

- `no-self-assign` https://eslint.org/docs/rules/no-self-assign.

  - Low impact and prevents unnecessary code.

- `func-name-matching` https://eslint.org/docs/rules/func-name-matching#considerpropertydescriptor

  - Enable `considerPropertyDescriptor` option, the check will take into account the use of `Object.create`, `Object.defineProperty`, `Object.defineProperties`, and `Reflect.defineProperty`.

- `padded-blocks` https://eslint.org/docs/rules/padded-blocks

  - Enables `allowSingleLineBlocks` option to allow single-line blocks

- `no-multiple-empty-lines` https://eslint.org/docs/rules/no-multiple-empty-lines

  - Restrict to only allow one newline at the end of files, and avoid a newline at the beginning of files

- `react/jsx-curly-newline`: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md.

  - Improves readability and consistency of curly parenthesis use.

- `jsx-a11y/control-has-associated-label` https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md.

  - Good for Accessibility to ensure that interactive components have the correct accessibility details

- Simplifies no-mixed-operators https://github.com/airbnb/javascript#comparison--no-mixed-operators

# Breaking rules we are keeping with changes

- `max-classes-per-file` https://eslint.org/docs/rules/max-classes-per-file.
  - Changed from 1 to 3 as it seems too restrictive and it should be defined by each use case. A file can contain more than one class and still have a `single responsibility`

# The change from v5 to v6 includes two main items:

- Upgraded `eslint-config-airbnb` to `v18` which comes with major breaking rule changes.
- Dropped eslint v4 support
