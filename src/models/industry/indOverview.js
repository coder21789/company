import {
  getListCompanyIncrAnalysis,
  getListEconomicAnalysis,
  getListIndustryAnalysis,
  getListTopIndustryAnalysis,
} from '../../services/industry/industry';

export default {
  namespace: 'indOverview',

  state: {
    loading: false,
    getListCompanyIncrAnalysisData: [],
    getListEconomicAnalysisData: [],
    getListIndustryAnalysisData: [],
    getListTopIndustryAnalysisData: {
      sunIndustry: [],
      capabilityIndustry: [],
      matureIndustry: [],
      tapIndustry: [],
    },
  },
  reducers: {
    saveGetListCompanyIncrAnalysis(state, { payload }) {
      // 企业增长分析
      if (payload.success) {
        return {
          ...state,
          getListCompanyIncrAnalysisData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetListEconomicAnalysis(state, { payload }) {
      // 企业增长分析
      if (payload.success) {
        return {
          ...state,
          getListEconomicAnalysisData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetListIndustryAnalysis(state, { payload }) {
      // 保存行业分析图
      if (payload.success) {
        return {
          ...state,
          getListIndustryAnalysisData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetListTopIndustryAnalysis(state, { payload }) {
      // 保存行业分析 top5
      if (payload.success) {
        return {
          ...state,
          getListTopIndustryAnalysisData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
  },
  effects: {
    *fetchGetListCompanyIncrAnalysis({ payload }, { call, put }) {
      const response = yield call(getListCompanyIncrAnalysis, payload);
      yield put({
        type: 'saveGetListCompanyIncrAnalysis',
        payload: response,
      });
    },
    *fetchGetListEconomicAnalysis({ payload }, { call, put }) {
      const response = yield call(getListEconomicAnalysis, payload);
      yield put({
        type: 'saveGetListEconomicAnalysis',
        payload: response,
      });
    },
    *fetchGetListIndustryAnalysis({ payload }, { call, put }) {
      const response = yield call(getListIndustryAnalysis, payload);
      yield put({
        type: 'saveGetListIndustryAnalysis',
        payload: response,
      });
    },
    *fetchGetListTopIndustryAnalysis({ payload }, { call, put }) {
      const response = yield call(getListTopIndustryAnalysis, payload);
      yield put({
        type: 'saveGetListTopIndustryAnalysis',
        payload: response,
      });
    },
  },
};
