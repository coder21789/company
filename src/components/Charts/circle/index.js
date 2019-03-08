import React, { Component } from 'react';
import autoHeight from '../autoHeight';
import { dataFormate } from '../../../utils/utils';

@autoHeight()
class Circle extends Component {
  render() {
    const { industryAnalyzeList, dataTypeId } = this.props;

    const dataStyle = [
      { name: '', value: 0, x: '260', y: '18', cx: '230.5', cy: '21.5' },
      { name: '', value: 0, x: '312', y: '81', cx: '281', cy: '81' },
      { name: '', value: 0, x: '290', y: '195', cx: '270', cy: '158' },
      { name: '', value: 0, x: '170', y: '240', cx: '197.5', cy: '195.5' },
      { name: '', value: 0, x: '15', y: '200', cx: '125.5', cy: '161.5' },
      { name: '', value: 0, x: '0', y: '85', cx: '108.5', cy: '85.5' },
      { name: '', value: 0, x: '45', y: '22', cx: '156.5', cy: '25.5' },
    ];

    const data = [];
    let sum = 0;

    for (const i in industryAnalyzeList) {
      if (Object.prototype.hasOwnProperty.call(industryAnalyzeList, i)) {
        switch (dataTypeId) {
          case 1:
            dataStyle[i].value = dataFormate(industryAnalyzeList[i].content, 'int');
            break;
          case 2:
            dataStyle[i].value = dataFormate(industryAnalyzeList[i].content, 'int');
            break;
          case 3:
            dataStyle[i].value = (industryAnalyzeList[i].content / 100000000).toFixed(2);
            break;
          case 4:
            dataStyle[i].value = (industryAnalyzeList[i].content / 100000000).toFixed(2);
            break;
          default:
            break;
        }
        dataStyle[i].name = industryAnalyzeList[i].domainName;
        sum += dataStyle[i].value * 1.0 > 0 ? dataStyle[i].value * 1.0 : dataStyle[i].value * -1.0;
        data.push(dataStyle[i]);
      }
    }
    return (
      <div>
        <svg width="420px" height="260px" viewBox="0 0 420 227">
          <defs>
            <linearGradient
              x1="25.2704327%"
              y1="0%"
              x2="75.2904647%"
              y2="86.7387821%"
              id="linearGradient-1"
            >
              <stop stopColor="#FDD361" offset="0%" />
              <stop stopColor="#FAA732" offset="100%" />
            </linearGradient>
            <linearGradient
              x1="27.2668087%"
              y1="10.842803%"
              x2="74.4199811%"
              y2="90.1278409%"
              id="linearGradient-2"
            >
              <stop stopColor="#F48088" offset="0%" />
              <stop stopColor="#F25359" offset="100%" />
            </linearGradient>
            <linearGradient
              x1="24.3582589%"
              y1="0%"
              x2="67.9129464%"
              y2="100%"
              id="linearGradient-3"
            >
              <stop stopColor="#BFABE8" offset="0%" />
              <stop stopColor="#8C64FA" offset="100%" />
            </linearGradient>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-4">
              <stop stopColor="#C0EA49" offset="0%" />
              <stop stopColor="#8CD123" offset="100%" />
            </linearGradient>
            <linearGradient
              x1="32.3822464%"
              y1="0%"
              x2="62.7604167%"
              y2="100%"
              id="linearGradient-5"
            >
              <stop stopColor="#828BDE" offset="0%" />
              <stop stopColor="#4B53BA" offset="100%" />
            </linearGradient>
            <linearGradient x1="29.296875%" y1="0%" x2="74.578125%" y2="100%" id="linearGradient-6">
              <stop stopColor="#77C7BD" offset="0%" />
              <stop stopColor="#429588" offset="100%" />
            </linearGradient>
            <linearGradient
              x1="28.811553%"
              y1="0%"
              x2="74.8697917%"
              y2="100%"
              id="linearGradient-7"
            >
              <stop stopColor="#AB8E7C" offset="0%" />
              <stop stopColor="#735546" offset="100%" />
            </linearGradient>
          </defs>
          <g id="0713设计终稿" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Group-22">
              {data.map(item => (
                <text
                  fontFamily="PingFangSC-Regular, PingFang SC"
                  fontSize="14"
                  fontWeight="normal"
                  fill="#333333"
                  key={item.name}
                >
                  <tspan x={item.x} y={item.y}>
                    {item.name} {item.value}
                  </tspan>
                </text>
              ))}
              <circle stroke="#0580F2" cx="196" cy="106" r="90" />
              {data.map((item, i) => (
                <circle
                  fill={`url(#linearGradient-${i + 1})`}
                  cx={item.cx}
                  cy={item.cy}
                  r={8 + (sum > 0 ? (17.0 * item.value) / sum : '')}
                  key={item.name}
                />
              ))}
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default Circle;
