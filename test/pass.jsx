/* eslint-disable no-unused-vars,import/no-unresolved,import/extensions */
// import/order
import fs from 'fs';

import PropTypes from 'prop-types';
import React from 'react';
import ReactDom from 'react-dom';

import ExternalLibrary from 'external-library';

import { fontSizeSm } from '@skyscanner/bpk-foundations-web/tokens/base.es6';
import BpkButton from 'bpk-component-button';
import ArrowUpIcon from 'bpk-component-icon/sm/long-arrow-up';

import SomeCommonFunctionality from 'common/some-functionality';

import Component2 from '../../Component2';
import Component1 from '../Component1';
import SubComponent from '../Component1/SubComponent';
import OtherComponent from '../OtherComponent';

import SiblingComponent from './SiblingComponent';

import STYLES2 from './styles.css';
import STYLES from './styles.scss';
/* eslint-enable no-unused-vars,import/no-unresolved,import/extensions */

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

// sort-destructure-keys
const SortDestructureKeys = ({ anotherProp, oneProp }) => (
  <React.Fragment>
    <div>{oneProp}</div>
    <div>{anotherProp}</div>
  </React.Fragment>
);

SortDestructureKeys.propTypes = {
  oneProp: PropTypes.string.isRequired,
  anotherProp: PropTypes.string.isRequired,
};

export { SpreadProps, MyComponent, Fragments, Foo, SortDestructureKeys };
