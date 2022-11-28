import PropTypes from 'prop-types';

const Banner = ({ children }) => (
  <div role="banner" style={{ color: '#cbeef5' }}>
    {children}
  </div>
);

Banner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Banner;
