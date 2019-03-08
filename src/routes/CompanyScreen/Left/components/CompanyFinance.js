import React, { Component } from 'react';
import { connect } from 'dva';
import CompanyFinancing from '../../components/CompanyFinancing';
import styles from './CompanyFinance.less';
@connect(({ compOverscreen }) => ({
  compOverscreen,
}))
export default class CompanyFinanceWrap extends Component {
  state = {};

  componentDidMount() {
    const {
      dispatch,
      compOverscreen: { requestParam },
    } = this.props;

    if (requestParam.companyId) {
      dispatch({
        type: 'compOverscreen/fetchGetListFinancesData',
        payload: requestParam,
      });
    }
  }

  render() {
    const {
      compOverscreen: { getListFinancesData },
    } = this.props;
    let data = [];
    const getListFinancesArr = [];
    if (getListFinancesData) {
      const items = [
        { contentId: 1, contentName: '天使轮', amount: '未透露' },
        { contentId: 3, contentName: 'A轮', amount: '未透露' },
        { contentId: 5, contentName: 'B轮', amount: '未透露' },
        { contentId: 7, contentName: 'C轮', amount: '未透露' },
        { contentId: 9, contentName: 'D轮', amount: '未透露' },
        { contentId: 11, contentName: 'E轮', amount: '未透露' },
      ];
      getListFinancesData.map(v => {
        const amount = parseFloat(v.amount / 10000).toFixed(0);
        return getListFinancesArr.push({
          contentId: v.contentId,
          amount: amount.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'),
          contentName: v.contentName,
        });
      });
      const getCorrectDate = items.concat(getListFinancesArr);
      const lastIndex = getListFinancesData.length - 1;
      getCorrectDate.map((v, i) => {
        getListFinancesData.map(company => {
          if (company.contentId === v.contentId && v.amount === '未透露') {
            getCorrectDate.splice(i, 1, '');
          }
          if (v.contentId > getListFinancesData[lastIndex].contentId && v.amount === '未透露') {
            getCorrectDate.splice(i, 1, '');
          }
          return company;
        });
        return v;
      });

      getCorrectDate.map(v => {
        if (v) {
          data.push({
            contentId: v.contentId,
            amount: v.amount === '0' ? '未透露' : v.amount,
            contentName: v.contentName,
          });
        }
        return v;
      });
      data = data.sort((a, b) => a.contentId > b.contentId);
    }

    return (
      <div className={styles.panel}>
        <h3 className={styles.panel_title}>
          <span className={styles.zh}>融资阶段</span>
          <span className={styles.en}>Financing stage</span>
        </h3>
        <div className={styles.panel_content}>
          {getListFinancesData.length > 0 ? (
            <CompanyFinancing className={styles.financeBg} data={data} />
          ) : (
            <div className={styles.empty}>
              <div className={styles.empty_img}>&nbsp;</div>
              <span className={styles.empty_text}>暂无数据</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}
