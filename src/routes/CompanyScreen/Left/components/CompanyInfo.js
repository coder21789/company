import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './CompanyInfo.less';

@connect(({ compOverscreen }) => ({
  compOverscreen,
}))
export default class CompanyInfoWrap extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const {
      compOverscreen: { getCompanyInfoData },
    } = this.props;

    return (
      <div className={styles.panel}>
        <h3 className={styles.panel_title}>
          <span className={styles.zh}>企业简介</span>
          <span className={styles.en}>company profile</span>
        </h3>
        <div className={styles.panel_content}>
          <div className={styles.line}>
            <i className={styles.border} />法定代表人：{getCompanyInfoData.companyLegal ? (
              getCompanyInfoData.companyLegal
            ) : (
              <span>-</span>
            )}
          </div>
          <div className={styles.line}>
            <i className={styles.border} />注册日期：{getCompanyInfoData.estabDate ? (
              getCompanyInfoData.estabDate
            ) : (
              <span>-</span>
            )}
          </div>
          <div className={styles.line}>
            <i className={styles.border} />注册资本：{getCompanyInfoData.regisCap ? (
              getCompanyInfoData.regisCap
            ) : (
              <span>-</span>
            )}
            {getCompanyInfoData.regisCap ? '万元' : ''}
          </div>
          <div className={styles.line}>
            <i className={styles.border} />行业：{getCompanyInfoData.busiScope ? (
              getCompanyInfoData.busiScope
            ) : (
              <span>-</span>
            )}
          </div>
          <div className={styles.line_clear}>
            <i className={styles.border} />经营状态：{getCompanyInfoData.status ? (
              getCompanyInfoData.status
            ) : (
              <span>-</span>
            )}
          </div>
          <div className={styles.line_clear}>
            <i className={styles.border} />注册地址：{getCompanyInfoData.regisAddr ? (
              getCompanyInfoData.regisAddr
            ) : (
              <span>-</span>
            )}
          </div>
        </div>
      </div>
    );
  }
}
