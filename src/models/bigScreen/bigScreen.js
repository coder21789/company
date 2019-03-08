import {
  getCoreIndicators,
  getTaxTrend,
  getIntellProData,
  getSevenIndustry,
  getListTalentAna,
  getListCompanyAna,
  getListTalentDemand,
  getMap,
} from '../../services/bigScreen/index';

export default {
  namespace: 'bigScreen',
  state: {
    leftData: [],
    taxTrend: [],
    intellProData: [],
    sevenIndustry: [],
    listTalentAna: [],
    listCompanyAna: [],
    listTalentDemand: [],
    screenTimer: false,
    mapData: [],
  },
  reducers: {
    // 这里的函数都是纯函数
    saveLeftData(state, { payload }) {
      return {
        ...state,
        leftData: payload.value,
      };
    },
    saveTaxTrend(state, { payload }) {
      return {
        ...state,
        taxTrend: payload.value,
      };
    },
    saveIntellProData(state, { payload }) {
      return {
        ...state,
        intellProData: payload.value,
      };
    },
    saveSevenIndustry(state, { payload }) {
      return {
        ...state,
        sevenIndustry: payload.value,
      };
    },
    saveListTalentAna(state, { payload }) {
      return {
        ...state,
        listTalentAna: payload.value,
      };
    },
    saveListCompanyAna(state, { payload }) {
      return {
        ...state,
        listCompanyAna: payload.value,
      };
    },
    saveListTalentDemand(state, { payload }) {
      return {
        ...state,
        listTalentDemand: payload.value,
      };
    },
    saveMap(state, { payload }) {
      return {
        ...state,
        mapData: payload.value,
      };
    },
  },
  effects: {
    *fetchGetCoreIndicators({ payload }, { call, put }) {
      const response = yield call(getCoreIndicators, payload);
      yield put({
        type: 'saveLeftData',
        payload: response,
      });
    },
    *fetchTaxTrend({ payload }, { call, put }) {
      const response = yield call(getTaxTrend, payload);
      yield put({
        type: 'saveTaxTrend',
        payload: response,
      });
    },
    *fetchIntellProData({ payload }, { call, put }) {
      const response = yield call(getIntellProData, payload);
      yield put({
        type: 'saveIntellProData',
        payload: response,
      });
    },
    *fetchSevenIndustry({ payload }, { call, put }) {
      const response = yield call(getSevenIndustry, payload);
      yield put({
        type: 'saveSevenIndustry',
        payload: response,
      });
    },
    *fetchListTalentAna({ payload }, { call, put }) {
      const response = yield call(getListTalentAna, payload);
      yield put({
        type: 'saveListTalentAna',
        payload: response,
      });
    },
    *fetchListCompanyAna({ payload }, { call, put }) {
      const response = yield call(getListCompanyAna, payload);
      yield put({
        type: 'saveListCompanyAna',
        payload: response,
      });
    },
    *fetchListTalentDemand({ payload }, { call, put }) {
      const response = yield call(getListTalentDemand, payload);
      yield put({
        type: 'saveListTalentDemand',
        payload: response,
      });
    },
    *fetchMapList({ payload }, { call, put }) {
      const response = yield call(getMap, payload);
      yield put({
        type: 'saveMap',
        payload: response,
      });
    },
  },
};
