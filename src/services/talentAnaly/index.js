import request from '../../utils/request';
import config from '../../config';

// 人才分析概览核心指标
export async function talnetCore(params) {
  return request(`${config.apiDomain}/analysis/talentoverview/talentcore`, {
    method: 'POST',
    body: params,
  });
}

// 人才概览趋势分析
export async function talnetTrend(params) {
  return request(`${config.apiDomain}/analysis/talentoverview/talenttrend`, {
    method: 'POST',
    body: params,
  });
}

// 年龄/来源分析
export async function talnetageSource(params) {
  return request(`${config.apiDomain}/analysis/talentoverview/talentagesource`, {
    method: 'POST',
    body: params,
  });
}

// 能力分析
export async function talnetAbility(params) {
  return request(`${config.apiDomain}/analysis/talentoverview/talentability`, {
    method: 'POST',
    body: params,
  });
}

// 人才需求趋势
export async function demandTrend(params) {
  return request(`${config.apiDomain}/analysis/talentdemand/demandtrend`, {
    method: 'POST',
    body: params,
  });
}

// 人才需求标签云
export async function demandLabel(params) {
  return request(`${config.apiDomain}/analysis/talentdemand/demandlabel`, {
    method: 'POST',
    body: params,
  });
}

// 人才需求层级
export async function demandAbility(params) {
  return request(`${config.apiDomain}/analysis/talentdemand/demandability`, {
    method: 'POST',
    body: params,
  });
}

// 人才紧缺榜单
export async function demandLack(params) {
  return request(`${config.apiDomain}/analysis/talentdemand/demandlack`, {
    method: 'POST',
    body: params,
  });
}

// 各行各业人才需求
export async function demandIndustry(params) {
  return request(`${config.apiDomain}/analysis/talentdemand/demandindustry`, {
    method: 'POST',
    body: params,
  });
}
