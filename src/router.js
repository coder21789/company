import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { getRouterData } from './common/router';
import Authorized from './utils/Authorized';
import { getQueryPath } from './utils/utils';

const { ConnectedRouter } = routerRedux;
const { AuthorizedRoute } = Authorized;

function RouterConfig({ history, app }) {
  const routerData = getRouterData(app);
  const UserLayout = routerData['/user'].component;
  const BigScreenLayout = routerData['/big-screen'].component;
  const AreascreenLayout = routerData['/areascreen/:areaId'].component;
  const BasicLayout = routerData['/'].component;
  const DetailLayout = routerData['/gov/policy/detail/:id'].component;
  const CompanyScreenLayout = routerData['/company/screen/:id'].component;
  return (
    <LocaleProvider locale={zhCN}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/user" component={UserLayout} />
          <Route path="/big-screen" component={BigScreenLayout} />
          <Route path="/areascreen" component={AreascreenLayout} />
          <Route path="/gov/policy/detail/:id" component={DetailLayout} />
          <Route path="/company/screen/:id" component={CompanyScreenLayout} />

          <AuthorizedRoute
            path="/"
            render={props => <BasicLayout {...props} />}
            authority={['admin', 'user']}
            redirectPath={getQueryPath('/user/login', {
              redirect: window.location.href,
            })}
          />
        </Switch>
      </ConnectedRouter>
    </LocaleProvider>
  );
}

export default RouterConfig;
