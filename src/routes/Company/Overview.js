import React, { Component, Fragment } from 'react';
import { Row, Col, Menu, Dropdown, Icon, Card, Checkbox, Table, Radio } from 'antd';
import { Pie, Bar, Line } from 'components/OCharts';
import { connect } from 'dva';
import {
  revenueLevels,
  taxLevels,
  industrys,
  yearEstabs,
  scoreLevels,
  regisCaps,
} from './options.js';

import noCompany from '../../assets/no-company.svg';
import styles from './Overview.less';
import NoData from '../../components/OCharts/NoData/index';
import PieSingle from '../../components/OCharts/pieSingle/index';
import OBar from '../../components/OCharts/comBar/index';

@connect(({ compOverview, loading }) => ({
  compOverview,
  loading: loading.effects['compOverview/fetchListTrend'],
}))
export default class Overview extends Component {
  state = {
    dropdownOption: [
      {
        name: '近12月营收等级：',
        data: revenueLevels,
        value: '全部',
      },
      {
        name: '近12月税收等级：',
        data: taxLevels,
        value: '全部',
      },
      {
        name: '产业：',
        data: industrys,
        value: '全部',
      },
      {
        name: '成立年限：',
        data: yearEstabs,
        value: '全部',
      },
      {
        name: '注册资本：',
        data: regisCaps,
        value: '全部',
      },
      {
        name: '评分等级：',
        data: scoreLevels,
        value: '全部',
      },
    ],
    radioOption: ['规上、限上企业', '上市企业', '新三板企业', '独角兽', '准独角兽'],
    requiredParameter: {
      revenueLevelId: '', // 近12月营收等级ID
      taxLevelId: '', // 近12月税收等级ID
      industryId: '', // 七大产业ID
      yearEstabId: '', // 成立年限ID
      regisCapId: '', // 注册资本ID
      scoreLevelId: '', // 评分等级ID
      ifLimit: 0, // 是否规上/限上，1：是0：否
      ifMarket: 0, // 是否上市企业，1：是0：否
      ifNewThreeBoard: 0, // 是否新三板企业，1：是0：否
      ifUnicorn: 0, // 是否独角兽，1：是0：否
      ifQuasiUnicorn: 0, // 是否准独角兽，1：是0：否
    },
    econ: 'revenue',
  };

  componentDidMount() {
    const { requiredParameter } = this.state;
    this.axiosAll(requiredParameter);
  }

  shouldComponentUpdate() {
    return true;
  }

  handleonChangeForEconRadio = e => {
    this.setState({
      econ: e.target.value,
    });
  };

  changeDropdown = ({ key }) => {
    const [i, value, name] = key.split(',');
    const { dropdownOption, requiredParameter } = this.state;
    dropdownOption[i].value = name;
    switch (i * 1) {
      case 0:
        requiredParameter.revenueLevelId = value;
        break;
      case 1:
        requiredParameter.taxLevelId = value;
        break;
      case 2:
        requiredParameter.industryId = value;
        break;
      case 3:
        requiredParameter.yearEstabId = value;
        break;
      case 4:
        requiredParameter.regisCapId = value;
        break;
      case 5:
        requiredParameter.scoreLevelId = value;
        break;
      default:
        break;
    }
    this.setState({
      dropdownOption,
      requiredParameter,
    });
    this.axiosAll(requiredParameter);
  };

  changeCheckbox = (i, e) => {
    const { requiredParameter } = this.state;
    const check = e.target.checked ? 1 : 0;
    switch (i) {
      case 0:
        requiredParameter.ifLimit = check;
        break;
      case 1:
        requiredParameter.ifMarket = check;
        break;
      case 2:
        requiredParameter.ifNewThreeBoard = check;
        break;
      case 3:
        requiredParameter.ifUnicorn = check;
        break;
      case 4:
        requiredParameter.ifQuasiUnicorn = check;
        break;
      default:
        break;
    }
    this.setState({
      requiredParameter,
    });
    this.axiosAll(requiredParameter);
  };

  axiosAll = requiredParameter => {
    const { dispatch } = this.props;

    dispatch({
      type: 'compOverview/fetchListTrend',
      payload: requiredParameter,
    });

    dispatch({
      type: 'compOverview/fetchGetConstitute',
      payload: requiredParameter,
    });

    dispatch({
      type: 'compOverview/fetchListTalentsCount',
      payload: requiredParameter,
    });

    dispatch({
      type: 'compOverview/fetchAreaAnalyze',
      payload: requiredParameter,
    });

    dispatch({
      type: 'compOverview/fetchEducationAnalyze',
      payload: requiredParameter,
    });

    dispatch({
      type: 'compOverview/fetchCompanyRank',
      payload: requiredParameter,
    });
  };

  render() {
    const { dropdownOption, radioOption, econ } = this.state;
    const { compOverview } = this.props;
    const {
      areaAnalyzeData,
      listTrendData,
      educationAnalyzeData,
      companyRankData,
      listTalentsCountData,
      getConstituteData,
    } = compOverview;

    // console.log(companyRankData);
    // 响应列表
    const menu = (data, i) => {
      return (
        <Menu onClick={this.changeDropdown}>
          {data.map(items => (
            <Menu.Item key={`${i},${items.value.toString()},${items.name}`}>{items.name}</Menu.Item>
          ))}
        </Menu>
      );
    };

    const { revenueRank, patentRank } = companyRankData;
    const revenueRankData = revenueRank.map((v, i) => {
      return {
        ...v,
        key: i + 1,
        revenueYtdData: v.revenueYtd ? (v.revenueYtd / 10000).toFixed(2) : '--',
      };
    });
    const patentRankData = patentRank.map((v, i) => {
      return {
        ...v,
        key: i + 1,
      };
    });

    const rankTitle = [
      {
        title: '排名',
        dataIndex: 'key',
        key: 'key',
      },
      {
        title: '企业名称',
        dataIndex: 'companyName',
        key: 'companyName',
        render: (text, scope) => (
          <div style={{ display: 'flex', height: '64px', alignItems: 'center' }}>
            <img
              src={scope.companyUrl || noCompany}
              alt=""
              style={{ marginRight: '16px', width: '74px', height: '51px' }}
            />
            <div>
              <div style={{ fontSize: '13px', color: 'rgba(0,0,0,0.85)', marginBottom: '8px' }}>
                {text}
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(0,0,0,0.25)' }}>
                <span>累计纳税：{scope.taxYtd.toFixed(2)}元</span>
                <br />
                <span>注册时间：{scope.regisTime}</span>
              </div>
            </div>
          </div>
        ),
      },
    ];
    const companyRankColumns = {
      revenueRankTitle: rankTitle.concat({
        title: '累计营收(万元)',
        dataIndex: 'revenueYtdData',
        align: 'right',
        key: 'revenueYtdData',
      }),
      patentRankTitle: rankTitle.concat({
        title: '专利数',
        dataIndex: 'patentCnt',
        align: 'right',
        key: 'patentCnt',
      }),
    };

    // 单选按钮
    const RadioHtml = (
      <Radio.Group
        onChange={this.handleonChangeForEconRadio}
        defaultValue={econ}
        buttonStyle="solid"
        style={{ margin: '0 0 -8px 0' }}
      >
        <Radio.Button value="revenue">营收</Radio.Button>
        <Radio.Button value="tax">税收</Radio.Button>
      </Radio.Group>
    );

    const PieData = [
      {
        title: '企业存活年数',
        data: getConstituteData.ageLimitList.map(v => {
          return {
            name: v.name,
            value: v.count,
          };
        }),
      },
      {
        title: '企业注册资本',
        data: getConstituteData.registConstList.map(v => {
          return {
            name: v.name,
            value: v.count,
          };
        }),
      },
      {
        title: '企业评分等级',
        data: getConstituteData.levelConstList.map(v => {
          return {
            name: v.name,
            value: v.count,
          };
        }),
      },
    ];
    const spans = [5, 5, 3, 3, 5, 3];

    const data1 = new Array(12);
    const data2 = new Array(12);
    const legend = [];
    const yName =
      econ === 'revenue' ? '       年累计营收（亿元）' : '              年累计税收（亿元）';
    for (let i = 0; i < listTrendData.length; i += 1) {
      const item = listTrendData[i];
      const year = item.statDate.toString().substring(0, 4);
      const month = item.statDate.toString().substring(4, 6);
      if (i < 12) {
        data1[month * 1.0 - 1] = item[econ] ? (item[econ] / 100000000).toFixed(2) : '--';
        legend[0] = year;
      } else {
        data2[month * 1.0 - 1] = item[econ] ? (item[econ] / 100000000).toFixed(2) : '--';
        legend[1] = year;
      }
    }

    return (
      <Fragment>
        <Card bordered={false} bodyStyle={{ padding: '20px' }} className={styles.option}>
          <Row>
            {dropdownOption.map((item, i) => (
              <Col key={item.name} span={spans[i]}>
                <span>{item.name}</span>
                <Dropdown overlay={menu(item.data, i)}>
                  <a className="ant-dropdown-link">
                    {item.value}
                    <Icon type="down" />
                  </a>
                </Dropdown>
              </Col>
            ))}
          </Row>
          <Row style={{ marginTop: 12 }}>
            {radioOption.map((item, i) => (
              <Col key={item} span={spans[i]}>
                <Checkbox onChange={this.changeCheckbox.bind(this, i)}>{item}</Checkbox>
              </Col>
            ))}
          </Row>
        </Card>

        <Card bordered={false} bodyStyle={{ padding: '0 20px 20px' }} className={styles.cnt}>
          <Card
            className={styles.cardTitleRight}
            extra={RadioHtml}
            bordered={false}
            bodyStyle={{ padding: '0' }}
            title="企业变化趋势"
          >
            {data1.length > 0 ? (
              <Bar
                yName={yName}
                legend={legend}
                data1={data1}
                data2={data2}
                xData={[
                  '一月',
                  '二月',
                  '三月',
                  '四月',
                  '五月',
                  '六月',
                  '七月',
                  '八月',
                  '九月',
                  '十月',
                  '十一月',
                  '十二月',
                ]}
              />
            ) : (
              <NoData height="300px" />
            )}
          </Card>
        </Card>

        <Card bordered={false} bodyStyle={{ padding: '0 20px 20px' }} className={styles.cnt}>
          <Card className={styles.cardTitleLeft} bordered={false} title="企业构成分析">
            {getConstituteData.ageLimitList.length > 0 ? (
              <Pie PieData={PieData} hoverName="企业数" />
            ) : (
              <NoData height="266px" />
            )}
          </Card>
        </Card>

        <Card bordered={false} bodyStyle={{ padding: '0 20px 20px' }} className={styles.cnt}>
          <Card
            className={styles.cardTitleLeft}
            bordered={false}
            bodyStyle={{ padding: '20px 0 0 0' }}
            title="企业人才画像"
          >
            <Row gutter={20}>
              <Col span={12}>
                <Card bodyStyle={{ padding: '0 20px 20px' }}>
                  <Card
                    className={styles.cardSmallTitle}
                    bodyStyle={{ padding: '20px 0 0 0', overflow: 'hidden' }}
                    bordered={false}
                    title="人才数量变化趋势"
                  >
                    <Line listTalentsCountData={listTalentsCountData} />
                  </Card>
                </Card>
              </Col>
              <Col span={12}>
                <Card bodyStyle={{ padding: '0 20px 20px' }}>
                  <Card
                    className={styles.cardSmallTitle}
                    bordered={false}
                    bodyStyle={{ padding: '20px 0 0 0' }}
                    title="人才学历分布"
                  >
                    <PieSingle educationAnalyzeData={educationAnalyzeData} />
                  </Card>
                </Card>
              </Col>
            </Row>

            <Card bodyStyle={{ padding: '0 20px 20px' }} style={{ marginTop: '20px' }}>
              <Card
                className={styles.cardSmallTitle}
                bordered={false}
                bodyStyle={{ padding: '20px 0 0 0' }}
                title="区域分析"
              >
                {areaAnalyzeData.length === 0 ? (
                  <NoData height="300px" />
                ) : (
                  <OBar areaAnalyzeData={areaAnalyzeData} />
                )}
              </Card>
            </Card>
          </Card>
        </Card>

        <Card bordered={false} bodyStyle={{ padding: '0 20px 20px' }} className={styles.cnt}>
          <Card
            className={styles.cardTitleLeft}
            bodyStyle={{ padding: '10px 0 0 0' }}
            bordered={false}
            title="企业排行榜"
          >
            <Row gutter={100}>
              <Col span={12}>
                <div className={styles.sleeveLessList}>
                  <Table
                    size="default"
                    columns={companyRankColumns.revenueRankTitle}
                    dataSource={revenueRankData}
                    pagination={false}
                  />
                </div>
              </Col>
              <Col span={12}>
                <div className={styles.sleeveLessList}>
                  <Table
                    size="default"
                    columns={companyRankColumns.patentRankTitle}
                    dataSource={patentRankData}
                    pagination={false}
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
