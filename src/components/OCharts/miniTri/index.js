import React, { PureComponent } from 'react';
import classNames from 'classnames';
import styles from './index.less';

export default class MiniTri extends PureComponent {
  static defaultProps = {
    scale: 1,
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
        className={classNames({
          [styles.tri]: true,
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
          <h6>{title}</h6>
          <span className={styles.title}>
            {(percent * 100).toFixed(2)}
            <em>%</em>
            <span>{num}人</span>
          </span>
        </main>
      </div>
    );
  }
}
