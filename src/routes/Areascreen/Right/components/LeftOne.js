import React, { Component } from 'react';
import { connect } from 'dva';
import Title from '../../components/title/index.js';
import Line1 from '../../components/line/line1.js';
import Line2 from '../../components/line/line2.js';
import styles from './LeftOne.less';

@connect(({ areascreen }) => ({
  areascreen,
}))
export default class LeftOneWrap extends Component {
  state = {
    activeIcon: true,
  };

  componentDidMount() {
    const {
      dispatch,
      areascreen: { requestParam },
    } = this.props;
    (async () => {
      await dispatch({
        type: 'areascreen/fetchGetListRevenueTaxTrend',
        payload: requestParam,
      });
      clearInterval(this.timerIcon);
      this.timerIcon = setInterval(() => {
        const { activeIcon } = this.state;
        this.setState({
          activeIcon: !activeIcon,
        });
      }, 10000);
    })();
  }

  componentWillUnmount() {
    clearInterval(this.timerIcon);
  }

  render() {
    const {
      areascreen: { getListRevenueTaxTrendData },
    } = this.props;
    const { activeIcon } = this.state;
    const { revenue, tax } = getListRevenueTaxTrendData;
    return (
      <div className={styles.leftOneWrap}>
        <div className={styles.wrap}>
          <Title
            titleName="行业营收发展"
            description="economic trends"
            rightOption={[]}
            activeIcon={activeIcon}
          />
          <div className={styles.cnt}>
            {activeIcon ? <Line1 revenue={revenue} /> : <Line2 tax={tax} />}
          </div>
        </div>
      </div>
    );
  }
}
