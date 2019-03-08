import React, { Component } from 'react';
import { Chart, Geom, Axis, Label, Shape, Util, PathUtil, Tooltip } from 'bizcharts';
// console.log(noData);

class Tree extends Component {
  state = {};

  render() {
    const { treeData } = this.props;
    // const data = [
    //   { genre: '<1星', sold: 5 },
    //   { genre: '2星', sold: 7 },
    //   { genre: '3星', sold: 10 },
    //   { genre: '4星', sold: 8 },
    //   { genre: '5星', sold: 6 },
    // ];

    // 柱状图变形
    Shape.registerShape('interval', 'smoothInterval', {
      getShapePoints(cfg) {
        const width = cfg.size;
        const { x } = cfg;
        // 最小值的点出现高度为0的情况
        const end = cfg.y === 0 ? 0.1 : cfg.y;

        // 实现层叠效果，并且多加四个控制点(1,2,4,5)来调整贝塞尔曲线的弧度
        return [
          { x: x - width, y: cfg.y0 },
          { x: x - 0.07, y: end / 3 },
          { x: x - 0.02, y: (end * 6) / 7 },
          { x: x + 0.02, y: end },
          { x: x + 0.06, y: (end * 6) / 7 },
          { x: x + 0.11, y: end / 3 },
          { x: x + width + 0.04, y: cfg.y0 },
        ];
      },
      drawShape(cfg, container) {
        // 将归一化后的数据转换为画布上的坐标
        const { points } = cfg;

        const data1 = [];
        let prePoint = null;
        const first = points[0];
        const constaint = [
          // 范围
          [0, 0],
          [1, 1],
        ];

        Util.each(points, point => {
          if (!prePoint || !(prePoint.x === point.x && prePoint.y === point.y)) {
            data1.push(point.x);
            data1.push(point.y);
            prePoint = point;
          }
        });

        const spline = PathUtil.catmullRomToBezier(data1, false, constaint);
        let path = `M${first.x} ${first.y}${PathUtil.parsePathArray(spline)}`;
        path = PathUtil.pathToAbsolute(path);
        path = this.parsePath(path, false);

        return container.addShape('path', {
          attrs: {
            fill: cfg.color || '#00D9DF',
            path,
          },
        });
      },
    });

    const COLORS = [
      '#0088FE',
      '#00C49F',
      '#FFBB28',
      '#FF8441',
      '#EE3B61',
      '#FF6590',
      '#9575DE',
      '#8EA4F1',
      '#C6E8D2',
      '#FFDB91',
      '#FF9054',
    ];

    return (
      <Chart height={300} source={treeData} forceFit padding={[50, 60, 50, 20]} data={treeData}>
        <Axis
          name="genre"
          tickLine={null}
          line={null}
          title={null}
          labels={{
            custom: true,
            renderer: (text, item, index) => {
              return `<div style="color:${COLORS[index]};
                font-size:10px;
                width:45px;
                position:relative;
                left:15px;"> ${text}
                </div>`;
            },
          }}
        />
        <Axis name="sold" visible={false} />
        <Tooltip crosshairs={false} />
        <Geom
          type="interval"
          position="genre*sold"
          shape="smoothInterval"
          color={['genre', COLORS]}
          label={[
            'sold',
            {
              custom: true,
              renderer: val => {
                // 3 替换成Min
                const topOffset = val === 3 ? -30 : 0;
                return `<div
                  style="color:#999;font-size:10px;position:relative;left:15px;top:${topOffset}px">
                  ${val} +
                  %</div>
                  `;
              },
            },
          ]}
        >
          <Label label="sold" />
        </Geom>
      </Chart>
    );
  }
}

export default Tree;
