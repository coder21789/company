import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Row, Col, DatePicker, Card, Tabs, Table, Radio, Icon } from 'antd';
import classNames from 'classnames';
import moment from 'moment';
import numeral from 'numeral';
import _ from 'lodash';
import Bind from 'lodash-decorators/bind';
// import Debounce from 'lodash-decorators/debounce';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

import { MiniMap } from 'components/OCharts';
import { getFormatMoney } from '../../utils/utils';
import styles from './Overview.less';

const { TabPane } = Tabs;
const { MonthPicker } = DatePicker;

const cardClassName = classNames({
  'content-card': true,
});

@connect(({ econOverview, loading }) => ({
  econOverview,
  loading: loading.effects['econOverview/fetchGetOverView'],
}))
export default class Overview extends Component {
  state = {
    statDate: moment()
      .subtract(1, 'month')
      .format('YYYYMM'),
    coreTabKey: 'revenueKey', // 核心指标 tab key
    areaTabKey: 'revenueArea', // 区域营收 tabkey
    areaType: 601, // 区域营收当前的子 tabkey
    rankTabkey: 'revenue', // 企业营税收 Top
  };

  componentDidMount() {
    this.init();
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

  // 时间选择
  handleTimeOnChange = date => {
    const statDate = date.format('YYYYMM');
    this.setState(
      {
        statDate,
      },
      () => {
        this.init();
      }
    );
  };

  // 核心指标 tab key
  handleCoreTabChange = key => {
    this.setState(
      {
        coreTabKey: key,
      },
      () => {
        this.drawCoreChart();
      }
    );
  };

  // 区域 tab key
  handleAreaTabChange = key => {
    const { statDate } = this.state;
    const { dispatch } = this.props;

    // 区域分析
    dispatch({
      type: 'econOverview/fetchGetListAreaAnalyze',
      payload: {
        statDate,
        id: key === 'revenueArea' ? 1001 : 1002,
        type: 601,
      },
    });
    this.setState({
      areaTabKey: key,
      areaType: 601,
    });
  };

  // 区域 subTab key
  handleAreaSubtabChange = e => {
    const { areaTabKey, statDate } = this.state;
    const { dispatch } = this.props;

    this.setState({
      areaType: +e.target.value,
    });

    // 区域分析
    dispatch({
      type: 'econOverview/fetchGetListAreaAnalyze',
      payload: {
        statDate,
        id: areaTabKey === 'revenueArea' ? 1001 : 1002,
        type: +e.target.value,
      },
    });
  };

  // 企业营税收 Top tab key
  handleRankTabChange = key => {
    this.setState({
      rankTabkey: key,
    });
  };

  async init() {
    const { areaTabKey, areaType, statDate } = this.state;
    const { dispatch } = this.props;

    await new Promise(resolve => {
      // 核心数据
      dispatch({
        type: 'econOverview/fetchGetOverView',
        payload: {
          statDate,
        },
      });

      // 增长关系图
      dispatch({
        type: 'econOverview/fetchGetListRevenueTax',
        payload: {
          statDate,
        },
      });

      // 区域分析
      dispatch({
        type: 'econOverview/fetchGetListAreaAnalyze',
        payload: {
          statDate,
          id: areaTabKey === 'revenueArea' ? 1001 : 1002,
          type: areaType,
        },
      });

      // 经济构成分析
      dispatch({
        type: 'econOverview/fetchGetListRevenueTaxRankData',
        payload: {
          statDate,
        },
      });

      // 营税收排名
      dispatch({
        type: 'econOverview/fetchGetListRevenueTaxRank',
        payload: {
          statDate,
        },
      });

      // 预警排名
      dispatch({
        type: 'econOverview/fetchGetListTaxalert',
        payload: {
          statDate,
        },
      });

      resolve();
    });
  }

  // 绘制增长关系图
  drawCoreChart() {
    const { coreTabKey } = this.state;
    const {
      econOverview: { getListRevenueTaxData },
    } = this.props;
    const cloneGetListRevenueTaxData = _.cloneDeep(getListRevenueTaxData);

    const xAxisData = [];
    const yAxisName =
      coreTabKey === 'revenueKey' ? ['营收(万元)', '营收企业数'] : ['税收(万元)', '税收企业数'];
    const legendData =
      coreTabKey === 'revenueKey' ? ['营收额', '营收企业数'] : ['税收额', '税收企业数'];
    const seriesData = [[], []];

    cloneGetListRevenueTaxData.map(value => {
      const str = value.statDate.toString();
      const statDate = `${str.substr(0, 4)}-${str.substr(4, 6)}`;
      xAxisData.push(statDate);
      if (coreTabKey === 'revenueKey') {
        seriesData[0].push((value.revenue / 10000).toFixed(2));
        seriesData[1].push(value.revenueCompanyCnt);
      } else {
        seriesData[0].push((value.tax / 10000).toFixed(2));
        seriesData[1].push(value.taxCompanyCnt);
      }

      return value;
    });
    const myChart = echarts.init(document.querySelector('#overViewChart'));
    const option = {
      color: ['#8C64FA', '#0580F2'],
      tooltip: {
        trigger: 'axis',
        padding: [12, 14],
        backgroundColor: '#F7F7F7',
        textStyle: {
          color: '#333333',
        },
      },
      legend: {
        show: true,
        icon: 'circle',
        right: 25,
        top: 15,
        itemWidth: 8,
        itemHeight: 8,
        textStyle: {
          fontSize: 12,
          color: '#333333',
        },
        data: legendData,
      },
      grid: {
        left: '0',
        right: '10px',
        bottom: '0',
        top: '20%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              fontSize: 12,
              color: '#999999',
            },
          },
          data: xAxisData,
        },
      ],
      yAxis: [
        {
          name: yAxisName[0],
          show: true,
          type: 'value',
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              fontSize: 12,
              color: '#999999',
            },
          },
          max: value => (value.max * 2.1).toFixed(2),
        },
        {
          name: yAxisName[1],
          nameLocation: 'start',
          show: true,
          type: 'value',
          inverse: true,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              fontSize: 12,
              color: '#999999',
            },
          },
          max: value => (value.max * 2.1).toFixed(2),
        },
      ],
      series: [
        {
          name: legendData[0],
          type: 'line',
          smooth: false,
          showSymbol: false,
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
                    color: 'RGBA(140, 100, 250, 1)',
                  },
                  {
                    offset: 1,
                    color: 'RGBA(140, 100, 250, 0.1)',
                  },
                ],
                globalCoord: false,
              },
            },
          },
          data: seriesData[0],
        },
        {
          name: legendData[1],
          type: 'line',
          smooth: false,
          yAxisIndex: 1,
          showSymbol: false,
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
                    color: 'RGBA(12, 183, 250, 0.1)',
                  },
                  {
                    offset: 1,
                    color: 'RGBA(0, 153, 255, 1)',
                  },
                ],
                globalCoord: false,
              },
            },
          },
          data: seriesData[1],
        },
      ],
    };
    document.querySelector('#overViewChart').style.width = `${document.body.clientWidth -
      180 -
      80}px`;
    myChart.resize();
    // 绘制图表
    myChart.setOption(option);

    return myChart;
  }

  // 绘制经济构成分析图
  drawEcnoGrowthChart() {
    this.drawMiniRevenueChart();
    this.drawMiniExpendChart();
    this.drawMiniTaxChart();
  }

  drawMiniRevenueChart() {
    const {
      econOverview: {
        getListEconomicConstitute: { revenue },
      },
    } = this.props;

    const seriesData = [];
    const yAxisData = [];

    for (const item of revenue) {
      yAxisData.push(item.ecoSmallClassName);
      seriesData.push((item.amount / 100000000).toFixed(2));
    }

    const colorArray = [
      {
        top: '#35BEFA',
        bottom: '#1889F2',
      },
      {
        top: '#FDC261',
        bottom: '#FA8F32',
      },
      {
        top: '#4EDAE1',
        bottom: '#26B2BF',
      },
      {
        top: '#F68A8A',
        bottom: '#EB5252',
      },
      {
        top: 'rgba(42,45,221)',
        bottom: 'rgba(42,45,221, 0.3)',
      },
      {
        top: 'rgba(215,47,215)',
        bottom: 'rgba(215,47,215, 0.3)',
      },
    ];
    const myChart = echarts.init(document.querySelector('#econRevenueChart'));
    const option = {
      grid: {
        left: '2%',
        right: '5%',
        top: '2%',
        bottom: '2%',
        containLabel: true,
      },

      tooltip: {
        show: 'true',
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        padding: [12, 14],
        backgroundColor: '#F7F7F7',
        textStyle: {
          color: '#333333',
        },
      },
      xAxis: {
        type: 'value',
        position: 'top',
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          color: 'rgba(0,0,0,0.45)',
          fontSize: 12,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dotted',
            color: '#ccc',
          },
        },
      },
      yAxis: [
        {
          type: 'category',
          axisTick: {
            show: false,
          },
          inverse: 'true', // 排序
          axisLine: {
            show: false,
          },
          axisLabel: {
            color: 'rgba(0,0,0,0.85)',
            fontFamily: 'PingFangSC-Regular',
            fontSize: 12,
          },
          data: yAxisData,
        },
      ],
      series: [
        {
          name: '',
          type: 'bar',
          itemStyle: {
            normal: {
              show: true,
              color: params => {
                const num = colorArray.length;
                return {
                  type: 'linear',
                  colorStops: [
                    {
                      offset: 0,
                      color: colorArray[params.dataIndex % num].bottom,
                    },
                    {
                      offset: 1,
                      color: colorArray[params.dataIndex % num].top,
                    },
                    {
                      offset: 0,
                      color: colorArray[params.dataIndex % num].bottom,
                    },
                    {
                      offset: 1,
                      color: colorArray[params.dataIndex % num].top,
                    },
                    {
                      offset: 0,
                      color: colorArray[params.dataIndex % num].bottom,
                    },
                    {
                      offset: 1,
                      color: colorArray[params.dataIndex % num].top,
                    },
                    {
                      offset: 0,
                      color: colorArray[params.dataIndex % num].bottom,
                    },
                    {
                      offset: 1,
                      color: colorArray[params.dataIndex % num].top,
                    },
                    {
                      offset: 0,
                      color: colorArray[params.dataIndex % num].bottom,
                    },
                    {
                      offset: 1,
                      color: colorArray[params.dataIndex % num].top,
                    },
                    {
                      offset: 0,
                      color: colorArray[params.dataIndex % num].bottom,
                    },
                    {
                      offset: 1,
                      color: colorArray[params.dataIndex % num].top,
                    },
                  ],
                  // globalCoord: false
                };
              },
              width: 20,
            },
          },
          barGap: '0%',
          barCategoryGap: '50%',
          barWidth: '20',
          data: seriesData,
        },
      ],
    };
    myChart.resize();
    myChart.setOption(option);
  }

  drawMiniExpendChart() {
    const {
      econOverview: {
        getListEconomicConstitute: { expend },
      },
    } = this.props;

    const seriesData = [];
    const yAxisData = [];

    for (const item of expend) {
      yAxisData.push(item.ecoSmallClassName);
      seriesData.push((item.amount / 100000000).toFixed(2));
    }

    const colorArray = [
      {
        top: '#35BEFA', // 红shen
        bottom: '#1889F2',
      },
      {
        top: '#FDC261', // 黄
        bottom: '#FA8F32',
      },
      {
        top: '#4EDAE1', // 绿
        bottom: '#26B2BF',
      },
      {
        top: '#F68A8A', // 蓝
        bottom: '#EB5252',
      },
      {
        top: 'rgba(42,45,221, 0.3)', // 深蓝
        bottom: 'rgba(42,45,221)',
      },
      {
        top: 'rgba(215,47,215,0.3)', // 粉
        bottom: 'rgba(215,47,215, 1)',
      },
    ];
    const myChart = echarts.init(document.querySelector('#econExpendChart'));
    const option = {
      grid: {
        left: '2%',
        right: '5%',
        top: '2%',
        bottom: '2%',
        containLabel: true,
      },

      tooltip: {
        show: 'true',
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        padding: [12, 14],
        backgroundColor: '#F7F7F7',
        textStyle: {
          color: '#333333',
        },
      },
      xAxis: {
        type: 'value',
        position: 'top',
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          color: 'rgba(0,0,0,0.45)',
          fontSize: 12,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dotted',
            color: '#ccc',
          },
        },
      },
      yAxis: [
        {
          type: 'category',
          axisTick: {
            show: false,
          },
          inverse: 'true', // 排序
          axisLine: {
            show: false,
          },
          axisLabel: {
            color: 'rgba(0,0,0,0.85)',
            fontFamily: 'PingFangSC-Regular',
            fontSize: 12,
          },
          data: yAxisData,
        },
      ],
      series: [
        {
          name: '',
          type: 'bar',
          itemStyle: {
            normal: {
              show: true,
              color: params => {
                const num = colorArray.length;
                return {
                  type: 'linear',
                  colorStops: [
                    {
                      offset: 0,
                      color: colorArray[params.dataIndex % num].bottom,
                    },
                    {
                      offset: 1,
                      color: colorArray[params.dataIndex % num].top,
                    },
                    {
                      offset: 0,
                      color: colorArray[params.dataIndex % num].bottom,
                    },
                    {
                      offset: 1,
                      color: colorArray[params.dataIndex % num].top,
                    },
                    {
                      offset: 0,
                      color: colorArray[params.dataIndex % num].bottom,
                    },
                    {
                      offset: 1,
                      color: colorArray[params.dataIndex % num].top,
                    },
                    {
                      offset: 0,
                      color: colorArray[params.dataIndex % num].bottom,
                    },
                    {
                      offset: 1,
                      color: colorArray[params.dataIndex % num].top,
                    },
                    {
                      offset: 0,
                      color: colorArray[params.dataIndex % num].bottom,
                    },
                    {
                      offset: 1,
                      color: colorArray[params.dataIndex % num].top,
                    },
                    {
                      offset: 0,
                      color: colorArray[params.dataIndex % num].bottom,
                    },
                    {
                      offset: 1,
                      color: colorArray[params.dataIndex % num].top,
                    },
                  ],
                  // globalCoord: false
                };
              },
              width: 20,
            },
          },
          barGap: '0%',
          barCategoryGap: '50%',
          data: seriesData,
        },
      ],
    };

    myChart.resize();
    myChart.setOption(option);
  }

  drawMiniTaxChart() {
    const {
      econOverview: {
        getListEconomicConstitute: { tax },
      },
    } = this.props;

    const seriesData = [];

    const cloneTax = JSON.parse(JSON.stringify(tax.sort((a, b) => a.prop < b.prop)));

    for (const item of cloneTax) {
      seriesData.push({
        value: item.prop >= 0 ? (item.prop * 100).toFixed(2) : 0.0,
        name: item.ecoSmallClassName,
      });
    }

    const myChart = echarts.init(document.querySelector('#econTaxChart'));
    const option = {
      color: ['#3095F2', '#FA8F32', '#EB5252', '#26B2BF', '#8F4DBF', '#5EBF26', '#69BEFF'],
      tooltip: {
        show: true,
        trigger: 'item',
        formatter: params => {
          let selectData = [];
          if (params.seriesName === '年累计税收构成') {
            selectData = tax;
          }

          const data = selectData.filter(value => value.ecoSmallClassName === params.name);
          if (data && data.length === 1) {
            return `<span style="display: inline-block; width: 10px; height: 10px;margin-right:4px; border-radius: 50%;background-color: ${
              params.color
            };"></span>${params.name}<br/>
            费用：${getFormatMoney(data[0].amount).value}${getFormatMoney(data[0].amount).unit}<br/>
            占比：${(data[0].prop * 100).toFixed(2)}%`;
          } else {
            return `<span style="display: inline-block; width: 10px; height: 10px;margin-right:4px; border-radius: 50%;background-color: ${
              params.color
            };"></span>${params.name}<br/>
                  费用：- 元<br/>
                  占比：-`;
          }
        },
        padding: [12, 14],
        backgroundColor: '#F7F7F7',
        textStyle: {
          color: '#333333',
        },
      },
      grid: {
        left: '10%',
        right: '35%',
        top: '20%',
        bottom: '6%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        axisLine: {
          show: false,
          lineStyle: {
            color: '#c0576d',
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: '#ffd285',
          },
        },
        boundaryGap: true,
      },
      yAxis: {
        axisLine: {
          show: false,
          lineStyle: {
            color: '#c0576d',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#c0576d',
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: '#ffd285',
          },
        },
        type: 'value',
      },
      series: [
        {
          type: 'pie',
          center: ['50%', '50%'],
          radius: ['50%', '65%'],
          name: '年累计税收构成',
          startAngle: 90,
          label: {
            normal: {
              position: 'outside',
              formatter: '{b}: {c}%',
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
            // {
            //   name: '年累计税收构成',
            //   label: {
            //     show: true,
            //     color: '#000000',
            //     fontSize: 16,
            //     position: 'center',
            //     formatter: '{b}',
            //   },
            // },
            ...seriesData,
          ],
        },
      ],
    };

    myChart.resize();
    myChart.setOption(option);
  }

  @Bind()
  bindReSize() {
    const coreChart = this.drawCoreChart();

    this.drawEcnoGrowthChart();
    coreChart.resize();
  }

  render() {
    // 响应列表
    const listResponsiveProps = {
      xs: 24,
      sm: 24,
      md: 8,
      lg: 8,
      xl: 8,
    };
    // state
    const { coreTabKey, areaTabKey, areaType, rankTabkey } = this.state;

    // props
    const {
      econOverview: {
        pathStyle,
        getOverViewData,
        getListAreaAnalyzeData,
        getMapListAreaAnalyzeData,
        getListRevenueTaxRankData,
        getListTaxalertData,
      },
    } = this.props;

    /* eslint no-param-reassign: "error" */
    const areaData = _.cloneDeep(getMapListAreaAnalyzeData).map(value => {
      value.formatData = [
        `年累计${areaTabKey === 'revenueArea' ? '营' : '税'}收：${
          value.revenueTax ? numeral(value.revenueTax / 10000).format('0, 0.00') : '-'
        }`,
        `年累计${areaTabKey === 'revenueArea' ? '营' : '税'}收增幅：${
          value.revenueTaxYny ? `${(value.revenueTaxYny * 100).toFixed(2)}%` : '-'
        }`,
        `年累计${areaTabKey === 'revenueArea' ? '营' : '税'}收均值：${
          value.revenueTaxAvg ? numeral(value.revenueTaxAvg / 10000).format('0, 0.00') : '-'
        }`,
        `年累计${areaTabKey === 'revenueArea' ? '营' : '税'}收均值增幅：${
          value.revenueTaxAvgYny ? `${(value.revenueTaxAvgYny * 100).toFixed(2)}%` : '-'
        }`,
      ];

      return value;
    });

    const {
      ytRevenue,
      ytRevenueCompanyCnt,
      revenue,
      ytRevenueYny,
      ytTax,
      ytTaxCompanyCnt,
      tax,
      ytTaxYny,
    } = getOverViewData;

    // 营税收 top 表表格头
    const tableColumnsTitleType = rankTabkey === 'revenue' ? '营' : '税';
    const tableColumnsTop = {
      revenueTaxRank: [
        {
          title: '排名',
          dataIndex: 'rank',
          align: 'left',
        },
        {
          title: '企业',
          dataIndex: 'companyName',
          render: text => <span className={styles.textNoWrap}>{text}</span>,
        },
        {
          title: `当年累计${tableColumnsTitleType}收额(万元)`,
          dataIndex: 'content',
          align: 'right',
          render: text => `${numeral(text / 10000).format('0, 0.00')}`,
        },
      ],
      revenueTaxIncrRank: [
        {
          title: '排名',
          dataIndex: 'rank',
          align: 'left',
        },
        {
          title: '企业',
          dataIndex: 'companyName',
          render: text => <span className={styles.textNoWrap}>{text}</span>,
        },
        {
          title: `当年${tableColumnsTitleType}收增幅`,
          dataIndex: 'content',
          align: 'right',
          render: text => `${(text * 100).toFixed(2)}%`,
        },
      ],
      revenueTaxDecrRank: [
        {
          title: '排名',
          dataIndex: 'rank',
          align: 'left',
        },
        {
          title: '企业',
          dataIndex: 'companyName',
          render: text => <span className={styles.textNoWrap}>{text}</span>,
        },
        {
          title: `当年${tableColumnsTitleType}收降幅`,
          dataIndex: 'content',
          align: 'right',
          render: text => `${(text * 100).toFixed(2)}%`,
        },
      ],
    };

    let tableDataTopKey = 'revenueRankRes';
    if (rankTabkey === 'revenue') {
      tableDataTopKey = 'revenueRankRes';
    } else {
      tableDataTopKey = 'taxRankRes';
    }

    const tableColumnsTopData = {
      revenueTaxRank: [],
      revenueTaxIncrRank: [],
      revenueTaxDecrRank: [],
      ...getListRevenueTaxRankData[tableDataTopKey],
    };

    // 税务预警分析表格头
    const tableColumns = {
      areaColumns: [
        {
          title: '排名',
          dataIndex: 'rank',
          width: '10%',
        },
        {
          title: '街道',
          dataIndex: 'area',
          width: '15%',
        },
        {
          title: areaTabKey === 'revenueArea' ? '年累计营收(万元)' : '年累计税收(万元)',
          dataIndex: 'revenueTax',
          width: '20%',
          render: text => {
            return <span>{numeral(text / 10000).format('0, 0.00')}</span>;
          },
        },
        {
          title: '增幅',
          dataIndex: 'revenueTaxYny',
          width: '15%',
          render: text => (text !== '' ? `${(text * 100).toFixed(2)}%` : '-'),
        },
        {
          title: areaTabKey === 'revenueArea' ? '年累计营收均值(万元)' : '年累计税收均值(万元)',
          dataIndex: 'revenueTaxAvg',
          width: '25%',
          render: text => {
            return <span>{numeral(text / 10000).format('0, 0.00')}</span>;
          },
        },
        {
          title: '均值增幅',
          dataIndex: 'revenueTaxAvgYny',
          width: '15%',
          render: text => (text !== '' ? `${(text * 100).toFixed(2)}%` : '-'),
        },
      ],
      oweTaxAmount: [
        {
          title: '排名',
          dataIndex: 'rank',
        },
        {
          title: '企业',
          dataIndex: 'companyName',
          render: text => <span className={styles.textNoWrap}>{text}</span>,
        },
        {
          title: '累计欠税额(万元)',
          dataIndex: 'content',
          align: 'right',
          render: text => `${numeral(text / 10000).format('0, 0.00')}`,
        },
      ],
      oweTaxTime: [
        {
          title: '排名',
          dataIndex: 'rank',
        },
        {
          title: '企业',
          dataIndex: 'companyName',
          render: text => <span className={styles.textNoWrap}>{text}</span>,
        },
        {
          title: '累计欠税时长(月)',
          dataIndex: 'content',
          align: 'right',
        },
      ],
      oweTaxNum: [
        {
          title: '排名',
          dataIndex: 'rank',
        },
        {
          title: '企业',
          dataIndex: 'companyName',
          render: text => <span className={styles.textNoWrap}>{text}</span>,
        },
        {
          title: '近3年欠税次数',
          dataIndex: 'content',
          align: 'right',
        },
      ],
    };

    // 税务预警分析表格数据
    const tableData = {
      oweTaxAmount: [],
      oweTaxTime: [],
      oweTaxNum: [],
      ...getListTaxalertData,
    };

    return (
      <Fragment>
        <MonthPicker
          disabledDate={current => current && current > moment().subtract(1, 'month')}
          allowClear={false}
          defaultValue={moment().subtract(1, 'month')}
          onChange={this.handleTimeOnChange}
          style={{ marginBottom: 12 }}
        />
        <Card className={cardClassName} bordered={false} bodyStyle={{ padding: '20px' }}>
          <div className={styles.selfTabWrap}>
            <div
              className={classNames({
                [styles.selfTab]: true,
                [styles.selTabActive]: coreTabKey === 'revenueKey',
              })}
              onClick={() => this.handleCoreTabChange('revenueKey')}
            >
              <div className={styles.selfCardWrap}>
                <div className={styles.mainContent}>
                  <small>
                    <Icon type="zhifu" />
                    <span className={styles.titleText} />年累计营收({getFormatMoney(ytRevenue).unit})
                  </small>
                  <h4>{ytRevenue ? getFormatMoney(ytRevenue).value : '-'}</h4>
                </div>
                <div className={styles.cardAction}>
                  <div className={styles.cardSubAction}>
                    <div className={styles.title}>
                      {ytRevenueCompanyCnt ? numeral(ytRevenueCompanyCnt).format('0,0') : '-'}
                    </div>
                    <div className={styles.subTitle}>
                      <Icon type="gongsiqiye" />
                      <span className={styles.subTitleText}>营收企业数</span>
                    </div>
                  </div>
                  <div className={styles.cardSubAction}>
                    <div className={styles.title}>
                      {revenue ? getFormatMoney(revenue).value : '-'}
                    </div>
                    <div className={styles.subTitle}>
                      <Icon type="huodongyingshou" />
                      <span className={styles.subTitleText}>
                        月营收({getFormatMoney(revenue).unit || '元'})
                      </span>
                    </div>
                  </div>
                  <div className={styles.cardSubAction}>
                    <div className={styles.title}>
                      {ytRevenueYny ? `${numeral(ytRevenueYny * 100).format('0,0.00')}%` : '-'}
                    </div>
                    <div className={styles.subTitle}>
                      <Icon type="ziyuan" />
                      <span className={styles.subTitleText}>年累计营收同比增长</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={classNames({
                [styles.selfTab]: true,
                [styles.selTabActive]: coreTabKey === 'taxKey',
              })}
              onClick={() => this.handleCoreTabChange('taxKey')}
            >
              <div className={styles.selfCardWrap}>
                <div className={styles.mainContent}>
                  <small>
                    <Icon type="zhifu" />
                    <span className={styles.titleText} />年累计税收({getFormatMoney(ytTax).unit})
                  </small>
                  <h4>{ytTax ? getFormatMoney(ytTax).value : '-'}</h4>
                </div>
                <div className={styles.cardAction}>
                  <div className={styles.cardSubAction}>
                    <div className={styles.title}>
                      {ytTaxCompanyCnt ? numeral(ytTaxCompanyCnt).format('0,0') : '-'}
                    </div>
                    <div className={styles.subTitle}>
                      <Icon type="gongsiqiye" />
                      <span className={styles.subTitleText}>税收企业数</span>
                    </div>
                  </div>
                  <div className={styles.cardSubAction}>
                    <div className={styles.title}>{tax ? getFormatMoney(tax).value : '-'}</div>
                    <div className={styles.subTitle}>
                      <Icon type="huodongyingshou" />
                      <span className={styles.subTitleText}>
                        月税收({getFormatMoney(tax).unit})
                      </span>
                    </div>
                  </div>
                  <div className={styles.cardSubAction}>
                    <div className={styles.title}>
                      {ytTaxYny ? `${numeral(ytTaxYny * 100).format('0,0.00')}%` : '-'}
                    </div>
                    <div className={styles.subTitle}>
                      <Icon type="ziyuan" />
                      <span className={styles.subTitleText}>年累计税收同比增长</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Card
            className={styles.cardTitleLeft}
            bordered={false}
            bodyStyle={{ padding: '0' }}
            title={coreTabKey === 'revenueKey' ? '企业数-营收增长关系图' : '企业数-税收增长关系图'}
          >
            <div id="chartWrap">
              <div id="overViewChart" style={{ width: '100%', height: '380px' }} />
            </div>
          </Card>
        </Card>

        <Card
          className={cardClassName}
          bordered={false}
          bodyStyle={{ padding: '0 20px 20px' }}
          style={{ marginTop: 20 }}
        >
          <div>
            <Tabs
              onChange={this.handleAreaTabChange}
              size="large"
              tabBarStyle={{ marginBottom: 12 }}
            >
              <TabPane tab="区域营收分析" key="revenueArea">
                <Radio.Group
                  defaultValue={601}
                  value={areaType}
                  onChange={this.handleAreaSubtabChange}
                  style={{ marginBottom: '12px' }}
                >
                  <Radio.Button value={601}>按行政区域</Radio.Button>
                  <Radio.Button value={602}>按4+1平台</Radio.Button>
                </Radio.Group>
                <div className={styles.adminAreaWrap}>
                  <div className={styles.left}>
                    <MiniMap
                      title="年累计营收"
                      container="#revenueAreaMap"
                      formatData={areaData}
                      pathStyle={pathStyle}
                    />
                  </div>
                  <div className={styles.right}>
                    <Table
                      columns={tableColumns.areaColumns}
                      dataSource={getListAreaAnalyzeData}
                      rowKey={() => `${Math.random()}`}
                      pagination={false}
                      scroll={{ y: 368 }}
                    />
                  </div>
                </div>
              </TabPane>
              <TabPane tab="区域税收分析" key="taxArea">
                <Radio.Group
                  defaultValue={601}
                  value={areaType}
                  onChange={this.handleAreaSubtabChange}
                  style={{ marginBottom: '12px' }}
                >
                  <Radio.Button value={601}>按行政区域</Radio.Button>
                  <Radio.Button value={602}>按4+1平台</Radio.Button>
                </Radio.Group>
                <div className={styles.adminAreaWrap}>
                  <div className={styles.left}>
                    <MiniMap
                      title="年累计税收"
                      container="#taxAreaMap"
                      formatData={areaData}
                      pathStyle={pathStyle}
                    />
                  </div>
                  <div className={styles.right}>
                    <Table
                      columns={tableColumns.areaColumns}
                      dataSource={getListAreaAnalyzeData}
                      rowKey={() => `${Math.random()}`}
                      pagination={false}
                      scroll={{ y: 368 }}
                    />
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </Card>

        <Row gutter={20}>
          <Col {...listResponsiveProps}>
            <Card
              className={cardClassName}
              bordered={false}
              bodyStyle={{ padding: '0 20px 20px' }}
              style={{ marginTop: 20 }}
            >
              <Card
                className={styles.cardTitleLeft}
                bordered={false}
                bodyStyle={{ padding: '20px 0 0 0' }}
                title="年累计营收构成"
              >
                <div
                  style={{
                    textAlign: 'right',
                    fontSize: '14px',
                    color: 'rgba(0,0,0,0.85)',
                  }}
                >
                  金额(亿元)
                </div>
                <div id="econRevenueChart" style={{ width: '100%', height: '266px' }} />
              </Card>
            </Card>
          </Col>
          <Col {...listResponsiveProps}>
            <Card
              className={cardClassName}
              bordered={false}
              bodyStyle={{ padding: '0 20px 20px' }}
              style={{ marginTop: 20 }}
            >
              <Card
                className={styles.cardTitleLeft}
                bordered={false}
                bodyStyle={{ padding: '20px 0 0 0' }}
                title="年累计支出构成"
              >
                <div
                  style={{
                    textAlign: 'right',
                    fontSize: '14px',
                    color: 'rgba(0,0,0,0.85)',
                  }}
                >
                  金额(亿元)
                </div>
                <div id="econExpendChart" style={{ width: '100%', height: '266px' }} />
              </Card>
            </Card>
          </Col>
          <Col {...listResponsiveProps}>
            <Card
              className={cardClassName}
              bordered={false}
              bodyStyle={{ padding: '0 20px 20px' }}
              style={{ marginTop: 20 }}
            >
              <Card
                className={styles.cardTitleLeft}
                bordered={false}
                bodyStyle={{ padding: '20px 0 0 0' }}
                title="年累计税收构成"
              >
                <div
                  style={{
                    textAlign: 'left',
                    fontSize: '14px',
                    color: 'rgba(0,0,0,0.85)',
                  }}
                >
                  年累计税收构成
                </div>
                <div id="econTaxChart" style={{ width: '100%', height: '266px' }} />
              </Card>
            </Card>
          </Col>
        </Row>

        <Card
          className={cardClassName}
          bordered={false}
          bodyStyle={{ padding: '0 20px 20px' }}
          style={{ marginTop: 20 }}
        >
          <div>
            <Tabs
              tabBarStyle={{ marginBottom: 12 }}
              size="large"
              onChange={this.handleRankTabChange}
            >
              <TabPane tab="营收企业Top10" key="revenue">
                <Row>
                  <Col {...listResponsiveProps}>
                    <div className={styles.sleeveLessList}>
                      <Table
                        columns={tableColumnsTop.revenueTaxRank}
                        dataSource={tableColumnsTopData.revenueTaxRank}
                        rowKey={record => `${record.rank}${Math.random()}`}
                        size="small"
                        pagination={false}
                      />
                    </div>
                  </Col>
                  <Col {...listResponsiveProps}>
                    <div className={styles.sleeveLessList}>
                      <Table
                        columns={tableColumnsTop.revenueTaxIncrRank}
                        dataSource={tableColumnsTopData.revenueTaxIncrRank}
                        rowKey={record => `${record.rank}${Math.random()}`}
                        size="small"
                        pagination={false}
                      />
                    </div>
                  </Col>
                  <Col {...listResponsiveProps}>
                    <div className={styles.sleeveLessList}>
                      <Table
                        columns={tableColumnsTop.revenueTaxDecrRank}
                        dataSource={tableColumnsTopData.revenueTaxDecrRank}
                        rowKey={record => `${record.rank}${Math.random()}`}
                        size="small"
                        pagination={false}
                        style={{ borderRight: 'none' }}
                      />
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="税收企业Top10" key="tax">
                <Row>
                  <Col {...listResponsiveProps}>
                    <div className={styles.sleeveLessList}>
                      <Table
                        columns={tableColumnsTop.revenueTaxRank}
                        dataSource={tableColumnsTopData.revenueTaxRank}
                        rowKey={record => `${record.rank}${Math.random()}`}
                        size="small"
                        pagination={false}
                      />
                    </div>
                  </Col>
                  <Col {...listResponsiveProps}>
                    <div className={styles.sleeveLessList}>
                      <Table
                        columns={tableColumnsTop.revenueTaxIncrRank}
                        dataSource={tableColumnsTopData.revenueTaxIncrRank}
                        rowKey={record => `${record.rank}${Math.random()}`}
                        size="small"
                        pagination={false}
                      />
                    </div>
                  </Col>
                  <Col {...listResponsiveProps}>
                    <div className={styles.sleeveLessList}>
                      <Table
                        columns={tableColumnsTop.revenueTaxDecrRank}
                        dataSource={tableColumnsTopData.revenueTaxDecrRank}
                        rowKey={record => `${record.rank}${Math.random()}`}
                        size="small"
                        pagination={false}
                        style={{ borderRight: 'none' }}
                      />
                    </div>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </div>
        </Card>

        <Card
          className={cardClassName}
          bordered={false}
          bodyStyle={{ padding: '0 20px 20px' }}
          style={{ marginTop: 20, marginBottom: 4 }}
        >
          <Card
            className={styles.cardTitleLeft}
            bordered={false}
            bodyStyle={{ padding: '20px 0 0 0' }}
            title="税务预警分析"
          >
            <Row>
              <Col {...listResponsiveProps}>
                <div className={styles.sleeveLessList}>
                  <Table
                    columns={tableColumns.oweTaxAmount}
                    dataSource={tableData.oweTaxAmount}
                    rowKey={record => `${record.rank}${Math.random()}`}
                    size="small"
                    pagination={false}
                  />
                </div>
              </Col>
              <Col {...listResponsiveProps}>
                <div className={styles.sleeveLessList}>
                  <Table
                    columns={tableColumns.oweTaxTime}
                    dataSource={tableData.oweTaxNum}
                    rowKey={record => `${record.rank}${Math.random()}`}
                    size="small"
                    pagination={false}
                  />
                </div>
              </Col>
              <Col {...listResponsiveProps}>
                <div className={styles.sleeveLessList}>
                  <Table
                    columns={tableColumns.oweTaxNum}
                    dataSource={tableData.oweTaxTime}
                    rowKey={record => `${record.rank}${Math.random()}`}
                    size="small"
                    pagination={false}
                    style={{ borderRight: 'none' }}
                  />
                </div>
              </Col>
            </Row>
          </Card>
        </Card>
      </Fragment>
    );
  }
}
