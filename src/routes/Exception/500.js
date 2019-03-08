import React from 'react';
import { Link } from 'dva/router';
import Exception from 'components/Exception';
import styles from './style.less';

export default () => <Exception className={styles.wrap} type="500" linkElement={Link} />;
