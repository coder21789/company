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
  Modal,
  Form,
  message,
  Checkbox,
  Radio,
  DatePicker,
  Select,
  Dropdown,
  Menu,
} from 'antd';

// import numeral from 'numeral'
import moment from 'moment';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { connect } from 'dva';
import {
  revenueLevels,
  taxLevels,
  industrys,
  yearEstabs,
  scoreLevels,
  regisCaps,
} from '../../Company/options';
import styles from './addInter.less';

const FormItem = Form.Item;
const { TextArea } = Input;
const RadioGroup = Radio.Group;
const { Option } = Select;
const CheckboxGroup = Checkbox.Group;

const disabledDate = current => {
  return current && current < moment().subtract(1, 'days');
};

@connect(({ govInter }) => ({
  govInter,
}))
class AddInterForm extends Component {
  state = {
    selectComVisible: false,
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
      minPatent: '',
      maxPatent: '',
      pageSize: 10,
      pageNum: 1,
    },
    selectComDetailVisible: false,
    copyValue: '',
    date: moment(),
    noComVisible: false,
    disabled: false,
    activeId: '',
    buttonDisabled: false,
  };

  componentDidMount() {
    const {
      dispatch,
      location: { state },
      form,
    } = this.props;
    dispatch({
      type: 'govInter/fetchListPolicys',
    });
    dispatch({
      type: 'govInter/fetchSendSum',
      payload: { date: moment().format('YYYY-MM-DD') },
    });

    if (state) {
      (async () => {
        await dispatch({
          type: 'govInter/fetchQueryActiveById',
          payload: { id: state.id },
        });
        const {
          govInter: { queryActiveByIdData },
        } = this.props;
        form.setFieldsValue({
          name: queryActiveByIdData.name,
          showCom: true,
          policyId: queryActiveByIdData.policyId,
          activeDetail: queryActiveByIdData.activeDetail,
          acceptWay: queryActiveByIdData.acceptWay.split(','),
          immediate: `${queryActiveByIdData.immediate}`,
        });
        this.setState({
          date: moment(queryActiveByIdData.sendTime, 'YYYY-MM-DD HH:mm:ss'),
        });
        dispatch({
          type: 'govInter/fetchListCompany',
          payload: { activeId: state.id, pageSize: 10, pageNum: 1 },
        });
        this.setState({ activeId: state.id });
      })();
      this.setState({ disabled: true });
    } else {
      this.setState({ activeId: '' });
      form.setFieldsValue({
        immediate: '1',
        acceptWay: ['1'],
      });
    }
  }

  onShowSizeChange = (pageNum, pageSize) => {
    const { dispatch } = this.props;
    const { requiredParameter, activeId } = this.state;
    requiredParameter.pageNum = pageNum;
    requiredParameter.pageSize = pageSize;
    this.setState({
      requiredParameter,
    });
    dispatch({
      type: 'govInter/fetchListCompany',
      payload: { ...requiredParameter, activeId },
    });
  };

  onChangePageNum = pageNum => {
    const { dispatch } = this.props;
    const { requiredParameter, activeId } = this.state;
    requiredParameter.pageNum = pageNum;
    this.setState({
      requiredParameter,
    });
    dispatch({
      type: 'govInter/fetchListCompany',
      payload: { ...requiredParameter, activeId },
    });
  };

  onChangePageNumCant = pageNum => {
    const { dispatch, form } = this.props;
    const { requiredParameter, activeId } = this.state;
    const acceptWay = form.getFieldValue('acceptWay').join(',');
    dispatch({
      type: 'govInter/fetchListCantSend',
      payload: { ...requiredParameter, activeId, pageNum, acceptWay },
    });
  };

  onChangeDate = date => {
    this.setState({
      date,
    });
    const { dispatch } = this.props;
    dispatch({
      type: 'govInter/fetchSendSum',
      payload: { date: date.format('YYYY-MM-DD') },
    });
  };

  onChangeCheck = e => {
    const acceptWay = e.join(',');
    const { dispatch } = this.props;
    const { requiredParameter, activeId } = this.state;
    dispatch({
      type: 'govInter/fetchListCantSend',
      payload: { ...requiredParameter, acceptWay, pageNum: 1, activeId },
    });
  };

  showModalNoCom = () => {
    this.setState({
      noComVisible: true,
    });
  };

  // showModalCom = id => {};

  showModalCom = () => {
    const { dispatch } = this.props;
    const { requiredParameter } = this.state;
    dispatch({
      type: 'govInter/fetchListCompany',
      payload: { ...requiredParameter },
    });
    this.setState({
      selectComVisible: true,
    });
  };

  showModalComDetail = () => {
    this.setState({
      selectComDetailVisible: true,
    });
  };

  handleOkCom = () => {
    const { form, dispatch } = this.props;
    const { requiredParameter, activeId } = this.state;
    this.setState({
      selectComVisible: false,
    });
    form.setFieldsValue({ showCom: true });
    const acceptWay = form.getFieldValue('acceptWay').join(',');
    dispatch({
      type: 'govInter/fetchListCantSend',
      payload: { ...requiredParameter, acceptWay, pageNum: 1, activeId },
    });
  };

  handleCancelCant = () => {
    this.setState({
      noComVisible: false,
    });
  };

  handleCancelCom = () => {
    this.setState({
      selectComVisible: false,
    });
  };

  handleCancelComDetail = () => {
    this.setState({
      selectComDetailVisible: false,
    });
  };

  confirm = e => {
    e.preventDefault();
    const { form, dispatch } = this.props;
    const { requiredParameter, date } = this.state;

    form.validateFields((err, values) => {
      if (!err) {
        this.setState({ buttonDisabled: true });
        setTimeout(() => {
          this.setState({ buttonDisabled: false });
        }, 1000);
        const sendTime = `${date.format('YYYY-MM-DD HH:mm:ss')}`;
        const acceptWay = values.acceptWay.join(',');
        (async () => {
          await dispatch({
            type: 'govInter/fetchAddActive',
            payload: { ...requiredParameter, ...values, acceptWay, sendTime },
          });
          const {
            govInter: { addActiveData },
          } = this.props;
          if (addActiveData.codeNum === 0) {
            message.success('新增互动成功');
            dispatch(routerRedux.push('/gov/interactive/list'));
          } else {
            message.error(addActiveData.value);
          }
        })();
      }
    });
  };

  cancel = () => {
    const { dispatch } = this.props;
    dispatch(routerRedux.push('/gov/interactive/list'));
  };

  copyLink = copyValue => {
    this.setState({ copyValue });
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
      requiredParameter,
    });
    const { dispatch } = this.props;
    dispatch({
      type: 'govInter/fetchListCompany',
      payload: { ...requiredParameter },
    });
  };

  changeCheckbox = (i, e) => {
    const { requiredParameter } = this.state;
    let check = '';
    if (i < 5) {
      check = e.target.checked ? 1 : 0;
    } else {
      check = e.target.value * 1.0;
    }
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
      case 5:
        requiredParameter.minPatent = check;
        break;
      case 6:
        requiredParameter.maxPatent = check;
        break;
      default:
        break;
    }
    this.setState({
      requiredParameter,
    });
    const { dispatch } = this.props;
    dispatch({
      type: 'govInter/fetchListCompany',
      payload: { ...requiredParameter },
    });
  };

  render() {
    const {
      selectComVisible,
      dropdownOption,
      radioOption,
      selectComDetailVisible,
      copyValue,
      noComVisible,
      disabled,
      date,
      requiredParameter: { pageSize, pageNum },
      activeId,
      buttonDisabled,
    } = this.state;
    const {
      form: { getFieldDecorator, getFieldValue },
      govInter: { listCompanyData, listPolicysData, listCantSendData, sendSumData },
    } = this.props;

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

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 10,
          offset: 3,
        },
      },
    };

    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    const menu = (data, i) => {
      return (
        <Menu onClick={this.changeDropdown}>
          {data.map(items => (
            <Menu.Item key={`${i},${items.value.toString()},${items.name}`}>{items.name}</Menu.Item>
          ))}
        </Menu>
      );
    };

    const columns = [
      {
        title: '序号',
        dataIndex: 'key',
        key: 'key',
      },
      {
        title: '企业名称',
        dataIndex: 'companyName',
        key: 'companyName',
      },
    ];

    const data = listCompanyData.list.map((v, i) => {
      return {
        ...v,
        key: pageSize * (pageNum - 1) + i + 1,
      };
    });

    const data1 = listCantSendData.datas.map((v, i) => {
      return {
        ...v,
        key: pageSize * (pageNum - 1) + i + 1,
      };
    });

    const plainOptions = [
      { label: '短信', value: '1' },
      { label: '邮件', value: '2', disabled: true },
    ];

    return (
      <Fragment>
        <Modal
          title="选择互动企业"
          visible={selectComVisible}
          onCancel={this.handleCancelCom}
          width="900px"
          footer={null}
        >
          <div className={styles.selectOption}>
            <Row>
              {dropdownOption.map((item, i) => (
                <Col key={item.name} span={8}>
                  <span>{item.name}</span>
                  <Dropdown overlay={menu(item.data, i)}>
                    <a className="ant-dropdown-link">
                      {item.value}
                      <Icon type="down" />
                    </a>
                  </Dropdown>
                </Col>
              ))}
              {radioOption.map((item, i) => (
                <Col key={item} span={8}>
                  <Checkbox onChange={this.changeCheckbox.bind(this, i)}>{item}</Checkbox>
                </Col>
              ))}
              <Col span={8}>
                <span>专利数量：</span>
                <Input
                  size="small"
                  style={{ width: '60px' }}
                  onChange={this.changeCheckbox.bind(this, 5)}
                />
                -
                <Input
                  size="small"
                  style={{ width: '60px' }}
                  onChange={this.changeCheckbox.bind(this, 6)}
                />
              </Col>
            </Row>
          </div>
          <div className={styles.count}>共{listCompanyData.total}条记录</div>
          <Table columns={columns} dataSource={data} pagination={false} />
          <div style={{ overflow: 'hidden' }}>
            <Pagination
              style={{ float: 'right', marginTop: '12px' }}
              total={listCompanyData.total}
              onShowSizeChange={this.onShowSizeChange}
              onChange={this.onChangePageNum}
              showSizeChanger
              showQuickJumper
              showTotal={total => `共${total}条`}
            />
          </div>
          <div className={styles.rightButton}>
            <Button type="primary" onClick={this.handleOkCom}>
              确 定
            </Button>
            <Button onClick={this.handleCancelCom}>取 消</Button>
          </div>
        </Modal>

        <Modal
          title="选择互动企业"
          visible={selectComDetailVisible}
          onCancel={this.handleCancelComDetail}
          width="900px"
          footer={null}
        >
          <div className={styles.count}>共{listCompanyData.total}条记录</div>
          <Table columns={columns} dataSource={data} pagination={false} />
          <div style={{ overflow: 'hidden' }}>
            <Pagination
              style={{ float: 'right', marginTop: '12px' }}
              total={listCompanyData.total}
              onShowSizeChange={this.onShowSizeChange}
              onChange={this.onChangePageNum}
              showSizeChanger
              showQuickJumper
              showTotal={total => `共${total}条`}
            />
          </div>
          <div className={styles.rightButton}>
            <Button type="primary" onClick={this.handleCancelComDetail}>
              我知道了
            </Button>
          </div>
        </Modal>

        <Modal
          title="无法触达企业"
          visible={noComVisible}
          onCancel={this.handleCancelCant}
          width="900px"
          footer={null}
        >
          <div className={styles.count}>尚有{listCantSendData.total}家企业无法触达</div>
          <Table columns={columns} dataSource={data1} pagination={false} />
          <div style={{ overflow: 'hidden' }}>
            <Pagination
              style={{ float: 'right', marginTop: '12px' }}
              total={listCantSendData.total}
              onChange={this.onChangePageNumCant}
              showQuickJumper
              showTotal={total => `共${total}条`}
            />
          </div>
          <div className={styles.rightButton}>
            <Button type="primary" onClick={this.handleCancelCant}>
              我知道了
            </Button>
          </div>
        </Modal>

        <Card bordered={false} bodyStyle={{ padding: '20px' }} className={styles.cnt}>
          <div className={styles.title}>{disabled ? '互动详情' : '新增互动'}</div>
          <Form onSubmit={this.confirm}>
            <FormItem {...formItemLayout} label="互动名称" help="50个中文字符以内">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入50个以内中文字符' }],
              })(<Input style={{ width: 456 }} disabled={disabled} />)}
            </FormItem>
            <FormItem {...formItemLayout} label="圈选企业">
              {getFieldDecorator('showCom', {
                rules: [{ required: true, message: '请选择互动企业' }],
              })(
                <Button onClick={this.showModalCom} disabled={disabled}>
                  选择互动企业
                </Button>
              )}
              {getFieldValue('showCom') ? (
                <span style={{ marginLeft: '12px' }}>
                  总计有{listCompanyData.total}家企业被选中，
                  <span className={styles.clickStyle} onClick={() => this.showModalComDetail()}>
                    查看详情
                  </span>
                </span>
              ) : null}
            </FormItem>

            <FormItem {...formItemLayout} label="选择政策">
              {getFieldDecorator('policyId', {
                rules: [
                  {
                    required: true,
                    message: '请选择政策',
                  },
                ],
              })(
                <Select style={{ width: 456 }} optionLabelProp="title" disabled={disabled}>
                  {listPolicysData.map(v => (
                    <Option
                      value={v.id}
                      title={v.policyName}
                      key={v.id}
                      onClick={() => this.copyLink(v.policyUrl)}
                    >
                      <div style={{ float: 'left' }}>{v.policyName}</div>
                      <CopyToClipboard text={v.policyUrl}>
                        <div style={{ float: 'right', color: '#1889F2' }}>复制政策链接</div>
                      </CopyToClipboard>
                    </Option>
                  ))}
                </Select>
              )}
              {getFieldValue('policyId') && activeId === '' ? (
                <CopyToClipboard text={copyValue}>
                  <span style={{ marginLeft: '12px' }} className={styles.clickStyle}>
                    复制政策链接
                  </span>
                </CopyToClipboard>
              ) : null}
            </FormItem>

            <FormItem {...formItemLayout} label="互动内容">
              {getFieldDecorator('activeDetail', {
                rules: [{ required: true, message: '请输入互动内容' }],
              })(
                <TextArea
                  placeholder="填写样例：企业年审申报已经开始，申报时间8月30日前，详情请点击：https://shu.startdt.com"
                  rows={4}
                  style={{ width: 456 }}
                  disabled={disabled}
                />
              )}
            </FormItem>

            <FormItem {...formItemLayout} label="触达方式">
              {getFieldDecorator('acceptWay', {
                rules: [{ required: true, message: '请至少勾选一种触达方式' }],
              })(
                <CheckboxGroup
                  disabled={disabled}
                  options={plainOptions}
                  onChange={this.onChangeCheck}
                />
              )}
              {getFieldValue('showCom') &&
              getFieldValue('acceptWay') &&
              getFieldValue('acceptWay').length > 0 ? (
                <span>
                  因企业联系人手机号码缺失，尚有
                  <span style={{ color: '#EB5252' }}>{listCantSendData.total}</span>
                  家企业无法触达，
                  <span className={styles.clickStyle} onClick={() => this.showModalNoCom()}>
                    查看详情
                  </span>
                </span>
              ) : null}
            </FormItem>

            <FormItem {...formItemLayout} label="推送时间">
              {getFieldDecorator('immediate', {
                rules: [{ required: true, message: '请至少勾选一种触达方式' }],
              })(
                <RadioGroup disabled={disabled}>
                  <Radio style={radioStyle} value="1">
                    立即推送
                    {getFieldValue('immediate') && getFieldValue('immediate') === '1' ? (
                      <span
                        style={{ color: 'rgba(0,0,0,0.45)', fontSize: '12px', marginLeft: '8px' }}
                      >
                        当日可互动企业数为
                        <span style={{ color: 'rgb(0,0,0)' }}>{sendSumData.value || 0}</span>
                        ，优先推送给排名靠前的企业
                      </span>
                    ) : null}
                  </Radio>
                  <Radio style={radioStyle} value="0">
                    自定义时间
                    <DatePicker
                      showTime
                      format="YYYY-MM-DD HH:mm:ss"
                      value={date}
                      disabledDate={disabledDate}
                      onChange={this.onChangeDate}
                      style={{ marginLeft: '8px', width: '200px' }}
                      disabled={disabled}
                    />
                    {getFieldValue('immediate') && getFieldValue('immediate') === '0' ? (
                      <span
                        style={{ color: 'rgba(0,0,0,0.45)', fontSize: '12px', marginLeft: '8px' }}
                      >
                        当日可互动企业数为
                        <span style={{ color: 'rgb(0,0,0)' }}>{sendSumData.value || 0}</span>
                        ，优先推送给排名靠前的企业
                      </span>
                    ) : null}
                  </Radio>
                </RadioGroup>
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              {disabled ? (
                <Button onClick={this.cancel} type="primary">
                  我知道了
                </Button>
              ) : (
                <div>
                  <Button type="primary" htmlType="submit" disabled={buttonDisabled}>
                    确 定
                  </Button>
                  <Button style={{ marginLeft: '12px' }} onClick={this.cancel}>
                    取 消
                  </Button>
                </div>
              )}
            </FormItem>
          </Form>
        </Card>
      </Fragment>
    );
  }
}

const AddInter = Form.create()(AddInterForm);
export default AddInter;
