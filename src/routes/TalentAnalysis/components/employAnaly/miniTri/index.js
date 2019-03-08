import React, { PureComponent } from 'react';
import styles from './index.less';

export default class MiniTri extends PureComponent {
  static defaultProps = {
    scale: 1,
    title: '--',
    percent: 0,
    num: 0,
  };

  render() {
    const { title, percent, num, bg } = this.props;
    const scale = 0.4 + 0.6 * percent;

    return (
      <div
        className={styles.tri}
        style={{
          transform: `scale(${scale})`,
          backgroundImage: `url(${bg})`,
          backgroundSize: 'contain',
          backgroundPositionY: 'bottom',
          backgroundRepeat: 'no-repeat',
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
