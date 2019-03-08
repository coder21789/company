import React, { Component } from 'react';
import { connect } from 'dva';

import titleBg from '../../svg/title-bg.svg';

import styles from './LeftTop.less';

@connect(({ compOverscreen }) => ({
  compOverscreen,
}))
export default class LeftTopWrap extends Component {
  state = {};

  componentDidMount() {
    const {
      dispatch,
      compOverscreen: { requestParam },
    } = this.props;

    if (requestParam.companyId) {
      dispatch({
        type: 'compOverscreen/fetchGetCompanyInfoData',
        payload: requestParam,
      });
    }
  }

  render() {
    const {
      compOverscreen: { getCompanyInfoData },
    } = this.props;

    return (
      <div className={styles.leftTopWrap}>
        <img className={styles.titleBg} src={titleBg} alt="" />
        <h1>{getCompanyInfoData && getCompanyInfoData.companyName}</h1>
      </div>
    );
  }
}
