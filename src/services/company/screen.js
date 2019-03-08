import request from '../../utils/request';
import config from '../../config';

// 企业简介
export async function getCompanyInfo(params) {
  return request(`${config.apiDomain}/analysis/cmpyBigScreen/companyInfo`, {
    method: 'POST',
    body: params,
  });
}

// 企业预警
export async function getListCmpyAlerts(params) {
  return request(`${config.apiDomain}/analysis/cmpyBigScreen/listCmpyAlerts`, {
    method: 'POST',
    body: params,
  });
}

// 融资水平
export async function getListFinances(params) {
  return request(`${config.apiDomain}/analysis/cmpyBigScreen/listFinances`, {
    method: 'POST',
    body: params,
  });
}

// 投资图谱
export async function getInvestMap(params) {
  return request(`${config.apiDomain}/analysis/cmpyBigScreen/investMap`, {
    method: 'POST',
    body: params,
  });
}

// 企业经济指数分析
export async function getListEcoIndexs(params) {
  return request(`${config.apiDomain}/analysis/cmpyBigScreen/listEcoIndexs`, {
    method: 'POST',
    body: params,
  });
}

// 知识产权分析
export async function getListPatents(params) {
  return request(`${config.apiDomain}/analysis/cmpyBigScreen/listPatents`, {
    method: 'POST',
    body: params,
  });
}

// 人才情况
export async function getTalentAnalyze(params) {
  return request(`${config.apiDomain}/analysis/cmpyBigScreen/talentAnalyze`, {
    method: 'POST',
    body: params,
  });
}

// 舆情列表
export async function getListNews(params) {
  return request(`${config.apiDomain}/analysis/cmpyBigScreen/listNews`, {
    method: 'POST',
    body: params,
  });
}

// 经济趋势
export async function getListTrend(params) {
  return request(`${config.apiDomain}/analysis/cmpyBigScreen/listTrend`, {
    method: 'POST',
    body: params,
  });
}
