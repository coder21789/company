import React, { Component } from 'react';

import LeftOne from './components/LeftOne';
import LeftTwo from './components/LeftTwo';
import LeftThree from './components/LeftThree';

import RightOne from './components/RightOne';
import RightTwo from './components/RightTwo';
import RightThree from './components/RightThree';

import styles from './Right.less';

export default class RightWrap extends Component {
  state = {};

  render() {
    return (
      <div className={styles.rightWrap}>
        <LeftOne />
        <LeftTwo />
        <LeftThree />
        <RightOne />
        <RightTwo />
        <RightThree />
      </div>
    );
  }
}
