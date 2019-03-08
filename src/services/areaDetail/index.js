import request from '../../utils/request';
import config from '../../config';

// 区域详情概况
export async function getAreaView(params) {
  return request(`${config.apiDomain}/analysis/areadetail/getAreaView`, {
    method: 'POST',
    body: params,
  });
}

// 经济构成分析
export async function getEcoCopAnaRes(params) {
  return request(`${config.apiDomain}/analysis/areadetail/getEcoCopAnaRes`, {
    method: 'POST',
    body: params,
  });
}

// 产业经济分析
export async function listEcoAna(params) {
  return request(`${config.apiDomain}/analysis/areadetail/listEcoAna`, {
    method: 'POST',
    body: params,
  });
}

// 近12月企业经济等级分析
export async function listCompanyEcoLevelAna(params) {
  return request(`${config.apiDomain}/analysis/areadetail/listCompanyEcoLevelAna`, {
    method: 'POST',
    body: params,
  });
}

// 人才分析
export async function getEmpTalentAnaRes(params) {
  return request(`${config.apiDomain}/analysis/areadetail/getEmpTalentAnaRes`, {
    method: 'POST',
    body: params,
  });
}

// 公司分析
export async function getCompanyAnaRes(params) {
  return request(`${config.apiDomain}/analysis/areadetail/getCompanyAnaRes`, {
    method: 'POST',
    body: params,
  });
}

// 公司分析
export async function listArea(params) {
  return request(`${config.apiDomain}/analysis/areadetail/listArea`, {
    method: 'POST',
    body: params,
  });
}
