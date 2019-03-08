import React, { Component, Fragment } from 'react';
import { routerRedux } from 'dva/router';
import { Card, Pagination, Tabs } from 'antd';
import { connect } from 'dva';
import styles from './comInter.less';

const { TabPane } = Tabs;

@connect(({ govInter }) => ({
  govInter,
}))
export default class ComInter extends Component {
  state = {
    activeId: '',
  };

  componentDidMount() {
    const {
      dispatch,
      location: { state },
    } = this.props;
    console.log(state);
    if (state) {
      this.setState({ activeId: state.id });
      dispatch({
        type: 'govInter/fetchListOpenCompanys',
        payload: { activeId: state.id, pageNum: 1 },
      });
      dispatch({
        type: 'govInter/fetchListNotOpenCompanys',
        payload: { activeId: state.id, pageNum: 1 },
      });
    }
  }

  reback = () => {
    const { dispatch } = this.props;
    dispatch(routerRedux.replace('/gov/interactive/list'));
  };

  onChangeOpen = pageNum => {
    const { dispatch } = this.props;
    const { activeId } = this.state;
    dispatch({
      type: 'govInter/fetchListOpenCompanys',
      payload: { activeId, pageNum },
    });
  };

  onChangeOpenNot = pageNum => {
    const { dispatch } = this.props;
    const { activeId } = this.state;
    dispatch({
      type: 'govInter/fetchListNotOpenCompanys',
      payload: { activeId, pageNum },
    });
  };

  render() {
    const {
      govInter: { listOpenCompanysData, listNotOpenCompanysData },
    } = this.props;

    return (
      <Fragment>
        <Card bordered={false} bodyStyle={{ padding: '20px' }} className={styles.cnt}>
          <div className={styles.reback} onClick={this.reback}>
            返回互动列表
          </div>
          <Tabs defaultActiveKey="2">
            <TabPane tab={`未打开企业${listNotOpenCompanysData.total || 0}家`} key="1">
              <ul className={styles.company}>
                {listNotOpenCompanysData.datas &&
                  listNotOpenCompanysData.datas.map(v => (
                    <li className={styles.companyItem} key={v.companyId}>
                      {v.companyName}
                    </li>
                  ))}
              </ul>
              <Pagination
                style={{ float: 'right', marginTop: '12px' }}
                total={listNotOpenCompanysData.total || 0}
                defaultPageSize={listNotOpenCompanysData.limit || 36}
                onChange={this.onChangeOpenNot}
                showQuickJumper
                showTotal={total => `共${total}条`}
              />
            </TabPane>
            <TabPane tab={`已打开企业${listOpenCompanysData.total || 0}家`} key="2">
              <ul className={styles.company}>
                {listOpenCompanysData.datas &&
                  listOpenCompanysData.datas.map(v => (
                    <li className={styles.companyItem} key={v.companyId}>
                      {v.companyName}
                    </li>
                  ))}
              </ul>
              <Pagination
                style={{ float: 'right', marginTop: '12px' }}
                total={listOpenCompanysData.total || 0}
                defaultPageSize={listNotOpenCompanysData.limit || 36}
                onChange={this.onChangeOpen}
                showQuickJumper
                showTotal={total => `共${total}条`}
              />
            </TabPane>
          </Tabs>
        </Card>
      </Fragment>
    );
  }
}
