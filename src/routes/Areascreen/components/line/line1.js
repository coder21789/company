import React, { Component } from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/line';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

const getArray = arrayStr => {
  if (arrayStr && arrayStr.length > 0) {
    return arrayStr.map(v => v.amount);
  } else {
    return [];
  }
};

export default class OLine extends Component {
  componentDidMount() {
    this.drawChart();
  }

  shouldComponentUpdate() {
    this.drawChart();
    return true;
  }

  // 绘制所有图
  drawChart() {
    const ecnoGrowthChart = this.drawlineChart();

    window.addEventListener('resize', () => {
      ecnoGrowthChart.resize();
    });
  }

  // 绘制经济构成分析图
  drawlineChart() {
    const { revenue } = this.props;
    const { infoEconomy, highEquipment, fashion, travel, culture, financial, health } = revenue;
    const xData = infoEconomy.map(v => v.statDate);

    const series = [
      {
        name: '数字信息',
        type: 'line',
        showSymbol: false,
        lineStyle: {
          width: 6,
        },
        data: getArray(infoEconomy),
      },
      {
        name: '高端制造',
        type: 'line',
        showSymbol: false,
        lineStyle: {
          width: 6,
        },
        data: getArray(highEquipment),
      },
      {
        name: '时尚',
        type: 'line',
        showSymbol: false,
        lineStyle: {
          width: 6,
        },
        data: getArray(fashion),
      },
      {
        name: '旅游',
        type: 'line',
        showSymbol: false,
        lineStyle: {
          width: 6,
        },
        data: getArray(travel),
      },
      {
        name: '文化创意',
        type: 'line',
        showSymbol: false,
        lineStyle: {
          width: 6,
        },
        data: getArray(culture),
      },
      {
        name: '金融服务',
        type: 'line',
        showSymbol: false,
        lineStyle: {
          width: 6,
        },
        data: getArray(financial),
      },
      {
        name: '生物健康',
        type: 'line',
        showSymbol: false,
        lineStyle: {
          width: 6,
        },
        data: getArray(health),
      },
    ];

    const myChart = echarts.init(document.querySelector('#lineChart'));

    const option = {
      color: ['#7DF5FF', '#FF6D7D', '#69DF8B', '#7CAAF8', '#F8DF80', '#FF9647', '#9D62E0'],
      grid: {
        left: '2%',
        right: '6%',
        top: '13%',
        bottom: '3%',
        containLabel: true,
      },
      legend: {
        show: true,
        icon: 'rect',
        right: 60,
        itemWidth: 32,
        itemHeight: 32,
        textStyle: {
          fontSize: 32,
          color: '#ADE3FF',
        },
        data: ['数字信息', '高端制造', '金融服务', '文化创意', '生物健康', '时尚', '旅游'],
      },
      xAxis: {
        show: true,
        type: 'category',
        boundaryGap: false,
        avoidLabelOverlap: true,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#CCEEFF',
            width: 6,
          },
        },
        axisLabel: {
          textStyle: {
            fontSize: 54,
            color: '#E6F7FF',
            shadowBlur: 4,
            shadowColor: '#33BBFF',
          },
        },
        data: xData,
      },
      yAxis: {
        name: '营收',
        nameTextStyle: {
          fontSize: 36,
          // left: -20,
          color: '#ADE3FF',
        },
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
            color: 'rgba(204,238,255,0.1)',
            width: 3,
          },
        },
        axisLabel: {
          textStyle: {
            fontSize: 34,
            color: '#ADE3FF',
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
    return <div id="lineChart" style={{ width: '100%', height: '100%' }} />;
  }
}
