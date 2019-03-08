import React, { Component } from 'react';

export default class Pyramid extends Component {
  render() {
    return (
      <svg width="210px" height="269px" viewBox="0 0 210 269">
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-single5">
            <stop stopColor="#FFECD9" offset="0%" />
            <stop stopColor="#FFB56B" offset="100%" />
          </linearGradient>
          <linearGradient x1="0%" y1="0%" x2="50%" y2="100%" id="linearGradient-single51">
            <stop stopColor="#F5BF89" offset="0%" />
            <stop stopColor="#ED851C" stopOpacity="0.8" offset="100%" />
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
              values="0 0 0 0 1   0 0 0 0 0.72   0 0 0 0 0.44  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
              result="shadowMatrixOuter1"
            />
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter2" />
            <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter2" result="shadowBlurOuter2" />
            <feColorMatrix
              values="0 0 0 0 1   0 0 0 0 0.6   0 0 0 0 0.2  0 0 0 1 0"
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
          <g id="五常街道产业大脑-copy" transform="translate(-8030.000000, -2681.000000)">
            <g id="Group-26" transform="translate(6490.000000, 2205.000000)">
              <g id="商标" transform="translate(1540.000000, 497.000000)">
                <polygon
                  id="Path-2-Copy-3"
                  fill="url(#linearGradient-single5)"
                  points="102.607138 8 0 247.60674 143.817889 247.60674"
                />
                <polygon
                  id="Path-4-Copy-3"
                  fill="url(#linearGradient-single51)"
                  points="102 8 209.671133 247.30342 143.291831 247.30342"
                />
                <g id="Oval-2-Copy-3">
                  <use fill="black" fillOpacity="1" filter="url(#filter-4)" xlinkHref="#path-3" />
                  <use fill="#FFF2E6" fillRule="evenodd" xlinkHref="#path-3" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
