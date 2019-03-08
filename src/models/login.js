import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { message } from 'antd';

import { fakeAccountLogin, fakeAccountLoginOut } from '../services/api';
import { setAuthority } from '../utils/authority';
import { reloadAuthorized } from '../utils/Authorized';
import { getPageQuery } from '../utils/utils';

const getLocalUser = window.localStorage.getItem('user')
  ? JSON.parse(window.localStorage.getItem('user'))
  : {};

export default {
  namespace: 'login',

  state: {
    status: undefined,
    currentUser: getLocalUser,
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);

      if (response.codeNum === -303) {
        yield put(routerRedux.replace('/user/login'));
        return;
      }

      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });

      // Login successfully
      if (response.success === true) {
        message.success(response.codeDesc);

        reloadAuthorized();
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params;
        if (redirect) {
          const redirectUrlParams = new URL(redirect);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);
            if (redirect.startsWith('/#')) {
              redirect = redirect.substr(2);
            }
          } else {
            window.location.href = redirect;
            return;
          }
        }
        yield put(routerRedux.replace('/'));
      } else {
        message.warning(response.codeDesc);
      }
    },
    *logout({ payload }, { call, put }) {
      yield call(fakeAccountLoginOut, payload);

      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: false,
          currentAuthority: 'guest',
          value: {},
        },
      });
      reloadAuthorized();
      yield put(
        routerRedux.push({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        })
      );
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      // setAuthority(payload.currentAuthority);
      setAuthority('admin');

      window.localStorage.setItem('user', JSON.stringify(payload.value));

      return {
        ...state,
        status: payload.codeDesc,
        // type: payload.type,
        type: 'account',
        currentUser: payload.value,
      };
    },
  },
};
