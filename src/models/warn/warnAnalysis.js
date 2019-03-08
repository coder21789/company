import {
  getRiskmon,
  getRiskday,
  getRiskregion,
  getRiskregionrate,
  getRiskmessage,
} from '../../services/warn/analysis';
import pathStyle from './pathStyle';

export default {
  namespace: 'warnAnalysis',
  state: {
    loading: false,
    pathStyle,
    areaType: '601',
    getRiskmonData: [],
    getRiskdayData: [],
    getRiskregionData: [],
    getRiskregionrateData: [],
    getRiskmessageData: [],
  },
  reducers: {
    saveGetTarget(state, { payload }) {
      return {
        ...state,
        getTargetData: payload.value,
      };
    },
    saveListMap(state, { payload }) {
      // 地图的排名数据
      if (payload.success) {
        const axiosData = payload.value.regionAnaDos;
        const colorMap = [
          'rgba(0,121,254,0.6)',
          'rgba(0,121,254,0.6)',
          'rgba(38,168,254,0.6)',
          'rgba(222,242,255,0.6)',
        ];
        /* eslint no-param-reassign: "error" */
        state.pathStyle.map(value => {
          value.fill = 'transparent';
          const valueId = value.id.split('p')[1];
          axiosData.map((subValue, i) => {
            if (parseInt(valueId, 10) === subValue.areaId) {
              value.fill = colorMap[parseInt(i / 4, 10)];
            }
            return subValue;
          });
          return value;
        });
        return {
          ...state,
          getRiskregionData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetRiskmonData(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          getRiskmonData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetRiskdayData(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          getRiskdayData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetRiskregionData(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          getRiskregionData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetRiskregionrateData(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          getRiskregionrateData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetRiskmessageData(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          getRiskmessageData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
  },
  effects: {
    *fetchGetRiskmonData({ payload }, { call, put }) {
      const response = yield call(getRiskmon, payload);
      yield put({
        type: 'saveGetRiskmonData',
        payload: response,
      });
    },
    *fetchGetRiskdayData({ payload }, { call, put }) {
      const response = yield call(getRiskday, payload);
      yield put({
        type: 'saveGetRiskdayData',
        payload: response,
      });
    },
    *fetchGetRiskregionData({ payload }, { call, put }) {
      const response = yield call(getRiskregion, payload);
      yield put({
        type: 'saveListMap',
        payload: response,
      });
    },
    *fetchGetRiskregionrateData({ payload }, { call, put }) {
      const response = yield call(getRiskregionrate, payload);
      yield put({
        type: 'saveGetRiskregionrateData',
        payload: response,
      });
    },
    *fetchGetRiskmessageData({ payload }, { call, put }) {
      const response = yield call(getRiskmessage, payload);
      yield put({
        type: 'saveGetRiskmessageData',
        payload: response,
      });
    },
  },
};
