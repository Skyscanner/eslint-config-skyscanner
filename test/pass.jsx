import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ children }) => <div role="banner">{children}</div>;

Banner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Banner;

const DestructuringComponent = (props) => (
  <div role="banner">{props.message}</div>
);

DestructuringComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

// react/jsx-props-no-spreading
const SpreadProps = (props) => <div role="banner" {...props} />;

// react/static-property-placement
class MyComponent extends React.Component {
  static propTypes = { message: PropTypes.string.isRequired };

  constructor(props: PropTypes) {
    super(props);

    this.state = {
      foo: 'bar',
    };
  }

  render() {
    return (
      <div role="banner">
        {this.props.message} - Foo {this.state.foo}
      </div>
    );
  }
}

// react/jsx-fragments
const Fragments = (props) => (
  <React.Fragment>
    <Banner>{props.message}</Banner>
  </React.Fragment>
);

Fragments.propTypes = {
  message: PropTypes.string.isRequired,
};

// react/state-in-constructor
class Foo extends React.Component {
  state = { bar: 'Bar' };

  render() {
    return <div>Foo {this.state.bar}</div>;
  }
}

export { SpreadProps, MyComponent, Fragments, Foo };
