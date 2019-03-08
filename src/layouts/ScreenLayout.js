import React from 'react';
import { Switch, Route } from 'dva/router';
import DocumentTitle from 'react-document-title';
import { getRoutes } from '../utils/utils';

class ScreenLayout extends React.PureComponent {
  getPageTitle() {
    const { routerData, location } = this.props;
    const { pathname } = location;
    let title = '多维度市场服务平台';
    if (routerData[pathname] && routerData[pathname].name) {
      title = `${routerData[pathname].name} - 多维度市场服务平台`;
    }
    return title;
  }

  render() {
    const { routerData, match } = this.props;
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <Switch>
          {getRoutes(match.path, routerData).map(item => (
            <Route key={item.key} path={item.path} component={item.component} exact={item.exact} />
          ))}
        </Switch>
      </DocumentTitle>
    );
  }
}

export default ScreenLayout;
