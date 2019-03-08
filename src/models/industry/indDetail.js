import {
  getListIndustry,
  getCoreIndex,
  getListAreaAnalyze,
  getListEconomicAnalyze,
  getListTalentAnalyze,
  getListTop,
} from '../../services/industry/indDetail';
import pathStyle from './pathStyle';

export default {
  namespace: 'indDetail',

  state: {
    getListIndustryData: [],
    getCoreIndexData: {},
    pathStyle,
    getListAreaAnalyzeData: [],
    getMapListAreaAnalyzeData: [],
    getListEconomicAnalyzeData: [],
    getListTalentAnalyzeData: {
      eduLevelList: [],
      payLevelList: [],
    },
    getListTopData: {},
  },
  reducers: {
    saveGetListIndustry(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          getListIndustryData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetCoreIndex(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          getCoreIndexData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetListAreaAnalyze(state, { payload }) {
      if (payload.success) {
        const axiosData = payload.value;
        const colorMap = [
          'rgba(89, 126, 247, 0.8)',
          'rgba(0, 121, 254, 0.8)',
          'rgba(0, 121, 254, 0.8)',
          'rgba(38, 168, 254, 0.8)',
          'rgba(222, 242, 255, 0.8)',
        ];
        const streetKnowArr = [
          {
            id: 601001,
            streetName: '临平街道',
          },
          {
            id: 601002,
            streetName: '东湖街道',
          },
          {
            id: 601003,
            streetName: '南苑街道',
          },
          {
            id: 601004,
            streetName: '星桥街道',
          },
          {
            id: 601005,
            streetName: '五常街道',
          },
          {
            id: 601006,
            streetName: '乔司街道',
          },
          {
            id: 601007,
            streetName: '运河街道',
          },
          {
            id: 601008,
            streetName: '崇贤街道',
          },
          {
            id: 601009,
            streetName: '仁和街道',
          },
          {
            id: 601010,
            streetName: '良渚街道',
          },
          {
            id: 601011,
            streetName: '闲林街道',
          },
          {
            id: 601012,
            streetName: '余杭街道',
          },
          {
            id: 601013,
            streetName: '仓前街道',
          },
          {
            id: 601014,
            streetName: '中泰街道',
          },
          {
            id: 601015,
            streetName: '瓶窑镇',
          },
          {
            id: 601016,
            streetName: '塘栖镇',
          },
          {
            id: 601017,
            streetName: '径山镇',
          },
          {
            id: 601018,
            streetName: '黄湖镇',
          },
          {
            id: 601019,
            streetName: '百丈镇',
          },
          {
            id: 601020,
            streetName: '鸬鸟镇',
          },
        ];
        /* eslint no-param-reassign: "error" */
        state.pathStyle.map(value => {
          value.fill = 'transparent';
          const valueId = +value.id.split('p')[1];
          // 请求数据
          axiosData.map(subValue => {
            if (valueId === subValue.areaId) {
              value.fill = colorMap[parseInt((subValue.rank - 1) / 4, 10)];
            }
            return subValue;
          });
          return value;
        });

        streetKnowArr.map(value => {
          const modifyValue = axiosData.filter(subValue => {
            return subValue.areaId === value.id;
          });
          if (modifyValue.length === 1) {
            return Object.assign(value, modifyValue[0]);
          } else {
            return Object.assign(value, {
              areaId: value.id,
              rank: '',
              companyCnt: '',
              ynyIncrease: '',
              industryConcentrationRatio: '',
              propertyCnt: '',
            });
          }
        });

        return {
          ...state,
          getListAreaAnalyzeData: axiosData,
          getMapListAreaAnalyzeData: streetKnowArr,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetListEconomicAnalyze(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          getListEconomicAnalyzeData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetListTalentAnalyze(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          getListTalentAnalyzeData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetListTop(state, { payload }) {
      if (payload.success) {
        return {
          ...state,
          getListTopData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
  },
  effects: {
    *fetchGetListIndustry({ payload }, { call, put }) {
      const response = yield call(getListIndustry, payload);
      yield put({
        type: 'saveGetListIndustry',
        payload: response,
      });
    },
    *fetchGetCoreIndex({ payload }, { call, put }) {
      const response = yield call(getCoreIndex, payload);
      yield put({
        type: 'saveGetCoreIndex',
        payload: response,
      });
    },
    *fetchGetListAreaAnalyze({ payload }, { call, put }) {
      const response = yield call(getListAreaAnalyze, payload);
      yield put({
        type: 'saveGetListAreaAnalyze',
        payload: response,
      });
    },
    *fetchGetListEconomicAnalyze({ payload }, { call, put }) {
      const response = yield call(getListEconomicAnalyze, payload);
      yield put({
        type: 'saveGetListEconomicAnalyze',
        payload: response,
      });
    },
    *fetchGetListTalentAnalyze({ payload }, { call, put }) {
      const response = yield call(getListTalentAnalyze, payload);
      yield put({
        type: 'saveGetListTalentAnalyze',
        payload: response,
      });
    },
    *fetchGetListTop({ payload }, { call, put }) {
      const response = yield call(getListTop, payload);
      yield put({
        type: 'saveGetListTop',
        payload: response,
      });
    },
  },
};
