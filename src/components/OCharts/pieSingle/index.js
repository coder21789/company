import React, { Component } from 'react';
import Bind from 'lodash-decorators/bind';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/pie';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

// import styles from './index.less';

export default class PieSingle extends Component {
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
    const comGrowthChart = this.drawPieSingleChart();
    comGrowthChart.resize();
  }

  // 绘制经济构成分析图
  drawPieSingleChart() {
    const { educationAnalyzeData } = this.props;

    const myChart = echarts.init(document.querySelector('#pieSingleChart'));

    let data = [];
    if (educationAnalyzeData) {
      data = educationAnalyzeData.map(v => {
        return {
          name: v.educationName,
          value: v.educationCount,
        };
      });
    }

    const series = [
      {
        type: 'pie',
        radius: ['55%', '75%'],
        avoidLabelOverlap: true,
        startAngle: 90,
        label: {
          normal: {
            position: 'outside',
            formatter: '{b}: {d}%',
            textStyle: {
              color: '',
              fontSize: 12,
            },
          },
        },
        labelLine: {
          normal: {
            show: true,
            length: 8,
            length2: 8,
          },
        },
        data,
      },
    ];

    const option = {
      color: ['#8BC4F8', '#FA8F32', '#26B2BF', '#8F4DBF'],
      tooltip: {
        show: true,
        trigger: 'item',
        formatter: params => {
          if (params) {
            return `${params.marker}${params.name}<br/>
                    人数：${params.value}<br/>
                    占比：${params.percent}%`;
          } else {
            return `${params.marker}${params.name}<br/>
                  人数：- <br/>
                  占比：-`;
          }
        },
        padding: [12, 14],
        backgroundColor: '#F7F7F7',
        textStyle: {
          color: '#333333',
        },
      },
      series,
    };

    // document.querySelector('#pieSingleChart').style.width = `${document.body.clientWidth -
    //   180 -
    //   80}px`;
    myChart.resize();
    myChart.setOption(option);

    return myChart;
  }

  render() {
    return <div id="pieSingleChart" style={{ width: '100%', height: '300px' }} />;
  }
}
