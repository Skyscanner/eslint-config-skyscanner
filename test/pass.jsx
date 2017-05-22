import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Banner extends Component {
    /**
   * Represents a book.
   * @constructor
   * @param {string} title - The title of the book.
   * @param {string} author - The author of the book.
   */
  constructor() {
    super();

    this.state = {
      key: 'value',
    };
  }

  render() {
    return (
      <div role="banner">
        { this.props.children }
      </div>
    );
  }
}

Banner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Banner;
