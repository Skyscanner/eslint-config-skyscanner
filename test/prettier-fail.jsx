import PropTypes from 'prop-types';

const Banner = ({ children }) => { return (<div role="banner">{children}</div>) };

Banner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Banner;
