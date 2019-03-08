import React, { Component } from 'react';
import styles from './Center.less';
import { connect } from 'dva';
import moment from 'moment';
import { chNum, sub } from '../../../utils/utils';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import CenterBottom from './CenterBottom';
import allMap from '../svg/map/整个地图.svg';
import allMapBg from '../svg/map/mapLight.svg';
import card from '../svg/ct-card.svg';
import cir from '../svg/ct-cirl.svg';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
[];

let mapArr = [
  { name: '百丈镇', left: 48, top: 0, tt: 286, tl: 284, enName: 'bai zhang town' },
  { name: '鸬鸟镇', left: 0, top: 387, tt: 618, tl: 218, enName: 'lu diao town' },
  { name: '黄湖镇', left: 431, top: 267, tt: 468, tl: 600, enName: 'huang hu town' },
  { name: '径山镇', left: 303, top: 568, tt: 961, tl: 689, enName: 'jing shan town' },
  { name: '瓶窑镇', left: 732, top: 483, tt: 787, tl: 1041, enName: 'ping yao town' },
  { name: '中泰街道', left: 684, top: 1520, tt: 1659, tl: 969, enName: 'zhong tai street' },
  { name: '闲林街道', left: 1105, top: 1484, tt: 1775, tl: 1341, enName: 'xian lin street' },
  { name: '仓前街道', left: 1191, top: 1097, tt: 1327, tl: 1350, enName: 'cang qian street' },
  { name: '良渚街道', left: 1280, top: 602, tt: 942, tl: 1634, enName: 'liang zhu street' },
  { name: '崇贤街道', left: 1935, top: 693, tt: 816, tl: 2108, enName: 'chong xian street' },
  { name: '运河街道', left: 2479, top: 214, tt: 345, tl: 2667, enName: 'yun he street' },
  { name: '余杭街道', left: 641, top: 1084, tt: 1313, tl: 969, enName: 'yu hang street' },
  { name: '仁和街道', left: 1680, top: 334, tt: 547, tl: 1829, enName: 'ren he street' },
  { name: '塘栖镇', left: 2035, top: 250, tt: 507, tl: 2245, enName: 'tang qi town' },
  { name: '临平街道', left: 2408, top: 454, tt: 618, tl: 2667, enName: 'lin ping street' },
  { name: '东湖街道', left: 2750, top: 465, tt: 580, tl: 2867, enName: 'dong hu street' },
  { name: '乔司街道', left: 2448, top: 840, tt: 1047, tl: 2632, enName: 'qiao si street' },
  { name: '星桥街道', left: 2433, top: 742, tt: 832, tl: 2537, enName: 'xing qiao street' },
  { name: '南苑街道', left: 2635, top: 676, tt: 892, tl: 2806, enName: 'nan yuan street' },
  { name: '五常街道', left: 1458, top: 1334, tt: 1518, tl: 1625, enName: 'wu chang street' },
];

export default class Center_ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statDate: moment().format('YYYYMM'),
      mapItemImg: null,
      textArr: [],
      mapCard: null,
      bottom: null,
      smTimer: null,
    };
  }
  randomMap(mapProps, smTimer) {
    const { dispatch } = this.props;
    const { statDate } = this.state;
    if (!mapProps) return;
    const rdmIndex = this.localTimer || 0;
    // console.log(mapProps, 'mapPropsmapProps')
    let textArr = mapProps.map((item, index) => {
      if (index === rdmIndex) {
        return (
          <div
            key={index + 'mp'}
            style={{ top: item.tt, left: item.tl }}
            className={styles.mapTextActive}
          >
            <img
              src={require(`../svg/mapbar${item.level}.svg`)}
              className={styles.iconBar}
              alt=""
            />
            <div className={styles.text}>
              <div className={styles.title}>{item.name}</div>
              <div className={styles.value}>{item.companyCnt}</div>
            </div>
          </div>
        );
      } else {
        return (
          <div
            key={index + 'mp'}
            style={{ top: item.tt, left: item.tl }}
            className={styles.mapText}
          >
            <div className={styles.icon}>
              <div className={styles.iconInner} />
            </div>
            <div className={styles.text}>
              <div className={styles.title}>{item.name}</div>
              <div className={styles.value}>{item.companyCnt}</div>
            </div>
          </div>
        );
      }
    });
    // console.log(mapProps[rdmIndex].areaName)
    let mapItemImg = (
      <img
        className={styles.mapItem}
        style={{ top: mapProps[rdmIndex].top, left: mapProps[rdmIndex].left }}
        src={require(`../svg/map/${mapProps[rdmIndex].areaName}.svg`)}
      />
    );

    let cardIndustry = null;
    switch (mapProps[rdmIndex].domainId) {
      case 2001:
        cardIndustry = '信息科技';
        break;
      case 2002:
        cardIndustry = '高端制造';
        break;
      case 2003:
        cardIndustry = '时尚行业';
        break;
      case 2004:
        cardIndustry = '旅游休闲';
        break;
      case 2005:
        cardIndustry = '文化创意';
        break;
      case 2006:
        cardIndustry = '金融服务';
        break;
      case 2007:
        cardIndustry = '生物健康';
        break;
      case 2008:
        cardIndustry = '无产业聚集';
        break;
    }
    let mapCard = (
      <div className={styles.cont}>
        <div className={styles.top}>
          {mapProps[rdmIndex].areaName}
          <span style={{ fontSize: 50 }}> {mapProps[rdmIndex].enName}</span>
        </div>
        <div className={styles.left}>
          <p>企业数</p>
          <p>营收</p>
          <p>税收</p>
          <p>就业人数</p>
          <p>知名企业</p>
        </div>
        <div className={styles.center}>
          <p>
            {mapProps[rdmIndex].companyCnt === ''
              ? '--'
              : chNum(mapProps[rdmIndex].companyCnt, false)}
          </p>
          <p>
            {mapProps[rdmIndex].revenue === '' ? '--' : chNum(mapProps[rdmIndex].revenue, false)}
          </p>
          <p>{mapProps[rdmIndex].tax === '' ? '--' : chNum(mapProps[rdmIndex].tax, false)}</p>
          <p>
            {mapProps[rdmIndex].talentCnt === ''
              ? '--'
              : chNum(mapProps[rdmIndex].talentCnt, false)}
          </p>
          <div className={styles.logo}>
            {mapProps[rdmIndex].companyName1 === ''
              ? '--'
              : sub(mapProps[rdmIndex].companyName1, 5)}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.bigLogo}>
            <img src={require(`../svg/${cardIndustry}.svg`)} alt="" />
            <span>{cardIndustry}</span>
          </div>
          <div className={styles.logo}>
            {mapProps[rdmIndex].companyName1 === ''
              ? '--'
              : sub(mapProps[rdmIndex].companyName2, 5)}
          </div>
        </div>
      </div>
    );
    // center  mapbottom
    this.initBottom(mapProps[rdmIndex], smTimer);
    this.setState({
      mapItemImg: mapItemImg,
      textArr: textArr,
      mapCard: mapCard,
    });
  }
  initBottom(props, smTimer) {
    let three = props.threeIndustry;
    let contArr = [];
    let taxArr = [];
    three.forEach((item, index) => {
      contArr.push({ name: item.domainName, value: item.companyCnt });
      taxArr.push({ name: item.domainName, value: item.ytRevenue });
    });
    let fomDom = (
      <div className={styles.bottom}>
        <div className={styles.left}>
          <div className={styles.title}>
            <Texty>{smTimer < 5 && props.areaName}</Texty>
          </div>
          <div className={styles.enTitle}>
            <Texty>{smTimer < 5 && sub(props.enName, 10)}</Texty>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.title}>
            <div className={styles.l} />
            <div className={styles.text}>企业数</div>
            <div className={styles.r} />
          </div>
          <CenterBottom propsData={contArr} id="bottom1" />
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <div className={styles.l} />
            <div className={styles.text}>营收</div>
            <div className={styles.r} />
          </div>
          <CenterBottom propsData={taxArr} id="bottom2" />
        </div>
      </div>
    );
    this.setState({ bottom: fomDom });
  }

  shouldComponentUpdate(props, nextState) {
    if (!props.smTimer && props.smTimer !== 0) {
      this.localTimer = 0;
      return true;
    }
    return true;
  }
  componentWillReceiveProps(props) {
    // console.log('componentWillReceiveProps')
    let mapPropArr = null;
    if (props.propsData && props.propsData.length !== 0) {
      mapPropArr = props.propsData.filter(item => {
        return item !== '';
      });
      let arr = [];
      mapPropArr.forEach((item, index) => {
        mapArr.forEach((subItem, subInd) => {
          if (subItem.name === item.areaName) {
            item.name = subItem.name;
            item.left = subItem.left;
            item.top = subItem.top;
            item.tt = subItem.tt;
            item.tl = subItem.tl;
            item.enName = subItem.enName;
          }
        });
      });
      if (props.smTimer === 0) {
        console.log('props.smTimer === 0', this.localTimer);
        if (this.localTimer < mapPropArr.length - 1) {
          console.log('<');
          this.localTimer++;
        } else {
          console.log('>');
          this.localTimer = 0;
        }
      }
    }
    this.setState({ smTimer: props.smTimer });
    this.randomMap(mapPropArr, props.smTimer);
  }
  render() {
    // console.log('render')
    return (
      <div className={styles.wrap}>
        <div className={styles.titleWrap}>
          <p className={styles.title}>多维度市场主体服务平台</p>
          <p className={styles.subtitle}>Multi dimension market service platform</p>
        </div>
        <div className={styles.map}>
          <img src={allMap} className={styles.bg} alt="" />
          <img src={allMapBg} className={styles.mapBg} alt="" />
          {this.state.mapItemImg}
          {this.state.textArr}
        </div>
        <div className={styles.card}>
          <img src={card} alt="" />
          <img src={cir} className={styles.cir} alt="" />
          {this.state.mapCard}
        </div>
        {this.state.bottom}
      </div>
    );
  }
}
