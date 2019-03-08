import { message } from 'antd';

import {
  getListquarter,
  getEntirety,
  getAreadevelop,
  getSpecial,
  getDigitaleconomy,
  getInnovation,
  getParentinvention,
  getRising,
  getRisingrank,
  getcodejsp,
  getContentList,
  getRisingupload,
} from '../../services/economic/econAPicKnow';
import pathStyle from './apicPathStyle';

export default {
  namespace: 'econapicknow',

  state: {
    pathStyle,
    getListquarterData: [],
    getEntiretyData: {
      entirety: {
        companyRevenue: 0,
        companyTaxRevenue: 0,
        revenueIncrease: 0,
        ringRatio: 0,
        taxRevenueIncrease: 0,
        taxRingRatio: 0,
      },
      industrialList: [
        { domainId: 1, domainName: '第一产业', domainValue: '', ringRatio: 0, revenueValue: 0 },
        { domainId: 2, domainName: '第二产业', domainValue: '', ringRatio: 0, revenueValue: 0 },
        { domainId: 3, domainName: '第三产业', domainValue: '', ringRatio: 0, revenueValue: 0 },
      ],
    },
    getAreadevelopData: {
      areaContent: '',
      areaList: [],
    },
    getSpecialData: [],
    getDigitaleconomyData: {
      digitalContent: '',
      digitalEconomy: 0,
      digitalEconomyQuarter: 0,
      digitalEconomyQuarterLy: 0,
      digitalEconomyQuarterPercent: 0,
      digitalEconomyTotalRatio: 0,
    },
    getInnovationData: [],
    getParentinventionData: {
      inventionAuthNum: 0,
      inventionAuthRatio: 0,
      inventionAuthRingRatio: 0,
      inventionNum: 0,
      inventionRatio: 0,
      inventionRingRatio: 0,
    },
    getRisingData: [],
    getRisingrankData: {
      content: '',
      risingRank: [],
    },
    qrCodeImg: '',
    getContentListData: '[]',
  },

  reducers: {
    saveGetContentList(state, { payload }) {
      // 获取内容数据
      if (payload.success) {
        return {
          ...state,
          getContentListData: payload.value ? payload.value : '[]',
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetListquarter(state, { payload }) {
      // 保存季度列表数据
      if (payload.success) {
        return {
          ...state,
          getListquarterData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetEntirety(state, { payload }) {
      // 第一块
      if (payload.success) {
        return {
          ...state,
          getEntiretyData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetAreadevelop(state, { payload }) {
      // 第二块
      if (payload.success) {
        const axiosData = payload.value.areaList;
        const colorMap = [
          'rgba(89, 126, 247, 0.8)',
          'rgba(0, 121, 254, 0.8)',
          'rgba(0, 121, 254, 0.8)',
          'rgba(38, 168, 254, 0.8)',
          'rgba(222, 242, 255, 0.8)',
        ];

        /* eslint no-param-reassign: "error" */
        state.pathStyle.map(value => {
          value.fill = 'transparent';
          const valueId = +value.id.split('p')[1];
          // 请求数据
          axiosData.map(subValue => {
            if (valueId === subValue.areaId) {
              value.rank = subValue.areaRingRatioRank;
              value.fill = colorMap[parseInt((subValue.areaRingRatioRank - 1) / 4, 10)];
            }
            return subValue;
          });
          return value;
        });
        return {
          ...state,
          getAreadevelopData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetSpecial(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          getSpecialData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetDigitaleconomy(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          getDigitaleconomyData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetInvention(state, { payload }) {
      // 第三块
      if (payload.success) {
        return {
          ...state,
          getInnovationData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetParentinvention(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          getParentinventionData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetRising(state, { payload }) {
      // 第四块
      if (payload.success) {
        return {
          ...state,
          getRisingData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetRisingrank(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          getRisingrankData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetcodejsp(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          qrCodeImg: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
  },

  effects: {
    *fetchGetContentList({ payload }, { call, put }) {
      const response = yield call(getContentList, payload);
      yield put({
        type: 'saveGetContentList',
        payload: response,
      });
    },
    *fetchGetListquarter({ payload }, { call, put }) {
      const response = yield call(getListquarter, payload);
      yield put({
        type: 'saveGetListquarter',
        payload: response,
      });
    },
    *fetchGetEntirety({ payload }, { call, put }) {
      const response = yield call(getEntirety, payload);
      yield put({
        type: 'saveGetEntirety',
        payload: response,
      });
    },
    *fetchGetAreadevelop({ payload }, { call, put }) {
      const response = yield call(getAreadevelop, payload);
      yield put({
        type: 'saveGetAreadevelop',
        payload: response,
      });
    },
    *fetchGetSpecial({ payload }, { call, put }) {
      const response = yield call(getSpecial, payload);
      yield put({
        type: 'saveGetSpecial',
        payload: response,
      });
    },
    *fetchGetDigitaleconomy({ payload }, { call, put }) {
      const response = yield call(getDigitaleconomy, payload);
      yield put({
        type: 'saveGetDigitaleconomy',
        payload: response,
      });
    },
    *fetchGetInnovation({ payload }, { call, put }) {
      const response = yield call(getInnovation, payload);
      yield put({
        type: 'saveGetInvention',
        payload: response,
      });
    },
    *fetchGetParentinvention({ payload }, { call, put }) {
      const response = yield call(getParentinvention, payload);
      yield put({
        type: 'saveGetParentinvention',
        payload: response,
      });
    },
    *fetchGetRising({ payload }, { call, put }) {
      const response = yield call(getRising, payload);
      yield put({
        type: 'saveGetRising',
        payload: response,
      });
    },
    *fetchGetRisingrank({ payload }, { call, put }) {
      const response = yield call(getRisingrank, payload);
      yield put({
        type: 'saveGetRisingrank',
        payload: response,
      });
    },
    *fetchGetcodejsp({ payload }, { call, put }) {
      const response = yield call(getcodejsp, payload);
      yield put({
        type: 'saveGetcodejsp',
        payload: response,
      });
    },
    *fetchGetRisingupload({ payload }, { call }) {
      const response = yield call(getRisingupload, payload);
      message.success(response.value);
    },
  },
};
