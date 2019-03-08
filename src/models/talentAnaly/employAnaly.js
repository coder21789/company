import {
  talnetCore,
  talnetTrend,
  talnetageSource,
  talnetAbility,
} from '../../services/talentAnaly/index.js';

export default {
  namespace: 'employAnaly',
  state: {
    loading: false,
    talnetCoreData: [],
    talnetTrendData: [],
    talnetageSourceData: {
      ageAnaDo: [],
      sourceAnaDo: [],
    },
    talnetAbilityData: {
      seniorAna: [],
      cultureTalent: [],
      salaryTalent: [],
    },
  },
  reducers: {
    saveTalnetCore(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          talnetCoreData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveTalnetTrend(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          talnetTrendData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveTalnetageSource(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          talnetageSourceData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveTalnetAbility(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          talnetAbilityData: payload.value,
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
        talnetCoreData: [],
        talnetTrendData: [],
        talnetageSourceData: [],
        talnetAbilityData: [],
      };
    },
  },
  effects: {
    *fetchTalnetCore({ payload }, { call, put }) {
      const response = yield call(talnetCore, payload);
      yield put({
        type: 'saveTalnetCore',
        payload: response,
      });
    },
    *fetchTalnetTrend({ payload }, { call, put }) {
      const response = yield call(talnetTrend, payload);
      yield put({
        type: 'saveTalnetTrend',
        payload: response,
      });
    },
    *fetchTalnetageSource({ payload }, { call, put }) {
      const response = yield call(talnetageSource, payload);
      yield put({
        type: 'saveTalnetageSource',
        payload: response,
      });
    },
    *fetchTalnetAbility({ payload }, { call, put }) {
      const response = yield call(talnetAbility, payload);
      yield put({
        type: 'saveTalnetAbility',
        payload: response,
      });
    },
  },
};
