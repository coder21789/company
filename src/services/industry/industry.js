import request from '../../utils/request';
import config from '../../config';

// 企业增长分析
export async function getListCompanyIncrAnalysis(params) {
  return request(`${config.apiDomain}/analysis/industry/listCompanyIncrAnalysis`, {
    method: 'POST',
    body: params,
  });
}

// 经济分析
export async function getListEconomicAnalysis(params) {
  return request(`${config.apiDomain}/analysis/industry/listEconomicAnalysis`, {
    method: 'POST',
    body: params,
  });
}

// 行业分析图
export async function getListTopIndustryAnalysis(params) {
  return request(`${config.apiDomain}/analysis/industry/listTopIndustryAnalysis`, {
    method: 'POST',
    body: params,
  });
}

// 行业分析 Top5
export async function getListIndustryAnalysis(params) {
  return request(`${config.apiDomain}/analysis/industry/listIndustryAnalysis`, {
    method: 'POST',
    body: params,
  });
}
