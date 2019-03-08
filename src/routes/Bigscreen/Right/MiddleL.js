import React, { Component } from 'react';
import styles from './Right.less';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import barBg from '../svg/barBg.svg';
function initChart(option) {
  const myChart = echarts.init(document.querySelector('#barMl'));
  myChart.resize();
  myChart.setOption(option);
  window.onresize = () => {
    myChart.resize();
  };
}
export default class MiddleL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
      yData: [600, 1182, 1912, 2534, 3600, 4800, 2880],
      yDataY: [600, 1182, 1912, 2534, 3600, 4800, 2880],
      options: null,
    };
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
    } else {
      // console.log('should')
      return true;
    }
  }
  static getDerivedStateFromProps(props, state) {
    // console.log('getDerivedStateFromProps')
    if (props.propsData) {
      let x = [];
      let yData = [];
      let yDataY = [];
      let option = null;
      props.propsData.forEach(item => {
        x.push(item.domainName);
        yData.push(item.companyCnt);
        yDataY.push(item.revenueTax * 100);
      });
      if (props.timer) {
        option = {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          grid: {
            left: '60',
            right: '5%',
            bottom: '10%',
            top: '7%',
            containLabel: true,
          },
          xAxis: [
            {
              type: 'category',
              data: x,
              axisTick: {
                alignWithLabel: true,
              },
              axisLabel: {
                textStyle: {
                  fontSize: 40,
                  color: '#E6F7FF',
                },
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
              name: '百分比',
              nameTextStyle: {
                color: 'white',
                fontSize: 40,
              },
              show: true,
              axisTick: {
                show: true,
                alignWithLabel: true,
              },
              axisLabel: {
                textStyle: {
                  fontSize: 34,
                  color: 'rgba(173,227,255,1)',
                },
              },
              axisLine: {
                show: true,
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(204,238,255,.1)',
                },
              },
            },
          ],
          series: [
            {
              name: '直接访问',
              type: 'bar',
              barWidth: 60,
              data: yData,
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'RGBA(179,229,255,1)',
                    },
                    {
                      offset: 1,
                      color: 'RGBA(102,204,255,1)',
                    },
                  ],
                  globalCoord: false,
                },
              },
            },
          ],
        };
      } else {
        option = {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          grid: {
            left: '60',
            right: '5%',
            bottom: '10%',
            top: '7%',
            containLabel: true,
          },
          xAxis: [
            {
              type: 'category',
              data: x,
              axisTick: {
                alignWithLabel: true,
              },
              axisLabel: {
                textStyle: {
                  fontSize: 40,
                  color: '#E6F7FF',
                },
              },
            },
          ],
          yAxis: [
            {
              name: '营收',
              show: true,
              type: 'value',
              axisTick: {
                show: true,
                alignWithLabel: true,
              },
              axisLabel: {
                textStyle: {
                  fontSize: 34,
                  color: 'rgba(173,227,255,1)',
                },
              },
              axisLine: {
                show: true,
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(204,238,255,.1)',
                },
              },
            },
          ],
          series: [
            {
              name: '直接访问',
              type: 'bar',
              barWidth: 60,
              data: yDataY,
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'RGBA(179,229,255,1)',
                    },
                    {
                      offset: 1,
                      color: 'RGBA(102,204,255,1)',
                    },
                  ],
                  globalCoord: false,
                },
              },
            },
          ],
        };
      }
      if (state.options) {
        initChart(option);
      }

      return {
        x: x,
        yData: yData,
        yDataY: yDataY,
        options: option,
      };
    }
  }
  componentDidMount() {
    initChart(this.state.options);
  }
  render() {
    // console.log('render')
    return (
      <div className={styles.ml}>
        <div id="barMl" style={{ width: '100%', height: '100%' }} />
      </div>
    );
  }
}
