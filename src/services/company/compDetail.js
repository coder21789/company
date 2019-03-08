import request from '../../utils/request';
import config from '../../config';

// 企业基本信息
export async function getCompanyBaseInfo(params) {
  return request(`${config.apiDomain}/analysis/companydetails/getCompanyBaseInfo`, {
    method: 'POST',
    body: params,
  });
}

// 企业图谱
export async function listCompanyMapData(params) {
  return request(`${config.apiDomain}/analysis/companydetails/listCompanyMapData`, {
    method: 'POST',
    body: params,
  });
}

// 企业预警
export async function listCompanyAlert(params) {
  return request(`${config.apiDomain}/analysis/companydetails/listCompanyAlert`, {
    method: 'POST',
    body: params,
  });
}

// 企业经济趋势
export async function listCompanyEcoTrend(params) {
  return request(`${config.apiDomain}/analysis/companydetails/listCompanyEcoTrend`, {
    method: 'POST',
    body: params,
  });
}

// 企业知识产权分析
export async function listComPropRights(params) {
  return request(`${config.apiDomain}/analysis/companydetails/listComPropRights`, {
    method: 'POST',
    body: params,
  });
}

// 企业查询下拉框
export async function companySelect(params) {
  return request(`${config.apiDomain}/analysis/companydetails/companySelect`, {
    method: 'POST',
    body: params,
  });
}
