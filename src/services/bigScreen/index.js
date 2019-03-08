import request from '../../utils/request';
import config from '../../config';

// left
export async function getCoreIndicators(params) {
  return request(`${config.apiDomain}/analysis/yhbigscreen/getCoreIndicators`, {
    method: 'POST',
    body: params,
  });
}

// right top-left 营收
export async function getTaxTrend(params) {
  return request(`${config.apiDomain}/analysis/yhbigscreen/listRevenueTaxTrend`, {
    method: 'POST',
    body: params,
  });
}

// right top-right 知识产权
export async function getIntellProData(params) {
  return request(`${config.apiDomain}/analysis/yhbigscreen/getIntellProData`, {
    method: 'POST',
    body: params,
  });
}

// right m-l 七大产业发展
export async function getSevenIndustry(params) {
  return request(`${config.apiDomain}/analysis/yhbigscreen/sevenIndustryDevelop`, {
    method: 'POST',
    body: params,
  });
}

// right m-r 人才分析
export async function getListTalentAna(params) {
  return request(`${config.apiDomain}/analysis/yhbigscreen/listTalentAna`, {
    method: 'POST',
    body: params,
  });
}

// right b-l 企业分析
export async function getListCompanyAna(params) {
  return request(`${config.apiDomain}/analysis/yhbigscreen/listCompanyAna`, {
    method: 'POST',
    body: params,
  });
}

// right b-r 人才需求分析
export async function getListTalentDemand(params) {
  return request(`${config.apiDomain}/analysis/yhbigscreen/listTalentDemand`, {
    method: 'POST',
    body: params,
  });
}

// center 地图
export async function getMap(params) {
  return request(`${config.apiDomain}/analysis/yhbigscreen/listMapWholeData`, {
    method: 'POST',
    body: params,
  });
}

// center bottom 地图底部
export async function getMapBottom(params) {
  return request(`${config.apiDomain}/analysis/yhbigscreen/listMapFootData`, {
    method: 'POST',
    body: params,
  });
}
