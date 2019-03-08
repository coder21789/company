import React from 'react';
import Bind from 'lodash-decorators/bind';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';

export default class OPie extends React.Component {
  // 组件加载之后
  componentDidMount() {
    this.bindReSize();
    window.addEventListener('resize', this.bindReSize);
  }

  // 数据更新
  shouldComponentUpdate() {
    this.bindReSize();
    return true;
  }

  // 组件销毁
  componentWillUnmount() {
    window.removeEventListener('resize', this.bindReSize);
  }

  @Bind()
  bindReSize() {
    const graduaAnalyChart = this.graduaAnaly();
    graduaAnalyChart.resize();
  }

  graduaAnaly() {
    const { cultureTalent } = this.props;
    const myCharts = echarts.init(document.querySelector('#graduaOPieChart'));
    const XData = cultureTalent.map(v => {
      return {
        value: v.talentProp,
        name: v.talentSmallClassName,
      };
    });
    const option = {
      title: {
        text: '文化程度分析',
        x: 'center',
        y: 'center',
        textStyle: {
          fontWeight: 'normal',
          color: '#000',
          fontSize: '16',
        },
      },
      color: ['#69BEFF', '#5EBF26', '#8F4DBF', '#26B2BF', '#EB5252', '#FA8F32', '#3095F2'],
      tooltip: {
        show: false,
        trigger: 'item',
        formatter: params => {
          if (params) {
            return `${params.marker}${params.name}<br/>
            占比：${params.percent}%`;
          } else {
            return `${params.marker}${params.name}<br/>
            占比：--`;
          }
        },
        padding: [12, 14],
        backgroundColor: '#F7F7F7',
        textStyle: {
          color: '#333333',
        },
      },
      series: [
        {
          name: '文化程度分析',
          type: 'pie',
          clockWise: true,
          radius: ['55%', '75%'],
          startAngle: 90,
          labelLine: {
            normal: {
              length: 8,
              length2: 8,
            },
          },
          label: {
            normal: {
              formatter: '{b}: {d}%',
              position: 'outside',
              textStyle: {
                color: '',
                fontSize: 12,
              },
            },
          },
          hoverAnimation: false,
          data: XData,
        },
      ],
    };
    myCharts.resize();
    myCharts.setOption(option);

    return myCharts;
  }

  render() {
    return <div id="graduaOPieChart" style={{ width: '100%', height: '260px' }} />;
  }
}
