import React, { Component } from 'react';
import Bind from 'lodash-decorators/bind';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/line';

// 引入提示框和标题组件
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

  // 绘制经济构成分析图
  drawlineChart() {
    const { listCompanyEcoTrendData } = this.props;
    const data1 = [];
    const data2 = [];
    const xData = [];
    const legend = ['营收', '税收'];
    for (const item of listCompanyEcoTrendData) {
      data1.push((item.revenue / 10000).toFixed(2));
      data2.push((item.tax / 10000).toFixed(2));
      xData.push(`${item.statDate.toString().slice(0, 4)}-${item.statDate.toString().slice(4, 6)}`);
    }

    const series = [
      {
        name: legend[0],
        type: 'line',
        smooth: false,
        showSymbol: false,
        itemStyle: {
          emphasis: {
            symbol: 'circle',
          },
        },
        data: data1,
      },
      {
        name: legend[1],
        type: 'line',
        smooth: false,
        showSymbol: false,
        itemStyle: {
          emphasis: {
            symbol: 'circle',
          },
        },
        data: data2,
      },
    ];

    // console.log(1)
    const myChart = echarts.init(document.querySelector('#lineChart'));

    const option = {
      backgroundColor: '#ffffff',
      name: 'a',
      tooltip: {
        trigger: 'axis', // 按x轴显示
        show: true,
        formatter: params => {
          // console.log(params);
          let rs = '';
          if (params && params.length > 0) {
            rs += `${params[0].name.replace('\n', '')}<br/>`;
            for (const item of params) {
              rs += `${item.marker}${item.seriesName}：${item.value || '--'}<br/>`;
            }
          }
          return rs;
        },
        padding: [12, 14],
        backgroundColor: '#F7F7F7',
        textStyle: {
          color: '#333333',
        },
      },
      color: ['#1889F2', '#FA8F32', '#e1575d'],
      grid: {
        left: '1%',
        right: '2%',
        top: '14%',
        bottom: '0%',
        containLabel: true,
      },
      legend: {
        show: true,
        icon: 'circle',
        right: 20,
        itemWidth: 8,
        textStyle: {
          fontSize: 12,
          color: '#333333',
        },
        data: legend,
      },
      xAxis: {
        show: true,
        type: 'category',
        avoidLabelOverlap: false,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#eeeeee',
          },
        },
        axisLabel: {
          textStyle: {
            fontSize: 14,
            color: '#999999',
          },
        },
        data: xData,
      },
      yAxis: {
        show: true,
        type: 'value',
        name: '金额（万元）',
        nameGap: 20,
        nameTextStyle: {
          fontSize: 12,
          align: 'left',
          color: 'rgba(0,0,0,0.65)',
          fontFamily: 'PingFangSC-Regular',
          fontWeight: 400,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#f2f3f7',
          },
        },
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: '#999999',
          },
        },
      },
      series,
    };

    // document.querySelector('#lineChart').style.width = `${document.body.clientWidth - 180 - 80}px`;
    myChart.resize();
    myChart.setOption(option);

    return myChart;
  }

  render() {
    return <div id="lineChart" style={{ width: '100%', height: '300px' }} />;
  }
}
