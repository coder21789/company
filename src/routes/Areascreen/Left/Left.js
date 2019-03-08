import React, { Component } from 'react';
import LeftTop from './components/LeftTop';
import LeftMiddle from './components/LeftMiddle';
import LeftBottom from './components/LeftBottom';

import styles from './Left.less';

export default class LeftWrap extends Component {
  state = {};

  render() {
    return (
      <div className={styles.leftWrap}>
        <LeftTop />
        <LeftMiddle />
        <LeftBottom />
      </div>
    );
  }
}
