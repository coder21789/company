import pathStyle from './pathStyle';
import { getTarget, listMap, getArea } from '../../services/overview/index';

export default {
  namespace: 'overOverview',

  state: {
    loading: false,
    pathStyle,
    getTargetData: {},
    listMapData: [],
    getAreaData: {
      industryAnalyzeList: [],
      areaCoreIndex: {
        rank: '',
        ynyIncrease: '',
        content: '',
      },
      trendAnalyzeList: [],
    },
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
        const axiosData = payload.value;
        const colorMap = [
          'rgba(89, 126, 247, 0.8)',
          'rgba(0, 121, 254, 0.8)',
          'rgba(0, 121, 254, 0.8)',
          'rgba(38, 168, 254, 0.8)',
          'rgba(192, 228, 253, 0.8)',
        ];
        state.pathStyle.map(value => {
          const rs = value;
          rs.fill = 'transparent';
          const valueId = +value.id.split('p')[1];
          axiosData.map(subValue => {
            if (valueId === subValue.areaId) {
              rs.fill = colorMap[parseInt((subValue.rank - 1) / 4, 10)];
            }
            return subValue;
          });
          return rs;
        });
        return {
          ...state,
          listMapData: axiosData,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetArea(state, { payload }) {
      // console.log(payload);
      // 保存税收预警数据
      if (payload.success) {
        return {
          ...state,
          getAreaData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
  },
  effects: {
    *fetchGetTarget({ payload }, { call, put }) {
      const response = yield call(getTarget, payload);
      // console.log(response);
      yield put({
        type: 'saveGetTarget',
        payload: response,
      });
    },
    *fetchListMap({ payload }, { call, put }) {
      const response = yield call(listMap, payload);
      yield put({
        type: 'saveListMap',
        payload: response,
      });
    },
    *fetchGetArea({ payload }, { call, put }) {
      const response = yield call(getArea, payload);
      yield put({
        type: 'saveGetArea',
        payload: response,
      });
    },
  },
};
