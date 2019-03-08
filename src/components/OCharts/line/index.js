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
    const { listTalentsCountData } = this.props;
    // const data1 = listTalentsCountData.filter(v => v.stat_date.substring(0, 4));

    const data1 = new Array(12);
    const data2 = new Array(12);
    const legend = [];
    for (let i = 0; i < listTalentsCountData.length; i += 1) {
      const item = listTalentsCountData[i];
      const year = item.stat_date.toString().substring(0, 4);
      const month = item.stat_date.toString().substring(4, 6);
      if (i < 12) {
        data1[month * 1.0 - 1] = item.count;
        legend[0] = year;
      } else {
        data2[month * 1.0 - 1] = item.count;
        legend[1] = year;
      }
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
          let rs = '';
          if (params && params.length > 0) {
            rs += `${params[0].name.replace('\n', '')}人才数<br/>`;
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
        left: '5%',
        right: '6%',
        top: '14%',
        bottom: '6%',
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
        data: [
          '一\n月',
          '二\n月',
          '三\n月',
          '四\n月',
          '五\n月',
          '六\n月',
          '七\n月',
          '八\n月',
          '九\n月',
          '十\n月',
          '十一\n月',
          '十二\n月',
        ],
      },
      yAxis: {
        show: true,
        type: 'value',
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
