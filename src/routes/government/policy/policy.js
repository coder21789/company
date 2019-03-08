import React, { Component, Fragment } from 'react';
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
  Form,
  Upload,
  message,
} from 'antd';
// 引入编辑器以及编辑器样式
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/braft.css';

import { connect } from 'dva';
import styles from './policy.less';

const { Search } = Input;
const FormItem = Form.Item;

@connect(({ govPolicy }) => ({
  govPolicy,
}))
class RegistrationForm extends Component {
  state = {
    deleteVisible: false,
    addVisible: false,
    keyword: '',
    pageSize: 10,
    pageNum: 1,
    ids: '',
    color: '',
    selectedRowsIds: '',
    id: '',
    fileList: [],
    buttonDisabled: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    const { keyword, pageSize, pageNum } = this.state;
    dispatch({
      type: 'govPolicy/fetchListPolicy',
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
      type: 'govPolicy/fetchListPolicy',
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
      type: 'govPolicy/fetchListPolicy',
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
      type: 'govPolicy/fetchListPolicy',
      payload: { keyword, pageNum: 1, pageSize },
    });
  };

  showModalDelete = value => {
    if (value) {
      this.setState({
        deleteVisible: true,
        ids: `${value}`,
      });
    } else {
      const { selectedRowsIds } = this.state;
      this.setState({
        deleteVisible: true,
        ids: selectedRowsIds,
      });
    }
  };

  showModalAdd = id => {
    const { form } = this.props;
    this.setState({
      addVisible: true,
      id,
    });
    if (id !== '') {
      const { dispatch } = this.props;
      (async () => {
        await dispatch({
          type: 'govPolicy/fetchGetPolicy',
          payload: { id },
        });
        const {
          govPolicy: { getPolicyData },
        } = this.props;
        const { policyName, policyDetail } = getPolicyData;
        form.setFieldsValue({ policyName, policyDetail });
        this.editorInstance.setContent(policyDetail);
        this.setState({
          fileList: getPolicyData.accessoryList.map(v => {
            return {
              uid: v.id,
              name: v.name,
              status: 'done',
              url: v.path,
              size: 1024,
            };
          }),
        });
      })();
    } else {
      form.setFieldsValue({ policyName: '', policyDetail: '' });
      this.setState({ fileList: [] });
      setTimeout(() => {
        this.editorInstance.setContent('');
      }, 200);
    }
  };

  validateToPolicyDetail = (rule, value, callback) => {
    if (value && value === '<p></p>') {
      this.setState({ color: '#f5222d' });
      callback('请输入政策详情！');
      return;
    }
    this.setState({ color: 'rgba(204, 204, 204, 1)' });
    callback();
  };

  toDetail = id => {
    const win = window.open(`http://policydetail.startdt.com/#/policyId=${id}`, '_blank');
    win.focus();
  };

  handleOkDelete = () => {
    const { dispatch } = this.props;
    (async () => {
      const { ids, keyword, pageNum, pageSize } = this.state;
      await dispatch({
        type: 'govPolicy/fetchDeletePolicy',
        payload: { ids },
      });
      const {
        govPolicy: { deletePolicyData },
      } = this.props;
      // console.log(ids, deletePolicyData);

      if (deletePolicyData.codeNum === 0) {
        dispatch({
          type: 'govPolicy/fetchListPolicy',
          payload: { keyword, pageNum, pageSize },
        });
        message.success(deletePolicyData.value);
      } else {
        message.error(deletePolicyData.value);
      }
      this.setState({
        deleteVisible: false,
      });
    })();
  };

  handleCancelDelete = () => {
    this.setState({
      deleteVisible: false,
      ids: '',
    });
  };

  handleOkAdd = () => {
    const {
      dispatch,
      form,
      govPolicy: { getPolicyData },
    } = this.props;
    const { id, fileList } = this.state;
    const policyDetail = this.editorInstance.getContent();

    form.setFieldsValue({ policyDetail });

    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState({ buttonDisabled: true });
        setTimeout(() => {
          this.setState({ buttonDisabled: false });
        }, 800);
        const formData = new FormData();
        formData.append('id', id);
        formData.append('policyName', values.policyName);
        formData.append('policyDetail', policyDetail);
        fileList.forEach(file => {
          formData.append('file', file.originFileObj, file.name);
        });
        if (id !== '') {
          const deleteIds = [];
          getPolicyData.accessoryList.forEach(item => {
            if (fileList.map(v => v.uid).indexOf(item.id) === -1) {
              deleteIds.push(item.id);
            }
          });
          formData.append('deleteIds', deleteIds.join(','));
        }
        (async () => {
          await dispatch({
            type: 'govPolicy/fetchAddOrUpdatePolicy',
            payload: formData,
          });
          const {
            govPolicy: { addOrUpdatePolicyData },
          } = this.props;
          // console.log(1, addOrUpdatePolicyData);
          if (addOrUpdatePolicyData.codeNum === 0) {
            const { keyword, pageSize, pageNum } = this.state;
            dispatch({
              type: 'govPolicy/fetchListPolicy',
              payload: { keyword, pageNum, pageSize },
            });
            this.setState({
              addVisible: false,
            });
            message.success(id === '' ? '上传成功!' : '修改成功');
          } else {
            message.error(addOrUpdatePolicyData.codeDesc);
          }
        })();
      }
    });
  };

  handleCancelAdd = () => {
    this.setState({
      addVisible: false,
    });
  };

  render() {
    const {
      deleteVisible,
      addVisible,
      color,
      selectedRowsIds,
      fileList,
      id,
      buttonDisabled,
    } = this.state;
    const {
      form: { getFieldDecorator },
      govPolicy: { listPolicyData },
    } = this.props;
    // console.log(listPolicyData);
    const columns = [
      {
        title: '政策名称',
        dataIndex: 'policyName',
        key: 'policyName',
        width: 150,
      },
      {
        title: '政策详情',
        dataIndex: 'policyDetail',
        key: 'policyDetail',
        // width: 200,
        render: text => <span className={styles.colSql}>{text.replace(/<[^>]+>/g, '')}</span>,
      },
      {
        title: '详情链接',
        dataIndex: 'policyUrl',
        key: 'policyUrl',
        render: (text, record) => (
          <span
            onClick={() => this.toDetail(record.id)}
            className={`${styles.clickStyle} ${styles.colSql}`}
          >
            {text}
          </span>
        ),
      },
      {
        title: '修改时间',
        dataIndex: 'modifyTime',
        key: 'modifyTime',
        width: 200,
      },
      {
        title: '操作员',
        dataIndex: 'modifyUser',
        key: 'modifyUser',
        width: 100,
      },
      {
        title: '操作',
        dataIndex: 'id',
        key: 'id',
        width: 120,
        render: (text, record) => (
          <span>
            <span className={styles.clickStyle} onClick={() => this.showModalAdd(record.id)}>
              修改
            </span>
            <Divider type="vertical" />
            <span className={styles.clickStyle} onClick={() => this.showModalDelete(text)}>
              删除
            </span>
          </span>
        ),
      },
    ];

    const data = listPolicyData.list.map((v, i) => {
      return {
        ...v,
        key: i + 1,
      };
    });

    const rowSelection = {
      columnWidth: 50,
      onChange: (selectedRowKeys, selectedRows) => {
        const selectedRowsId = selectedRows.map(v => v.id).join(',');
        this.setState({ selectedRowsIds: selectedRowsId });
      },
    };

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 3 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 21 },
      },
      colon: false,
    };

    const fileProps = {
      beforeUpload: () => {
        return false;
      },
      onChange: info => {
        const { file } = info;
        const { name } = file;
        const list = info.fileList;
        const suffix = name.substr(name.lastIndexOf('.') + 1);
        const suffixArr = ['docx', 'doc', 'wps', 'xlsx', 'xls'];
        const isJPG = suffixArr.indexOf(suffix) !== -1;
        if (!isJPG) {
          message.error('只能上传 xls/doc/wps／docx／xlsx 文件!');
        }
        const isLt2M = file.size / 1024 / 1024 < 50;
        if (!isLt2M) {
          message.error('文件大小不超过50Mb!');
        }
        const l = list.length <= 5;
        if (!l) {
          message.error('不超过5个附件!');
        }
        if (isJPG && isLt2M && l) {
          this.setState({ fileList: list });
        }
      },
      fileList,
    };
    const editorProps = {
      contentFormat: 'html',
      initialContent: '',
      height: 250,
      onChange: value => {
        const { form } = this.props;
        form.setFieldsValue({ policyDetail: value });
        form.validateFieldsAndScroll(['policyDetail']);
      },
      media: {
        allowPasteImage: true, // 是否允许直接粘贴剪贴板图片（例如QQ截图等）到编辑器
        image: true, // 开启图片插入功能
        video: true, // 开启视频插入功能
        audio: true, // 开启音频插入功能
        // uploadFn: (param) => {

        //   const serverURL = 'http://upload-server'
        //   const xhr = new XMLHttpRequest
        //   const fd = new FormData()

        //   // libraryId可用于通过mediaLibrary示例来操作对应的媒体内容
        //   console.log(param.libraryId)

        //   const successFn = (response) => {
        //     // 假设服务端直接返回文件上传后的地址
        //     // 上传成功后调用param.success并传入上传后的文件地址
        //     param.success({
        //       url: xhr.responseText,
        //       meta: {
        //         id: 'xxx',
        //         title: 'xxx',
        //         alt: 'xxx',
        //         loop: true, // 指定音视频是否循环播放
        //         autoPlay: true, // 指定音视频是否自动播放
        //         controls: true, // 指定音视频是否显示控制栏
        //         poster: 'http://xxx/xx.png', // 指定视频播放器的封面
        //       }
        //     })
        //   }

        //   const progressFn = (event) => {
        //     // 上传进度发生变化时调用param.progress
        //     param.progress(event.loaded / event.total * 100)
        //   }

        //   const errorFn = (response) => {
        //     // 上传发生错误时调用param.error
        //     param.error({
        //       msg: 'unable to upload.'
        //     })
        //   }

        //   xhr.upload.addEventListener("progress", progressFn, false)
        //   xhr.addEventListener("load", successFn, false)
        //   xhr.addEventListener("error", errorFn, false)
        //   xhr.addEventListener("abort", errorFn, false)

        //   fd.append('file', param.file)
        //   xhr.open('POST', serverURL, true)
        //   xhr.send(fd)

        // }, // 指定上传函数，说明见下文
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
          className={styles.policy}
        >
          <p style={{ marginBottom: '14px' }}>确认要删除选中的政策？</p>
          <div className={styles.rightButton}>
            <Button type="danger" onClick={this.handleOkDelete}>
              删 除
            </Button>
            <Button onClick={this.handleCancelDelete}>取 消</Button>
          </div>
        </Modal>

        <Modal
          title={id === '' ? '新增政策' : '修改政策'}
          visible={addVisible}
          onCancel={this.handleCancelAdd}
          width="900px"
          footer={null}
        >
          <Form>
            <FormItem {...formItemLayout} label="政策名称" help="50个中文字符以内">
              {getFieldDecorator('policyName', {
                rules: [{ required: true, message: '请输入50个以内中文字符' }],
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="政策详情">
              {getFieldDecorator('policyDetail', {
                rules: [
                  {
                    required: true,
                    message: '请输入政策详情！',
                  },
                  { validator: this.validateToPolicyDetail },
                ],
              })(
                <div className={styles.init} style={{ borderColor: color }}>
                  <BraftEditor
                    {...editorProps}
                    ref={instance => {
                      this.editorInstance = instance;
                    }}
                  />
                </div>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="附件">
              <Upload {...fileProps}>
                <Button>点击上传</Button>
                <span style={{ fontSize: '12px', color: '#999999', marginLeft: '8px' }}>
                  只能上传 docx/doc/xlsx/xls/wps 文件,且不超过 50Mb；不超过5个附件
                </span>
              </Upload>
            </FormItem>
          </Form>
          <div className={styles.rightButton}>
            <Button type="primary" onClick={this.handleOkAdd} disabled={buttonDisabled}>
              保 存
            </Button>
            <Button onClick={this.handleCancelAdd}>取 消</Button>
          </div>
        </Modal>

        <Card bordered={false} bodyStyle={{ padding: '20px' }} className={styles.cnt}>
          <Row>
            <Col span={12}>
              <Button type="primary" onClick={() => this.showModalAdd('')}>
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
                placeholder="请输入政策标题搜索"
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
            total={listPolicyData.total}
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
const Policy = Form.create()(RegistrationForm);
export default Policy;
