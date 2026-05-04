# React 19: `defaultProps` warning

`@skyscanner/eslint-config-skyscanner` enables [`@eslint-react/no-default-props`](https://eslint-react.xyz/docs/rules/no-default-props) at `warn` severity. This page explains why and how to act on the warning.

## Why this warning now

React 19 **removes `defaultProps` on function components**. Code that relies on it will silently stop applying default values after the upgrade — no error is thrown, the prop is just `undefined`. From the upstream upgrade guide:

> We're also removing `defaultProps` from function components in place of ES6 default parameters. Class components will continue to support `defaultProps` since there is no ES6 alternative.
>
> — [React 19 upgrade guide — `defaultProps`](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-defaultprops-for-function-components)

Surfacing this now — while teams are still on React 18 — gives every Skyscanner React codebase an inline IDE and CI signal about call-sites that need attention, so the upgrade work is already in progress by the time a repo bumps `react`.

Severity is deliberately `warn`, not `error`: the goal is **visibility**, not blocking builds. A future major of this config may promote the rule to `error` once the fleet is clean.

## What this rule catches

The `FnComponent.defaultProps = { ... }` assignment pattern on a function component. For example:

```jsx
// Will warn
const Banner = ({ message }) => <div>{message}</div>;
Banner.defaultProps = { message: 'Hello' };
```

## What about class components?

Class components — including `static defaultProps` — **continue to work in React 19**; the upgrade guide explicitly exempts them. The rule does not flag them and you do not need to migrate them for the React 19 upgrade. (React may deprecate class `defaultProps` in a future major; this is not a React 19 concern.)

## Remediation

Replace function-component `defaultProps` with **ES6 default parameters** via destructuring. This is what React 19 recommends and is the form `react/require-default-props` (already set to `error` in this config with `functions: 'defaultArguments'`) will accept going forward.

Before:

```jsx
const Banner = ({ message, tone }) => <div className={tone}>{message}</div>;

Banner.defaultProps = {
  message: 'Hello',
  tone: 'info',
};
```

After:

```jsx
const Banner = ({ message = 'Hello', tone = 'info' }) => (
  <div className={tone}>{message}</div>
);
```

## Opting out in legacy code

If a file is genuinely stuck on the old pattern and can't be migrated in this PR, suppress locally with an `eslint-disable` comment and link to the owning ticket:

```jsx
// eslint-disable-next-line @eslint-react/no-default-props -- tracked in LOOM-1234
Banner.defaultProps = { message: 'Hello' };
```

Do **not** turn the rule off globally in a consumer config — the warnings are there so the squad sees the backlog. If a repo genuinely has dozens of cases, surface that to the config maintainers so we can decide on a fleet-level path forward rather than hiding the signal.

## References

- [`@eslint-react/no-default-props` rule docs](https://eslint-react.xyz/docs/rules/no-default-props)
- [React 19 upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide)
