import request from '../../utils/request';
import config from '../../config';

// 查询核心指标
export async function getListCoreIndicators(params) {
  return request(`${config.apiDomain}/analysis/economicindexana/listCoreIndicators`, {
    method: 'POST',
    body: params,
  });
}

// 能力详情
export async function getListAbilityDetails(params) {
  return request(`${config.apiDomain}/analysis/economicindexana/listAbilityDetails`, {
    method: 'POST',
    body: params,
  });
}
