import request from '../../utils/request';
import config from '../../config';

// 新增互动
export async function addActive(params) {
  return request(`${config.apiDomain}/analysis/active/addActive`, {
    method: 'POST',
    body: params,
  });
}

// 互动列表
export async function listActives(params) {
  return request(`${config.apiDomain}/analysis/active/listActives`, {
    method: 'POST',
    body: params,
  });
}

// 企业列表
export async function listCompany(params) {
  return request(`${config.apiDomain}/analysis/active/listCompany`, {
    method: 'POST',
    body: params,
  });
}

// 删除互动
export async function deleteActive(params) {
  return request(`${config.apiDomain}/analysis/active/deleteActive`, {
    method: 'POST',
    body: params,
  });
}

// 查看互动详情
export async function queryActiveById(params) {
  return request(`${config.apiDomain}/analysis/active/queryActiveById`, {
    method: 'POST',
    body: params,
  });
}

// 政策下拉框
export async function listPolicys(params) {
  return request(`${config.apiDomain}/analysis/active/listPolicys`, {
    method: 'POST',
    body: params,
  });
}

// 无法触达企业
export async function listCantSend(params) {
  return request(`${config.apiDomain}/analysis/active/listCantSend`, {
    method: 'POST',
    body: params,
  });
}

// 选定日期短信发送数量
export async function sendSum(params) {
  return request(`${config.apiDomain}/analysis/active/sendSum`, {
    method: 'POST',
    body: params,
  });
}

// 已打开企业列表
export async function listOpenCompanys(params) {
  return request(`${config.apiDomain}/analysis/active/listOpenCompanys`, {
    method: 'POST',
    body: params,
  });
}

// 未打开的企业列表
export async function listNotOpenCompanys(params) {
  return request(`${config.apiDomain}/analysis/active/listNotOpenCompanys`, {
    method: 'POST',
    body: params,
  });
}
