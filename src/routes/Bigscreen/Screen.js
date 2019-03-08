import React, { Component } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import styles from './Screen.less';
import Left from './Left/Left';
import Right from './Right/Right';
import Center_ from './center/Center';
import bgTop from './svg/bgTop.svg';
import bgBottom from './svg/bgBottom.svg';
import bgMp4 from './svg/bg.mp4';
import bgCover from './svg/bgCover.svg';
import { initScreen } from '../../utils/screen';

let bg = {
  backgroundColor: 'yellow',
};

function windowResize() {
  location.reload();
}
@connect(({ bigScreen }) => ({
  bigScreen,
}))
export default class Screen extends Component {
  state = {
    statDate: moment().format('YYYYMM'),
    timer: null,
    screenTimer: false,
    smTimer: null,
  };

  componentWillMount() {
    bg = initScreen();
  }
  componentWillUnmount() {
    clearInterval(this.ztimer);
    window.removeEventListener('resize', windowResize);
  }
  componentDidMount() {
    window.addEventListener('resize', windowResize);
    const { statDate, timer } = this.state;
    const { dispatch } = this.props;

    clearInterval(this.ztimer);
    let t = 0;
    this.ztimer = setInterval(() => {
      if (t < 5) {
        t++;
      } else {
        t = 0;
        this.setState({ screenTimer: !this.state.screenTimer });
      }
      this.setState({
        smTimer: t,
      });
    }, 1 * 1000);

    // left
    dispatch({
      type: 'bigScreen/fetchGetCoreIndicators',
      payload: {
        statDate,
      },
    });

    // right top left 营收
    dispatch({
      type: 'bigScreen/fetchTaxTrend',
      payload: {
        statDate,
      },
    });

    // right top right 知识产权
    dispatch({
      type: 'bigScreen/fetchIntellProData',
      payload: {
        statDate,
      },
    });

    // right ml
    dispatch({
      type: 'bigScreen/fetchSevenIndustry',
      payload: {
        statDate,
      },
    });

    // right mr
    dispatch({
      type: 'bigScreen/fetchListTalentAna',
      payload: {
        statDate,
      },
    });

    // right bl
    dispatch({
      type: 'bigScreen/fetchListCompanyAna',
      payload: {
        statDate,
      },
    });

    // right br 人才需求分析
    dispatch({
      type: 'bigScreen/fetchListTalentDemand',
      payload: {
        statDate,
      },
    });

    // center  map
    dispatch({
      type: 'bigScreen/fetchMapList',
      payload: {
        statDate,
      },
    });
  }

  render() {
    const { bigScreen } = this.props;
    const { leftData, taxTrend, mapData } = bigScreen;

    return (
      <div className={styles.screen}>
        <div className={styles.wrap} style={bg} id="screen">
          <video
            autoPlay="autoplay"
            muted
            className={styles.bg}
            src={bgMp4}
            loop="loop"
            style={{ width: '100%', height: '100%' }}
          />
          {/*<div className={styles.bg}></div>*/}
          <img src={bgCover} className={styles.bgCover} alt="" />
          <img className={styles.bgT} src={bgTop} alt="" />
          <img className={styles.bgB} src={bgBottom} alt="" />
          <Left leftData={leftData} timer={this.state.screenTimer} />
          <Center_
            smTimer={this.state.smTimer}
            timer={this.state.screenTimer}
            propsData={mapData}
          />
          <Right timer={this.state.screenTimer} />
        </div>
      </div>
    );
  }
}
