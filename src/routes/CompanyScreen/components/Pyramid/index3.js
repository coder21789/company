import React, { Component } from 'react';

export default class Pyramid extends Component {
  render() {
    return (
      <svg width="210px" height="319px" viewBox="0 0 210 319" version="1.1">
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-single3">
            <stop stopColor="#ECD9FF" offset="0%" />
            <stop stopColor="#B46BFF" offset="100%" />
          </linearGradient>
          <linearGradient x1="0%" y1="0%" x2="50%" y2="100%" id="linearGradient-single31">
            <stop stopColor="#C389F4" offset="0%" />
            <stop stopColor="#891DEE" stopOpacity="0.8" offset="100%" />
          </linearGradient>
          <path
            d="M102.235,22.4736918 C108.439919,22.4736918 113.47,17.4427845 113.47,11.2368459 C113.47,5.03090727 108.439919,0 102.235,0 C96.0300808,0 91,5.03090727 91,11.2368459 C91,17.4427845 96.0300808,22.4736918 102.235,22.4736918 Z"
            id="path-3"
          />
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
              values="0 0 0 0 0.72   0 0 0 0 0.44   0 0 0 0 1  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
              result="shadowMatrixOuter1"
            />
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter2" />
            <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter2" result="shadowBlurOuter2" />
            <feColorMatrix
              values="0 0 0 0 0.6   0 0 0 0 0.2   0 0 0 0 1  0 0 0 1 0"
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
        <g id="大屏" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="五常街道产业大脑-copy" transform="translate(-8809.000000, -2631.000000)">
            <g id="Group-26" transform="translate(6490.000000, 2205.000000)">
              <g id="证书" transform="translate(2319.000000, 447.000000)">
                <polygon
                  id="Path-2-Copy-6"
                  fill="url(#linearGradient-single3)"
                  points="102.607138 8 0 297.60674 143.817889 297.60674"
                />
                <polygon
                  id="Path-4-Copy-5"
                  fill="url(#linearGradient-single31)"
                  points="102 8 209.671133 297.30342 143.291831 297.30342"
                />
                <g id="Oval-2-Copy-5">
                  <use fill="black" fillOpacity="1" filter="url(#filter-4)" xlinkHref="#path-3" />
                  <use fill="#FAF5FF" fillRule="evenodd" xlinkHref="#path-3" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
