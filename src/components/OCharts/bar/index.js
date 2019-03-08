import React, { Component } from 'react';
import Bind from 'lodash-decorators/bind';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

// 绘制经济构成分析图
const drawbarChart = (legend, data1, data2, xData, yName, xName, tooltipExtra = {}) => {
  // if (legend.length > 2) {
  const series = [
    {
      name: legend[0] || [],
      type: 'bar',
      barWidth: 14,
      // itemStyle: {
      //   normal: {
      //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      //       {
      //         offset: 0,
      //         color: '#35BEFA',
      //       },
      //       {
      //         offset: 1,
      //         color: '#1889F2',
      //       },
      //     ]),
      //   },
      // },
      data: data1,
    },
    {
      name: legend[1] || [],
      type: 'bar',
      barWidth: 14,
      // itemStyle: {
      //   normal: {
      //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      //       {
      //         offset: 0,
      //         color: '#FDC261',
      //       },
      //       {
      //         offset: 1,
      //         color: '#FA8F32',
      //       },
      //     ]),
      //   },
      // },
      data: data2,
    },
  ];
  // }

  const myChart = echarts.init(document.querySelector('#barChart'));

  const option = {
    color: ['#1889F2', '#FA8F32'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        opacity: 0.05,
        shadowStyle: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      backgroundColor: 'rgba(245, 245, 245, 0.8)',
      textStyle: {
        fontSize: 12,
        color: '#333333',
      },
      padding: 10,
      ...(Object.keys(tooltipExtra).length ? tooltipExtra : {}),
    },
    legend: {
      show: true,
      // color: ['#1889F2', '#FA8F32'],
      icon: 'circle',
      right: 20,
      top: 16,
      itemWidth: 10,
      // itemHeight: 8,
      textStyle: {
        fontSize: 12,
        color: '#333333',
      },
      data: legend,
    },
    grid: {
      left: 5,
      right: 10,
      top: '25%',
      bottom: '6%',
      containLabel: true,
    },
    xAxis: [
      {
        show: true,
        name: xName || '',
        nameTextStyle: {
          fontSize: 12,
          color: 'rgba(0,0,0,0.65)',
        },
        avoidLabelOverlap: false,
        type: 'category',
        data: xData,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        show: true,
        name: yName || '',
        nameGap: 30,
        nameTextStyle: {
          fontSize: 12,
          align: 'left',
          color: 'rgba(0,0,0,0.65)',
          fontFamily: 'PingFangSC-Regular',
          fontWeight: 400,
        },
        scale: true,
        type: 'value',
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#485465',
          },
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#eeeeee',
          },
        },
      },
    ],
    series,
  };

  myChart.resize();
  myChart.setOption(option);

  return myChart;
};

export default class Obar extends Component {
  componentDidMount() {
    this.bindReSize();
    window.addEventListener('resize', this.bindReSize);
  }

  shouldComponentUpdate(param) {
    const { legend, data1, data2, xData, yName, xName, tooltipExtra } = param;
    drawbarChart(legend, data1, data2, xData, yName, xName, tooltipExtra);

    return true;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.bindReSize);
  }

  @Bind()
  bindReSize() {
    const { legend, data1, data2, xData, yName, xName, tooltipExtra } = this.props;
    const ecnoGrowthChart = drawbarChart(legend, data1, data2, xData, yName, xName, tooltipExtra);
    ecnoGrowthChart.resize();
  }

  render() {
    return <div id="barChart" style={{ width: '100%', height: '300px' }} />;
  }
}
