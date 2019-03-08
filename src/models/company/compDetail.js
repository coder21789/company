import {
  getCompanyBaseInfo,
  listCompanyMapData,
  listCompanyAlert,
  listCompanyEcoTrend,
  listComPropRights,
  companySelect,
} from '../../services/company/compDetail';

export default {
  namespace: 'compDetail',

  state: {
    loading: false,
    companySelectData: [],
    getCompanyBaseInfoData: {
      companyName: '',
    },
    listCompanyMapData: {},
    listCompanyAlertData: {
      total: 0,
      list: [],
    },
    listCompanyEcoTrendData: [],
    listComPropRightsData: [],
  },
  reducers: {
    // 这里的函数都是纯函数
    saveGetCompanyBaseInfo(state, { payload }) {
      return {
        ...state,
        getCompanyBaseInfoData: payload.value,
      };
    },
    saveListCompanyMap(state, { payload }) {
      return {
        ...state,
        listCompanyMapData: payload.value,
      };
    },
    saveListCompanyAlert(state, { payload }) {
      return {
        ...state,
        listCompanyAlertData: payload.value,
      };
    },
    saveListCompanyEcoTrend(state, { payload }) {
      return {
        ...state,
        listCompanyEcoTrendData: payload.value,
      };
    },
    saveListComPropRights(state, { payload }) {
      return {
        ...state,
        listComPropRightsData: payload.value,
      };
    },
    saveCompanySelect(state, { payload }) {
      return {
        ...state,
        companySelectData: payload.value,
      };
    },
  },
  effects: {
    *fetchGetCompanyBaseInfo({ payload }, { call, put }) {
      const response = yield call(getCompanyBaseInfo, payload);
      yield put({
        type: 'saveGetCompanyBaseInfo',
        payload: response,
      });
    },
    *fetchListCompanyMap({ payload }, { call, put }) {
      const response = yield call(listCompanyMapData, payload);
      yield put({
        type: 'saveListCompanyMap',
        payload: response,
      });
    },
    *fetchListCompanyAlert({ payload }, { call, put }) {
      const response = yield call(listCompanyAlert, payload);
      yield put({
        type: 'saveListCompanyAlert',
        payload: response,
      });
    },
    *fetchListCompanyEcoTrend({ payload }, { call, put }) {
      const response = yield call(listCompanyEcoTrend, payload);
      yield put({
        type: 'saveListCompanyEcoTrend',
        payload: response,
      });
    },
    *fetchListComPropRights({ payload }, { call, put }) {
      const response = yield call(listComPropRights, payload);
      yield put({
        type: 'saveListComPropRights',
        payload: response,
      });
    },
    *fetchCompanySelect({ payload }, { call, put }) {
      const response = yield call(companySelect, payload);
      yield put({
        type: 'saveCompanySelect',
        payload: response,
      });
    },
  },
};
