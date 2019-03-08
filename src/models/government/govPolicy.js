import {
  addOrUpdatePolicy,
  deletePolicy,
  listPolicy,
  getPolicy,
  listLately,
  getById,
} from '../../services/government/policy';

export default {
  namespace: 'govPolicy',

  state: {
    loading: false,
    id:
      location.hash.substr(1).match(new RegExp('gov/policy/detail/([0-9]{1,20})', 'i')) &&
      location.hash.substr(1).match(new RegExp('gov/policy/detail/([0-9]{1,20})', 'i'))[1],
    addOrUpdatePolicyData: {},
    deletePolicyData: {},
    listPolicyData: {
      list: [],
    },
    getPolicyData: {
      policyName: '',
      accessoryList: [],
      policyDetail: '',
    },
    listLatelyData: [],
    getByIdData: {
      policyName: '',
      policyDetail: '',
      file: [],
    },
  },
  reducers: {
    // 这里的函数都是纯函数
    saveAddOrUpdatePolicy(state, { payload }) {
      return {
        ...state,
        addOrUpdatePolicyData: payload,
      };
    },
    saveDeletePolicy(state, { payload }) {
      return {
        ...state,
        deletePolicyData: payload,
      };
    },
    saveListPolicy(state, { payload }) {
      return {
        ...state,
        listPolicyData: payload.value,
      };
    },
    saveGetPolicy(state, { payload }) {
      return {
        ...state,
        getPolicyData: payload.value,
      };
    },
    saveListLately(state, { payload }) {
      return {
        ...state,
        listLatelyData: payload.value,
      };
    },
    saveGetById(state, { payload }) {
      return {
        ...state,
        getByIdData: payload.value,
      };
    },
  },
  effects: {
    *fetchAddOrUpdatePolicy({ payload }, { call, put }) {
      const response = yield call(addOrUpdatePolicy, payload);
      yield put({
        type: 'saveAddOrUpdatePolicy',
        payload: response,
      });
    },
    *fetchDeletePolicy({ payload }, { call, put }) {
      const response = yield call(deletePolicy, payload);
      yield put({
        type: 'saveDeletePolicy',
        payload: response,
      });
    },
    *fetchListPolicy({ payload }, { call, put }) {
      const response = yield call(listPolicy, payload);
      yield put({
        type: 'saveListPolicy',
        payload: response,
      });
    },
    *fetchGetPolicy({ payload }, { call, put }) {
      const response = yield call(getPolicy, payload);
      yield put({
        type: 'saveGetPolicy',
        payload: response,
      });
    },
    *fetchListLately({ payload }, { call, put }) {
      const response = yield call(listLately, payload);
      yield put({
        type: 'saveListLately',
        payload: response,
      });
    },
    *fetchGetById({ payload }, { call, put }) {
      const response = yield call(getById, payload);
      yield put({
        type: 'saveGetById',
        payload: response,
      });
    },
  },
};
