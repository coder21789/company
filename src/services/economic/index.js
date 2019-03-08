import request from '../../utils/request';
import config from '../../config';

// 查询核心指标
export async function getOverView(params) {
  return request(`${config.apiDomain}/analysis/economic/getOverView`, {
    method: 'POST',
    body: params,
  });
}

// 增长关系图
export async function getListRevenueTax(params) {
  return request(`${config.apiDomain}/analysis/economic/listRevenueTax`, {
    method: 'POST',
    body: params,
  });
}

// 区域营收分析
export async function getListAreaAnalyze(params) {
  return request(`${config.apiDomain}/analysis/economic/listAreaAnalyze`, {
    method: 'POST',
    body: params,
  });
}

// 经济构成分析
export async function getListEconomicConstitute(params) {
  return request(`${config.apiDomain}/analysis/economic/listEconomicConstitute`, {
    method: 'POST',
    body: params,
  });
}

// 营税收Top
export async function getListRevenueTaxRank(params) {
  return request(`${config.apiDomain}/analysis/economic/listRevenueTaxRank`, {
    method: 'POST',
    body: params,
  });
}

// 税收预警
export async function getListTaxalert(params) {
  return request(`${config.apiDomain}/analysis/economic/listTaxalert`, {
    method: 'POST',
    body: params,
  });
}
