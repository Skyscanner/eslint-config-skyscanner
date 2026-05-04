# React 19: `defaultProps` warning

Starting in **v15.1.0**, `@skyscanner/eslint-config-skyscanner` enables [`@eslint-react/no-default-props`](https://eslint-react.xyz/docs/rules/no-default-props) at `warn` severity. This page explains why and how to act on the warning.

## Why this warning now

React 19 **removes `defaultProps` on function components**. Code that relies on it will silently stop applying default values after the upgrade — no error is thrown, the prop is just `undefined`. Upstream rationale and migration notes:

- [React 19 upgrade guide — Removed: `defaultProps` for function components](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-defaultprops-for-function-components)

Surfacing this now — while teams are still on React 18 — gives every Skyscanner React codebase an inline IDE and CI signal about call-sites that need attention, so the upgrade work is already in progress by the time a repo bumps `react`.

Severity is deliberately `warn`, not `error`: the goal of this release is **visibility**, not blocking builds. A future major of this config may promote the rule to `error` once the fleet is clean.

## What this rule catches

The `FnComponent.defaultProps = { ... }` assignment pattern on a function component. For example:

```jsx
// Will warn
const Banner = ({ message }) => <div>{message}</div>;
Banner.defaultProps = { message: 'Hello' };
```

## What this rule does NOT catch — read this

The rule’s AST matcher only fires on the function-component assignment form above. It does **not** catch the following patterns, which are **also** incompatible with React 19:

1. **Class components with `static defaultProps`**:

   ```jsx
   class Greeting extends Component {
     static defaultProps = { name: 'World' };
     render() {
       return <div>Hello {this.props.name}</div>;
     }
   }
   ```

   These silently stop applying defaults in R19 just like the function form, but `@eslint-react/no-default-props` won’t flag them. Audit class components manually (grep `static defaultProps` / `\.defaultProps = `).

2. **Setting defaults via `Object.defineProperty` or other dynamic shapes.** Rare in our codebases, but worth calling out.

A follow-up release of this config will likely add coverage for class `static defaultProps` via a `no-restricted-syntax` selector; until then, treat the rule as a partial safety net, not a complete one.

## Remediation

Replace `defaultProps` with **ES6 default parameters** via destructuring. This is what React 19 recommends and is the form `react/require-default-props` (already set to `error` in this config with `functions: 'defaultArguments'`) will accept going forward.

### Function component

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

### Class component (not flagged, but still requires the same fix)

Before:

```jsx
class Greeting extends Component {
  static defaultProps = { name: 'World' };
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```

After (convert to a function component with default parameters):

```jsx
const Greeting = ({ name = 'World' }) => <div>Hello {name}</div>;
```

If the class has lifecycle methods or state that genuinely needs a class, preserve them but move defaults into a constructor-bound helper or a wrapping function component that applies defaults before rendering the class.

## Opting out in legacy code

If a file is genuinely stuck on the old pattern and can’t be migrated in this PR, suppress locally with an `eslint-disable` comment and link to the owning ticket:

```jsx
// eslint-disable-next-line @eslint-react/no-default-props -- tracked in LOOM-1234
Banner.defaultProps = { message: 'Hello' };
```

Do **not** turn the rule off globally in a consumer config — the warnings are there so the squad sees the backlog. If a repo genuinely has dozens of cases, surface that to the config maintainers so we can decide on a fleet-level path forward rather than hiding the signal.

## References

- [`@eslint-react/no-default-props` rule docs](https://eslint-react.xyz/docs/rules/no-default-props)
- [React 19 upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide)
