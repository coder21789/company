import React, { Component } from 'react';
import { connect } from 'dva';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import Pyramid from '../../components/Pyramid/index.js';

import styles from './IntellectualProperty.less';

@connect(({ compOverscreen }) => ({
  compOverscreen,
}))
export default class IntellectualPropertyWrap extends Component {
  componentDidMount() {
    const {
      dispatch,
      compOverscreen: { requestParam },
    } = this.props;

    if (requestParam.companyId) {
      dispatch({
        type: 'compOverscreen/fetchGetListPatentsData',
        payload: requestParam,
      });

      if (this.swiper) {
        this.swiper.slideTo(0, 0);
        this.swiper.destroy();
        this.swiper = null;
      }

      this.swiper = new Swiper('#IntellectualProperty', {
        autoplay: 3000,
        observer: true,
        observeParents: true,
        pagination: '.swiper-paginations',
        paginationClickable: true,
        paginationBulletRender(swiper, index, className) {
          if (swiper.slides.length > 1) {
            return `<span class="${className}">${index + 1}</span>`;
          } else {
            return `<span style="display:none"></span>`;
          }
        },
      });
    }
  }

  componentWillUnmount() {
    if (this.swiper) {
      // 销毁swiper
      this.swiper.destroy();
    }
  }

  render() {
    const {
      compOverscreen: { getListPatentsData },
    } = this.props;

    const data = [].concat(getListPatentsData).sort((a, b) => a.patentCnt < b.patentCnt);
    let calibration = [4, 3, 2, 1];
    if (data && data[0] && data[0].patentCnt && data[0].patentCnt > 4) {
      const middle = Math.floor(data[0].patentCnt / 4);
      calibration = [data[0].patentCnt, middle * 3, middle * 2, middle * 1];
    }
    const slider =
      getListPatentsData.length > 3 ? getListPatentsData.slice(0, 3) : getListPatentsData;

    let max = 0;
    if (getListPatentsData) {
      max = getListPatentsData.reduce((a, b) => {
        return a > b.patentCnt ? a : b.patentCnt;
      }, 0);
    }

    const colors = [
      {
        x1: '#D9F2FF',
        y1: '#6BCCFF',
        x2: '#89D0F4',
        y2: 'rgba(29,167,238,0.8)',
        circle: '#E6FBFF',
        shade1: '#E6FBFF',
        shade2: '#33BBFF',
      },
      {
        x1: '#EBFFB4',
        y1: '#86CF18',
        x2: '#86CF18',
        y2: '#598D0A',
        circle: '#FCFFF5',
        shade1: '#D9FF70',
        shade2: '#C9FF33',
      },

      {
        x1: '#FEFFD9',
        y1: '#FFE66B',
        x2: '#F5E389',
        y2: 'rgba(237,202,28,0.8)',
        circle: '#FFFDF5',
        shade1: '#FFE770',
        shade2: '#FFDD33',
      },
      {
        x1: '#ECD9FF',
        y1: '#B46BFF',
        x2: '#C389F4',
        y2: 'rgba(137,29,238,0.8)',
        circle: '#FAF5FF',
        shade1: '#B870FF',
        shade2: '#9933FF',
      },
      {
        x1: '#FFECD9',
        y1: '#FFB56B',
        x2: '#F5BF89',
        y2: '#ED851C',
        circle: '#FFF2E6',
        shade1: '#FFB870',
        shade2: '#FF9933',
      },
      {
        x1: '#FFD9D9',
        y1: '#FF6B6B',
        x2: '#F48989',
        y2: 'rgba(238,29,29,0.8)',
        circle: '#FFF5F5',
        shade1: '#FF7070',
        shade2: '#FF3333',
      },
    ];

    return (
      <div className={styles.panel}>
        <h3 className={styles.panel_title}>
          <span className={styles.zh}>知识产权情况</span>
          <span className={styles.en}>Intellectual propert</span>
          <div className={styles.shaft_name}>{getListPatentsData.length > 0 ? '数量(个)' : ''}</div>
        </h3>
        <div id="IntellectualProperty" className={`"swiper-container" ${styles.panel_content}`}>
          <div className="swiper-paginations">&nbsp;</div>
          <div className="swiper-wrapper">
            <div className="swiper-slide" data-id="0">
              {getListPatentsData.length > 0 ? (
                <div className="swiper-bg">
                  <div className={styles.graph}>
                    {slider.map(v => (
                      <div key={v.patentName} className={styles.graphItem}>
                        <div className={styles.itemBar}>
                          <Pyramid
                            rate={v.patentCnt === 0 ? 0 : v.patentCnt / max}
                            id={v.patentId - 1}
                            colors={colors[v.patentId - 1]}
                          />
                        </div>
                        <div className={styles.itemText}>{v.patentName}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className={styles.empty}>
                  <div className={styles.empty_img}>&nbsp;</div>
                  <div className={styles.empty_text}>暂无数据</div>
                </div>
              )}
            </div>
            {getListPatentsData.length > 3 ? (
              <div className="swiper-slide" data-id="1">
                <div className="swiper-bg">
                  <div className={styles.graph}>
                    {getListPatentsData.slice(3).map(v => (
                      <div key={v.patentName} className={styles.graphItem}>
                        <div className={styles.itemBar}>
                          <Pyramid
                            rate={v.patentCnt === 0 ? 0 : v.patentCnt / max}
                            id={v.patentId - 1}
                            colors={colors[v.patentId - 1]}
                          />
                        </div>
                        <div className={styles.itemText}>{v.patentName}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.empty}>
                <div className={styles.empty_img}>&nbsp;</div>
                <span className={styles.empty_text}>暂无数据</span>
              </div>
            )}
          </div>
        </div>
        {getListPatentsData.length > 0 ? (
          <div className={styles.shaft}>
            <ul className={styles.calibration}>
              {calibration.map(v => <li key={v}>{v}</li>)}
              <li className={styles.calibration_0}>0</li>
            </ul>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}
