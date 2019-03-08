import React, { PureComponent } from 'react';
import { Icon } from 'antd';

import styles from './index.less';

export default class MiniPanel extends PureComponent {
  static defaultProps = {
    icon: 'zhifu',
    title: '标题',
    value: '-',
    percent: 0,
    rank: '',
  };

  render() {
    const { title, icon, value, percent, rank } = this.props;
    return (
      <div className={styles.miniPanel}>
        <header>
          <Icon type={icon} />
          <h6>{title}</h6>
        </header>
        <main className={styles.content}>
          <p>{value}</p>
          <span>
            占比：{percent > 0 ? `${(percent * 100).toFixed(2)}%` : '-'}&emsp;{rank
              ? `NO.${rank}`
              : '暂无排名信息'}
          </span>
        </main>
      </div>
    );
  }
}
