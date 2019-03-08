import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';

import styles from './index.less';

const placeHolderStyle = {
  normal: {
    color: 'rgba(247,247,247,0.1)',
  },
  emphasis: {
    color: 'rgba(247,247,247,0.1)',
  },
};

export default class PieScreen extends Component {
  static propTypes = {
    container: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object,
    data: PropTypes.array,
  };

  static defaultProps = {
    container: '',
    width: 624,
    height: 624,
    style: {},
    data: [
      [
        {
          name: '专科及以下：',
          value: 12,
        },
        {
          value: 6,
          itemStyle: placeHolderStyle,
        },
      ],
      [
        {
          name: '本科：',
          value: 10,
        },
        {
          value: 6,
          itemStyle: placeHolderStyle,
        },
      ],
      [
        {
          name: '硕士：',
          value: 10,
        },
        {
          value: 6,
          itemStyle: placeHolderStyle,
        },
      ],
      [
        {
          name: '博士及以上：',
          value: 10,
        },
        {
          value: 6,
          itemStyle: placeHolderStyle,
        },
      ],
    ],
  };

  state = {
    mapColors: [
      {
        startColor: '#EE3C7E',
        stopColor: '#FAAA96',
      },
      {
        startColor: '#FB8C05',
        stopColor: '#FCD573',
      },
      {
        startColor: '#6BAB09',
        stopColor: '#CBF25D',
      },
      {
        startColor: '#00EEFF',
        stopColor: '#3796FE',
      },
    ],
  };

  componentDidMount() {
    this.initDraw();
  }

  shouldComponentUpdate() {
    this.initDraw();
    return true;
  }

  componentWillUnmount() {}

  initDraw() {
    const { container, width, data } = this.props;

    const { mapColors } = this.state;

    const circleRadius = [[132, 192], [276, 336], [420, 480], [564, 624]];

    const genCircleRadius = circleRadius.map(value =>
      value.map(subValue => `${(subValue / width) * 100}%`)
    );
    const genOption = data.map((value, index) => {
      return {
        name: value[0].name,
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        animationDuration: idx => idx * 400,
        radius: genCircleRadius[index],
        itemStyle: {
          normal: {
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: mapColors[index].startColor },
                { offset: 1, color: mapColors[index].stopColor },
              ],
              globalCoord: false,
            },
            shadowColor: 'rgba(0, 0, 0, 0)',
          },
        },
        data: value,
      };
    });

    const myChart = echarts.init(document.getElementById(container));

    myChart.setOption({
      series: genOption,
    });
  }

  render() {
    const { container, width, height, style, data } = this.props;

    const ledendContent = _.cloneDeep(data)
      .reverse()
      .map(value => {
        return <li key={Math.random()}>{value[0] && `${value[0].name}${value[0].value}%`}</li>;
      });

    return (
      <div className={styles.pieScreenWrap} style={style}>
        <div id={container} style={{ width: `${width}px`, height: `${height}px` }} />
        <div className={styles.legend}>
          <ul>{ledendContent}</ul>
        </div>
      </div>
    );
  }
}
