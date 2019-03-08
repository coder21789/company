import React, { Component } from 'react';
import { connect } from 'dva';

import titleBg from '../../svg/title-bg.svg';

import styles from './LeftTop.less';

const streetKnowArr = [
  {
    id: 601001,
    streetName: '临平街道',
    pinyinName: 'LinPing Street',
  },
  {
    id: 601002,
    streetName: '东湖街道',
    pinyinName: 'DongHu Street',
  },
  {
    id: 601003,
    streetName: '南苑街道',
    pinyinName: 'DongHu Street',
  },
  {
    id: 601004,
    streetName: '星桥街道',
    pinyinName: 'XingQiao Street',
  },
  {
    id: 601005,
    streetName: '五常街道',
    pinyinName: 'WuChang Street',
  },
  {
    id: 601006,
    streetName: '乔司街道',
    pinyinName: 'QiaoSi Street',
  },
  {
    id: 601007,
    streetName: '运河街道',
    pinyinName: 'YunHe Street',
  },
  {
    id: 601008,
    streetName: '崇贤街道',
    pinyinName: 'ChongXian Street',
  },
  {
    id: 601009,
    streetName: '仁和街道',
    pinyinName: 'RenHe Street',
  },
  {
    id: 601010,
    streetName: '良渚街道',
    pinyinName: 'LiangZhu Street',
  },
  {
    id: 601011,
    streetName: '闲林街道',
    pinyinName: 'XianLin Street',
  },
  {
    id: 601012,
    streetName: '余杭街道',
    pinyinName: 'YuHang Street',
  },
  {
    id: 601013,
    streetName: '仓前街道',
    pinyinName: 'CangQian Street',
  },
  {
    id: 601014,
    streetName: '中泰街道',
    pinyinName: 'ZhongTai Street',
  },
  {
    id: 601015,
    streetName: '瓶窑镇',
    pinyinName: 'PingYao Town',
  },
  {
    id: 601016,
    streetName: '塘栖镇',
    pinyinName: 'TangQi Town',
  },
  {
    id: 601017,
    streetName: '径山镇',
    pinyinName: 'JingShan Town',
  },
  {
    id: 601018,
    streetName: '黄湖镇',
    pinyinName: 'HuangHu Town',
  },
  {
    id: 601019,
    streetName: '百丈镇',
    pinyinName: 'BaiZhang Town',
  },
  {
    id: 601020,
    streetName: '鸬鸟镇',
    pinyinName: 'LuDiao Town',
  },
];

@connect(({ areascreen }) => ({
  areascreen,
}))
export default class LeftTopWrap extends Component {
  state = {
    currentStreet: {
      id: 601001,
      streetName: '临平街道',
      pinyinName: 'LinPing Street',
    },
  };

  componentDidMount() {
    const {
      areascreen: { requestParam },
    } = this.props;

    if (requestParam.areaId) {
      const currentStreet = streetKnowArr.filter(value => value.id === requestParam.areaId);
      this.setState({
        currentStreet: currentStreet[0],
      });
    }
  }

  render() {
    const { currentStreet } = this.state;
    return (
      <div className={styles.leftTopWrap}>
        <img className={styles.titleBg} src={titleBg} alt="" />
        <h1>{currentStreet && currentStreet.streetName}产业大脑</h1>
        <small>Industrial brain of {currentStreet && currentStreet.pinyinName}</small>
      </div>
    );
  }
}
