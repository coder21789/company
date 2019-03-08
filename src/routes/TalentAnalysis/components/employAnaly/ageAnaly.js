import React from 'react';
import Bind from 'lodash-decorators/bind';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

export default class OBar extends React.Component {
  // 组件挂载之后
  componentDidMount() {
    this.bindReSize();
    window.addEventListener('resize', this.bindReSize);
  }

  // 数据更新
  shouldComponentUpdate() {
    this.bindReSize();
    return true;
  }

  // 组件销毁之前
  componentWillUnmount() {
    window.removeEventListener('resize', this.bindReSize);
  }

  @Bind()
  bindReSize() {
    const ageAnaly = this.ageBarChart();
    ageAnaly.resize();
  }

  ageBarChart() {
    const { ageAnaDo } = this.props;
    const ageScop = [];
    const ageScopProp = [];
    const ageScopCnt = [];
    const lastAgeScopCnt = [];
    for (let i = 0; i < ageAnaDo.length; i += 1) {
      const item = ageAnaDo[i];
      ageScop.push(item.ageScop);
      ageScopProp.push(item.ageScopProp);
      ageScopCnt.push(item.ageScopCnt);
      lastAgeScopCnt.push(`-${item.lastAgeScopCnt}`);
    }
    const myChart = echarts.init(document.querySelector('#ageBarChart'));
    const option = {
      backgroundColor: '#fff',
      title: [
        // {
        //   text: '年龄段',
        //   top: '8%',
        //   left: '6%',
        //   textStyle: {
        //     fontSize: 14,
        //     color: '#333',
        //   },
        // },
        {
          text: '占比差值',
          top: '8%',
          right: '2%',
          textStyle: {
            fontSize: 14,
            color: '#333',
          },
        },
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: false,
        },
        formatter: params => {
          let str = '';
          for (const i of params) {
            if (i.data === '-' || i.data === null) {
              str += `${i.seriesName}:  ---<br/>`;
            } else {
              str += `${i.seriesName}:  ${Math.abs(i.data)}<br/>`;
            }
          }
          return str;
        },
        padding: [12, 14],
        backgroundColor: '#F7F7F7',
        textStyle: {
          color: '#333',
        },
      },
      legend: {
        top: 12,
        itemGap: 10,
        itemWidth: 10,
        itemHeight: 10,
        data: ['2017年', '2018年'],
      },
      color: ['#26B3BF', '#8F4DBF'],
      grid: {
        x: 50,
        x2: 30,
        y2: 5,
        containLabel: true,
      },
      xAxis: {
        show: true,
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#ccc',
          },
        },
        axisLabel: {
          formatter: value => {
            return Math.abs(value);
          },
          textStyle: {
            color: '#666',
          },
        },
      },
      yAxis: [
        {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#ccc',
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: true,
            interval: '0',
            textStyle: {
              fontSize: 12,
              color: '#687284',
            },
          },
          data: ageScop,
        },
        {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#ccc',
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 12,
              color: value => {
                return value === '-1.35%' ? '#EB5252' : '#5EBF26';
              },
            },
          },
          data: ageScopProp,
        },
      ],
      series: [
        {
          name: '2017年',
          type: 'bar',
          barWidth: 20,
          stack: '总量',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: '#26B3BF',
                },
                {
                  offset: 1,
                  color: '#7ED2D9',
                },
              ]),
            },
          },
          data: ageScopCnt,
        },
        {
          name: '2018年',
          type: 'bar',
          barWidth: 20,
          stack: '总量',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: '#D3A6F9',
                },
                {
                  offset: 1,
                  color: '#8F4DBF',
                },
              ]),
            },
          },
          yAxisIndex: 1,
          data: lastAgeScopCnt,
        },
      ],
    };
    myChart.resize();
    myChart.setOption(option);

    return myChart;
  }

  render() {
    return <div id="ageBarChart" style={{ width: '100%', height: '468px' }} />;
  }
}
