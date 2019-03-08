import React, { Component } from 'react';

export default class Pyramid extends Component {
  render() {
    return (
      <svg width="210px" height="339px" viewBox="0 0 210 339">
        <defs>
          <linearGradient
            x1="29.6831234%"
            y1="24.0126071%"
            x2="90.2354119%"
            y2="104.094072%"
            id="linearGradient-single2"
          >
            <stop stopColor="#EBFFB4" offset="0%" />
            <stop stopColor="#86CF18" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="29.6831234%"
            y1="24.0126071%"
            x2="90.2354119%"
            y2="104.094072%"
            id="linearGradient-single21"
          >
            <stop stopColor="#A3CC31" offset="0%" />
            <stop stopColor="#598D0A" offset="100%" />
          </linearGradient>
          <ellipse id="path-3" cx="102.235" cy="11.2368459" rx="11.235" ry="11.2368459" />
          <filter
            x="-200.3%"
            y="-200.2%"
            width="500.5%"
            height="500.5%"
            filterUnits="objectBoundingBox"
            id="filter-4"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="11" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.850666667   0 0 0 0 1   0 0 0 0 0.44  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
              result="shadowMatrixOuter1"
            />
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter2" />
            <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter2" result="shadowBlurOuter2" />
            <feColorMatrix
              values="0 0 0 0 0.786666667   0 0 0 0 1   0 0 0 0 0.2  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter2"
              result="shadowMatrixOuter2"
            />
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1" />
              <feMergeNode in="shadowMatrixOuter2" />
            </feMerge>
          </filter>
        </defs>
        <g id="大屏-0727" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="五常街道产业大脑" transform="translate(-7200.000000, -2611.000000)">
            <g id="Group-25" transform="translate(6490.000000, 2180.000000)">
              <g id="知识产权分析-1" transform="translate(710.000000, 452.000000)">
                <polygon
                  id="知识产权元素-1"
                  fill="url(#linearGradient-single2)"
                  points="102.607138 8 0 317.60674 143.817889 317.60674"
                />
                <polygon
                  id="知识产权元素-2"
                  fill="url(#linearGradient-single21)"
                  points="102 8 209.671133 317.30342 143.291831 317.30342"
                />
                <g id="知识产权元素-3">
                  <use fill="black" fillOpacity="1" filter="url(#filter-4)" xlinkHref="#path-3" />
                  <use fill="#FCFFF5" fillRule="evenodd" xlinkHref="#path-3" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
