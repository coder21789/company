import React from 'react';
import { Input, Icon } from 'antd';
import styles from './index.less';

const map = {
  UserName: {
    component: Input,
    props: {
      size: 'large',
      placeholder: '用户名',
    },
    rules: [
      {
        required: true,
        message: '用户名不能为空',
      },
    ],
  },
  Password: {
    component: Input,
    props: {
      size: 'large',
      type: 'password',
      placeholder: '密码',
    },
    rules: [
      {
        required: true,
        message: '密码不能为空',
      },
    ],
  },
  Mobile: {
    component: Input,
    props: {
      size: 'large',
      prefix: <Icon type="mobile" className={styles.prefixIcon} />,
      placeholder: 'mobile number',
    },
    rules: [
      {
        required: true,
        message: 'Please enter mobile number!',
      },
      {
        pattern: /^1\d{10}$/,
        message: 'Wrong mobile number format!',
      },
    ],
  },
  Captcha: {
    component: Input,
    props: {
      size: 'large',
      prefix: <Icon type="mail" className={styles.prefixIcon} />,
      placeholder: 'captcha',
    },
    rules: [
      {
        required: true,
        message: 'Please enter Captcha!',
      },
    ],
  },
};

export default map;
