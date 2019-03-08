import {
  listTrend,
  getConstitute,
  listTalentsCount,
  areaAnalyze,
  educationAnalyze,
  companyRank,
} from '../../services/company/overview';

export default {
  namespace: 'compOverview',

  state: {
    loading: false,
    listTrendData: {}, // 企业变化趋势
    getConstituteData: {
      ageLimitList: [],
      registConstList: [],
      levelConstList: [],
    },
    listTalentsCountData: [],
    areaAnalyzeData: [],
    educationAnalyzeData: [],
    companyRankData: {
      revenueRank: [],
      patentRank: [],
    },
  },
  reducers: {
    // 这里的函数都是纯函数
    saveListTrend(state, { payload }) {
      return {
        ...state,
        listTrendData: payload.value,
      };
    },
    saveGetConstitute(state, { payload }) {
      return {
        ...state,
        getConstituteData: payload.value,
      };
    },
    saveListTalentsCount(state, { payload }) {
      return {
        ...state,
        listTalentsCountData: payload.value,
      };
    },
    saveAreaAnalyze(state, { payload }) {
      return {
        ...state,
        areaAnalyzeData: payload.value,
      };
    },
    saveEducationAnalyze(state, { payload }) {
      return {
        ...state,
        educationAnalyzeData: payload.value,
      };
    },
    saveCompanyRank(state, { payload }) {
      return {
        ...state,
        companyRankData: payload.value,
      };
    },
  },
  effects: {
    *fetchListTrend({ payload }, { call, put }) {
      const response = yield call(listTrend, payload);
      yield put({
        type: 'saveListTrend',
        payload: response,
      });
    },
    *fetchGetConstitute({ payload }, { call, put }) {
      const response = yield call(getConstitute, payload);
      yield put({
        type: 'saveGetConstitute',
        payload: response,
      });
    },
    *fetchListTalentsCount({ payload }, { call, put }) {
      const response = yield call(listTalentsCount, payload);
      yield put({
        type: 'saveListTalentsCount',
        payload: response,
      });
    },
    *fetchAreaAnalyze({ payload }, { call, put }) {
      const response = yield call(areaAnalyze, payload);
      yield put({
        type: 'saveAreaAnalyze',
        payload: response,
      });
    },
    *fetchEducationAnalyze({ payload }, { call, put }) {
      const response = yield call(educationAnalyze, payload);
      yield put({
        type: 'saveEducationAnalyze',
        payload: response,
      });
    },
    *fetchCompanyRank({ payload }, { call, put }) {
      const response = yield call(companyRank, payload);
      // console.log('payload', response);
      yield put({
        type: 'saveCompanyRank',
        payload: response,
      });
    },
  },
};
