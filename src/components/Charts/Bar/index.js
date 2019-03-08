import React, { Component } from 'react';
import numeral from 'numeral';
import echarts from 'echarts/lib/echarts';
import { dataFormate } from '../../../utils/utils';
// 引入 ECharts 主模块
// 引入柱状图
import 'echarts/lib/chart/bar';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

// 绘制经济构成分析图
const drawbarChart = (trendAnalyzeList, dataTypeId) => {
  const data = trendAnalyzeList.map(v => {
    let value = 0;
    switch (dataTypeId) {
      case 1:
        value = v.content * 1;
        break;
      case 2:
        value = v.content * 1;
        break;
      case 3:
        value = (v.content / 10000).toFixed(2) * 1;
        break;
      case 4:
        value = (v.content / 10000).toFixed(2) * 1;
        break;
      default:
        break;
    }
    return {
      name: `${v.statDate.toString().slice(0, 4)}-${v.statDate.toString().slice(4, 6)}`,
      value,
    };
  });
  const min = Math.round(
    data.reduce((a, b) => (a > b.value ? b.value : a), 1000000000000000000) * 0.9
  );
  const max = Math.round(
    data.reduce((a, b) => (a > b.value ? a : b.value), -9999999999999999999) * 1.02
  );
  const interval = (max - min) / 6;
  const xData = trendAnalyzeList.map(v => v.statDate.toString());
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

  const myChart = echarts.init(document.querySelector('#singleBarChart'));

  const option = {
    color: ['#004cad', '#2c8cff', '#f5a623'],
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
      formatter: param => {
        const rs = param[0].value;
        let showRs = `<span style='display: inline-block;width:100%;text-align:left;'>${
          param[0].name
        }</span><br/>`;
        switch (dataTypeId) {
          case 1:
            showRs += `企业数：${dataFormate(rs, 'int')}`;
            break;
          case 2:
            showRs += `就业人数：${dataFormate(rs, 'int')}`;
            break;
          case 3:
            showRs += `营收：${dataFormate(rs, 'double')}`;
            break;
          case 4:
            showRs += `税收：${dataFormate(rs, 'double')}`;
            break;
          default:
            break;
        }
        return showRs;
      },
    },
    // legend: {
    //   show: false,
    // },
    grid: {
      left: '1%',
      right: '2%',
      top: '7%',
      bottom: '6%',
      containLabel: true,
    },
    xAxis: [
      {
        show: true,
        avoidLabelOverlap: false,
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
          formatter: param => {
            if (param.length === 6) {
              return `${param.slice(0, 4)}-${param.slice(4, 6)}`;
            }
            return param;
          },
        },
      },
    ],
    yAxis: [
      {
        show: true,
        type: 'value',
        min,
        max,
        interval,
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#485465',
          },
          formatter: param => {
            return numeral(param).format('0,0');
          },
        },
        axisLine: {
          lineStyle: {
            color: '#eeeeee',
          },
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
    const { trendAnalyzeList, dataTypeId } = this.props;
    drawbarChart(trendAnalyzeList, dataTypeId);
  }

  shouldComponentUpdate(param) {
    const { trendAnalyzeList, dataTypeId } = param;
    drawbarChart(trendAnalyzeList, dataTypeId);
    return true;
  }

  render() {
    return <div id="singleBarChart" style={{ width: '100%', height: '300px' }} />;
  }
}
