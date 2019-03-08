import React, { Component } from 'react';
import Bind from 'lodash-decorators/bind';

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';

import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

export default class OLine extends Component {
  componentDidMount() {
    this.bindReSize();

    window.addEventListener('resize', this.bindReSize);
  }

  shouldComponentUpdate() {
    this.bindReSize();

    return true;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.bindReSize);
  }

  @Bind()
  bindReSize() {
    const ecnoGrowthChart = this.drawlineChart();
    ecnoGrowthChart.resize();
  }

  drawlineChart() {
    const { demandTrendData } = this.props;
    const xData = [];
    const demandCompanyCnt = [];
    const demandCnt = [];
    for (let i = 0; i < demandTrendData.length; i += 1) {
      const item = demandTrendData[i];
      const str = item.statDate.toString();
      // 不改变原先的数组，
      xData.push(`${str.slice(0, 4)}-${str.slice(4, 6)}-${str.slice(-2)}`);
      demandCompanyCnt.push(item.demandCompanyCnt);
      demandCnt.push(item.demandCnt);
    }
    const myChart = echarts.init(document.querySelector('#trendlineChart'));
    const option = {
      color: ['#FA8F32', '#1889F2'],
      tooltip: {
        show: true,
        // item鼠标移入触发，axis用于有坐标轴的
        trigger: 'axis',
        padding: [12, 14],
        backgroundColor: '#F7F7F7',
        textStyle: {
          color: '#333',
        },
      },
      grid: {
        left: '3%',
        right: '5%',
        top: '20%',
        bottom: '6%',
        containLabel: true,
      },
      legend: {
        top: -6,
        right: 20,
        icon: 'circle',
        itemWidth: 8,
        textStyle: {
          fontSize: 12,
          color: '#666',
        },
        data: ['发布次数', '发布企业数'],
      },
      xAxis: [
        {
          type: 'category',
          avoidLabelOverlap: false,
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: '#DCDEE3',
            },
          },
          axisLabel: {
            textStyle: {
              color: '#999',
            },
          },
          data: xData,
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '发布次数',
          position: 'right',
          nameTextStyle: {
            fontSize: 12,
            color: 'rgba(0,0,0,0.65)',
            padding: [0, 0, 0, 50],
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              color: '#F2F3F7',
            },
          },
          axisLabel: {
            textStyle: {
              color: '#999',
            },
          },
        },
        {
          type: 'value',
          name: '发布企业数',
          position: 'left',
          nameTextStyle: {
            fontSize: 12,
            color: 'rgba(0,0,0,0.65)',
            padding: [0, 20, 0, 0],
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: '#999',
            },
          },
        },
      ],
      series: [
        {
          name: '发布次数',
          type: 'line',
          smooth: false,
          showSymbol: false,
          // symbol: 'circle',
          // symbolSize: [5, 5],
          yAxisIndex: 0,
          data: demandCnt,
          // 折线的颜色
          itemStyle: {
            normal: {
              color: '#1889F2',
            },
          },
        },
        {
          name: '发布企业数',
          type: 'line',
          smooth: false,
          showSymbol: false,
          // symbol: 'circle',
          // symbolSize: 5,
          yAxisIndex: 1,
          data: demandCompanyCnt,
          itemStyle: {
            normal: {
              color: '#FA8F32',
            },
          },
        },
      ],
    };

    myChart.resize();
    myChart.setOption(option);

    return myChart;
  }

  render() {
    return <div id="trendlineChart" style={{ width: '100%', height: '260px' }} />;
  }
}
