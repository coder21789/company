import request from '../../utils/request';
import config from '../../config';

export async function getRiskmon(params) {
  return request(`${config.apiDomain}/analysis/risk/riskmon`, {
    method: 'POST',
    body: params,
  });
}

export async function getRiskday(params) {
  return request(`${config.apiDomain}/analysis/risk/riskday`, {
    method: 'POST',
    body: params,
  });
}

export async function getRiskregion(params) {
  return request(`${config.apiDomain}/analysis/risk/riskregion`, {
    method: 'POST',
    body: params,
  });
}

export async function getRiskregionrate(params) {
  return request(`${config.apiDomain}/analysis/risk/riskregionrate`, {
    method: 'POST',
    body: params,
  });
}

export async function getRiskmessage(params) {
  return request(`${config.apiDomain}/analysis/risk/riskmessage`, {
    method: 'POST',
    body: params,
  });
}
