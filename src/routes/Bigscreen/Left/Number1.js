import React, { Component } from 'react';
import styles from './Left.less';
import { chNum2 } from '../../../utils/utils';

export default class Number extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: null,
      unit: '',
    };
  }
  render() {
    let arr = null;
    if (this.props.value || this.props.value === 0) {
      let a = chNum2(this.props.value).val.toString();
      if (a.length < 2) {
        arr = <li key={a + Math.floor(Math.random() * 100000)}>{a}</li>;
      } else {
        arr = a.split('').map(item => {
          if (item !== ',' && item !== '.') {
            return <li key={item + Math.floor(Math.random() * 100000)}>{item}</li>;
          } else {
            return <p key={item + Math.floor(Math.random() * 100000)}>{item}</p>;
          }
        });
      }
    }
    return (
      <div className={styles.number}>
        <ul>{arr}</ul>
      </div>
    );
  }
}
