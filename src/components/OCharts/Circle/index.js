import React, { Component } from 'react';
import styles from './index.less';

export default class Circle extends Component {
  render() {
    const { circleData } = this.props;
    const recordBg = [
      'radial-gradient(180px circle,#8f4dbf, #f3fbfc)',
      'radial-gradient(180px circle,#1889F2, #F3FBFC)',
      'radial-gradient(180px circle,#FA8F32, #FFFFFF)',
      'radial-gradient(180px circle,#26B3BF, #F3FBFC)',
    ];
    const recordStyle = (rate, i) => {
      return {
        width: `${rate * 120 + 100}px`,
        height: `${rate * 120 + 100}px`,
        background: recordBg[i],
        paddingTop: `${(rate * 120 + 100) / 3}px`,
      };
    };
    return (
      <ul className={styles.record}>
        {circleData.map((item, i) => (
          <li style={recordStyle(item.rate, i)} key={item.id}>
            <p>
              <span className={styles.value}>{Math.round(item.rate * 100)}</span>
              <span>{`% ${item.count}人`}</span>
            </p>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    );
  }
}
