import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './CompanyWarn.less';

@connect(({ compOverscreen }) => ({
  compOverscreen,
}))
export default class CompanyWarnWrap extends Component {
  state = {};

  componentDidMount() {
    const {
      dispatch,
      compOverscreen: { requestParam },
    } = this.props;

    if (requestParam.companyId) {
      dispatch({
        type: 'compOverscreen/fetchGetListCmpyAlertsData',
        payload: requestParam,
      });
    }
  }

  render() {
    const {
      compOverscreen: { getListCmpyAlertsData },
    } = this.props;
    const position = {
      name: [
        { top: '0', left: '70px' },
        { top: '174px', left: '0' },
        { top: '330px', left: '80px' },
        { top: '10px', left: '205px' },
        { top: '150px', left: '187px' },
        { top: '110px', left: '310px' },
        { top: '325px', left: '260px' },
      ],
      num: [
        { top: '68px', left: '54px', fontSize: '25px', width: '99px' },
        { top: '205px', left: '55px', fontSize: '25px', width: '93px' },
        { top: '280px', left: '64px', fontSize: '25px', width: '71px' },
        { top: '70px', left: '180px', fontSize: '25px', width: '93px' },
        { top: '200px', left: '180px', fontSize: '25px', width: '74px' },
        { top: '70px', left: '304px', fontSize: '18px', width: '49px' },
        { top: '285px', left: '254px', fontSize: '18px', width: '56px' },
      ],
    };

    return (
      <div className={styles.panel}>
        <h3 className={styles.panel_title}>
          <span className={styles.zh}>企业预警</span>
          <span className={styles.en}>company Warning</span>
        </h3>
        {getListCmpyAlertsData.length > 0 ? (
          <div className={styles.panel_content}>
            {getListCmpyAlertsData.map((v, i) => (
              <div key={v.contentName}>
                <div className={styles.contentName} style={position.name[i]}>
                  {v.contentName}
                </div>
                <div className={styles.amount} style={position.num[i]}>
                  {v.amount}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <div className={styles.empty_img}>&nbsp;</div>
            <span className={styles.empty_text}>暂无数据</span>
          </div>
        )}
      </div>
    );
  }
}
