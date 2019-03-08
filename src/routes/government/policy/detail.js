import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'dva';
import styles from './detail.less';

@connect(({ govPolicy }) => ({
  govPolicy,
}))
export default class Detail extends Component {
  state = {};

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'govPolicy/fetchListLately',
    });
    if (location.hash.substr(1).match(new RegExp('gov/policy/detail/([0-9]{1,20})', 'i'))) {
      const id =
        location.hash.substr(1).match(new RegExp('gov/policy/detail/([0-9]{1,20})', 'i'))[1] * 1 ||
        '';
      (async () => {
        await dispatch({
          type: 'govPolicy/fetchGetById',
          payload: { id },
        });
        console.log(12123, id);
        const {
          govPolicy: { getByIdData },
        } = this.props;
        console.log(getByIdData);
        if (getByIdData && getByIdData.policyDetail && this.detail) {
          this.detail.innerHTML = getByIdData.policyDetail;
        }
      })();
    }
  }

  handleToDetail = id => {
    const { dispatch } = this.props;
    (async () => {
      await dispatch({
        type: 'govPolicy/fetchGetById',
        payload: { id },
      });
      const {
        govPolicy: { getByIdData },
      } = this.props;
      this.detail.innerHTML = getByIdData.policyDetail;
    })();
  };

  render() {
    const {
      govPolicy: { getByIdData, listLatelyData },
    } = this.props;

    // 响应列表
    const listResponsiveProps = {
      xs: 24,
      sm: 24,
      md: 18,
      lg: 18,
      xl: 18,
    };
    const listResponsiveProps1 = {
      xs: 24,
      sm: 24,
      md: 6,
      lg: 6,
      xl: 6,
    };
    const listResponsiveProps2 = {
      xs: 24,
      sm: 24,
      md: 12,
      lg: 12,
      xl: 12,
    };

    return (
      <div className={styles.bg}>
        <div className={styles.title}>余杭多维度分析平台 - 政策详情</div>
        <div className={styles.cnt}>
          <Row>
            <Col {...listResponsiveProps}>
              {getByIdData.policyName !== '' ? (
                <div className={styles.aiticle}>
                  <div className={styles.theme}>{getByIdData.policyName}</div>
                  <Row>
                    <Col {...listResponsiveProps2} className={styles.date}>
                      {getByIdData.modifyTime || ''}
                    </Col>
                    <Col {...listResponsiveProps2} className={styles.origin}>
                      来源：余杭区多维度分析平台
                    </Col>
                  </Row>
                  <div
                    className={styles.detail}
                    ref={instance => {
                      this.detail = instance;
                    }}
                  />
                  <div className={styles.download}>
                    {getByIdData.file &&
                      getByIdData.file.map(v => (
                        <a href={v.path} key={v.id} target="_Blank" rel="noreferrer noopener">
                          {v.name}
                        </a>
                      ))}
                  </div>
                </div>
              ) : (
                <div className={styles.noData}>您访问的页面已删除</div>
              )}
            </Col>
            <Col {...listResponsiveProps1}>
              <div className={styles.sideBar}>
                <div className={styles.smallTitle}>最新政策预览</div>
                <ul>
                  {listLatelyData.map((v, i) => (
                    <li key={v.id} onClick={() => this.handleToDetail(v.id)}>
                      {i + 1}. {v.policyName}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
