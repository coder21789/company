import request from '../../utils/request';
import config from '../../config';

// 行业列表
export async function getListIndustry(params) {
  return request(`${config.apiDomain}/analysis/industryDetail/listIndustry`, {
    method: 'POST',
    body: params,
  });
}

// 核心数据
export async function getCoreIndex(params) {
  return request(`${config.apiDomain}/analysis/industryDetail/getCoreIndex`, {
    method: 'POST',
    body: params,
  });
}

// 区域分布分析
export async function getListAreaAnalyze(params) {
  return request(`${config.apiDomain}/analysis/industryDetail/listAreaAnalyze`, {
    method: 'POST',
    body: params,
  });
}

// 近12月企业经济等级分析
export async function getListEconomicAnalyze(params) {
  return request(`${config.apiDomain}/analysis/industryDetail/listEconomicAnalyze`, {
    method: 'POST',
    body: params,
  });
}

// 就业人才分析
export async function getListTalentAnalyze(params) {
  return request(`${config.apiDomain}/analysis/industryDetail/listTalentAnalyze`, {
    method: 'POST',
    body: params,
  });
}

// 企业分析
export async function getListTop(params) {
  return request(`${config.apiDomain}/analysis/industryDetail/listTop`, {
    method: 'POST',
    body: params,
  });
}
