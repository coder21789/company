import request from '../../utils/request';
import config from '../../config';

// 查询核心指标
export async function listTrend(params) {
  return request(`${config.apiDomain}/analysis/company/listTrend`, {
    method: 'POST',
    body: params,
  });
}

// 企业构成分析
export async function getConstitute(params) {
  return request(`${config.apiDomain}/analysis/company/getConstitute`, {
    method: 'POST',
    body: params,
  });
}

// 人才数量变化趋势
export async function listTalentsCount(params) {
  return request(`${config.apiDomain}/analysis/company/listTalentsCount`, {
    method: 'POST',
    body: params,
  });
}

// 人才区域分析
export async function areaAnalyze(params) {
  return request(`${config.apiDomain}/analysis/company/areaAnalyze`, {
    method: 'POST',
    body: params,
  });
}

// 人才学历分布
export async function educationAnalyze(params) {
  return request(`${config.apiDomain}/analysis/company/educationAnalyze`, {
    method: 'POST',
    body: params,
  });
}

// 企业排行
export async function companyRank(params) {
  return request(`${config.apiDomain}/analysis/company/companyRank`, {
    method: 'POST',
    body: params,
  });
}
