/* eslint-disable no-unused-vars,import/no-unresolved,import/extensions,import/no-extraneous-dependencies */
import React, { forwardRef, Ref } from 'react';
import { useFormState } from 'react-dom';
import { act } from 'react-dom/test-utils';
/* eslint-enable no-unused-vars,import/no-unresolved,import/extensions,import/no-extraneous-dependencies */

// no-restricted-imports: default React import is disallowed
export const CustomComponent = () => {
  const [val, setVal] = React.useState('initial value');

  React.useEffect(() => {
    setVal('new value')
  }, [setVal]);

  return val;
};

// @eslint-react/no-default-props: .defaultProps on function components silently
// stops applying in React 19. See docs/react-19-migration-prep.md.
const Greeter = ({ name }: { name?: string }) => <div>Hello {name}</div>;
Greeter.defaultProps = { name: 'World' };

// @eslint-react/no-forward-ref: forwardRef is no longer required in React 19
const Input = forwardRef<HTMLInputElement>((props, ref: Ref<HTMLInputElement>) => (
  <input ref={ref} {...props} />
));

// @eslint-react/no-unstable-default-props: array/object literal defaults re-create
// every render and break downstream memoisation under concurrent rendering
const List = ({ items = [] }: { items?: string[] }) => (
  <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
);

// no-restricted-imports: `act` moved from react-dom/test-utils to react in R19
// no-restricted-imports: useFormState renamed to useActionState and moves to react in R19
const useActForm = () => {
  const [state] = useFormState((s: unknown) => s, null);
  act(() => {});
  return state;
};

export default CustomComponent;
export { Greeter, Input, List, useActForm };
