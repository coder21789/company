import React, { Component, Fragment } from 'react';

import { connect } from 'dva';
import { Row, Col, DatePicker, Card, Radio, Tabs, Table } from 'antd';
import { Chart, Geom, Axis, Tooltip, Coord } from 'bizcharts';

import moment from 'moment';
import numeral from 'numeral';
import classNames from 'classnames';
import { DataView } from '@antv/data-set';
import { Bar } from 'components/OCharts';

import styles from './EconIndexAnalysis.less';

const { TabPane } = Tabs;
const { MonthPicker } = DatePicker;
const cardClassName = classNames({
  'content-card': true,
});

// 时间选择禁止
const disabledDate = current => current && current > moment().subtract(1, 'month');
const defaultValueDate = moment().subtract(1, 'month');

function drawCoreChart(type = 'allCompany', data = { allCompany: [{}], scaleCompany: [{}] }) {
  let allCompanyData = [
    { item: '管理能力', 企业当年平均能力: 0, 企业去年平均能力: 0 },
    { item: '获利能力', 企业当年平均能力: 0, 企业去年平均能力: 0 },
    { item: '效率水平', 企业当年平均能力: 0, 企业去年平均能力: 0 },
    { item: '发展能力', 企业当年平均能力: 0, 企业去年平均能力: 0 },
    { item: '贡献能力', 企业当年平均能力: 0, 企业去年平均能力: 0 },
  ];

  const value = data[type] && data[type][0];
  if (Object.keys(value).length > 0) {
    allCompanyData = [
      {
        item: '管理能力',
        企业当年平均能力: value.manageAbility ? value.manageAbility : 0,
        企业去年平均能力: value.manageAbilityLy ? value.manageAbility : 0,
      },
      {
        item: '获利能力',
        企业当年平均能力: value.profitAbility ? value.profitAbility : 0,
        企业去年平均能力: value.profitAbilityLy ? value.profitAbilityLy : 0,
      },
      {
        item: '效率水平',
        企业当年平均能力: value.efficiencyAbility ? value.efficiencyAbility : 0,
        企业去年平均能力: value.efficiencyAbilityLy ? value.efficiencyAbilityLy : 0,
      },
      {
        item: '发展能力',
        企业当年平均能力: value.developAbility ? value.developAbility : 0,
        企业去年平均能力: value.developAbilityLy ? value.developAbilityLy : 0,
      },
      {
        item: '贡献能力',
        企业当年平均能力: value.contributeAbility ? value.contributeAbility : 0,
        企业去年平均能力: value.contributeAbilityLy ? value.contributeAbilityLy : 0,
      },
    ];
  }

  const dv = new DataView().source(allCompanyData);
  dv.transform({
    type: 'fold',
    fields: ['企业当年平均能力', '企业去年平均能力'], // 展开字段集
    key: 'user', // key字段
    value: 'score', // value字段
  });

  return dv;
}

const tableColumns = {
  ability: [
    {
      title: '排名',
      dataIndex: 'abilityRank',
      align: 'left',
    },
    {
      title: '企业',
      dataIndex: 'companyName',
      render: text => <span className={styles.textNoWrap}>{text}</span>,
    },
    {
      title: `能力`,
      dataIndex: 'abilityContent',
      align: 'right',
      render: text => `${numeral(text).format('0, 0.00')}`,
    },
  ],
  increase: [
    {
      title: '排名',
      dataIndex: 'increaseRank',
      align: 'left',
    },
    {
      title: '企业',
      dataIndex: 'companyName',
      render: text => <span className={styles.textNoWrap}>{text}</span>,
    },
    {
      title: `能力增幅`,
      dataIndex: 'increasePercent',
      align: 'right',
      render: text => `${(text * 100).toFixed(2)}%`,
    },
  ],
  decrease: [
    {
      title: '排名',
      dataIndex: 'decreaseRank',
      align: 'left',
    },
    {
      title: '企业',
      dataIndex: 'companyName',
      render: text => <span className={styles.textNoWrap}>{text}</span>,
    },
    {
      title: `能力降幅`,
      dataIndex: 'decreasePercent',
      align: 'right',
      render: text => `${(text * 100).toFixed(2)}%`,
    },
  ],
};

const cols = {
  score: {
    min: 0,
    max: 100,
  },
};

const listResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 8,
  lg: 8,
  xl: 8,
};

@connect(({ econIndexAnalysis }) => ({
  econIndexAnalysis,
}))
export default class EconAnaIndex extends Component {
  state = {
    statDate: moment()
      .subtract(1, 'month')
      .format('YYYYMM'),
    coreTabKey: 'allCompany',
    topTabKey: 'manageAbility',
    topSubKey: 'allCompany',
  };

  componentDidMount() {
    this.init();
  }

  handleTimeOnChange = date => {
    const statDate = date.format('YYYYMM');
    this.setState({ statDate }, () => {
      this.init();
    });
  };

  handleonChangeCore = e => {
    this.setState({
      coreTabKey: e.target.value,
    });
  };

  handleAbilityTabChange = key => {
    this.setState({
      topTabKey: key,
    });

    this.setState({
      topSubKey: 'allCompany',
    });
  };

  handleonChangeTop = e => {
    this.setState({
      topSubKey: e.target.value,
    });
  };

  init() {
    const { statDate } = this.state;
    const { dispatch } = this.props;

    // 核心数据
    dispatch({
      type: 'econIndexAnalysis/fetchGetListCoreIndicators',
      payload: {
        statDate,
      },
    });

    // 能力详情
    dispatch({
      type: 'econIndexAnalysis/fetchGetListAbilityDetails',
      payload: {
        statDate,
      },
    });
  }

  render() {
    const { coreTabKey, topTabKey, topSubKey } = this.state;
    const {
      econIndexAnalysis: { getListCoreIndicatorsData, getListAbilityDetailsData },
    } = this.props;

    const coreChartData = drawCoreChart(coreTabKey, getListCoreIndicatorsData);
    // 图表数据
    const chartData = getListAbilityDetailsData[topTabKey].compDistRes.allCompany;
    const chartData2 = getListAbilityDetailsData[topTabKey].compDistRes.scaleCompany;

    const data1 = [];
    const data2 = [];
    const xData = [];
    const legend = ['所有行业', '规模企业'];
    const yName = '企业数';
    const tabArray = [
      {
        key: 'manageAbility',
        name: '管理能力',
      },
      {
        key: 'profitAbility',
        name: '获利能力',
      },
      {
        key: 'efficiLevel',
        name: '效率水平',
      },
      {
        key: 'developLevel',
        name: '发展能力',
      },
      {
        key: 'contriAbility',
        name: '贡献能力',
      },
    ];
    const tooltipTitle =
      tabArray.find(value => value.key === topTabKey) &&
      tabArray.find(value => value.key === topTabKey).name;
    const xName = '管理能力等级';

    for (let i = 0; i < chartData.length; i += 1) {
      const item = chartData[i];
      data1.push(item.companyCnt);
    }

    for (let i = 0; i < chartData2.length; i += 1) {
      const item = chartData2[i];
      data2.push(item.companyCnt);
      xData.push(item.levelRange);
    }

    // 列表数据
    const tableData = {
      ability: [],
      increase: [],
      decrease: [],
      ...getListAbilityDetailsData[topTabKey].ecoIndexDetailTopRes[topSubKey],
    };

    const RadioHtml = (
      <Radio.Group onChange={this.handleonChangeCore} defaultValue={coreTabKey} buttonStyle="solid">
        <Radio.Button value="allCompany">全部</Radio.Button>
        <Radio.Button value="scaleCompany">规模企业</Radio.Button>
      </Radio.Group>
    );

    const RadioTopHtml = (
      <Radio.Group onChange={this.handleonChangeTop} defaultValue={coreTabKey} buttonStyle="solid">
        <Radio.Button value="allCompany">全部</Radio.Button>
        <Radio.Button value="scaleCompany">规模企业</Radio.Button>
      </Radio.Group>
    );

    return (
      <Fragment>
        <MonthPicker
          disabledDate={disabledDate}
          allowClear={false}
          defaultValue={defaultValueDate}
          onChange={this.handleTimeOnChange}
          className={styles.monthPickerStyle}
        />

        <Card className={cardClassName} bordered={false} bodyStyle={{ padding: '0 20px 20px' }}>
          <Card
            className={classNames({
              [styles.cardTitleTab]: true,
            })}
            extra={RadioHtml}
            bordered={false}
            bodyStyle={{
              padding: '20px 0 0 0',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
            title="核心指标"
          >
            <Chart
              width={500}
              height={400}
              data={coreChartData}
              padding={[20, 20, 20, 20]}
              scale={cols}
            >
              <Coord type="polar" radius={0.9} />
              <Axis
                name="item"
                tickLine={null}
                grid={{
                  lineStyle: {
                    lineDash: null,
                  },
                  hideFirstLine: false,
                }}
              />
              <Tooltip
                g2-tooltip={{
                  position: 'absolute',
                  visibility: 'hidden',
                  border: '1px solid #efefef',
                  backgroundColor: 'white',
                  color: '#000',
                  opacity: '0.8',
                  padding: '5px 15px',
                  transition: 'top 200ms,left 200ms',
                }}
              />
              <Axis name="score" tickLine={null} />
              <Geom
                type="area"
                tooltip={false}
                color={[
                  'user',
                  value =>
                    value !== '企业当年平均能力'
                      ? 'RGBA(24, 137, 242, 0.2)'
                      : 'RGBA(38, 178, 191, 0.2)',
                ]}
                position="item*score"
              />
              <Geom
                type="line"
                position="item*score"
                color={[
                  'user',
                  value =>
                    value !== '企业当年平均能力'
                      ? 'RGBA(24, 137, 242, 1)'
                      : 'RGBA(38, 178, 191, 1)',
                ]}
                size={2}
              />
              <Geom
                type="point"
                color={[
                  'user',
                  value =>
                    value !== '企业当年平均能力'
                      ? 'RGBA(24, 137, 242, 1)'
                      : 'RGBA(38, 178, 191, 1)',
                ]}
                position="item*score"
                shape="circle"
                size={4}
              />
            </Chart>

            <div
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                fontSize: '12px',
              }}
            >
              <div>
                <i
                  style={{
                    width: '10px',
                    height: '10px',
                    display: 'inline-block',
                    borderRadius: '50%',
                    marginRight: '10px',
                    backgroundColor: 'RGBA(24, 137, 242, 1)',
                  }}
                />
                企业当年平均能力
              </div>
              <div>
                <i
                  style={{
                    width: '10px',
                    height: '10px',
                    display: 'inline-block',
                    borderRadius: '50%',
                    marginRight: '10px',
                    backgroundColor: 'RGBA(38, 178, 191, 1)',
                  }}
                />
                企业去年平均能力
              </div>
              <span>
                统计企业数：{getListCoreIndicatorsData[coreTabKey] &&
                getListCoreIndicatorsData[coreTabKey][0]
                  ? getListCoreIndicatorsData[coreTabKey][0].companyCnt
                  : 0}
              </span>
            </div>
          </Card>
        </Card>

        <Card
          className={cardClassName}
          bordered={false}
          bodyStyle={{ padding: '0 20px 20px' }}
          style={{ marginTop: 20 }}
        >
          <Tabs
            onChange={this.handleAbilityTabChange}
            size="large"
            tabBarStyle={{ marginBottom: 12 }}
          >
            <TabPane tab="管理能力" key="manageAbility" />
            <TabPane tab="获利能力" key="profitAbility" />
            <TabPane tab="效率水平" key="efficiLevel" />
            <TabPane tab="发展能力" key="developLevel" />
            <TabPane tab="贡献能力" key="contriAbility" />
          </Tabs>
          <Card type="inner" title="企业数分布">
            <Bar
              tooltipExtra={{
                formatter: params => {
                  return `${tooltipTitle}等级：${params[0].axisValueLabel}<br />
                <div style="display: inline-block; vertical-align: middle; width: 6px; height: 6px; border-radius: 50%; background-color: ${
                  params[0].color.colorStops[1].color
                }; margin-right: 6px;"></div>
                ${params[0].seriesName}：${params[0].value}<br />
                <span style="display: inline-block; vertical-align: middle; width: 6px; height: 6px; border-radius: 50%; background-color: ${
                  params[1].color.colorStops[1].color
                }; margin-right: 6px;"></span>
                ${params[1].seriesName}：${params[1].value}
                `;
                },
              }}
              yName={yName}
              xName={xName}
              legend={legend}
              data1={data1}
              data2={data2}
              xData={xData}
            />
          </Card>
          <Card type="inner" bodyStyle={{ padding: '0 20px 20px' }} style={{ marginTop: 20 }}>
            <Card
              className={classNames({
                [styles.cardTitleTab]: true,
              })}
              extra={RadioTopHtml}
              bordered={false}
              bodyStyle={{ padding: '20px 0 0 0' }}
              title="TOP10 企业"
            >
              <Row>
                <Col {...listResponsiveProps}>
                  <div className={styles.sleeveLessList}>
                    <Table
                      columns={tableColumns.ability}
                      dataSource={tableData.ability}
                      rowKey={record => `${record.rank}${Math.random()}`}
                      size="small"
                      pagination={false}
                    />
                  </div>
                </Col>
                <Col {...listResponsiveProps}>
                  <div className={styles.sleeveLessList}>
                    <Table
                      columns={tableColumns.increase}
                      dataSource={tableData.increase}
                      rowKey={record => `${record.increaseRank}${Math.random()}`}
                      size="small"
                      pagination={false}
                    />
                  </div>
                </Col>
                <Col {...listResponsiveProps}>
                  <div className={styles.sleeveLessList}>
                    <Table
                      style={{
                        borderRight: 'none',
                      }}
                      columns={tableColumns.decrease}
                      dataSource={tableData.decrease}
                      rowKey={record => `${record.decreaseRank}${Math.random()}`}
                      size="small"
                      pagination={false}
                    />
                  </div>
                </Col>
              </Row>
            </Card>
          </Card>
        </Card>
      </Fragment>
    );
  }
}
