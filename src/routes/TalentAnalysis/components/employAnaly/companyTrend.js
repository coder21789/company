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

  // 绘制经济构成分析图;
  drawlineChart() {
    const { talnetTrendData } = this.props;
    const lossEmpCnt = [];
    const statDate = [];
    const newEmpCnt = [];
    const ynyIncrease = [];
    for (let i = 0; i < talnetTrendData.length; i += 1) {
      const item = talnetTrendData[i];
      const str = item.statDate.toString();
      lossEmpCnt.push(item.lossEmpCnt);
      statDate.push(`${str.substr(0, 4)}-${str.substr(4, 6)}`);
      newEmpCnt.push(item.newEmpCnt);
      ynyIncrease.push(item.ynyIncrease);
    }
    const myChart = echarts.init(document.querySelector('#lineChart'));
    const option = {
      color: ['#1889F2', '#FA8F32', '#EB5252'],

      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          opacity: 0.05,
          shadowStyle: {
            color: 'rgba(0, 0, 0, 0.05)',
          },
        },
        // formatter: params => {
        //   let rs = '';
        //   if (params && params.length > 0) {
        //     rs += `${params[0].name}<br/>`;
        //     for (const item of params) {
        //       rs += `${item.marker}${item.seriesName}：${item.value || '--'}<br/>`;
        //     }
        //   }
        //   return rs;
        // },
        padding: [12, 14],
        backgroundColor: '#F7F7F7',
        textStyle: {
          color: '#333',
        },
      },
      grid: {
        left: '3%',
        right: '5%',
        top: '25%',
        bottom: '6%',
        containLabel: true,
      },
      legend: {
        right: 30,
        top: 0,
        icon: 'circle',
        itemWidth: 8,
        textStyle: {
          fontSize: 12,
          color: '#333333',
        },
        data: ['新增就业人数', '流失就业人数', '就业人数同比增幅'],
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
          data: statDate,
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '人数(人)',
          nameLocation: 'end',
          nameTextStyle: {
            fontSize: 12,
            color: 'rgba(0,0,0,0.65)',
            padding: [0, 15, 0, 0],
          },
          position: 'left',
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
        {
          type: 'value',
          name: '同比增幅',
          nameLocation: 'end',
          nameTextStyle: {
            color: 'rgba(0,0,0,0.65)',
            fontSize: 12,
            padding: [0, 0, 0, 30],
          },
          position: 'right',
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
      ],
      series: [
        {
          name: '新增就业人数',
          type: 'bar',
          barWidth: 14,
          data: newEmpCnt,
          itemStyle: {
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
                    color: '#35BEFA',
                  },
                  {
                    offset: 1,
                    color: '#1889F2',
                  },
                ],
              },
            },
          },
        },
        {
          name: '流失就业人数',
          type: 'bar',
          barWidth: 14,
          data: lossEmpCnt,
          itemStyle: {
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
                    color: '#FDC261',
                  },
                  {
                    offset: 1,
                    color: '#FA8F32',
                  },
                ],
                globalCoord: false,
              },
            },
          },
        },
        {
          name: '就业人数同比增幅',
          type: 'line',
          smooth: false,
          showSymbol: false,
          yAxisIndex: 1,
          data: ynyIncrease || '',
          itemStyle: {
            normal: {
              color: '#EB5252',
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
    return <div id="lineChart" style={{ width: '100%', height: '260px' }} />;
  }
}
