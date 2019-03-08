import React, { Component } from 'react';
import { connect } from 'dva';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import styles from './RevenueTrend.less';

@connect(({ compOverscreen }) => ({
  compOverscreen,
}))
export default class RevenueTrendWrap extends Component {
  state = {};

  async componentDidMount() {
    const {
      dispatch,
      compOverscreen: { requestParam },
    } = this.props;

    if (requestParam.companyId) {
      await dispatch({
        type: 'compOverscreen/fetchGetListTrendData',
        payload: requestParam,
      });
      this.initRevenueTrendhart();
    }
  }

  shouldComponentUpdate() {
    this.initRevenueTrendhart();
    return true;
  }

  initRevenueTrendhart() {
    const {
      compOverscreen: { getListTrendData },
    } = this.props;

    if (
      getListTrendData.length === 0 ||
      (getListTrendData.listThisYearTrend.length === 0 &&
        getListTrendData.listLastYearTrend.length === 0)
    ) {
      return;
    }

    const seriesData1 = [];
    const seriesData2 = [];

    getListTrendData.listThisYearTrend.map(value => {
      seriesData1.push(value.revenue);
      return value;
    });
    getListTrendData.listLastYearTrend.map(value => {
      seriesData2.push(value.revenue);
      return value;
    });
    const lastYear =
      getListTrendData.listLastYearTrend[0] &&
      getListTrendData.listLastYearTrend[0].statDate.toString().slice(0, 4);
    const year =
      getListTrendData.listThisYearTrend[0] &&
      getListTrendData.listThisYearTrend[0].statDate.toString().slice(0, 4);

    const series = [
      {
        name: lastYear,
        type: 'line',
        smooth: true,
        showSymbol: false,
        itemStyle: {
          normal: {
            lineStyle: {
              color: '#00E5FF',
            },
          },
        },
        areaStyle: {
          normal: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(0,229,255,0.2)',
                },
                {
                  offset: 1,
                  color: 'rgba(255, 225, 255, 0)',
                },
              ],
              globalCoord: false,
            },
          },
        },
        data: seriesData2,
      },
      {
        name: year,
        type: 'line',
        smooth: true,
        showSymbol: false,
        itemStyle: {
          normal: {
            lineStyle: {
              color: '#D6E342',
            },
          },
        },
        areaStyle: {
          normal: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(229,245,4,0.2)',
                },
                {
                  offset: 1,
                  color: 'rgba(255, 225, 255, 0)',
                },
              ],
              globalCoord: false,
            },
          },
        },
        data: seriesData1,
      },
    ];

    const myChart = echarts.init(this.echarts);
    const option = {
      backgroundColor: 'rgba(1,19,43,0.2)',
      color: ['#00E5FF', '#E5F504'],
      title: {
        text: '营收趋势',
        textStyle: {
          color: '#33BBFF',
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: '#ccc',
          },
        },
        backgroundColor: '#F7F7F7',
        textStyle: {
          color: '#333',
        },
      },
      legend: {
        right: 12,
        itemWidth: 10,
        itemHeight: 10,
        icon: 'circle',
        textStyle: {
          color: '#E6F7FF',
          fontSize: 14,
        },
      },
      grid: {
        x: 12,
        y: 25,
        x2: 12,
        y2: 25,
      },
      xAxis: {
        type: 'category',
        axisTick: {
          length: 20,
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#E6F7FF',
          },
        },
        splitLine: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#095F95',
          },
        },
        boundaryGap: false,
        data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      },
      yAxis: {
        show: false,
      },
      series,
    };
    myChart.setOption(option);
  }

  render() {
    const {
      compOverscreen: { getListTrendData },
    } = this.props;
    let isEmpty;
    if (
      getListTrendData.length === 0 ||
      (getListTrendData.listThisYearTrend.length === 0 &&
        getListTrendData.listLastYearTrend.length === 0)
    ) {
      isEmpty = true;
    } else {
      isEmpty = false;
    }

    return (
      <div className={styles.panel}>
        <h3 className={styles.title}>
          <span>营收趋势</span>
        </h3>
        {isEmpty ? (
          <div className={styles.empty}>
            <div className={styles.empty_img}>&nbsp;</div>
            <span className={styles.empty_text}>暂无数据</span>
          </div>
        ) : (
          <div
            id="RevenueTrend"
            style={{ width: 450, height: 150 }}
            ref={c => {
              this.echarts = c;
            }}
          />
        )}
      </div>
    );
  }
}
