import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

export default class MiddleL extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(props) {
    console.log(props, '111111111111111');
    const myChart = echarts.init(document.querySelector(`#${this.props.id}`));
    const option = {
      color: ['#D9F7FF', '#69CEFF', '#2271BF'],
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: {
            show: true,
            type: ['pie', 'funnel'],
          },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      calculable: true,
      series: [
        {
          name: '面积模式',
          type: 'pie',
          radius: ['80', '140'],
          center: ['50%', '45%'],
          label: {
            fontSize: 30,
            show: true,
            formatter: '{b}\n{c}',
          },
          data: props.propsData,
        },
      ],
    };

    myChart.resize();
    // 绘制图表
    myChart.setOption(option);

    window.onresize = () => {
      myChart.resize();
    };
  }
  render() {
    return <div id={this.props.id} style={{ width: '100%', height: '100%' }} />;
  }
}
