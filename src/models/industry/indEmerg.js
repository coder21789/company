import {
  getListHotIndustry,
  getHotBehave,
  getListDanger,
  getListChances,
} from '../../services/industry/IndEmergHot.js';

export default {
  namespace: 'indEmerg',

  state: {
    loading: false,
    getListHotIndustryData: [],
    getHotBehaveData: {
      weaknessList: [],
      strengthList: [],
    },
    getListDangerData: {
      dangerListZJ: [],
      dangerListZG: [],
    },
    getListChancesData: {
      segmentationArea: [],
      potentialCompany: [],
      popularProduct: [],
    },
  },
  reducers: {
    saveGetListHotIndustry(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          getListHotIndustryData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },

    saveGetHotBehave(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          getHotBehaveData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },

    savegetListDanger(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          getListDangerData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },

    saveGetListChances(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          getListChancesData: payload.value,
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
        getListHotIndustryData: [],
        getHotBehaveData: {
          weaknessList: [],
          strengthList: [],
        },
        getListDangerData: {
          dangerListZJ: [],
          dangerListZG: [],
        },
        getListChancesData: [],
      };
    },
  },

  effects: {
    *fetchGetListHotIndustry({ payload }, { call, put }) {
      const response = yield call(getListHotIndustry, payload);
      yield put({
        type: 'saveGetListHotIndustry',
        payload: response,
      });
    },
    *fetchGetHotBehave({ payload }, { call, put }) {
      const response = yield call(getHotBehave, payload);
      yield put({
        type: 'saveGetHotBehave',
        payload: response,
      });
    },
    *fetchGetListDanger({ payload }, { call, put }) {
      const response = yield call(getListDanger, payload);
      yield put({
        type: 'savegetListDanger',
        payload: response,
      });
    },
    *fetchGetListChances({ payload }, { call, put }) {
      const response = yield call(getListChances, payload);
      yield put({
        type: 'saveGetListChances',
        payload: response,
      });
    },
  },
};
