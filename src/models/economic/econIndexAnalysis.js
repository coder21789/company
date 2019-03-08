import {
  getListCoreIndicators,
  getListAbilityDetails,
} from '../../services/economic/econIndexAnalysis';

export default {
  namespace: 'econIndexAnalysis',

  state: {
    getListCoreIndicatorsData: {
      allCompany: [{}],
      scaleCompany: [{}],
    },
    getListAbilityDetailsData: {
      contriAbility: {
        compDistRes: {
          allCompany: [],
          scaleCompany: [],
        },
        ecoIndexDetailTopRes: {
          allCompany: {
            ability: [],
            decrease: [],
            increase: [],
          },
          scaleCompany: {
            ability: [],
            decrease: [],
            increase: [],
          },
        },
      },
      developLevel: {
        compDistRes: {
          allCompany: [],
          scaleCompany: [],
        },
        ecoIndexDetailTopRes: {
          allCompany: {
            ability: [],
            decrease: [],
            increase: [],
          },
          scaleCompany: {
            ability: [],
            decrease: [],
            increase: [],
          },
        },
      },
      efficiLevel: {
        compDistRes: {
          allCompany: [],
          scaleCompany: [],
        },
        ecoIndexDetailTopRes: {
          allCompany: {
            ability: [],
            decrease: [],
            increase: [],
          },
          scaleCompany: {
            ability: [],
            decrease: [],
            increase: [],
          },
        },
      },
      manageAbility: {
        compDistRes: {
          allCompany: [],
          scaleCompany: [],
        },
        ecoIndexDetailTopRes: {
          allCompany: {
            ability: [],
            decrease: [],
            increase: [],
          },
          scaleCompany: {
            ability: [],
            decrease: [],
            increase: [],
          },
        },
      },
      profitAbility: {
        compDistRes: {
          allCompany: [],
          scaleCompany: [],
        },
        ecoIndexDetailTopRes: {
          allCompany: {
            ability: [],
            decrease: [],
            increase: [],
          },
          scaleCompany: {
            ability: [],
            decrease: [],
            increase: [],
          },
        },
      },
    },
  },
  reducers: {
    saveGetListCoreIndicators(state, { payload }) {
      // 保存核心指标数据
      if (payload.success) {
        return {
          ...state,
          getListCoreIndicatorsData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    saveGetListAbilityDetails(state, { payload }) {
      // 能力详情
      if (payload.success) {
        return {
          ...state,
          getListAbilityDetailsData: payload.value,
        };
      } else {
        return {
          ...state,
        };
      }
    },
  },

  effects: {
    *fetchGetListCoreIndicators({ payload }, { call, put }) {
      const response = yield call(getListCoreIndicators, payload);
      yield put({
        type: 'saveGetListCoreIndicators',
        payload: response,
      });
    },
    *fetchGetListAbilityDetails({ payload }, { call, put }) {
      const response = yield call(getListAbilityDetails, payload);
      yield put({
        type: 'saveGetListAbilityDetails',
        payload: response,
      });
    },
  },
};
