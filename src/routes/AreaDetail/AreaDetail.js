import React, { Component, Fragment } from 'react';
import { Row, Col, Button, Card, Cascader, Radio, Table } from 'antd';
import { MiniTri, Bar, MiniCircle } from 'components/OCharts';
import classNames from 'classnames';
import ChartOfCard from 'components/SelfCustom/ChartOfCard/index';
import { connect } from 'dva';
import numeral from 'numeral';
import Bind from 'lodash-decorators/bind';
import { getFormatMoney } from 'utils/utils';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import MiniPanel from 'components/MiniPanel';
import NoData from '../../components/OCharts/NoData/index';
// import Circle from '../../components/OCharts/Circle/index';
import drawPieCanvas from '../Industry/drawPieCanvas';

import styles from './AreaDetail.less';

import tri1Bg from '../../assets/tri1-bg.svg';
import tri2Bg from '../../assets/tri2-bg.svg';
import tri3Bg from '../../assets/tri3-bg.svg';
import tri4Bg from '../../assets/tri4-bg.svg';

import circle1Bg from '../../assets/circle1-bg.svg';
import circle2Bg from '../../assets/circle2-bg.svg';
import circle3Bg from '../../assets/circle3-bg.svg';
import circle4Bg from '../../assets/circle4-bg.svg';

const triBgArray = [tri1Bg, tri2Bg, tri3Bg, tri4Bg];
const circleBgArray = [circle1Bg, circle2Bg, circle3Bg, circle4Bg];

const cardClassName = classNames({
  'content-card': true,
});

@connect(({ areadetail, areascreen }) => ({
  areadetail,
  areascreen,
}))
export default class Overview extends Component {
  state = {
    ecoBigClassId: '1001', // 判断营收税收
    areaId: '',
    ecoBigClassId1: '1001',
  };

  componentDidMount() {
    const { dispatch, areadetail } = this.props;
    const { defaultArea } = areadetail;
    const { ecoBigClassId } = this.state;
    this.setState({
      areaId: defaultArea[1],
    });
    dispatch({
      type: 'areadetail/fetchListArea',
    });
    this.axiosAll({ areaId: defaultArea[1], ecoBigClassId });
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

  filter = (inputValue, path) => {
    return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  };

  handleonChangeForEconRadio = e => {
    const { areaId } = this.state;
    const { dispatch } = this.props;

    this.setState(
      {
        ecoBigClassId: e.target.value,
      },
      async () => {
        const { ecoBigClassId } = this.state;
        await dispatch({
          type: 'areadetail/fetchListEcoAna',
          payload: {
            areaId,
            ecoBigClassId,
          },
        });
        this.initEconomicChart();
      }
    );
  };

  handleonChangeForEconRadio1 = e => {
    const { areaId } = this.state;
    const { dispatch } = this.props;

    this.setState(
      {
        ecoBigClassId1: e.target.value,
      },
      async () => {
        const { ecoBigClassId1 } = this.state;
        await dispatch({
          type: 'areadetail/fetchListCompanyEcoLevelAna',
          payload: {
            areaId,
            ecoBigClassId: ecoBigClassId1,
          },
        });
      }
    );
  };

  handleChange = value => {
    // console.log(value);
    if (value.length > 1) {
      const { ecoBigClassId } = this.state;
      const areaId = value[1];
      this.setState({
        areaId,
      });
      this.axiosAll({ areaId, ecoBigClassId });
    }
  };

  hanldeToAreaScreen = () => {
    const { areaId } = this.state;
    const win = window.open(`/#/areascreen/${areaId}`, '_blank');
    win.focus();
  };

  axiosAll = requiredParameter => {
    const { dispatch } = this.props;

    dispatch({
      type: 'areadetail/fetchGetAreaView',
      payload: requiredParameter,
    });

    dispatch({
      type: 'areadetail/fetchGetEcoCopAnaRes',
      payload: requiredParameter,
    });

    (async () => {
      await dispatch({
        type: 'areadetail/fetchListEcoAna',
        payload: requiredParameter,
      });
      this.initEconomicChart();
    })();

    dispatch({
      type: 'areadetail/fetchListCompanyEcoLevelAna',
      payload: requiredParameter,
    });

    dispatch({
      type: 'areadetail/fetchGetEmpTalentAnaRes',
      payload: requiredParameter,
    });

    // console.log(requiredParameter);

    dispatch({
      type: 'areadetail/fetchGetCompanyAnaRes',
      payload: requiredParameter,
    });
  };

  // 初始化经济分析图
  initEconomicChart() {
    const {
      areadetail: { listEcoAnaData },
    } = this.props;
    const { ecoBigClassId } = this.state;
    const name = ecoBigClassId === '1001' ? '营收' : '税收';
    const option = [];
    const color = ['#D18C54', '#EB5252', '#8CD123', '#26B2BF', '#8F4DBF', '#1889F2', '#FA8F32'];
    for (const i in listEcoAnaData) {
      if (Object.prototype.hasOwnProperty.call(listEcoAnaData, i)) {
        const item = listEcoAnaData[i];
        option.push({
          color: color[i],
          y: item.revenueTaxAvg,
          name: item.domainName,
          value: item.companyCnt,
        });
      }
    }
    drawPieCanvas('econComposChart', option, name);
  }

  // 绘制经济构成分析图
  drawEcnoGrowthChart() {
    this.drawMiniRevenueChart();
    this.drawMiniExpendChart();
    this.drawMiniTaxChart();
  }

  drawMiniRevenueChart() {
    const {
      areadetail: {
        getEcoCopAnaResData: { listRevenue },
      },
    } = this.props;

    const seriesData = [];
    const yAxisData = [];

    for (const item of listRevenue) {
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
      areadetail: {
        getEcoCopAnaResData: { listExpend },
      },
    } = this.props;

    const seriesData = [];
    const yAxisData = [];

    for (const item of listExpend) {
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
      areadetail: {
        getEcoCopAnaResData: { listTax },
      },
    } = this.props;

    const seriesData = [];

    const cloneTax = JSON.parse(JSON.stringify(listTax.sort((a, b) => a.amount < b.amount)));

    for (const item of cloneTax) {
      seriesData.push({
        value: item.amount >= 0 ? (item.amount / 100000000).toFixed(2) : 0.0,
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
            selectData = listTax;
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
          radius: ['40%', '55%'],
          name: '年累计税收构成',
          startAngle: 90,
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
              show: true,
              length: 8,
              length2: 8,
            },
          },
          data: [...seriesData],
        },
      ],
    };

    myChart.resize();
    myChart.setOption(option);
  }

  @Bind()
  bindReSize() {
    this.drawEcnoGrowthChart();
  }

  render() {
    const { ecoBigClassId, ecoBigClassId1 } = this.state;
    const { areadetail } = this.props;
    const {
      getAreaViewData,
      listEcoAnaData,
      listCompanyEcoLevelAnaData,
      getEmpTalentAnaResData,
      getCompanyAnaResData,
      listAreaData,
      defaultArea,
    } = areadetail;
    // console.log(listEcoAnaData);
    const { listEduLevel, listPayLevel } = getEmpTalentAnaResData;
    // if (listAreaData) {}
    const areaOptions = listAreaData.map(v => {
      return {
        value: v.areaTypeId,
        label: v.areaTypeName,
        children: v.childrenArea.map(item => {
          return {
            value: item.areaId,
            label: item.areaName,
          };
        }),
      };
    });

    // 单选按钮
    const RadioHtml = (
      <Radio.Group
        onChange={this.handleonChangeForEconRadio}
        defaultValue={ecoBigClassId}
        buttonStyle="solid"
      >
        <Radio.Button value="1001">营收</Radio.Button>
        <Radio.Button value="1002">税收</Radio.Button>
      </Radio.Group>
    );

    // 单选按钮
    const RadioHtml1 = (
      <Radio.Group
        onChange={this.handleonChangeForEconRadio1}
        defaultValue={ecoBigClassId1}
        buttonStyle="solid"
      >
        <Radio.Button value="1001">营收</Radio.Button>
        <Radio.Button value="1002">税收</Radio.Button>
      </Radio.Group>
    );
    const chartOfCardType = ecoBigClassId === '1001' ? '营收' : '税收';
    const cardResponsiveProps = {
      xs: 12,
      sm: 8,
      md: 4,
      lg: 4,
      xl: 4,
    };

    // 响应列表
    const listResponsiveProps = {
      xs: 24,
      sm: 24,
      md: 8,
      lg: 8,
      xl: 8,
    };

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
          title: `当年累计营收额(万元) `,
          dataIndex: 'revenuee',
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
          title: `当年累计税收额(万元)`,
          dataIndex: 'tax',
          align: 'right',
          render: text => `${numeral(text / 10000).format('0, 0.00')}`,
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
          title: `知识产权数`,
          dataIndex: 'poten',
          align: 'right',
          render: text => Math.round(text),
        },
      ],
    };
    const { listRevenue, listTax, listPoten } = getCompanyAnaResData;
    const tableColumnsTopData = {
      revenueTaxRank: listRevenue.map((v, i) => {
        return {
          ...v,
          rank: i + 1,
        };
      }),
      revenueTaxIncrRank: listTax.map((v, i) => {
        return {
          ...v,
          rank: i + 1,
        };
      }),
      revenueTaxDecrRank: listPoten.map((v, i) => {
        return {
          ...v,
          rank: i + 1,
        };
      }),
    };

    const barData = {
      legend: ['当前区域企业数', '各区域平均企业数'],
      data1: listCompanyEcoLevelAnaData.cntList.map(v => v.companyCnt) || [],
      data2: listCompanyEcoLevelAnaData.avgList.map(v => Math.round(v.companyCntAvg)) || [],
      xData: listCompanyEcoLevelAnaData.cntList.map(v => v.revenueTaxLevelName) || [],
      yName: '企业数           ',
      xName: '',
    };

    return (
      <Fragment>
        <div className={styles.topOption}>
          <Cascader
            style={{ width: '224px' }}
            options={areaOptions}
            defaultValue={defaultArea}
            onChange={this.handleChange}
            placeholder="请输入区域名称关键词"
            showSearch={this.filter}
          />
          <Button icon="qianwang" onClick={this.hanldeToAreaScreen} type="primary" size="default">
            查看大屏
          </Button>
        </div>

        <Row gutter={20}>
          <Col {...cardResponsiveProps}>
            <MiniPanel
              icon="gongsiqiye"
              title="企业数"
              value={getAreaViewData.companyCnt}
              percent={getAreaViewData.companyProp}
              rank={getAreaViewData.companyRank}
            />
          </Col>
          <Col {...cardResponsiveProps}>
            <MiniPanel
              icon="zhifu"
              title={`年累计营收(${getFormatMoney(getAreaViewData.revenue).unit})`}
              value={getFormatMoney(getAreaViewData.revenue).value}
              percent={getAreaViewData.revenueProp}
              rank={getAreaViewData.revenueRank}
            />
          </Col>
          <Col {...cardResponsiveProps}>
            <MiniPanel
              icon="shuishoufagui"
              title={`年累计税收(${getFormatMoney(getAreaViewData.tax).unit})`}
              value={getFormatMoney(getAreaViewData.tax).value}
              percent={getAreaViewData.taxProp}
              rank={getAreaViewData.taxRank}
            />
          </Col>
          <Col {...cardResponsiveProps}>
            <MiniPanel
              icon="xinzeng"
              title="就业人数"
              value={getAreaViewData.talentCnt}
              percent={getAreaViewData.talentCntProp}
              rank={getAreaViewData.talentCntRank}
            />
          </Col>
          <Col {...cardResponsiveProps}>
            <MiniPanel
              icon="gangweitubiao"
              title="岗位需求量(近30天)"
              value={getAreaViewData.postCnt}
              percent={getAreaViewData.postCntProp}
              rank={getAreaViewData.postCntRank}
            />
          </Col>
          <Col {...cardResponsiveProps}>
            <MiniPanel
              icon="zsknowledge"
              title="累计知识产权数"
              value={getAreaViewData.propertyCnt}
              percent={getAreaViewData.propertyCntProp}
              rank={getAreaViewData.propertyCntCnt}
            />
          </Col>
        </Row>

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

        <Card bordered={false} bodyStyle={{ padding: '0 20px 20px' }} className={styles.cnt}>
          <Card
            className={classNames({
              [styles.cardTitleLeft]: true,
              [styles.cardTitleTab]: true,
            })}
            extra={RadioHtml}
            bordered={false}
            bodyStyle={{ padding: '20px 0 0 0' }}
            title="经济分析"
          >
            <Row gutter={20}>
              <Col span={8}>
                <ChartOfCard color="#D18C54" data={listEcoAnaData[0]} typeText={chartOfCardType} />
                <ChartOfCard color="#EB5252" data={listEcoAnaData[1]} typeText={chartOfCardType} />
              </Col>
              <Col span={8}>
                {listEcoAnaData.length > 0 ? (
                  <canvas id="econComposChart" style={{ width: '100%', height: '354px' }} />
                ) : (
                  <NoData height="306px" />
                )}
              </Col>
              <Col span={8}>
                <ChartOfCard color="#FA8F32" data={listEcoAnaData[6]} typeText={chartOfCardType} />
                <ChartOfCard color="#1889F2" data={listEcoAnaData[5]} typeText={chartOfCardType} />
              </Col>
            </Row>
            <Row gutter={20} style={{ marginTop: '20px' }}>
              <Col span={8}>
                <ChartOfCard color="#8CD123" data={listEcoAnaData[2]} typeText={chartOfCardType} />
              </Col>
              <Col span={8}>
                <ChartOfCard color="#26B2BF" data={listEcoAnaData[3]} typeText={chartOfCardType} />
              </Col>
              <Col span={8}>
                <ChartOfCard color="#8F4DBF" data={listEcoAnaData[4]} typeText={chartOfCardType} />
              </Col>
            </Row>
          </Card>
        </Card>

        <Card bordered={false} bodyStyle={{ padding: '0 20px 20px' }} className={styles.cnt}>
          <Card
            className={styles.cardTitleRight}
            extra={RadioHtml1}
            bordered={false}
            bodyStyle={{ padding: '0' }}
            title="近12月企业经济等级分析"
          >
            {barData.xData.length > 0 ? <Bar {...barData} /> : <NoData height="306px" />}
          </Card>
        </Card>

        <Card bordered={false} bodyStyle={{ padding: '0 20px 20px' }} className={styles.cnt}>
          <Card
            className={styles.cardTitleLeft}
            bordered={false}
            bodyStyle={{ padding: '20px 0 0 0' }}
            title="就业人才分析"
          >
            <Card bodyStyle={{ padding: '0 20px 20px' }}>
              <Card
                className={styles.cardSmallTitle}
                bodyStyle={{ padding: '20px 0 0 0', textAlign: 'center' }}
                bordered={false}
                title="人才学历分布"
              >
                {listEduLevel.length > 0 ? (
                  listEduLevel.map((value, index) => {
                    return (
                      <MiniCircle
                        key={value.talentSmallClassName}
                        bg={circleBgArray[index]}
                        percent={value.talentProp}
                        num={value.talentCnt}
                        title={value.talentSmallClassName}
                      />
                    );
                  })
                ) : (
                  <NoData height="306px" />
                )}
              </Card>
            </Card>

            <Card bodyStyle={{ padding: '0 20px 20px' }} style={{ marginTop: '20px' }}>
              <Card
                className={styles.cardSmallTitle}
                bodyStyle={{ padding: '20px 0 0 0', textAlign: 'center' }}
                bordered={false}
                title="薪资水平分布"
              >
                {listPayLevel.length > 0 ? (
                  listPayLevel.map((value, index) => {
                    return (
                      <MiniTri
                        key={value.talentSmallClassName}
                        bg={triBgArray[index]}
                        percent={value.talentProp}
                        num={value.talentCnt}
                        title={value.talentSmallClassName}
                      />
                    );
                  })
                ) : (
                  <NoData height="306px" />
                )}
              </Card>
            </Card>
          </Card>
        </Card>

        <Card bordered={false} bodyStyle={{ padding: '0 20px 20px' }} className={styles.cnt}>
          <Card
            className={styles.cardTitleLeft}
            bordered={false}
            bodyStyle={{ padding: '20px 0 0 0' }}
            title="企业分析"
          >
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
          </Card>
        </Card>
      </Fragment>
    );
  }
}
