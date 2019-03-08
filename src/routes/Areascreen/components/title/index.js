import React, { Component } from 'react';
import styles from './index.less';

export default class title extends Component {
  render() {
    const { activeIcon } = this.props;
    const { titleName, description, rightOption } = this.props;
    const activeStyle = {
      left: activeIcon === true ? 0 : '180px',
    };
    return (
      <div className={styles.title}>
        <div className={styles.titleLeft}>
          <div className={styles.smallTitle}>{titleName}</div>
          <div className={styles.description}>{description}</div>
        </div>
        {rightOption ? (
          <div className={styles.titleRight}>
            <div className={activeIcon === true ? styles.active : ''}>营收</div>
            <div className={activeIcon === false ? styles.active : ''}>税收</div>
            <div className={styles.activeIcon} style={activeStyle} />
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}
