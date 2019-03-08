import React, { Component, Fragment } from 'react';
import { routerRedux } from 'dva/router';
import {
  Row,
  Col,
  Button,
  Icon,
  Card,
  Input,
  Table,
  Pagination,
  Divider,
  Modal,
  message,
} from 'antd';

import { connect } from 'dva';
import styles from './interactive.less';

const { Search } = Input;

@connect(({ govInter }) => ({
  govInter,
}))
export default class Interactive extends Component {
  state = {
    deleteVisible: false,
    keyword: '',
    pageSize: 10,
    pageNum: 1,
    selectedRowsIds: '',
    ids: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    const { keyword, pageSize, pageNum } = this.state;
    dispatch({
      type: 'govInter/fetchListActives',
      payload: { keyword, pageNum, pageSize },
    });
  }

  onShowSizeChange = (pageNum, pageSize) => {
    const { dispatch } = this.props;
    const { keyword } = this.state;
    this.setState({
      pageNum,
      pageSize,
    });
    dispatch({
      type: 'govInter/fetchListActives',
      payload: { keyword, pageNum, pageSize },
    });
  };

  onChangePageNum = pageNum => {
    const { dispatch } = this.props;
    const { keyword, pageSize } = this.state;
    this.setState({
      pageNum,
    });
    dispatch({
      type: 'govInter/fetchListActives',
      payload: { keyword, pageNum, pageSize },
    });
  };

  search = keyword => {
    const { dispatch } = this.props;
    const { pageSize } = this.state;
    this.setState({
      keyword,
    });
    dispatch({
      type: 'govInter/fetchListActives',
      payload: { keyword, pageNum: 1, pageSize },
    });
  };

  showModalCom = text => {
    const { dispatch } = this.props;
    dispatch(
      routerRedux.replace({
        pathname: '/gov/interactive/comInter',
        state: { id: text.id },
      })
    );
  };

  showModalAdd = () => {
    const { dispatch } = this.props;
    dispatch(routerRedux.replace('/gov/interactive/addInter'));
  };

  showModalDelete = text => {
    if (text) {
      this.setState({
        deleteVisible: true,
        ids: `${text.id}`,
      });
    } else {
      const { selectedRowsIds } = this.state;
      this.setState({
        deleteVisible: true,
        ids: selectedRowsIds,
      });
    }
  };

  showModalDetail = text => {
    const { dispatch } = this.props;
    dispatch(
      routerRedux.replace({
        pathname: '/gov/interactive/addInter',
        state: { id: text.id },
      })
    );
  };

  handleOkDelete = () => {
    const { dispatch } = this.props;
    (async () => {
      const { ids, keyword, pageNum, pageSize } = this.state;
      await dispatch({
        type: 'govInter/fetchDeleteActive',
        payload: { ids },
      });
      const {
        govInter: { deleteActiveData },
      } = this.props;

      if (deleteActiveData.codeNum === 0) {
        dispatch({
          type: 'govInter/fetchListActives',
          payload: { keyword, pageNum, pageSize },
        });
        message.success(deleteActiveData.value);
      } else {
        message.error(deleteActiveData.value);
      }
      this.setState({
        deleteVisible: false,
      });
    })();
  };

  handleCancelDelete = () => {
    this.setState({
      deleteVisible: false,
    });
  };

  render() {
    const { deleteVisible, selectedRowsIds } = this.state;
    const {
      govInter: { listActivesData },
    } = this.props;

    // console.log(listActivesData);
    const columns = [
      {
        title: '互动名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '政策名称',
        dataIndex: 'policyName',
        key: 'policyName',
      },
      {
        title: '互动内容',
        dataIndex: 'activeDetail',
        key: 'activeDetail',
      },
      {
        title: '触达方式',
        dataIndex: 'acceptWay',
        key: 'acceptWay',
        render: text => (
          <span>
            {text
              .replace('1', '短信')
              .replace('2', '邮件')
              .replace(',', '、')}
          </span>
        ),
      },
      {
        title: '推送时间',
        dataIndex: 'sendTime',
        key: 'sendTime',
      },
      {
        title: '触达企业数',
        dataIndex: 'companyCnt',
        key: 'companyCnt',
        render: (text, record) => (
          <span>
            <span className={styles.clickStyle} onClick={() => this.showModalCom(record)}>
              {text}
            </span>
          </span>
        ),
      },
      {
        title: '打开率',
        dataIndex: 'openRate',
        key: 'openRate',
        render: text => <span>{(text * 100).toFixed(2)}%</span>,
      },
      {
        title: '操作员',
        dataIndex: 'modifyUser',
        key: 'modifyUser',
      },
      {
        title: '操作',
        key: 'id',
        render: text => (
          <span>
            <span className={styles.clickStyle} onClick={() => this.showModalDetail(text)}>
              查看详情
            </span>
            <Divider type="vertical" />
            <span className={styles.clickStyle} onClick={() => this.showModalDelete(text)}>
              删除
            </span>
          </span>
        ),
      },
    ];
    // const types = ['短信', '邮件'];
    let data = [];
    if (listActivesData && listActivesData.list) {
      data = listActivesData.list.map((v, i) => {
        return {
          ...v,
          key: i + 1,
        };
      });
    }
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        const selectedRowsId = selectedRows.map(v => v.id).join(',');
        this.setState({ selectedRowsIds: selectedRowsId });
      },
    };
    return (
      <Fragment>
        <Modal
          title="删除确认"
          visible={deleteVisible}
          onCancel={this.handleCancelDelete}
          width="300px"
          footer={null}
        >
          <p style={{ marginBottom: '14px' }}>确认要删除选中的互动记录吗？</p>
          <div className={styles.rightButton}>
            <Button type="danger" onClick={this.handleOkDelete}>
              删 除
            </Button>
            <Button onClick={this.handleCancelDelete}>取 消</Button>
          </div>
        </Modal>
        <Card bordered={false} bodyStyle={{ padding: '20px' }} className={styles.cnt}>
          <Row>
            <Col span={12}>
              <Button type="primary" onClick={this.showModalAdd}>
                <Icon type="tianjiajiahaowubiankuang" />新增
              </Button>
              <Button
                style={{ marginLeft: '16px' }}
                onClick={() => this.showModalDelete()}
                disabled={selectedRowsIds === ''}
              >
                <Icon type="lajitong" />删除
              </Button>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <Search
                placeholder="请输入名称或内容搜索"
                onSearch={value => this.search(value)}
                enterButton
                style={{ width: '230px', marginBottom: '12px' }}
              />
            </Col>
          </Row>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            pagination={false}
          />
          <Pagination
            style={{ float: 'right', marginTop: '12px' }}
            total={listActivesData.total}
            onShowSizeChange={this.onShowSizeChange}
            onChange={this.onChangePageNum}
            showSizeChanger
            showQuickJumper
            showTotal={total => `共${total}条`}
          />
        </Card>
      </Fragment>
    );
  }
}
