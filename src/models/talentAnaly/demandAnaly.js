import {
  demandTrend,
  demandLabel,
  demandAbility,
  demandLack,
  demandIndustry,
} from '../../services/talentAnaly/index.js';

export default {
  namespace: 'demandAnaly',
  state: {
    loading: false,
    demandTrendData: [],
    demandLabelData: [],
    demandAbilityData: {
      cultureTalent: [],
      salaryTalent: [],
    },
    demandLackData: {
      companyLack: [],
      postLack: [],
    },
    demandIndustryData: {
      name: '余杭区',
      demandCnt: '---',
    },
  },
  reducers: {
    saveDemandTrend(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          demandTrendData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveDemandLabel(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          demandLabelData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveDemandAbility(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          demandAbilityData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveDemandLack(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          demandLackData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveDemandIndustry(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          demandIndustryData: payload.value,
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
        demandTrendData: [],
        demandLabelData: [],
        demandAbilityData: [],
        demandLackData: [],
        demandIndustryData: [],
      };
    },
  },
  effects: {
    *fetchDemandTrend({ payload }, { call, put }) {
      const response = yield call(demandTrend, payload);
      yield put({
        type: 'saveDemandTrend',
        payload: response,
      });
    },
    *fetchDemandLabel({ payload }, { call, put }) {
      const response = yield call(demandLabel, payload);
      yield put({
        type: 'saveDemandLabel',
        payload: response,
      });
    },
    *fetchDemandAbility({ payload }, { call, put }) {
      const response = yield call(demandAbility, payload);
      yield put({
        type: 'saveDemandAbility',
        payload: response,
      });
    },
    *fetchDemandLack({ payload }, { call, put }) {
      const response = yield call(demandLack, payload);
      yield put({
        type: 'saveDemandLack',
        payload: response,
      });
    },
    *fetchDemandIndustry({ payload }, { call, put }) {
      const response = yield call(demandIndustry, payload);
      yield put({
        type: 'saveDemandIndustry',
        payload: response,
      });
    },
  },
};
