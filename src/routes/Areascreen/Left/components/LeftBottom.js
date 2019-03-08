import React, { Component } from 'react';
import { connect } from 'dva';
import numeral from 'numeral';
import _ from 'lodash';
import TweenOne from 'rc-tween-one';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';

import { getFormatMoney } from 'utils/utils';

import Neurons from '../../components/Neurons';

import treedetailBg from '../../svg/treedetail-bg.svg';

import styles from './LeftBottom.less';

TweenOne.plugins.push(PathPlugin);

const treePath = [
  `M1296,2051 C1296,1347.66667 1296,818 1296,462 C1296,454 1303.99838,439 1320,439 C1326.66667,439 1340.33333,439 1361,439`,
  `M1361.4311,2045.8036 L1361.4311,784.997904 C1361.4311,720.346344 1413.84155,667.9359 1478.4931,667.9359 L2154.83668,667.9359`,
  `M1361.4311,2070.67643 L1361.4311,1136.18391 C1361.4311,1071.53235 1413.84155,1019.12191 1478.4931,1019.12191 L1639.76387,1019.12191`,
  `M1361.4311,2047.6451 L1361.4311,1533.02411 C1361.4311,1468.37255 1413.84155,1415.9621 1478.4931,1415.9621 L2154.83668,1415.9621`,
  `M1143,2056 C1143,1869.8814 1143,1680.21473 1143,1487 C1143,1438 1117,1371.47854 1019,1371.47854 C891.666667,1371.47854 693.666667,1371.47854 425,1371.47854`,
  `M1203,2054 C1203,1649.33333 1203,1339.33333 1203,1124 C1203,1070 1203,1016 1091,1016 C1061.66667,1016 1033.33333,1016 1006,1016`,
  `M1204,2051 C1204,1536.33333 1204,1069 1204,649 C1204,632 1204,560 1110,542 C960.666667,542 815.666667,542 675,542`,
];

const pinyinArray = [
  {
    name: '生物健康',
    pinyinName: 'Biological Health',
  },
  {
    name: '高端制造',
    pinyinName: 'High-End Manufacturing',
  },
  {
    name: '时尚行业',
    pinyinName: 'Fashion Industry',
  },
  {
    name: '文化创意',
    pinyinName: 'Culture Creativity',
  },
  {
    name: '旅游休闲',
    pinyinName: 'Travel Leisure',
  },
  {
    name: '金融服务',
    pinyinName: 'Finance Service',
  },
  {
    name: '数字经济',
    pinyinName: 'Number Info',
  },
];

@connect(({ areascreen }) => ({
  areascreen,
}))
export default class LeftBottomWrap extends Component {
  state = {
    isShowTree: 1,
    curPath:
      'M1361.4311,2049.8036 L1361.4311,788.997904 C1361.4311,724.346344 1413.84155,671.9359 1478.4931,671.9359 L2154.83668,671.9359',
    randomPath: `M1203,2054 C1203,1649.33333 1203,1339.33333 1203,1124 C1203,1070 1203,1016 1091,1016 C1061.66667,1016 1033.33333,1016 1006,1016`,
  };

  async componentDidMount() {
    const {
      dispatch,
      areascreen: { requestParam },
    } = this.props;

    await dispatch({
      type: 'areascreen/fetchGetIndustryAnaData',
      payload: requestParam,
    });
    this.curPathIndex = 1;

    clearInterval(this.timeId);
    this.timeId = setInterval(() => {
      const {
        areascreen: { getIndustryAnaData },
      } = this.props;
      const cloneGetIndustryAnaData = _.cloneDeep(getIndustryAnaData);
      cloneGetIndustryAnaData.unshift(cloneGetIndustryAnaData.pop());

      dispatch({
        type: 'areascreen/updateGetIndustryAnaData',
        payload: cloneGetIndustryAnaData,
      });
    }, 4200);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
    clearInterval(this.timePathId);
  }

  toStart = () => {};

  toRepeat = () => {
    this.curPathIndex = this.curPathIndex + 1 === treePath.length ? 0 : this.curPathIndex + 1;
    this.setState({
      curPath: treePath[this.curPathIndex],
      isShowTree: 1,
    });
  };

  toUpdate = () => {};

  toComplete = () => {
    this.setState({
      isShowTree: 0,
    });
  };

  render() {
    const { curPath, randomPath, isShowTree } = this.state;
    const curAnimation = {
      path: curPath,
      repeat: -1,
      repeatDelay: 500,
      duration: 2000,
      delay: 2000,
      ease: 'linear',
      onStart: this.toStart,
      onUpdate: this.toUpdate,
      onRepeat: this.toRepeat,
      onComplete: this.toComplete,
    };

    const curAnimation2 = {
      path: randomPath,
      repeat: -1,
      repeatDelay: 500,
      duration: 2500,
      delay: 1000,
      ease: 'linear',
      onStart: this.toStart,
      onUpdate: this.toUpdate,
      onRepeat: this.toRepeat,
      onComplete: this.toComplete,
    };

    const {
      areascreen: { getIndustryAnaData },
    } = this.props;

    const showData = getIndustryAnaData[0];

    const formatData = {
      domainName: '-',
      pinyinName: '-',
      companyCnt: '-',
      revenue: '-',
      revenueIncrease: '-',
      revenueProp: '-',
      tax: '-',
      taxIncrease: '-',
      taxProp: '-',
    };

    if (showData) {
      formatData.domainName = showData.domainName;
      formatData.pinyinName =
        pinyinArray.find(value => value.name === showData.domainName) &&
        pinyinArray.find(value => value.name === showData.domainName).pinyinName;

      formatData.companyCnt = numeral(showData.companyCnt).format('0, 0');

      formatData.revenue = showData.revenue ? `${getFormatMoney(showData.revenue).value}` : '-';
      formatData.revenueUnit = showData.revenue ? `${getFormatMoney(showData.revenue).unit}` : '元';
      formatData.revenueIncrease = showData.revenueIncrease
        ? `${(showData.revenueIncrease * 100).toFixed(2)}%`
        : '-';
      formatData.revenueProp = showData.revenueProp
        ? `${(showData.revenueProp * 100).toFixed(2)}%`
        : '-';

      formatData.tax = showData.tax ? `${getFormatMoney(showData.tax).value}` : '-';
      formatData.taxUnit = showData.tax ? `${getFormatMoney(showData.tax).unit}` : '元';
      formatData.taxIncrease = showData.taxIncrease
        ? `${(showData.taxIncrease * 100).toFixed(2)}%`
        : '-';
      formatData.taxProp = showData.taxProp ? `${(showData.taxProp * 100).toFixed(2)}%` : '-';
    }

    const svgData = [];

    getIndustryAnaData.map((item, index) => {
      let value = [];
      if (index === 1 || index === 3 || index === 5) {
        value =
          item && item.domainName
            ? [item.domainName.substr(0, 2), item.domainName.substr(2, 4)]
            : [item.domainName];
      } else {
        value = item && [item.domainName];
      }
      svgData.push({
        value,
      });

      return value;
    });

    return (
      <div className={styles.leftBottomWrap}>
        <section
          className={styles.pinWrap}
          style={{
            width: '2064px',
            height: '1513px',
            left: '151px',
            bottom: '355px',
            marginLeft: '-104px',
          }}
        >
          <img className={styles.pinBg} src={treedetailBg} alt="" />
          <div className={styles.pinContent}>
            <div className={styles.pinContentTop}>
              <Texty leave={{ display: 'none' }} component="h4" type="scale" mode="random">
                {formatData.domainName}
              </Texty>
              <Texty leave={{ display: 'none' }} component="small" type="bottom" mode="sync">
                {formatData.pinyinName}
              </Texty>
            </div>
            <div className={styles.pinContentMiddle}>
              <TweenOne
                component="p"
                animation={{
                  Children: {
                    value: formatData.companyCnt || 0,
                    floatLength: 0,
                    formatMoney: true,
                  },
                  duration: 1000,
                }}
              />
              <strong>企业数</strong>
            </div>
            <div className={styles.pinContentBottom}>
              <dl>
                <dt>年累计收益</dt>
                <dd>
                  金额：
                  <span>
                    {formatData.revenue !== '-' ? (
                      <TweenOne
                        component="em"
                        animation={{
                          Children: {
                            value: formatData.revenue || 0,
                            floatLength: 0,
                            formatMoney: true,
                          },
                          duration: 1000,
                        }}
                      />
                    ) : (
                      '-'
                    )}
                    <i>{formatData.revenueUnit}</i>
                  </span>
                </dd>
                <dd>
                  同比增幅：<span>{formatData.revenueIncrease}</span>
                </dd>
                <dd>
                  占比：<span>{formatData.revenueProp}</span>
                </dd>
              </dl>
              <dl
                style={{
                  paddingLeft: '95px',
                }}
              >
                <dt>年累计税收</dt>
                <dd>
                  金额：
                  <span>
                    {formatData.tax !== '-' ? (
                      <TweenOne
                        component="em"
                        animation={{
                          Children: {
                            value: formatData.tax || 0,
                            floatLength: 2,
                            formatMoney: true,
                          },
                          duration: 500,
                        }}
                      />
                    ) : (
                      '-'
                    )}
                    <i>{formatData.taxUnit}</i>
                  </span>
                </dd>
                <dd>
                  同比增幅：<span>{formatData.taxIncrease}</span>
                </dd>
                <dd>
                  占比：<span>{formatData.taxProp}</span>
                </dd>
              </dl>
            </div>
          </div>
        </section>
        <div
          className={styles.treeWrap}
          style={{
            right: '151px',
          }}
        >
          <Neurons fillOpacity={isShowTree} className={styles.treeBg} data={svgData} />
          {/* <img className={styles.treeBg} src={treeBg} alt="" /> */}
          <TweenOne type="to" animation={curAnimation} className={styles.lightPoint} />
          <TweenOne type="to" animation={curAnimation2} className={styles.lightPoint} />
        </div>
      </div>
    );
  }
}
