import React, { Component } from 'react';
import { connect } from 'dva';
import Swiper from 'swiper';
import CompanyAge from '../../components/CompanyAge';
import Talent from '../../components/Talent';
import 'swiper/dist/css/swiper.min.css';
import styles from './Talent.less';

@connect(({ compOverscreen }) => ({
  compOverscreen,
}))
export default class TalentWrap extends Component {
  state = {};

  componentDidMount() {
    const {
      dispatch,
      compOverscreen: { requestParam },
    } = this.props;

    if (requestParam.companyId) {
      dispatch({
        type: 'compOverscreen/fetchGetTalentAnalyzeData',
        payload: requestParam,
      });

      if (this.swiper) {
        this.swiper.slideTo(0, 0);
        this.swiper.destroy();
        this.swiper = null;
      }
      this.swiper = new Swiper(this.swiperId, {
        autoplay: 3000,
        observer: true,
        observeParents: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationBulletRender(swiper, index, className) {
          const text = index === 0 ? '人才需求' : '员工年龄结构';
          return `<span class="${className}">${text}</span>`;
        },
      });
    }
  }

  componentWillUnmount() {
    if (this.swiper) {
      this.swiper.destroy();
    }
  }

  render() {
    const {
      compOverscreen: { getTalentAnalyzeData },
    } = this.props;

    const position = {
      name: [
        { top: '80px', left: '215px', width: '120px', fontSize: '16px' },
        { top: '194px', left: '330px' },
        { top: '180px', left: '130px' },
        { top: '80px', left: '100px' },
        { top: '60px', left: '350px' },
        { top: '20px', left: '190px' },
      ],
      num: [
        { top: '110px', left: '215px', fontSize: '42px', width: '120px' },
        { top: '210px', left: '330px' },
        { top: '200px', left: '130px' },
        { top: '100px', left: '100px' },
        { top: '85px', left: '350px' },
        { top: '40px', left: '190px' },
      ],
      name2: [
        { top: '20px', left: '205px', width: '120px', fontSize: '16px' },
        { top: '85px', left: '345px' },
        { top: '85px', left: '95px' },
        { top: '25px', left: '300px' },
        { top: '30px', left: '140px' },
      ],
      num2: [
        { top: '50px', left: '205px', fontSize: '42px', width: '120px' },
        { top: '105px', left: '345px' },
        { top: '105px', left: '95px' },
        { top: '45px', left: '295px' },
        { top: '50px', left: '140px' },
      ],
    };

    return (
      <div className={styles.panel}>
        <h3 className={styles.panel_title}>
          <span className={styles.zh}>人才情况</span>
          <span className={styles.en}>Talent situation</span>
        </h3>
        <div
          id="Talent"
          className={styles.panel_content}
          ref={c => {
            this.swiperId = c;
          }}
        >
          <div className="swiper-pagination talent-pagination" />
          <div className="swiper-wrapper">
            <div className="swiper-slide" data-id="0">
              {getTalentAnalyzeData.postTop5List && getTalentAnalyzeData.postTop5List.length > 0 ? (
                <div className={styles.postTop5List}>
                  <Talent className={styles.bg1} data={getTalentAnalyzeData.postTop5List} />
                  {getTalentAnalyzeData.postTop5List.map((v, i) => (
                    <div className="item" key={v.postName}>
                      <div className={styles.name} style={position.name[i]}>
                        {v.postName}
                      </div>
                      <div className={styles.num} style={position.num[i]}>
                        {v.postCnt}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.empty}>
                  <div className={styles.empty_img}>&nbsp;</div>
                  <span className={styles.empty_text}>暂无数据</span>
                </div>
              )}
            </div>
            <div className="swiper-slide" data-id="1">
              {getTalentAnalyzeData.ageRangeList && getTalentAnalyzeData.ageRangeList.length > 0 ? (
                <div className={styles.ageRangeList}>
                  <CompanyAge className={styles.bg2} data={getTalentAnalyzeData.ageRangeList} />
                  {getTalentAnalyzeData.ageRangeList &&
                    getTalentAnalyzeData.ageRangeList.map((v, i) => (
                      <div className="item" key={v.ageRangeId}>
                        <div className={styles.name} style={position.name2[i]}>
                          {v.ageRangeName}
                        </div>
                        <div className={styles.num} style={position.num2[i]}>
                          {v.employee}
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className={styles.empty}>
                  <div className={styles.empty_img}>&nbsp;</div>
                  <span className={styles.empty_text}>暂无数据</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
