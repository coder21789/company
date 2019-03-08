import React, { Component } from 'react';
import { connect } from 'dva';
import CompanyMap from '../../components/CompanyMap';
import styles from './CompanyMap.less';

@connect(({ compOverscreen }) => ({
  compOverscreen,
}))
export default class CompanyMapWrap extends Component {
  state = {};

  componentDidMount() {
    const {
      dispatch,
      compOverscreen: { requestParam },
    } = this.props;

    if (requestParam.companyId) {
      dispatch({
        type: 'compOverscreen/fetchGetInvestMapData',
        payload: requestParam,
      });
    }
  }

  render() {
    const {
      compOverscreen: { getInvestMapData },
    } = this.props;

    const data = [];
    if (getInvestMapData.listStocks) {
      getInvestMapData.listStocks.filter((v, i) =>
        data.push({
          keys: `listStocks${i}`,
          names: v.stockName,
          percent: v.stockPercent,
          num: v.stockPercent,
        })
      );
    }

    if (getInvestMapData.listInvestments) {
      getInvestMapData.listInvestments.filter((v, i) =>
        data.push({
          keys: `shouldCapi${i}`,
          names: v.name,
          percent: v.shouldCapi,
          num: v.shouldCapi,
        })
      );
    }
    data.sort((a, b) => a.num < b.num);
    const svgData = data.length > 5 ? data.slice(0, 5) : data;
    const position = {
      name: [
        { top: '84px', left: '0' },
        { top: '130px', left: '200px' },
        { top: '60px', left: '320px' },
        { top: '0px', left: '265px' },
        { top: '10px', left: '14px' },
      ],
      num: [
        { top: '124px', left: '0' },
        { top: '170px', left: '200px' },
        { top: '100px', left: '320px' },
        { top: '50px', left: '14px' },
        { top: '40px', left: '265px' },
      ],
    };

    return (
      <div className={styles.panel}>
        <h3 className={styles.panel_title}>
          <span className={styles.zh}>投资图谱</span>
          <span className={styles.en}>Investment map</span>
        </h3>
        <div className={styles.panel_content}>
          {getInvestMapData.listStocks && getInvestMapData.listInvestments && svgData.length > 0 ? (
            <div className="notEmpty">
              <div className={styles.panel_content_title}>投资去向</div>
              <CompanyMap className={styles.bg} data={svgData} />
              {svgData.map((v, i) => (
                <div className="item" key={v.keys}>
                  <div
                    className={v.names.length > 6 ? `${styles.names}` : `${styles.namesShort}`}
                    style={position.name[i]}
                  >
                    {v.names && v.names}
                  </div>
                  <div className={styles.percent} style={position.num[i]}>
                    {v.percent ? v.percent : '-'}
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
      </div>
    );
  }
}
