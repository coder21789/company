import React, { Component } from 'react';
import { initScreen } from '../../utils/companyScreen';

import LeftWrap from './Left/Left';
import MiddleWrap from './Middle/index';

import screenBg from './svg/bg.jpg';
import styles from './Overscreen.less';

export default class Overscreen extends Component {
  state = {
    screenWrapStyle: {},
  };

  componentDidMount() {
    this.setState({
      screenWrapStyle: initScreen(),
    });
  }

  render() {
    const { screenWrapStyle } = this.state;
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#000',
        }}
      >
        <div className={styles.screenWrap} style={screenWrapStyle}>
          <img className={styles.screenWrapBg} src={screenBg} alt="" />
          <LeftWrap />
          <MiddleWrap />
        </div>
      </div>
    );
  }
}
