import React, { Component } from 'react';
import { connect } from 'dva';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import styles from './Opinion.less';

@connect(({ compOverscreen }) => ({
  compOverscreen,
}))
export default class OpinionWrap extends Component {
  state = {};

  componentDidMount() {
    const {
      dispatch,
      compOverscreen: { requestParam },
    } = this.props;

    if (requestParam.companyId) {
      dispatch({
        type: 'compOverscreen/fetchGetListNewsData',
        payload: requestParam,
      });

      if (this.swiper) {
        this.swiper.slideTo(0, 0);
        this.swiper.destroy();
        this.swiper = null;
      }
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
      compOverscreen: { getListNewsData },
    } = this.props;

    const data = [];
    if (getListNewsData) {
      getListNewsData.filter((v, i) =>
        data.push({
          statDate: v.statDate,
          lyrical: v.lyrical,
          source: v.source,
          keys: i,
        })
      );
    }

    if (this.swiperId) {
      this.swiper = new Swiper(this.swiperId, {
        loop: true,
        direction: 'vertical',
        autoplay: 3000,
        spaceBetween: 10,
        slidesPerView: 3,
        slidesPerGroup: 1,
        observer: true,
      });
    }

    return (
      <div className={styles.panel}>
        <h3 className={styles.panel_title}>
          <span className={styles.zh}>舆情列表</span>
          <span className={styles.en}>Lyric list</span>
        </h3>

        {getListNewsData.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.empty_img}>&nbsp;</div>
            <span className={styles.empty_text}>暂无数据</span>
          </div>
        ) : (
          <div
            id="Opinion"
            className={styles.panel_content}
            ref={c => {
              this.swiperId = c;
            }}
          >
            <div className="swiper-wrapper">
              {data &&
                data.map((v, i) => (
                  <div className="swiper-slide" data-id={i} key={v.keys}>
                    <div className={styles.panel_content_swiper}>
                      <div className={styles.desc}>{v.lyrical}</div>
                      <div className={styles.source}>来源：{v.source}</div>
                      <div className={styles.statDate}>{v.statDate}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
