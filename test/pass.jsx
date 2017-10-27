import React from 'react';
import PropTypes from 'prop-types';

const Banner = props => (
  <div role="banner">
    { props.children }
  </div>
);

Banner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Banner;
