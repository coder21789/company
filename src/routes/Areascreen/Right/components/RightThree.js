import React, { Component } from 'react';

import { connect } from 'dva';
import Pyramid from '../../components/Pyramid/index.js';
import Title from '../../components/title/index.js';
import styles from './RightThree.less';

@connect(({ areascreen }) => ({
  areascreen,
}))
export default class RightThreeWrap extends Component {
  state = {};

  componentDidMount() {
    const {
      dispatch,
      areascreen: { requestParam },
    } = this.props;
    dispatch({
      type: 'areascreen/fetchGetListPropertyAna',
      payload: requestParam,
    });
  }

  render() {
    const {
      areascreen: { getListPropertyAnaData },
    } = this.props;
    // const data = getListPropertyAnaData.sort((a, b) => a.propertyCnt < b.propertyCnt);

    const max = getListPropertyAnaData.reduce((a, b) => {
      return a > b.propertyCnt ? a : b.propertyCnt;
    }, 0);
    let y1 = [];
    if (max > 0) {
      y1 = [];
      for (let i = 0; i < 5; i += 1) {
        y1.push(i > 0 ? Math.round(max ** (i * 0.25)) : 0);
      }
    } else {
      y1 = [];
    }
    const yData = y1.reverse();

    const colors = [
      {
        x1: '#D9F2FF',
        y1: '#6BCCFF',
        x2: '#89D0F4',
        y2: 'rgba(29,167,238,0.8)',
        circle: '#E6FBFF',
        shade1: '#E6FBFF',
        shade2: '#33BBFF',
      },
      {
        x1: '#EBFFB4',
        y1: '#86CF18',
        x2: '#86CF18',
        y2: '#598D0A',
        circle: '#FCFFF5',
        shade1: '#D9FF70',
        shade2: '#C9FF33',
      },
      {
        x1: '#FFD9D9',
        y1: '#FF6B6B',
        x2: '#F48989',
        y2: 'rgba(238,29,29,0.8)',
        circle: '#FFF5F5',
        shade1: '#FF7070',
        shade2: '#FF3333',
      },
      {
        x1: '#FEFFD9',
        y1: '#FFE66B',
        x2: '#F5E389',
        y2: 'rgba(237,202,28,0.8)',
        circle: '#FFFDF5',
        shade1: '#FFE770',
        shade2: '#FFDD33',
      },
      {
        x1: '#FFECD9',
        y1: '#FFB56B',
        x2: '#F5BF89',
        y2: '#ED851C',
        circle: '#FFF2E6',
        shade1: '#FFB870',
        shade2: '#FF9933',
      },
      {
        x1: '#FFD9D9',
        y1: '#FF6B6B',
        x2: '#F48989',
        y2: 'rgba(238,29,29,0.8)',
        circle: '#FFF5F5',
        shade1: '#FF7070',
        shade2: '#FF3333',
      },
    ];
    return (
      <div className={styles.rightThreeWrap}>
        <div className={styles.wrap}>
          <Title titleName="知识产权分析" description="INTELLECTUAL PROPERTY ANALYSIS" />
          <div className={styles.cnt}>
            <ul className={styles.bg}>
              {yData.map(v => (
                <li key={v}>
                  <div className={styles.left}>{v}</div>
                  <div className={styles.right} />
                </li>
              ))}
            </ul>
            <div className={styles.graph}>
              {getListPropertyAnaData.map((v, i) => (
                <div key={v.propertyName} className={styles.graphItem}>
                  <div className={styles.itemNub}>
                    {v.propertyCnt}
                    <img src="../../img/itemNum.svg" alt="" width="180px" />
                  </div>
                  <div className={styles.itemBar}>
                    <Pyramid
                      rate={v.propertyCnt === 0 ? 0 : Math.log(v.propertyCnt) / Math.log(max)}
                      id={i}
                      colors={colors[i]}
                    />
                  </div>
                  <div className={styles.itemText}>{v.propertyName}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
