import React from 'react';
import Bind from 'lodash-decorators/bind';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';

export default class OPieSalary extends React.Component {
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
    const salaryAnalyChart = this.graduaAnaly();
    salaryAnalyChart.resize();
  }

  graduaAnaly() {
    const { salaryTalent } = this.props;
    const XData = salaryTalent.map(v => {
      return {
        value: v.talentProp,
        name: v.talentSmallClassName,
      };
    });
    const myCharts = echarts.init(document.querySelector('#salaryOPieChart'));
    const option = {
      title: {
        text: '薪资水平分布',
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
        // 无类目轴，散点图，饼状图
        trigger: 'item',
        formatter: params => {
          if (params) {
            return `${params.marker}${params.name}<br/>
            占比：${params.percent}%`;
          } else {
            return `${params.marker}${params.name}<br/>
            占比: --`;
          }
        },
        padding: [12, 14],
        backgroundColor: '#F7F7F7',
        textStyle: {
          color: '#333',
        },
      },
      series: [
        {
          name: '薪资水平分布',
          type: 'pie',
          clockWise: true,
          radius: ['55%', '75%'],
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
              length: 8,
              length2: 8,
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
    return <div id="salaryOPieChart" style={{ width: '100%', height: '260px' }} />;
  }
}
