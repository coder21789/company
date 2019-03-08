import React, { Component } from 'react';
import { connect } from 'dva';
import { initScreen } from '../../utils/screen';

import LeftWrap from './Left/Left';
import RightWrap from './Right/Right';

import screenBg from './svg/bg.jpg';
import styles from './Areascreen.less';

@connect(({ areascreen }) => ({
  areascreen,
}))
export default class Areascreen extends Component {
  state = {
    screenWrapStyle: {},
  };

  componentDidMount() {
    this.setState({
      screenWrapStyle: initScreen(),
    });
    // const { dispatch } = this.props;
    // const areaId = location.hash.substr(1).match(new RegExp('areascreen/([0-9]{1,20})', 'i'))[1];
    // dispatch({
    //   type: 'areascreen/updateRequestParam',
    //   payload: { areaId },
    // });
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
          <RightWrap />
        </div>
      </div>
    );
  }
}
