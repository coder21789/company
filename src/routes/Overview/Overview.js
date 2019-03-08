import React, { Component, Fragment } from 'react';
import { routerRedux } from 'dva/router';
import { DatePicker, Row, Col, Button, Icon, Card, Radio } from 'antd';
import moment from 'moment';
import { Bar, Circle } from 'components/Charts';
import { Map } from 'components/OCharts';
import { connect } from 'dva';
import { dataFormate } from '../../utils/utils';

import styles from './Overview.less';

const { MonthPicker } = DatePicker;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

@connect(({ overOverview, areascreen, areadetail, login }) => ({
  overOverview,
  areascreen,
  areadetail,
  login,
}))
export default class Overview extends Component {
  state = {
    statDate: moment()
      .subtract(1, 'month')
      .format('YYYYMM'),
    areaTypeId: '601',
    dataTypeId: 1,
    cardRight: -519,
    cardHeight: 0,
    visible: false,
    areaId: 601001,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    const { statDate, areaTypeId, dataTypeId } = this.state;

    // 核心数据
    (async () => {
      await dispatch({
        type: 'overOverview/fetchGetTarget',
        payload: {
          statDate,
        },
      });
      const {
        overOverview: { getTargetData },
      } = this.props;
      if (!getTargetData || `${getTargetData.statDate}` !== statDate) {
        this.setState({
          visible: true,
        });
      } else {
        this.setState({
          visible: false,
        });
      }
    })();

    // 排名数据，即 tooltip
    dispatch({
      type: 'overOverview/fetchListMap',
      payload: {
        statDate,
        areaTypeId,
        dataTypeId,
      },
    });

    setTimeout(() => {
      const cardHeight = document.querySelector('.ant-layout-content').offsetHeight + 20;
      this.setState({
        cardHeight,
      });
    }, 200);

    // this.hiddenCard();
  }

  // 时间选择
  handleTimeOnChange = date => {
    const { dispatch } = this.props;
    const { areaTypeId, dataTypeId } = this.state;
    const statDate = date.format('YYYYMM');
    this.setState({
      statDate,
    });
    // 核心数据
    (async () => {
      await dispatch({
        type: 'overOverview/fetchGetTarget',
        payload: {
          statDate,
        },
      });
      const {
        overOverview: { getTargetData },
      } = this.props;
      if (!getTargetData || `${getTargetData.statDate}` !== statDate) {
        this.setState({
          visible: true,
        });
      } else {
        this.setState({
          visible: false,
        });
      }
    })();

    // 排名数据，即 tooltip
    dispatch({
      type: 'overOverview/fetchListMap',
      payload: {
        statDate,
        areaTypeId,
        dataTypeId,
      },
    });
  };

  // radio选择
  handleRadioOnChange = e => {
    this.setState({
      areaTypeId: e.target.value,
    });
  };

  handleCardTooltip = (areaId, e) => {
    const { dispatch } = this.props;
    const { statDate, dataTypeId, cardRight } = this.state;

    if (cardRight === -519) {
      if (e.target.tagName.toLowerCase() !== 'image') {
        this.setState({
          cardRight: 0,
          areaId,
        });
        // 切换数据, 点击 card 数据
        dispatch({
          type: 'overOverview/fetchGetArea',
          payload: {
            statDate,
            areaId,
            dataTypeId,
          },
        });

        const node = document.querySelector('#root');
        const oDiv = document.createElement('div');
        oDiv.className = 'shadeWrap';
        oDiv.style.position = 'absolute';
        oDiv.style.width = '100%';
        oDiv.style.height = '100%';
        // oDiv.style.background = '#eee';
        oDiv.style.zIndex = 80;
        oDiv.style.top = 0;
        oDiv.style.left = 0;
        oDiv.onclick = this.handleCLoseTooltip;

        node.appendChild(oDiv);
      }
    }
  };

  handleCLoseTooltip = () => {
    const node = document.querySelector('#root');
    const oDiv = document.querySelector('.shadeWrap');
    node.removeChild(oDiv);
    this.setState({
      cardRight: -519,
    });
  };

  handleClose = () => {
    this.setState({ visible: false });
  };

  hanldeToAreaScreen = () => {
    const { areaId } = this.state;
    const win = window.open(`/#/areascreen/${areaId}`, '_blank');
    win.focus();
  };

  handleToAreaDetail = () => {
    const { dispatch } = this.props;
    const { areaId } = this.state;
    const defaultArea = [601, areaId * 1];
    dispatch({
      type: 'areadetail/fetchGetAreaId',
      payload: defaultArea,
    });
    dispatch(
      routerRedux.push({
        pathname: '/areadetail',
      })
    );
  };

  toBigScreen = () => {
    const win = window.open('/#/big-screen/screen', '_blank');
    win.focus();
  };

  changeActive = param => {
    const { dispatch } = this.props;
    const { statDate, areaTypeId } = this.state;

    this.setState({
      dataTypeId: param,
    });
    // 排名数据，即 tooltip
    dispatch({
      type: 'overOverview/fetchListMap',
      payload: {
        statDate,
        areaTypeId,
        dataTypeId: param,
      },
    });
  };

  render() {
    const { areaTypeId, dataTypeId, cardRight, cardHeight, visible } = this.state;
    const { overOverview } = this.props;
    const {
      pathStyle,
      getTargetData,
      listMapData,
      getAreaData: { industryAnalyzeList, areaCoreIndex, trendAnalyzeList },
    } = overOverview;
    const { rank, prop, ynyIncrease, content, areaName } = areaCoreIndex;
    const boxList = [
      {
        title: '企业数（家）',
        total: dataFormate(getTargetData.companyCnt, 'int'),
        per: getTargetData.companyCntIncrease
          ? (getTargetData.companyCntIncrease * 100).toFixed(2)
          : '0',
        icon: 'gongsiqiye',
      },
      {
        title: '就业人数（万人）',
        total: getTargetData.employeeCnt
          ? dataFormate(getTargetData.employeeCnt / 10000, 'int')
          : '--',
        per: getTargetData.employeeCntIncrease
          ? (getTargetData.employeeCntIncrease * 100).toFixed(2)
          : '0',
        icon: 'xinzeng',
      },
      {
        title: '年累计营收（亿元）',
        total: getTargetData.revenue ? (getTargetData.revenue / 100000000).toFixed(2) : '--',
        per: getTargetData.revenueIncrease ? (getTargetData.revenueIncrease * 100).toFixed(2) : 0,
        icon: 'zhifu',
      },
      {
        title: '年累计税收（亿元）',
        total: getTargetData.tax ? (getTargetData.tax / 100000000).toFixed(2) : '--',
        per: getTargetData.taxIncrease ? (getTargetData.taxIncrease * 100).toFixed(2) : 0,
        icon: 'shuishoufagui',
      },
    ];
    const showStyle = {
      right: `${cardRight}px`,
      height: `${cardHeight}px`,
    };

    const titles = ['企业数（家）', '就业人数（人）', '年累计营收（元）', '年累计税收（元）'];
    const trendTitle = [
      { name: '企业数', unit: '（家）' },
      { name: '就业人数', unit: '（万人）' },
      { name: '年累计营收', unit: '（万元）' },
      { name: '年累计税收', unit: '（万元）' },
    ];
    const indUnit = [
      { name: '企业数', unit: '（家）' },
      { name: '就业人数', unit: '（万人）' },
      { name: '年累计营收', unit: '（亿元）' },
      { name: '年累计税收', unit: '（亿元）' },
    ];

    return (
      <Fragment>
        <Row>
          <Col span={7}>
            <MonthPicker
              disabledDate={current => current && current > moment().subtract(1, 'month')}
              size="large"
              allowClear={false}
              defaultValue={moment().subtract(1, 'month')}
              onChange={this.handleTimeOnChange}
              placeholder="选择日期"
            />
          </Col>
          <Col span={13}>
            {visible ? (
              <div className={styles.info}>
                <div className={styles.message}>
                  <span className={styles.point}>i</span>
                  企业信息、人才信息、经济信息暂未更新至当前月份。
                </div>
                <Icon type="close" onClick={this.handleClose} className={styles.closed} />
              </div>
            ) : null}
          </Col>
          <Col span={4} style={{ textAlign: 'right', lineHeight: '40px' }}>
            <Button icon="qianwang" onClick={this.toBigScreen} type="primary" size="default">
              查看大屏
            </Button>
          </Col>
        </Row>

        <Row gutter={20}>
          {boxList.map((item, i) => (
            <Col span={6} key={item.title} onClick={() => this.changeActive(i + 1)}>
              <div
                className={`${styles.boxList} ${i + 1 === dataTypeId ? styles.boxListActive : ''}`}
              >
                <div>
                  <p>{item.title}</p>
                  <p>
                    {item.total}
                    {item.per > 0 ? (
                      <span>
                        <Icon type="up" />
                        {`${item.per}%`}
                      </span>
                    ) : (
                      <span>
                        <Icon type="down" />
                        {`${item.per * -1}%`}
                      </span>
                    )}
                  </p>
                </div>
                <Icon type={item.icon} style={{ fontSize: 20 }} />
              </div>
            </Col>
          ))}
        </Row>

        <div className={styles.mapContainer}>
          <div className={styles.mapOption}>
            <RadioGroup defaultValue={areaTypeId} size="large" onChange={this.handleRadioOnChange}>
              <RadioButton value="601">按行政区域</RadioButton>
              <RadioButton value="602">按4+1平台</RadioButton>
            </RadioGroup>
          </div>
          <Map
            formatData={listMapData}
            onClick={this.handleCardTooltip}
            dataTypeId={dataTypeId}
            pathStyle={pathStyle}
          />
          <div className={styles.mapRank}>
            <p>
              <span>{titles[dataTypeId - 1].split('（')[0]}高</span>
              <span>低</span>
            </p>
            <ul>
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
        </div>

        <Card className={styles.mapCard} style={showStyle} id="cardDetails">
          <h4>
            <span>
              <Icon type={boxList[dataTypeId - 1].icon} style={{ marginRight: '6px' }} />
              {areaName}
            </span>
            <Icon type="close" onClick={this.handleCLoseTooltip} />
          </h4>
          <div className={styles.content}>
            <p className={styles.title}>核心指标</p>
            <div className={styles.core}>
              <p style={{ marginBottom: '5px' }}>
                <span style={{ color: 'rgba(0,0,0,0.85)', fontSize: '14px', marginRight: '12px' }}>
                  {titles[dataTypeId - 1]}
                </span>
                <span style={{ color: '#1889F2', fontSize: '30px' }}>
                  {dataTypeId < 3 ? dataFormate(content, 'int') : dataFormate(content, 'double')}
                </span>
              </p>
              <p>
                <span className={styles.name}>
                  <Icon type="paimingkaoqian" style={{ color: '#1889F2', marginRight: '4px' }} />排名：
                </span>
                <span className={styles.value}>{rank || ''}</span>
                <span className={styles.name}>
                  <Icon type="lvzhou_zhanbi" style={{ color: '#1889F2', marginRight: '4px' }} />余杭区占比：
                </span>
                <span className={styles.value}>{dataFormate(prop, 'per')}</span>
                <span className={styles.name}>
                  <Icon type="ziyuan" style={{ color: '#1889F2', marginRight: '4px' }} />同比增幅：
                </span>
                <span className={styles.value}>{dataFormate(ynyIncrease, 'per')}</span>
              </p>
            </div>
            <p className={styles.title}>趋势分析{trendTitle[dataTypeId - 1].unit}</p>
            <div style={{ margin: '4px 24px' }}>
              <Bar height={250} trendAnalyzeList={trendAnalyzeList} dataTypeId={dataTypeId} />
            </div>
            <p className={styles.title}>
              各产业的{indUnit[dataTypeId - 1].name}分析{indUnit[dataTypeId - 1].unit}
            </p>
            <Circle
              height={250}
              industryAnalyzeList={industryAnalyzeList}
              dataTypeId={dataTypeId}
            />
            <Button
              icon="qianwang"
              size="default"
              style={{ margin: '20px 12px 20px 0' }}
              onClick={this.handleToAreaDetail}
            >
              查看区域详情
            </Button>
            <Button onClick={this.hanldeToAreaScreen} icon="qianwang" type="primary" size="default">
              查看区域大屏
            </Button>
          </div>
        </Card>
      </Fragment>
    );
  }
}
