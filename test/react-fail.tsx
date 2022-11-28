import React from 'react';

export const CustomComponent = () => {
  const [val, setVal] = React.useState('initial value');

  React.useEffect(() => {
    setVal('new value')
  }, [setVal]);

  return val;
};

export default CustomComponent;
