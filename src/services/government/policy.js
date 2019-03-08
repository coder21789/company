import request from '../../utils/request';
import config from '../../config';

// 新增或修改政策
export async function addOrUpdatePolicy(params) {
  return request(`${config.apiDomain}/analysis/policy/addOrUpdatePolicy`, {
    method: 'POST',
    body: params,
  });
}

// 删除政策
export async function deletePolicy(params) {
  return request(`${config.apiDomain}/analysis/policy/deletePolicy`, {
    method: 'POST',
    body: params,
  });
}

// 查询政策
export async function listPolicy(params) {
  return request(`${config.apiDomain}/analysis/policy/listPolicy`, {
    method: 'POST',
    body: params,
  });
}

// 查看政策详情
export async function getPolicy(params) {
  return request(`${config.apiDomain}/analysis/policy/getPolicy`, {
    method: 'POST',
    body: params,
  });
}

// 企业端获取最新10条政策
export async function listLately(params) {
  return request(`${config.apiCompanyIp}/multi/listLately`, {
    method: 'POST',
    body: params,
  });
}

// 政府内部打开政策的接口
export async function getById(params) {
  return request(`${config.apiCompanyIp}/multi/getById`, {
    method: 'POST',
    body: params,
  });
}
