import { routerRedux } from 'dva/router';

import {
  getOverView,
  getListRevenueTax,
  getListAreaAnalyze,
  getListEconomicConstitute,
  getListRevenueTaxRank,
  getListTaxalert,
} from '../../services/economic/index';
import pathStyle from './pathStyle';

export default {
  namespace: 'econOverview',

  state: {
    isAuth: false,
    loading: false,
    pathStyle,
    getOverViewData: {
      // 经济分析核心数据
      ytRevenue: '',
      ytRevenueCompanyCnt: '',
      revenue: '',
      ytRevenueYny: '',
      ytTax: '',
      ytTaxCompanyCnt: '',
      tax: '',
      ytTaxYny: '',
    },
    getListRevenueTaxData: [], // 营收增长关系图
    getListAreaAnalyzeData: [], // 区域,
    getMapListAreaAnalyzeData: [], // 区域的地图对应数据
    getListEconomicConstitute: {
      revenue: [],
      tax: [],
      expend: [],
    },
    getListRevenueTaxRankData: {
      revenueRankRes: {
        revenueTaxRank: [],
        revenueTaxIncrRank: [],
        revenueTaxDecrRank: [],
      },
      taxRankRes: {
        revenueTaxRank: [],
        revenueTaxIncrRank: [],
        revenueTaxDecrRank: [],
      },
    },
    getListTaxalertData: {
      // 税收预警数据
      oweTaxAmount: [],
      oweTaxTime: [],
      oweTaxNum: [],
    },
  },
  // 这里的函数都是纯函数
  reducers: {
    saveGetOverView(state, { payload }) {
      // 保存核心指标数据
      if (payload.success) {
        return {
          ...state,
          getOverViewData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetListRevenueTax(state, { payload }) {
      // 保存增长关系图数据
      if (payload.success) {
        return {
          ...state,
          getListRevenueTaxData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetListAreaAnalyze(state, { payload }) {
      // 保存营税收数据
      if (payload.success) {
        const axiosData = payload.value;
        const colorMap = [
          'rgba(89, 126, 247, 0.8)',
          'rgba(0, 121, 254, 0.8)',
          'rgba(0, 121, 254, 0.8)',
          'rgba(38, 168, 254, 0.8)',
          'rgba(222, 242, 255, 0.8)',
        ];
        const streetKnowArr = [
          {
            id: 601001,
            streetName: '临平街道',
          },
          {
            id: 601002,
            streetName: '东湖街道',
          },
          {
            id: 601003,
            streetName: '南苑街道',
          },
          {
            id: 601004,
            streetName: '星桥街道',
          },
          {
            id: 601005,
            streetName: '五常街道',
          },
          {
            id: 601006,
            streetName: '乔司街道',
          },
          {
            id: 601007,
            streetName: '运河街道',
          },
          {
            id: 601008,
            streetName: '崇贤街道',
          },
          {
            id: 601009,
            streetName: '仁和街道',
          },
          {
            id: 601010,
            streetName: '良渚街道',
          },
          {
            id: 601011,
            streetName: '闲林街道',
          },
          {
            id: 601012,
            streetName: '余杭街道',
          },
          {
            id: 601013,
            streetName: '仓前街道',
          },
          {
            id: 601014,
            streetName: '中泰街道',
          },
          {
            id: 601015,
            streetName: '瓶窑镇',
          },
          {
            id: 601016,
            streetName: '塘栖镇',
          },
          {
            id: 601017,
            streetName: '径山镇',
          },
          {
            id: 601018,
            streetName: '黄湖镇',
          },
          {
            id: 601019,
            streetName: '百丈镇',
          },
          {
            id: 601020,
            streetName: '鸬鸟镇',
          },
        ];
        /* eslint no-param-reassign: "error" */
        state.pathStyle.map(value => {
          value.fill = 'transparent';
          const valueId = +value.id.split('p')[1];
          // 请求数据
          axiosData.map(subValue => {
            if (valueId === subValue.areaId) {
              value.fill = colorMap[parseInt((subValue.rank - 1) / 4, 10)];
            }
            return subValue;
          });
          return value;
        });

        streetKnowArr.map(value => {
          const modifyValue = axiosData.filter(subValue => {
            return subValue.areaId === value.id;
          });
          if (modifyValue.length === 1) {
            return Object.assign(value, modifyValue[0]);
          } else {
            return Object.assign(value, {
              areaId: value.id,
              rank: '',
              revenueTax: '',
              revenueTaxYny: '',
              revenueTaxAvg: '',
              revenueTaxAvgYny: '',
            });
          }
        });

        return {
          ...state,
          getListAreaAnalyzeData: axiosData,
          getMapListAreaAnalyzeData: streetKnowArr,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetListEconomicConstitute(state, { payload }) {
      // 保存经济分析构成数据
      if (payload.success) {
        return {
          ...state,
          getListEconomicConstitute: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetListRevenueTaxRank(state, { payload }) {
      // 保存营税收 Top数据
      if (payload.success) {
        return {
          ...state,
          getListRevenueTaxRankData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetListTaxalert(state, { payload }) {
      // 保存税收预警数据
      if (payload.success) {
        return {
          ...state,
          getListTaxalertData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    clear() {
      return {
        loading: false,
        getOverViewData: {
          // 经济分析核心数据
          ytRevenue: '',
          ytRevenueCompanyCnt: '',
          revenue: '',
          ytRevenueYny: '',
          ytTax: '',
          ytTaxCompanyCnt: '',
          tax: '',
          ytTaxYny: '',
        },
        getListRevenueTaxData: [], // 营收增长关系图
        getListEconomicConstitute: {
          // 经济分析构成图
          revenue: [],
          tax: [],
          expend: [],
        },
        getListRevenueTaxRankData: {
          // 营税收 Top
          revenueTaxRank: [],
          revenueTaxIncrRank: [],
          revenueTaxDecrRank: [],
        },
        getListTaxalertData: {
          // 税收预警数据
          oweTaxAmount: [],
          oweTaxTime: [],
          oweTaxNum: [],
        },
      };
    },
  },
  effects: {
    *fetchGetOverView({ payload }, { call, put }) {
      const response = yield call(getOverView, payload);

      if (response.codeNum === 2015) {
        yield put(routerRedux.replace('/exception/403'));
        return;
      }

      yield put({
        type: 'saveGetOverView',
        payload: response,
      });
    },
    *fetchGetListRevenueTax({ payload }, { call, put }) {
      const response = yield call(getListRevenueTax, payload);

      if (response.codeNum === 2015) {
        yield put(routerRedux.replace('/exception/403'));
        return;
      }

      yield put({
        type: 'saveGetListRevenueTax',
        payload: response,
      });
    },
    *fetchGetListAreaAnalyze({ payload }, { call, put }) {
      const response = yield call(getListAreaAnalyze, payload);

      if (response.codeNum === 2015) {
        yield put(routerRedux.replace('/exception/403'));
        return;
      }

      yield put({
        type: 'saveGetListAreaAnalyze',
        payload: response,
      });
    },
    *fetchGetListRevenueTaxRankData({ payload }, { call, put }) {
      const response = yield call(getListEconomicConstitute, payload);
      yield put({
        type: 'saveGetListEconomicConstitute',
        payload: response,
      });
    },
    *fetchGetListRevenueTaxRank({ payload }, { call, put }) {
      const response = yield call(getListRevenueTaxRank, payload);
      yield put({
        type: 'saveGetListRevenueTaxRank',
        payload: response,
      });
    },
    *fetchGetListTaxalert({ payload }, { call, put }) {
      const response = yield call(getListTaxalert, payload);
      yield put({
        type: 'saveGetListTaxalert',
        payload: response,
      });
    },
  },
};
