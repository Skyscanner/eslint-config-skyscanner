# React 19 migration: lint signals

`@skyscanner/eslint-config-skyscanner` layers in a set of lint-level signals to help codebases prepare for React 19 _before_ the upgrade itself lands. This page documents what each signal catches, why it's on, and how to act.

The goal is **visibility**: squads see the backlog in their IDE and CI now, while still on React 18, instead of discovering it at upgrade time. Most signals ship at `warn` so they surface without blocking builds. A small number are at `error` — specifically the `no-restricted-imports` entries — because they target React 19 hard-breakers whose fix is a one-line import change (often available as a codemod). Those will fail CI on affected repos; the rest will not.

## What's enabled

| Rule / restriction                                                         | Severity | Covers                                                               |
| -------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------- |
| [`@eslint-react/no-default-props`](#no-default-props-function-components)  | `warn`   | `FnComponent.defaultProps = {}` on function components               |
| [`@eslint-react/no-forward-ref`](#no-forward-ref)                          | `warn`   | `forwardRef(...)` usage (no longer required in R19)                  |
| [`@eslint-react/no-unstable-default-props`](#no-unstable-default-props)    | `warn`   | Array / object literal defaults in destructuring                     |
| [`no-restricted-imports` — `react-dom/test-utils`](#react-domtest-utils)   | `error`  | `import … from 'react-dom/test-utils'` (R19 removes `act` from here) |
| [`no-restricted-imports` — `useFormState` from `react-dom`](#useformstate) | `error`  | `import { useFormState } from 'react-dom'`                           |

The existing airbnb-enabled `react/no-deprecated`, `react/no-string-refs`, and `react/no-find-dom-node` rules are already at `error` and cover `ReactDOM.render` / `ReactDOM.hydrate`, string refs, and `findDOMNode` respectively — you don't need to do anything extra for those.

---

## `no-default-props` (function components)

React 19 **removes `defaultProps` on function components**. Code that relies on it will silently stop applying default values after the upgrade — no error is thrown, the prop is just `undefined`. From the upstream upgrade guide:

> We're also removing `defaultProps` from function components in place of ES6 default parameters. Class components will continue to support `defaultProps` since there is no ES6 alternative.
>
> — [React 19 upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-defaultprops-for-function-components)

### What this rule catches

The `FnComponent.defaultProps = { ... }` assignment pattern on a function component:

```jsx
// Will warn
const Banner = ({ message }) => <div>{message}</div>;
Banner.defaultProps = { message: 'Hello' };
```

### What about class components?

Class components — including `static defaultProps` — continue to work in React 19; the upgrade guide explicitly exempts them, and this rule does not flag them. Audits across the fleet (Falcon, Backpack) are migrating class `defaultProps` anyway for fleet coherence and for `@types/react@19` alignment, but it is not a hard React 19 blocker.

### Remediation

Replace with ES6 default parameters via destructuring:

```jsx
// Before
const Banner = ({ message, tone }) => <div className={tone}>{message}</div>;
Banner.defaultProps = { message: 'Hello', tone: 'info' };

// After
const Banner = ({ message = 'Hello', tone = 'info' }) => (
  <div className={tone}>{message}</div>
);
```

---

## `no-forward-ref`

React 19 makes `forwardRef` unnecessary — refs can be passed and received as a regular prop. Existing `forwardRef(...)` call-sites still work, but they're worth cleaning up at the same time as the upgrade for simpler component signatures.

### What this rule catches

Any call to `forwardRef`:

```jsx
// Will warn
const Input = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <input ref={ref} {...props} />
));
```

### Remediation

Accept `ref` as a prop on a regular function component:

```jsx
// After (React 19)
const Input = ({ ref, ...props }: Props & { ref?: Ref<HTMLInputElement> }) => (
  <input ref={ref} {...props} />
);
```

If the component also uses `defaultProps`, the combination is specifically called out in the Falcon audit as a required rewrite — `defaultProps` was never supported on `forwardRef` components in React 19.

---

## `no-unstable-default-props`

Flags destructured defaults that are object or array **literals**, which re-create on every render and break downstream memoization. The footgun is not new, but concurrent rendering in React 19 makes the perf consequences more visible.

### What this rule catches

```jsx
// Will warn
const List = ({ items = [] }) => items.map((i) => <Item key={i} />);
const Sheet = ({ styles = {} }) => <div style={styles} />;
```

### Remediation

Hoist the default to a module-level constant:

```jsx
const EMPTY_LIST: string[] = [];
const List = ({ items = EMPTY_LIST }) => items.map((i) => <Item key={i} />);
```

---

## `no-restricted-imports` entries

### `react-dom/test-utils`

React 19 removes `act` from `react-dom/test-utils`. It now lives on `react`.

```jsx
// Before — flagged
import { act } from 'react-dom/test-utils';

// After
import { act } from 'react';
```

There's a codemod that does this automatically for a whole repo:

```
npx codemod react/19/replace-act-import
```

### `useFormState`

`useFormState` from `react-dom` is renamed to `useActionState` and moves to `react`:

```jsx
// Before — flagged
import { useFormState } from 'react-dom';

// After
import { useActionState } from 'react';
```

The rename includes a signature tweak — see the [React 19 upgrade guide — `useFormState` → `useActionState`](https://react.dev/blog/2024/04/25/react-19-upgrade-guide#useformstate-has-been-replaced-by-useactionstate) for call-site changes.

---

## Opting out in legacy code

If a file is genuinely stuck on the old pattern and can't be migrated in this PR, suppress locally with an `eslint-disable` comment and link to the owning ticket:

```jsx
// eslint-disable-next-line @eslint-react/no-forward-ref -- tracked in LOOM-1234
const Input = forwardRef(...);
```

Do **not** turn a rule off globally in a consumer config — the warnings are there so the squad sees the backlog. If a repo genuinely has dozens of cases, surface that to the config maintainers so we can decide on a fleet-level path forward rather than hiding the signal.

## References

- [React 19 upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide)
- [`@eslint-react/no-default-props`](https://eslint-react.xyz/docs/rules/no-default-props)
- [`@eslint-react/no-forward-ref`](https://eslint-react.xyz/docs/rules/no-forward-ref)
- [`@eslint-react/no-unstable-default-props`](https://eslint-react.xyz/docs/rules/no-unstable-default-props)
- React 19 codemod: `npx codemod react/19/migration-recipe`
