import React, { Component } from 'react';
import LeftTop from './components/LeftTop';
import CompanyInfo from './components/CompanyInfo';
import CompanyWarn from './components/CompanyWarn';
import CompanyFinance from './components/CompanyFinance';
import CompanyMap from './components/CompanyMap';
import RevenueTrend from './components/RevenueTrend';
import IntellectualProperty from './components/IntellectualProperty';
import Talent from './components/Talent';
import Opinion from './components/Opinion';
import styles from './Left.less';

export default class LeftWrap extends Component {
  state = {};

  render() {
    return (
      <div className={styles.leftWrap}>
        <LeftTop />
        <CompanyInfo />
        <CompanyWarn />
        <CompanyFinance />
        <CompanyMap />
        <RevenueTrend />
        <IntellectualProperty />
        <Talent />
        <Opinion />
      </div>
    );
  }
}
