import React, { Component } from 'react';
import { connect } from 'dva';
import numeral from 'numeral';
import TweenOne from 'rc-tween-one';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';

import { getFormatMoney } from 'utils/utils';

import qieyeshuBg from '../../svg/qiyeshu-bg.svg';
import ytotalreveneBg from '../../svg/ytotalrevene-bg.svg';
import ytotaltaxBg from '../../svg/ytotaltax-bg.svg';
import employnumBg from '../../svg/employnum-bg.svg';
import intellectualBg from '../../svg/intellectual-bg.svg';

import styles from './LeftMiddle.less';

TweenOne.plugins.push(Children);

const changeNum = (value, isMoney = false) => {
  if (typeof value !== 'number') {
    return { value };
  }

  let isNegative = false;
  isNegative = value < 0;

  const absValue = Math.abs(value);

  if (absValue < 10000) {
    const realValue = isNegative ? absValue * -1 : absValue;
    return {
      value2: realValue,
      value: isMoney ? numeral(realValue).format('0, 0.0') : numeral(realValue).format('0, 0'),
      unit: '',
    };
  } else if (absValue < 10000000) {
    const realValue = isNegative ? absValue * -1 : absValue;
    return {
      value2: realValue / 10000,
      value: isMoney
        ? numeral(realValue / 10000).format('0, 0.0')
        : numeral(realValue / 10000).format('0, 0'),
      unit: '万',
    };
  } else {
    const realValue = isNegative ? absValue * -1 : absValue;
    return {
      value2: realValue / 100000000,
      value: isMoney
        ? numeral(realValue / 100000000).format('0, 0.0')
        : numeral(realValue / 100000000).format('0, 0'),
      unit: '亿',
    };
  }
};

@connect(({ areascreen }) => ({
  areascreen,
}))
export default class LeftMiddleWrap extends Component {
  state = {};

  componentDidMount() {
    const {
      dispatch,
      areascreen: { requestParam },
    } = this.props;

    dispatch({
      type: 'areascreen/fetchGetCoreIndicatorsData',
      payload: requestParam,
    });
  }

  render() {
    const {
      areascreen: { getCoreIndicatorsData },
    } = this.props;

    return (
      <div className={styles.leftMiddleWrap}>
        <span className={styles.tip}>数据范围：截止至各数据源最新的更新月份</span>

        {/* 企业数 */}
        <div
          className={styles.cardWrap}
          style={{
            width: '664px',
            height: '641px',
            left: '151px',
          }}
        >
          <img className={styles.cardBg} src={qieyeshuBg} alt="" />
          <div className={styles.cardContent}>
            <h6>企业数</h6>
            <div className={styles.cardInfo}>
              {/* <span>
                {getCoreIndicatorsData.companyCnt
                  ? changeNum(getCoreIndicatorsData.companyCnt).value
                  : '-'}
              </span> */}
              <TweenOne
                component="span"
                animation={{
                  Children: {
                    value: changeNum(getCoreIndicatorsData.companyCnt).value2 || 0,
                    floatLength: 0,
                    formatMoney: true,
                  },
                  duration: 1000,
                }}
              >
                0
              </TweenOne>
              <i>{changeNum(getCoreIndicatorsData.companyCnt).unit}家</i>
            </div>

            <div
              className={styles.rankTagWrap}
              style={{
                background:
                  getCoreIndicatorsData.companyCntRank && getCoreIndicatorsData.companyCntRank === 1
                    ? 'linear-gradient(-140.3deg, rgba(238, 60, 126, 1), rgba(250, 170, 150, 1))'
                    : 'linear-gradient(-135deg,rgba(0,151,255,1),rgba(0,255,255,1))',
              }}
            >
              {getCoreIndicatorsData.companyCntRank
                ? `第${getCoreIndicatorsData.companyCntRank}名`
                : '---'}
            </div>
          </div>
        </div>

        {/* 年累计营收金额 */}
        <div
          className={styles.cardWrap}
          style={{
            width: '664px',
            height: '641px',
            left: '880px',
          }}
        >
          <img className={styles.cardBg} src={ytotalreveneBg} alt="" />
          <div className={styles.cardContent}>
            <h6>年累计营收金额</h6>
            <div className={styles.cardInfo}>
              {/* <span>
                {getCoreIndicatorsData.revenue || getCoreIndicatorsData.revenue === 0
                  ? getFormatMoney(getCoreIndicatorsData.revenue).value
                  : '-'}
              </span> */}
              <TweenOne
                component="span"
                animation={{
                  Children: {
                    value: changeNum(getCoreIndicatorsData.revenue).value2 || 0,
                    floatLength: 2,
                    formatMoney: true,
                  },
                  duration: 1500,
                }}
              >
                0
              </TweenOne>
              <i>
                {getCoreIndicatorsData.revenue
                  ? `${getFormatMoney(getCoreIndicatorsData.revenue).unit}`
                  : '元'}
              </i>
            </div>

            <div
              className={styles.rankTagWrap}
              style={{
                background:
                  getCoreIndicatorsData.revenueRank && getCoreIndicatorsData.revenueRank === 1
                    ? 'linear-gradient(-140.3deg, rgba(238, 60, 126, 1), rgba(250, 170, 150, 1))'
                    : 'linear-gradient(-135deg,rgba(0,151,255,1),rgba(0,255,255,1))',
              }}
            >
              {getCoreIndicatorsData.revenueRank
                ? `第${getCoreIndicatorsData.revenueRank}名`
                : '---'}
            </div>
          </div>
        </div>

        {/* 年累计税收金额 */}
        <div
          className={styles.cardWrap}
          style={{
            width: '664px',
            height: '641px',
            left: '1614px',
          }}
        >
          <img className={styles.cardBg} src={ytotaltaxBg} alt="" />
          <div className={styles.cardContent}>
            <h6>年累计税收金额</h6>
            <div className={styles.cardInfo}>
              {/* <span>
                {getCoreIndicatorsData.tax || getCoreIndicatorsData.tax === 0
                  ? getFormatMoney(getCoreIndicatorsData.tax).value
                  : '-'}
              </span> */}
              <TweenOne
                component="span"
                animation={{
                  Children: {
                    value: changeNum(getCoreIndicatorsData.tax).value2 || 0,
                    floatLength: 2,
                    formatMoney: true,
                  },
                  duration: 2000,
                }}
              >
                0
              </TweenOne>
              <i>
                {getCoreIndicatorsData.tax
                  ? `${getFormatMoney(getCoreIndicatorsData.tax, true).unit}`
                  : '元'}
              </i>
            </div>

            <div
              className={styles.rankTagWrap}
              style={{
                background:
                  getCoreIndicatorsData.taxRank && getCoreIndicatorsData.taxRank === 1
                    ? 'linear-gradient(-140.3deg, rgba(238, 60, 126, 1), rgba(250, 170, 150, 1))'
                    : 'linear-gradient(-135deg,rgba(0,151,255,1),rgba(0,255,255,1))',
              }}
            >
              {getCoreIndicatorsData.taxRank ? `第${getCoreIndicatorsData.taxRank}名` : '---'}
            </div>
          </div>
        </div>

        {/* 就业人数 */}
        <div
          className={styles.cardWrap}
          style={{
            width: '844px',
            height: '641px',
            left: '2343px',
          }}
        >
          <img className={styles.cardBg} src={employnumBg} alt="" />
          <div className={styles.cardContent}>
            <h6>就业人数</h6>
            <div className={styles.cardInfo}>
              {/* <span>
                {getCoreIndicatorsData.talentCnt
                  ? changeNum(getCoreIndicatorsData.talentCnt).value
                  : '-'}
              </span> */}
              <TweenOne
                component="span"
                animation={{
                  Children: {
                    value: changeNum(getCoreIndicatorsData.talentCnt).value2 || 0,
                    floatLength: 0,
                    formatMoney: true,
                  },
                  duration: 2500,
                }}
              >
                0
              </TweenOne>
              <i>{changeNum(getCoreIndicatorsData.talentCnt).unit}</i>
            </div>

            <div
              className={styles.rankTagWrap}
              style={{
                background:
                  getCoreIndicatorsData.talentCntRank && getCoreIndicatorsData.talentCntRank === 1
                    ? 'linear-gradient(-140.3deg, rgba(238, 60, 126, 1), rgba(250, 170, 150, 1))'
                    : 'linear-gradient(-135deg,rgba(0,151,255,1),rgba(0,255,255,1))',
              }}
            >
              {getCoreIndicatorsData.talentCntRank
                ? `第${getCoreIndicatorsData.talentCntRank}名`
                : '---'}
            </div>
          </div>
        </div>

        {/* 知识产权数 */}
        <div
          className={styles.cardWrap}
          style={{
            width: '894px',
            height: '641px',
            left: '3252px',
          }}
        >
          <img className={styles.cardBg} src={intellectualBg} alt="" />
          <div className={styles.cardContent}>
            <h6>知识产权数</h6>
            <div className={styles.cardInfo}>
              {/* <span>
                {getCoreIndicatorsData.property
                  ? changeNum(getCoreIndicatorsData.property).value
                  : '-'}
              </span> */}
              <TweenOne
                component="span"
                animation={{
                  Children: {
                    value: changeNum(getCoreIndicatorsData.property).value2 || 0,
                    floatLength: 0,
                    formatMoney: true,
                  },
                  duration: 4300,
                }}
              >
                0
              </TweenOne>
              <i>{changeNum(getCoreIndicatorsData.property).unit}个</i>
            </div>

            <div
              className={styles.rankTagWrap}
              style={{
                background:
                  getCoreIndicatorsData.propertyRank && getCoreIndicatorsData.propertyRank === 1
                    ? 'linear-gradient(-140.3deg, rgba(238, 60, 126, 1), rgba(250, 170, 150, 1))'
                    : 'linear-gradient(-135deg,rgba(0,151,255,1),rgba(0,255,255,1))',
              }}
            >
              {getCoreIndicatorsData.propertyRank
                ? `第${getCoreIndicatorsData.propertyRank}名`
                : '---'}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
