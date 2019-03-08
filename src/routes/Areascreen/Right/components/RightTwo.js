import React, { Component } from 'react';
import { connect } from 'dva';

import Title from '../../components/title/index.js';
import PieScreen from '../../components/PieScreen/index.js';

import styles from './RightTwo.less';

const placeHolderStyle = {
  normal: {
    color: 'rgba(247,247,247,0.1)',
  },
  emphasis: {
    color: 'rgba(247,247,247,0.1)',
  },
};

@connect(({ areascreen }) => ({
  areascreen,
}))
export default class RightTwoWrap extends Component {
  state = {};

  componentDidMount() {
    const {
      dispatch,
      areascreen: { requestParam },
    } = this.props;

    dispatch({
      type: 'areascreen/fetchGetListTalentAnaData',
      payload: requestParam,
    });
  }

  render() {
    const {
      areascreen: { getListTalentAnaData },
    } = this.props;

    // 人才分析默认数据
    const educationData = [
      [
        {
          name: '专科及以下：',
          value: 0,
        },
        {
          value: 1,
          itemStyle: placeHolderStyle,
        },
      ],
      [
        {
          name: '本科：',
          value: 0,
        },
        {
          value: 1,
          itemStyle: placeHolderStyle,
        },
      ],
      [
        {
          name: '硕士：',
          value: 0,
        },
        {
          value: 1,
          itemStyle: placeHolderStyle,
        },
      ],
      [
        {
          name: '博士及以上：',
          value: 0,
        },
        {
          value: 1,
          itemStyle: placeHolderStyle,
        },
      ],
    ];

    // 年龄段数据
    const ageData = [
      [
        {
          name: '70后：',
          value: 0,
        },
        {
          value: 1,
          itemStyle: placeHolderStyle,
        },
      ],
      [
        {
          name: '80后：',
          value: 0,
        },
        {
          value: 1,
          itemStyle: placeHolderStyle,
        },
      ],
      [
        {
          name: '90后：',
          value: 0,
        },
        {
          value: 1,
          itemStyle: placeHolderStyle,
        },
      ],
      [
        {
          name: '其他：',
          value: 0,
        },
        {
          value: 1,
          itemStyle: placeHolderStyle,
        },
      ],
    ];

    // 薪资数据
    const salaryData = [
      [
        {
          name: '薪资8K及以下：',
          value: 0,
        },
        {
          value: 1,
          itemStyle: placeHolderStyle,
        },
      ],
      [
        {
          name: '薪资8-14K：',
          value: 0,
        },
        {
          value: 1,
          itemStyle: placeHolderStyle,
        },
      ],
      [
        {
          name: '薪资14-20K：',
          value: 0,
        },
        {
          value: 1,
          itemStyle: placeHolderStyle,
        },
      ],
      [
        {
          name: '薪资20K以上：',
          value: 0,
        },
        {
          value: 1,
          itemStyle: placeHolderStyle,
        },
      ],
    ];

    if (getListTalentAnaData) {
      if (getListTalentAnaData.listEduLevel) {
        getListTalentAnaData.listEduLevel.map(value => {
          if (value.talentSmallClassName === '专科及以下') {
            educationData[0][0].value = parseFloat(value.talentProp * 100).toFixed(2);
            educationData[0][1].value = 100 - educationData[0][0].value;
          }

          if (value.talentSmallClassName === '本科') {
            educationData[1][0].value = parseFloat(value.talentProp * 100).toFixed(2);
            educationData[1][1].value = 100 - educationData[1][0].value;
          }

          if (value.talentSmallClassName === '硕士') {
            educationData[2][0].value = parseFloat(value.talentProp * 100).toFixed(2);
            educationData[2][1].value = 100 - educationData[2][0].value;
          }

          if (value.talentSmallClassName === '博士及以上') {
            educationData[3][0].value = parseFloat(value.talentProp * 100).toFixed(2);
            educationData[3][1].value = 100 - educationData[3][0].value;
          }

          return value;
        });
      }

      if (getListTalentAnaData.listAgeLevel) {
        getListTalentAnaData.listAgeLevel.map(value => {
          if (value.talentSmallClassName === '70后') {
            ageData[0][0].value = parseFloat(value.talentProp * 100).toFixed(2);
            ageData[0][1].value = 100 - ageData[0][0].value;
          }

          if (value.talentSmallClassName === '80后') {
            ageData[1][0].value = parseFloat(value.talentProp * 100).toFixed(2);
            ageData[1][1].value = 100 - ageData[1][0].value;
          }

          if (value.talentSmallClassName === '90后') {
            ageData[2][0].value = parseFloat(value.talentProp * 100).toFixed(2);
            ageData[2][1].value = 100 - ageData[2][0].value;
          }

          if (value.talentSmallClassName === '其他') {
            ageData[3][0].value = parseFloat(value.talentProp * 100).toFixed(2);
            ageData[3][1].value = 100 - ageData[3][0].value;
          }

          return value;
        });
      }

      if (getListTalentAnaData.listSalaryLevel) {
        getListTalentAnaData.listSalaryLevel.map(value => {
          if (value.talentSmallClassId === 400301) {
            salaryData[0][0].value = parseFloat(value.talentProp * 100).toFixed(2);

            salaryData[0][1].value = 100 - salaryData[0][0].value;
          }

          if (value.talentSmallClassId === 400302) {
            salaryData[1][0].value = parseFloat(value.talentProp * 100).toFixed(2);
            salaryData[1][1].value = 100 - salaryData[1][0].value;
          }

          if (value.talentSmallClassId === 400303) {
            salaryData[2][0].value = parseFloat(value.talentProp * 100).toFixed(2);
            salaryData[2][1].value = 100 - salaryData[2][0].value;
          }

          if (value.talentSmallClassId === 400304) {
            salaryData[3][0].value = parseFloat(value.talentProp * 100).toFixed(2);
            salaryData[3][1].value = 100 - salaryData[3][0].value;
          }

          return value;
        });
      }
    }
    return (
      <div className={styles.rightTwoWrap}>
        <div className={styles.wrap}>
          <Title titleName="人才分析" description="TALENT ANALYSIS" />

          <PieScreen
            data={educationData}
            container="#one"
            style={{
              position: 'absolute',
              left: '244px',
              bottom: '60px',
            }}
          />
          <PieScreen
            data={ageData}
            container="#two"
            style={{
              position: 'absolute',
              left: '1093px',
              bottom: '60px',
            }}
          />
          <PieScreen
            data={salaryData}
            container="#three"
            style={{
              position: 'absolute',
              left: '1942px',
              bottom: '60px',
            }}
          />
        </div>
      </div>
    );
  }
}
