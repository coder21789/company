let apiDomain = 'http://dataapi.yuhang.gov.cn';
let apiCompanyIp = 'http://yhsharejingji.startdtapi.com';

let systemSetting = 'http://authority.yuhang.gov.cn/RoleManageSystem/tbsysListAction_findAll?id=12';
let apiLoginIn = 'http://authority.yuhang.gov.cn/RoleManageSystem/govAccountAction_loginInterface';
let apiLoginOut =
  'http://authority.yuhang.gov.cn/RoleManageSystem/govAccountAction_loginOutInterface';

if (
  window.location.href.includes('local') ||
  window.location.href.includes('startdt.net') ||
  window.location.href.includes('testdata.yuhang.gov.cn')
) {
  // apiDomain = 'http://192.168.2.46:8080';
  apiCompanyIp = 'http://test-yhsharejingji.startdtapi.com';
  apiDomain = 'http://testdataapi.yuhang.gov.cn';
  apiDomain = 'http://testdataapi.yuhang.gov.cn';

  // 公司本地测试地址
  // apiDomain = 'http://dataapiyh.startdt.net';

  systemSetting =
    'http://testauthority.yuhang.gov.cn/RoleManageSystem/tbsysListAction_findAll?id=12';
  apiLoginIn =
    'http://testauthority.yuhang.gov.cn/RoleManageSystem/govAccountAction_loginInterface';
  apiLoginOut =
    'http://testauthority.yuhang.gov.cn/RoleManageSystem/govAccountAction_loginOutInterface';
}

export default {
  apiDomain,
  apiCompanyIp,
  systemSetting,
  apiLoginIn,
  apiLoginOut,
};
