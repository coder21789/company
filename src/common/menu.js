import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: '概览',
    icon: 'gailan1',
    path: 'overview',
  },
  {
    name: '区域详情',
    icon: 'diqu',
    path: 'areadetail',
  },
  {
    name: '经济分析',
    icon: 'zhifu',
    path: 'economic',
    children: [
      {
        name: '概览',
        path: 'overview',
      },
      {
        name: '企业经济指数分析',
        path: 'econindexanalysis',
      },
      {
        name: '一图看懂经济',
        path: 'econapicknow',
      },
    ],
  },
  {
    name: '产业分析',
    icon: 'chanyedai',
    path: 'industry',
    children: [
      {
        name: '概览',
        path: 'overview',
      },
      {
        name: '新兴行业分析',
        path: 'indemerg',
      },
      {
        name: '产业详情',
        path: 'inddetail',
      },
    ],
  },
  {
    name: '企业分析',
    icon: 'gaiicon-',
    path: 'company',
    children: [
      {
        name: '概览',
        path: 'overview',
      },
      {
        name: '企业详情',
        path: 'compdetail/18670',
      },
    ],
  },
  {
    name: '风险预警分析',
    icon: 'fengxian',
    path: 'warn',
    children: [],
  },
  {
    name: '人才分析',
    icon: 'rencai',
    path: 'talent',
    children: [
      {
        name: '就业人才分析',
        path: 'employAnaly',
      },
      {
        name: '人才需求分析',
        path: 'demandAnaly',
      },
    ],
  },
  {
    name: '账户',
    icon: 'user',
    path: 'user',
    authority: 'guest',
    children: [
      {
        name: '登录',
        path: 'login',
      },
      {
        name: '注册',
        path: 'register',
      },
      {
        name: '注册结果',
        path: 'register-result',
      },
    ],
  },
];

const govMenuData = [
  {
    name: '政策管理',
    icon: 'zhengceguanli',
    path: 'gov/policy/list',
  },
  {
    name: '互动管理',
    icon: 'hudongguanli',
    path: 'gov/interactive/list',
  },
];
/**
 * @param {*} data
 * @param {*} parentPath
 * @param {*} parentAuthority
 * @description 路径绝对化和路径权限
 */

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);

export const getGovMenuData = () => formatter(govMenuData);
