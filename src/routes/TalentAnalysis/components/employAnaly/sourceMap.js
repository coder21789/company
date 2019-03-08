import React from 'react';
import Bind from 'lodash-decorators/bind';
// 引入Echarts主模块
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/lines';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/map/js/china.js';
import geoCoordMap from './mapCount.js';

// const biaojiData = data => {
//   const res = [];
//   for (let i = 0; i < data.length; i += 1) {
//     const geoCoord = geoCoordMap[data[i].name];
//     if (geoCoord) {
//       res.push({
//         name: data[i].name,
//         value: geoCoord.concat(data[i].value),
//       });
//     }
//   }
//   return res;
// };
const planePath =
  'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
const convertData = data => {
  const res = [];
  for (let i = 0; i < data.length; i += 1) {
    const dataItem = data[i];
    const fromCoord = geoCoordMap[dataItem[0].name];
    const toCoord = geoCoordMap[dataItem[1].name];
    if (fromCoord && toCoord) {
      res.push({
        fromName: dataItem[0].name,
        toName: dataItem[1].name,
        coords: [fromCoord, toCoord],
        value: dataItem[0].value,
      });
    }
  }
  return res;
};

export default class OMap extends React.Component {
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
    const sourceMap = this.sourceMapChart();
    sourceMap.resize();
  }
  /* eslint-disable */
  sourceMapChart() {
    const { sourceAnaDo } = this.props;
    const Xdata = sourceAnaDo.map(v => {
      return [
        {
          name: v.province,
          value: v.provinceTalentCnt,
        },
        { name: '浙江' },
      ];
    });
    const series = [];
    [['浙江', Xdata]].forEach((item, i) => {
      series.push(
        // 飞机飞过的痕迹
        {
          name: `${item[i]}Top10`,
          type: 'lines',
          zlevel: 1,
          effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3,
          },
          lineStyle: {
            normal: {
              color: '#fff',
              width: 0,
              curveness: 0.2,
            },
          },
          data: convertData(item[1]),
        },
        // 线和箭头
        {
          type: 'lines',
          zlevel: 2,
          symbol: ['none', 'arrow'],
          // 指向箭头的大小
          symbolSize: 10,
          effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            // 飞机的大小
            symbolSize: 15,
          },
          // 线的颜色
          lineStyle: {
            normal: {
              color: 'rgba(166, 200, 76, 50)',
              width: 1,
              opacity: 0.6,
              curveness: 0.2,
            },
          },
          data: convertData(item[1]),
        },
        // 小城市的标注
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            brushType: 'stroke',
          },
          //  小城市旁边的标注
          label: {
            normal: {
              show: true,
              position: 'right',
              formatter: '{b}',
            },
          },
          itemStyle: {
            normal: {
              color: '#A6C84C',
            },
          },
          //  获取到name和value标注城市的位置fs
          data: item[1].map(dataItem => {
            const geoCoord = geoCoordMap[dataItem[0].name] || '';
            // geoCoord为undefined,数组字母不匹配问题
            return {
              name: dataItem[0].name,
              value: geoCoord.concat(dataItem[0].value),
            };
          }),
        }
      );
    });

    const myChart = echarts.init(document.querySelector('#MapChart'));

    const option = {
      tooltip: {
        show: false,
        trigger: 'item',
      },
      geo: {
        map: 'china',
        // 鼠标经过地图的样式
        label: {
          emphasis: {
            show: true,
          },
        },
        // 控制鼠标的缩放
        roam: false,
        // 地图的背景颜色和线条
        itemStyle: {
          normal: {
            areaColor: 'rgb(0, 72, 129)',
            borderColor: '#01A0D4',
          },
          emphasis: {
            areaColor: '#FA8F32',
          },
        },
      },
      series: series,
    };
    myChart.resize();
    myChart.setOption(option);

    return myChart;
  }

  render() {
    return <div id="MapChart" style={{ width: '100%', height: '468px' }} />;
  }
}
