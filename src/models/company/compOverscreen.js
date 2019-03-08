import {
  getCompanyInfo,
  getListCmpyAlerts,
  getListFinances,
  getInvestMap,
  getListEcoIndexs,
  getListPatents,
  getTalentAnalyze,
  getListNews,
  getListTrend,
} from '../../services/company/screen';

export default {
  namespace: 'compOverscreen',

  state: {
    isloading: false,
    requestParam: {
      companyId:
        location.hash.substr(1).match(new RegExp('company/screen/([0-9]{1,20})', 'i')) &&
        location.hash.substr(1).match(new RegExp('company/screen/([0-9]{1,20})', 'i'))[1],
    },
    getCompanyInfoData: {},
    getListCmpyAlertsData: [],
    getListFinancesData: [],
    getInvestMapData: [],
    getListEcoIndexsData: [],
    getListPatentsData: [],
    getTalentAnalyzeData: [],
    getListNewsData: [],
    getListTrendData: [],
  },
  reducers: {
    updateRequestParam(state, { payload }) {
      return {
        ...state,
        requestParam: payload,
      };
    },
    saveGetCompanyInfo(state, { payload }) {
      return {
        ...state,
        getCompanyInfoData: payload.value,
      };
    },
    saveGetListCmpyAlerts(state, { payload }) {
      return {
        ...state,
        getListCmpyAlertsData: payload.value,
      };
    },
    saveGetListFinances(state, { payload }) {
      return {
        ...state,
        getListFinancesData: payload.value,
      };
    },
    saveGetInvestMap(state, { payload }) {
      return {
        ...state,
        getInvestMapData: payload.value,
      };
    },
    saveGetListEcoIndexs(state, { payload }) {
      return {
        ...state,
        getListEcoIndexsData: payload.value,
      };
    },
    saveGetListPatents(state, { payload }) {
      return {
        ...state,
        getListPatentsData: payload.value,
      };
    },
    saveGetTalentAnalyze(state, { payload }) {
      return {
        ...state,
        getTalentAnalyzeData: payload.value,
      };
    },
    saveGetListNews(state, { payload }) {
      return {
        ...state,
        getListNewsData: payload.value,
      };
    },
    saveGetListTrend(state, { payload }) {
      return {
        ...state,
        getListTrendData: payload.value,
      };
    },
  },
  effects: {
    *fetchGetCompanyInfoData({ payload }, { call, put }) {
      const response = yield call(getCompanyInfo, payload);
      yield put({
        type: 'saveGetCompanyInfo',
        payload: response,
      });
    },
    *fetchGetListCmpyAlertsData({ payload }, { call, put }) {
      const response = yield call(getListCmpyAlerts, payload);
      yield put({
        type: 'saveGetListCmpyAlerts',
        payload: response,
      });
    },
    *fetchGetListFinancesData({ payload }, { call, put }) {
      const response = yield call(getListFinances, payload);
      yield put({
        type: 'saveGetListFinances',
        payload: response,
      });
    },
    *fetchGetInvestMapData({ payload }, { call, put }) {
      const response = yield call(getInvestMap, payload);
      yield put({
        type: 'saveGetInvestMap',
        payload: response,
      });
    },
    *fetchGetListEcoIndexsData({ payload }, { call, put }) {
      const response = yield call(getListEcoIndexs, payload);
      yield put({
        type: 'saveGetListEcoIndexs',
        payload: response,
      });
    },
    *fetchGetListPatentsData({ payload }, { call, put }) {
      const response = yield call(getListPatents, payload);
      yield put({
        type: 'saveGetListPatents',
        payload: response,
      });
    },
    *fetchGetTalentAnalyzeData({ payload }, { call, put }) {
      const response = yield call(getTalentAnalyze, payload);
      yield put({
        type: 'saveGetTalentAnalyze',
        payload: response,
      });
    },
    *fetchGetListNewsData({ payload }, { call, put }) {
      const response = yield call(getListNews, payload);
      yield put({
        type: 'saveGetListNews',
        payload: response,
      });
    },
    *fetchGetListTrendData({ payload }, { call, put }) {
      const response = yield call(getListTrend, payload);
      yield put({
        type: 'saveGetListTrend',
        payload: response,
      });
    },
  },
};
