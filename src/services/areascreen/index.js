import request from '../../utils/request';
import config from '../../config';

// 核心数据
export async function getCoreIndicators(params) {
  return request(`${config.apiDomain}/analysis/areabigscreen/getCoreIndicators`, {
    method: 'POST',
    body: params,
  });
}

// 行业分析数据
export async function getIndustryAna(params) {
  return request(`${config.apiDomain}/analysis/areabigscreen/getIndustryAna`, {
    method: 'POST',
    body: params,
  });
}

// 行业效益 && 能耗
export async function getListIndustryEnerEff(params) {
  return request(`${config.apiDomain}/analysis/areabigscreen/listIndustryEnerEff`, {
    method: 'POST',
    body: params,
  });
}

// top 数据
export async function getListCompanyRank(params) {
  return request(`${config.apiDomain}/analysis/areabigscreen/listCompanyRank`, {
    method: 'POST',
    body: params,
  });
}

// 人才分析数据
export async function getListTalentAna(params) {
  return request(`${config.apiDomain}/analysis/areabigscreen/listTalentAna`, {
    method: 'POST',
    body: params,
  });
}

// 知识产权分析
export async function getListPropertyAna(params) {
  return request(`${config.apiDomain}/analysis/areabigscreen/listPropertyAna`, {
    method: 'POST',
    body: params,
  });
}

// 经济营税趋势
export async function getListRevenueTaxTrend(params) {
  return request(`${config.apiDomain}/analysis/areabigscreen/listRevenueTaxTrend`, {
    method: 'POST',
    body: params,
  });
}

// 经济营税趋势
export async function getListCompanyLevelAna(params) {
  return request(`${config.apiDomain}/analysis/areabigscreen/listCompanyLevelAna`, {
    method: 'POST',
    body: params,
  });
}
