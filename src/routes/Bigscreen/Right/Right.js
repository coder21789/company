import React, { Component } from 'react';
import styles from './Right.less';
import rightCardBg from '../svg/rightCardBg.svg';
import { connect } from 'dva';
import TopL from './TopL';
import TopR from './TopR';
import BottomL from './BottomL';
import BottomR from './BottomR';
import MiddleL from './MiddleL';
import MiddleR from './MiddleR';

@connect(({ bigScreen }) => ({
  bigScreen,
}))
export default class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blIndex: 0,
      brIndex: 0,
      blTab: [],
      brTab: [],
      blTitleName: '',
      brTitleName: '',
    };
  }
  componentDidMount() {
    this.blTimer = 0;
    this.brTimer = 0;
  }
  // shouldComponentUpdate(props, nextState) {
  //   if (this.props === props) {
  //     return false
  //   }
  //   return true
  // }
  shouldComponentUpdate(props, nextState) {
    if (this.props === props) {
      return false;
    }
    let blArr = [
      { name: '上市企业', enName: 'listedComp' },
      { name: '新三板', enName: 'newThreeComp' },
      { name: '纳税大户', enName: 'bigTaxComp' },
      { name: '人效冠军', enName: 'peopleWorkComp' },
      { name: '独角兽', enName: 'unicornComp' },
      { name: '准独角兽', enName: 'quasiUnicornComp' },
    ];
    let brArr = [
      { name: '全部', enName: 'allDemand' },
      { name: '旅游休闲', enName: 'travel' },
      { name: '信息科技', enName: 'infoEconomy' },
      { name: '生物健康', enName: 'health' },
      { name: '高端制造', enName: 'highEquipment' },
      { name: '金融服务', enName: 'financial' },
      { name: '文化创意', enName: 'culture' },
      { name: '时尚行业', enName: 'fashion' },
    ];

    this.setState({
      blIndex: this.blTimer,
      brIndex: this.brTimer,
      blTitleName: blArr[this.blTimer],
      brTitleName: brArr[this.brTimer],
    });

    let blDom = blArr.map((item, index) => {
      if (index === this.blTimer) {
        return (
          <div key={index + 'br'} className={styles.active}>
            {item.name}
          </div>
        );
      } else {
        return (
          <div key={index + 'br'} className={styles.item}>
            {item.name}
          </div>
        );
      }
    });

    let brDom = brArr.map((item, index) => {
      if (index === this.brTimer) {
        return (
          <div key={index + 'br'} className={styles.active}>
            {item.name}
          </div>
        );
      } else {
        return (
          <div key={index + 'br'} className={styles.item}>
            {item.name}
          </div>
        );
      }
    });
    this.setState({
      blTab: blDom,
      brTab: brDom,
    });
    this.blTimer++;
    this.brTimer++;
    if (this.blTimer >= blArr.length) {
      this.setState({ blIndex: 0 });
      this.blTimer = 0;
    }

    if (this.brTimer >= brArr.length) {
      this.setState({ brIndex: 0 });
      this.brTimer = 0;
    }
    return true;
  }
  render() {
    const { bigScreen } = this.props;
    const {
      taxTrend,
      intellProData,
      sevenIndustry,
      listTalentAna,
      listCompanyAna,
      listTalentDemand,
    } = bigScreen;

    return (
      <div className={styles.wrap}>
        {/*----------------------*/}
        <div className={styles.card}>
          <img src={rightCardBg} className={styles.cardBg} />
          <div className={styles.head}>
            <div className={styles.title}>经济发展趋势</div>
            <div className={styles.subTitle}>economic trends</div>
            <div className={styles.headTab}>
              <div className={this.props.timer ? styles.item : styles.active}>营收</div>
              <div className={this.props.timer ? styles.active2 : styles.item}>营收增长</div>
            </div>
          </div>
          <div className={styles.cont}>
            <TopL propsData={taxTrend} timer={this.props.timer} />
          </div>
        </div>
        {/*------------topl----------*/}
        <div className={styles.card}>
          <img src={rightCardBg} className={styles.cardBg} />
          <div className={styles.head}>
            <div className={styles.title}>知识产权分析</div>
            <div className={styles.subTitle}>economic trends</div>
          </div>
          <div className={styles.cont}>
            <TopR propsData={intellProData} timer={this.props.timer} />
          </div>
        </div>
        {/*----------------------*/}
        <div className={styles.card}>
          <img src={rightCardBg} className={styles.cardBg} />
          <div className={styles.head}>
            <div className={styles.title}>七大产业发展</div>
            <div className={styles.subTitle}>economic trends</div>
            <div className={styles.headTab}>
              <div className={this.props.timer ? styles.item : styles.active}>营收</div>
              <div className={this.props.timer ? styles.active2 : styles.item}>营收增长</div>
            </div>
          </div>
          <div className={styles.cont}>
            <MiddleL timer={this.props.timer} propsData={sevenIndustry} />
          </div>
        </div>
        {/*----------------------*/}
        <div className={styles.card}>
          <img src={rightCardBg} className={styles.cardBg} />
          <div className={styles.head}>
            <div className={styles.title}>人才分析</div>
            <div className={styles.subTitle}>economic trends</div>
            {/*<div className={styles.headTab}>*/}
            {/*<div className={this.props.timer ? styles.item : styles.active2}>高级人才</div>*/}
            {/*<div className={this.props.timer ? styles.active2 : styles.item}>就业人才</div>*/}
            {/*</div>*/}
          </div>
          <div className={styles.cont}>
            <div style={{ width: '100%', height: '100%' }}>
              <MiddleR timer={this.props.timer} propsData={listTalentAna} />
            </div>
          </div>
        </div>
        {/*----------------------*/}
        <div className={styles.card}>
          <img src={rightCardBg} className={styles.cardBg} />
          <div className={styles.head}>
            <div className={styles.headBigTag}>{this.state.blTab}</div>
          </div>
          <div className={styles.cont} style={{ marginTop: 50 }}>
            <div style={{ width: '100%', height: '100%' }}>
              <BottomL propsTitle={this.state.blTitleName} propsData={listCompanyAna} />
            </div>
          </div>
        </div>
        {/*----------------------*/}
        <div className={styles.card}>
          <img src={rightCardBg} className={styles.cardBg} />
          <div className={styles.head}>
            <div className={styles.title}>人才需求分析</div>
            <div className={styles.subTitle}>economic trends</div>
            <div className={styles.tab} />
          </div>
          <div className={styles.brHeadBigTag}>{this.state.brTab}</div>
          <div className={styles.contBr}>
            <BottomR propsTitle={this.state.brTitleName} propsData={listTalentDemand} />
          </div>
        </div>
      </div>
    );
  }
}
