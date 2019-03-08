import React, { Component } from 'react';

export default class CompanyAge extends Component {
  static defaultProps = {
    className: '',
    data: [],
  };

  render() {
    const { className, data } = this.props;

    return (
      <svg
        className={className}
        width="356px"
        height="189px"
        viewBox="0 0 356 189"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="3.061617e-15%" id="linearGradient-1">
            <stop stopColor="#43A298" stopOpacity="0.304630888" offset="0%" />
            <stop stopColor="#20695F" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="3.061617e-15%" id="linearGradient-2">
            <stop stopColor="#43A298" offset="0%" />
            <stop stopColor="#20695F" stopOpacity="0" offset="100%" />
          </linearGradient>
          <ellipse id="path-age-3" cx="1698.5" cy="703" rx="104.5" ry="40" />
          <filter
            x="-1.9%"
            y="-5.0%"
            width="103.8%"
            height="110.0%"
            filterUnits="objectBoundingBox"
            id="filter-age-4"
          >
            <feGaussianBlur stdDeviation="4" in="SourceAlpha" result="shadowBlurInner1" />
            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1" />
            <feComposite
              in="shadowOffsetInner1"
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowInnerInner1"
            />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 1   0 0 0 0 0.864639946  0 0 0 0.5 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="17.6020594%" id="linearGradient-5">
            <stop stopColor="#04BAFF" offset="0%" />
            <stop stopColor="#FFFFFF" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="17.6020594%" id="linearGradient-6">
            <stop stopColor="#FF9945" offset="0%" />
            <stop stopColor="#FFFFFF" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="17.6020594%" id="linearGradient-7">
            <stop stopColor="#00E2CC" offset="0%" />
            <stop stopColor="#FFFFFF" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="17.6020594%" id="linearGradient-8">
            <stop stopColor="#F97586" offset="0%" />
            <stop stopColor="#FFFFFF" stopOpacity="0" offset="100%" />
          </linearGradient>
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="第二页" transform="translate(-1515.000000, -604.000000)">
            <ellipse
              id="Oval-4"
              stroke="url(#linearGradient-1)"
              fillOpacity="0.02"
              fill="#0263FF"
              cx="1693"
              cy="709"
              rx="177"
              ry="83"
            />
            <ellipse
              id="Oval-4"
              stroke="url(#linearGradient-2)"
              fillOpacity="0.05"
              fill="#0263FF"
              opacity="0.6"
              cx="1698.5"
              cy="704.5"
              rx="141.5"
              ry="58.5"
            />
            <g id="Oval-4" opacity="0.8">
              <use fillOpacity="0.1" fill="#0263FF" fillRule="evenodd" xlinkHref="#path-age-3" />
              <use
                fill="black"
                fillOpacity="1"
                filter="url(#filter-age-4)"
                xlinkHref="#path-age-3"
              />
            </g>
            {data[3] ? (
              <g id="Group-22" transform="translate(1751.000000, 604.000000)">
                <path
                  d="M3.18826667,58.5302732 L3.18181818,58.5302732 L3.18181818,5.12 L31.8181818,5.12 L31.8181818,58.5302732 L31.8117333,58.5302732 C31.8160222,58.5837035 31.8181818,58.637332 31.8181818,58.6911475 C31.8181818,61.6231458 25.4077135,64 17.5,64 C9.59228654,64 3.18181818,61.6231458 3.18181818,58.6911475 C3.18181818,58.637332 3.1839778,58.5837035 3.18826667,58.5302732 Z"
                  id="Combined-Shape"
                  fill="#0076DB"
                />
                <ellipse
                  id="Oval-7"
                  stroke="url(#linearGradient-5)"
                  strokeWidth="1.28"
                  cx="17.5"
                  cy="19.52"
                  rx="17.5"
                  ry="6.72"
                />
                <ellipse
                  id="Oval-7"
                  stroke="url(#linearGradient-5)"
                  strokeWidth="1.28"
                  cx="17.5"
                  cy="32.32"
                  rx="17.5"
                  ry="6.72"
                />
                <ellipse
                  id="Oval-7"
                  stroke="url(#linearGradient-5)"
                  strokeWidth="1.28"
                  cx="17.5"
                  cy="45.12"
                  rx="17.5"
                  ry="6.72"
                />
                <ellipse id="Oval-7" fill="#00C5FF" cx="17.5" cy="5.44" rx="14.3181818" ry="5.44" />
              </g>
            ) : (
              <g />
            )}
            {data[4] ? (
              <g id="Group-22" transform="translate(1600.000000, 610.000000)">
                <path
                  d="M3.18826667,58.5302732 L3.18181818,58.5302732 L3.18181818,5.12 L31.8181818,5.12 L31.8181818,58.5302732 L31.8117333,58.5302732 C31.8160222,58.5837035 31.8181818,58.637332 31.8181818,58.6911475 C31.8181818,61.6231458 25.4077135,64 17.5,64 C9.59228654,64 3.18181818,61.6231458 3.18181818,58.6911475 C3.18181818,58.637332 3.1839778,58.5837035 3.18826667,58.5302732 Z"
                  id="Combined-Shape"
                  fill="#AC5D1B"
                />
                <ellipse
                  id="Oval-7"
                  stroke="url(#linearGradient-6)"
                  strokeWidth="1.28"
                  cx="17.5"
                  cy="19.52"
                  rx="17.5"
                  ry="6.72"
                />
                <ellipse
                  id="Oval-7"
                  stroke="url(#linearGradient-6)"
                  strokeWidth="1.28"
                  cx="17.5"
                  cy="32.32"
                  rx="17.5"
                  ry="6.72"
                />
                <ellipse
                  id="Oval-7"
                  stroke="url(#linearGradient-6)"
                  strokeWidth="1.28"
                  cx="17.5"
                  cy="45.12"
                  rx="17.5"
                  ry="6.72"
                />
                <ellipse id="Oval-7" fill="#FF9945" cx="17.5" cy="5.44" rx="14.3181818" ry="5.44" />
              </g>
            ) : (
              <g />
            )}
            {data[1] ? (
              <g id="Group-22" transform="translate(1799.000000, 668.000000)">
                <path
                  d="M3.82592,80.419235 L3.81818182,80.419235 L3.81818182,6.16 L38.1818182,6.16 L38.1818182,80.419235 L38.17408,80.419235 C38.1792266,80.4835182 38.1818182,80.5480401 38.1818182,80.6127869 C38.1818182,84.1403473 30.4892562,87 21,87 C11.5107438,87 3.81818182,84.1403473 3.81818182,80.6127869 C3.81818182,80.5480401 3.82077337,80.4835182 3.82592,80.419235 Z"
                  id="Combined-Shape"
                  fill="#08989F"
                />
                <ellipse
                  id="Oval-7"
                  stroke="url(#linearGradient-7)"
                  strokeWidth="1.536"
                  cx="21"
                  cy="23.485"
                  rx="21"
                  ry="8.085"
                />
                <ellipse
                  id="Oval-7"
                  stroke="url(#linearGradient-7)"
                  strokeWidth="1.536"
                  cx="21"
                  cy="43.885"
                  rx="21"
                  ry="8.085"
                />
                <ellipse
                  id="Oval-7"
                  stroke="url(#linearGradient-7)"
                  strokeWidth="1.536"
                  cx="21"
                  cy="64.285"
                  rx="21"
                  ry="8.085"
                />
                <ellipse id="Oval-7" fill="#00E2CC" cx="21" cy="6.545" rx="17.1818182" ry="6.545" />
              </g>
            ) : (
              <g />
            )}
            {data[2] ? (
              <g id="Group-22" transform="translate(1548.000000, 668.000000)">
                <path
                  d="M4.0076563,80.4062102 L4,80.4062102 L4,6 L38,6 L38,80.4062102 L37.9923437,80.4062102 C37.9974359,80.4706207 38,80.5352702 38,80.6001452 C38,84.1346874 30.3888407,87 21,87 C11.6111593,87 4,84.1346874 4,80.6001452 C4,80.5352702 4.00256412,80.4706207 4.0076563,80.4062102 Z"
                  id="Combined-Shape"
                  fill="#B54E5B"
                />
                <ellipse
                  id="Oval-7"
                  stroke="url(#linearGradient-8)"
                  strokeWidth="1.536"
                  cx="21"
                  cy="23"
                  rx="21"
                  ry="8"
                />
                <ellipse
                  id="Oval-7"
                  stroke="url(#linearGradient-8)"
                  strokeWidth="1.536"
                  cx="21"
                  cy="44"
                  rx="21"
                  ry="8"
                />
                <ellipse
                  id="Oval-7"
                  stroke="url(#linearGradient-8)"
                  strokeWidth="1.536"
                  cx="21"
                  cy="64"
                  rx="21"
                  ry="8"
                />
                <ellipse id="Oval-7" fill="#F97586" cx="21" cy="6.5" rx="17" ry="6.5" />
              </g>
            ) : (
              <g />
            )}
            {data[0] ? (
              <g id="Group-22" transform="translate(1670.000000, 618.000000)">
                <path
                  d="M5.01013334,91.4535519 L5,91.4535519 L5,8 L50,8 L50,91.4535519 L49.9898667,91.4535519 C49.9966063,91.5370367 50,91.6208312 50,91.704918 C50,96.2861653 39.9264069,100 27.5,100 C15.0735931,100 5,96.2861653 5,91.704918 C5,91.6208312 5.00339369,91.5370367 5.01013334,91.4535519 Z"
                  id="Combined-Shape"
                  fill="#0480EA"
                />
                <ellipse
                  id="Oval-7"
                  stroke="url(#linearGradient-5)"
                  strokeWidth="2"
                  cx="27.5"
                  cy="30.5"
                  rx="27.5"
                  ry="10.5"
                />
                <ellipse
                  id="Oval-7"
                  stroke="url(#linearGradient-5)"
                  strokeWidth="2"
                  cx="27.5"
                  cy="50.5"
                  rx="27.5"
                  ry="10.5"
                />
                <ellipse
                  id="Oval-7"
                  stroke="url(#linearGradient-5)"
                  strokeWidth="2"
                  cx="27.5"
                  cy="70.5"
                  rx="27.5"
                  ry="10.5"
                />
                <ellipse id="Oval-7" fill="#5CAFFF" cx="27.5" cy="8.5" rx="22.5" ry="8.5" />
              </g>
            ) : (
              <g />
            )}
          </g>
        </g>
      </svg>
    );
  }
}
