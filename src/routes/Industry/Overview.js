import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Row, Col, DatePicker, Card, Radio, Divider, Table } from 'antd';
import classNames from 'classnames';
import { G2 } from 'bizcharts';
import moment from 'moment';
import _ from 'lodash';
import numeral from 'numeral';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/line';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

import ChartOfCard from 'components/SelfCustom/ChartOfCard/index';
import NoData from '../../components/OCharts/NoData/index';
import drawPieCanvas from './drawPieCanvas';
import styles from './Overview.less';

const { MonthPicker } = DatePicker;

@connect(({ indOverview, loading }) => ({
  indOverview,
  loading: loading.effects['indOverview/fetchGetListTopIndustryAnalysis'],
}))
export default class Overview extends Component {
  state = {
    statDate: moment()
      .subtract(1, 'month')
      .format('YYYYMM'),
    radioForEcon: 'revenueOfEcon',
  };

  componentDidMount() {
    this.init();
  }

  shouldComponentUpdate() {
    this.initCompanyGrowChart();
    this.initEconomicChart();
    this.initIndustryChart();

    return true;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', drawPieCanvas);
  }

  // 时间选择
  handleTimeOnChange = chooseDate => {
    const statDate = chooseDate.format('YYYYMM');
    this.setState(
      {
        statDate,
      },
      () => {
        this.init();
      }
    );
  };

  handleonChangeForEconRadio = e => {
    const { statDate } = this.state;
    const { dispatch } = this.props;

    this.setState(
      {
        radioForEcon: e.target.value,
      },
      async () => {
        const { radioForEcon } = this.state;
        const ecoBigClassId = radioForEcon === 'revenueOfEcon' ? 1001 : 1002;
        await dispatch({
          type: 'indOverview/fetchGetListEconomicAnalysis',
          payload: {
            statDate,
            ecoBigClassId,
          },
        });

        this.initEconomicChart();
      }
    );
  };

  async init() {
    const { statDate, radioForEcon } = this.state;
    const { dispatch } = this.props;
    const ecoBigClassId = radioForEcon === 'revenueOfEcon' ? 1001 : 1002;

    await new Promise(resolve => {
      dispatch({
        type: 'indOverview/fetchGetListCompanyIncrAnalysis',
        payload: {
          statDate,
        },
      });

      dispatch({
        type: 'indOverview/fetchGetListEconomicAnalysis',
        payload: {
          statDate,
          ecoBigClassId,
        },
      });

      dispatch({
        type: 'indOverview/fetchGetListIndustryAnalysis',
        payload: {
          statDate,
        },
      });

      dispatch({
        type: 'indOverview/fetchGetListTopIndustryAnalysis',
        payload: {
          statDate,
        },
      });

      resolve();
    });
    this.initCompanyGrowChart();
    this.initEconomicChart();
    this.initIndustryChart();
  }

  // 初始化企业增长分析图
  initCompanyGrowChart() {
    const {
      indOverview: { getListCompanyIncrAnalysisData },
    } = this.props;

    if (getListCompanyIncrAnalysisData.length === 0) {
      return;
    }

    const legendData = [
      '文化创意',
      '高端制造',
      '生物健康',
      '时尚行业',
      '旅游休闲',
      '数字经济',
      '金融服务',
    ];
    const legendDataS = [
      {
        name: '文化创意',
        icon: 'circle',
      },
      {
        name: '高端制造',
        icon: 'circle',
      },
      {
        name: '生物健康',
        icon: 'circle',
      },
      {
        name: '时尚行业',
        icon: 'circle',
      },
      {
        name: '旅游休闲',
        icon: 'circle',
      },
      {
        name: '数字经济',
        icon: 'circle',
      },
      {
        name: '金融服务',
        icon: 'circle',
      },
    ];
    const xAxisData = [];
    const series = [[], [], [], [], [], [], []];

    getListCompanyIncrAnalysisData.map(value => {
      const str = value.statDate.toString();
      if (!str.includes('-')) {
        value.statDate = `${str.substr(0, 4)}-${str.substr(4, 6)}`;
      }
      return value;
    });

    getListCompanyIncrAnalysisData.map(value => {
      // 不存在，放入值
      if (xAxisData.indexOf(value.statDate) === -1) {
        xAxisData.push(value.statDate);
      }

      // 判断是否有对应的 legend
      const legendIndex = legendData.indexOf(value.domainName);
      if (legendIndex !== -1) {
        series[legendIndex].push(value.industryCnt);
      }

      return value;
    });

    const myChart = echarts.init(document.querySelector('#companyGrowChart'));
    const option = {
      color: ['#2D8EEC', '#F68F49', '#46B8C1', '#8D55BB', '#64BB3E', '#E7565B', '#71C0FA'],
      tooltip: {
        trigger: 'axis',
        padding: [12, 14],
        axisPointer: {
          lineStyle: {
            color: '#ccc',
          },
        },
        backgroundColor: '#F7F7F7',
        textStyle: {
          color: '#333333',
        },
      },
      legend: {
        right: 0,
        itemWidth: 10,
        itemHeight: 10,
        data: legendDataS,
      },
      grid: {
        left: '0',
        right: '35px',
        bottom: '0',
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
          type: 'value',
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: '文化创意',
          type: 'line',
          stack: '增长量',
          areaStyle: {
            normal: {
              color: '#D3E7FA',
            },
          },
          itemStyle: {
            normal: {
              opacity: 0,
            },
            emphasis: {
              opacity: 1,
              borderColor: '#2D8EEC',
            },
          },
          lineStyle: {
            normal: {
              color: '#2D8EEC',
            },
          },
          data: series[0],
        },
        {
          name: '高端制造',
          type: 'line',
          stack: '增长量',
          areaStyle: {
            normal: {
              color: '#FCE9D8',
            },
          },
          itemStyle: {
            normal: {
              opacity: 0,
            },
            emphasis: {
              opacity: 1,
              borderColor: '#F68F49',
            },
          },
          lineStyle: {
            normal: {
              color: '#F68F49',
            },
          },
          data: series[1],
        },
        {
          name: '生物健康',
          type: 'line',
          stack: '增长量',
          areaStyle: {
            normal: {
              color: '#D6F0F2',
            },
          },
          itemStyle: {
            normal: {
              opacity: 0,
            },
            emphasis: {
              opacity: 1,
              borderColor: '#46B8C1',
            },
          },
          lineStyle: {
            normal: {
              color: '#46B8C1',
            },
          },
          data: series[2],
        },
        {
          name: '时尚行业',
          type: 'line',
          stack: '增长量',
          areaStyle: {
            normal: {
              color: '#E9DBF0',
            },
          },
          itemStyle: {
            normal: {
              opacity: 0,
            },
            emphasis: {
              opacity: 1,
              borderColor: '#8D55BB',
            },
          },
          lineStyle: {
            normal: {
              color: '#8D55BB',
            },
          },
          data: series[3],
        },
        {
          name: '旅游休闲',
          type: 'line',
          stack: '增长量',
          areaStyle: {
            normal: {
              color: '#DFF0D6',
            },
          },
          itemStyle: {
            normal: {
              opacity: 0,
            },
            emphasis: {
              opacity: 1,
              borderColor: '#64BB3E',
            },
          },
          lineStyle: {
            normal: {
              color: '#64BB3E',
            },
          },
          data: series[4],
        },
        {
          name: '数字经济',
          type: 'line',
          stack: '增长量',
          areaStyle: {
            normal: {
              color: '#F9DCDC',
            },
          },
          itemStyle: {
            normal: {
              opacity: 0,
            },
            emphasis: {
              opacity: 1,
              borderColor: '#E7565B',
            },
          },
          lineStyle: {
            normal: {
              color: '#E7565B',
            },
          },
          data: series[5],
        },
        {
          name: '金融服务',
          type: 'line',
          stack: '增长量',
          areaStyle: {
            normal: {
              color: '#E1F2FD',
            },
          },
          itemStyle: {
            normal: {
              opacity: 0,
            },
            emphasis: {
              opacity: 1,
              borderColor: '#71C0FA',
            },
          },
          lineStyle: {
            normal: {
              color: '#71C0FA',
            },
          },
          data: series[6],
        },
      ],
    };
    document.querySelector('#companyGrowChart').style.width = `${document.body.clientWidth -
      180 -
      80}px`;
    myChart.resize();
    myChart.setOption(option);
  }

  // 初始化经济分析图
  initEconomicChart() {
    const {
      indOverview: { getListEconomicAnalysisData },
    } = this.props;
    const { radioForEcon } = this.state;
    const name = radioForEcon === 'revenueOfEcon' ? '营收' : '税收';
    const option = [];
    const color = ['#D18C54', '#EB5252', '#8CD123', '#26B2BF', '#8F4DBF', '#1889F2', '#FA8F32'];
    for (const i in getListEconomicAnalysisData) {
      if (Object.prototype.hasOwnProperty.call(getListEconomicAnalysisData, i)) {
        const item = getListEconomicAnalysisData[i];
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

  // 初始化行业分析图
  initIndustryChart() {
    const { indOverview } = this.props;
    const { getListIndustryAnalysisData } = indOverview;

    // 气泡图
    const colorMap = {
      夕阳行业: '#8F4DBF',
      潜力行业: '#1889F2',
      一般行业: '#EB5252',
      成熟行业: '#FA8F32',
      龙头行业: '#26B2BF',
    };

    // tooltip 名字
    const cols = {
      industryCnt: {
        alias: '行业数',
      },
    };

    if (getListIndustryAnalysisData.length > 0) {
      document.querySelector('#mountNode').innerHTML = '';
      // 初始化
      const chart = new G2.Chart({
        container: 'mountNode',
        id: 'mountNode',
        forceFit: true,
        height: 350,
        padding: [40, 20, 60, 60],
      });
      // 装数据
      chart.source(getListIndustryAnalysisData);
      // 进行列定义
      chart.scale(cols);
      // 画轴
      chart.axis('revenueScope', {
        label: {
          formatter(value) {
            return `${value}`;
          },
        },
      });
      chart.axis('patentProp', {
        grid: {
          type: 'line',
          lineStyle: {
            lineWidth: 0,
            lineDash: [4, 4],
          },
          align: 'center', // 网格顶点从两个刻度中间开始
        },
      });
      chart.tooltip({
        showTitle: false, // 不显示默认标题
      });
      chart.legend('industryName', {
        clickable: false,
      });
      chart.legend('industryCnt', false);
      chart
        .point()
        .position('revenueScope*patentProp')
        .size('industryCnt', [10, 32])
        .color('industryName', val => {
          return colorMap[val];
        })
        .shape('circle')
        .tooltip('industryCnt')
        .style('industryName', {
          lineWidth: 1,
          strokeOpacity: 1,
          fillOpacity: 0.3,
          opacity: 0.65,
          stroke: function stroke(val) {
            return colorMap[val];
          },
        });
      chart.render();
    }
  }

  render() {
    const { radioForEcon } = this.state;
    const { indOverview } = this.props;

    const {
      getListCompanyIncrAnalysisData,
      getListEconomicAnalysisData,
      getListTopIndustryAnalysisData,
      getListIndustryAnalysisData,
    } = indOverview;

    const tableColumns = {
      sunIndustry: [
        {
          title: '行业名称',
          dataIndex: 'industrySmallName',
        },
        {
          title: '集中度',
          dataIndex: 'num',
          align: 'right',
          render: text => {
            return `${(text * 100).toFixed(2)}%`;
          },
        },
      ],
      capabilityIndustry: [
        {
          title: '行业名称',
          dataIndex: 'industrySmallName',
        },
        {
          title: '营收增幅',
          dataIndex: 'num',
          align: 'right',
          render: text => {
            return `${(text * 100).toFixed(2)}%`;
          },
        },
      ],
      matureIndustry: [
        {
          title: '行业名称',
          dataIndex: 'industrySmallName',
        },
        {
          title: '专利增幅',
          dataIndex: 'num',
          align: 'right',
          render: text => {
            return `${(text * 100).toFixed(2)}%`;
          },
        },
      ],
      tapIndustry: [
        {
          title: '行业名称',
          dataIndex: 'industrySmallName',
        },
        {
          title: '营业额(亿元)',
          dataIndex: 'num',
          align: 'right',
          render: text => {
            return `${(text / 100000000).toFixed(2)}`;
          },
        },
      ],
    };

    // 税务预警分析表格数据
    const tableData = {
      sunIndustry: [],
      capabilityIndustry: [],
      matureIndustry: [],
      tapIndustry: [],
      ...getListTopIndustryAnalysisData,
    };

    // 克隆税务预警分析
    const cloneTableData = _.cloneDeep(tableData);
    /* eslint no-param-reassign: ["error", { "props": false }] */
    if (cloneTableData.sunIndustry.length > 0) {
      cloneTableData.sunIndustry.map(value => {
        const formatValue = (value.num * 100).toFixed(2);
        return `${formatValue}%`;
      });
    }

    if (cloneTableData.capabilityIndustry.length > 0) {
      cloneTableData.capabilityIndustry.map(value => {
        const formatValue = (value.num * 100).toFixed(2);

        return `${formatValue}%`;
      });
    }

    if (cloneTableData.matureIndustry.length > 0) {
      cloneTableData.matureIndustry.map(value => {
        const formatValue = (value.num * 100).toFixed(2);

        return `${formatValue}%`;
      });
    }

    if (cloneTableData.tapIndustry.length > 0) {
      cloneTableData.tapIndustry.map(value => {
        return `${numeral(value.num / 100000000).format(0, 0.0)}`;
      });
    }

    // 栅格响应列表
    const listResponsiveProps = {
      xs: 24,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 6,
    };

    // 单选按钮
    const RadioHtml = (
      <Radio.Group
        onChange={this.handleonChangeForEconRadio}
        defaultValue={radioForEcon}
        buttonStyle="solid"
      >
        <Radio.Button value="revenueOfEcon">按营收</Radio.Button>
        <Radio.Button value="taxOfEcon">按税收</Radio.Button>
      </Radio.Group>
    );

    const chartOfCardType = radioForEcon === 'revenueOfEcon' ? '营收' : '税收';

    return (
      <Fragment>
        <MonthPicker
          disabledDate={current => current && current > moment().subtract(1, 'month')}
          allowClear={false}
          defaultValue={moment().subtract(1, 'month')}
          onChange={this.handleTimeOnChange}
          style={{ marginBottom: 12 }}
        />

        <Card bordered={false} bodyStyle={{ padding: '0 20px 20px' }}>
          <Card
            className={styles.cardTitleLeft}
            bordered={false}
            bodyStyle={{ padding: '20px 0 0 0' }}
            title="企业增长分析"
          >
            {getListCompanyIncrAnalysisData.length > 0 ? (
              <div id="companyGrowChart" style={{ width: '100%', height: '400px' }} />
            ) : (
              <NoData height="400px" padding="20px 0" />
            )}
          </Card>
        </Card>

        <Card bordered={false} bodyStyle={{ padding: '0 20px 20px' }} style={{ marginTop: 20 }}>
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
                <ChartOfCard
                  color="#D18C54"
                  data={getListEconomicAnalysisData[0]}
                  typeText={chartOfCardType}
                />
                <ChartOfCard
                  color="#EB5252"
                  data={getListEconomicAnalysisData[1]}
                  typeText={chartOfCardType}
                />
              </Col>
              <Col span={8}>
                <canvas id="econComposChart" style={{ width: '100%', height: '354px' }} />
              </Col>
              <Col span={8}>
                <ChartOfCard
                  color="#FA8F32"
                  data={getListEconomicAnalysisData[6]}
                  typeText={chartOfCardType}
                />
                <ChartOfCard
                  color="#1889F2"
                  data={getListEconomicAnalysisData[5]}
                  typeText={chartOfCardType}
                />
              </Col>
            </Row>
            <Row gutter={20} style={{ marginTop: '20px' }}>
              <Col span={8}>
                <ChartOfCard
                  color="#8CD123"
                  data={getListEconomicAnalysisData[2]}
                  typeText={chartOfCardType}
                />
              </Col>
              <Col span={8}>
                <ChartOfCard
                  color="#26B2BF"
                  data={getListEconomicAnalysisData[3]}
                  typeText={chartOfCardType}
                />
              </Col>
              <Col span={8}>
                <ChartOfCard
                  color="#8F4DBF"
                  data={getListEconomicAnalysisData[4]}
                  typeText={chartOfCardType}
                />
              </Col>
            </Row>
          </Card>
        </Card>

        <Card bordered={false} bodyStyle={{ padding: '0 20px 20px' }} style={{ marginTop: 20 }}>
          <Card
            className={styles.cardTitleLeft}
            bordered={false}
            bodyStyle={{ padding: '20px 0 0 0' }}
            title="行业分析"
          >
            {getListIndustryAnalysisData.length > 0 ? (
              <div id="mountNode" />
            ) : (
              <NoData height="312px" padding="20px 0" />
            )}

            <Divider style={{ margin: '20px 0 16px' }} />

            <div className={styles.selfTable}>
              <Row>
                <Col {...listResponsiveProps}>
                  <Table
                    title={() => '夕阳行业预警TOP 5'}
                    columns={tableColumns.sunIndustry}
                    dataSource={cloneTableData.sunIndustry}
                    rowKey={record => {
                      return `${record.rank}${Math.random()}`;
                    }}
                    size="small"
                    pagination={false}
                  />
                </Col>
                <Col {...listResponsiveProps}>
                  <Table
                    title={() => '潜力行业TOP 5'}
                    columns={tableColumns.capabilityIndustry}
                    dataSource={cloneTableData.capabilityIndustry}
                    rowKey={record => {
                      return `${record.rank}${Math.random()}`;
                    }}
                    size="small"
                    pagination={false}
                  />
                </Col>
                <Col {...listResponsiveProps}>
                  <Table
                    title={() => '成熟行业破局TOP 5'}
                    columns={tableColumns.matureIndustry}
                    dataSource={cloneTableData.matureIndustry}
                    rowKey={record => `${record.rank}${Math.random()}`}
                    size="small"
                    pagination={false}
                  />
                </Col>
                <Col {...listResponsiveProps}>
                  <Table
                    title={() => '龙头行业TOP 5'}
                    columns={tableColumns.tapIndustry}
                    dataSource={cloneTableData.tapIndustry}
                    rowKey={record => {
                      return `${record.rank}${Math.random()}`;
                    }}
                    size="small"
                    pagination={false}
                  />
                </Col>
              </Row>
            </div>
          </Card>
        </Card>
      </Fragment>
    );
  }
}
