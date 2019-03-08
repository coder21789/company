import request from '../../utils/request';
import config from '../../config';

// 查询核心指标
export async function getTarget(params) {
  return request(`${config.apiDomain}/analysis/homepg/getTarget`, {
    method: 'POST',
    body: params,
  });
}

// 地图数据展示
export async function listMap(params) {
  return request(`${config.apiDomain}/analysis/homepg/listMapData`, {
    method: 'POST',
    body: params,
  });
}

// 区域数据详情展示
export async function getArea(params) {
  return request(`${config.apiDomain}/analysis/homepg/getAreaData`, {
    method: 'POST',
    body: params,
  });
}
