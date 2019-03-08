import request from '../../utils/request';
import config from '../../config';

// 查询季度列表
export async function getListquarter(params) {
  return request(`${config.apiDomain}/analysis/oneview/listquarter`, {
    method: 'POST',
    body: params,
  });
}

// 第0块
export async function getEntirety(params) {
  return request(`${config.apiDomain}/analysis/oneview/entirety`, {
    method: 'POST',
    body: params,
  });
}

// 第1块
export async function getAreadevelop(params) {
  return request(`${config.apiDomain}/analysis/oneview/areadevelop`, {
    method: 'POST',
    body: params,
  });
}

// 第2块
export async function getSpecial(params) {
  return request(`${config.apiDomain}/analysis/oneview/special`, {
    method: 'POST',
    body: params,
  });
}

export async function getDigitaleconomy(params) {
  return request(`${config.apiDomain}/analysis/oneview/digitaleconomy`, {
    method: 'POST',
    body: params,
  });
}

// 第3块
export async function getInnovation(params) {
  return request(`${config.apiDomain}/analysis/oneview/innovation`, {
    method: 'POST',
    body: params,
  });
}

export async function getParentinvention(params) {
  return request(`${config.apiDomain}/analysis/oneview/parentinvention`, {
    method: 'POST',
    body: params,
  });
}

// 第4块
export async function getRising(params) {
  return request(`${config.apiDomain}/analysis/oneview/rising`, {
    method: 'POST',
    body: params,
  });
}

export async function getRisingrank(params) {
  return request(`${config.apiDomain}/analysis/oneview/risingrank`, {
    method: 'POST',
    body: params,
  });
}

// 二维码图片
export async function getcodejsp(params) {
  return request(`${config.apiDomain}/analysis/oneview/getcodejsp`, {
    method: 'POST',
    body: params,
  });
}

// 获取信息
export async function getContentList(params) {
  return request(`${config.apiDomain}/analysis/oneview/getContentList`, {
    method: 'POST',
    body: params,
  });
}

// 保存编辑信息
export async function getRisingupload(params) {
  return request(`${config.apiDomain}/analysis/oneview/risingupload`, {
    method: 'POST',
    body: params,
  });
}
