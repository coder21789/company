import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
// 引入 ECharts 主模块
// 引入柱状图
import 'echarts/lib/chart/bar';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

// 绘制经济构成分析图
const drawbar2Chart = areaAnalyzeData => {
  // const xData = trendAnalyzeList.map(v => v.statDate.toString());
  const data = areaAnalyzeData.map(v => v.areaCount);
  const xData = areaAnalyzeData.map(v => v.areaName);
  const series = [
    {
      type: 'bar',
      barWidth: 14,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#35BEFA',
            },
            {
              offset: 1,
              color: '#1889F2',
            },
          ]),
        },
      },
      data,
    },
  ];

  const myChart = echarts.init(document.querySelector('#bar2Chart'));

  const option = {
    color: ['#004cad', '#2c8cff', '#f5a623'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
      backgroundColor: 'rgba(245, 245, 245, 0.8)',
      textStyle: {
        fontSize: 12,
        color: '#333333',
      },
      padding: 10,
    },
    legend: {
      show: false,
    },
    grid: {
      left: '2%',
      right: '4%',
      top: '7%',
      bottom: '6%',
      containLabel: true,
    },
    xAxis: [
      {
        show: true,
        type: 'category',
        data: xData,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        nameTextStyle: {
          fontSize: 14,
        },
        axisLabel: {
          show: true,
          rotate: 45,
        },
      },
    ],
    yAxis: [
      {
        show: true,
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

  // document.querySelector('#barChart').style.width = `${document.body.clientWidth - 160}px`;
  myChart.resize();
  myChart.setOption(option);

  return myChart;
};

export default class Bar extends Component {
  componentDidMount() {
    const { areaAnalyzeData } = this.props;
    drawbar2Chart(areaAnalyzeData);
  }

  shouldComponentUpdate(param) {
    const { areaAnalyzeData } = param;
    drawbar2Chart(areaAnalyzeData);
    return true;
  }

  render() {
    return <div id="bar2Chart" style={{ width: '100%', height: '300px' }} />;
  }
}
