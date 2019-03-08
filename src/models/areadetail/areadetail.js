import {
  getAreaView,
  getEcoCopAnaRes,
  listEcoAna,
  listCompanyEcoLevelAna,
  getEmpTalentAnaRes,
  getCompanyAnaRes,
  listArea,
} from '../../services/areaDetail/index';

export default {
  namespace: 'areadetail',

  state: {
    loading: false,
    defaultArea: [601, 601001],
    getAreaViewData: {},
    getEcoCopAnaResData: {
      listRevenue: [],
      listTax: [],
      listExpend: [],
    },
    listEcoAnaData: [],
    listCompanyEcoLevelAnaData: {
      cntList: [],
      avgList: [],
    },
    getEmpTalentAnaResData: {
      listEduLevel: [],
      listPayLevel: [],
    },
    getCompanyAnaResData: {
      listRevenue: [],
      listTax: [],
      listPoten: [],
    },
    listAreaData: [],
  },
  reducers: {
    saveGetAreaView(state, { payload }) {
      return {
        ...state,
        getAreaViewData: payload.value,
      };
    },
    saveGetEcoCopAnaRes(state, { payload }) {
      return {
        ...state,
        getEcoCopAnaResData: payload.value,
      };
    },
    saveListEcoAna(state, { payload }) {
      return {
        ...state,
        listEcoAnaData: payload.value,
      };
    },
    saveListCompanyEcoLevelAna(state, { payload }) {
      return {
        ...state,
        listCompanyEcoLevelAnaData: payload.value,
      };
    },
    saveGetEmpTalentAnaRes(state, { payload }) {
      return {
        ...state,
        getEmpTalentAnaResData: payload.value,
      };
    },
    saveGetCompanyAnaRes(state, { payload }) {
      return {
        ...state,
        getCompanyAnaResData: payload.value,
      };
    },
    saveListArea(state, { payload }) {
      return {
        ...state,
        listAreaData: payload.value,
      };
    },
    saveGetAreaId(state, { payload }) {
      return {
        ...state,
        defaultArea: payload,
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
    *fetchGetAreaView({ payload }, { call, put }) {
      const response = yield call(getAreaView, payload);
      yield put({
        type: 'saveGetAreaView',
        payload: response,
      });
    },
    *fetchGetEcoCopAnaRes({ payload }, { call, put }) {
      const response = yield call(getEcoCopAnaRes, payload);
      yield put({
        type: 'saveGetEcoCopAnaRes',
        payload: response,
      });
    },
    *fetchListEcoAna({ payload }, { call, put }) {
      const response = yield call(listEcoAna, payload);
      yield put({
        type: 'saveListEcoAna',
        payload: response,
      });
    },
    *fetchListCompanyEcoLevelAna({ payload }, { call, put }) {
      const response = yield call(listCompanyEcoLevelAna, payload);
      yield put({
        type: 'saveListCompanyEcoLevelAna',
        payload: response,
      });
    },
    *fetchGetEmpTalentAnaRes({ payload }, { call, put }) {
      const response = yield call(getEmpTalentAnaRes, payload);
      yield put({
        type: 'saveGetEmpTalentAnaRes',
        payload: response,
      });
    },
    *fetchGetCompanyAnaRes({ payload }, { call, put }) {
      const response = yield call(getCompanyAnaRes, payload);
      yield put({
        type: 'saveGetCompanyAnaRes',
        payload: response,
      });
    },
    *fetchListArea({ payload }, { call, put }) {
      const response = yield call(listArea, payload);
      yield put({
        type: 'saveListArea',
        payload: response,
      });
    },
  },
};
