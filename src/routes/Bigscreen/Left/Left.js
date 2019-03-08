import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Carousel } from 'antd';

import Number from './Number';
import Number1 from './Number1';
import styles from './Left.less';
import leftBgSvg from '../svg/leftBg.svg';
import leftCard1 from '../svg/leftCard1.svg';
import leftCard2 from '../svg/leftCard2.svg';
import build from '../svg/build.svg';
import person from '../svg/person.svg';
import province from '../svg/province.svg';
import { chNum2 } from '../../../utils/utils';

export default class Left extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finDom: null,
      testNum: 1,
    };
  }
  componentDidMount() {
    clearInterval(this.numTimer);
    this.numTimer = setInterval(() => {
      this.setState({ testNum: this.state.testNum + 1 });
    }, 50);
  }
  shouldComponentUpdate(props, nextState) {
    if (this.props === props) {
      return false;
    }
    let finDom = null;
    if (props.timer) {
      finDom = (
        <div className={styles.spItem}>
          <div className={styles.card} style={{ marginTop: 120 }}>
            <img src={leftCard1} className={styles.cardBg} />
            <div className={styles.title}>
              <span />
              <span>当前有效企业({chNum2(props.leftData.companyCnt).unit}家)</span>
            </div>
            <Number type="num" value={chNum2(props.leftData.companyCnt).val} />
            <div className={styles.lastY}>
              <div className={styles.lastYTitle}>同比去年</div>
              <div className={styles.lastYValue}>
                {(props.leftData.companyCntYny * 100).toFixed(2) + '%'}
              </div>
              <div
                className={
                  props.leftData.companyCntYny > 0 ? styles.lastYIconUp : styles.lastYIconUp
                }
              />
            </div>
          </div>
          <div className={styles.card}>
            <img src={leftCard1} className={styles.cardBg} />
            <div className={styles.title}>
              <span />
              <span>当年累计营收({chNum2(props.leftData.ytRevenue).unit}元)</span>
            </div>
            <Number value={chNum2(props.leftData.ytRevenue).val} />
            <div className={styles.lastY}>
              <div className={styles.lastYTitle}>同比去年</div>
              <div className={styles.lastYValue}>
                {(props.leftData.ytRevenueYny * 100).toFixed(2) + '%'}
              </div>
              <div
                className={
                  props.leftData.ytRevenueYny > 0 ? styles.lastYIconUp : styles.lastYIconUp
                }
              />
            </div>
          </div>
          <div className={styles.card}>
            <img src={leftCard1} className={styles.cardBg} />
            <div className={styles.title}>
              <span />
              <span>当年累计税收({chNum2(props.leftData.ytTax).unit}元)</span>
            </div>
            <Number value={chNum2(props.leftData.ytTax).val} />
            <div className={styles.lastY}>
              <div className={styles.lastYTitle}>同比去年</div>
              <div className={styles.lastYValue}>
                {(props.leftData.ytTaxYny * 100).toFixed(2) + '%'}
              </div>
              <div className={props.leftData.ytTax > 0 ? styles.lastYIconUp : styles.lastYIconUp} />
            </div>
          </div>
          <div className={styles.cardBig}>
            <img src={leftCard2} className={styles.cardBg} />
            <div className={styles.title}>
              <span />
              <span>当前企业就业人数({chNum2(props.leftData.employeeCnt).unit})</span>
            </div>
            <Number value={chNum2(props.leftData.employeeCnt).val} />
            <div className={styles.lastY}>
              <div className={styles.lastYTitle}>同比去年</div>
              <div className={styles.lastYValue}>
                {(props.leftData.employeeCntYny * 100).toFixed(2) + '%'}
              </div>
              <div className={props.leftData.ytTax > 0 ? styles.lastYIconUp : styles.lastYIconUp} />
            </div>
          </div>
        </div>
      );
    } else {
      finDom = (
        <div>
          <div className={styles.card} style={{ marginTop: 120 }}>
            <img src={leftCard1} className={styles.cardBg} />
            <div className={styles.title}>
              <span />
              <span>当前有效企业数</span>
            </div>
            <div className={styles.bulid}>
              <img src={build} className={styles.item} />
            </div>
            <p className={styles.bulidTitle}>
              占杭州市企业<span className={styles.bulidValue}>
                {(props.leftData.compareCompNum * 100).toFixed(2) + '%'}
              </span>
            </p>
          </div>
          <div className={styles.card}>
            <img src={leftCard1} className={styles.cardBg} />
            <div className={styles.title}>
              <span />
              <span>当前累计营收</span>
            </div>
            <div className={styles.bulid}>
              <img src={build} className={styles.item} />
            </div>
            <p className={styles.bulidTitle}>
              相当于<span className={styles.bulidValue}>{props.leftData.compareRevenueNum}</span>个{
                props.leftData.compareCompany
              }
            </p>
          </div>
          <div className={styles.card}>
            <img src={leftCard1} className={styles.cardBg} />
            <div className={styles.title}>
              <span />
              <span>当前累计税收</span>
            </div>
            <img style={{ marginLeft: 80 }} src={province} className={styles.province} />
            <p style={{ marginTop: 70, clear: 'both' }} className={styles.bulidTitle}>
              相当于 <span className={styles.bulidValue}>{props.leftData.compareTaxNum}</span>个{
                props.leftData.compareRegion
              }
            </p>
          </div>
          <div className={styles.cardBig}>
            <img src={leftCard2} className={styles.cardBg} />
            <div className={styles.title}>
              <span />
              <span>企业员工平均人效({chNum2(props.leftData.companyAvgEffect).unit}元)</span>
            </div>
            <Number value={chNum2(props.leftData.companyAvgEffect).val} />
            <p style={{ marginTop: 70 }} className={styles.bulidTitle}>
              高薪企业人效为其他的
              <span className={styles.bulidValue}>
                {Math.ceil(props.leftData.highEffectNum).toFixed(0)}
              </span>倍
            </p>
            <div className={styles.person}>
              <img src={person} className={styles.item} />
            </div>
          </div>
        </div>
      );
    }
    this.setState({ finDom: finDom });
    return true;
  }

  render() {
    return (
      <div className={styles.wrap}>
        <img src={leftBgSvg} className={styles.leftBg} />
        <div className={styles.spWrap}>{this.state.finDom}</div>
      </div>
    );
  }
}
