import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { DatePicker, Card, Row, Col, Radio } from 'antd';
import moment from 'moment';
import classNames from 'classnames';
import IndEmergHot from './IndEmergHot.js';
import changeCompany from '../../assets/changeCompany.svg';
import changeField from '../../assets/changeField.svg';
import changeIndustry from '../../assets/changeIndustry.svg';
import iconChance from '../../assets/IconChance.svg';
import iconGoods from '../../assets/IconGoods.svg';
import iconDanger from '../../assets/IconDanger.svg';
import iconWeakly from '../../assets/IconWeakly.svg';
import styles from './IndEmerg.less';

const { MonthPicker } = DatePicker;
const cardClassName = classNames({
  'content-card': true,
});

// 不可选择的日期
const disabledDate = current => current && current > moment().subtract(1, 'month');
// 默认日期
const defaultValueDate = moment().subtract(1, 'month');

@connect(({ indEmerg }) => ({
  indEmerg,
}))
export default class IndusEmerg extends Component {
  state = {
    statDate: moment()
      .subtract(1, 'month')
      .format('YYYYMM'),
    industryName: '企业服务',
    coreTabKey: '',
  };

  componentDidMount() {
    this.init();
  }

  handleonChangeCore = e => {
    this.setState(
      {
        industryName: e.target.value,
        coreTabKey: e.target.value,
      },
      () => {
        const { statDate, industryName } = this.state;
        const { dispatch } = this.props;

        dispatch({
          type: 'indEmerg/fetchGetHotBehave',
          payload: {
            statDate,
            industryName,
          },
        });
        dispatch({
          type: 'indEmerg/fetchGetListDanger',
          payload: {
            statDate,
            industryName,
          },
        });
        dispatch({
          type: 'indEmerg/fetchGetListChances',
          payload: {
            statDate,
            industryName,
          },
        });
      }
    );
  };

  // 日期选择
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

  async init() {
    const { statDate, industryName } = this.state;
    const { dispatch } = this.props;

    await dispatch({
      type: 'indEmerg/fetchGetListHotIndustry',
      payload: {
        statDate,
      },
    });

    const {
      indEmerg: { getListHotIndustryData },
    } = this.props;
    this.setState({
      coreTabKey: getListHotIndustryData[0] && getListHotIndustryData[0].industryName,
      industryName: getListHotIndustryData[0] && getListHotIndustryData[0].industryName,
    });

    await new Promise(resolve => {
      dispatch({
        type: 'indEmerg/fetchGetHotBehave',
        payload: {
          statDate,
          industryName,
        },
      });
      dispatch({
        type: 'indEmerg/fetchGetListDanger',
        payload: {
          statDate,
          industryName,
        },
      });
      dispatch({
        type: 'indEmerg/fetchGetListChances',
        payload: {
          statDate,
          industryName,
        },
      });
      resolve();
    });
  }

  render() {
    const { coreTabKey } = this.state;
    const {
      indEmerg: {
        getListHotIndustryData,
        getHotBehaveData: { weaknessList, strengthList },
        getListDangerData: { dangerListZJ, dangerListZG },
        getListChancesData: { segmentationArea, potentialCompany, popularProduct },
      },
    } = this.props;
    const RadioHtml = (
      <Radio.Group onChange={this.handleonChangeCore} value={coreTabKey} buttonStyle="solid">
        {getListHotIndustryData.slice(0, 3).map((v, i) => (
          <Radio.Button value={v.industryName} key={i}>
            {v.industryName}
          </Radio.Button>
        ))}
      </Radio.Group>
    );

    // 危险数据

    return (
      /* eslint-disable */
      <Fragment>
        <MonthPicker
          disabledDate={disabledDate}
          allowClear={false}
          defaultValue={defaultValueDate}
          onChange={this.handleTimeOnChange}
        />
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
            title="新兴行业热词分析"
          >
            <IndEmergHot
              getListHotIndustryData={getListHotIndustryData}
              style={{ width: '100px' }}
            />
          </Card>
        </Card>
        {/* 第二栏 */}
        <Card
          className={cardClassName}
          bordered={false}
          bodyStyle={{ padding: '0 20px 20px' }}
          style={{ marginTop: 20 }}
        >
          <Card
            className={styles.cardTitleLeft}
            bordered={false}
            extra={RadioHtml}
            bodyStyle={{ padding: '20px 0 0 0' }}
            title="新兴行业Top3在区域内的表现"
          >
            <Row>
              <Col span={12}>
                <div className={styles.cardBolck}>
                  <p className={styles.titleStyle}>
                    <img
                      src={iconWeakly}
                      style={{ width: '20px', marginRight: '5px' }}
                      alt="劣势"
                    />
                    劣势
                  </p>
                  <div className={styles.weekStyle}>
                    {weaknessList.length ? (
                      <ul>
                        {weaknessList.map((item, i) => (
                          <li key={`li${i}`}>
                            <div style={{ display: 'flex' }}>
                              <div className={styles.circle}>
                                <p>{item.indexRank}</p>
                                <span>NO</span>
                              </div>
                              {item.indexName === '平均年龄' ? (
                                <span>平均年龄 {item.indexNum}</span>
                              ) : (
                                <span>数量占比{`${(item.indexProp * 100).toFixed(2)}%`}</span>
                              )}
                            </div>
                            <p style={{ textAlign: 'right' }}>{item.indexName}</p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p style={{ lineHeight: '275px' }}>暂无劣势</p>
                    )}
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div className={styles.cardBolck} style={{ marginLeft: '20px' }}>
                  <p className={styles.titleStyle}>
                    <img src={iconGoods} style={{ width: '20px', marginRight: '5px' }} alt="优势" />
                    优势
                  </p>
                  <div className={styles.weekStyle}>
                    {strengthList.length ? (
                      <ul>
                        {strengthList.map((item, i) => (
                          <li key={`li${i}`}>
                            <div style={{ display: 'flex' }}>
                              <div className={styles.circle}>
                                <p>{item.indexRank}</p>
                                <span>NO</span>
                              </div>
                              {item.indexName === '平均年龄' ? (
                                <span>平均年龄 {item.indexNum}</span>
                              ) : (
                                <span>数量占比{`${(item.indexProp * 100).toFixed(2)}%`}</span>
                              )}
                            </div>
                            <p style={{ textAlign: 'right' }}>{item.indexName}</p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p style={{ lineHeight: '275px' }}>暂无优势</p>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
            {/* 下两行 */}
            <Row>
              <Col span={12}>
                <div className={styles.cardBolck} style={{ marginTop: '20px', height: '342px' }}>
                  <p className={styles.titleStyle}>
                    <img
                      src={iconDanger}
                      style={{ width: '20px', marginRight: '5px' }}
                      alt="危险"
                    />
                    危险
                  </p>
                  <div className={styles.content}>
                    <div className={styles.province}>
                      {dangerListZJ.length ? (
                        <div className={styles.flexStyle}>
                          <div className={styles.dangerLeft}>
                            <p>省内-{dangerListZJ[0] && dangerListZJ[0].cityName}</p>
                            <span>{dangerListZJ[0] && dangerListZJ[0].areaName}</span>
                          </div>
                          <div className={styles.dangerRight}>
                            {dangerListZJ.map((item, i) => (
                              <p key={`li${i}`}>
                                {`${item.indexName}排行 第${item.indexRank},占比${
                                  item.indexProp
                                    ? Number(item.indexProp * 100).toFixed(2) + '%'
                                    : item.indexNum.toFixed(2)
                                }`}
                              </p>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p style={{ lineHeight: '124px' }}>省内暂无核心竞争区域</p>
                      )}
                    </div>
                    <div className={styles.province} style={{ marginTop: '20px' }}>
                      {dangerListZG.length ? (
                        <div className={styles.flexStyle}>
                          <div className={styles.dangerLeft}>
                            <p>全国-{dangerListZG[0] && dangerListZG[0].cityName}</p>
                            <span>{dangerListZG[0] && dangerListZG[0].areaName}</span>
                          </div>
                          <div className={styles.dangerRight}>
                            {dangerListZG.map((item, i) => (
                              <p key={`li${i}`}>
                                {`${item.indexName}排行 第${item.indexRank},${
                                  item.indexProp
                                    ? '占比' + Number(item.indexProp * 100).toFixed(2) + '%'
                                    : item.indexNum + '岁'
                                }`}
                              </p>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p style={{ lineHeight: '124px' }}>全国暂为核心竞争区域</p>
                      )}
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div
                  className={styles.cardBolck}
                  style={{ marginLeft: '20px', marginTop: '20px', height: '342px' }}
                >
                  <p className={styles.titleStyle}>
                    <img
                      src={iconChance}
                      style={{ width: '20px', marginRight: '5px' }}
                      alt="机会"
                    />
                    机会
                  </p>
                  <div className={styles.changeStyle}>
                    <div
                      className={styles.modulesStyle}
                      style={{ background: 'rgba(24,137,242,0.1)' }}
                    >
                      <img src={changeField} alt="细分领域" />
                      <p style={{ marginBottom: '30px' }}>细分领域</p>
                      <ul>
                        {segmentationArea.map((item, i) => (
                          <li key={`li${i}`}>
                            <p style={{ background: 'rgba(24,137,242,0.5)' }}>{item.chanceTop}</p>
                            <span>{item.chanceName}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className={styles.modulesStyle}
                      style={{ background: 'rgba(38,178,191,0.1)' }}
                    >
                      <img src={changeCompany} alt="潜力企业" />
                      <p style={{ marginBottom: '30px' }}>潜力企业</p>
                      <ul>
                        {potentialCompany.map((item, i) => (
                          <li key={`li${i}`}>
                            <p style={{ background: 'rgba(38,178,191,0.5)' }}>{item.chanceTop}</p>
                            <span>{item.chanceName}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className={styles.modulesStyle}
                      style={{ background: 'rgba(143,77,191,0.1)' }}
                    >
                      <img src={changeIndustry} alt="知名产品" />
                      <p style={{ marginBottom: '30px' }}>知名产品</p>
                      <ul>
                        {popularProduct.map((item, i) => (
                          <li key={i}>
                            <p style={{ background: 'rgba(143,77,191,0.5)' }}>{item.chanceTop}</p>
                            <span>{item.chanceName}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Card>
      </Fragment>
    );
  }
}
