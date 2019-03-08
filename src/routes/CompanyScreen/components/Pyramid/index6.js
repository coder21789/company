import React, { Component } from 'react';

export default class Pyramid extends Component {
  render() {
    return (
      <svg width="210px" height="234px" viewBox="0 0 210 234">
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-single6">
            <stop stopColor="#D9F2FF" offset="0%" />
            <stop stopColor="#6BCCFF" offset="100%" />
          </linearGradient>
          <linearGradient x1="0%" y1="0%" x2="50%" y2="100%" id="linearGradient-single61">
            <stop stopColor="#89D0F4" offset="0%" />
            <stop stopColor="#1DA7EE" stopOpacity="0.8" offset="100%" />
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
              values="0 0 0 0 0.439215686   0 0 0 0 0.811764706   0 0 0 0 1  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
              result="shadowMatrixOuter1"
            />
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter2" />
            <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter2" result="shadowBlurOuter2" />
            <feColorMatrix
              values="0 0 0 0 0.2   0 0 0 0 0.733333333   0 0 0 0 1  0 0 0 1 0"
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
          <g id="五常街道产业大脑-copy" transform="translate(-6812.000000, -2716.000000)">
            <g id="Group-26" transform="translate(6490.000000, 2205.000000)">
              <g id="专利" transform="translate(322.000000, 532.000000)">
                <polygon
                  id="Path-2"
                  fill="url(#linearGradient-single6)"
                  points="102.607138 10 0 212.310748 143.817889 212.310748"
                />
                <polygon
                  id="Path-4"
                  fill="url(#linearGradient-single61)"
                  points="102 10 209.671133 212.007428 143.291831 212.007428"
                />
                <g id="Oval-2">
                  <use fill="black" fillOpacity="1" filter="url(#filter-4)" xlinkHref="#path-3" />
                  <use fill="#E6FBFF" fillRule="evenodd" xlinkHref="#path-3" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
