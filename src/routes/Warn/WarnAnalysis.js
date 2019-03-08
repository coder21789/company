import React, { Component, Fragment } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { DatePicker, Row, Col, Icon, Menu, Dropdown, Card, Table } from 'antd';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import { MiniMap } from 'components/OCharts';

import styles from './WarnAnalysis.less';

const { MonthPicker } = DatePicker;

@connect(({ warnAnalysis }) => ({
  warnAnalysis,
}))
export default class WarnAnalysis extends Component {
  state = {
    statDate: moment()
      .subtract(1, 'month')
      .format('YYYYMM'),
    areaType: 601,
    scaleTypeId: 1,
    riskLevelSort: 1,
    catagorySort: '',
    timeSort: '',
    pagination: {
      showQuickJumper: true,
      defaultCurrent: 1,
      total: 10,
      pageSize: 10,
    },
  };

  componentDidMount() {
    this.initData(this.state);
  }

  shouldComponentUpdate() {
    this.initPie();
    this.initRiskday();
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    const { statDate, scaleTypeId } = this.state;
    if (nextState.scaleTypeId !== scaleTypeId || nextState.statDate !== statDate) {
      this.initData(nextState);
    }
  }

  onClick = ({ key }) => {
    const scaleTypeId = parseInt(key, 10);
    this.setState({
      scaleTypeId,
    });
  };

  // 时间选择
  handleTimeOnChange = date => {
    const statDate = date.format('YYYYMM');
    this.setState({
      statDate,
    });
  };

  handleTableChange = (pagination, filters, sorter) => {
    const { dispatch } = this.props;
    const { statDate, scaleTypeId } = this.state;
    let sortLevel = '';
    let sortType = '';
    let sortTime = '';
    if (sorter) {
      if (sorter.columnKey === 'riskLevelName') {
        sortLevel = sorter.order === 'ascend' ? 0 : 1;
      }
      if (sorter.columnKey === 'catagory') {
        sortType = sorter.order === 'ascend' ? 0 : 1;
      }
      if (sorter.columnKey === 'createTime') {
        sortTime = sorter.order === 'ascend' ? 0 : 1;
      }
    }

    dispatch({
      type: 'warnAnalysis/fetchGetRiskmessageData',
      payload: {
        statDate,
        scaleTypeId,
        start: pagination.current,
        riskLevelSort: sortLevel,
        catagorySort: sortType,
        timeSort: sortTime,
      },
    });
    this.setState({
      pagination,
      riskLevelSort: sortLevel,
      catagorySort: sortType,
      timeSort: sortTime,
    });
  };

  initSetPieOption = option => {
    return {
      tooltip: {
        trigger: 'item',
        show: true,
        formatter() {
          return `<i style="border:3px solid ${option.color1};border-radius: 100%;overflow:hidden;
          height:0;width:0;font-size:0;display:inline-block;margin-right:5px;"></i>${option.name}
          <br/> 预警次数：${option.riskCnt}<br/>占比：${option.riskCntYny}%`;
        },
        padding: 10,
        borderRadius: 8,
        axisPointer: {
          lineStyle: {
            color: '#ccc',
          },
        },
        backgroundColor: 'rgba(247,247,247,1)',
        textStyle: {
          color: '#333',
          fontSize: 12,
        },
        position(p) {
          return [p[0] - 30, p[1]];
        },
      },
      color: [
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: option.color0,
            },
            {
              offset: 1,
              color: option.color1,
            },
          ],
          globalCoord: false, // 缺省为 false
        },
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: option.color2,
            },
            {
              offset: 1,
              color: option.color2,
            },
          ],
          globalCoord: false, // 缺省为 false
        },
      ],
      series: [
        {
          type: 'pie',
          radius: ['92.5%', '100%'],
          avoidLabelOverlap: false,
          hoverAnimation: false,
          label: {
            normal: {
              show: true,
              position: 'center',
              formatter() {
                return `${option.riskCntYny}%`;
              },
              textStyle: {
                fontSize: 20,
                color: option.color0,
              },
            },
          },
          data: [
            {
              value: option.riskCntYny,
              name: option.riskCntYny,
            },
            { value: 100 - option.riskCntYny },
          ],
        },
      ],
    };
  };

  initData(state) {
    const { dispatch } = this.props;
    const { statDate, scaleTypeId, pagination, riskLevelSort, timeSort, catagorySort } = state;
    dispatch({
      type: 'warnAnalysis/fetchGetRiskdayData',
      payload: {
        statDate,
        scaleTypeId,
      },
    });

    dispatch({
      type: 'warnAnalysis/fetchGetRiskmonData',
      payload: {
        statDate,
        scaleTypeId,
      },
    });

    dispatch({
      type: 'warnAnalysis/fetchGetRiskregionData',
      payload: {
        statDate,
        scaleTypeId,
      },
    });
    dispatch({
      type: 'warnAnalysis/fetchGetRiskmessageData',
      payload: {
        statDate,
        scaleTypeId,
        start: pagination.defaultCurrent,
        riskLevelSort,
        catagorySort,
        timeSort,
      },
    });
  }

  initRiskday() {
    const {
      warnAnalysis: { getRiskdayData },
    } = this.props;
    if (
      getRiskdayData.length === 0 ||
      (getRiskdayData.creditRisk.length === 0 && getRiskdayData.manageRisk.length === 0)
    ) {
      return;
    }
    const name2 = getRiskdayData.manageRisk ? '经营风险' : '';
    const name1 = getRiskdayData.creditRisk ? '信用纠纷' : '';
    const seriesData1 = [];
    const seriesData2 = [];
    const xAxisData1 = [];
    const xAxisData2 = [];

    getRiskdayData.creditRisk.map(value => {
      seriesData1.push(value.riskCnt);
      if (value.statDate) {
        const date = `${value.statDate}`.replace(/(\d{4})(\d{2})(\d{2})/g, '$2-$3');
        xAxisData1.push(date);
      }
      return value;
    });

    getRiskdayData.manageRisk.map(value => {
      seriesData2.push(value.riskCnt);
      if (value.statDate) {
        const date = `${value.statDate}`.replace(/(\d{4})(\d{2})(\d{2})/g, '$2-$3');
        xAxisData2.push(date);
      }
      return value;
    });
    let xAxisData;
    if (
      getRiskdayData.creditRisk.length > 0 &&
      getRiskdayData.creditRisk.length > getRiskdayData.manageRisk.length
    ) {
      xAxisData = xAxisData1;
    }
    if (
      getRiskdayData.manageRisk.length > 0 &&
      getRiskdayData.manageRisk.length > getRiskdayData.creditRisk.length
    ) {
      xAxisData = xAxisData2;
    }

    const series = [
      {
        name: name2,
        type: 'line',
        itemStyle: {
          normal: {
            lineStyle: {
              color: '#1889F2',
            },
          },
        },
        smooth: false,
        showSymbol: false,
        data: seriesData2,
      },
      {
        name: name1,
        type: 'line',
        smooth: false,
        showSymbol: false,
        itemStyle: {
          normal: {
            lineStyle: {
              color: '#FA8F32',
            },
          },
        },
        data: seriesData1,
      },
    ];

    const myChart = echarts.init(this.echarts);
    const option = {
      color: ['#1889F2', '#FA8F32'],
      tooltip: {
        trigger: 'axis',
        padding: [12, 14],
        borderRadius: 8,
        axisPointer: {
          lineStyle: {
            color: 'rgba(204,204,204,0.5)',
          },
        },
        backgroundColor: 'rgba(247,247,247,1)',
        textStyle: {
          color: '#333',
          fontSize: 12,
        },
        position(p) {
          if (p[0] < 80) {
            return [p[0], p[1] - 30];
          } else {
            return [p[0] - 100, p[1] - 30];
          }
        },
      },
      legend: {
        right: 12,
        itemWidth: 10,
        itemHeight: 10,
        top: 12,
        icon: 'circle',
        textStyle: {
          color: '#666',
          fontSize: 12,
        },
      },
      grid: {
        x2: 0,
        x: 21,
        y: 44,
        y2: 20,
      },
      xAxis: {
        type: 'category',
        data: xAxisData,
        axisLine: {
          lineStyle: {
            color: 'rgba(220,222,227,1)',
          },
        },
        axisLabel: {
          color: 'rgba(0,0,0,0.45)',
          align: 'left',
        },
        axisTick: {
          alignWithLabel: true,
        },

        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        name: '预警次数',
        nameTextStyle: {
          color: 'rgba(0,0,0,0.65)',
          fontSize: 12,
          padding: [12, 0, 0, 4],
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(220,222,227,0)',
          },
        },
        splitLine: {
          show: true,
          //  改变轴线颜色
          lineStyle: {
            // 使用深浅的间隔色
            color: ['rgba(242,243,247,1)'],
          },
        },
        axisLabel: {
          align: 'center',
          color: '#999',
        },
      },
      series,
    };
    myChart.setOption(option);
    window.addEventListener('resize', () => {
      myChart.resize();
    });
  }

  initPie() {
    const {
      warnAnalysis: { getRiskmonData },
    } = this.props;

    if (getRiskmonData.length === 0 || getRiskmonData.riskMon.length === 0) {
      return;
    }

    if (getRiskmonData.riskMon[0]) {
      const myChart1 = echarts.init(this.echartsPieId1);
      const option1 = getRiskmonData.riskMon[0];
      const data1 = {
        catagoryTypeId: option1.catagoryTypeId,
        riskCnt: option1.riskCnt,
        riskCntYny: option1.riskCntYny,
        name:
          option1.catagoryTypeId === 1
            ? '信用纠纷'
            : option1.catagoryTypeId === 2
              ? '经营风险'
              : '税源聚变',
        color0: '#FD7D4B',
        color1: '#FD4B5C',
        color2: '#FDEDED',
      };
      myChart1.setOption(this.initSetPieOption(data1));
      window.addEventListener('resize', () => {
        myChart1.resize();
      });
    }

    if (getRiskmonData.riskMon[1]) {
      const myChart2 = echarts.init(this.echartsPieId2);
      const option2 = getRiskmonData.riskMon[1];
      const data2 = {
        catagoryTypeId: option2.catagoryTypeId,
        riskCnt: option2.riskCnt,
        riskCntYny: option2.riskCntYny,
        name:
          option2.catagoryTypeId === 1
            ? '信用纠纷'
            : option2.catagoryTypeId === 2
              ? '经营风险'
              : '税源聚变',
        color0: '#367BEC',
        color1: '#00CEFB',
        color2: '#EAF1FD',
      };
      myChart2.setOption(this.initSetPieOption(data2));
      window.addEventListener('resize', () => {
        myChart2.resize();
      });
    }

    if (getRiskmonData.riskMon[2]) {
      const myChart3 = echarts.init(this.echartsPieId3);
      const option3 = getRiskmonData.riskMon[2];
      const data3 = {
        catagoryTypeId: option3.catagoryTypeId,
        riskCnt: option3.riskCnt,
        riskCntYny: option3.riskCntYny,
        name:
          option3.catagoryTypeId === 1
            ? '信用纠纷'
            : option3.catagoryTypeId === 2
              ? '经营风险'
              : '税源聚变',
        color0: '#FA8F32',
        color1: '#FEE12C',
        color2: '#FFF5E0',
      };
      myChart3.setOption(this.initSetPieOption(data3));
      window.addEventListener('resize', () => {
        myChart3.resize();
      });
    }
  }

  render() {
    const {
      warnAnalysis: { getRiskmonData, getRiskregionData, getRiskmessageData, pathStyle },
    } = this.props;

    const { scaleTypeId, pagination } = this.state;
    const menu = (
      <Menu onClick={this.onClick}>
        <Menu.Item key="1">全部</Menu.Item>
        <Menu.Item key="2">规上</Menu.Item>
      </Menu>
    );
    const Columns = [
      {
        title: '预警等级',
        dataIndex: 'riskLevelName',
        key: 'riskLevelName',
        sorter: true,
      },
      {
        title: '企业名称',
        dataIndex: 'companyName',
        key: 'companyName',
        width: '20%',
      },
      {
        title: '预警类型',
        dataIndex: 'catagory',
        sorter: true,
      },
      {
        title: '预警内容',
        dataIndex: 'catagoryContent',
        key: 'catagoryContent',
        width: '30%',
      },
      {
        title: '发生时间',
        dataIndex: 'createTime',
        key: 'createTime',
        sorter: true,
      },
      {
        title: '操作',
        dataIndex: 'href',
        key: 'href',
      },
    ];
    const areaColumns = [
      {
        title: '排名',
        dataIndex: 'rank',
        width: '15%',
      },
      {
        title: '街道',
        dataIndex: 'areaTypeName',
        key: 'areaTypeName',
        width: '30%',
      },
      {
        title: '预警次数',
        dataIndex: 'riskCnt',
        key: 'riskCnt',
        width: '20%',
      },
      {
        title: '占比',
        dataIndex: 'riskCntYny',
        key: 'riskCntYny',
        width: '15%',
      },
    ];

    const riskList = [];
    if (getRiskmessageData.riskList) {
      pagination.total = getRiskmessageData.count;
      getRiskmessageData.riskList.filter(v =>
        riskList.push({
          riskLevelName: v.riskLevelName,
          dataIndex: v.dataIndex,
          companyName: v.companyName,
          catagory: v.catagory,
          catagoryContent: v.catagoryContent,
          createTime:
            v.createTime.length > 6
              ? moment(v.createTime).format('YYYY-MM-DD')
              : `${v.createTime}`.replace(/(\d{4})(\d{2})/g, '$1-$2'),
          href: (
            <a
              href={`#/company/compdetail/${v.companyId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              查看企业
            </a>
          ),
        })
      );
    }

    const regionAnaDos = [];
    if (getRiskregionData.regionAnaDos) {
      getRiskregionData.regionAnaDos.filter((v, i) =>
        regionAnaDos.push({
          areaId: v.areaId,
          rank: i + 1,
          areaTypeName: v.areaTypeName,
          riskCnt: v.riskCnt,
          riskCntYny: `${v.riskCntYny}%`,
          formatData: [
            `街道：${v.areaTypeName}`,
            `预警次数：${v.riskCnt}`,
            `预警占比：${v.riskCntYny}%`,
          ],
        })
      );
    }

    return (
      <Fragment>
        <Row className={styles.bar}>
          <Col span={9} style={{ maxWidth: 256 }}>
            <span className={styles.name}>时间：</span>
            <MonthPicker
              disabledDate={current => current && current > moment().subtract(1, 'month')}
              size="large"
              allowClear={false}
              defaultValue={moment().subtract(1, 'month')}
              onChange={this.handleTimeOnChange}
              placeholder="选择日期"
            />
          </Col>
          <Col span={10}>
            <span className={styles.name}>企业范围：</span>
            <Dropdown overlay={menu}>
              <a className={styles.enterprise}>
                {scaleTypeId === 1 ? '全部' : '规上'}{' '}
                <Icon className={`anticon anticon-down1 ${styles.down1}`} />
              </a>
            </Dropdown>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span="8" className={styles.warn_num}>
            <Card className={styles.card} bordered={false} bodyStyle={{ padding: '20px' }}>
              <div className={styles.card_title}>预警次数</div>
              <div className={styles.max}>
                {getRiskmonData.count}
                <span className={styles.max_font}>次</span>
              </div>
              <div className={styles.card_content}>
                <div className={styles.card_chart}>
                  <div
                    id="TaxChange"
                    ref={c => {
                      this.echartsPieId3 = c;
                    }}
                    style={{ width: '100%', height: 80 }}
                    className={styles.taxChange}
                  >
                    &nbsp;
                  </div>
                  <div className={styles.card_chart_title}>税源骤变</div>
                </div>
                <div className={styles.card_chart}>
                  <div
                    id="Management"
                    ref={c => {
                      this.echartsPieId2 = c;
                    }}
                    style={{ width: '100%', height: 80 }}
                  >
                    &nbsp;
                  </div>
                  <div className={styles.card_chart_title}>经营风险</div>
                </div>
                <div className={styles.card_chart}>
                  <div
                    id="CreditDispute"
                    ref={c => {
                      this.echartsPieId1 = c;
                    }}
                    style={{ width: '100%', height: 80 }}
                  >
                    &nbsp;
                  </div>
                  <div className={styles.card_chart_title}>信用纠纷</div>
                </div>
              </div>
            </Card>
          </Col>
          <Col span="16">
            <Card className={styles.card} bodyStyle={{ padding: '20px' }}>
              <div className={styles.card_title}>趋势分析(税源骤变除外)</div>
              <div
                id="Trend"
                ref={c => {
                  this.echarts = c;
                }}
                style={{ width: '100%', height: '210px' }}
              >
                &nbsp;
              </div>
            </Card>
          </Col>
        </Row>
        <Card className={`${styles.card} ${styles.map}`} bodyStyle={{ padding: '20px' }}>
          <div className={styles.card_title}>区域分析</div>
          <div className={styles.map}>
            <div className={styles.adminAreaWrap}>
              <div className={styles.left}>
                <MiniMap
                  title="预警次数"
                  container="#revenueAreaMap"
                  formatData={regionAnaDos}
                  pathStyle={pathStyle}
                />
              </div>
              <div className={styles.right}>
                <Table
                  columns={areaColumns}
                  dataSource={regionAnaDos}
                  pagination={false}
                  rowKey={() => `${Math.random()}`}
                  scroll={{ y: 359 }}
                />
              </div>
            </div>
          </div>
        </Card>
        <Card
          className={`${styles.card} ${styles.lastCard}`}
          bordered={false}
          bodyStyle={{ padding: '20px 20px 4px' }}
        >
          <div className={styles.card_title}>预警信息列表</div>
          <div className={styles.sleeveLessList}>
            <Table
              size="default"
              columns={Columns}
              dataSource={riskList}
              rowKey={() => `${Math.random()}`}
              onChange={this.handleTableChange}
              pagination={pagination}
            />
          </div>
        </Card>
      </Fragment>
    );
  }
}
