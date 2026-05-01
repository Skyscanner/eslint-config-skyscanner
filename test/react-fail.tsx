/* eslint-disable no-unused-vars,import/no-unresolved,import/extensions,import/no-extraneous-dependencies */
import React, { Component, createContext, forwardRef } from 'react';
import ReactDOM, { findDOMNode, useFormState } from 'react-dom';
import { act } from 'react-dom/test-utils';
/* eslint-enable no-unused-vars,import/no-unresolved,import/extensions,import/no-extraneous-dependencies */

// no-restricted-imports: default React import is disallowed
export const CustomComponent = () => {
  const [val, setVal] = React.useState('initial value');

  React.useEffect(() => {
    setVal('new value');
  }, [setVal]);

  return val;
};

// react/no-deprecated: ReactDOM.render is removed in React 19
ReactDOM.render(<div />, document.getElementById('root')!);

// react/no-string-refs + react/no-find-dom-node: both removed in React 19.
// Also: no-restricted-syntax catches `static defaultProps`, legacy `contextTypes` /
// `childContextTypes`, and `getChildContext` — all removed / silently broken in R19.
class Greeting extends Component<{ name?: string }> {
  static defaultProps = { name: 'World' };

  static contextTypes = {};

  static childContextTypes = {};

  getChildContext() {
    return {};
  }

  componentDidMount() {
    findDOMNode(this);
  }

  render() {
    return <div ref="myRef">Hello {this.props.name}</div>;
  }
}

// @eslint-react/no-default-props: function-component .defaultProps removed in R19
const Greeter = ({ name }: { name?: string }) => <div>Hello {name}</div>;
Greeter.defaultProps = { name: 'World' };

// @eslint-react/no-forward-ref: forwardRef no longer required in React 19
const ForwardRefComponent = forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} />
));

// @eslint-react/no-unstable-default-props: array literal default re-creates each render
const UnstableDefaults = ({ items = [] }: { items?: string[] }) => (
  <ul>
    {items.map((i) => (
      <li key={i}>{i}</li>
    ))}
  </ul>
);

// @eslint-react/no-unstable-context-value: inline object breaks memoization
const MyContext = createContext<{ foo: string } | null>(null);
const Provider = ({ children }: { children: React.ReactNode }) => (
  <MyContext.Provider value={{ foo: 'bar' }}>{children}</MyContext.Provider>
);

// no-restricted-imports: `act` moved from react-dom/test-utils to react in R19
// no-restricted-imports: useFormState moved to `useActionState` in react in R19
const useActForm = () => {
  const [state] = useFormState((s: unknown) => s, null);
  act(() => {});
  return state;
};

export {
  Greeting,
  Greeter,
  ForwardRefComponent,
  UnstableDefaults,
  Provider,
  useActForm,
};
