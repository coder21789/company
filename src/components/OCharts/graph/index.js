import React, { Component } from 'react';
import Bind from 'lodash-decorators/bind';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/tree';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

// 绘制经济构成分析图
const drawGraphChart = (listCompanyMapData, companyName) => {
  // return 1;
  const myChart = echarts.init(document.querySelector('#graphChart'));
  // const {} = listCompanyMapData;
  const children = [];
  Object.keys(listCompanyMapData).forEach(key => {
    const item = listCompanyMapData[key];
    if (item.length > 0) {
      children.push({
        name: item[0].postName || '',
        children: item.map(v => {
          return {
            name: v.content,
            value: 10,
          };
        }),
      });
    }
  });
  const data =
    children.length > 0
      ? [
          {
            name: companyName,
            children,
          },
        ]
      : [];
  const option = {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove',
    },
    series: [
      {
        type: 'tree',
        data,
        top: '18%',
        bottom: '14%',
        layout: 'radial',
        symbol: 'emptyCircle',
        symbolSize: 7,
        initialTreeDepth: 3,
        animationDurationUpdate: 750,
      },
    ],
  };

  myChart.resize();
  myChart.setOption(option);

  return myChart;
};

export default class Graph extends Component {
  componentDidMount() {
    this.bindReSize();
    window.addEventListener('resize', this.bindReSize);
  }

  shouldComponentUpdate(param) {
    const { listCompanyMapData, companyName } = param;
    drawGraphChart(listCompanyMapData, companyName);
    return true;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.bindReSize);
  }

  @Bind()
  bindReSize() {
    const { listCompanyMapData, companyName } = this.props;
    const ecnoGrowthChart = drawGraphChart(listCompanyMapData, companyName);
    ecnoGrowthChart.resize();
  }

  render() {
    return <div id="graphChart" style={{ width: '100%', height: '460px' }} />;
  }
}
