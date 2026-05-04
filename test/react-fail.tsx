import React from 'react';

export const CustomComponent = () => {
  const [val, setVal] = React.useState('initial value');

  React.useEffect(() => {
    setVal('new value')
  }, [setVal]);

  return val;
};

// @eslint-react/no-default-props: .defaultProps on function components silently
// stops applying in React 19. See docs/react-19-default-props.md.
const Greeter = ({ name }: { name?: string }) => <div>Hello {name}</div>;
Greeter.defaultProps = { name: 'World' };

export default CustomComponent;
export { Greeter };
