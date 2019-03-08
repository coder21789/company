import React, { Component } from 'react';
import styles from './Right.less';
import { sub } from '../../../utils/utils';
import compLogo from '../svg/compLogo.png';
import Texty from 'rc-texty';
let textStyle = {
  type: 'left',
  // mode: 'smooth'
};
let delay = 0;
function checkLogo(path) {
  if (!path || path === '') {
    return compLogo;
  } else {
    return path;
  }
}
function setFourDom(propsData) {
  if (!propsData || propsData.length === 0) {
    return null;
  }
  let arr = propsData.filter((item, index) => {
    return index < 4;
  });
  let arrDom = arr.map((item, index) => {
    return (
      <div key={index + 'fo'} className={styles.item}>
        <img className={styles.icon} src={checkLogo(item.companyLogoAdress)} alt="" />
        <div className={styles.name}>{sub(item.companyName, 5)}</div>
        <div className={styles.industry}>{sub(item.industryName, 7)}</div>
      </div>
    );
  });
  return arrDom;
}
function setThreeDom(propsData) {
  if (!propsData || propsData.length === 0) {
    return null;
  }
  let arrDom = (
    <div className={styles.sItem}>
      <div className={styles.top3}>
        <div style={{ marginTop: 72 }} className={styles.leftItem}>
          <p className={styles.title}>企业数</p>
          <p className={styles.value}>48</p>
        </div>
        <div>
          <div className={styles.left}>
            <div className={styles.icon} />
            {/*<div className={styles.logo} />*/}
            <img className={styles.logo} src={checkLogo(propsData[1].companyLogoAdress)} alt="" />
            <div className={styles.name}>{sub(propsData[1].companyName, 6)}</div>
            <div className={styles.industry}>{sub(propsData[1].industryName, 8)}</div>
          </div>
          <div className={styles.center}>
            <div className={styles.icon} />
            {/*<div className={styles.logo} />*/}
            <img className={styles.logo} src={checkLogo(propsData[0].companyLogoAdress)} alt="" />
            <div className={styles.name}>{sub(propsData[0].companyName, 6)}</div>
            <div className={styles.industry}>{sub(propsData[0].industryName, 8)}</div>
          </div>
          <div className={styles.right}>
            <div className={styles.icon} />
            {/*<div className={styles.logo} />*/}
            <img className={styles.logo} src={checkLogo(propsData[2].companyLogoAdress)} alt="" />
            <div className={styles.name}>{sub(propsData[2].industryName, 8)}</div>
            <div className={styles.industry}>{sub(propsData[2].industryName, 8)}</div>
          </div>
        </div>
      </div>
    </div>
  );
  return arrDom;
}
function setFiveDom(propsData) {
  if (!propsData) {
    return null;
  }
  let arr = propsData.filter((item, index) => {
    return index < 5;
  });
  let arrDom = arr.map((item, index) => {
    return (
      <li key={Math.random() * 1000000 + 'arrd'}>
        <div className={styles.icon}>
          {index === 0 ? 'NO.1' : ''}
          {index === 1 ? 'NO.2' : ''}
          {index === 2 ? 'NO.3' : ''}
          {index !== 0 && index !== 1 && index !== 2 ? index + 1 : ''}
        </div>
        <img className={styles.subIcon} src={checkLogo(item.companyLogoAdress)} alt="" />
        <span className={styles.name}>
          <Texty {...textStyle}>{sub(item.companyName, 16)}</Texty>
        </span>
        <span className={styles.industry}>
          <Texty {...textStyle}>{sub(item.industryName, 5)}</Texty>
        </span>
      </li>
    );
  });
  return arrDom;
}
function setSevenDom(propsData) {
  if (!propsData || propsData.length === 0) {
    return null;
  }
  let arr = propsData.filter((item, index) => {
    return index < 5;
  });
  let arrDom = arr.map((item, index) => {
    return (
      <div key={index + 'seven'} className={styles.item}>
        <div className={styles.industry}>{sub(item.industryName, 5)}</div>
        <img className={styles.logo} src={checkLogo(item.companyLogoAdress)} alt="" />
        <div className={styles.name}>{sub(item.companyName, 5)}</div>
      </div>
    );
  });
  return arrDom;
}
export default class BottomL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finDom: null,
    };
  }
  shouldComponentUpdate(props, nextState) {
    if (this.props === props) {
      return false;
    } else {
      return true;
    }
  }

  static getDerivedStateFromProps(props) {
    let finDom = null;
    // console.log('componentWillUpdate do')
    if (!props.propsTitle || !props.propsData || props.propsData.length === 0) {
      finDom = null;
      return {
        finDom: null,
      };
    }
    // console.log(this.props.propsTitle, props.propsTitle)
    let propsData = props.propsData[props.propsTitle.enName];
    // console.log(propsData, 'propsDatapropsDatapropsData')
    if (props.propsTitle.name === '上市企业') {
      let dom = setFourDom(propsData);
      if (!propsData || propsData.length === 0) {
        finDom = null;
      } else {
        finDom = (
          <div className={styles.sItem}>
            <div className={styles.typeFour}>
              <div className={styles.leftItem}>
                <p className={styles.title}>
                  <Texty {...textStyle}>{props.propsTitle.name === '上市企业' && '企业数'}</Texty>
                </p>
                <p className={styles.value}>{propsData[0].companyCnt}</p>
              </div>
              {dom}
            </div>
          </div>
        );
      }
    } else if (props.propsTitle.name === '新三板') {
      let dom = setThreeDom(propsData);
      finDom = <div>{dom}</div>;
    } else if (props.propsTitle.name === '纳税大户') {
      let dom = setFiveDom(propsData);
      finDom = (
        <div className={styles.sItem}>
          <ul>{dom}</ul>
        </div>
      );
    } else if (props.propsTitle.name === '人效冠军') {
      let dom = setSevenDom(propsData);
      finDom = (
        <div className={styles.sItem}>
          <div className={styles.seven}>{dom}</div>
        </div>
      );
    } else if (props.propsTitle.name === '独角兽') {
      let dom = setFourDom(propsData);
      if (!propsData || propsData.length === 0) {
        finDom = null;
      }
      finDom = (
        <div className={styles.sItem}>
          <div className={styles.typeFour}>
            <div className={styles.leftItem}>
              <p className={styles.title}>企业数</p>
              <p className={styles.value}>{propsData[0].companyCnt}</p>
            </div>
            {dom}
          </div>
        </div>
      );
    } else if (props.propsTitle.name === '准独角兽') {
      let dom = setFourDom(propsData);
      finDom = (
        <div className={styles.sItem}>
          <div className={styles.typeFour}>
            <div className={styles.leftItem}>
              <p className={styles.title}>企业数</p>
              <p className={styles.value}>{propsData[0].companyCnt}</p>
            </div>
            {dom}
          </div>
        </div>
      );
    }
    return {
      finDom: finDom,
    };
  }
  render() {
    return <div className={styles.bl}>{this.state.finDom}</div>;
  }
}
