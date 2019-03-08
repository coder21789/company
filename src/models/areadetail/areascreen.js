import {
  getCoreIndicators,
  getIndustryAna,
  getListTalentAna,
  getListPropertyAna,
  getListRevenueTaxTrend,
  getListCompanyRank,
  getListIndustryEnerEff,
  getListCompanyLevelAna,
} from '../../services/areascreen/index';

export default {
  namespace: 'areascreen',

  state: {
    isloading: false,
    listIndustryDevelopData: [],
    requestParam: {
      areaId:
        location.hash.substr(1).match(new RegExp('areascreen/([0-9]{1,20})', 'i')) &&
        location.hash.substr(1).match(new RegExp('areascreen/([0-9]{1,20})', 'i'))[1] * 1,
    },
    getCoreIndicatorsData: {},
    getIndustryAnaData: [],
    getListIndustryEnerEffData: [], // 行业能耗
    getListCompanyRankData: {
      revenue: [],
      tax: [],
    },
    getListTalentAnaData: [],
    getListPropertyAnaData: [],
    getListRevenueTaxTrendData: {
      revenue: {
        infoEconomy: [],
        highEquipment: [],
        fashion: [],
        travel: [],
        culture: [],
        financial: [],
        health: [],
      },
      tax: {
        infoEconomy: [],
        highEquipment: [],
        fashion: [],
        travel: [],
        culture: [],
        financial: [],
        health: [],
      },
    },
    getListCompanyLevelAnaData: {
      revenue: [],
      tax: [],
    },
  },
  reducers: {
    updateRequestParam(state, { payload }) {
      return {
        ...state,
        requestParam: payload,
      };
    },
    saveGetCoreIndicatorsData(state, { payload }) {
      return {
        ...state,
        getCoreIndicatorsData: payload.value,
      };
    },
    saveGetIndustryAnaData(state, { payload }) {
      return {
        ...state,
        getIndustryAnaData: payload.value,
      };
    },
    updateGetIndustryAnaData(state, { payload }) {
      return {
        ...state,
        getIndustryAnaData: payload,
      };
    },
    saveGetListIndustryEnerEffData(state, { payload }) {
      // 行业能耗
      return {
        ...state,
        getListIndustryEnerEffData: payload.value,
      };
    },
    saveGetListCompanyRankData(state, { payload }) {
      return {
        ...state,
        getListCompanyRankData: payload.value,
      };
    },
    saveGetListTalentAnaData(state, { payload }) {
      return {
        ...state,
        getListTalentAnaData: payload.value,
      };
    },
    saveGetListPropertyAna(state, { payload }) {
      return {
        ...state,
        getListPropertyAnaData: payload.value,
      };
    },
    saveGetListRevenueTaxTrend(state, { payload }) {
      return {
        ...state,
        getListRevenueTaxTrendData: payload.value,
      };
    },
    saveGetListCompanyLevelAna(state, { payload }) {
      return {
        ...state,
        getListCompanyLevelAnaData: payload.value,
      };
    },
    saveGetAreaId(state, { payload }) {
      return {
        ...state,
        requestParam: payload,
      };
    },
  },
  effects: {
    *fetchGetAreaId({ payload }, { put }) {
      yield put({
        type: 'saveGetAreaId',
        payload,
      });
    },
    *fetchGetCoreIndicatorsData({ payload }, { call, put }) {
      const response = yield call(getCoreIndicators, payload);
      yield put({
        type: 'saveGetCoreIndicatorsData',

        payload: response,
      });
    },
    *fetchGetIndustryAnaData({ payload }, { call, put }) {
      const response = yield call(getIndustryAna, payload);
      yield put({
        type: 'saveGetIndustryAnaData',
        payload: response,
      });
    },
    *fetchGetListIndustryEnerEffData({ payload }, { call, put }) {
      const response = yield call(getListIndustryEnerEff, payload);
      yield put({
        type: 'saveGetListIndustryEnerEffData',
        payload: response,
      });
    },
    *fetchGetListCompanyRankData({ payload }, { call, put }) {
      const response = yield call(getListCompanyRank, payload);
      yield put({
        type: 'saveGetListCompanyRankData',
        payload: response,
      });
    },
    *fetchGetListTalentAnaData({ payload }, { call, put }) {
      const response = yield call(getListTalentAna, payload);
      yield put({
        type: 'saveGetListTalentAnaData',
        payload: response,
      });
    },
    *fetchGetListPropertyAna({ payload }, { call, put }) {
      const response = yield call(getListPropertyAna, payload);
      yield put({
        type: 'saveGetListPropertyAna',
        payload: response,
      });
    },
    *fetchGetListRevenueTaxTrend({ payload }, { call, put }) {
      const response = yield call(getListRevenueTaxTrend, payload);
      yield put({
        type: 'saveGetListRevenueTaxTrend',
        payload: response,
      });
    },
    *fetchGetListCompanyLevelAna({ payload }, { call, put }) {
      const response = yield call(getListCompanyLevelAna, payload);
      yield put({
        type: 'saveGetListCompanyLevelAna',
        payload: response,
      });
    },
  },
};
