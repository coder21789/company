import React from 'react';
import Bind from 'lodash-decorators/bind';
import echarts from 'echarts/lib/echarts';
import 'echarts-wordcloud/dist/echarts-wordcloud.min.js';

export default class HotWordCloud extends React.Component {
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
    const variousInstryChart = this.talentTrend();
    variousInstryChart.resize();
  }

  talentTrend() {
    const { getListHotIndustryData } = this.props;
    const XData = getListHotIndustryData.map(v => {
      return {
        name: v.industryName,
        value: v.hotTop,
      };
    });
    const myCharts = echarts.init(document.querySelector('#IndEmergCould'));

    const option = {
      series: [
        {
          type: 'wordCloud',
          // shape: 'squary',
          left: 'center',
          top: 'center',
          // 画布的宽和高
          width: '100%',
          height: '95%',
          right: null,
          bottom: null,
          rotationStep: 50,
          // 字符之间的间距
          gridSize: 30,
          // 字符的范围
          sizeRange: [14, 24],
          // 字符倾斜的角度
          rotationRange: [0, 0],
          drawOutOfBound: false,
          textStyle: {
            normal: {
              fontFamily: 'PingFangSC-Regular',
              color: parmas => {
                if (parmas.dataIndex < 3) {
                  return '#1889F2';
                } else if (parmas.dataIndex > 3 && parmas.dataIndex < 7) {
                  return '#45A0F3';
                } else {
                  return '#333';
                }
              },
            },
          },
          data: XData,
        },
      ],
    };
    myCharts.resize();
    myCharts.setOption(option);
    return myCharts;
  }

  render() {
    return (
      <div id="IndEmergCould" style={{ width: '100%', height: '273px', background: '#FAFAFA' }} />
    );
  }
}
