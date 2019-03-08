import React, { Component } from 'react';
import { connect } from 'dva';
import MiddleAnimate from '../components/MiddleAnimate';
import styles from './index.less';

@connect(({ compOverscreen }) => ({
  compOverscreen,
}))
export default class MiddleWrap extends Component {
  state = {};

  componentDidMount() {
    const {
      dispatch,
      compOverscreen: { requestParam },
    } = this.props;

    if (requestParam.companyId) {
      dispatch({
        type: 'compOverscreen/fetchGetListEcoIndexsData',
        payload: requestParam,
      });
    }
  }

  render() {
    const {
      compOverscreen: { getListEcoIndexsData },
    } = this.props;
    return (
      <div className={styles.middle}>
        <MiddleAnimate className={styles.middleBg} data={getListEcoIndexsData} />
      </div>
    );
  }
}
