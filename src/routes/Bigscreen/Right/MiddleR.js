import React, { Component } from 'react';
import styles from './Right.less';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
import { getFormatMoney } from '../../../utils/utils';

function initLeftCharts(arr) {
  arr.forEach(item => {
    if (item.educateLevel === 400101) {
      item.name = '专科及以下';
    } else if (item.educateLevel === 400102) {
      item.name = '本科';
    } else if (item.educateLevel === 400103) {
      item.name = '硕士';
    } else if (item.educateLevel === 400104) {
      item.name = '博士及以上';
    }
    item.value = item.educateLevelProp ? item.educateLevelProp: 0;
  });
  let fakeItem = arr.filter(item => {
    return item.name === 'other'
  });
  if (fakeItem.length < 1) {
    arr.push({
      value: 1,
      name: 'other',
      itemStyle: { normal: { color: 'rgba(0,0,0,0)' } },
    });
  }
  let finArr = arr
  const myChart = echarts.init(document.querySelector('#bar_'));
  const option = {
    color: ['#00BBFF', '#00E7C0', '#EF4390', '#FDB359'],
    title: {
      show: true,
      text: '文化水平',
      left: 250,
      bottom: 30,
      textStyle: {
        fontSize: '48',
        fontWeight: 'Medium',
        color: '#D9EEFF',
      },
    },
    legend: {
      show: true,
      data: ['专科及以下', '本科', '硕士', '博士及以上'],
      right: 10,
      bottom: 0,
      orient: 'vertical',
      textStyle: {
        fontSize: '40',
        fontWeight: 'bold',
        color: 'white',
      },
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        startAngle: 180,
        radius: ['130%', '200%'],
        center: ['35%', '100%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            formatter: (data) => {
              return data.percent * 2 + '%'
            },
            show: true,
            position: 'inside',
            textStyle: {
              fontSize: '40',
              fontWeight: 'bold',
            },
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold',
            },
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: finArr,
      },
    ],
  };
  let num = 0;
  let opationArr = option.series[0].data;
  opationArr.forEach(item => {
    num += item.value;
  });
  let bool = false;
  opationArr.forEach(item => {
    if (item.name === 'other') {
      bool = true;
    }
  });
  if (!bool) {
    opationArr.push({
      value: num,
      name: 'other',
      itemStyle: { normal: { color: 'rgba(0,0,0,0)' } },
    });
  } else {
    opationArr.forEach((item) => {
      if (item.name === 'other') {
        if (num) {
          item.value = num
        } else {
          item.value = 1
        }
      }
    });
  }

  myChart.resize();
  // 绘制图表
  myChart.setOption(option);
  window.onresize = () => {
    myChart.resize();
  };
}
function initRightCharts(arr) {
  let arrFilter = arr.filter((item) => {
    return item.salaryLevel !== -99999
  })

  arrFilter.forEach(item => {
    if (item.salaryLevel === 400301) {
      item.name = '8k以下';
    } else if (item.salaryLevel === 400302) {
      item.name = '8k-14k';
    } else if (item.salaryLevel === 400303) {
      item.name = '14k-20k';
    } else if (item.salaryLevel === 400304) {
      item.name = '20k以上';
    }
    item.value = item.salaryLevelProp ? item.salaryLevelProp : 0;
  });
  let fakeItem = arrFilter.filter(item => {
    return item.name === 'other'
  });
  if (fakeItem.length < 1) {
    arrFilter.push({
      value: 1,
      name: 'other',
      itemStyle: { normal: { color: 'rgba(0,0,0,0)' } },
    });
  }
  let finArr = arrFilter
  const myChart2 = echarts.init(document.querySelector('#bar2_'));
  const option = {
    color: ['#00BBFF', '#00E7C0', '#EF4390', '#FDB359'],
    title: {
      show: true,
      text: '薪资等级',
      left: 250,
      bottom: 30,
      textStyle: {
        fontSize: '48',
        fontWeight: 'Medium',
        color: '#D9EEFF',
      },
    },
    legend: {
      show: true,
      data: ['8k以下', '8k-14k', '14k-20k', '20k以上'],
      right: 10,
      bottom: 0,
      orient: 'vertical',
      textStyle: {
        fontSize: '40',
        fontWeight: 'bold',
        color: 'white',
      },
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        startAngle: 180,
        radius: ['130%', '200%'],
        center: ['35%', '100%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            formatter: (data) => {
              return data.percent * 2 + '%'
            },
            show: true,
            position: 'inside',
            textStyle: {
              fontSize: '40',
              fontWeight: 'bold',
            },
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold',
            },
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: finArr,
      },
    ],
  };

  myChart2.setOption(option);
  window.onresize = () => {
    myChart2.resize();
  };
}
function init(props) {
  let propsData = props.propsData;
  if (propsData && propsData.length !== 0) {
    let { listhHighTalent, listAgeLevel, listEducateLevel, listSalaryLevel } = propsData;
    initLeftCharts(listEducateLevel);
    initRightCharts(listSalaryLevel);
  }
}
export default class MiddleR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ageDom: null,
    };
  }

  shouldComponentUpdate(props, state) {
    if (this.props === props) {
      return false;
    }
    return true;
  }
  static getDerivedStateFromProps(props, state) {
    let propsData = props.propsData;
    let ageDom = null;
    if (propsData && propsData.length !== 0) {
      init(props);
      let { listhHighTalent, listAgeLevel, listEducateLevel, listSalaryLevel } = propsData;
      if (props.timer) {
        // console.log(listAgeLevel, 'listAgeLevellistAgeLevel')
        let dom = listAgeLevel.map(item => {
          return (
            <div key={Math.random() * 10000} className={styles.item}>
              <span className={styles.icon} />
              <p>
                {item.ageLevel === 400401 ? '70后' : ''}
                {item.ageLevel === 400402 ? '80后' : ''}
                {item.ageLevel === 400403 ? '90后' : ''}
                {item.ageLevel === 400404 ? '其他' : ''}
              </p>
              <p>
                人数占比 <span>{(item.ageLevelProp * 100).toFixed(2) + '%'}</span>
              </p>
              <p>
                平均薪资水平{' '}
                <span>
                  {getFormatMoney(item.avgSalary).value + getFormatMoney(item.avgSalary).unit}
                </span>
              </p>
            </div>
          );
        });
        ageDom = (
          <div className={styles.bottom}>
            <img className={styles.img} src={require(`../svg/jy.png`)} alt="" />
            {dom}
          </div>
        );
        return { ageDom: ageDom };
      } else {
        let dom = listhHighTalent.map((item, index) => {
          return (
            <div key={index + 'c'} className={styles.highItem}>
              <div className={styles.title}>
                {item.talentLevel === 1 ? '市521' : ''}
                {item.talentLevel === 2 ? '省千' : ''}
                {item.talentLevel === 3 ? '国千' : ''}
              </div>
              <div className={styles.value}>
                {item.talentCnt}
                <span className={styles.unit}>人</span>
              </div>
            </div>
          );
        });
        ageDom = (
          <div className={styles.bottom}>
            <img className={styles.img} src={require(`../svg/gj.png`)} alt="" />
            {dom}
          </div>
        );
      }
      return {
        ageDom: ageDom,
      };
    }
  }
  componentDidMount() {
    init(this.state);
  }
  render() {
    return (
      <div className={styles.mr}>
        <div className={styles.top}>
          <div className={styles.item} id="bar_" />
          <div className={styles.item} id="bar2_" />
        </div>
        {this.state.ageDom}
      </div>
    );
  }
}
