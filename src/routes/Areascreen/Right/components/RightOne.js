import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'dva';
import { getFormatMoney } from 'utils/utils';

import Title from '../../components/title/index.js';
import styles from './RightOne.less';

@connect(({ areascreen }) => ({
  areascreen,
}))
export default class RightOneWrap extends Component {
  state = {};

  componentDidMount() {
    const {
      dispatch,
      areascreen: { requestParam },
    } = this.props;

    dispatch({
      type: 'areascreen/fetchGetListCompanyRankData',
      payload: requestParam,
    });
  }

  render() {
    const {
      areascreen: { getListCompanyRankData },
    } = this.props;

    const { revenue, tax } = getListCompanyRankData;

    return (
      <div className={styles.rightOneWrap}>
        <div className={styles.wrap}>
          <Title titleName="年累计收益TOP5" />
          <QueueAnim className={styles.listWrap} component="ul">
            {revenue
              ? revenue.map((value, index) => {
                  return (
                    <li key={value.companyId}>
                      <div className={styles.listContent}>
                        <strong>{index + 1}</strong>
                        <p>{value.companyName}</p>
                        <em>
                          {getFormatMoney(value.revenue).value}
                          <i>{getFormatMoney(value.revenue).unit}</i>
                        </em>
                      </div>
                      <div className={styles.listLine} />
                    </li>
                  );
                })
              : null}
          </QueueAnim>
        </div>
        <div className={styles.wrap}>
          <Title titleName="年累计税收TOP5" />
          <QueueAnim className={styles.listWrap} component="ul">
            {tax
              ? tax.map((value, index) => {
                  return (
                    <li key={value.companyId}>
                      <div className={styles.listContent}>
                        <strong>{index + 1}</strong>
                        <p>{value.companyName}</p>
                        <em>
                          {getFormatMoney(value.tax).value}
                          <i>{getFormatMoney(value.tax).unit}</i>
                        </em>
                      </div>
                      <div className={styles.listLine} />
                    </li>
                  );
                })
              : ''}
          </QueueAnim>
        </div>
      </div>
    );
  }
}
