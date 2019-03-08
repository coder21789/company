import React, { Component, Fragment } from 'react';
import { Row, Col, Button, Icon, Card, Input, AutoComplete, Pagination, Tooltip } from 'antd';

import { connect } from 'dva';
import Graph from '../../components/OCharts/graph/index';
import Curve from '../../components/OCharts/curve/index';
import Line from '../../components/OCharts/comLine/index';

import styles from './CompDetail.less';

const { Option } = AutoComplete;

const renderOption = item => {
  return (
    <Option key={`${item.company_id}`} text={item.company_name}>
      {item.company_name}
    </Option>
  );
};

@connect(({ compDetail }) => ({
  compDetail,
}))
export default class CompDetail extends Component {
  state = {
    pageNum: 1,
    companyId: '',
    companyName: '',
  };

  componentDidMount() {
    const {
      match: { params },
      dispatch,
    } = this.props;
    const { companyId } = params;
    this.setState({
      companyId,
    });
    this.axiosAll({ companyId });
    (async () => {
      await dispatch({
        type: 'compDetail/fetchGetCompanyBaseInfo',
        payload: { companyId },
      });
      const {
        compDetail: { getCompanyBaseInfoData },
      } = this.props;
      const { companyName } = getCompanyBaseInfoData;
      this.setState({ companyName });
    })();
  }

  onSelect = companyId => {
    this.setState({
      companyId,
    });
    this.axiosAll({ companyId });
  };

  onChangeValue = value => {
    this.setState({ companyName: value });
  };

  handleToComp = () => {
    const { companyId } = this.state;
    const win = window.open(`/#/company/screen/${companyId}`, '_blank');
    win.focus();
  };

  handleSearch = keyword => {
    const { dispatch } = this.props;

    // 下拉选择框
    dispatch({
      type: 'compDetail/fetchCompanySelect',
      payload: { keyword },
    });
  };

  changePagination = pageNum => {
    const { dispatch } = this.props;
    const { companyId } = this.state;
    this.setState({
      pageNum,
    });
    console.log(pageNum, companyId);
    dispatch({
      type: 'compDetail/fetchListCompanyAlert',
      payload: { companyId, pageNum },
    });
  };

  axiosAll = requiredParameter => {
    const { dispatch } = this.props;
    const { pageNum } = this.state;

    dispatch({
      type: 'compDetail/fetchGetCompanyBaseInfo',
      payload: requiredParameter,
    });
    dispatch({
      type: 'compDetail/fetchListCompanyMap',
      payload: requiredParameter,
    });
    dispatch({
      type: 'compDetail/fetchListCompanyAlert',
      payload: { ...requiredParameter, pageNum },
    });
    dispatch({
      type: 'compDetail/fetchListCompanyEcoTrend',
      payload: requiredParameter,
    });
    dispatch({
      type: 'compDetail/fetchListComPropRights',
      payload: requiredParameter,
    });
  };

  render() {
    const { companyName } = this.state;
    const { compDetail } = this.props;
    const {
      companySelectData,
      getCompanyBaseInfoData,
      listCompanyMapData,
      listCompanyAlertData,
      listCompanyEcoTrendData,
      listComPropRightsData,
    } = compDetail;
    // console.log(getCompanyBaseInfoData);
    const baseInfo = [
      {
        name: '注册资本：',
        value: getCompanyBaseInfoData.regisCap ? `${getCompanyBaseInfoData.regisCap}万` : '--',
      },
      { name: '生产经营地址：', value: getCompanyBaseInfoData.busiAddr || '--' },
      { name: '企业类型大类：', value: getCompanyBaseInfoData.companyBigClass || '--' },
      { name: '统一社会信用代码：', value: getCompanyBaseInfoData.creditNo || '--' },
      { name: '成立时间：', value: getCompanyBaseInfoData.estabDate || '--' },
      { name: '经营范围：', value: getCompanyBaseInfoData.busiScope || '--' },
      { name: '营业状态：', value: getCompanyBaseInfoData.status || '--' },
      { name: '企业法人：', value: getCompanyBaseInfoData.companyLegal || '--' },
      { name: '注册地址：', value: getCompanyBaseInfoData.regisAddr || '--' },
      { name: '企业类型：', value: getCompanyBaseInfoData.companyClass || '--' },
      { name: '企业规模：', value: getCompanyBaseInfoData.companyScale || '--' },
      { name: '区域代码：', value: getCompanyBaseInfoData.areaCode || '--' },
      { name: '评分等级：', value: getCompanyBaseInfoData.scoreLevelName || '暂无' },
    ];
    const alertData = listCompanyAlertData.list.map((v, i) => {
      return {
        ...v,
        rank: i,
      };
    });
    const core = value => {
      switch (value) {
        case '优秀':
          return {
            borderColor: 'rgba(235, 82, 82, 0.7356)',
            color: '#EB5252',
          };
        case '一般':
          return {
            borderColor: 'rgba(235, 82, 82, 0.7356)',
            color: '#EB5252',
          };
        case '较差':
          return {
            borderColor: 'rgba(0,0,0,0.315)',
            color: '#000',
          };
        case '暂无':
          return {
            borderColor: 'rgba(0,0,0,0.315)',
            color: '#999',
          };
        default:
          break;
      }
    };
    return (
      <Fragment>
        <Row>
          <Col span={15}>
            <div className="global-search-wrapper" style={{ width: 300 }}>
              <AutoComplete
                className="global-search"
                size="large"
                style={{ width: '100%' }}
                dataSource={companySelectData.map(renderOption)}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                onChange={this.onChangeValue}
                placeholder="请输入企业名称"
                optionLabelProp="text"
                value={companyName}
                // value={getCompanyBaseInfoData.companyName}
              >
                <Input
                  suffix={
                    <Button className="search-btn" size="large" type="primary">
                      <Icon type="icon31" />
                    </Button>
                  }
                />
              </AutoComplete>
            </div>
          </Col>
          <Col span={9} style={{ textAlign: 'right', lineHeight: '40px' }}>
            <Button icon="qianwang" type="primary" size="default" onClick={this.handleToComp}>
              查看大屏
            </Button>
          </Col>
        </Row>

        <Card bordered={false} bodyStyle={{ padding: '0 20px 20px' }} className={styles.cnt}>
          <Card
            className={styles.cardTitleLeft}
            bordered={false}
            bodyStyle={{ padding: '20px 0 0 0' }}
            title="企业基本信息"
          >
            <Row>
              <Col span={8}>
                <div className={styles.baseInfo}>
                  <div className={styles.name}>{baseInfo[0].name}</div>
                  <div className={styles.value}>{baseInfo[0].value}</div>
                </div>
                <div className={styles.baseInfo}>
                  <div className={styles.name}>{baseInfo[1].name}</div>
                  <div className={styles.value}>{baseInfo[1].value}</div>
                </div>
                <div className={styles.baseInfo}>
                  <div className={styles.name}>{baseInfo[2].name}</div>
                  <div className={styles.value}>{baseInfo[2].value}</div>
                </div>
                <div className={styles.baseInfo}>
                  <div className={styles.name}>{baseInfo[3].name}</div>
                  <div className={styles.value}>{baseInfo[3].value}</div>
                </div>
              </Col>
              <Col span={8}>
                <div className={styles.baseInfo}>
                  <div className={styles.name}>{baseInfo[4].name}</div>
                  <div className={styles.value}>{baseInfo[4].value}</div>
                </div>
                <div className={styles.baseInfo}>
                  <div className={styles.name}>{baseInfo[5].name}</div>
                  <div className={styles.value}>{baseInfo[5].value}</div>
                </div>
                <div className={styles.baseInfo}>
                  <div className={styles.name}>{baseInfo[6].name}</div>
                  <div className={styles.value}>{baseInfo[6].value}</div>
                </div>
                <div className={styles.baseInfo}>
                  <div className={styles.name}>{baseInfo[7].name}</div>
                  <div className={styles.value}>{baseInfo[7].value}</div>
                </div>
              </Col>
              <Col span={8}>
                <div className={styles.baseInfo}>
                  <div className={styles.name}>{baseInfo[8].name}</div>
                  <div className={styles.value}>{baseInfo[8].value}</div>
                </div>
                <div className={styles.baseInfo}>
                  <div className={styles.name}>{baseInfo[9].name}</div>
                  <div className={styles.value}>{baseInfo[9].value}</div>
                </div>
                <div className={styles.baseInfo}>
                  <div className={styles.name}>{baseInfo[10].name}</div>
                  <div className={styles.value}>{baseInfo[10].value}</div>
                </div>
                <div className={styles.baseInfo}>
                  <div className={styles.name}>{baseInfo[11].name}</div>
                  <div className={styles.value}>{baseInfo[11].value}</div>
                </div>
                <div className={styles.baseInfo} style={{ marginTop: '47px' }}>
                  <div className={styles.name}>{baseInfo[12].name}</div>
                  <div className={styles.iconCore} style={core(baseInfo[12].value)}>
                    {baseInfo[12].value}
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Card>

        <Row gutter={20}>
          <Col span={14}>
            <Card bordered={false} bodyStyle={{ padding: '0 20px 20px' }} className={styles.cnt}>
              <Card
                className={styles.cardTitleLeft}
                bordered={false}
                bodyStyle={{ padding: '20px 0 0 0' }}
                title="企业图谱"
              />
              <Graph
                listCompanyMapData={listCompanyMapData}
                companyName={getCompanyBaseInfoData.companyName}
              />
            </Card>
          </Col>
          <Col span={10}>
            <Card bordered={false} bodyStyle={{ padding: '0 20px 20px' }} className={styles.cnt}>
              <Card
                className={styles.cardTitleLeft}
                bordered={false}
                bodyStyle={{ padding: '20px 0 0 0' }}
                title="企业预警"
              />
              <div className={styles.warn}>
                <ul className={styles.warnCnt}>
                  {alertData.map(v => (
                    <li className={styles.warnItem} key={`alert${v.rank}`}>
                      <div className={styles.itemLeft}>
                        <span className={styles.name}>{v.alertName}：</span>
                        <Tooltip title={v.alertContent} placement="topLeft">
                          <span className={styles.value}>{v.alertContent}</span>
                        </Tooltip>,
                      </div>
                      <div>
                        {v.alertDate.toString().length === 6
                          ? `${v.alertDate.toString().slice(0, 4)}-${v.alertDate
                              .toString()
                              .slice(4, 6)}`
                          : v.alertDate}
                      </div>
                    </li>
                  ))}
                </ul>
                <Pagination
                  size="small"
                  defaultPageSize={15}
                  total={listCompanyAlertData.total}
                  onChange={this.changePagination}
                  className={styles.pagina}
                />
              </div>
            </Card>
          </Col>
        </Row>

        <Card bordered={false} bodyStyle={{ padding: '0 20px 20px' }} className={styles.cnt}>
          <Card
            className={styles.cardTitleLeft}
            bordered={false}
            bodyStyle={{ padding: '20px 0 0 0' }}
            title="企业经济趋势"
          />
          <Line listCompanyEcoTrendData={listCompanyEcoTrendData} />
        </Card>
        <Card bordered={false} bodyStyle={{ padding: '0 20px 20px' }} className={styles.cnt}>
          <Card
            className={styles.cardTitleLeft}
            bordered={false}
            bodyStyle={{ padding: '20px 0 0 0' }}
            title="企业产权情况"
          >
            <Curve listComPropRightsData={listComPropRightsData} />
          </Card>
        </Card>
      </Fragment>
    );
  }
}
