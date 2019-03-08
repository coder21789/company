import React, { Fragment } from 'react';
import { connect } from 'dva';
import { DatePicker, Card, Tabs, Row, Col } from 'antd';
import { toThousands } from 'utils/utils';
import moment from 'moment';
import classNames from 'classnames';
import { MiniCircle } from 'components/OCharts';
import MiniTri from './components/employAnaly/miniTri/index.js';
// 企业变化趋势
import CompanyTrend from './components/employAnaly/companyTrend.js';
// 年龄段分析
import AgeAnaly from './components/employAnaly/ageAnaly.js';
import SourceMap from './components/employAnaly/sourceMap.js';
import circle1Bg from '../../assets/circle1-bg.svg';
import circle2Bg from '../../assets/circle2-bg.svg';
import circle3Bg from '../../assets/circle3-bg.svg';
import circle4Bg from '../../assets/circle4-bg.svg';

import tri1Bg from '../../assets/tri1-bg.svg';
import tri2Bg from '../../assets/tri2-bg.svg';
import tri3Bg from '../../assets/tri3-bg.svg';
import tri4Bg from '../../assets/tri4-bg.svg';

import purple from '../../assets/purple.svg';
import blue from '../../assets/blue.svg';
import red from '../../assets/red.svg';
import orange from '../../assets/orange.svg';

import styles from './employAnaly.less';

const circleBgArray = [circle1Bg, circle2Bg, circle3Bg, circle4Bg];
const triBgArray = [tri1Bg, tri2Bg, tri3Bg, tri4Bg];
const overViewIcon = [orange, red, blue, purple];
const overViewCount = ['就业人数', '新增就业人数', '流失就业人数', '净增加就业人数'];
const { TabPane } = Tabs;
const { MonthPicker } = DatePicker;
const cardClassName = classNames({
  'content-card': true,
});

// 不可选择的日期
const disabledDate = current => current && current > moment().subtract(1, 'month');
// 默认日期
const defaultValueDate = moment().subtract(1, 'month');

@connect(({ employAnaly }) => ({
  employAnaly,
}))
export default class employAnalyMain extends React.Component {
  state = {
    statDate: moment()
      .subtract(1, 'month')
      .format('YYYYMM'),
  };

  componentDidMount() {
    this.init();
  }

  // 切换日期
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
    const { statDate } = this.state;
    const { dispatch } = this.props;
    await new Promise(resolve => {
      dispatch({
        type: 'employAnaly/fetchTalnetCore',
        payload: {
          statDate,
        },
      });
      dispatch({
        type: 'employAnaly/fetchTalnetTrend',
        payload: {
          statDate,
        },
      });
      dispatch({
        type: 'employAnaly/fetchTalnetageSource',
        payload: {
          statDate,
        },
      });
      dispatch({
        type: 'employAnaly/fetchTalnetAbility',
        payload: {
          statDate,
        },
      });

      resolve();
    });
  }

  render() {
    const {
      employAnaly: {
        talnetCoreData,
        talnetTrendData,
        talnetageSourceData: { ageAnaDo, sourceAnaDo },
        talnetAbilityData: { seniorAna, cultureTalent, salaryTalent },
      },
    } = this.props;
    let userMessage;
    if (talnetCoreData.length) {
      userMessage = talnetCoreData.map((item, i) => (
        <Col span={6} key={i}>
          <div className={styles.employBlock}>
            <div className={styles.employTop}>
              <img src={overViewIcon[i]} alt="图片" />
              <div className="employNumber">
                <p className={styles.word}>{overViewCount[i]}</p>
                <p className={styles.count}>{toThousands(item.talentCnt) || '---'}</p>
              </div>
              <div className="addEmploy">
                <p style={{ marginTop: '-8px' }} className={styles.word}>
                  同比增幅
                </p>
                <p style={{ marginTop: '6px' }} className={styles.rate}>
                  {`-${item.ynyIncrease}%` || '---'}
                </p>
              </div>
            </div>
            {overViewCount[i] === '净增加就业人数' ? (
              <div className={styles.employBottom}>
                <p className={styles.word}>男：--</p>
                <p className={styles.word}>女：--</p>
              </div>
            ) : (
              <div className={styles.employBottom}>
                <p className={styles.word}>男：{(item.manCntProp * 100).toFixed(2)}%</p>
                <p className={styles.word}>女：{(item.ladyCntProp * 100).toFixed(2)}%</p>
              </div>
            )}
          </div>
        </Col>
      ));
    } else {
      userMessage = overViewCount.map((item, i) => (
        <Col span={6} key={i}>
          <div className={styles.employBlock}>
            <div className={styles.employTop}>
              <img src={overViewIcon[i]} alt="图片" />
              <div className="employNumber">
                <p className={styles.word}>{item}</p>
                <p className={styles.count}>---</p>
              </div>
              <div className="addEmploy">
                <p style={{ marginTop: '-8px' }} className={styles.word}>
                  同比增幅
                </p>
                <p style={{ marginTop: '12px' }} className={styles.rate}>
                  ---
                </p>
              </div>
            </div>
            <div className={styles.employBottom}>
              <p className={styles.word}>男：--</p>
              <p className={styles.word}>女：--</p>
            </div>
          </div>
        </Col>
      ));
    }
    return (
      <Fragment>
        <MonthPicker
          disabledDate={disabledDate}
          allowClear={false}
          defaultValue={defaultValueDate}
          onChange={this.handleTimeOnChange}
        />
        <div style={{ height: '145px' }}>
          <Row gutter={20}>{userMessage}</Row>
        </div>
        {/* 企业变化趋势 */}
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
            title="企业变化趋势"
          >
            <CompanyTrend talnetTrendData={talnetTrendData} />
          </Card>
        </Card>
        {/* 年龄分析 */}
        <Card
          className={cardClassName}
          bordered={false}
          bodyStyle={{ padding: '0 20px 20px' }}
          style={{ marginTop: 20 }}
        >
          <Tabs defaultActiveKey="1">
            <TabPane tab="年龄分析" key="1">
              <AgeAnaly ageAnaDo={ageAnaDo} />
            </TabPane>
            <TabPane tab="来源分析" key="2">
              <div className={styles.sourceAnaly}>
                <div className={styles.mapBlock}>
                  <SourceMap sourceAnaDo={sourceAnaDo} />
                </div>
                <div className={styles.sourceCount}>
                  <p className={styles.sourceTitle}>就业人数来源TOP 10</p>
                  <ul>
                    {sourceAnaDo.map((item, i) => (
                      <li key={i}>
                        <p>{item.province}</p>
                        <div style={{ width: '165px' }}>
                          <i
                            style={{
                              width: `${(
                                (item.provinceTalentProp / sourceAnaDo[0].provinceTalentProp) *
                                100
                              ).toFixed(2)}%`,
                            }}
                          />
                        </div>
                        <span>{item.provinceTalentCnt}</span>
                        <span>{`${(item.provinceTalentProp * 100).toFixed(2)}%`}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </Card>
        {/* 就业人才分析 */}
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
            <Card bodyStyle={{ padding: '0 20px 20px' }} style={{ width: '100%', height: '287px' }}>
              <Card
                className={styles.cardTitleLeft}
                bordered={false}
                bodyStyle={{ padding: '20px 0 0 0' }}
                title="人才学历分析"
              >
                {cultureTalent.length ? (
                  <div className={styles.cultureCircle}>
                    {cultureTalent.map((item, i) => {
                      return (
                        <MiniCircle
                          key={i}
                          bg={circleBgArray[i]}
                          percent={item.talentProp}
                          num={item.talentCnt}
                          title={item.talentSmallClassName}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className={styles.withoutCount}>
                    <p>暂无数据</p>
                  </div>
                )}
              </Card>
            </Card>
            <Row>
              <Col span={15}>
                <Card
                  bodyStyle={{ padding: '0 20px 20px' }}
                  style={{ height: '305px', marginTop: 20 }}
                >
                  <Card bordered={false} bodyStyle={{ padding: '20px 0 0 0' }} title="薪资水平分布">
                    {salaryTalent.length ? (
                      <div className={styles.cultureCircle}>
                        {salaryTalent.map((item, i) => (
                          <MiniTri
                            key={i}
                            bg={triBgArray[i]}
                            percent={item.talentProp}
                            num={item.talentCnt}
                            title={item.talentSmallClassName}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className={styles.withoutCount}>
                        <p>暂无数据</p>
                      </div>
                    )}
                  </Card>
                </Card>
              </Col>
              <Col span={9}>
                <Card
                  bodyStyle={{ padding: '0 20px 20px' }}
                  style={{ marginTop: '20px', marginLeft: '20px' }}
                >
                  <Card
                    className={styles.cardTitleLeft}
                    bordered={false}
                    bodyStyle={{ padding: '20px 0 0 0' }}
                    title="高级人才分析"
                  >
                    {seniorAna.length ? (
                      <div className={styles.analyNav} style={{ width: '100%', height: '218px' }}>
                        <div className={styles.analyTitle}>
                          <span>类别</span>
                          <span style={{ marginRight: '8px' }}>人数</span>
                        </div>
                        <ul>
                          {seniorAna.map((item, i) => (
                            <li key={i} className={styles.analyLabel}>
                              <p>{item.seniorTalentType}</p>
                              <div style={{ width: '250px' }}>
                                <i
                                  style={{
                                    width: `${(
                                      (item.seniorTalentCnt / seniorAna[2].seniorTalentCnt) *
                                      100
                                    ).toFixed(2)}%`,
                                  }}
                                />
                              </div>
                              <span>{item.seniorTalentCnt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className={styles.withoutCount}>
                        <p>暂无数据</p>
                      </div>
                    )}
                  </Card>
                </Card>
              </Col>
            </Row>
          </Card>
        </Card>
      </Fragment>
    );
  }
}
