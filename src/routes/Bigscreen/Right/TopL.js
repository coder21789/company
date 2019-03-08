import React, { Component } from 'react';
import styles from './Right.less';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

export default class MiddleL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
      yData: [600, 1182, 1912, 2534, 3600, 4800, 2880],
      yDataY: [600, 1182, 1912, 2534, 3600, 4800, 2880],
    };
  }
  shouldComponentUpdate(props, nextState) {
    if (this.props === props) {
      return false;
    }
    if (props.propsData) {
      let x = [];
      let yData = [];
      let yDataY = [];
      props.propsData.forEach(item => {
        x.push(item.statDate);
        yData.push(item.ytRevenue);
        yDataY.push(item.ytRevenueYny);
      });
      this.setState({ x: x, yData: yData, yDataY: yDataY });
    }
    const myChart = echarts.init(document.querySelector('#line_'));
    let option = {};
    if (props.timer) {
      option = {
        color: ['#0580F2', '#8C64FA'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        legend: {
          show: true,
          icon: 'circle',
          right: 25,
          top: 15,
          itemWidth: 8,
          itemHeight: 8,
          textStyle: {
            fontSize: 12,
            color: '#333333',
          },
          data: ['营收企业数', '营收额'],
        },
        grid: {
          left: '60',
          right: '5%',
          bottom: '10%',
          top: '5%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisTick: {
              show: true,
            },
            axisLine: {
              show: true,
            },
            axisLabel: {
              textStyle: {
                fontSize: 54,
                color: '#E6F7FF',
              },
            },
            data: this.state.x,
          },
        ],
        yAxis: [
          {
            name: '营收(亿元)',
            show: true,
            type: 'value',
            axisTick: {
              show: true,
              alignWithLabel: true,
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
            axisLabel: {
              textStyle: {
                fontSize: 34,
                color: 'rgba(173,227,255,1)',
              },
            },
          },
        ],
        series: [
          {
            name: '营收额',
            type: 'line',
            smooth: true,
            showSymbol: false,
            areaStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'RGBA(0,119,179,1)',
                    },
                    {
                      offset: 1,
                      color: 'RGBA(0,119,179,0)',
                    },
                  ],
                  globalCoord: false,
                },
              },
            },
            showSymbol: true,
            symbol: 'circle',
            symbolSize: 20,
            lineStyle: {
              color: '#D9F2FF',
              width: 8,
            },
            itemStyle: {
              color: '#D9F2FF',
            },
            data: this.state.yData,
          },
        ],
      };
    } else {
      option = {
        color: ['#0580F2', '#8C64FA'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        legend: {
          show: true,
          icon: 'circle',
          right: 25,
          top: 15,
          itemWidth: 8,
          itemHeight: 8,
          textStyle: {
            fontSize: 12,
            color: '#333333',
          },
          data: ['营收企业数', '营收额'],
        },
        grid: {
          left: '60',
          right: '5%',
          bottom: '10%',
          top: '5%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisTick: {
              show: true,
            },
            axisLine: {
              show: true,
            },
            axisLabel: {
              textStyle: {
                fontSize: 54,
                color: '#E6F7FF',
              },
            },
            data: this.state.x,
          },
        ],
        yAxis: [
          {
            name: '营收(亿元)',
            show: true,
            type: 'value',
            axisTick: {
              show: true,
              alignWithLabel: true,
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
            axisLabel: {
              textStyle: {
                fontSize: 34,
                color: 'rgba(173,227,255,1)',
              },
            },
          },
        ],
        series: [
          {
            name: '营收额',
            type: 'line',
            smooth: true,
            showSymbol: false,
            areaStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'RGBA(0,119,179,1)',
                    },
                    {
                      offset: 1,
                      color: 'RGBA(0,119,179,0)',
                    },
                  ],
                  globalCoord: false,
                },
              },
            },
            showSymbol: true,
            symbol: 'circle',
            symbolSize: 20,
            lineStyle: {
              color: '#D9F2FF',
              width: 8,
            },
            itemStyle: {
              color: '#D9F2FF',
            },
            data: this.state.yDataY,
          },
        ],
      };
    }

    myChart.resize();
    // 绘制图表
    myChart.setOption(option);

    window.onresize = () => {
      myChart.resize();
    };
    return true;
  }
  render() {
    return <div id="line_" style={{ width: '100%', height: '100%' }} />;
  }
}
