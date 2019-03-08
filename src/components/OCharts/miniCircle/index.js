import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './index.less';

export default class MiniCircle extends Component {
  static defaultProps = {
    title: '--',
    percent: 0,
    num: 0,
    offsetLeft: 0,
    translateX: 0,
  };

  render() {
    const { title, percent, num, bg, className } = this.props;

    const scale = 0.5219298245614035 + (1 - 0.5219298245614035) * percent;

    return (
      <div
        data-scale={scale}
        className={classNames({
          [styles.circle]: true,
          [className]: className,
        })}
        style={{
          // left: `${offsetLeft}px`,
          // transform: `scale(${scale}) translateX(${translateX})`,
          transform: `scale(${scale})`,
          backgroundImage: `url(${bg})`,
        }}
      >
        <main>
          <span className={styles.title}>
            {(percent * 100).toFixed(2)}
            <em>%</em>
          </span>
          <span>{num}人</span>
        </main>
        <h6>{title}</h6>
      </div>
    );
  }
}
