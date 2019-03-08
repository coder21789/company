import React from 'react';
import Bind from 'lodash-decorators/bind';
import _ from 'lodash';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/tree';

export default class OTree extends React.Component {
  // state = {
  //   demandIndustryData: {name:'余杭区', demandCnt: '---'}
  // }
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
  /* eslint-disable */
  getData(tree) {
    for (const v in _.cloneDeep(tree)) {
      if (Object.prototype.hasOwnProperty.call(_.cloneDeep(tree), 'industryRes')) {
        return {
          name: `${tree.name && tree.name}: ${tree.demandCnt && tree.demandCnt}`,
          children: this.deep(_.cloneDeep(tree.industryRes)),
        };
      }
      return {
        name: `${tree.name && tree.name}: ${tree.demandCnt && tree.demandCnt}`,
      };
    }
    return tree;
  }

  deep(data) {
    data.forEach(e => {
      if (Object.prototype.hasOwnProperty.call(e, 'industryList')) {
        e.children = e.industryList;
        e.name = `${e.name && e.name}:${e.demandCnt && e.demandCnt}`;
        delete e.industryList;
        delete e.demandCnt;
        this.deep(e.children);
      } else {
        e.name = `${e.name && e.name}:${e.demandCnt && e.demandCnt}`;
        delete e.demandCnt;
      }
    });
    return data;
  }

  @Bind()
  bindReSize() {
    const variousInstryChart = this.variousInstry();
    variousInstryChart.resize();
  }

  variousInstry() {
    // let { demandIndustryData } = this.state;
    const { demandIndustryData } = this.props;

    const data1 = this.getData(demandIndustryData);
    const myCharts = echarts.init(document.querySelector('#variousOTree'));
    const option = {
      series: [
        {
          type: 'tree',
          name: 'tree2',
          data: [data1],
          top: '10%',
          bottom: '10%',
          right: '25%',
          left: '7%',
          symbolSize: 8,
          symbol: 'circle',
          // 展开发的层级数
          initialTreeDepth: 10,
          itemStyle: {
            color: '#9D85FB',
            borderColor: '#9D85FB',
          },
          label: {
            normal: {
              position: 'bottom',
              verticalAlign: 'middle',
              align: 'center',
              // offset: [0, 10]
              // padding:[10, 30]
            },
          },
          // 线的样式
          lineStyle: {
            color: '#9D85FB',
            curveness: '0.5',
          },
          leaves: {
            label: {
              normal: {
                // 叶子节点字的样式
                position: 'right',
                verticalAlign: 'middle',
                align: 'left',
              },
            },
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750,
        },
      ],
    };
    myCharts.resize();
    myCharts.setOption(option);
    return myCharts;
  }

  render() {
    return <div id="variousOTree" style={{ width: '100%', height: '566px' }} />;
  }
}
