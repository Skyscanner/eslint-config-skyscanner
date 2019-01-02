import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ children }) => (
  <div role="banner">
    {children}
  </div>
);

Banner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Banner;

const DestructuringComponent = props => (
  <div role="banner">
    {props.message}
  </div>
);

DestructuringComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
