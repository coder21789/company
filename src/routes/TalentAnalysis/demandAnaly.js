import React, { Fragment } from 'react';
import { connect } from 'dva';
import { Card, Table, Row, Col } from 'antd';
import classNames from 'classnames';
import styles from './demandAnaly.less';
import DemandTrend from './components/demandAnaly/demandTrend.js';
import CultureAnaly from './components/demandAnaly/cultureAnaly.js';
import SalaryAnaly from './components/demandAnaly/salaryAnaly.js';
import VariousInstry from './components/demandAnaly/variousInstry.js';
import TalentTrend from './components/demandAnaly/talentTrend.js';

const cardClassName = classNames({
  'content-card': true,
});
@connect(({ demandAnaly }) => ({
  demandAnaly,
}))
class demandAnaly extends React.Component {
  componentDidMount() {
    this.init();
  }

  async init() {
    const { dispatch } = this.props;
    await new Promise(resolve => {
      dispatch({
        type: 'demandAnaly/fetchDemandTrend',
      });
      dispatch({
        type: 'demandAnaly/fetchDemandLabel',
      });
      dispatch({
        type: 'demandAnaly/fetchDemandAbility',
      });
      dispatch({
        type: 'demandAnaly/fetchDemandLack',
      });
      dispatch({
        type: 'demandAnaly/fetchDemandIndustry',
      });
      resolve();
    });
  }

  render() {
    const {
      demandAnaly: {
        demandTrendData,
        demandLabelData,
        demandAbilityData: { cultureTalent, salaryTalent },
        demandLackData: { companyLack, postLack },
        demandIndustryData,
      },
    } = this.props;
    // 公司紧缺榜单
    const companyDataSource = companyLack.map((v, i) => {
      return {
        key: i,
        rank: v.rank,
        lackName: v.lackName,
        lackCnt: v.lackCnt,
      };
    });
    // 公司紧缺榜单
    const companyColumns = [
      {
        title: '排名',
        width: 90,
        dataIndex: 'rank',
      },
      {
        title: '人才紧缺企业',
        dataIndex: 'lackName',
        width: 240,
      },
      {
        title: '岗位需求量',
        align: 'right',
        width: 100,
        dataIndex: 'lackCnt',
      },
    ];
    // 岗位紧缺榜单
    const postDataSource = postLack.map((v, i) => {
      return {
        key: i,
        rank: v.rank,
        lackName: v.lackName,
        lackCnt: v.lackCnt,
      };
    });
    // 岗位紧缺榜单
    const postColumns = [
      {
        title: '排名',
        dataIndex: 'rank',
      },
      {
        title: '人才紧缺岗位',
        dataIndex: 'lackName',
      },
      {
        title: '岗位需求量',
        align: 'right',
        width: 100,
        dataIndex: 'lackCnt',
      },
    ];
    return (
      <Fragment>
        {/* 各行业人才需求情况 */}
        <Card className={cardClassName} bordered={false} bodyStyle={{ padding: '0 20px 20px' }}>
          <Card
            className={styles.cardTitleLeft}
            bordered={false}
            bodyStyle={{ padding: '20px 0 0 0' }}
            title="各行业人才需求情况"
          >
            <VariousInstry demandIndustryData={demandIndustryData} />
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
            title="人才需求趋势"
          >
            <DemandTrend demandTrendData={demandTrendData} />
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
            title="人才需求趋势"
          >
            <TalentTrend demandLabelData={demandLabelData} />
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
            title="人才需求层级"
          >
            <Row>
              <Col span={12}>
                <CultureAnaly cultureTalent={cultureTalent} />
              </Col>
              <Col span={12}>
                <SalaryAnaly salaryTalent={salaryTalent} />
              </Col>
            </Row>
          </Card>
        </Card>
        {/* 人才紧缺榜单 */}
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
            title="人才紧缺榜单"
          >
            <Row>
              <Col span={12}>
                <div className={styles.sleeveLessList}>
                  <Table
                    columns={companyColumns}
                    dataSource={companyDataSource}
                    size="small"
                    pagination={false}
                    style={{ borderRight: '1px solid rgba(151,151,151,0.2)' }}
                  />
                </div>
              </Col>
              <Col span={12}>
                <div className={styles.sleeveLessList}>
                  <Table
                    columns={postColumns}
                    dataSource={postDataSource}
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
export default demandAnaly;
