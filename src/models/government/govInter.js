import {
  addActive,
  listActives,
  listCompany,
  deleteActive,
  queryActiveById,
  listPolicys,
  listCantSend,
  sendSum,
  listOpenCompanys,
  listNotOpenCompanys,
} from '../../services/government/interactive';

export default {
  namespace: 'govInter',

  state: {
    loading: false,
    addActiveData: {},
    listActivesData: {
      list: [],
      total: 0,
    },
    listCompanyData: {
      list: [],
      total: 0,
    },
    deleteActiveData: {},
    queryActiveByIdData: {},
    listPolicysData: [],
    listCantSendData: {
      datas: [],
      total: 0,
    },
    sendSumData: {
      value: 0,
    },
    listOpenCompanysData: {
      datas: [],
      total: 0,
    },
    listNotOpenCompanysData: {
      datas: [],
      total: 0,
    },
  },
  reducers: {
    // 这里的函数都是纯函数
    saveAddActive(state, { payload }) {
      return {
        ...state,
        addActiveData: payload,
      };
    },
    saveListActives(state, { payload }) {
      return {
        ...state,
        listActivesData: payload.value,
      };
    },
    saveListCompany(state, { payload }) {
      return {
        ...state,
        listCompanyData: payload.value,
      };
    },
    saveDeleteActive(state, { payload }) {
      return {
        ...state,
        deleteActiveData: payload,
      };
    },
    saveQueryActiveById(state, { payload }) {
      return {
        ...state,
        queryActiveByIdData: payload.value,
      };
    },
    saveListPolicys(state, { payload }) {
      return {
        ...state,
        listPolicysData: payload.value,
      };
    },
    saveListCantSend(state, { payload }) {
      return {
        ...state,
        listCantSendData: payload.value,
      };
    },
    saveSendSum(state, { payload }) {
      return {
        ...state,
        sendSumData: payload,
      };
    },
    saveListOpenCompanys(state, { payload }) {
      return {
        ...state,
        listOpenCompanysData: payload.value,
      };
    },
    saveListNotOpenCompanys(state, { payload }) {
      return {
        ...state,
        listNotOpenCompanysData: payload.value,
      };
    },
  },
  effects: {
    *fetchAddActive({ payload }, { call, put }) {
      const response = yield call(addActive, payload);
      yield put({
        type: 'saveAddActive',
        payload: response,
      });
    },
    *fetchListActives({ payload }, { call, put }) {
      const response = yield call(listActives, payload);
      yield put({
        type: 'saveListActives',
        payload: response,
      });
    },
    *fetchListCompany({ payload }, { call, put }) {
      const response = yield call(listCompany, payload);
      yield put({
        type: 'saveListCompany',
        payload: response,
      });
    },
    *fetchDeleteActive({ payload }, { call, put }) {
      const response = yield call(deleteActive, payload);
      yield put({
        type: 'saveDeleteActive',
        payload: response,
      });
    },
    *fetchQueryActiveById({ payload }, { call, put }) {
      const response = yield call(queryActiveById, payload);
      yield put({
        type: 'saveQueryActiveById',
        payload: response,
      });
    },
    *fetchListPolicys({ payload }, { call, put }) {
      const response = yield call(listPolicys, payload);
      yield put({
        type: 'saveListPolicys',
        payload: response,
      });
    },
    *fetchListCantSend({ payload }, { call, put }) {
      const response = yield call(listCantSend, payload);
      yield put({
        type: 'saveListCantSend',
        payload: response,
      });
    },
    *fetchSendSum({ payload }, { call, put }) {
      const response = yield call(sendSum, payload);
      yield put({
        type: 'saveSendSum',
        payload: response,
      });
    },
    *fetchListOpenCompanys({ payload }, { call, put }) {
      const response = yield call(listOpenCompanys, payload);
      yield put({
        type: 'saveListOpenCompanys',
        payload: response,
      });
    },
    *fetchListNotOpenCompanys({ payload }, { call, put }) {
      const response = yield call(listNotOpenCompanys, payload);
      yield put({
        type: 'saveListNotOpenCompanys',
        payload: response,
      });
    },
  },
};
