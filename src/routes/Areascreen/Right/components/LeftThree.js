import React, { Component } from 'react';
import { connect } from 'dva';
import _ from 'lodash';

import Battery from '../../components/Battery/index.js';
import Title from '../../components/title/index.js';

import benefitIcon from '../../svg/benefit-icon.svg';
import energyIcon from '../../svg/energy-icon.svg';

import styles from './LeftThree.less';

const batteryBottomPath =
  'M0,0 L80,0 L80,16 L0,16 L0,0 Z M0,30 L80,30 L80,46 L0,46 L0,30 Z M0,60 L80,60 L80,76 L0,76 L0,60 Z M0,90 L80,90 L80,106 L0,106 L0,90 Z M0,120 L80,120 L80,136 L0,136 L0,120 Z M0,150 L80,150 L80,166 L0,166 L0,150 Z M0,180 L80,180 L80,196 L0,196 L0,180 Z M0,210 L80,210 L80,226 L0,226 L0,210 Z M0,240 L80,240 L80,256 L0,256 L0,240 Z';
const batteryTopPath =
  'M0,240 L80,240 L80,256 L0,256 L0,240 Z M0,210 L80,210 L80,226 L0,226 L0,210 Z M0,180 L80,180 L80,196 L0,196 L0,180 Z M0,150 L80,150 L80,166 L0,166 L0,150 Z M0,120 L80,120 L80,136 L0,136 L0,120 Z M0,90 L80,90 L80,106 L0,106 L0,90 Z M0,60 L80,60 L80,76 L0,76 L0,60 Z M0,30 L80,30 L80,46 L0,46 L0,30 Z M0,0 L80,0 L80,16 L0,16 L0,0 Z';

@connect(({ areascreen }) => ({
  areascreen,
}))
export default class LeftThreeWrap extends Component {
  state = {};

  componentDidMount() {
    const {
      dispatch,
      areascreen: { requestParam },
    } = this.props;

    dispatch({
      type: 'areascreen/fetchGetListIndustryEnerEffData',
      payload: requestParam,
    });
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log(nextProps, nextState, 'nextState')

  //   return true;
  // }

  render() {
    const {
      areascreen: { getListIndustryEnerEffData },
    } = this.props;

    const { gas } = getListIndustryEnerEffData;

    // 默认选中 gas
    let currentType = _.cloneDeep(gas);

    currentType = [
      {
        statDate: '',
        areaTypeId: '',
        areaTypeName: '',
        areaId: '',
        areaName: '临平街道',
        industryId: 1204,
        industryName: '制造业',
        revenue: 10.0,
        energyClassId: 3,
        energyClassName: '用水',
        energyLevel: '',
        energy: 2747539.0,
      },
      {
        statDate: '',
        areaTypeId: '',
        areaTypeName: '',
        areaId: '',
        areaName: '临平街道',
        industryId: 1209,
        industryName: '房地产业',
        revenue: 20.0,
        energyClassId: 3,
        energyClassName: '用水',
        energyLevel: '',
        energy: 571902.0,
      },
      {
        statDate: '',
        areaTypeId: '',
        areaTypeName: '',
        areaId: '',
        areaName: '临平街道',
        industryId: 1202,
        industryName: '交通运输、仓储和邮政业',
        revenue: 30.0,
        energyClassId: 3,
        energyClassName: '用水',
        energyLevel: '',
        energy: 529984.0,
      },
      {
        statDate: '',
        areaTypeId: '',
        areaTypeName: '',
        areaId: '',
        areaName: '临平街道',
        industryId: 1216,
        industryName: '水利、环境和公共设施管理业',
        revenue: 0.0,
        energyClassId: 3,
        energyClassName: '用水',
        energyLevel: '',
        energy: 186166.0,
      },
      {
        statDate: '',
        areaTypeId: '',
        areaTypeName: '',
        areaId: '',
        areaName: '临平街道',
        industryId: 1205,
        industryName: '租赁和商务服务业',
        revenue: 0.0,
        energyClassId: 3,
        energyClassName: '用水',
        energyLevel: '',
        energy: 120456.0,
      },
    ];

    // 取出能耗和效益的最大值
    const maxRevenue = currentType && Math.max(...currentType.map(value => value.revenue));
    const maxEnergy = currentType && currentType[0];
    /* eslint no-param-reassign: "error" */
    currentType =
      currentType &&
      currentType.map((value, index) => {
        // 收益
        if (value.revenue === maxRevenue) {
          value.topPath = batteryTopPath;
        } else {
          const level = Math.ceil((value.revenue * 9) / maxRevenue);
          if (level !== 9) {
            value.topPath = `${batteryTopPath
              .split('Z')
              .slice(0, level + 1)
              .join('Z')}Z`;
          } else {
            value.topPath = `${batteryTopPath
              .split('Z')
              .slice()
              .join('Z')}`;
          }
        }

        // 能耗
        if (index === 0) {
          value.path = batteryBottomPath;
        } else {
          const level = Math.ceil((value.energy * 9) / maxEnergy.energy);

          if (level !== 9) {
            value.path = `${batteryBottomPath
              .split('Z')
              .slice(0, level + 1)
              .join('Z')}Z`;
          } else {
            value.path = `${batteryBottomPath
              .split('Z')
              .slice()
              .join('Z')}`;
          }
        }

        return value;
      });

    return (
      <div className={styles.leftThreeWrap}>
        <div className={styles.wrap}>
          <Title titleName="行业效益&能耗分析" description="INDUSTRY BENEFITS & ENERGY ANALYSIS" />

          <section className={styles.periodWrap}>
            <div className={styles.periodLeft}>
              <img src={benefitIcon} alt="" />
              <h6>效益</h6>
            </div>
            <div className={styles.periodRight}>
              {currentType
                ? currentType.map(item => {
                    return (
                      <div key={Math.random()} className={styles.batteryWrap}>
                        <div className={styles.batteryTitle}>
                          {item.industryName.length > 5
                            ? `${item.industryName.substr(0, 5)}...`
                            : item.industryName}
                        </div>
                        <div className={styles.batteryWrapChart}>
                          <Battery
                            path={item.topPath}
                            className={styles.batteryWrapChartBg}
                            isReverse
                          />
                        </div>
                      </div>
                    );
                  })
                : ''}
            </div>
          </section>

          <div className={styles.line} />

          <section className={styles.periodWrap}>
            <div className={styles.periodLeft}>
              <h6>能耗</h6>
              <img src={energyIcon} alt="" />
            </div>
            <div className={styles.periodRight}>
              {currentType
                ? currentType.map(item => {
                    return (
                      <div key={Math.random()} className={styles.batteryWrap}>
                        <div className={styles.batteryWrapChart}>
                          <Battery
                            path={item.path}
                            className={styles.batteryWrapChartBg}
                            isReverse={false}
                          />
                        </div>
                      </div>
                    );
                  })
                : ''}
            </div>
          </section>
        </div>
      </div>
    );
  }
}
