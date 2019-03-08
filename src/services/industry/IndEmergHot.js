import request from '../../utils/request';
import config from '../../config';

// 热词分析
export async function getListHotIndustry(params) {
  return request(`${config.apiDomain}/analysis/risingIndustry/listHotIndustry`, {
    method: 'POST',
    body: params,
  });
}

// 优劣势分析
export async function getHotBehave(params) {
  return request(`${config.apiDomain}/analysis/risingIndustry/hotBehave`, {
    method: 'POST',
    body: params,
  });
}

// 危险
export async function getListDanger(params) {
  return request(`${config.apiDomain}/analysis/risingIndustry/listDanger`, {
    method: 'POST',
    body: params,
  });
}

// 机会
export async function getListChances(params) {
  return request(`${config.apiDomain}/analysis/risingIndustry/listChances`, {
    method: 'POST',
    body: params,
  });
}
