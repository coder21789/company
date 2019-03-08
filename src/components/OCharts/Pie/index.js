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

export default class OPie extends Component {
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
    const ecnoGrowthChart = this.drawPieChart();
    ecnoGrowthChart.resize();
  }

  // 绘制经济构成分析图
  drawPieChart() {
    const { PieData, hoverName, unit } = this.props;
    const myChart = echarts.init(document.querySelector('#pieChart'));

    const center = ['16.666666666666668%', '50%', '83.33333333333334%'];
    const series = PieData.map((v, i) => {
      return {
        type: 'pie',
        center: [center[i], '50%'],
        radius: ['55%', '75%'],
        name: v.title,
        startAngle: 90,
        tooltip: {
          show: true,
          trigger: 'item',
          formatter: params => {
            if (params) {
              return `${params.marker}${params.name}<br/>
                    ${hoverName}：${params.value}${unit || ''}<br/>
                    占比：${params.percent}%`;
            } else {
              return `${params.marker}${params.name}<br/>
                  ${hoverName}：- <br/>
                  占比：-`;
            }
          },
          padding: [12, 14],
          backgroundColor: '#F7F7F7',
          textStyle: {
            color: '#333333',
          },
        },
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
        data: [
          {
            name: v.title,
            label: {
              show: true,
              color: '#000000',
              fontSize: 16,
              position: 'center',
              formatter: '{b}',
            },
          },
          ...v.data,
        ],
      };
    });
    const option = {
      color: ['#1889F2', '#FA8F32', '#69BEFF', '#26B2BF', '#8F4DBF', '#F2535A', '#5EBF26'],
      tooltip: {
        show: true,
      },
      series,
    };

    document.querySelector('#pieChart').style.width = `${document.body.clientWidth - 180 - 80}px`;
    myChart.resize();
    myChart.setOption(option);

    return myChart;
  }

  render() {
    return <div id="pieChart" style={{ width: '100%', height: '266px' }} />;
  }
}
