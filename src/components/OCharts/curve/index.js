import React, { Component } from 'react';
import styles from './index.less';

const ItemBar = props => {
  const { value, color } = props;
  return (
    <svg width={`${96 * value}px`} height={`${280 * value}px`} viewBox="0 0 96 280">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="企业分析-企业详情" transform="translate(-220.000000, -1411.000000)" fill={color}>
          <g id="Group-7" transform="translate(200.000000, 1336.000000)">
            <g id="Group-4" transform="translate(20.000000, 75.000000)">
              <path
                d="M48,0 C48.153867,58.7244504 52.2564311,111.569521 60.3076923,158.535211 C68.3589535,205.500902 80.2563894,245.989165 96,280 L0,280 C14.3457032,249.357299 25.8328827,208.869036 34.4615385,158.535211 C43.0901942,108.201386 47.6030147,55.3563157 48,0 Z"
                id="Triangle-8"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
export default class Curve extends Component {
  componentDidMount() {
    // this.bindReSize();
    // window.addEventListener('resize', this.bindReSize);
  }

  shouldComponentUpdate() {
    // const { legend, data1, data2, xData, yName, xName } = param;

    return true;
  }

  render() {
    const { listComPropRightsData } = this.props;
    const colors = [
      '#FF9F66',
      '#FFCA57',
      '#F8E551',
      '#D1F055',
      '#A8E26D',
      '#86CEA0',
      '#91D4E4',
      '#9FAFF4',
      '#8E88DD',
    ];
    const max = listComPropRightsData.reduce((a, b) => {
      return a > b.patentCnt ? a : b.patentCnt;
    }, 0);
    // console.log(max);
    return (
      <div className={styles.curves}>
        {listComPropRightsData.map((v, i) => (
          <div className={styles.curveItem} key={v.patentId}>
            {v.patentCnt > 0 && max > 0 ? (
              <ItemBar color={colors[i]} value={v.patentCnt / max} />
            ) : null}
            <div className={styles.name}>{v.patentName}</div>
            <div className={styles.value}>{v.patentCnt}</div>
          </div>
        ))}
      </div>
    );
  }
}
