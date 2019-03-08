import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NoData extends Component {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    padding: PropTypes.string,
  };

  static defaultProps = {
    width: '100%',
    height: '100%',
    padding: '0',
  };

  render() {
    const { width, height, padding } = this.props;
    const nodataStyle = {
      width,
      height,
      padding,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
    return (
      <div style={nodataStyle}>
        <img src="../../../../src/assets/nodata.png" alt="" width="200px" />
      </div>
    );
  }
}
