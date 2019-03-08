import React, { Component } from 'react';
import styles from './Right.less';
// import brBg from '../svg/brBg.svg'

export default class BottomR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finDom: [],
    };
  }
  shouldComponentUpdate(props, nextState) {
    if (this.props === props) {
      return false;
    } else {
      return true;
    }
  }
  static getDerivedStateFromProps(props, nextState) {
    let arr = [
      { name: '视觉设计', left: 854, top: 327 },
      { name: '视觉设计', left: 360, top: 199 },
      { name: '视觉设计', left: 1515, top: 375 },
      { name: '视觉设计', left: 570, top: 370 },
      { name: '视觉设计', left: 1620, top: 125 },
      { name: '视觉设计', left: 1380, top: 166 },
      { name: '视觉设计', left: 1124, top: 490 },
      { name: '视觉设计', left: 1810, top: 525 },
      { name: '视觉设计', left: 230, top: 415 },
      { name: '视觉设计', left: 745, top: 567 },
      { name: '视觉设计', left: 1275, top: 355 },
      { name: '视觉设计', left: 1098, top: 255 },
      { name: '视觉设计', left: 80, top: 130 },
      { name: '视觉设计', left: 345, top: 550 },
      { name: '视觉设计', left: 641, top: 180 },
      { name: '视觉设计', left: 1014, top: 134 },
      { name: '视觉设计', left: 1336, top: 580 },
      { name: '视觉设计', left: 1850, top: 243 },
      { name: '视觉设计', left: 1198, top: 111 },
      { name: '视觉设计', left: 105, top: 560 },
    ];
    if (props.propsData && props.propsData.length !== 0) {
      let axiosArr = props.propsData[props.propsTitle.enName];
      arr.forEach((item, index) => {
        if (axiosArr && axiosArr.length !== 0 && axiosArr[index]) {
          item.name = axiosArr[index].post;
        }
      });
    }
    let finDom = arr.map((item, index) => {
      if (item.name.length <= 2) {
        return (
          <div
            key={index + 'a'}
            className={styles.text}
            style={{ left: item.left - 50, top: item.top + 30 - index, fontSize: 40 - index }}
          >
            <p>{item.name.substr(0, 2)}</p>
          </div>
        );
      } else {
        return (
          <div
            key={index + 'a'}
            className={styles.text}
            style={{ left: item.left - 50, top: item.top, fontSize: 40 - index }}
          >
            <p>{item.name.substr(0, 2)}</p>
            <p>{item.name.substr(2, 2)}</p>
          </div>
        );
      }
    });
    return { finDom: finDom };
  }
  render() {
    return (
      <div className={styles.br}>
        {/*<img src={brBg} className={styles.bg} alt=""/>*/}
        {this.state.finDom}
      </div>
    );
  }
}
