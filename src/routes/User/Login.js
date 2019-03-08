import React, { Component } from 'react';
import { connect } from 'dva';
import { Alert } from 'antd';
import Login from 'components/Login';
import styles from './Login.less';

const { UserName, Password, Submit } = Login;

@connect(({ login, loading }) => ({
  login,
  submitting: loading.effects['login/login'],
}))
export default class LoginPage extends Component {
  state = {
    type: 'account',
  };

  componentDidMount() {
    const { dispatch } = this.props;

    // 票据登陆
    let currentTicket = window.location.href.split('?')[1];

    if (currentTicket && currentTicket.length && currentTicket.includes('=')) {
      if (currentTicket.includes('&')) {
        currentTicket = currentTicket.split('&') && currentTicket.split('&')[0];
      }
      const key = currentTicket.split('=')[0];
      const value = currentTicket.split('=')[1];
      if (key === 'ticket' && value) {
        // 发送登陆请求
        dispatch({
          type: 'login/login',
          payload: {
            ticket: value,
          },
        });
      }
    }
  }

  onTabChange = type => {
    this.setState({ type });
  };

  handleSubmit = (err, values) => {
    const { type } = this.state;
    const { dispatch } = this.props;
    if (!err) {
      dispatch({
        type: 'login/login',
        payload: {
          ...values,
          type,
        },
      });
    }
  };

  renderMessage = content => {
    return <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />;
  };

  render() {
    const { login, submitting } = this.props;
    const { type } = this.state;
    return (
      <div className={styles.main}>
        <Login defaultActiveKey={type} onTabChange={this.onTabChange} onSubmit={this.handleSubmit}>
          {login.status === 'error' &&
            login.type === 'account' &&
            !submitting &&
            this.renderMessage('账户或密码错误')}
          <h1 className={styles.title}>登录</h1>
          <UserName name="username" placeholder="用户名" />
          <Password name="password" placeholder="密码" />
          <Submit loading={submitting}>登录</Submit>
        </Login>
      </div>
    );
  }
}
