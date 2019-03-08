import React from 'react';
import classNames from 'classnames';
import numeral from 'numeral';
import { getFormatMoney } from 'utils/utils';
import styles from './index.less';

const ChartOfCard = ({ data, color, typeText, ...rest }) => {
  return (
    <div {...rest} className={styles.cardWrap} style={{ color }}>
      <div className={styles.cardTop}>
        <div className={styles.cardTopTitle}>
          <i />
          <h4>{data.domainName}</h4>
          <span>同比</span>
        </div>
        <div className={styles.listWrap}>
          <span className={styles.alignLeft}>
            <em>{typeText}</em>
            <strong>
              {data.revenueTax ? getFormatMoney(data.revenueTax).value : 0}
              <i>{getFormatMoney(data.revenueTax).unit}</i>
            </strong>
          </span>
          <span className={styles.alignRight}>
            <div
              className={classNames({
                [styles.percentWrap]: true,
                [styles.down]: data.revenueTaxYny < 0,
                [styles.up]: data.revenueTaxYny > 0,
              })}
            >
              {data.revenueTaxYny ? Math.abs(data.revenueTaxYny * 100).toFixed(2) : 0}%
            </div>
          </span>
        </div>
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.listWrap}>
          <span className={styles.alignLeft}>
            企业{typeText}均值 {data.revenueTaxAvg ? getFormatMoney(data.revenueTaxAvg).value : 0}{' '}
            {getFormatMoney(data.revenueTaxAvg).unit}
          </span>
          <span className={styles.alignRight}>
            <div
              className={classNames({
                [styles.percentWrap]: true,
                [styles.down]: data.revenueTaxAvgYny < 0,
                [styles.up]: data.revenueTaxAvgYny > 0,
              })}
            >
              {data.revenueTaxAvgYny ? Math.abs(data.revenueTaxAvgYny * 100).toFixed(2) : 0}%
            </div>
          </span>
        </div>
        <div className={styles.listWrap}>
          <span className={styles.alignLeft}>
            {typeText}企业数 {data.companyCnt ? numeral(data.companyCnt).format('0, 0') : 0} 家
          </span>
          <span className={styles.alignRight}>
            <div
              className={classNames({
                [styles.percentWrap]: true,
                [styles.down]: data.companyCntYny < 0,
                [styles.up]: data.companyCntYny > 0,
              })}
            >
              {data.companyCntYny ? Math.abs(data.companyCntYny * 100).toFixed(2) : 0}%
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

ChartOfCard.defaultProps = {
  data: {
    domainName: '标题',
  },
};

export default ChartOfCard;
