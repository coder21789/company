import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Row, Col, Select, Card, Radio, Table } from 'antd';
import classNames from 'classnames';
import numeral from 'numeral';
import _ from 'lodash';

import { MiniMap, MiniCircle, MiniTri, Bar } from 'components/OCharts';
import MiniPanel from 'components/MiniPanel';
import { getFormatMoney } from 'utils/utils';

import circle1Bg from '../../assets/circle1-bg.svg';
import circle2Bg from '../../assets/circle2-bg.svg';
import circle3Bg from '../../assets/circle3-bg.svg';
import circle4Bg from '../../assets/circle4-bg.svg';

import tri1Bg from '../../assets/tri1-bg.svg';
import tri2Bg from '../../assets/tri2-bg.svg';
import tri3Bg from '../../assets/tri3-bg.svg';
import tri4Bg from '../../assets/tri4-bg.svg';

import styles from './IndDetail.less';

const circleBgArray = [circle1Bg, circle2Bg, circle3Bg, circle4Bg];
const triBgArray = [tri1Bg, tri2Bg, tri3Bg, tri4Bg];

const cardClassName = classNames({
  'content-card': true,
});

const cardResponsiveProps = {
  xs: 12,
  sm: 8,
  md: 4,
  lg: 4,
  xl: 4,
};

const listResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 8,
  lg: 8,
  xl: 8,
};

const { Option } = Select;

@connect(({ indDetail, loading }) => ({
  indDetail,
  loading: loading.effects['indDetail/fetchGetListIndustry'],
}))
export default class IndusDetail extends Component {
  state = {
    selectData: [],
    industryId: 1208,
    industryName: '信息传输、计算机服务软件业',
    levelTabKey: 1001, // 经济等级分析
    areaType: 601, // 区域分布分析
  };

  async componentDidMount() {
    const { dispatch } = this.props;

    await dispatch({
      type: 'indDetail/fetchGetListIndustry',
      payload: {},
    });

    const {
      indDetail: { getListIndustryData },
    } = this.props;

    this.setState({
      selectData: getListIndustryData,
    });

    this.init();
  }

  handleAreaSubtabChange = e => {
    this.setState(
      {
        areaType: e.target.value,
      },
      () => {
        const { industryId, areaType } = this.state;
        const { dispatch } = this.props;
        // 区域分布分析
        dispatch({
          type: 'indDetail/fetchGetListAreaAnalyze',
          payload: {
            industryId,
            areaTypeId: areaType,
          },
        });
      }
    );
  };

  handleChangeIndustry = key => {
    const { selectData } = this.state;

    this.setState(
      {
        industryId: key,
        industryName: selectData.filter(value => value.industryId === key)[0].industryName,
      },
      () => {
        this.init();
      }
    );
  };

  handleonChangeLevelRadio = e => {
    this.setState(
      {
        levelTabKey: e.target.value,
      },
      () => {
        const { industryId, levelTabKey } = this.state;
        const { dispatch } = this.props;

        dispatch({
          type: 'indDetail/fetchGetListEconomicAnalyze',
          payload: {
            industryId,
            ecoBigClassId: levelTabKey,
          },
        });
      }
    );
  };

  init() {
    const { industryId, levelTabKey } = this.state;
    const { dispatch } = this.props;

    // 核心数据
    dispatch({
      type: 'indDetail/fetchGetCoreIndex',
      payload: {
        industryId,
      },
    });

    // 区域分布分析
    dispatch({
      type: 'indDetail/fetchGetListAreaAnalyze',
      payload: {
        industryId,
        areaTypeId: 601,
      },
    });

    // 近12月企业经济等级分析
    dispatch({
      type: 'indDetail/fetchGetListEconomicAnalyze',
      payload: {
        industryId,
        ecoBigClassId: levelTabKey,
      },
    });

    // 就业人才分析
    dispatch({
      type: 'indDetail/fetchGetListTalentAnalyze',
      payload: {
        industryId,
      },
    });

    // top 列表
    dispatch({
      type: 'indDetail/fetchGetListTop',
      payload: {
        industryId,
      },
    });
  }

  render() {
    const { levelTabKey, selectData, areaType, industryName } = this.state;
    const {
      indDetail: {
        getCoreIndexData,
        pathStyle,
        getListAreaAnalyzeData,
        getMapListAreaAnalyzeData,
        getListEconomicAnalyzeData,
        getListTalentAnalyzeData,
        getListTopData,
      },
    } = this.props;

    // const areaData = [];
    /* eslint no-param-reassign: "error" */
    const areaData = _.cloneDeep(getMapListAreaAnalyzeData).map(value => {
      value.formatData = [
        `企业数：${
          value.companyCnt || value.companyCnt === 0
            ? numeral(value.companyCnt).format('0, 0')
            : '-'
        }`,
        `同比增幅：${
          value.ynyIncrease || value.ynyIncrease === 0
            ? `${(value.ynyIncrease * 100).toFixed(2)}%`
            : '-'
        }`,
        `行业集中度：${
          value.industryConcentrationRatio || value.industryConcentrationRatio === 0
            ? `${numeral(value.industryConcentrationRatio * 100).format('0, 0.00')}%`
            : '-'
        }`,
        `知识产权数：${
          value.propertyCnt || value.propertyCnt === 0
            ? `${numeral(value.propertyCnt).format('0, 0')}`
            : '-'
        }`,
      ];

      return value;
    });

    // 单选按钮
    const RadioHtml = (
      <Radio.Group
        onChange={this.handleonChangeLevelRadio}
        defaultValue={levelTabKey}
        buttonStyle="solid"
      >
        <Radio.Button value={1001}>营收</Radio.Button>
        <Radio.Button value={1002}>税收</Radio.Button>
      </Radio.Group>
    );

    // 近12企业经济等级分析
    const data1 = [];
    const data2 = [];
    const xData = [];
    const legend = [industryName, '各行业平均企业数'];
    const yName = '企业数';
    // const xName = levelTabKey === 1001 ? '营收等级' : '税收等级';
    const xName = levelTabKey === 1001 ? '' : '';
    for (let i = 0; i < getListEconomicAnalyzeData.length; i += 1) {
      const item = getListEconomicAnalyzeData[i];
      data1.push(item.companyCnt);
      data2.push(item.companyCntAvg);
      xData.push(item.revenueTaxLevelName);
    }

    // 就业人才分析
    const { eduLevelList, payLevelList } = getListTalentAnalyzeData;

    const tableColumns = {
      area: [
        {
          title: '排名',
          dataIndex: 'rank',
          align: 'left',
          width: '10%',
        },
        {
          title: '街道',
          dataIndex: 'areaName',
          width: '20%',
        },
        {
          title: `企业数`,
          dataIndex: 'companyCnt',
          width: '15%',
          render: text => `${numeral(text).format('0, 0')}`,
        },
        {
          title: `同比增幅`,
          dataIndex: 'ynyIncrease',
          width: '20%',
          render: text => `${numeral(text * 100).format('0, 0.00')}%`,
        },
        {
          title: `行业集中度`,
          dataIndex: 'industryConcentrationRatio',
          width: '20%',
          render: text => `${numeral(text * 100).format('0, 0.00')}%`,
        },
        {
          title: `知识产权数`,
          dataIndex: 'propertyCnt',
          width: '15%',
          align: 'right',
          render: text => {
            return text || text === 0 ? `${numeral(text).format('0, 0')}` : '-';
          },
        },
      ],
      revenue: [
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
          title: `当年累计营收额(万元)`,
          dataIndex: 'content',
          align: 'right',
          render: text => `${numeral(text / 10000).format('0, 0.00')}`,
        },
      ],
      tax: [
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
          dataIndex: 'content',
          align: 'right',
          render: text => `${numeral(text / 10000).format('0, 0.00')}`,
        },
      ],
      ascription: [
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
          dataIndex: 'content',
          align: 'right',
          render: text => `${numeral(text).format('0, 0')}`,
        },
      ],
    };

    const tableData = {
      revenueTopList: [],
      taxTopList: [],
      patentTopList: [],
      ...getListTopData,
    };

    return (
      <Fragment>
        <Select
          onChange={this.handleChangeIndustry}
          defaultValue="信息传输、计算机服务软件业"
          style={{ width: '224px', marginBottom: '12px' }}
        >
          {selectData.map(data => (
            <Option key={data.industryId} value={data.industryId}>
              {data.industryName}
            </Option>
          ))}
        </Select>

        <Row gutter={20}>
          <Col {...cardResponsiveProps}>
            <MiniPanel
              icon="gongsiqiye"
              title="企业数"
              value={numeral(getCoreIndexData.companyCnt).format('0, 0')}
              percent={getCoreIndexData.companyCntProp}
              rank={getCoreIndexData.companyCntRank}
            />
          </Col>
          <Col {...cardResponsiveProps}>
            <MiniPanel
              icon="zhifu"
              title={`年累计营收(${getFormatMoney(getCoreIndexData.revenueYtd).unit})`}
              value={getFormatMoney(getCoreIndexData.revenueYtd).value}
              percent={getCoreIndexData.revenueYtdProp}
              rank={getCoreIndexData.revenueYtdRank}
            />
          </Col>
          <Col {...cardResponsiveProps}>
            <MiniPanel
              icon="shuishoufagui"
              title={`年累计税收(${getFormatMoney(getCoreIndexData.taxYtd).unit})`}
              value={getFormatMoney(getCoreIndexData.taxYtd).value}
              percent={getCoreIndexData.taxYtdProp}
              rank={getCoreIndexData.taxYtdRank}
            />
          </Col>
          <Col {...cardResponsiveProps}>
            <MiniPanel
              icon="xinzeng"
              title="就业人数"
              value={numeral(getCoreIndexData.talentCnt).format('0, 0')}
              percent={getCoreIndexData.talentCntProp}
              rank={getCoreIndexData.talentCntRank}
            />
          </Col>
          <Col {...cardResponsiveProps}>
            <MiniPanel
              icon="gangweitubiao"
              title="岗位需求量(近30天)"
              value={numeral(getCoreIndexData.jobDemandCnt).format('0, 0')}
              percent={getCoreIndexData.jobDemandCntProp}
              rank={getCoreIndexData.jobDemandCntRank}
            />
          </Col>
          <Col {...cardResponsiveProps}>
            <MiniPanel
              icon="zsknowledge"
              title="累计知识产权数"
              value={numeral(getCoreIndexData.propertyCnt).format('0, 0')}
              percent={getCoreIndexData.propertyCntProp}
              rank={getCoreIndexData.propertyCntRank}
            />
          </Col>
        </Row>

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
            title="区域分布分析"
          >
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
                  title="企业数"
                  container="#revenueAreaMap"
                  formatData={areaData}
                  pathStyle={pathStyle}
                />
              </div>
              <div className={styles.right}>
                <Table
                  columns={tableColumns.area}
                  dataSource={getListAreaAnalyzeData}
                  rowKey={() => `${Math.random()}`}
                  pagination={false}
                  scroll={{ y: 368 }}
                />
              </div>
            </div>
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
            title="近12月企业经济等级分析"
          >
            <Bar
              tooltipExtra={{
                formatter: params => {
                  return `${levelTabKey === 1001 ? '营收' : '税收'}等级：${
                    params[0].axisValueLabel
                  }<br />
                          <div style="display: inline-block; vertical-align: middle; width: 6px; height: 6px; border-radius: 50%; background-color: ${
                            params[0].color.colorStops[1].color
                          }; margin-right: 6px;"></div>
                          ${params[0].seriesName}：${params[0].value}<br />
                          <span style="display: inline-block; vertical-align: middle; width: 6px; height: 6px; border-radius: 50%; background-color: ${
                            params[1].color.colorStops[1].color
                          }; margin-right: 6px;"></span>
                          ${params[1].seriesName}：${Math.ceil(params[1].value)}
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
            <div
              style={{
                textAlign: 'right',
                fontSize: '14px',
                color: 'rgba(0,0,0,0.65)',
              }}
            >
              {levelTabKey === 1001 ? '营收等级' : '税收等级'}
            </div>
          </Card>
        </Card>

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
            title="就业人才分析"
          >
            <Card type="inner" bodyStyle={{ padding: '0 20px 20px' }} style={{ marginTop: 20 }}>
              <Card
                title="人才学历分布"
                bodyStyle={{ padding: '20px 0 0 0', textAlign: 'center' }}
                bordered={false}
              >
                <div
                  style={{
                    position: 'relative',
                    // left: '10%',
                  }}
                >
                  {eduLevelList
                    ? eduLevelList.map((value, index) => {
                        return (
                          <MiniCircle
                            className="mini-circle"
                            key={value.talentSmallClassName}
                            bg={circleBgArray[index]}
                            percent={value.talentProp}
                            num={value.talentCnt}
                            title={value.talentSmallClassName}
                            translateX={index > 0 && `${-109 + -218 * (index - 1)}px`}
                            // offsetLeft={'-218px'}
                          />
                        );
                      })
                    : ''}
                </div>
              </Card>
            </Card>
            <Card type="inner" bodyStyle={{ padding: '0 20px 20px' }} style={{ marginTop: 20 }}>
              <Card
                title="薪资水平分布"
                bodyStyle={{ padding: '20px 0 0 0', textAlign: 'center' }}
                bordered={false}
              >
                <div
                  style={{
                    position: 'relative',
                    // left: '10%',
                  }}
                >
                  {payLevelList
                    ? payLevelList.map((value, index) => {
                        return (
                          <MiniTri
                            key={value.talentSmallClassName}
                            bg={triBgArray[index]}
                            percent={value.talentProp}
                            num={value.talentCnt}
                            title={value.talentSmallClassName}
                            translateX={index > 0 && `${-109 + -218 * (index - 1) + 52 * index}px`}
                          />
                        );
                      })
                    : ''}
                </div>
              </Card>
            </Card>
          </Card>
        </Card>

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
            title="企业分析"
          >
            <Row>
              <Col {...listResponsiveProps}>
                <div className={styles.sleeveLessList}>
                  <Table
                    columns={tableColumns.revenue}
                    dataSource={tableData.revenueTopList}
                    rowKey={record => `${record.rank}${Math.random()}`}
                    size="small"
                    pagination={false}
                  />
                </div>
              </Col>
              <Col {...listResponsiveProps}>
                <div className={styles.sleeveLessList}>
                  <Table
                    columns={tableColumns.tax}
                    dataSource={tableData.taxTopList}
                    rowKey={record => `${record.rank}${Math.random()}`}
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
                    columns={tableColumns.ascription}
                    dataSource={tableData.patentTopList}
                    rowKey={record => `${record.rank}${Math.random()}`}
                    size="small"
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
