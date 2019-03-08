import React, { Component } from 'react';
import { connect } from 'dva';
import Title from '../../components/title/index.js';
import styles from './LeftTwo.less';
import galaxyBg from '../../img/galaxyBg.png';

@connect(({ areascreen }) => ({
  areascreen,
}))
export default class LeftTwoWrap extends Component {
  state = {
    activeIcon: true,
    activeCircle: 1,
  };

  componentDidMount() {
    const {
      dispatch,
      areascreen: { requestParam },
    } = this.props;
    (async () => {
      await dispatch({
        type: 'areascreen/fetchGetListCompanyLevelAna',
        payload: requestParam,
      });
      clearInterval(this.timerIcon);
      this.timerIcon = setInterval(() => {
        const { activeIcon } = this.state;
        clearInterval(this.timerCicle);
        this.setState({
          activeCircle: 1,
        });
        this.setState({
          activeIcon: !activeIcon,
        });
        this.timerCicle = setInterval(() => {
          let { activeCircle } = this.state;
          activeCircle += 1;
          this.setState({
            activeCircle,
          });
        }, 2000);
      }, 10000);
    })();
  }

  componentWillUnmount() {
    clearInterval(this.timerIcon);
    clearInterval(this.timerCicle);
  }

  render() {
    const { activeIcon, activeCircle } = this.state;
    const {
      areascreen: { getListCompanyLevelAnaData },
    } = this.props;
    const { revenue, tax } = getListCompanyLevelAnaData;
    // console.log(revenue, tax);
    let activeCount = 0;
    if (activeIcon) {
      // console.log(revenue);
      activeCount = revenue.length >= activeCircle ? revenue[activeCircle - 1].companyCnt : 0;
    } else {
      activeCount = tax.length >= activeCircle ? tax[activeCircle - 1].companyCnt : 0;
    }
    return (
      <div className={styles.leftTwoWrap}>
        <div className={styles.wrap}>
          <Title
            titleName="企业经济等级分析"
            description="ENTERPRISE ECONOMIC GRADE ANALYSIS"
            rightOption={[]}
            activeIcon={activeIcon}
          />
          <div className={styles.cnt}>
            <div className={styles.text}>
              <div className={styles.name}>企业数</div>
              <div className={styles.value}>{activeCount}</div>
            </div>
            <div className={styles.galaxy}>
              <img src={galaxyBg} alt="" />
              <div className={styles.orbit}>
                ·
                <div className={`${styles.planet} ${styles.planet1}`}>
                  <div className={styles.value}>税收0-100万</div>
                </div>
                <div className={`${styles.planet} ${styles.planet2}`}>
                  <div className={styles.value}>营收100万-1000万</div>
                </div>
                <div className={`${styles.planet} ${styles.planet3}`}>
                  <div className={styles.value}>营收1000万-5000万</div>
                </div>
                <div className={`${styles.planet} ${styles.planet4}`}>
                  <div className={styles.value}>营收5000万-3亿</div>
                </div>
                <div className={`${styles.planet} ${styles.planet5}`}>
                  <div className={styles.value}>营收3亿以上</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
