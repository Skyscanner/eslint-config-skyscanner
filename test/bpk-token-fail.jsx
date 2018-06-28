import React from 'react';
import PropTypes from 'prop-types';

const Banner = props => (
  <div role="banner" style={{ color: '#cbeef5' }}>
    {props.children}
  </div>
);

Banner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Banner;
