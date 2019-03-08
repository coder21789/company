import React, { Component } from 'react';
import styles from './Right.less';
import lCir from '../svg/lcir.svg';
import lWrap from '../svg/tl-left-wrap.svg';
import rBg from '../svg/tl-right-bg.svg';
import rCirl from '../svg/tl-right-cirle.svg';
import rEdg from '../svg/tl-r-edg.svg';

export default class TopR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rightDom: null,
      leftDom: null,
      trTimer: false,
      activeIndex: 0,
    };
  }
  initRight(props) {
    if (props && props.length !== 0) {
      let valueArr = [];
      props.forEach(item => {
        valueArr.push(item.patentCnt);
      });
      let maxValue = valueArr.sort((a, b) => {
        return b - a;
      })[0];
      let rightDom = props.map(item => {
        if (item.patentCnt !== 0) {
          return (
            <li key={item.domainId}>
              <span className={styles.title}>{item.domainName}</span>
              <span className={styles.item}>
                <span
                  className={styles.itemInner}
                  style={{ width: Math.floor((item.patentCnt / maxValue) * 100) + '%' }}
                />
                <img src={rEdg} className={styles.rEdg} alt="" />
                <img src={rCirl} className={styles.rCirl} alt="" />
              </span>
              <span className={styles.value}>{item.patentCnt}</span>
            </li>
          );
        } else {
          return (
            <li key={item.domainId}>
              <span className={styles.title}>{item.domainName}</span>
              <span className={styles.item}>
                <span className={styles.itemInner} style={{ width: 0 }} />
                <img src={rEdg} className={styles.rEdg} alt="" />
                <img src={rCirl} className={styles.rCirl} alt="" />
              </span>
              <span className={styles.value}>{item.patentCnt}</span>
            </li>
          );
        }
      });
      this.setState({ rightDom: rightDom });
    }
  }
  initLeft(props) {
    // console.log(props, 'porpsList')
    if (props.propsData && props.propsData.length !== 0) {
      const titleArr = [
        { name: '网站信息', l: 136, b: 107, value: '--', patentId: 8 },
        { name: '商标', l: 77, b: 316, value: '--', patentId: 6 },
        { name: '证书', l: 122, b: 495, value: '--', patentId: 7 },
        { name: '专利', l: 256, b: 637, value: '--', patentId: 1 },
        { name: '实用新型', l: 510, b: 633, value: '--', patentId: 2 },
        { name: '外观专利', l: 674, b: 495, value: '--', patentId: 3 },
        { name: '著作权', l: 712, b: 311, value: '--', patentId: 4 },
        { name: '软件著作权', l: 599, b: 107, value: '--', patentId: 5 },
      ];
      let propList = props.propsData;
      propList.forEach((item, index) => {
        titleArr.forEach((subitem, i) => {
          subitem.d = i * 39;
          if (item.patentId === subitem.patentId) {
            subitem.value = item.patentSum;
            subitem.sevenPatentRes = item.sevenPatentRes;
          }
        });
      });
      let finDom = titleArr.map((item, index) => {
        return (
          <div
            className={styles.lTitle}
            key={index + 'trl'}
            style={{ left: item.l - 60, bottom: item.b }}
          >
            {item.name}
          </div>
        );
      });
      if (this.state.activeIndex < titleArr.length - 1) {
        this.setState({ activeIndex: this.state.activeIndex + 1 });
      } else {
        this.setState({ activeIndex: 0 });
      }
      this.setState({ activeItem: titleArr[this.state.activeIndex], leftDom: finDom });
      this.initRight(titleArr[this.state.activeIndex].sevenPatentRes);
    }
  }
  shouldComponentUpdate(props, nextState) {
    if (this.props === props) {
      return false;
    }
    return true;
  }
  componentWillReceiveProps(props) {
    if (props.propsData.length !== 0) {
      this.initLeft(props);
    }
  }
  render() {
    const { activeItem } = this.state;
    return (
      <div className={styles.tr}>
        <div className={styles.lValue}>{activeItem && activeItem.value}</div>
        {this.state.leftDom}
        <img
          src={lCir}
          style={{ transform: `rotate(${activeItem && activeItem.d}deg)` }}
          className={styles.lCir}
          alt=""
        />
        <img src={lWrap} className={styles.lWrap} alt="" />
        <img src={rBg} className={styles.rBg} alt="" />
        <ul className={styles.bar}>{this.state.rightDom}</ul>
      </div>
    );
  }
}
