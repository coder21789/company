import React, { Component } from 'react';
import styles from './index.less';

export default class MiddleAnimate extends Component {
  static defaultProps = {
    className: '',
    data: [],
  };

  render() {
    const { className, data } = this.props;

    return (
      <svg
        className={className}
        width="751px"
        height="642px"
        viewBox="0 0 751 642"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            x1="24.9580592%"
            y1="58.7575443%"
            x2="80.4587906%"
            y2="89.8151034%"
            id="linearGradient-middle-1"
          >
            <stop stopColor="#0AEDFD" offset="0%" />
            <stop stopColor="#006EF7" offset="100%" />
          </linearGradient>
          <polygon
            id="path-middle-2"
            points="0.461530773 1.16514739 104.50459 1.16514739 104.50459 133.587336 0.461530773 133.587336"
          />
          <linearGradient
            x1="18.4148246%"
            y1="0%"
            x2="100%"
            y2="90.2261057%"
            id="linearGradient-middle-4"
          >
            <stop stopColor="#1196F4" offset="0%" />
            <stop stopColor="#083CD4" offset="100%" />
          </linearGradient>
          <linearGradient x1="18.9026743%" y1="0%" x2="100%" y2="100%" id="linearGradient-middle-5">
            <stop stopColor="#00F2FF" offset="0%" />
            <stop stopColor="#0080FF" offset="100%" />
          </linearGradient>
          <circle id="path-middle-6" cx="19" cy="311" r="14" />
          <filter
            x="-107.1%"
            y="-107.1%"
            width="314.3%"
            height="314.3%"
            filterUnits="objectBoundingBox"
            id="filter-middle-7"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.974150815   0 0 0 0 0.8   0 0 0 0 1  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <filter
            x="-89.3%"
            y="-89.3%"
            width="278.6%"
            height="278.6%"
            filterUnits="objectBoundingBox"
            id="filter-middle-8"
          >
            <feGaussianBlur stdDeviation="5" in="SourceAlpha" result="shadowBlurInner1" />
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
              values="0 0 0 0 0.37741011   0 0 0 0 0.0214232549   0 0 0 0 0.41541773  0 0 0 0.5 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <circle id="path-middle-9" cx="15" cy="220" r="5" />
          <filter
            x="-300.0%"
            y="-300.0%"
            width="700.0%"
            height="700.0%"
            filterUnits="objectBoundingBox"
            id="filter-middle-10"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.962333567   0 0 0 0 0.711706913   0 0 0 0 1  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <circle id="path-middle-11" cx="11" cy="140" r="5" />
          <filter
            x="-300.0%"
            y="-300.0%"
            width="700.0%"
            height="700.0%"
            filterUnits="objectBoundingBox"
            id="filter-middle-12"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.962333567   0 0 0 0 0.711706913   0 0 0 0 1  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <circle id="path-middle-13" cx="5" cy="31" r="5" />
          <filter
            x="-300.0%"
            y="-300.0%"
            width="700.0%"
            height="700.0%"
            filterUnits="objectBoundingBox"
            id="filter-middle-14"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.962333567   0 0 0 0 0.711706913   0 0 0 0 1  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <linearGradient
            x1="26.1170607%"
            y1="86.0317939%"
            x2="79.1980386%"
            y2="14.9831321%"
            id="linearGradient-middle-15"
          >
            <stop stopColor="#021737" offset="0%" />
            <stop stopColor="#15304C" offset="100%" />
          </linearGradient>
          <ellipse
            id="path-middle-16"
            cx="428.104246"
            cy="395.92533"
            rx="66.0716109"
            ry="66.1415649"
          />
          <filter
            x="-90.8%"
            y="-90.7%"
            width="281.6%"
            height="281.4%"
            filterUnits="objectBoundingBox"
            id="filter-middle-17"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="40" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.00297900884   0 0 0 0 0.476428515   0 0 0 0 1  0 0 0 0.854251585 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <filter
            x="-79.5%"
            y="-79.4%"
            width="258.9%"
            height="258.8%"
            filterUnits="objectBoundingBox"
            id="filter-middle-18"
          >
            <feGaussianBlur stdDeviation="25" in="SourceAlpha" result="shadowBlurInner1" />
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
              values="0 0 0 0 0.00990372475   0 0 0 0 0.512518835   0 0 0 0 1  0 0 0 1 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <circle id="path-middle-19" cx="127" cy="288" r="14" />
          <filter
            x="-107.1%"
            y="-107.1%"
            width="314.3%"
            height="314.3%"
            filterUnits="objectBoundingBox"
            id="filter-middle-20"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.992293793   0 0 0 0 0.840222026   0 0 0 0 0.717968254  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <filter
            x="-89.3%"
            y="-89.3%"
            width="278.6%"
            height="278.6%"
            filterUnits="objectBoundingBox"
            id="filter-middle-21"
          >
            <feGaussianBlur stdDeviation="5" in="SourceAlpha" result="shadowBlurInner1" />
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
              values="0 0 0 0 0.41541773   0 0 0 0 0.145750995   0 0 0 0 0.0214232549  0 0 0 0.5 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <circle id="path-middle-22" cx="124" cy="219" r="5" />
          <filter
            x="-300.0%"
            y="-300.0%"
            width="700.0%"
            height="700.0%"
            filterUnits="objectBoundingBox"
            id="filter-middle-23"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.992293793   0 0 0 0 0.840222026   0 0 0 0 0.717968254  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <circle id="path-middle-24" cx="120" cy="129" r="5" />
          <filter
            x="-300.0%"
            y="-300.0%"
            width="700.0%"
            height="700.0%"
            filterUnits="objectBoundingBox"
            id="filter-middle-25"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.992293793   0 0 0 0 0.840222026   0 0 0 0 0.717968254  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <circle id="path-middle-26" cx="113" cy="10" r="5" />
          <filter
            x="-300.0%"
            y="-300.0%"
            width="700.0%"
            height="700.0%"
            filterUnits="objectBoundingBox"
            id="filter-middle-27"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.992293793   0 0 0 0 0.840222026   0 0 0 0 0.717968254  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <circle id="path-middle-28" cx="18" cy="313" r="14" />
          <filter
            x="-107.1%"
            y="-107.1%"
            width="314.3%"
            height="314.3%"
            filterUnits="objectBoundingBox"
            id="filter-middle-29"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.801970109   0 0 0 0 1   0 0 0 0 0.8  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <filter
            x="-89.3%"
            y="-89.3%"
            width="278.6%"
            height="278.6%"
            filterUnits="objectBoundingBox"
            id="filter-middle-30"
          >
            <feGaussianBlur stdDeviation="5" in="SourceAlpha" result="shadowBlurInner1" />
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
              values="0 0 0 0 0.0117210205   0 0 0 0 0.229299532   0 0 0 0 0.0304191739  0 0 0 0.5 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <circle id="path-middle-31" cx="14" cy="215" r="5" />
          <filter
            x="-300.0%"
            y="-300.0%"
            width="700.0%"
            height="700.0%"
            filterUnits="objectBoundingBox"
            id="filter-middle-32"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.801970109   0 0 0 0 1   0 0 0 0 0.8  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <circle id="path-middle-33" cx="8" cy="97" r="5" />
          <filter
            x="-300.0%"
            y="-300.0%"
            width="700.0%"
            height="700.0%"
            filterUnits="objectBoundingBox"
            id="filter-middle-34"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.801970109   0 0 0 0 1   0 0 0 0 0.8  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <circle id="path-middle-35" cx="5" cy="34" r="5" />
          <filter
            x="-300.0%"
            y="-300.0%"
            width="700.0%"
            height="700.0%"
            filterUnits="objectBoundingBox"
            id="filter-middle-36"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.801970109   0 0 0 0 1   0 0 0 0 0.8  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <circle id="path-middle-37" cx="15" cy="256" r="14" />
          <filter
            x="-107.1%"
            y="-107.1%"
            width="314.3%"
            height="314.3%"
            filterUnits="objectBoundingBox"
            id="filter-middle-38"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 1   0 0 0 0 0.949388587   0 0 0 0 0.8  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <filter
            x="-89.3%"
            y="-89.3%"
            width="278.6%"
            height="278.6%"
            filterUnits="objectBoundingBox"
            id="filter-middle-39"
          >
            <feGaussianBlur stdDeviation="5" in="SourceAlpha" result="shadowBlurInner1" />
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
              values="0 0 0 0 0.0214232549   0 0 0 0 0.193394349   0 0 0 0 0.41541773  0 0 0 0.5 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <circle id="path-middle-40" cx="14" cy="205" r="5" />
          <filter
            x="-300.0%"
            y="-300.0%"
            width="700.0%"
            height="700.0%"
            filterUnits="objectBoundingBox"
            id="filter-middle-41"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.981159651   0 0 0 0 0.907204032   0 0 0 0 0.716125759  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <circle id="path-middle-42" cx="10" cy="126" r="5" />
          <filter
            x="-300.0%"
            y="-300.0%"
            width="700.0%"
            height="700.0%"
            filterUnits="objectBoundingBox"
            id="filter-middle-43"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.981159651   0 0 0 0 0.907204032   0 0 0 0 0.716125759  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <circle id="path-middle-44" cx="5" cy="37" r="5" />
          <filter
            x="-300.0%"
            y="-300.0%"
            width="700.0%"
            height="700.0%"
            filterUnits="objectBoundingBox"
            id="filter-middle-45"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.981159651   0 0 0 0 0.907204032   0 0 0 0 0.716125759  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <circle id="path-middle-46" cx="19" cy="321" r="14" />
          <filter
            x="-107.1%"
            y="-107.1%"
            width="314.3%"
            height="314.3%"
            filterUnits="objectBoundingBox"
            id="filter-middle-47"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.8   0 0 0 0 0.933333333   0 0 0 0 1  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <filter
            x="-89.3%"
            y="-89.3%"
            width="278.6%"
            height="278.6%"
            filterUnits="objectBoundingBox"
            id="filter-middle-48"
          >
            <feGaussianBlur stdDeviation="5" in="SourceAlpha" result="shadowBlurInner1" />
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
              values="0 0 0 0 0.0214232549   0 0 0 0 0.193394349   0 0 0 0 0.41541773  0 0 0 0.5 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <circle id="path-middle-49" cx="15" cy="230" r="5" />
          <filter
            x="-300.0%"
            y="-300.0%"
            width="700.0%"
            height="700.0%"
            filterUnits="objectBoundingBox"
            id="filter-middle-50"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.8   0 0 0 0 0.933333333   0 0 0 0 1  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <circle id="path-middle-51" cx="11" cy="150" r="5" />
          <filter
            x="-300.0%"
            y="-300.0%"
            width="700.0%"
            height="700.0%"
            filterUnits="objectBoundingBox"
            id="filter-middle-52"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.8   0 0 0 0 0.933333333   0 0 0 0 1  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <circle id="path-middle-53" cx="5" cy="41" r="5" />
          <filter
            x="-300.0%"
            y="-300.0%"
            width="700.0%"
            height="700.0%"
            filterUnits="objectBoundingBox"
            id="filter-middle-54"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0.8   0 0 0 0 0.933333333   0 0 0 0 1  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="第一页" transform="translate(-519.000000, -44.000000)" className={styles.wrap}>
            <g id="Group-19" transform="translate(487.000000, -36.000000)" className={styles.wrap1}>
              <g
                id="shade"
                opacity="0.6"
                transform="translate(386.913041, 624.207089) rotate(35.000000) translate(-386.913041, -624.207089) translate(266.413041, 504.207089)"
              >
                <g
                  id="Group-8"
                  transform="translate(79.108413, 78.421674)"
                  fill="#8ADDFF"
                  className={styles.wrap2}
                >
                  <g className={styles.wrap3}>
                    <path
                      d="M132.213171,7.64557228 C132.213171,7.64557228 131.90822,7.63614232 131.60327,7.62671237 C131.303011,7.61492492 130.995715,7.61256743 130.995715,7.61256743 L138.216001,0.594322168 C138.216001,0.594322168 138.581941,0.573104765 138.940844,0.563674809 C139.304439,0.551887363 139.670379,0.537742428 139.670379,0.537742428 L132.213171,7.64557228 Z"
                      id="Fill-108"
                    />
                    <path
                      d="M134.270178,7.79291535 C134.270178,7.79291535 133.979302,7.75755302 133.686081,7.72690566 C133.542989,7.71040323 133.397551,7.69390081 133.291991,7.67975587 C133.174703,7.6750409 133.097292,7.67268341 133.097292,7.67268341 L140.72105,0.505916324 C140.72105,0.505916324 140.814881,0.503558835 140.953282,0.498843856 C141.082299,0.505916324 141.258232,0.510631302 141.431819,0.520061259 C141.783685,0.531848705 142.137896,0.54599364 142.137896,0.54599364 L134.270178,7.79291535 Z"
                      id="Fill-110"
                    />
                    <path
                      d="M136.239219,8.10363243 C136.239219,8.10363243 135.960072,8.0446952 135.685617,7.98811546 C135.547216,7.9574681 135.408816,7.93153572 135.305602,7.90796083 C135.193005,7.89617338 135.11794,7.88910091 135.11794,7.88910091 L143.1569,0.585599458 C143.1569,0.585599458 143.246039,0.587956947 143.382094,0.595029415 C143.508765,0.60917435 143.675315,0.630391752 143.844211,0.649251666 C144.182002,0.689328981 144.522139,0.731763787 144.522139,0.731763787 L136.239219,8.10363243 Z"
                      id="Fill-112"
                    />
                    <path
                      d="M138.105046,8.59068969 C138.105046,8.59068969 137.842319,8.50582008 137.581938,8.42095047 C137.333287,8.32900839 137.044757,8.27242865 137.044757,8.27242865 L145.50361,0.851052739 C145.50361,0.851052739 145.855475,0.891130055 146.165117,0.968927197 C146.488834,1.03965187 146.81255,1.10801906 146.81255,1.10801906 L138.105046,8.59068969 Z"
                      id="Fill-114"
                    />
                    <path
                      d="M139.85851,9.25950937 C139.85851,9.25950937 139.61455,9.14634989 139.370589,9.0355479 C139.138358,8.91531595 138.866249,8.83280383 138.866249,8.83280383 L147.749686,1.31241337 C147.749686,1.31241337 148.087477,1.38078056 148.380699,1.48922506 C148.685649,1.59059709 148.992945,1.69196913 148.992945,1.69196913 L139.85851,9.25950937 Z"
                      id="Fill-116"
                    />
                    <path
                      d="M141.485068,10.1228219 C141.485068,10.1228219 141.259874,9.98137255 141.037026,9.8399232 C140.825906,9.69140138 140.567871,9.58295688 140.567871,9.58295688 L149.880585,1.98476928 C149.880585,1.98476928 150.19961,2.08378383 150.474065,2.22523318 C150.757904,2.35725257 151.046434,2.49162945 151.046434,2.49162945 L141.485068,10.1228219 Z"
                      id="Fill-118"
                    />
                    <path
                      d="M142.969472,11.1886428 C142.969472,11.1886428 142.76539,11.016546 142.563654,10.8468068 C142.373646,10.6676376 142.139069,10.5285458 142.139069,10.5285458 L151.876368,2.87849343 C151.876368,2.87849343 152.176627,3.01287031 152.427624,3.18496702 C152.690351,3.35234875 152.955423,3.51973048 152.955423,3.51973048 L142.969472,11.1886428 Z"
                      id="Fill-120"
                    />
                    <path
                      d="M144.29929,12.4664019 C144.29929,12.4664019 144.118666,12.2636578 143.940387,12.0632712 C143.773838,11.8534547 143.560372,11.681358 143.560372,11.681358 L153.722256,4.00773074 C153.722256,4.00773074 153.999057,4.17746996 154.224251,4.3872865 C154.463519,4.59003057 154.705134,4.79277463 154.705134,4.79277463 L144.29929,12.4664019 Z"
                      id="Fill-122"
                    />
                    <path
                      d="M145.461855,13.962936 C145.461855,13.962936 145.307034,13.7271871 145.152213,13.4961532 C145.074803,13.3782787 144.997392,13.2651192 144.941094,13.1778921 C144.873066,13.100095 144.826151,13.0482302 144.826151,13.0482302 L155.403236,5.38167543 C155.403236,5.38167543 155.464226,5.43354019 155.558057,5.51369482 C155.635467,5.60327941 155.741027,5.71879638 155.848932,5.83902833 C156.062397,6.07713473 156.275863,6.31759863 156.275863,6.31759863 L145.461855,13.962936 Z"
                      id="Fill-124"
                    />
                    <path
                      d="M146.437696,15.6872036 C146.437696,15.6872036 146.308679,15.4208073 146.182007,15.154411 C146.118671,15.0223916 146.055335,14.8903723 146.00842,14.7913577 C145.949775,14.6994156 145.912243,14.6404784 145.912243,14.6404784 L156.895146,7.01635842 C156.895146,7.01635842 156.946753,7.08001063 157.02651,7.17666768 C157.094537,7.27803972 157.188368,7.41477409 157.279853,7.55386595 C157.462823,7.82969218 157.648139,8.1102334 157.648139,8.1102334 L146.437696,15.6872036 Z"
                      id="Fill-126"
                    />
                    <path
                      d="M147.215554,17.6465128 C147.215554,17.6465128 147.117031,17.3471117 147.018509,17.0453531 C146.924678,16.745952 146.812081,16.4606958 146.812081,16.4606958 L158.182037,8.92144542 C158.182037,8.92144542 158.350932,9.22320403 158.498716,9.54146507 C158.648845,9.85972611 158.803666,10.1803446 158.803666,10.1803446 L147.215554,17.6465128 Z"
                      id="Fill-128"
                    />
                    <path
                      d="M147.585482,18.8907956 C147.585482,18.8907956 147.531529,18.5513172 147.416587,18.2542736 C147.315718,17.9501575 147.21485,17.6460413 147.21485,17.6460413 L158.802963,10.1798731 C158.802963,10.1798731 158.957784,10.5028492 159.110259,10.8281827 C159.2815,11.1440862 159.384714,11.5071395 159.384714,11.5071395 L147.585482,18.8907956 Z"
                      id="Fill-130"
                    />
                    <path
                      d="M148.01382,21.2343756 C148.01382,21.2343756 147.999745,20.8548199 147.915298,20.5247714 C147.84727,20.1829354 147.776897,19.8458145 147.776897,19.8458145 L159.719221,12.5352406 C159.719221,12.5352406 159.83651,12.9006514 159.953798,13.2684197 C160.092199,13.6267581 160.148497,14.0346037 160.148497,14.0346037 L148.01382,21.2343756 Z"
                      id="Fill-132"
                    />
                    <path
                      d="M148.201716,23.8233702 C148.201716,23.8233702 148.201716,23.7219982 148.201716,23.5734764 C148.208754,23.4178821 148.204062,23.2222105 148.178259,23.0383263 C148.145418,22.6634856 148.110231,22.2910023 148.110231,22.2910023 L160.376272,15.1855299 C160.376272,15.1855299 160.456028,15.5933755 160.535784,16.0035786 C160.5827,16.2063227 160.610849,16.4184967 160.617886,16.588236 C160.634307,16.7509027 160.64369,16.8617047 160.64369,16.8617047 L148.201716,23.8233702 Z"
                      id="Fill-134"
                    />
                    <path
                      d="M148.134158,26.6608442 C148.134158,26.6608442 148.195148,26.2152787 148.192802,25.8027181 C148.195148,25.3901575 148.195148,24.9799544 148.195148,24.9799544 L160.752064,18.1361633 C160.752064,18.1361633 160.791942,18.5888013 160.829475,19.0437967 C160.871699,19.4987921 160.843549,19.9938648 160.843549,19.9938648 L148.134158,26.6608442 Z"
                      id="Fill-136"
                    />
                    <path
                      d="M147.798478,29.7493908 C147.798478,29.7493908 147.892309,29.268463 147.943916,28.8134676 C147.981448,28.3679021 148.021326,27.9223366 148.021326,27.9223366 L160.826894,21.3968066 C160.826894,21.3968066 160.822203,21.8918793 160.815166,22.391667 C160.798745,22.9008847 160.730718,23.4360348 160.730718,23.4360348 L147.798478,29.7493908 Z"
                      id="Fill-138"
                    />
                    <path
                      d="M147.179898,33.0817017 C147.179898,33.0817017 147.297187,32.577199 147.414475,32.0750538 C147.494232,31.5894111 147.571642,31.1108408 147.571642,31.1108408 L160.581292,24.9648665 C160.581292,24.9648665 160.529685,25.5047315 160.475732,26.0493115 C160.379556,26.6174664 160.283379,27.1879788 160.283379,27.1879788 L147.179898,33.0817017 Z"
                      id="Fill-140"
                    />
                    <path
                      d="M146.267158,36.6582485 C146.267158,36.6582485 146.429017,36.1183835 146.593221,35.5785185 C146.712855,35.0598709 146.837181,34.5435807 146.837181,34.5435807 L159.994615,28.8408144 C159.994615,28.8408144 159.891401,29.4301867 159.785841,30.019559 C159.635712,30.6301487 159.483236,31.2478109 159.483236,31.2478109 L146.267158,36.6582485 Z"
                      id="Fill-142"
                    />
                    <path
                      d="M145.047123,40.4696013 L145.462324,39.3238615 L145.797769,38.2181991 L159.046688,33.027008 C159.046688,33.027008 158.88483,33.658815 158.725318,34.2929796 C158.521235,34.9483616 158.314807,35.6084586 158.314807,35.6084586 L145.047123,40.4696013 Z"
                      id="Fill-144"
                    />
                    <path
                      d="M143.51463,44.5077445 C143.51463,44.5077445 143.767973,43.9018698 144.018971,43.2983525 C144.258239,42.7019078 144.452939,42.1219654 144.452939,42.1219654 L157.720624,37.5107166 C157.720624,37.5107166 157.525924,38.177886 157.281964,38.8662729 C157.021584,39.5617322 156.758857,40.264264 156.758857,40.264264 L143.51463,44.5077445 Z"
                      id="Fill-146"
                    />
                    <path
                      d="M141.659124,48.7575902 C141.659124,48.7575902 141.957037,48.1210681 142.25495,47.489261 C142.552863,46.8598114 142.787441,46.2515792 142.787441,46.2515792 L156.003519,42.2839249 C156.003519,42.2839249 155.759558,42.9935292 155.442879,43.7243508 C155.123854,44.4598874 154.807175,45.1977815 154.807175,45.1977815 L141.659124,48.7575902 Z"
                      id="Fill-148"
                    />
                    <path
                      d="M139.479433,53.2009858 C139.479433,53.2009858 139.824262,52.5408888 140.16909,51.8807919 C140.349715,51.5507434 140.50219,51.2277674 140.612441,50.9873035 C140.725038,50.7444821 140.800103,50.5841728 140.800103,50.5841728 L153.882472,47.3308378 C153.882472,47.3308378 153.802716,47.5194369 153.680735,47.8023356 C153.561101,48.0828768 153.394551,48.4624326 153.199852,48.8490608 C152.822183,49.6199597 152.444514,50.3979312 152.444514,50.3979312 L139.479433,53.2009858 Z"
                      id="Fill-150"
                    />
                    <path
                      d="M136.974384,57.8240221 C136.974384,57.8240221 137.366127,57.1403502 137.757871,56.4566783 C137.957262,56.1124849 138.142578,55.775364 138.26925,55.5231126 C138.398267,55.2732188 138.487406,55.1081945 138.487406,55.1081945 L151.353964,52.6328309 C151.353964,52.6328309 151.257788,52.8285025 151.11235,53.1255461 C150.976295,53.4202323 150.767521,53.818648 150.544673,54.2217786 C150.10836,55.0256824 149.674392,55.8319437 149.674392,55.8319437 L136.974384,57.8240221 Z"
                      id="Fill-152"
                    />
                    <polygon
                      id="Fill-154"
                      points="135.393803 60.5888854 136.974853 57.8235506 149.672515 55.8314722 147.901458 59.0989522"
                    />
                    <polygon
                      id="Fill-156"
                      points="132.379251 65.4467275 134.145617 62.6012381 146.489068 61.4790733 144.476396 64.8573552"
                    />
                    <polygon
                      id="Fill-158"
                      points="129.05412 70.417022 131.003456 67.5055228 142.896519 67.3074937 140.651615 70.7730028"
                    />
                    <polygon
                      id="Fill-160"
                      points="125.433421 75.4660565 127.553999 72.5097651 138.912226 73.2712341 136.442128 76.8051104"
                    />
                    <polygon
                      id="Fill-162"
                      points="121.533341 80.5653056 123.815777 77.5807243 134.550029 79.3370537 131.871157 82.9110073"
                    />
                    <polygon
                      id="Fill-164"
                      points="117.373349 85.6810571 119.803569 82.6894033 129.836435 85.4570956 126.96521 89.0451942"
                    />
                    <polygon
                      id="Fill-166"
                      points="112.979484 90.7781844 115.545759 87.7983181 124.799828 91.5868032 121.750325 95.1583993"
                    />
                    <polygon
                      id="Fill-168"
                      points="108.378488 95.8199108 111.066742 92.8754068 119.476334 97.6728973 116.27201 101.199701"
                    />
                    <polygon
                      id="Fill-170"
                      points="103.602262 100.772053 106.39373 97.8841283 113.909583 103.671764 110.573896 107.125486"
                    />
                    <polygon
                      id="Fill-172"
                      points="98.690685 105.599955 101.564255 102.792185 108.134762 109.539319 104.698206 112.891669"
                    />
                    <polygon
                      id="Fill-174"
                      points="93.6761288 110.268726 96.6083434 107.562329 102.203009 115.228883 98.689043 118.456286"
                    />
                    <polygon
                      id="Fill-176"
                      points="88.5928414 114.746777 91.5625884 112.155896 96.1532637 120.701794 92.5900364 123.77596"
                    />
                    <path
                      d="M85.6069085,117.253731 C85.6069085,117.253731 86.3552097,116.638426 87.1058567,116.023121 C87.8588494,115.412532 88.593076,114.74772 88.593076,114.74772 L92.590271,123.776903 C92.590271,123.776903 91.7106066,124.561947 90.8051387,125.285696 C89.9067081,126.011803 89.0059318,126.740267 89.0059318,126.740267 L85.6069085,117.253731 Z"
                      id="Fill-178"
                    />
                    <path
                      d="M80.4858542,121.374858 L81.9848024,120.214973 C82.7354493,119.637388 83.4743674,119.007939 83.4743674,119.007939 L86.448806,128.810379 C86.448806,128.810379 85.5621043,129.55063 84.6613279,130.234302 C83.7628974,130.915616 82.8668126,131.594573 82.8668126,131.594573 L80.4858542,121.374858 Z"
                      id="Fill-180"
                    />
                    <path
                      d="M75.3854427,125.231003 C75.3854427,125.231003 76.1267066,124.693495 76.872662,124.155988 C77.6186174,123.611408 78.3575355,123.022035 78.3575355,123.022035 L80.3186007,133.527007 C80.3186007,133.527007 79.431899,134.217751 78.5405057,134.851916 C77.6491125,135.481366 76.7624107,136.108458 76.7624107,136.108458 L75.3854427,125.231003 Z"
                      id="Fill-182"
                    />
                    <path
                      d="M70.3399223,128.811086 C70.3399223,128.811086 71.0718031,128.316013 71.8060296,127.816225 C72.5402562,127.316438 73.2744827,126.764785 73.2744827,126.764785 L74.2385949,137.894492 C74.2385949,137.894492 73.3612763,138.531014 72.4839577,139.110956 C71.6089848,139.686183 70.7363577,140.259053 70.7363577,140.259053 L70.3399223,128.811086 Z"
                      id="Fill-184"
                    />
                    <path
                      d="M65.3790842,132.091768 C65.3790842,132.091768 66.0968904,131.641487 66.8146965,131.186492 C67.5348484,130.733854 68.2620377,130.222279 68.2620377,130.222279 L68.2596919,141.884778 C68.2596919,141.884778 67.3987937,142.469435 66.5402412,142.992798 C65.6863803,143.509088 64.8348652,144.025378 64.8348652,144.025378 L65.3790842,132.091768 Z"
                      id="Fill-186"
                    />
                    <path
                      d="M60.5329544,135.066212 C60.5329544,135.066212 61.2296486,134.658366 61.9310343,134.250521 C62.6347658,133.845032 63.3431889,133.37825 63.3431889,133.37825 L62.4189548,145.486314 C62.4189548,145.486314 61.5791685,146.019106 60.7464196,146.476459 C59.9183622,146.933812 59.0949963,147.393523 59.0949963,147.393523 L60.5329544,135.066212 Z"
                      id="Fill-188"
                    />
                    <path
                      d="M55.8299166,137.720745 C55.8299166,137.720745 56.5054988,137.362406 57.1810811,136.999353 C57.521218,136.824899 57.8637007,136.62687 58.1217356,136.473633 C58.3797705,136.320396 58.5533576,136.221381 58.5533576,136.221381 L56.7564964,148.687784 C56.7564964,148.687784 56.55476,148.798586 56.2498097,148.968325 C55.9448594,149.140422 55.5413867,149.359669 55.1426055,149.55534 C54.3450431,149.953756 53.5498264,150.352172 53.5498264,150.352172 L55.8299166,137.720745 Z"
                      id="Fill-190"
                    />
                    <path
                      d="M51.293194,140.05513 C51.293194,140.05513 51.9429728,139.739227 52.5950973,139.425681 C53.2448761,139.12628 53.9157668,138.744366 53.9157668,138.744366 L51.3025771,151.479523 C51.3025771,151.479523 50.5167436,151.899156 49.7543678,152.224489 C48.9919919,152.566325 48.2343077,152.903446 48.2343077,152.903446 L51.293194,140.05513 Z"
                      id="Fill-192"
                    />
                    <path
                      d="M46.9441332,142.065126 C46.9441332,142.065126 47.5657627,141.798729 48.1873922,141.527618 C48.8090217,141.277724 49.454109,140.945318 49.454109,140.945318 L46.0879265,153.864359 C46.0879265,153.864359 45.3372796,154.217982 44.6124361,154.489094 C43.8899384,154.769635 43.1674407,155.052533 43.1674407,155.052533 L46.9441332,142.065126 Z"
                      id="Fill-194"
                    />
                    <path
                      d="M42.79892,143.754738 C42.79892,143.754738 43.3877087,143.533134 43.9811889,143.31153 C44.5699776,143.104071 45.1869156,142.82353 45.1869156,142.82353 L41.1310763,155.8463 C41.1310763,155.8463 40.4203074,156.136271 39.7376878,156.346088 C39.0550683,156.572407 38.3724487,156.801083 38.3724487,156.801083 L42.79892,143.754738 Z"
                      id="Fill-196"
                    />
                    <path
                      d="M38.8723326,145.131512 C38.8723326,145.131512 39.4306263,144.9547 39.98892,144.777888 C40.5472137,144.610507 41.1266193,144.388903 41.1266193,144.388903 L36.4514962,157.435248 C36.4514962,157.435248 35.785297,157.659209 35.1449013,157.817161 C34.5045057,157.989258 33.8664557,158.158997 33.8664557,158.158997 L38.8723326,145.131512 Z"
                      id="Fill-198"
                    />
                    <path
                      d="M35.1763347,146.202048 C35.1763347,146.202048 35.6994418,146.065313 36.2248946,145.933294 C36.4899669,145.862569 36.7550391,145.796559 36.9520839,145.744695 C37.1585118,145.678685 37.2945666,145.638608 37.2945666,145.638608 L32.0658413,158.64016 C32.0658413,158.64016 31.9086746,158.680238 31.6764432,158.741533 C31.4489034,158.788682 31.1486446,158.849977 30.8483858,158.911272 C30.2478682,159.029146 29.654388,159.147021 29.654388,159.147021 L35.1763347,146.202048 Z"
                      id="Fill-200"
                    />
                    <path
                      d="M33.1202657,146.706315 C33.1202657,146.706315 33.6152236,146.61673 34.1359849,146.468208 C34.6544005,146.336189 35.1751618,146.201812 35.1751618,146.201812 L29.6532151,159.146785 C29.6532151,159.146785 29.0644264,159.264659 28.4779835,159.382534 C27.886849,159.514553 27.3285553,159.580563 27.3285553,159.580563 L33.1202657,146.706315 Z"
                      id="Fill-202"
                    />
                    <path
                      d="M29.8054557,147.307239 C29.8054557,147.307239 30.2581896,147.264804 30.7484559,147.161074 C31.2316849,147.064417 31.7172597,146.972475 31.7172597,146.972475 L25.7496163,159.778356 C25.7496163,159.778356 25.2030515,159.846723 24.6588325,159.917448 C24.1122677,159.99996 23.6032352,160.00939 23.6032352,160.00939 L29.8054557,147.307239 Z"
                      id="Fill-204"
                    />
                    <path
                      d="M26.7357788,147.631865 C26.7357788,147.631865 27.1486346,147.638937 27.6037143,147.568213 C28.0517567,147.51399 28.5021449,147.462126 28.5021449,147.462126 L22.149795,160.069978 C22.149795,160.069978 21.6477999,160.093553 21.1481505,160.11477 C20.6438096,160.154847 20.1840383,160.110055 20.1840383,160.110055 L26.7357788,147.631865 Z"
                      id="Fill-206"
                    />
                    <path
                      d="M23.9135808,147.689388 C23.9135808,147.689388 24.0097574,147.69646 24.1551953,147.70589 C24.2982874,147.717677 24.497678,147.722392 24.7064516,147.708247 C25.1193075,147.691745 25.5345091,147.675243 25.5345091,147.675243 L18.8584427,160.044988 C18.8584427,160.044988 18.3986714,160.021413 17.9459375,160.002553 C17.7113603,159.997839 17.4955493,159.971906 17.3383826,159.941259 C17.1788701,159.917684 17.0709646,159.903539 17.0709646,159.903539 L23.9135808,147.689388 Z"
                      id="Fill-208"
                    />
                    <path
                      d="M21.3362814,147.500553 C21.3362814,147.500553 21.6787641,147.573635 22.0564333,147.592495 C22.4341026,147.611355 22.8141176,147.632572 22.8141176,147.632572 L15.8706332,159.721777 C15.8706332,159.721777 15.4554316,159.658124 15.0425758,159.594472 C14.6320657,159.533177 14.2614338,159.410588 14.2614338,159.410588 L21.3362814,147.500553 Z"
                      id="Fill-210"
                    />
                    <path
                      d="M19.0055226,147.07479 C19.0055226,147.07479 19.3151644,147.176162 19.6506098,147.237457 C19.9930925,147.291679 20.3379209,147.343544 20.3379209,147.343544 L13.1833171,159.116845 L12.4397075,158.914101 C12.0784586,158.805656 11.7477048,158.652419 11.7477048,158.652419 L19.0055226,147.07479 Z"
                      id="Fill-212"
                    />
                    <path
                      d="M16.9152054,146.427659 C16.9152054,146.427659 17.2013895,146.543176 17.4875737,146.658693 L18.1068574,146.828432 L10.7880496,158.259897 C10.7880496,158.259897 10.4572958,158.120806 10.1288877,157.984071 C9.82628316,157.814332 9.52133284,157.649308 9.52133284,157.649308 L16.9152054,146.427659 Z"
                      id="Fill-214"
                    />
                    <path
                      d="M15.0596999,145.578256 L15.5616951,145.868227 C15.8384961,145.983744 16.1152972,146.096904 16.1152972,146.096904 L8.67920078,157.1606 C8.67920078,157.1606 8.38832509,156.990861 8.09979516,156.823479 C7.83706873,156.620735 7.57668806,156.420349 7.57668806,156.420349 L15.0596999,145.578256 Z"
                      id="Fill-216"
                    />
                    <path
                      d="M13.4331418,144.540018 C13.4331418,144.540018 13.6489528,144.709757 13.8694553,144.884211 C14.1110698,145.025661 14.3550301,145.169467 14.3550301,145.169467 L6.84386897,155.846536 C6.84386897,155.846536 6.59287139,155.646149 6.34187382,155.44812 C6.1190255,155.214729 5.89852296,154.986052 5.89852296,154.986052 L13.4331418,144.540018 Z"
                      id="Fill-218"
                    />
                    <path
                      d="M12.0301357,143.324261 C12.0301357,143.324261 12.2154517,143.519932 12.4007677,143.717961 C12.6095413,143.885343 12.8206608,144.055082 12.8206608,144.055082 L5.27431309,154.333735 C5.27431309,154.333735 5.06084787,154.105059 4.84972841,153.87874 C4.66441244,153.619416 4.47909647,153.367164 4.47909647,153.367164 L12.0301357,143.324261 Z"
                      id="Fill-220"
                    />
                    <path
                      d="M10.8389528,141.949844 C10.8389528,141.949844 10.9937738,142.166733 11.1485947,142.388337 C11.3268733,142.579294 11.505152,142.774966 11.505152,142.774966 L3.95645853,152.641058 C3.95645853,152.641058 3.78052565,152.388806 3.60693854,152.136555 C3.45446337,151.856014 3.30667975,151.57783 3.30667975,151.57783 L10.8389528,141.949844 Z"
                      id="Fill-222"
                    />
                    <path
                      d="M9.85490158,140.428085 C9.85490158,140.428085 9.97922748,140.666192 10.1058992,140.904298 C10.2536828,141.121187 10.4014664,141.335718 10.4014664,141.335718 L2.88326795,150.791608 C2.88326795,150.791608 2.74017588,150.513424 2.59942957,150.239955 C2.48214099,149.938196 2.3648524,149.638795 2.3648524,149.638795 L9.85490158,140.428085 Z"
                      id="Fill-224"
                    />
                    <polygon
                      id="Fill-226"
                      points="9.35900543 139.493341 9.85396327 140.426906 2.36625986 149.639974 1.90883437 148.463587"
                    />
                    <polygon
                      id="Fill-228"
                      points="8.68201571 137.769073 9.06672227 138.775721 1.64704625 147.569156 1.31394666 146.319686"
                    />
                    <polygon
                      id="Fill-230"
                      points="8.18729245 135.929524 8.46643928 137.002182 1.14059413 145.380698 0.922437353 144.067577"
                    />
                    <polygon
                      id="Fill-232"
                      points="7.86545256 133.990961 8.04138544 135.122556 0.828137329 143.088512 0.722577601 141.721168"
                    />
                    <polygon
                      id="Fill-234"
                      points="7.70500178 131.965171 7.78475802 133.150988 0.698181575 140.713813 0.700527346 139.294604"
                    />
                    <polygon
                      id="Fill-236"
                      points="7.69819904 129.860876 7.68881595 131.091485 0.742985815 138.26061 0.839162457 136.801324"
                    />
                    <polygon
                      id="Fill-238"
                      points="7.83448838 127.692221 7.73596596 128.965266 0.94261099 135.747762 1.1326185 134.250756"
                    />
                    <polygon
                      id="Fill-240"
                      points="8.10472128 125.465809 7.92644263 126.776573 1.29260013 133.179513 1.56705543 131.654218"
                    />
                    <polygon
                      id="Fill-242"
                      points="8.50232959 123.191303 8.24898624 124.530357 1.78169354 130.567887 2.13825085 129.016659"
                    />
                    <polygon
                      id="Fill-244"
                      points="9.02215261 120.872948 8.69609034 122.237934 2.40473052 127.912411 2.83400675 126.339966"
                    />
                    <polygon
                      id="Fill-246"
                      points="9.65668387 118.517817 9.26259421 119.906378 3.15185882 125.229588 3.64916243 123.640641"
                    />
                    <polygon
                      id="Fill-248"
                      points="10.3991206 116.130387 9.94169513 117.537808 4.01392994 122.516825 4.57691515 120.918448"
                    />
                    <path
                      d="M10.8767198,114.728153 C10.8767198,114.728153 10.7500481,115.081776 10.6233764,115.440114 C10.5107794,115.784308 10.3981823,116.130859 10.3981823,116.130859 L4.57597685,120.918919 C4.57597685,120.918919 4.71672315,120.522861 4.85512368,120.131518 C5.00994462,119.72603 5.16476555,119.322899 5.16476555,119.322899 L10.8767198,114.728153 Z"
                      id="Fill-250"
                    />
                    <path
                      d="M11.7770269,112.301825 C11.7770269,112.301825 11.6362806,112.660163 11.4931886,113.020859 C11.3688627,113.36741 11.242191,113.718676 11.242191,113.718676 L5.60764726,118.179045 L5.91494336,117.386929 C6.08383892,116.981441 6.25273449,116.57831 6.25273449,116.57831 L11.7770269,112.301825 Z"
                      id="Fill-252"
                    />
                    <path
                      d="M12.7699921,109.856637 C12.7699921,109.856637 12.6151712,110.214975 12.4603503,110.580386 C12.3219497,110.929295 12.1812034,111.282918 12.1812034,111.282918 L6.73432143,115.429741 C6.73432143,115.429741 6.90321699,115.031326 7.06976679,114.635268 C7.25273698,114.229779 7.43336141,113.826649 7.43336141,113.826649 L12.7699921,109.856637 Z"
                      id="Fill-254"
                    />
                    <path
                      d="M13.8490471,107.398012 C13.8490471,107.398012 13.6824973,107.761065 13.5136018,108.124118 C13.3611266,108.477742 13.2109972,108.833723 13.2109972,108.833723 L7.95177696,112.67643 C7.95177696,112.67643 8.13240139,112.275657 8.31302581,111.879599 C8.50772487,111.47411 8.70242392,111.068622 8.70242392,111.068622 L13.8490471,107.398012 Z"
                      id="Fill-256"
                    />
                    <path
                      d="M15.0104387,104.929956 C15.0104387,104.929956 14.8298143,105.29301 14.6515356,105.65842 C14.4873316,106.012044 14.3231276,106.370382 14.3231276,106.370382 L9.25391486,109.920761 C9.25391486,109.920761 9.44626814,109.519988 9.63627565,109.123929 C9.84504934,108.716084 10.0491315,108.315311 10.0491315,108.315311 L15.0104387,104.929956 Z"
                      id="Fill-258"
                    />
                    <path
                      d="M16.2461913,102.455064 C16.2461913,102.455064 16.0561838,102.818117 15.8661763,103.185886 C15.6925891,103.541867 15.5143105,103.900205 15.5143105,103.900205 L10.6327595,107.167685 C10.6327595,107.167685 10.8368416,106.766912 11.0409238,106.368496 C11.2567348,105.965365 11.4725458,105.559877 11.4725458,105.559877 L16.2461913,102.455064 Z"
                      id="Fill-260"
                    />
                    <path
                      d="M17.5532553,99.9801719 C17.5532553,99.9801719 17.3562105,100.340868 17.1568199,100.708636 C16.959775,101.071689 16.7791506,101.422955 16.7791506,101.422955 L12.0852614,104.419324 C12.0852614,104.419324 12.2916893,104.025623 12.5145376,103.622493 C12.7420774,103.219362 12.9649258,102.816231 12.9649258,102.816231 L17.5532553,99.9801719 Z"
                      id="Fill-262"
                    />
                    <path
                      d="M18.9264701,97.5029223 C18.9264701,97.5029223 18.7200422,97.8636181 18.5112685,98.2313865 C18.3024948,98.5944398 18.114833,98.9480632 18.114833,98.9480632 L13.603914,101.678036 C13.603914,101.678036 13.8173792,101.286692 14.0543022,100.885919 C14.2888793,100.482789 14.5234565,100.082015 14.5234565,100.082015 L18.9264701,97.5029223 Z"
                      id="Fill-264"
                    />
                    <path
                      d="M20.363959,95.0303877 C20.363959,95.0303877 20.148148,95.3910835 19.932337,95.7564943 C19.81974,95.938021 19.716526,96.1171902 19.6414613,96.2515671 C19.5663966,96.3835864 19.5147896,96.473171 19.5147896,96.473171 L15.1868408,98.9485347 C15.1868408,98.9485347 15.245485,98.8495201 15.3299328,98.7033558 C15.4167264,98.554834 15.5316692,98.3568049 15.6583409,98.1564183 C15.8999554,97.7580026 16.1415699,97.359587 16.1415699,97.359587 L20.363959,95.0303877 Z"
                      id="Fill-266"
                    />
                    <path
                      d="M21.8586848,92.5623322 C21.8586848,92.5623322 21.6358364,92.9230281 21.4106423,93.2860814 C21.1784109,93.6514922 20.9766746,94.0027581 20.9766746,94.0027581 L16.8293501,96.2329429 C16.8293501,96.2329429 17.0615815,95.8439572 17.3172707,95.443184 C17.5682682,95.0471258 17.8192658,94.6510677 17.8192658,94.6510677 L21.8586848,92.5623322 Z"
                      id="Fill-268"
                    />
                    <path
                      d="M23.4106473,90.103471 C23.4106473,90.103471 23.1784159,90.4594519 22.9485303,90.8225052 C22.7092616,91.1855586 22.4934506,91.5391819 22.4934506,91.5391819 L18.5267506,93.5289028 C18.5267506,93.5289028 18.7683651,93.1422746 19.0334373,92.7438589 C19.2914722,92.3501582 19.5471613,91.958815 19.5471613,91.958815 L23.4106473,90.103471 Z"
                      id="Fill-270"
                    />
                    <path
                      d="M25.013044,87.6540398 C25.013044,87.6540398 24.7761211,88.0100207 24.5368524,88.368359 C24.2928921,88.7290549 24.0653522,89.0826782 24.0653522,89.0826782 L20.2769309,90.8437226 C20.2769309,90.8437226 20.5302742,90.4547369 20.800038,90.0610362 C21.0627644,89.669693 21.3278366,89.2807073 21.3278366,89.2807073 L25.013044,87.6540398 Z"
                      id="Fill-272"
                    />
                    <path
                      d="M25.9649582,86.2334168 C25.9649582,86.2334168 25.9039681,86.3206439 25.812483,86.4573783 C25.7233437,86.5870402 25.6060551,86.7662094 25.4864208,86.9430211 C25.2494978,87.2966444 25.0125749,87.6549828 25.0125749,87.6549828 L21.3273675,89.2816503 C21.3273675,89.2816503 21.5900939,88.8926646 21.8528203,88.5060364 C21.9841835,88.3127223 22.1155468,88.1194082 22.2117234,87.9732438 C22.3149374,87.829437 22.3829647,87.7327799 22.3829647,87.7327799 L25.9649582,86.2334168 Z"
                      id="Fill-274"
                    />
                    <path
                      d="M27.6464074,83.8000165 C27.6464074,83.8000165 27.393064,84.1559974 27.1537953,84.5072632 C26.9121808,84.8608866 26.6658748,85.2168675 26.6658748,85.2168675 L23.1566003,86.621931 C23.1566003,86.621931 23.426364,86.2376603 23.693782,85.8510321 C23.9588542,85.4691188 24.238001,85.0824906 24.238001,85.0824906 L27.6464074,83.8000165 Z"
                      id="Fill-276"
                    />
                    <path
                      d="M29.374772,81.3826471 C29.374772,81.3826471 29.1120456,81.7362705 28.8657395,82.0875364 C28.6170877,82.4364448 28.3660901,82.7900681 28.3660901,82.7900681 L25.0304027,83.9853151 C25.0304027,83.9853151 25.3072038,83.5986869 25.5816591,83.2167737 C25.8514228,82.8372179 26.1399528,82.4529472 26.1399528,82.4529472 L29.374772,81.3826471 Z"
                      id="Fill-278"
                    />
                    <path
                      d="M31.1444222,78.9815444 C31.1444222,78.9815444 30.8746585,79.3328103 30.6236609,79.6793612 C30.3679718,80.0282696 30.1122826,80.3795355 30.1122826,80.3795355 L26.9478366,81.3626084 C26.9478366,81.3626084 27.2293292,80.9830527 27.5108218,80.6034969 C27.7876228,80.2239412 28.0831901,79.8443854 28.0831901,79.8443854 L31.1444222,78.9815444 Z"
                      id="Fill-280"
                    />
                    <path
                      d="M32.9565309,76.5941151 C32.9565309,76.5941151 32.6797298,76.9430235 32.4216949,77.2895744 C32.1613143,77.6337678 31.8985878,77.9850337 31.8985878,77.9850337 L28.9077288,78.7630051 L29.4824429,78.0086086 C29.7639355,77.6337678 30.0665401,77.2542121 30.0665401,77.2542121 L32.9565309,76.5941151 Z"
                      id="Fill-282"
                    />
                    <path
                      d="M34.8085177,74.2250742 C34.8085177,74.2250742 34.7404903,74.3099438 34.6372763,74.4419632 C34.5317166,74.5692676 34.3933161,74.7437218 34.2619529,74.9134611 L33.7271169,75.6042054 L30.9051535,76.1817902 C30.9051535,76.1817902 31.2007207,75.8093069 31.4915964,75.4368237 C31.6370343,75.250582 31.7871637,75.0619829 31.9021065,74.922891 C32.0147035,74.7814417 32.0874224,74.6871421 32.0874224,74.6871421 L34.8085177,74.2250742 Z"
                      id="Fill-284"
                    />
                    <path
                      d="M36.698506,71.8744218 C36.698506,71.8744218 36.4123218,72.2186152 36.1402123,72.5580936 C35.8681028,72.902287 35.5936475,73.2417655 35.5936475,73.2417655 L32.9452712,73.6236787 C32.9452712,73.6236787 33.2431842,73.2535529 33.5410972,72.8857846 C33.8390102,72.5133013 34.1486521,72.1431755 34.1486521,72.1431755 L36.698506,71.8744218 Z"
                      id="Fill-286"
                    />
                    <path
                      d="M38.6239154,69.5423935 C38.6239154,69.5423935 38.3330397,69.8818719 38.0562386,70.2213504 C37.7770918,70.5608288 37.497945,70.9003072 37.497945,70.9003072 L35.0184642,71.0889064 C35.0184642,71.0889064 35.3234146,70.7211381 35.6260191,70.3557272 C35.9309694,69.9856014 36.2453029,69.6201906 36.2453029,69.6201906 L38.6239154,69.5423935 Z"
                      id="Fill-288"
                    />
                    <path
                      d="M40.5859189,67.2308753 C40.5859189,67.2308753 40.2926974,67.5679963 40.0065133,67.9027598 C39.7226749,68.2398807 39.4388365,68.5770017 39.4388365,68.5770017 L37.1282513,68.5770017 C37.1282513,68.5770017 37.4378932,68.2115908 37.7475351,67.8485375 C38.0548312,67.4831267 38.3762019,67.1224308 38.3762019,67.1224308 L40.5859189,67.2308753 Z"
                      id="Fill-290"
                    />
                    <path
                      d="M42.5800595,64.9401031 C42.5800595,64.9401031 42.2821464,65.2725091 41.9912708,65.6049151 L41.4142109,66.2720845 L39.2748671,66.0858429 C39.2748671,66.0858429 39.5892005,65.7275045 39.9011881,65.3668087 C40.2155215,65.0061128 40.539238,64.6477745 40.539238,64.6477745 L42.5800595,64.9401031 Z"
                      id="Fill-292"
                    />
                    <path
                      d="M44.60751,62.6700768 C44.60751,62.6700768 44.3049054,63.0001253 44.011684,63.3278163 L43.4228952,63.9926282 L41.452447,63.6225024 C41.452447,63.6225024 41.7714719,63.2665216 42.0904969,62.9081832 C42.4071761,62.5498448 42.7355841,62.1962215 42.7355841,62.1962215 L44.60751,62.6700768 Z"
                      id="Fill-294"
                    />
                    <path
                      d="M46.6656901,60.4231539 C46.6656901,60.4231539 46.358394,60.7484874 46.060481,61.0738209 C45.762568,61.4038694 45.4623092,61.7315604 45.4623092,61.7315604 L43.6607565,61.1822654 C43.6607565,61.1822654 43.984473,60.828642 44.3081895,60.4750186 C44.6295602,60.1213953 44.9626598,59.7724869 44.9626598,59.7724869 L46.6656901,60.4231539 Z"
                      id="Fill-296"
                    />
                    <polygon
                      id="Fill-298"
                      points="47.8810344 59.1222913 46.6659247 60.4236254 44.9628944 59.7706009 46.2765266 58.3702523"
                    />
                    <polygon
                      id="Fill-300"
                      points="49.9884758 56.9100235 48.7545998 58.1972126 47.2181194 57.3720914 48.5505177 55.9835303"
                    />
                    <polygon
                      id="Fill-302"
                      points="52.1245355 54.722745 50.8742392 55.9934317 49.5043085 54.9985713 50.8531272 53.6265126"
                    />
                    <polygon
                      id="Fill-304"
                      points="54.2871025 52.5588057 53.0203858 53.8153475 51.8170049 52.6507478 53.182244 51.297549"
                    />
                    <polygon
                      id="Fill-306"
                      points="56.4759421 50.4198558 55.1951507 51.6598951 54.1583196 50.3302712 55.5399792 48.9935749"
                    />
                    <polygon
                      id="Fill-308"
                      points="58.6889432 48.3110817 57.3940772 49.5346186 56.5284874 48.037613 57.9242216 46.7127041"
                    />
                    <polygon
                      id="Fill-310"
                      points="60.9258711 46.2298903 59.6169305 47.4369248 58.9249278 45.7701799 60.3394282 44.4641309"
                    />
                    <polygon
                      id="Fill-312"
                      points="63.1881334 44.178639 61.8651181 45.3668135 61.3513941 43.5303295 62.7799691 42.2431404"
                    />
                    <polygon
                      id="Fill-314"
                      points="65.4719768 42.157092 64.1348869 43.3264066 63.804133 41.3201834 65.2467827 40.0494967"
                    />
                    <polygon
                      id="Fill-316"
                      points="67.7788087 40.1680784 66.4299899 41.3185331 66.2822063 39.1402131 67.7389306 37.8907439"
                    />
                    <polygon
                      id="Fill-318"
                      points="70.1086292 38.2111266 68.7457358 39.3427214 68.7879597 36.9946622 70.2587586 35.7640529"
                    />
                    <polygon
                      id="Fill-320"
                      points="72.457685 36.2911875 71.0854085 37.4015649 71.3152942 34.8814089 72.8001677 33.6696595"
                    />
                    <path
                      d="M73.8379371,35.183639 C73.8379371,35.183639 73.7511436,35.2520062 73.6221261,35.3533783 C73.4931087,35.4547503 73.3218673,35.5914847 73.1482802,35.732934 C72.8034518,36.0134752 72.4586233,36.291659 72.4586233,36.291659 L72.801106,33.670131 L73.5470614,33.0618988 C73.7370689,32.908662 73.9223849,32.7577827 74.0631312,32.6493382 C74.2038775,32.5361787 74.2953626,32.4630965 74.2953626,32.4630965 L73.8379371,35.183639 Z"
                      id="Fill-322"
                    />
                    <path
                      d="M76.21913,33.3212226 C76.21913,33.3212226 76.1323365,33.3872323 76.003319,33.4862468 C75.8719558,33.5852614 75.6983687,33.7172808 75.5247816,33.8587301 L74.8280874,34.4056676 L75.3676149,31.6120429 C75.3676149,31.6120429 75.7452841,31.3126418 76.1229534,31.0132407 C76.3129609,30.8623614 76.5006226,30.7185546 76.6413689,30.6101101 C76.7821152,30.4993081 76.8782919,30.4262259 76.8782919,30.4262259 L76.21913,33.3212226 Z"
                      id="Fill-324"
                    />
                    <path
                      d="M78.6200274,31.495583 C78.6200274,31.495583 78.2728532,31.7501918 77.9186416,32.0213031 C77.5667759,32.2900568 77.2172559,32.5588106 77.2172559,32.5588106 L77.9585198,29.5907317 C77.9585198,29.5907317 78.3385348,29.2984031 78.7208956,29.0037169 C79.1032564,28.7090308 79.4809256,28.4284896 79.4809256,28.4284896 L78.6200274,31.495583 Z"
                      id="Fill-326"
                    />
                    <path
                      d="M81.0378143,29.7111994 C81.0378143,29.7111994 80.6859486,29.9610933 80.331737,30.2227746 C79.9775255,30.4868134 79.623314,30.7484947 79.623314,30.7484947 L80.5733515,27.6083191 C80.5733515,27.6083191 80.9557123,27.3207054 81.3404189,27.0307342 C81.7251254,26.7454781 82.1074862,26.4696518 82.1074862,26.4696518 L81.0378143,29.7111994 Z"
                      id="Fill-328"
                    />
                    <path
                      d="M83.4717871,27.9709009 C83.4717871,27.9709009 83.1175756,28.2184373 82.763364,28.4659736 C82.4044609,28.7252975 82.0502494,28.9822638 82.0502494,28.9822638 L83.2090607,25.6652765 C83.2090607,25.6652765 83.596113,25.3823778 83.9831653,25.0994791 C84.3678719,24.8260104 84.7549242,24.5501841 84.7549242,24.5501841 L83.4717871,27.9709009 Z"
                      id="Fill-330"
                    />
                    <path
                      d="M85.9207728,26.2739802 L85.2076582,26.754908 C84.8487551,27.0071594 84.489852,27.2570532 84.489852,27.2570532 L85.86682,23.7656117 C85.86682,23.7656117 86.2562181,23.487428 86.647962,23.2116018 C87.0350144,22.9452055 87.4244125,22.6764517 87.4244125,22.6764517 L85.9207728,26.2739802 Z"
                      id="Fill-332"
                    />
                    <path
                      d="M88.3845369,24.624445 L87.6667307,25.0912279 L86.9465788,25.5792282 L88.5440493,21.9086175 C88.5440493,21.9086175 88.9357932,21.6398638 89.3298829,21.3687525 L90.1133706,20.8477474 L88.3845369,24.624445 Z"
                      id="Fill-334"
                    />
                    <path
                      d="M90.8586223,23.0244171 C90.8586223,23.0244171 90.4997192,23.2530936 90.1408162,23.4770551 C89.7819131,23.708089 89.4136269,23.9509104 89.4136269,23.9509104 L91.2409831,20.0987731 C91.2409831,20.0987731 91.6397643,19.8300193 92.033854,19.5754105 C92.4255978,19.3231591 92.8220333,19.0685503 92.8220333,19.0685503 L90.8586223,23.0244171 Z"
                      id="Fill-336"
                    />
                    <path
                      d="M93.3451404,21.4774327 C93.3451404,21.4774327 92.9815457,21.6966792 92.6226427,21.9182832 C92.2637396,22.1328147 91.8954534,22.3709211 91.8954534,22.3709211 L93.9573868,18.3372572 C93.9573868,18.3372572 94.3608595,18.0755759 94.7549492,17.830397 C95.1513846,17.5852181 95.54782,17.3400393 95.54782,17.3400393 L93.3451404,21.4774327 Z"
                      id="Fill-338"
                    />
                    <path
                      d="M95.8386957,19.9877353 C95.8386957,19.9877353 95.4751011,20.1975519 95.1138523,20.4097259 C94.9355736,20.5110979 94.7526034,20.6218999 94.6142029,20.7067695 C94.4758023,20.7892817 94.3843172,20.8458614 94.3843172,20.8458614 L96.6902109,16.6306708 C96.6902109,16.6306708 96.7910791,16.5670186 96.9412084,16.4750765 C97.0936836,16.3784194 97.29542,16.25583 97.4924648,16.140313 C97.891246,15.9022066 98.2900272,15.6641002 98.2900272,15.6641002 L95.8386957,19.9877353 Z"
                      id="Fill-340"
                    />
                    <path
                      d="M98.3378809,18.5569752 C98.3378809,18.5569752 97.9742863,18.7597192 97.6106917,18.9624633 C97.2541344,19.1557774 96.8811567,19.3797389 96.8811567,19.3797389 L99.4403937,14.9759491 C99.4403937,14.9759491 99.8509037,14.7284127 100.244993,14.5068088 C100.643775,14.2781323 101.047247,14.0447409 101.047247,14.0447409 L98.3378809,18.5569752 Z"
                      id="Fill-342"
                    />
                    <path
                      d="M100.840585,17.1905744 C100.840585,17.1905744 100.47699,17.3838886 100.113396,17.5772027 C99.7568383,17.7634443 99.3838606,17.9732608 99.3838606,17.9732608 L102.203478,13.3832294 C102.203478,13.3832294 102.613988,13.1474805 103.012769,12.9305915 C103.413896,12.711345 103.817369,12.489741 103.817369,12.489741 L100.840585,17.1905744 Z"
                      id="Fill-344"
                    />
                    <path
                      d="M102.307865,16.4147248 C102.307865,16.4147248 101.941925,16.6033239 101.573638,16.801353 C101.205352,16.9970246 100.841758,17.1903387 100.841758,17.1903387 L103.818542,12.4895053 C103.818542,12.4895053 104.222015,12.2702588 104.630179,12.0462973 C105.038343,11.8199784 105.444162,11.6030894 105.444162,11.6030894 L102.307865,16.4147248 Z"
                      id="Fill-346"
                    />
                    <path
                      d="M104.809396,15.1588903 C104.809396,15.1588903 104.717911,15.2013251 104.584202,15.2673348 C104.445801,15.3380594 104.260485,15.4300015 104.077515,15.5243011 C103.709229,15.7081852 103.343289,15.8920694 103.343289,15.8920694 L106.596874,11.0026369 C106.596874,11.0026369 107.005038,10.7881053 107.413203,10.5759313 C107.617285,10.4698443 107.823713,10.3637573 107.978534,10.2836027 L108.229531,10.1562982 L104.809396,15.1588903 Z"
                      id="Fill-348"
                    />
                    <path
                      d="M107.307643,13.9777882 C107.307643,13.9777882 107.216158,14.0178655 107.084795,14.0768027 C106.944048,14.1428124 106.761078,14.2300395 106.575762,14.3196241 C106.209822,14.4940783 105.843881,14.666175 105.843881,14.666175 L109.385997,9.58342838 C109.385997,9.58342838 109.794161,9.3830418 110.202325,9.18029773 C110.408753,9.0789257 110.615181,8.97755366 110.770002,8.89975652 C110.920131,8.82903184 111.021,8.78423955 111.021,8.78423955 L107.307643,13.9777882 Z"
                      id="Fill-350"
                    />
                    <path
                      d="M109.795334,12.878491 C109.795334,12.878491 109.441122,13.0246553 109.068145,13.1943945 C108.702204,13.3570613 108.33861,13.519728 108.33861,13.519728 L112.176292,8.24366728 C112.176292,8.24366728 112.584456,8.05506815 112.994967,7.86411153 C113.412514,7.66372495 113.811295,7.49162824 113.811295,7.49162824 L109.795334,12.878491 Z"
                      id="Fill-352"
                    />
                    <path
                      d="M112.271765,11.8642992 C112.271765,11.8642992 111.919899,11.9963185 111.549267,12.1542703 C111.185673,12.3051496 110.822078,12.4536714 110.822078,12.4536714 L114.969403,6.98665406 C114.969403,6.98665406 115.377567,6.80748488 115.788077,6.6283157 C116.205624,6.44207406 116.604406,6.28412228 116.604406,6.28412228 L112.271765,11.8642992 Z"
                      id="Fill-354"
                    />
                    <path
                      d="M114.729665,10.9446426 C114.729665,10.9446426 114.382491,11.0601596 114.014204,11.2039664 C113.652956,11.3430583 113.291707,11.4797927 113.291707,11.4797927 L117.758056,5.81710368 C117.758056,5.81710368 118.16622,5.65207944 118.57673,5.48705519 C118.991932,5.312601 119.388367,5.16879416 119.388367,5.16879416 L114.729665,10.9446426 Z"
                      id="Fill-356"
                    />
                    <path
                      d="M117.167156,10.1216432 C117.167156,10.1216432 116.824673,10.2206577 116.456387,10.3526771 C116.097484,10.4752665 115.740927,10.597856 115.740927,10.597856 L120.53803,4.74421036 C120.53803,4.74421036 120.943849,4.59333105 121.352013,4.44245174 C121.767215,4.28449997 122.161304,4.15483806 122.161304,4.15483806 L117.167156,10.1216432 Z"
                      id="Fill-358"
                    />
                    <path
                      d="M119.575795,9.40331621 C119.575795,9.40331621 119.235658,9.48818582 118.874409,9.60370279 C118.517852,9.71214729 118.16364,9.8182343 118.16364,9.8182343 L123.303226,3.77363206 C123.303226,3.77363206 123.706699,3.63925518 124.112517,3.5048783 C124.527719,3.36107146 124.917117,3.24791198 124.917117,3.24791198 L119.575795,9.40331621 Z"
                      id="Fill-360"
                    />
                    <path
                      d="M121.951358,8.79437675 C121.951358,8.79437675 121.86691,8.81323667 121.742584,8.83916905 C121.608875,8.87453139 121.432942,8.91932368 121.259355,8.96411597 C120.907489,9.05605805 120.560315,9.14564264 120.560315,9.14564264 L126.049421,2.91479876 C126.049421,2.91479876 126.450548,2.7969243 126.851675,2.67904984 C127.053411,2.62011261 127.257493,2.56117538 127.407623,2.51638309 C127.555406,2.48102075 127.651583,2.45508837 127.651583,2.45508837 L121.951358,8.79437675 Z"
                      id="Fill-362"
                    />
                    <path
                      d="M124.287981,8.30519775 L124.081553,8.34056009 C123.95019,8.36649247 123.776603,8.4042123 123.605361,8.44193212 C123.262879,8.51501429 122.91805,8.59045394 122.91805,8.59045394 L128.770751,2.17336842 C128.770751,2.17336842 129.167186,2.07435387 129.563622,1.97533932 C129.763012,1.92347456 129.962403,1.87396729 130.114878,1.83624746 C130.25797,1.8056001 130.354147,1.7843827 130.354147,1.7843827 L124.287981,8.30519775 Z"
                      id="Fill-364"
                    />
                    <path
                      d="M126.580034,7.93790094 C126.580034,7.93790094 126.246935,7.98740821 125.906798,8.04163046 C125.569007,8.0982102 125.235907,8.15243245 125.235907,8.15243245 L131.456894,1.55853524 C131.456894,1.55853524 131.848638,1.47838061 132.240382,1.40058346 C132.634471,1.31807134 133.023869,1.24498918 133.023869,1.24498918 L126.580034,7.93790094 Z"
                      id="Fill-366"
                    />
                    <polygon
                      id="Fill-368"
                      points="128.822592 7.70309502 127.504269 7.84218688 134.102924 1.07855044 135.648788 0.842801527"
                    />
                  </g>
                </g>
                <g id="Group-412" transform="translate(99.334030, 96.482402)" fill="#71B7FF">
                  <path
                    d="M124.24131,15.4320203 L122.19585,16.520687 L122.257928,15.999749 C122.264135,15.9092868 122.279655,15.7969888 122.298278,15.6753326 C122.335525,15.3727519 122.385187,15.004664 122.372771,14.611621 C122.375875,14.4057414 122.378979,14.1936229 122.385187,13.9627882 C122.397602,13.5416707 122.406914,13.0737623 122.391395,12.5840183 C122.357252,12.3500641 122.332421,12.0849161 122.30759,11.8104099 C122.264135,11.3113077 122.220681,10.8028473 122.102733,10.3068645 C121.801657,8.74093131 121.140529,7.24674408 120.221779,5.97715284 C119.209913,4.74811365 117.909385,3.83725213 116.39469,3.24456826 C113.899167,2.24324445 110.214856,2.16837912 106.428117,2.89207732 C106.148767,2.9544651 105.878729,3.0106141 105.618003,3.06364371 C105.167939,3.15410598 104.748915,3.24456826 104.339202,3.34750809 L102.697247,3.78422252 L101.247733,4.23029511 L102.126133,3.35998564 L103.609789,2.89207732 L105.292095,2.43352717 C105.726639,2.3149904 106.161183,2.22140873 106.626765,2.1184689 C106.887492,2.0623199 107.160633,2.00305152 107.446191,1.93754435 C111.378812,1.1452196 115.218317,1.15457776 117.844204,2.11223012 C119.442704,2.68307827 120.820829,3.57522347 121.913396,4.79802388 C122.909743,6.06449573 123.639156,7.56492174 123.986791,9.13709369 C124.126466,9.6361959 124.18544,10.1540144 124.244414,10.6593554 C124.275452,10.9276229 124.306491,11.1865321 124.346842,11.4298445 C124.377881,11.9351854 124.377881,12.4093325 124.377881,12.8366888 C124.377881,13.0612848 124.377881,13.2734032 124.384088,13.4699247 C124.405816,13.8848034 124.362361,14.274727 124.325115,14.5897853 C124.312699,14.7052027 124.303387,14.8112619 124.294076,14.9017242 L124.24131,15.4320203 Z"
                    id="Fill-370"
                  />
                  <path
                    d="M108.11093,2.00787833 C108.675837,1.46198529 109.017265,1.0159127 109.097966,0.738287093 C109.184874,0.457542101 109.011057,0.35772166 108.54237,0.519929877 C107.632932,0.819391202 106.08099,1.89558034 105.062916,2.92185925 C104.041738,3.95125755 103.843089,4.60009042 104.637684,4.36301687 C105.053604,4.23200254 105.624719,3.92630244 106.239288,3.51142373 C106.866273,3.09030624 107.542919,2.55377137 108.11093,2.00787833"
                    id="Fill-372"
                  />
                  <path
                    d="M122.292606,18.3432771 C124.831584,17.0736859 127.162601,14.9150689 127.202951,13.704746 C127.237094,13.1058234 126.759096,12.8437947 125.948982,12.9248988 C125.123349,13.0184805 124.002846,13.4271204 122.786124,14.1102665 C121.58492,14.7778158 120.504769,15.5919762 119.72259,16.3562265 C118.906268,17.1360737 118.353777,17.8940852 118.269972,18.4524557 C118.139609,19.5598388 119.821914,19.5816745 122.292606,18.3432771"
                    id="Fill-374"
                  />
                  <path
                    d="M80.8899989,82.2573334 C78.6955525,84.4596219 76.5569761,86.5371348 74.4897891,88.5241855 C73.6703635,89.2759582 72.9161196,89.9715819 72.1898106,90.6422504 C70.864452,91.8681702 69.6135865,93.0223441 68.4372143,94.0579812 L63.7938031,98.0851121 L59.712195,101.429097 L59.3552482,99.8319698 L63.312701,96.5753279 L67.8164374,92.6573756 C68.9183164,91.6841263 70.1257275,90.5673851 71.4045279,89.3820174 C72.1246291,88.7144682 72.8695613,88.0282026 73.6424286,87.3201014 C78.0095941,83.1182847 82.7647451,78.4454403 87.5354156,73.1268824 C88.7924888,71.7574707 90.0154193,70.4223723 91.1452333,69.0779157 C91.5766732,68.5725747 91.9988015,68.0828307 92.4240337,67.5930866 C93.2000048,66.6947027 93.9821837,65.7900799 94.7395315,64.8792184 L98.16622,60.6430884 C98.892529,59.7509432 99.5815913,58.8338429 100.248927,57.9510559 C100.6276,57.4457149 101.006274,56.9434933 101.39426,56.4412717 C105.786256,50.5518657 109.290542,45.32377 111.823312,40.9254318 C114.573353,36.1714833 116.55984,32.2628892 117.779666,29.2464402 C118.353885,27.9799683 118.75739,26.8569884 119.108129,25.8837391 L119.365751,25.1662797 C119.700971,24.3084477 119.905827,23.5816301 120.085852,22.9483942 C120.151034,22.7175595 120.216215,22.4929635 120.278293,22.2839644 C120.750084,20.7772996 120.880447,19.9724973 120.880447,19.9724973 L122.981777,18.9056663 C122.978673,18.9399796 122.860725,19.7510207 122.395142,21.3200733 C122.336169,21.5259529 122.277195,21.7443101 122.215117,21.9751449 C122.038196,22.6302166 121.836443,23.3788699 121.49812,24.2803732 L121.249809,24.9853551 C120.902174,25.9866789 120.501773,27.1439722 119.92445,28.4447573 C118.717039,31.5267134 116.705722,35.5569637 113.91533,40.4481654 C111.329794,44.9993536 107.735496,50.4052544 103.203825,56.516137 C102.803423,57.0401944 102.427853,57.5392966 102.052283,58.0415182 C101.357013,58.9742154 100.633808,59.9412259 99.8547332,60.8988783 L96.365967,65.2285899 C95.558957,66.2018392 94.7519471,67.1376559 93.948041,68.0734725 C93.516601,68.5694553 93.0944727,69.0654382 92.6723444,69.561421 C91.4773489,70.990101 90.1985485,72.3844678 88.9632025,73.7351632 C86.2410958,76.7734479 83.5314046,79.6027335 80.8899989,82.2573334"
                    id="Fill-376"
                  />
                  <path
                    d="M122.155775,23.0175564 C124.759934,21.8727407 127.246145,19.6829298 127.615507,18.1918619 C127.922792,16.7663013 125.930098,16.7663013 123.400432,18.0452507 C120.914221,19.3086031 118.769437,21.2706987 118.406282,22.5590063 C117.984154,23.897224 119.632317,24.1249394 122.155775,23.0175564"
                    id="Fill-378"
                  />
                  <path
                    d="M59.8206246,102.707843 C59.9323644,103.752838 60.5158947,104.358 61.3973979,104.46094 C62.3006283,104.582596 63.4956238,104.120926 64.7371776,103.107125 C67.2575318,101.070164 68.7939547,97.8478355 68.16697,95.982441 C67.5865436,94.2449414 65.3920973,94.2917322 63.2690403,96.0417094 C62.2106157,96.9244964 61.3104891,98.084909 60.6866084,99.2422023 C60.0596237,100.430689 59.7088847,101.681564 59.8206246,102.707843"
                    id="Fill-380"
                  />
                  <path
                    d="M57.2411901,105.223349 L56.2169082,106.006316 C55.766845,106.336971 55.2236652,106.723775 54.5625378,107.194803 L52.7684925,108.476872 C51.6200553,109.297271 50.3257354,110.226849 48.8575981,111.165785 L48.3423533,111.508918 C46.8307615,112.513361 45.1329367,113.63946 43.3482031,114.690694 C34.4400546,120.208893 25.6436459,124.067577 19.3458643,125.424511 C16.0433312,126.185642 13.1411992,126.419596 10.9281295,126.148209 C8.85473467,125.926733 7.15070208,125.396436 5.96191432,124.638425 C5.86259002,124.576037 5.7663696,124.519888 5.66704529,124.463739 C5.48701999,124.360799 5.31320246,124.260979 5.15800824,124.139323 L4.53412745,123.602788 C4.46584199,123.537281 4.40066042,123.484251 4.33237496,123.428102 C4.21442735,123.328282 4.09958362,123.228461 4.00646709,123.122402 L3.11565224,122.021258 L2.96045801,121.749871 L4.09337585,120.240087 L4.24857008,120.489638 L5.15490435,121.531514 C5.24802089,121.628215 5.35665684,121.712438 5.47150057,121.799781 C5.54288991,121.85593 5.61117537,121.912079 5.68256472,121.968228 L6.31575715,122.47045 C6.46474361,122.576509 6.63545726,122.670091 6.81237867,122.760553 C6.91480686,122.816702 7.01413116,122.866612 7.11966324,122.929 C8.30224323,123.621504 9.99696417,124.086293 12.0486318,124.251621 C14.2399743,124.4575 17.0893402,124.167397 20.3297957,123.368834 C26.4941103,121.940154 35.0484159,118.100186 43.698942,112.684927 C45.4215979,111.658648 47.060449,110.557504 48.5192747,109.578016 L49.0438312,109.225525 C50.4467869,108.317783 51.6852369,107.425638 52.784012,106.633313 L54.55633,105.360602 C55.1833147,104.908291 55.7047673,104.537084 56.1113762,104.237622 L57.0984114,103.476491 L57.2411901,105.223349 Z"
                    id="Fill-382"
                  />
                  <path
                    d="M51.7061743,108.664722 C51.5758111,110.994906 53.4008952,111.596948 55.8188212,109.893762 C57.0355439,109.064004 58.109488,107.722667 58.8357969,106.400046 C59.559002,105.083664 59.9283643,103.754804 59.8135206,102.709809 C59.7017807,101.68665 59.1523932,101.12204 58.3888376,101.012862 C57.6376975,100.897444 56.6692856,101.259293 55.6294843,101.99235 C53.5778166,103.483418 51.8334335,106.428121 51.7061743,108.664722"
                    id="Fill-384"
                  />
                  <path
                    d="M3.91309581,119.738439 C2.55980216,121.497774 1.69381839,123.444273 2.00420684,124.080628 C2.15008941,124.417522 2.63119151,124.255314 3.21472179,123.812361 C3.80445985,123.363169 4.5152494,122.602038 5.20431176,121.650624 C6.5762287,119.747797 7.28081049,117.963507 6.93007154,117.467524 C6.59485201,116.980899 5.25087002,117.994701 3.91309581,119.738439"
                    id="Fill-386"
                  />
                  <path
                    d="M1.57195129,120.375371 L1.46641921,120.094626 C1.44469202,120.029119 1.41675706,119.960493 1.38571822,119.885627 C1.32364053,119.729658 1.2491473,119.542494 1.18396572,119.296063 L0.873577274,117.9828 C0.792876277,117.449385 0.727694703,116.837984 0.656305359,116.167316 L0.619058745,114.51092 L0.733902472,112.617451 L0.917031657,111.226204 C1.25845895,109.048871 1.72404163,107.071178 2.33240299,105.149635 C3.030777,102.934868 3.80674812,100.83552 4.64479694,98.8827824 C5.54492344,96.792792 6.41090722,94.9492332 7.22722884,93.3645837 C7.58107167,92.6471242 7.9566417,91.9452618 8.28254957,91.3307422 L8.36635445,91.1747727 C8.66432736,90.607044 8.96540416,90.0705091 9.20440327,89.6400334 L9.55203833,89.0161557 C9.68860925,88.769724 9.80345297,88.5700831 9.89346562,88.4078749 L10.1200492,88.0179513 L10.7128911,87.5531623 L10.4925153,87.9368472 C10.4087105,88.0803391 10.3000745,88.2768605 10.1697113,88.5170535 L9.82207628,89.1409312 C9.57997329,89.5807651 9.30062369,90.0798673 9.01506631,90.6288797 L8.92815755,90.7973267 C8.61156133,91.39313 8.24530296,92.0825149 7.90387566,92.781258 C7.10617735,94.337833 6.27123242,96.1377203 5.39904087,98.1871587 C4.59513479,100.086867 3.85020251,102.130066 3.18907511,104.291803 C2.61175259,106.154078 2.18031265,108.069382 1.87613197,110.17185 L1.71783386,111.513188 L1.65575617,113.868326 L1.69921055,114.932038 C1.77991155,115.568393 1.85750866,116.154838 1.94752131,116.666418 L2.27963695,117.926651 C2.34792241,118.151247 2.42241564,118.325933 2.48449333,118.472544 C2.51863606,118.547409 2.5496749,118.619155 2.57140209,118.678424 L2.68314194,118.946691 L1.57195129,120.375371 Z"
                    id="Fill-388"
                  />
                  <path
                    d="M3.16264856,117.468171 C2.51083281,118.279212 1.94592583,119.152641 1.56104416,119.92625 C1.17305859,120.706097 0.955786679,121.398601 1.07683817,121.713659 C1.29721397,122.390567 2.58532604,121.50778 3.93861968,119.732848 C5.27018613,117.98599 6.12996214,116.136192 5.87233972,115.602777 C5.73266492,115.356345 5.40054928,115.396897 4.91323941,115.727552 C4.4352412,116.058208 3.81136042,116.66025 3.16264856,117.468171"
                    id="Fill-390"
                  />
                  <path
                    d="M13.0739097,85.7923632 C12.3848473,86.3257787 11.4195393,87.4549974 10.9011905,88.3346651 C10.6373604,88.783857 10.565971,89.0552439 10.646672,89.1425868 C10.7304769,89.233049 10.9663721,89.1332286 11.3388383,88.8306479 C11.7144083,88.5249478 12.1458482,88.0788752 12.5369377,87.6172056 C12.9280271,87.1555361 13.2663505,86.6782696 13.5084535,86.2633909 C13.9678284,85.4648274 13.7660759,85.2620671 13.0739097,85.7923632"
                    id="Fill-392"
                  />
                  <path
                    d="M12.0689326,85.3442352 L11.5040256,85.7747108 L11.7337131,85.3972648 C11.7864791,85.3068025 11.842349,85.2163402 11.9044267,85.1134004 C12.031686,84.8950432 12.1899841,84.6361339 12.3855288,84.324195 L13.4098107,82.6802771 L13.6829525,82.2591596 C14.0212759,81.7288636 14.3906382,81.1580154 14.7910393,80.5434958 C16.0419047,78.6500268 17.2151731,76.934363 18.3884414,75.2779675 C19.7945011,73.3033944 21.2502229,71.3288213 22.7214642,69.4041584 C25.3380388,65.9759501 28.4605466,62.1422213 31.325432,58.8294304 L32.1945197,57.8281066 C32.4490382,57.5317647 32.7252839,57.213587 32.9953219,56.9141257 C33.1691394,56.7176042 33.3398531,56.5273215 33.4981512,56.3432775 C33.7868124,56.0188611 34.0475387,55.7256386 34.2772262,55.4667293 L35.4132479,54.2096156 L35.6150004,54.1971381 L34.4851864,55.4542517 C34.2617067,55.7038028 34.0071882,55.9907866 33.7216308,56.3120837 C33.5602288,56.4961276 33.3895152,56.6895297 33.2094899,56.8954094 C32.9518675,57.1823931 32.6880373,57.4849738 32.4366227,57.775077 L31.5644311,58.7795202 C28.7430001,62.0455203 25.6639467,65.8324583 23.0877226,69.2138757 C21.6382085,71.1167029 20.2042139,73.0632015 18.8198814,75.0128195 C17.6683402,76.6442598 16.5167991,78.3349685 15.2907647,80.1972437 C14.8996752,80.7992857 14.5334169,81.3701338 14.1981974,81.8941912 L13.9343672,82.2997117 L12.9225008,83.9280327 C12.7393716,84.2243746 12.5903852,84.4739257 12.4693337,84.676686 C12.4010482,84.788984 12.3420744,84.8888044 12.2924123,84.9730279 L12.0689326,85.3442352 Z"
                    id="Fill-394"
                  />
                  <path
                    d="M14.9269014,82.7651705 C14.6072013,83.002244 14.2099041,83.3828095 13.8250224,83.8226433 C13.4370369,84.2593577 13.0490513,84.7584599 12.7945328,85.1795774 C12.2637685,86.0530063 12.3879239,86.3337513 13.083194,85.7909776 C13.781568,85.2450846 14.7437722,84.1470597 15.2155627,83.3516156 C15.6842492,82.5717684 15.5787172,82.2910234 14.9269014,82.7651705"
                    id="Fill-396"
                  />
                  <path
                    d="M38.4768463,52.4217562 C38.3651065,52.4155174 38.1323151,52.5558899 37.8374461,52.7929635 C37.545681,53.030037 37.1887342,53.366931 36.8566186,53.7381383 C36.1799718,54.4867916 35.8354406,55.0763561 36.093063,55.0482816 C36.3568932,55.0170877 37.0863061,54.4244038 37.7194985,53.7225413 C38.0329908,53.3700504 38.2813016,53.0487533 38.4178725,52.8147992 C38.5544434,52.580845 38.5885862,52.427995 38.4768463,52.4217562"
                    id="Fill-398"
                  />
                  <path
                    d="M66.3083614,25.5848552 L64.9674833,26.6516861 C64.1884083,27.2786833 62.9809972,28.255052 61.5128598,29.4809718 C58.2382617,32.210437 54.5663663,35.4514819 51.3973003,38.4086625 C49.5349696,40.1461621 47.7936904,41.8181545 46.2138132,43.3747295 C44.5159883,45.0529606 43.0354354,46.5440285 41.8125049,47.8105003 L40.8906512,48.7650333 L39.3573323,50.3777573 L37.9109221,51.9249741 C37.7340007,52.1121375 37.6408842,52.2150773 37.6346764,52.2244355 L37.4236123,52.2400324 C37.4236123,52.2400324 37.5353521,52.1183763 37.7495201,51.8875415 L39.3976828,50.134445 L40.7509764,48.7088843 L41.6790379,47.7481126 C42.9143839,46.4691631 44.4104563,44.9562596 46.1300083,43.2624315 C47.7316127,41.6840207 49.4915152,39.9995508 51.3724692,38.2402155 C54.5787819,35.2456023 58.2941316,31.9608859 61.6090803,29.193988 C63.0958409,27.9555907 64.3125637,26.9667444 65.1071581,26.3272697 L66.4511401,25.2573193 L66.3083614,25.5848552 Z"
                    id="Fill-400"
                  />
                  <path
                    d="M40.8898838,49.8287123 C40.7036508,49.7756827 40.0021729,50.3309339 39.3162144,51.0639903 C38.9716832,51.4351976 38.7016453,51.7720915 38.5557627,52.0154039 C38.4036723,52.2618356 38.3695296,52.4146856 38.4781656,52.4209244 C38.5899054,52.4271632 38.8226968,52.2867907 39.1082541,52.0621947 C39.3907076,51.8375987 39.729031,51.5256598 40.0549389,51.1794077 C40.7005469,50.4869034 41.073013,49.8848613 40.8898838,49.8287123"
                    id="Fill-402"
                  />
                  <path
                    d="M69.2767652,23.9168033 C69.4878293,23.4925664 69.0067272,23.6547746 68.1966134,24.2942493 C67.3927073,24.9368434 66.6198401,25.7603621 66.4615419,26.1409275 C66.3032438,26.5246123 66.7719304,26.3624041 67.5261743,25.7666008 C68.2773144,25.173917 69.0625972,24.3503983 69.2767652,23.9168033"
                    id="Fill-404"
                  />
                  <path
                    d="M102.072226,4.170963 C102.066019,4.170963 101.563189,4.33941 100.625816,4.71685604 C99.8250141,5.02255614 98.5182787,5.54973285 96.7490646,6.35453516 L95.4950952,6.93162209 C95.2250573,7.05951703 94.936396,7.19988952 94.641527,7.34338141 C94.480125,7.42448552 94.3125152,7.50558962 94.1480094,7.58669373 L93.4527392,7.92670711 C93.3130644,7.99845305 93.1578702,8.07643777 93.0057799,8.15754188 L92.7388458,8.29479499 C92.5681322,8.38213788 92.3943146,8.47260015 92.223601,8.56306243 C91.9070048,8.72215125 91.5904085,8.88747886 91.2676046,9.05904524 C89.2842224,10.116518 87.1270226,11.351796 85.0256928,12.6213872 C81.4220829,14.8049594 77.309436,17.5593797 73.6996183,20.1796663 L73.2061007,20.5415154 C72.6505053,20.9439165 72.1321566,21.324482 71.6603662,21.6769729 C71.4648215,21.8235842 71.2847962,21.9577179 71.1109786,22.0887322 C70.7260969,22.375716 70.3939813,22.6221477 70.1022162,22.8467437 L68.7302992,23.8948583 L68.9258439,23.5205317 L70.2822415,22.4848946 C70.5926299,22.2447017 70.9526805,21.9764342 71.3313544,21.6925699 C71.5020681,21.5677943 71.6789895,21.4336606 71.8683264,21.2932881 C72.3556363,20.9252002 72.8864006,20.538396 73.4513075,20.1235173 L73.9417213,19.767907 C77.6074089,17.0945908 81.7914452,14.2871409 85.4602367,12.0536585 C87.5957092,10.7528734 89.7963633,9.4895209 91.8169921,8.40085421 C92.1522116,8.22304905 92.4781195,8.05460205 92.7978196,7.88615506 C92.9716371,7.79881217 93.1454547,7.7083499 93.3161683,7.61788762 L93.5799985,7.48063451 C93.7414005,7.39329163 93.9059064,7.30906813 94.0611006,7.23108341 L94.7687863,6.88171187 C94.9332921,6.80060776 95.097798,6.71950365 95.2623039,6.63839954 C95.5633807,6.48866888 95.8613536,6.3420576 96.146911,6.2048045 L97.4195036,5.61212063 C99.2352761,4.77924382 100.579258,4.23023139 101.392476,3.91205373 C102.367096,3.51589136 102.88234,3.3380862 102.907171,3.33184742 L102.072226,4.170963 Z"
                    id="Fill-406"
                  />
                  <path
                    d="M72.1334965,21.7303421 C72.2607557,21.4995073 72.2141975,21.409045 72.0279644,21.4589552 C71.8417313,21.5119848 71.5189273,21.7085063 71.1092146,22.0204452 C70.3022046,22.6380842 69.4765713,23.4990355 69.2748189,23.9170336 C69.0699625,24.3412705 69.5231296,24.2040174 70.2773735,23.6362886 C70.6591513,23.3430661 71.0595524,22.9843364 71.3978759,22.6380842 C71.7330954,22.2949514 72.0062372,21.9642962 72.1334965,21.7303421"
                    id="Fill-408"
                  />
                  <path
                    d="M105.074648,2.92035848 C106.105138,1.88784079 106.188942,1.32947019 105.2764,1.66948357 C104.838753,1.82545301 104.227287,2.19354089 103.615822,2.63961349 C103.013669,3.07632792 102.417723,3.58790768 101.955244,4.07141294 C101.492765,4.55491821 101.247558,4.92924486 101.210312,5.1413633 C101.182377,5.35348174 101.359298,5.41275012 101.747284,5.28797457 C102.548086,5.01346836 104.041054,3.95287617 105.074648,2.92035848"
                    id="Fill-410"
                  />
                </g>
                <g
                  id="Group-106"
                  opacity="0.5"
                  transform="translate(0.329296, 0.996892)"
                  fill="#1E9BFF"
                >
                  <path
                    d="M195.125498,31.7590833 C195.125498,31.7590833 195.090221,31.6254103 195.026723,31.3768252 C194.953817,31.1352756 194.798598,30.8139912 194.63162,30.3871754 C194.462291,29.967395 194.255333,29.4631895 194.022504,28.8862846 C193.721474,28.363318 193.387519,27.7793776 193.025341,27.1508796 C191.54606,24.7682155 188.999061,22.2284269 185.551323,20.692359 C182.336413,19.2454065 178.378335,18.6778822 175.20811,18.6215988 C174.420257,18.626289 173.70531,18.6286342 173.079731,18.6309793 C172.447097,18.6450502 171.842685,18.7130593 171.37938,18.7388559 C170.448068,18.8045198 169.921265,18.8420421 169.921265,18.8420421 L187.23286,1.57945303 C187.23286,1.57945303 187.959566,1.45047023 189.253055,1.22299147 C189.902152,1.11511494 190.727634,0.950955015 191.616614,0.826662498 C192.50089,0.716440832 193.509812,0.589803172 194.629269,0.453784946 C199.170593,-0.0340045567 205.031277,-0.106703954 210.068831,0.915777888 C215.586152,2.0039237 220.061627,4.39596838 222.916711,6.83960617 C223.631658,7.49624589 224.294865,8.10832791 224.892222,8.6570911 C225.404915,9.27620854 225.85646,9.82262659 226.232748,10.275239 C227.025304,11.1781186 227.35926,11.78082 227.35926,11.78082 L195.125498,31.7590833 Z"
                    id="Fill-1"
                  />
                  <path
                    d="M196.247307,38.7178227 C196.247307,38.7178227 196.216733,38.0658733 196.162642,36.9378601 C196.082681,36.407858 195.988609,35.7699794 195.880426,35.0453306 C195.819279,34.688869 195.786354,34.2948852 195.704041,33.910282 C195.600562,33.5397495 195.497083,33.1481109 195.386548,32.7470916 C194.596343,29.5694244 192.811328,26.0517117 190.000928,23.5799322 C187.446873,21.2160292 183.96621,19.8347406 181.054683,19.2508003 C179.591864,19.0209764 178.467704,18.7747365 177.529336,18.7536303 C176.649763,18.6903114 176.153533,18.6527892 176.153533,18.6527892 L195.979201,0.325505687 C195.979201,0.325505687 196.6965,0.27860285 197.966472,0.194177744 C199.306997,0.0698852268 201.004997,0.116788064 203.156893,0.123823489 C204.177574,0.198868028 205.301734,0.280947992 206.510559,0.36771824 C207.644126,0.543603878 208.857655,0.728870083 210.139385,0.925861998 C211.315285,1.23307558 212.608775,1.5144926 213.829358,1.901441 C214.984092,2.36577909 216.336376,2.73162121 217.418204,3.33432267 C222.319354,5.62787138 225.971698,9.34257605 228.031875,12.8837402 C228.307035,13.3386977 228.572788,13.7772393 228.826783,14.1970197 C229.061963,14.633216 229.226589,15.0881736 229.417084,15.4962282 C229.77691,16.3334439 230.094403,17.0745087 230.360156,17.6889359 C230.755258,19.0162861 230.985735,19.7831475 230.985735,19.7831475 L196.247307,38.7178227 Z"
                    id="Fill-3"
                  />
                  <path
                    d="M195.719092,47.320741 C195.719092,47.320741 195.822572,46.5374637 196.001308,45.1772814 C196.045993,44.839581 196.093029,44.4667034 196.14712,44.063339 C196.165934,43.6787358 196.184749,43.2659908 196.205915,42.8251041 C196.222377,41.9620919 196.347023,40.9443004 196.302339,39.9405797 C196.323505,35.9350774 195.46745,31.3526703 193.435495,27.8630992 C191.603444,24.5564492 188.753063,22.2535199 186.220175,21.0434267 C185.662798,20.7033812 185.030164,20.501699 184.508065,20.2976716 C183.976558,20.1077151 183.56029,19.906033 183.153429,19.7981564 C182.34441,19.5894388 181.888161,19.4698366 181.888161,19.4698366 L204.42075,0.213876936 C204.42075,0.213876936 205.112179,0.265470056 206.339818,0.354585446 C206.95599,0.406178566 207.626252,0.539851651 208.44703,0.659453885 C209.267808,0.788436686 210.23675,0.912729203 211.1516,1.17773023 C215.217861,2.07591956 220.095493,4.15137008 223.731374,7.57996745 C227.797635,11.2571499 230.349338,16.4797807 231.39824,21.2380735 C231.734547,22.4434764 231.833323,23.6746759 232.028522,24.7276446 C232.113187,25.2670272 232.193148,25.7735778 232.266054,26.2449513 C232.294276,26.7421214 232.320145,27.1994241 232.341312,27.6168593 C232.423625,29.3053614 232.473012,30.2856307 232.473012,30.2856307 L195.719092,47.320741 Z"
                    id="Fill-5"
                  />
                  <path
                    d="M193.261697,57.5887101 C193.261697,57.5887101 193.341658,57.3518507 193.489822,56.9133092 C193.607412,56.4841483 193.776741,55.8626857 193.993107,55.0700277 C194.207121,54.2867504 194.46817,53.3393131 194.762145,52.2605478 C194.973807,51.2239951 195.211339,50.065495 195.465333,48.8178796 C196.344906,44.0103388 196.732953,38.2412899 195.637015,33.663573 C194.684536,29.3297509 192.582027,26.0371718 190.554776,24.1094652 C188.66393,22.2474226 186.954171,21.4336583 186.954171,21.4336583 L212.337142,1.48119158 C212.337142,1.48119158 212.497064,1.52340414 212.80515,1.59844868 C213.110884,1.6781835 213.574188,1.78840517 214.082177,1.99243251 C215.131079,2.39110662 216.760876,2.90469268 218.388321,3.82867857 C221.960705,5.65319892 226.052835,9.05130944 228.658629,13.9174788 C231.621896,19.1565256 232.588486,26.1427032 232.473248,32.1626823 C232.39799,33.7479981 232.325084,35.2207472 232.261586,36.5434072 C232.078145,37.9340763 231.918223,39.1558952 231.78417,40.1736868 C231.645414,41.2008589 231.53488,42.0146231 231.45727,42.5727669 C231.337329,43.1496718 231.27383,43.4568853 231.27383,43.4568853 L193.261697,57.5887101 Z"
                    id="Fill-7"
                  />
                  <path
                    d="M188.674042,69.4244064 C188.674042,69.4244064 188.793984,69.1617505 189.019757,68.6645805 C189.229067,68.1744458 189.605355,67.4380713 189.958125,66.5422271 C190.61898,64.7763353 191.778417,62.2107501 192.667398,59.3449868 C194.602928,53.7166464 196.176282,46.8782128 196.289169,41.111509 C196.503182,35.6332577 195.235562,31.3111613 193.855056,28.5837613 C193.485824,27.9458827 193.151868,27.3689778 192.860245,26.8624272 C192.556863,26.3699474 192.204093,26.0064504 191.966561,25.6757854 C191.714919,25.3568461 191.522071,25.1082611 191.390371,24.9394109 C191.268077,24.7658704 191.171653,24.6908258 191.171653,24.6908258 L219.461447,4.37955238 C219.461447,4.37955238 219.619018,4.4475615 219.854198,4.61875685 C220.098785,4.78760706 220.45861,5.03150181 220.921915,5.34809596 C221.37346,5.67641582 221.991984,6.03756766 222.584637,6.54177316 C223.16318,7.06708493 223.826387,7.66978638 224.557797,8.33580666 C227.42464,11.2414374 230.550181,16.1052616 231.697859,22.6482073 C233.106587,29.6765974 232.41751,38.3911445 230.780658,45.7689607 C230.072766,49.5657453 228.887459,53.0037233 228.243066,55.3910776 C227.892648,56.603516 227.481083,57.6025464 227.262366,58.2709118 C227.022482,58.9439675 226.893133,59.3074645 226.893133,59.3074645 L188.674042,69.4244064 Z"
                    id="Fill-9"
                  />
                  <path
                    d="M181.916147,82.5975371 C181.916147,82.5975371 182.562892,81.4413822 183.687052,79.4339408 C184.279705,78.4325652 184.872359,77.238888 185.559084,75.8810509 C186.210533,74.5372846 187.087754,72.9988716 187.781534,71.3947946 C190.827115,65.0324248 193.785678,57.1363322 195.17324,50.2345798 C196.560801,43.6892889 196.518469,38.1570993 195.819985,34.6346963 C195.732968,33.7318167 195.431938,33.0470352 195.288478,32.3739795 C195.1215,31.7220301 194.982744,31.1545058 194.780489,30.7487962 C194.434775,29.9068903 194.241927,29.4331717 194.241927,29.4331717 L225.377399,9.24150044 C225.377399,9.24150044 225.803074,9.7550865 226.553298,10.6696918 C226.964863,11.1129236 227.338799,11.7414216 227.776234,12.4660705 C228.190151,13.2212061 228.815729,13.9927578 229.210832,15.0246202 C231.261601,19.0840607 232.846713,25.7255024 232.390464,33.9592954 C232.021232,42.8215864 229.279034,53.3325121 225.925368,62.0048467 C225.179848,64.20928 224.156815,66.3316334 223.411294,68.1960211 C222.618738,70.0862054 221.920254,71.7465659 221.207658,73.1489607 C219.838911,75.9701663 219.05341,77.5953496 219.05341,77.5953496 L181.916147,82.5975371 Z"
                    id="Fill-11"
                  />
                  <path
                    d="M172.981896,96.7966674 C172.981896,96.7966674 173.198262,96.4894538 173.572198,95.912549 C173.95319,95.3379892 174.505862,94.5007736 175.213754,93.4313889 C175.898128,92.3666945 176.808274,91.0792116 177.70431,89.613498 C178.597993,88.1571649 179.595156,86.5249462 180.676984,84.7543641 C184.766763,77.8174345 189.359827,68.9527984 192.116136,60.9793161 C194.841871,53.3787114 196.041289,46.7185086 196.227081,42.3237128 C196.459909,38.0977672 195.980142,35.7338642 195.980142,35.7338642 L229.759036,16.2879481 C229.759036,16.2879481 229.831942,16.4614886 229.975402,16.7851182 C230.095343,17.1251638 230.363448,17.5730859 230.544537,18.2437964 C230.890251,19.608669 231.624013,21.4847824 231.932099,24.1183767 C232.83519,29.5004772 232.724655,37.9336073 230.311709,47.9309469 C227.891707,58.6318292 222.604862,70.8781598 217.520272,80.6409853 C216.153877,83.1549774 214.886257,85.4790129 213.75269,87.5568086 C212.600308,89.6510202 211.415001,91.4966469 210.516614,93.0233342 C208.651637,96.0978152 207.569809,97.8707424 207.569809,97.8707424 L172.981896,96.7966674 Z"
                    id="Fill-13"
                  />
                  <path
                    d="M149.183804,126.433866 C149.183804,126.433866 150.319723,125.193286 152.311697,123.02403 C153.261824,121.919468 154.416557,120.585083 155.738269,119.053705 C156.396772,118.291534 157.09996,117.480115 157.840777,116.624138 C158.546317,115.758781 159.28243,114.853556 160.05382,113.906119 C166.234349,106.415736 173.609592,96.4230863 179.446758,86.761102 C185.152223,77.4391632 189.277279,68.6941292 191.504433,62.6483536 C192.111197,61.1498079 192.471022,59.8552897 192.889643,58.6827187 C193.301208,57.5218735 193.621052,56.5275334 193.806844,55.7466011 C194.241927,54.1706658 194.486514,53.2795119 194.486514,53.2795119 L232.096489,37.8555141 C232.096489,37.8555141 231.941271,39.0069787 231.668462,41.0495972 C231.562631,42.0720791 231.31334,43.3689425 230.965274,44.8956299 C230.605449,46.4410783 230.337343,48.1577222 229.756449,50.1534379 C227.691569,58.2887349 223.147893,70.3404188 215.972553,83.4896291 C208.545571,97.3330014 198.486925,111.849429 189.806434,122.780135 C188.717551,124.166114 187.675704,125.498155 186.678541,126.766877 C185.627286,128.019182 184.632475,129.208169 183.694107,130.326802 C181.807964,132.566412 180.159353,134.524606 178.802365,136.142754 C175.94728,139.320421 174.31278,141.140251 174.31278,141.140251 L149.183804,126.433866 Z"
                    id="Fill-18"
                  />
                  <path
                    d="M135.118868,140.820843 C135.118868,140.820843 136.341804,139.638891 138.484293,137.563441 C139.575528,136.547994 140.805519,135.220644 142.261282,133.740859 C143.686473,132.247004 145.38212,130.61244 147.075416,128.733982 C154.041445,121.367891 162.627865,111.274401 169.857296,101.1856 C176.962082,91.3664915 182.573475,81.8522511 185.950659,75.1076231 C186.809065,73.4496079 187.561641,71.9487171 188.116666,70.6518536 C188.704616,69.3549902 189.217308,68.2340124 189.635928,67.3123717 C190.355579,65.5230284 190.764792,64.5052369 190.764792,64.5052369 L229.040326,52.6435095 C229.040326,52.6435095 228.675797,54.0013466 227.913814,56.437949 C227.469324,57.6855644 226.923707,59.2145969 226.293424,60.9828338 C225.700771,62.7627965 224.854123,64.8312116 223.861664,67.1271055 C219.971788,76.5358145 212.95637,90.0579024 203.368085,104.222559 C193.521101,118.95943 181.319966,133.747895 171.273079,144.50037 C168.827208,147.255912 166.376633,149.63154 164.309401,151.812522 C162.199837,153.967708 160.410118,155.895414 158.822653,157.377544 C155.701816,160.381671 153.919152,162.10066 153.919152,162.10066 L135.118868,140.820843 Z"
                    id="Fill-20"
                  />
                  <path
                    d="M120.299475,154.181585 C120.299475,154.181585 121.560039,153.095784 123.773082,151.193874 C126.021403,149.338867 129.097556,146.419165 132.860435,143.011674 C140.292121,136.009081 149.868648,126.222804 158.313959,116.051924 C166.66755,106.056929 173.697079,96.0502088 178.212533,88.7826142 C179.301416,86.9979613 180.293876,85.3704328 181.168745,83.9375512 C181.961302,82.5210855 182.648027,81.2945763 183.207755,80.2908556 C183.765132,79.2894801 184.226084,78.5015124 184.498893,77.9738555 C184.764646,77.4461986 184.905754,77.1671267 184.905754,77.1671267 L222.652134,69.9863024 C222.652134,69.9863024 222.021851,71.5458217 220.627234,74.3506114 C219.942861,75.7623867 219.100917,77.4884111 218.134327,79.486472 C217.033685,81.5173648 215.782528,83.8249844 214.404373,86.3671181 C208.604836,96.7912736 199.131788,111.333498 187.346922,125.927316 C175.359801,140.898701 161.488888,155.147783 150.623575,165.269415 C145.122717,170.198903 140.609614,174.377946 137.307688,177.032647 C134.062204,179.748321 132.211338,181.293769 132.211338,181.293769 L120.299475,154.181585 Z"
                    id="Fill-22"
                  />
                  <path
                    d="M105.272418,166.014936 C105.272418,166.014936 105.589911,165.808563 106.180212,165.351261 C106.768162,164.900993 107.635976,164.242009 108.743674,163.400103 C109.851371,162.553507 111.201304,161.526334 112.755843,160.342038 C114.296272,159.094422 116.043659,157.680302 117.950968,156.137198 C125.615482,149.831112 135.711757,140.696785 145.104843,130.826083 C154.507337,121.044496 162.780967,110.859545 168.345324,103.303498 C170.991098,99.567687 173.260585,96.4908609 174.610518,94.342711 C176.021597,92.2133222 176.821209,91.003229 176.821209,91.003229 L212.615595,89.5422057 C212.615595,89.5422057 211.569044,91.2752655 209.725233,94.3333304 C207.947273,97.4265725 204.913452,101.879997 201.310495,107.29962 C193.697721,118.340547 182.018685,133.297862 168.422933,147.56336 C154.853051,161.978947 140.053178,175.123467 128.769245,184.060802 C125.968252,186.237094 123.411846,188.223429 121.154119,189.97525 C118.891688,191.652026 116.909121,193.047386 115.291083,194.219957 C113.677749,195.378457 112.410129,196.288372 111.54937,196.907489 C110.695667,197.533642 110.230011,197.815059 110.230011,197.815059 L105.272418,166.014936 Z"
                    id="Fill-24"
                  />
                  <path
                    d="M90.5771996,175.924567 C90.5771996,175.924567 95.4759976,173.009556 102.938257,167.667323 C110.555735,162.264116 120.816635,154.145235 130.734173,144.956969 C140.757542,135.742907 150.084778,125.773709 156.49108,118.182485 C158.15145,116.318097 159.503734,114.561586 160.766651,113.030208 C161.996642,111.49414 163.130209,110.176171 163.953339,109.064573 C165.630172,106.86483 166.58265,105.612525 166.58265,105.612525 L198.896373,110.65927 C198.896373,110.65927 197.579366,112.486135 195.260492,115.701325 C194.110462,117.321818 192.532404,119.254215 190.803832,121.498515 C189.032927,123.742816 187.118562,126.320127 184.766763,129.047527 C175.63943,140.217438 162.196545,154.778423 147.51191,168.073032 C133.024826,181.323084 117.952144,192.715783 106.839892,200.065457 C101.409587,203.766091 96.9223542,206.362163 93.8250345,208.252347 C92.2893095,209.204475 91.0898918,209.851734 90.2738175,210.294966 C89.4577431,210.745233 89.0273638,210.982093 89.0273638,210.982093 L90.5771996,175.924567 Z"
                    id="Fill-26"
                  />
                  <path
                    d="M76.7086389,183.754761 C76.7086389,183.754761 77.8375026,183.175511 79.8271248,182.155375 C80.8266395,181.655859 82.0707414,180.903069 83.4912282,180.119791 C84.9258258,179.306027 86.5485673,178.433634 88.3476938,177.29155 C95.6453271,172.938967 105.718084,166.065356 115.788488,157.885502 C126.061148,149.614186 135.999852,140.243 143.085823,132.89567 C146.702891,129.279462 149.435682,126.099449 151.465284,123.951299 C152.481262,122.874879 153.179746,121.988416 153.706549,121.404475 C154.214538,120.815845 154.484995,120.501596 154.484995,120.501596 L181.911679,132.447748 C181.911679,132.447748 175.797,139.928751 165.505526,150.580385 C155.244626,161.295338 140.72932,174.843222 125.597843,186.531409 C110.901449,198.003843 96.2873684,207.194454 85.8477311,212.726644 C83.2913252,214.178286 80.9959691,215.252361 78.9710699,216.251392 C76.9743922,217.215245 75.2293571,218.132196 73.8300365,218.723171 C71.0549133,219.921539 69.4839113,220.599285 69.4839113,220.599285 L76.7086389,183.754761 Z"
                    id="Fill-28"
                  />
                  <path
                    d="M64.0298535,189.445717 C64.0298535,189.445717 65.0528862,189.025937 66.8567163,188.291907 C68.6628982,187.621197 71.3627638,186.319643 74.6341167,184.823442 C76.3156532,183.96043 78.1477049,183.022374 80.1067538,182.013963 C82.0987278,180.89533 84.217699,179.708688 86.433094,178.463418 C88.6790623,177.072749 91.0167509,175.68677 93.417938,174.153047 C95.8355877,172.509103 98.3237914,170.994141 100.809643,169.181346 C110.971768,162.108399 121.148004,153.69403 128.612615,146.890773 C130.472888,145.164749 132.232034,143.647442 133.708964,142.191109 C135.200005,140.744156 136.498198,139.484815 137.570619,138.450608 C139.731922,136.396263 140.891359,135.150993 140.891359,135.150993 L162.320955,153.865225 C162.320955,153.865225 160.639418,155.67802 157.490359,158.66104 C155.928764,160.164276 154.035566,161.986451 151.862503,164.078318 C149.703551,166.184255 147.130683,168.383998 144.404948,170.867503 C133.487895,180.646745 118.572784,192.541304 103.749392,202.107138 C100.151139,204.541395 96.5669973,206.544146 93.0910379,208.694641 C89.6550591,210.690357 86.3202076,212.453904 83.1311677,214.210415 C79.998571,215.741792 77.0070822,217.245028 74.2202,218.553617 C71.4874092,219.730879 68.9380587,220.83075 66.614481,221.832126 C62.113137,223.501867 58.4349229,224.906607 55.9914034,225.563246 C53.5596429,226.299621 52.1908957,226.714711 52.1908957,226.714711 L64.0298535,189.445717 Z"
                    id="Fill-30"
                  />
                  <path
                    d="M52.8404626,192.949828 C52.8404626,192.949828 53.05918,192.90058 53.4660413,192.811465 C53.8705507,192.738765 54.4984812,192.548809 55.2980929,192.314294 C56.1024083,192.082125 57.0831086,191.796018 58.2190277,191.467698 C59.3667058,191.127653 60.723694,190.602341 62.188865,190.105171 C68.2400447,187.940605 76.9746274,184.012492 86.3159744,178.534241 C96.0218502,172.851962 106.073441,165.633616 113.634475,159.630053 C115.537081,158.09164 117.284468,156.677519 118.839007,155.418178 C120.388843,154.126005 121.71761,152.948744 122.825307,152.005997 C123.933005,151.056214 124.807874,150.303424 125.400528,149.794528 C125.997885,149.290322 126.308322,149.00187 126.308322,149.00187 L141.030586,173.893205 C141.030586,173.893205 140.576689,174.308295 139.697116,175.032944 C138.824598,175.764629 137.545219,176.836358 135.920126,178.196541 C134.295033,179.540307 132.345391,181.217083 130.073553,183.046294 C127.789956,184.819221 125.226494,186.814937 122.444316,188.977158 C111.412025,197.363385 96.8355728,207.140281 82.9623085,214.292964 C69.8322128,221.103256 57.840388,225.352653 49.7337357,227.317882 C47.7887977,227.756423 45.9967266,228.237177 44.4892232,228.492798 C43.0052378,228.732002 41.725859,228.933684 40.6816601,229.100189 C39.6468684,229.266694 38.8354976,229.400368 38.3181017,229.419129 C37.7912987,229.461341 37.5114346,229.482447 37.5114346,229.482447 L52.8404626,192.949828 Z"
                    id="Fill-32"
                  />
                  <path
                    d="M43.2667579,194.495511 C43.2667579,194.495511 44.0099265,194.439228 45.3245823,194.336041 C46.0019005,194.256306 46.8579555,194.099182 47.8316004,193.958473 C48.8123007,193.82011 49.9388126,193.639534 51.2393576,193.311214 C56.4721112,192.216033 64.22129,189.723147 72.7724324,185.680123 C81.718677,181.519841 91.3116665,175.764863 98.6916128,170.66418 C100.563645,169.381387 102.28281,168.122046 103.813832,167.047971 C105.356612,165.980931 106.694786,164.970175 107.795428,164.118889 C110.013175,162.435077 111.285498,161.471224 111.285498,161.471224 L119.008807,191.545322 C119.008807,191.545322 117.148534,192.884398 113.910106,195.215469 C112.303827,196.38804 110.354186,197.769329 108.110569,199.223317 C105.883415,200.68434 103.39286,202.382223 100.685939,204.094176 C90.0699165,210.873982 76.4600537,218.146266 64.0496086,222.784957 C52.4058501,227.243072 42.1802266,229.259894 35.4658395,229.639807 C33.8125246,229.811002 32.389686,229.813347 31.1620467,229.775825 C29.9414629,229.750028 28.8784496,229.759409 28.0388572,229.707816 C26.4208193,229.52724 25.5130247,229.424053 25.5130247,229.424053 L43.2667579,194.495511 Z"
                    id="Fill-34"
                  />
                  <path
                    d="M35.3466033,194.298754 C35.3466033,194.298754 35.9604229,194.359727 37.0469542,194.472294 C38.1123193,194.650525 39.8338364,194.598932 41.9057716,194.605967 C46.2707112,194.486365 52.9286551,193.33021 60.5226152,190.68958 C68.5116775,187.978596 77.3473876,183.675261 84.3087136,179.660378 C86.0772667,178.701215 87.7211745,177.688114 89.1839936,176.778199 C90.6585718,175.868284 91.9473579,175.099077 93.0150748,174.421331 C95.1622676,172.99783 96.3946104,172.179376 96.3946104,172.179376 L97.3729589,206.104198 C97.3729589,206.104198 95.5949986,207.178272 92.5117897,209.045005 C90.9831201,209.924434 89.1393095,210.914083 87.0368009,212.072584 C84.9554584,213.231084 82.6224735,214.509186 80.1272144,215.686447 C70.35784,220.632351 58.1966856,225.491485 47.5242202,227.836627 C37.5784608,230.130176 29.1825372,230.198185 23.8580635,229.229641 C21.355749,228.694949 19.3190908,228.286894 18.0702854,227.747512 C16.8073691,227.283173 16.0947739,227.025208 16.0947739,227.025208 L35.3466033,194.298754 Z"
                    id="Fill-36"
                  />
                  <path
                    d="M29.0938744,192.523716 C29.0938744,192.523716 29.5219019,192.784026 30.410882,193.049027 C30.8483167,193.199117 31.3821751,193.382038 32.0030502,193.597791 C32.649795,193.778367 33.4376478,193.909694 34.2748883,194.101996 C37.8002355,194.777397 43.268169,194.927486 49.7850049,193.644693 C56.687536,192.300927 64.5801745,189.432819 70.9323846,186.527188 C72.5621815,185.755636 74.0485187,185.141209 75.4125623,184.421251 C76.7789577,183.720053 77.983079,183.103281 78.9755383,182.594385 C79.9727012,182.092525 80.760554,181.677435 81.3085232,181.35146 C81.8541407,181.044246 82.1457638,180.880086 82.1457638,180.880086 L77.0752844,217.185227 C77.0752844,217.185227 76.6684231,217.384564 75.9017365,217.757442 C75.1374018,218.153771 74.0297043,218.650941 72.6397909,219.239571 C71.2545811,219.835238 69.5848035,220.552851 67.6892533,221.371305 C65.805462,222.196795 63.7593966,222.865161 61.5251872,223.716447 C52.9058427,226.851902 42.4450392,229.462045 33.6187363,229.780984 C25.4579926,230.116339 18.9152869,228.434873 14.8654884,226.441502 C13.9130097,225.930261 13.0263813,225.512826 12.3043789,225.062559 C11.6176535,224.574769 11.0273519,224.154989 10.5475848,223.814943 C9.58099531,223.167684 9.12474624,222.668169 9.12474624,222.668169 L29.0938744,192.523716 Z"
                    id="Fill-38"
                  />
                  <path
                    d="M24.4017995,189.454863 C24.4017995,189.454863 24.7404586,189.762077 25.3354639,190.301459 C25.6717712,190.528938 26.0809843,190.805665 26.5560477,191.129294 C26.7935795,191.291109 27.0475738,191.46465 27.3203825,191.652261 C27.619061,191.79766 27.9365539,191.950094 28.2681576,192.116599 C30.9515607,193.528374 35.3141484,194.696255 40.7209351,194.61183 C41.3982533,194.642317 42.1179039,194.602449 42.8587207,194.527405 C43.5971857,194.471121 44.3356507,194.410148 45.0741157,194.356209 C46.6004335,194.177979 48.176139,193.894217 49.700105,193.662048 C51.3110875,193.279789 52.8632751,192.972576 54.3919447,192.578592 C55.9652984,192.118944 57.47045,191.678058 58.8744742,191.267658 C61.7977608,190.242831 64.2671501,189.405615 66.0850909,188.605922 C67.8983282,187.869547 68.9448789,187.445076 68.9448789,187.445076 L58.8203828,224.7 C58.8203828,224.7 57.4022478,225.133851 54.9469693,225.881951 C52.5034498,226.702751 49.2062271,227.457887 45.3492762,228.342005 C43.5125209,228.637493 41.5511203,228.954087 39.5097585,229.284752 C37.5389506,229.519266 35.554032,229.620107 33.515022,229.786612 C31.5912501,229.772542 29.6204423,229.798338 27.7319474,229.6717 C26.8218011,229.570859 25.9163583,229.467673 25.0156192,229.366832 C24.1101764,229.282407 23.2423625,229.148734 22.4286399,228.932981 C15.9917651,227.659569 11.0976707,224.697655 8.24728991,221.831891 C7.89687181,221.496536 7.5652681,221.175252 7.25012699,220.875073 C6.97261467,220.527992 6.71156494,220.199673 6.46462601,219.894804 C5.98250715,219.287412 5.57094226,218.759755 5.23228316,218.33294 C4.65138872,217.371431 4.32448862,216.829704 4.32448862,216.829704 L24.4017995,189.454863 Z"
                    id="Fill-40"
                  />
                  <path
                    d="M21.1323281,185.346409 C21.1323281,185.346409 21.3628044,185.719287 21.7696657,186.380617 C21.8731449,186.549467 21.9883831,186.734733 22.1153802,186.936415 C22.2611918,187.114646 22.4211141,187.304603 22.5927955,187.510975 C22.950269,187.909649 23.3006871,188.439651 23.7875096,188.896954 C25.6877634,190.918466 28.9873379,192.96812 33.3193523,193.896796 C37.8983056,194.959145 43.5802528,194.736357 48.394386,193.871 C49.5961554,193.725601 50.7955731,193.401971 51.839772,193.176838 C52.9051371,192.916527 53.8058763,192.778164 54.6148952,192.513163 C56.2164706,192.046479 57.1454313,191.776788 57.1454313,191.776788 L43.0840231,228.719807 C43.0840231,228.719807 41.87755,228.909764 39.7985594,229.240429 C38.7520087,229.444456 37.5949234,229.451492 36.228528,229.58282 C34.8997614,229.671935 33.3781472,229.854856 31.8659403,229.782157 C25.8641484,229.892378 19.0086533,228.750294 13.7806034,225.87515 C8.93119315,223.333017 5.52813952,219.355656 3.73371662,215.835598 C3.27511575,215.028869 2.96467824,214.163512 2.64248173,213.47404 C2.48726298,213.126959 2.34615502,212.800985 2.21680605,212.500806 C2.11097508,212.170141 2.01455131,211.869963 1.92753473,211.597927 C1.59357923,210.519162 1.40308348,209.914115 1.40308348,209.914115 L21.1323281,185.346409 Z"
                    id="Fill-42"
                  />
                  <path
                    d="M19.1584629,180.392766 C19.1584629,180.392766 19.1772773,180.517058 19.2478313,180.70936 C19.3113299,180.911042 19.4054019,181.20653 19.5276954,181.584098 C19.6570444,181.956976 19.7840415,182.4518 19.9839445,182.960696 C20.2073654,183.450831 20.4613598,184.008975 20.7412239,184.628092 C21.9782703,187.07173 24.2148315,189.946874 27.5191096,191.747943 C31.0138834,193.727242 35.5881331,194.566803 39.5603221,194.60198 C43.7041926,194.686405 46.9049915,194.102465 46.9049915,194.102465 L30.0026097,229.760347 C30.0026097,229.760347 29.7556707,229.753311 29.2923663,229.746276 C28.82671,229.741586 28.14704,229.746276 27.3427246,229.629019 C25.7435011,229.443753 23.4599039,229.274902 21.0375506,228.613572 C16.3363037,227.518391 11.1317718,225.027851 7.45826123,221.076287 C4.038745,217.528087 2.03501196,212.680679 1.10134763,208.759602 C0.901444685,207.786368 0.722707936,206.90694 0.56513738,206.140078 C0.433436617,205.349765 0.376993433,204.606355 0.301735855,204.029451 C0.238237273,203.452546 0.186497687,202.999933 0.153572497,202.69272 C0.113591908,202.394887 0.113591908,202.214311 0.113591908,202.214311 L19.1584629,180.392766 Z"
                    id="Fill-44"
                  />
                  <path
                    d="M18.362614,174.747306 C18.362614,174.747306 18.3649658,174.873944 18.3720212,175.113148 C18.3673176,175.366423 18.4049464,175.692398 18.456686,176.102798 C18.5531098,176.942359 18.6518853,178.20639 18.9811373,179.526705 C19.5761425,182.364327 20.9542969,185.774163 23.2708192,188.335058 C25.6861172,191.163299 29.2373341,192.868217 32.3746345,193.698397 C33.2071714,193.874283 33.9762098,194.040788 34.6676388,194.188532 C35.3637714,194.343311 36.0504968,194.348001 36.5820035,194.425391 C37.1276209,194.481675 37.5580002,194.528577 37.8519751,194.556719 C38.14595,194.594241 38.310576,194.598932 38.310576,194.598932 L19.5573281,228.268133 C19.5573281,228.268133 19.3597769,228.218885 19.0140624,228.087557 C18.6683479,227.960919 18.1650629,227.780344 17.5277253,227.55052 C16.9115538,227.297244 16.1119421,227.093217 15.3170339,226.675782 C14.5315329,226.263037 13.6566636,225.805734 12.7182956,225.313254 C9.23057721,223.237804 5.48651267,219.729472 3.2546551,214.870338 C1.1309803,210.517754 0.218482158,205.184902 0.0679670008,200.928469 C-0.0519747653,198.946825 0.0491526061,197.124649 0.0938367935,195.902831 C0.112651188,195.307165 0.136169181,194.828756 0.17614977,194.479329 C0.209074961,194.139284 0.227889356,193.958708 0.227889356,193.958708 L18.362614,174.747306 Z"
                    id="Fill-46"
                  />
                  <path
                    d="M18.5554616,168.632583 C18.5554616,168.632583 18.4849076,169.181346 18.40965,170.105332 C18.3931874,170.548564 18.3696694,171.097327 18.3437996,171.72817 C18.3296888,172.049455 18.315578,172.391846 18.2991154,172.752997 C18.3108744,173.088353 18.3226334,173.444814 18.3343924,173.815347 C18.374373,176.941421 18.9623229,180.796834 20.425142,183.925253 C21.9397008,187.328054 24.4349599,189.879568 26.8290916,191.314795 C27.3911717,191.762717 28.0543791,191.976125 28.5788303,192.266923 C29.1291514,192.529579 29.5854004,192.806305 30.0369459,192.921217 C30.9118153,193.21905 31.4174521,193.394936 31.4174521,193.394936 L11.6529305,224.601738 C11.6529305,224.601738 11.1002577,224.205409 10.1407236,223.520628 C9.64919749,223.213414 9.16002323,222.690448 8.57442519,222.14403 C8.01940055,221.571815 7.32091615,221.055884 6.74237351,220.24681 C4.29415041,217.477197 1.94940647,213.05426 0.872282373,207.660434 C-0.174268331,202.770813 -0.134287742,197.081499 0.35488652,192.63511 C0.406626105,192.107453 0.45836569,191.600902 0.503049878,191.124839 C0.580659256,190.620633 0.653565035,190.146914 0.719415416,189.701337 C0.855819778,188.819564 0.971057945,188.059738 1.06512992,187.440621 C1.29795805,186.171899 1.46023221,185.423799 1.46023221,185.423799 L18.5554616,168.632583 Z"
                    id="Fill-48"
                  />
                  <path
                    d="M19.6006012,162.192589 C19.6006012,162.192589 19.4830112,162.746043 19.2713493,163.723967 C19.1561111,164.228172 19.0973161,164.767555 18.9797262,165.43592 C18.8856542,166.085525 18.711621,166.894599 18.6575297,167.652079 C18.2247986,170.975145 18.1189676,175.172949 18.817452,178.749291 C19.5182882,182.616429 21.1198636,185.76361 22.7896411,187.745255 C24.5111582,189.879334 26.1056782,190.822081 26.1056782,190.822081 L6.00720104,219.320244 C6.00720104,219.320244 4.3797559,217.495724 2.81816114,213.87717 C1.31771317,210.537688 0.113591908,205.537846 0.0289271318,199.768797 C-0.10512543,194.508644 0.722707936,188.622338 1.73398165,184.082143 C1.92682919,183.03621 2.22785951,181.966825 2.43716965,181.082707 C2.66764599,180.184517 2.82992014,179.443453 3.03217488,178.775087 C3.40846278,177.475879 3.62247652,176.739504 3.62247652,176.739504 L19.6006012,162.192589 Z"
                    id="Fill-50"
                  />
                  <path
                    d="M21.3907908,155.53051 C21.3907908,155.53051 21.2214613,156.093344 20.920431,157.087684 C20.5770683,158.126582 20.264279,159.477384 19.8150853,161.182302 C19.0037145,164.601519 18.2746567,169.057288 18.3075819,172.973675 C18.2958229,177.192585 19.1001383,180.813484 20.1137638,183.236016 C20.3865725,183.845753 20.6405669,184.410932 20.8686914,184.917483 C21.1485555,185.370095 21.3931426,185.766424 21.5953974,186.097089 C21.8023557,186.430099 21.9622781,186.6951 22.0728127,186.873331 C22.1998098,187.037491 22.2703638,187.121916 22.2703638,187.121916 L2.35297523,212.812945 C2.35297523,212.812945 2.29182845,212.667546 2.18129388,212.397855 C2.08722191,212.104712 1.95316935,211.675551 1.7838398,211.136168 C1.61921384,210.596786 1.4216627,209.947181 1.19588996,209.215497 C1.03126401,208.418149 0.850175459,207.52934 0.652624315,206.577213 C-0.0270456923,202.820295 -0.264577425,197.426469 0.473887566,191.441667 C1.10181799,185.961071 2.59991416,179.945782 4.01334556,175.393862 C4.74710696,173.156596 5.3115388,171.364908 5.82187925,170.023487 C6.29694272,168.728969 6.56269604,167.997284 6.56269604,167.997284 L21.3907908,155.53051 Z"
                    id="Fill-52"
                  />
                  <path
                    d="M23.8448935,148.710369 C23.8448935,148.710369 23.7860985,148.855768 23.6732121,149.132494 C23.5720847,149.39984 23.4239214,149.791479 23.2334256,150.293339 C23.0429299,150.79989 22.8077499,151.416662 22.537293,152.131931 C22.2997613,152.821402 22.0316562,153.607025 21.7376813,154.472382 C20.568837,157.980714 19.3411977,162.565467 18.7650069,166.7492 C18.1088549,171.237801 18.2287966,175.212817 18.6638795,177.973049 C18.9555026,179.330886 19.138943,180.55974 19.4235107,181.260937 C19.665746,182.023109 19.806854,182.463995 19.806854,182.463995 L0.456249071,205.373686 C0.456249071,205.373686 0.378639693,204.70063 0.24693893,203.53744 C0.0752575787,202.442259 0.063498582,200.648225 0,198.617332 C0.007055398,194.586033 0.559728242,188.969419 1.99902943,182.853289 C3.28781547,177.213223 5.3127147,171.176828 7.09067499,166.631943 C7.53516507,165.515655 7.93732275,164.504899 8.29009265,163.620781 C8.68284314,162.710866 9.01915045,161.925243 9.29431097,161.280329 C9.57182329,160.64245 9.78583703,160.142935 9.93164859,159.80289 C10.0892191,159.455809 10.1762357,159.270542 10.1762357,159.270542 L23.8448935,148.710369 Z"
                    id="Fill-54"
                  />
                  <path
                    d="M26.8763628,141.796422 C26.8763628,141.796422 25.7004631,144.207227 24.2940871,147.626444 C22.8124535,151.19106 21.142676,155.871963 20.0632001,160.217511 C18.8802451,164.853856 18.3628492,169.114979 18.3275722,172.095654 C18.2664254,172.916454 18.341683,173.540262 18.3463866,174.166414 C18.3746082,174.769116 18.353442,175.350711 18.4145888,175.749385 C18.5086608,176.584256 18.5627521,177.067355 18.5627521,177.067355 L0.0446841874,197.303584 C0.0446841874,197.303584 0.07055398,196.600041 0.115238167,195.389948 C0.124645365,194.803663 0.232828134,193.994589 0.305733914,193.133922 C0.404509486,192.254493 0.449193673,191.339888 0.642041218,190.20953 C1.18295507,186.056284 2.42705691,180.273164 4.42608635,174.124202 C6.24637903,168.423162 8.71812013,162.412563 10.8018143,157.905201 C12.7726222,153.606556 14.3436241,150.62119 14.3436241,150.62119 L26.8763628,141.796422 Z"
                    id="Fill-56"
                  />
                  <path
                    d="M30.3800734,134.863948 C30.3800734,134.863948 30.0696359,135.447888 29.5240185,136.47506 C29.2347472,137.002717 28.9407723,137.607764 28.5785952,138.320687 C28.2305289,139.024229 27.7813352,139.866135 27.3909365,140.717422 C25.6411978,144.300799 23.5927806,149.03095 22.0735182,153.491409 C20.4343141,158.226251 19.3901152,162.656224 18.9174035,165.812785 C18.8515531,166.22553 18.7857027,166.621859 18.7222041,167.001772 C18.6869272,167.355888 18.6516502,167.698279 18.618725,168.019563 C18.5505228,168.666822 18.489376,169.236692 18.4399882,169.71041 C18.3764896,170.629706 18.3694342,171.129221 18.3694342,171.129221 L0.846177401,188.867874 C0.846177401,188.867874 0.940249374,188.166677 1.16367031,186.897955 C1.29537107,186.248351 1.45294163,185.469764 1.62932658,184.5833 C1.72104675,184.144758 1.81511873,183.678075 1.9138943,183.190286 C2.04324326,182.679045 2.17494402,182.144352 2.31134839,181.590899 C3.3249739,177.341502 5.13350759,171.488028 7.59348969,165.369553 C9.85827245,159.663823 12.699246,153.723578 15.032231,149.284225 C15.5660894,148.224221 16.1399285,147.204084 16.6055847,146.331691 C17.0782964,145.459299 17.4733987,144.713544 17.8402794,144.075665 C18.5505228,142.821014 18.9526805,142.110436 18.9526805,142.110436 L30.3800734,134.863948 Z"
                    id="Fill-58"
                  />
                  <path
                    d="M34.2922916,127.954456 C34.2922916,127.954456 34.2029233,128.099855 34.0477045,128.371892 C33.890134,128.641583 33.6573058,129.040257 33.3609791,129.549153 C33.069356,130.055703 32.6813091,130.693582 32.2932622,131.394779 C31.8981599,132.103012 31.451318,132.905051 30.9574402,133.789169 C29.0077985,137.35144 26.5854452,142.123803 24.6993022,146.645237 C22.6720511,151.426981 21.1692514,155.974211 20.3108446,159.2621 C19.8310775,160.992815 19.5723796,162.329545 19.3630695,163.302779 C19.2525349,163.797604 19.1725737,164.184553 19.1420003,164.426102 C19.1020197,164.677032 19.0808535,164.813051 19.0808535,164.813051 L2.64647979,180.239394 C2.64647979,180.239394 2.69351578,180.058818 2.77818055,179.718772 C2.85343813,179.390452 2.99924969,178.876866 3.19209724,178.220227 C3.56838513,176.923363 4.06461479,175.136365 4.84070857,172.866268 C6.26119537,168.562932 8.53538533,162.707113 11.3716553,156.666028 C13.9986152,151.007201 17.1853033,145.137311 19.697025,140.801143 C20.329659,139.729414 20.9011462,138.75618 21.4044313,137.900203 C21.9030127,137.051262 22.3851316,136.28909 22.7543641,135.677008 C23.1283002,135.064926 23.4222751,134.584172 23.6221781,134.258198 C23.8197292,133.936913 23.9302638,133.761028 23.9302638,133.761028 L34.2922916,127.954456 Z"
                    id="Fill-60"
                  />
                  <path
                    d="M38.5871476,121.08624 C38.5871476,121.08624 37.0279046,123.433726 34.9512658,126.871704 C32.8017212,130.412869 30.1253736,135.14771 27.8676462,139.727772 C25.4805699,144.540003 23.6061858,149.141171 22.4044164,152.522866 C22.1104414,153.381188 21.8399845,154.169155 21.5977492,154.875043 C21.3672729,155.576241 21.2049987,156.160181 21.0497799,156.662041 C20.896913,157.161556 20.7769712,157.55554 20.6946582,157.825232 C20.6076417,158.101958 20.5770683,158.235631 20.5770683,158.235631 L5.285669,171.51617 C5.285669,171.51617 5.34211219,171.340284 5.47381295,170.981477 C5.60316191,170.629706 5.78895406,170.118465 6.0264858,169.468861 C6.26636933,168.819256 6.53447445,168.05474 6.88254075,167.151861 C7.24706965,166.2396 7.65157914,165.221809 8.08901381,164.126628 C9.85756691,159.811567 12.4986376,154.012031 15.6688631,148.062406 C18.646241,142.443446 22.0610537,136.71192 24.7515121,132.467213 C26.0426499,130.403488 27.202087,128.658702 27.987588,127.45799 C28.3732831,126.864669 28.6978314,126.388605 28.9165487,126.064976 C29.1329143,125.743691 29.2505042,125.572496 29.2505042,125.572496 L38.5871476,121.08624 Z"
                    id="Fill-62"
                  />
                  <path
                    d="M43.1839746,114.300572 C43.1839746,114.300572 42.7865205,114.868096 42.0856843,115.869471 C41.7235072,116.376022 41.3354603,116.971688 40.858045,117.67054 C40.3876852,118.367048 39.8326605,119.169086 39.2846913,120.020373 C36.9658171,123.519324 34.0542895,128.211953 31.5166981,132.78967 C28.8474058,137.573759 26.5802713,142.245282 25.1198039,145.657463 C24.7270534,146.543927 24.4283749,147.315478 24.1249928,148.033092 C23.9768294,148.389553 23.8380732,148.727254 23.7087243,149.036813 C23.5958379,149.336991 23.4900069,149.616063 23.395935,149.864648 C23.0125917,150.875404 22.7938743,151.456999 22.7938743,151.456999 L8.65956033,162.760583 C8.65956033,162.760583 8.97705324,162.019518 9.52972608,160.736725 C9.66848224,160.415441 9.8189974,160.066015 9.98597515,159.683756 C10.1647119,159.292118 10.3599112,158.867647 10.5668696,158.41738 C10.9854899,157.516845 11.4182209,156.538921 11.9544312,155.429669 C13.9769786,151.163856 16.9872818,145.406533 20.4115016,139.588236 C23.6452257,134.060737 27.2646449,128.460538 30.1032667,124.314327 C30.7782331,123.303571 31.4461441,122.360824 32.0199831,121.535334 C32.5985258,120.712189 33.0782928,120.008647 33.5110239,119.412981 C34.3576717,118.238065 34.8374387,117.569699 34.8374387,117.569699 L43.1839746,114.300572 Z"
                    id="Fill-64"
                  />
                  <path
                    d="M48.0472604,107.617621 C48.0472604,107.617621 47.6333437,108.175765 46.9042859,109.156034 C46.1517101,110.148029 45.1474918,111.552769 43.9175008,113.252997 C43.3224955,114.101938 42.6757507,115.025924 41.9866735,116.008538 C41.3117071,116.991153 40.6226299,118.023015 39.8841649,119.104126 C39.1833287,120.175855 38.4401601,121.301524 37.7111023,122.434227 C37.3536288,122.999406 36.9914517,123.571621 36.6292746,124.150871 C36.2553385,124.732466 35.8931614,125.314061 35.5497987,125.886276 C32.6429748,130.623462 30.0912725,135.285604 28.374459,138.728273 C28.151038,139.166814 27.9370243,139.591285 27.730066,139.999339 C27.5442738,140.393323 27.3655371,140.768546 27.1962075,141.122662 C26.8575484,141.835585 26.5612217,142.459393 26.3142828,142.97767 C25.8627373,143.990771 25.6040394,144.572366 25.6040394,144.572366 L12.6174034,154.072536 C12.6174034,154.072536 12.9725251,153.345542 13.5910484,152.083855 C13.9226521,151.441286 14.3201061,150.665044 14.7740034,149.783271 C14.9997762,149.347075 15.2396597,148.882737 15.4913022,148.394947 C15.7594073,147.895432 16.0416233,147.372465 16.3355982,146.833083 C18.5956773,142.614173 21.8670302,136.962381 25.4982084,131.287137 C25.9285877,130.600011 26.3777813,129.908194 26.8363822,129.214032 C27.2879277,128.526906 27.7347696,127.844469 28.174556,127.171414 C29.0705916,125.827647 29.9783861,124.497952 30.8391447,123.226885 C31.7328284,121.951128 32.5724208,120.736344 33.3931988,119.577844 C34.2257357,118.419344 35.0065331,117.335889 35.7214801,116.341549 C37.1937065,114.345833 38.4048831,112.704234 39.2962151,111.545733 C40.1663808,110.401304 40.6626105,109.74701 40.6626105,109.74701 L48.0472604,107.617621 Z"
                    id="Fill-66"
                  />
                  <path
                    d="M53.175594,101.042547 C53.175594,101.042547 53.0650595,101.18091 52.8557493,101.438876 C52.6417356,101.696841 52.3430571,102.074409 51.9667692,102.557508 C51.5857777,103.040608 51.1224732,103.629238 50.5909666,104.304639 C50.0524045,104.98473 49.4856209,105.744556 48.8412279,106.579427 C46.261304,109.958776 42.9405633,114.522422 39.9232048,119.048546 C36.8000153,123.722413 34.0084295,128.354069 32.068195,131.796737 C31.5860761,132.66913 31.1227717,133.485239 30.7347248,134.195817 C30.3584369,134.901705 30.029185,135.523167 29.7563763,136.036753 C29.1942962,137.077996 28.9191357,137.645521 28.9191357,137.645521 L17.0519563,145.506436 C17.0519563,145.506436 17.4211888,144.805239 18.1431911,143.536517 C18.4983128,142.910364 18.9263403,142.152883 19.4131628,141.294561 C19.9093924,140.431549 20.4973423,139.444244 21.1182173,138.38893 C23.5805512,134.233339 27.0659178,128.698804 30.8852399,123.161925 C34.5563987,117.829072 38.5332914,112.482149 41.6023895,108.539965 C42.3667243,107.564386 43.0463943,106.677923 43.6790283,105.88761 C44.3093105,105.101987 44.854928,104.417206 45.3041217,103.856717 C45.7509635,103.298573 46.1060852,102.857687 46.355376,102.557508 C46.5999631,102.259675 46.7316639,102.097861 46.7316639,102.097861 L53.175594,101.042547 Z"
                    id="Fill-68"
                  />
                  <path
                    d="M58.5212339,94.5957518 C58.5212339,94.5957518 58.0626331,95.1327893 57.2536141,96.0802266 C56.85616,96.5539452 56.3834483,97.128505 55.8307755,97.7921801 C55.2757508,98.4558553 54.6501722,99.2086458 53.996372,100.0271 C51.30121,103.338441 47.8228988,107.820007 44.6150445,112.287502 C41.3013592,116.886325 38.2604827,121.485148 36.1485669,124.90671 C35.0949608,126.63977 34.1824626,128.114864 33.615679,129.113895 C33.0183219,130.134031 32.677311,130.722662 32.677311,130.722662 L21.8919593,137.089722 C21.8919593,137.089722 22.3246904,136.381489 23.0749144,135.152635 C23.7992685,133.947232 24.9234286,132.188375 26.2451399,130.11527 C28.8650443,126.041759 32.5738319,120.608065 36.5601317,115.207203 C40.4006201,109.984573 44.5233243,104.764287 47.6982534,100.920599 C48.4719954,99.9708169 49.203405,99.0984241 49.8525016,98.3292176 C50.4992464,97.5623562 51.0566228,96.8916457 51.5222791,96.3452276 C52.4653506,95.2500464 53.0039127,94.6262387 53.0039127,94.6262387 L58.5212339,94.5957518 Z"
                    id="Fill-70"
                  />
                  <path
                    d="M64.0700693,88.2772362 C64.0700693,88.2772362 63.5973576,88.8072382 62.7648206,89.7312241 C62.3485522,90.1955622 61.8429153,90.7607414 61.2784835,91.4103457 C60.7140516,92.0599499 60.0626032,92.7963245 59.3688224,93.6007081 C56.5678294,96.8346587 52.9437066,101.229455 49.564171,105.633631 C46.0929152,110.140994 42.8662465,114.678843 40.5873529,118.069918 C39.9899959,118.937621 39.4749518,119.723243 39.0234064,120.41975 C38.5648055,121.120948 38.1532406,121.74241 37.8310441,122.244271 C37.1960583,123.250336 36.8291776,123.829586 36.8291776,123.829586 L27.0856729,128.831774 C27.0856729,128.831774 27.5372184,128.144647 28.3227194,126.94628 C28.7225253,126.345924 29.2211067,125.616585 29.7831868,124.784059 C30.3382114,123.960914 30.9708454,123.029893 31.690496,122.007411 C34.4609157,118.01129 38.3390328,112.697198 42.461737,107.437045 C46.4644995,102.315255 50.723608,97.2216071 53.9949609,93.4764156 C54.8063317,92.5453943 55.5612593,91.696453 56.2244667,90.9460076 C56.8806187,90.193217 57.4662167,89.5436128 57.9506874,89.0089204 C58.9196287,87.9371906 59.467598,87.3297989 59.467598,87.3297989 L64.0700693,88.2772362 Z"
                    id="Fill-72"
                  />
                  <path
                    d="M69.8138688,82.0959113 C69.8138688,82.0959113 69.6892234,82.2248941 69.4610989,82.4664437 C69.2329744,82.7103385 68.896667,83.0668 68.4686396,83.5194124 C68.0429639,83.9743699 67.5185126,84.5231331 66.9258592,85.1610117 C66.3402612,85.7965451 65.6770538,86.5188488 64.9550514,87.3044713 C62.0693936,90.4633774 58.2947556,94.7620224 54.7458905,99.0981896 C51.1335267,103.514092 47.7375284,107.974551 45.3104715,111.325759 C44.7013555,112.172355 44.1228129,112.957978 43.640694,113.64745 C43.1562233,114.336921 42.7352512,114.941968 42.3848331,115.441483 C42.034415,115.943343 41.7545509,116.339672 41.5805178,116.602328 C41.3994292,116.867329 41.3030055,117.010383 41.3030055,117.010383 L32.5637191,120.75792 C32.5637191,120.75792 32.6789573,120.589069 32.9000264,120.27482 C33.116392,119.962917 33.4503475,119.498578 33.8736714,118.909948 C34.2946434,118.321317 34.8049839,117.61543 35.3882301,116.801665 C35.9714764,115.994937 36.6605536,115.075641 37.3896114,114.083646 C40.2964353,110.167259 44.3274194,104.96808 48.5818244,99.8415996 C52.746861,94.8229961 57.1447258,89.8536405 60.4960398,86.2069449 C61.3332804,85.2993751 62.099967,84.47154 62.779637,83.7351654 C63.4640106,83.0034812 64.0707748,82.3702929 64.5623009,81.8473263 C65.0585305,81.3243596 65.4465774,80.9139598 65.7099789,80.6348879 C65.9733805,80.3558161 66.119192,80.2080721 66.119192,80.2080721 L69.8138688,82.0959113 Z"
                    id="Fill-74"
                  />
                  <path
                    d="M75.7498103,76.0545914 C75.7498103,76.0545914 75.2347663,76.5517615 74.3598969,77.4452605 C73.9177586,77.8884923 73.3839002,78.4302201 72.7700806,79.0469924 C72.1539091,79.6661098 71.4812945,80.3766878 70.7334223,81.1458943 C67.7560444,84.2297559 63.8591129,88.4299049 60.1620843,92.6910276 C59.2143092,93.7627574 58.3229772,94.8391775 57.4081273,95.9015268 C56.5073882,96.9685663 55.6442778,98.021535 54.7905746,99.046362 C53.9627413,100.068844 53.1607777,101.065529 52.3940911,102.010621 C51.6485707,102.960404 50.9430309,103.856248 50.2845271,104.691118 C49.0122037,106.358514 47.9256724,107.763254 47.215429,108.738833 C46.4840194,109.719102 46.0630473,110.286627 46.0630473,110.286627 L38.2974059,112.863938 C38.2974059,112.863938 38.7959874,112.204953 39.6708567,111.055833 C40.5222081,109.916094 41.8039387,108.281531 43.3208493,106.339753 C44.0969431,105.368864 44.9318318,104.325276 45.8137566,103.22306 C46.7050885,102.125533 47.6599191,100.969378 48.633564,99.7803914 C49.6330787,98.5937496 50.649056,97.3742759 51.7026621,96.1383861 C52.7680272,94.9095318 53.8192815,93.6619163 54.9199236,92.4213363 C59.22842,87.505919 63.7438747,82.660856 67.1751499,79.1173467 C68.0359085,78.2332282 68.8143541,77.4147737 69.5222457,76.7041957 C70.2254337,75.9936177 70.8416051,75.3745003 71.3448902,74.8632594 C72.3561639,73.8407775 72.9441137,73.2685629 72.9441137,73.2685629 L75.7498103,76.0545914 Z"
                    id="Fill-76"
                  />
                  <path
                    d="M81.8452038,70.1710996 C81.8452038,70.1710996 81.7158549,70.2930469 81.4712677,70.5205257 C81.2266806,70.7526947 80.8645035,71.0810146 80.4153098,71.517211 C79.5169225,72.3896037 78.2163775,73.6090775 76.6924115,75.1263843 C73.6303687,78.130511 69.6087919,82.2345092 65.775359,86.4135519 C61.8972419,90.6230815 58.1861025,94.9264168 55.5168103,98.169748 C54.8277331,98.9905476 54.230376,99.740993 53.6871104,100.411704 C53.1509001,101.077724 52.6640777,101.666354 52.2901416,102.147109 C51.5305104,103.110962 51.0954275,103.664415 51.0954275,103.664415 L44.2752095,105.1442 C44.2752095,105.1442 44.7902535,104.501631 45.6862891,103.378308 C46.1331309,102.822509 46.6999146,102.140073 47.3349004,101.363831 C47.972238,100.589934 48.6777778,99.7198867 49.484445,98.7677591 C52.6170417,95.0108419 56.9490561,90.0344509 61.4433446,85.1800073 C65.8905971,80.363086 70.5142346,75.6493509 74.025471,72.1996473 C77.541411,68.7382179 79.9496536,66.491572 79.9496536,66.491572 L81.8452038,70.1710996 Z"
                    id="Fill-78"
                  />
                  <path
                    d="M88.0887607,64.4592721 C88.0887607,64.4592721 87.5549022,64.9353359 86.6259415,65.7655161 C86.1602852,66.1759159 85.600557,66.6988826 84.9585158,67.2828229 C84.3164746,67.8737986 83.5897686,68.5234029 82.8089712,69.2668129 C79.6810781,72.1700985 75.5489666,76.1732556 71.5767776,80.2725635 C67.5834223,84.3789069 63.7405822,88.5931268 60.9560518,91.7801745 C58.1338926,94.9977091 56.3512287,97.1646202 56.3512287,97.1646202 L50.4646749,97.6031617 C50.4646749,97.6031617 50.5963757,97.4436921 50.8456664,97.1482042 C51.0926054,96.8550615 51.4524307,96.4259005 51.9274941,95.8747922 C52.8705657,94.7843012 54.1946287,93.2294722 55.8455918,91.374465 C59.0887231,87.6949374 63.5477346,82.8311133 68.1478541,78.1103427 C72.719752,73.4036431 77.4562759,68.8095102 81.0592325,65.4465768 C81.9599716,64.5952903 82.7972122,63.8354644 83.5333254,63.1530281 C84.2741422,62.472937 84.9185352,61.8725807 85.4547454,61.3918266 C86.5295177,60.4279733 87.1433374,59.876865 87.1433374,59.876865 L88.0887607,64.4592721 Z"
                    id="Fill-80"
                  />
                  <path
                    d="M94.4790699,58.9308347 C94.4790699,58.9308347 93.9334524,59.3928277 92.9833255,60.2019016 C92.0331985,60.9922144 90.6879693,62.1812013 89.074635,63.5789059 C85.8785397,66.3954212 81.6547081,70.260215 77.5602254,74.2727526 C73.4610392,78.2688743 69.4841465,82.4010143 66.5914333,85.5247432 C65.8694309,86.3080206 65.2062235,87.0279791 64.6182737,87.6682028 C64.0420829,88.3107717 63.536446,88.8736057 63.1225293,89.3355987 C62.7062608,89.7999368 62.3793607,90.1634337 62.153588,90.4120188 C61.9301671,90.6606038 61.8172807,90.7942769 61.8172807,90.7942769 L56.8502805,90.2361331 C56.8502805,90.2361331 56.9819813,90.0813538 57.243031,89.7929013 C57.5017289,89.506794 57.8827204,89.0846685 58.3648393,88.5499762 C58.8493099,88.0152838 59.4302044,87.3680247 60.1051708,86.629305 C60.7871926,85.8905853 61.556231,85.0604051 62.3911197,84.1551803 C65.7424338,80.5553876 70.3213871,75.8111657 75.0202822,71.219378 C79.7262326,66.606484 84.596809,62.1249179 88.2820786,58.8534451 C90.1423519,57.2212263 91.699243,55.8422829 92.7975333,54.9136068 C93.8958236,53.9708597 94.5284576,53.429132 94.5284576,53.429132 L94.4790699,58.9308347 Z"
                    id="Fill-82"
                  />
                  <path
                    d="M101.012133,53.6061902 C101.012133,53.6061902 100.873377,53.7140667 100.612327,53.9204392 C100.351278,54.1244665 99.9679343,54.4363704 99.4834637,54.8280091 C98.998993,55.2173026 98.4110432,55.6910213 97.7384285,56.2304039 C97.0681657,56.7838574 96.3108864,57.4100103 95.4901084,58.0901014 C92.2281627,60.7987402 87.9102591,64.5392414 83.6981865,68.4368672 C79.5119837,72.2993158 75.4175011,76.3399952 72.4189569,79.4004053 C70.9349715,80.9411635 69.6791107,82.2216109 68.8348147,83.1338711 C67.9787598,84.041441 67.4895855,84.5573722 67.4895855,84.5573722 L63.4303799,83.0447557 C63.4303799,83.0447557 63.9971635,82.4467445 64.9849192,81.4008113 C65.9656195,80.3525329 67.4049207,78.8797838 69.1193824,77.1092017 C72.5624167,73.5961792 77.2589599,68.9598338 82.0825004,64.4899935 C86.9366142,59.9755954 91.9247806,55.6159767 95.6970667,52.4429998 C96.6495455,51.6479968 97.5244148,50.9163125 98.3028604,50.2643631 C99.081306,49.6288296 99.7633278,49.0706859 100.325408,48.6133832 C101.454271,47.6847071 102.101016,47.1734661 102.101016,47.1734661 L101.012133,53.6061902 Z"
                    id="Fill-84"
                  />
                  <path
                    d="M107.677133,48.5012854 C107.677133,48.5012854 107.110349,48.923411 106.122593,49.6574404 C105.626364,50.0350082 105.024303,50.494656 104.339929,51.0176226 C103.657907,51.5312087 102.884165,52.1362553 102.042221,52.7975853 C98.7191289,55.3936573 94.3095051,59.0028306 89.9868979,62.7855444 C85.7136786,66.5119748 81.5086613,70.4330519 78.430156,73.4254529 C77.6540622,74.1641726 76.9602814,74.86537 76.3370546,75.4751069 C75.7185314,76.089534 75.1705621,76.6148458 74.7354793,77.065113 C73.8535545,77.9539218 73.3502694,78.4604724 73.3502694,78.4604724 L70.1894511,76.0309055 C70.1894511,76.0309055 70.7679938,75.4469652 71.7792675,74.4291736 C72.2825526,73.9155875 72.9081312,73.3058507 73.6207264,72.599963 C74.3356734,71.9034558 75.1329333,71.1014173 76.0219135,70.2454406 C79.5590197,66.8027723 84.4037263,62.2649229 89.3354495,57.9287556 C94.3306713,53.5175438 99.4411313,49.2845628 103.298082,46.2194624 C104.276431,45.4361851 105.174818,44.7256071 105.969726,44.1135251 C106.766986,43.4944076 107.467822,42.9503347 108.044013,42.5000675 C109.201099,41.6182941 109.861954,41.1211241 109.861954,41.1211241 L107.677133,48.5012854 Z"
                    id="Fill-86"
                  />
                  <path
                    d="M114.469364,43.625501 C114.469364,43.625501 113.890822,44.0288654 112.8819,44.7347531 C112.383318,45.0771438 111.77185,45.5156854 111.068662,46.0245811 C110.367826,46.5334769 109.591732,47.0775498 108.730974,47.7177736 C105.351438,50.189553 100.850094,53.6533275 96.4193043,57.3187842 C92.0637719,60.9091964 87.7529238,64.7083262 84.5921054,67.6186472 C84.1970032,67.9821442 83.8183635,68.32688 83.4585382,68.6551999 C83.1034165,68.9905552 82.7647574,69.3071493 82.4472645,69.6049823 C81.8122786,70.2006484 81.257254,70.7212698 80.8033567,71.1457405 C79.897914,72.013443 79.3828699,72.5082679 79.3828699,72.5082679 L77.1180872,69.1898922 C77.1180872,69.1898922 77.7107406,68.6200228 78.7502359,67.6209923 C79.2723354,67.1285125 79.909673,66.5305014 80.6410826,65.8410297 C81.0079633,65.4962938 81.3960102,65.1304517 81.807575,64.7435033 C82.2214917,64.3612452 82.6565746,63.9602259 83.1128237,63.5404455 C86.7557608,60.1728219 91.73452,55.7451941 96.7767778,51.5403547 C101.915459,47.2393646 107.148213,43.1377115 111.089829,40.1898683 C112.094047,39.4276972 113.006545,38.7710574 113.827323,38.1613206 C114.648101,37.5539288 115.3654,37.0286171 115.950998,36.6135269 C117.136305,35.7645856 117.815975,35.2767961 117.815975,35.2767961 L114.469364,43.625501 Z"
                    id="Fill-88"
                  />
                  <path
                    d="M121.369779,39.0212841 C121.369779,39.0212841 121.223967,39.1150897 120.951158,39.2862851 C120.675998,39.4692062 120.271488,39.7342072 119.756444,40.0695625 C119.246104,40.4072629 118.625229,40.8129724 117.919689,41.2749654 C117.207094,41.7580646 116.407482,42.2997924 115.539668,42.8860778 C112.106041,45.2382551 107.536495,48.509728 102.99517,52.0508921 C98.5549733,55.4959055 94.1453495,59.1683976 90.8998664,61.9896032 C89.2865321,63.3802723 87.9554137,64.580985 87.0241011,65.40882 C86.5584449,65.8239101 86.1915642,66.15223 85.9446252,66.3820539 C85.7000381,66.6071875 85.5659856,66.7267898 85.5659856,66.7267898 L84.2348671,62.5078796 C84.2348671,62.5078796 84.3877341,62.3695162 84.6723018,62.1068603 C84.9568695,61.8418593 85.3778416,61.4619463 85.9140519,60.9811922 C86.9888241,60.0149938 88.5269009,58.6243247 90.389526,57.0014865 C94.1406459,53.7112525 99.2511059,49.4055721 104.40625,45.3390962 C109.693095,41.1459826 115.041087,37.2249054 119.074422,34.3825935 C120.095103,33.6720155 121.038175,33.0153758 121.880119,32.4290904 C122.715008,31.861566 123.448769,31.364396 124.053182,30.9563413 C124.659946,30.5435963 125.139713,30.2199668 125.466613,29.9995234 C125.791161,29.7837704 125.965195,29.6712036 125.965195,29.6712036 L121.369779,39.0212841 Z"
                    id="Fill-90"
                  />
                  <path
                    d="M128.352976,34.7350683 C128.352976,34.7350683 126.027047,36.069454 122.452312,38.3372062 C118.981056,40.5275687 114.333901,43.6395719 109.698504,47.0095407 C105.192457,50.2692879 100.677002,53.8315583 97.3539094,56.5472326 C96.5307796,57.2296688 95.775852,57.8511314 95.107941,58.4045849 C94.4447336,58.9533481 93.8638391,59.4552085 93.3887757,59.8562277 C92.9137122,60.2595921 92.5397761,60.5761863 92.2881336,60.7895942 C92.0341393,61.0030021 91.8977349,61.1226043 91.8977349,61.1226043 L91.544965,55.9890888 C91.544965,55.9890888 92.1681918,55.4520513 93.2664821,54.5116495 C93.8168032,54.0402759 94.487066,53.4586808 95.2561044,52.8137668 C96.0298463,52.1665076 96.9023639,51.4348234 97.8595462,50.63513 C101.711794,47.4410468 106.963361,43.2385526 112.224337,39.3456172 C117.654641,35.3025927 123.131982,31.522224 127.249982,28.8253109 C129.373657,27.4158807 131.106933,26.3441508 132.355739,25.5468026 C132.981317,25.1457834 133.456381,24.8643663 133.792688,24.6556487 C134.124292,24.4516214 134.303029,24.3437449 134.303029,24.3437449 L128.352976,34.7350683 Z"
                    id="Fill-92"
                  />
                  <path
                    d="M135.402495,30.7926504 C135.402495,30.7926504 134.802786,31.1139348 133.763291,31.6720786 C133.255302,31.9370796 132.613261,32.3005766 131.881851,32.7109764 C131.150442,33.1307568 130.360237,33.5481921 129.452443,34.0899198 C125.955317,36.1020515 121.247015,39.0147177 116.52225,42.2228717 C111.950352,45.3114235 107.350232,48.6860826 103.947179,51.3149866 C103.109938,51.9481749 102.333844,52.5766729 101.654174,53.1019847 C100.976856,53.6343319 100.386555,54.0939797 99.8973803,54.4926538 C98.928439,55.273586 98.3734144,55.719163 98.3734144,55.719163 L99.0413254,49.6616616 C99.0413254,49.6616616 99.6810148,49.138695 100.807527,48.2193994 C101.371959,47.7527162 102.058684,47.2086433 102.846537,46.5801452 C103.636741,45.9539924 104.53748,45.219963 105.513477,44.4671725 C109.478611,41.3528241 114.857176,37.316835 120.233389,33.5763338 C125.816561,29.6740177 131.42325,26.0695347 135.623564,23.5320913 C136.714799,22.8566904 137.676685,22.3102724 138.55861,21.7826154 C139.440534,21.2596488 140.216628,20.800001 140.839855,20.4505749 C142.105123,19.7329615 142.834181,19.3178714 142.834181,19.3178714 L135.402495,30.7926504 Z"
                    id="Fill-94"
                  />
                  <path
                    d="M142.480941,27.2587562 C142.480941,27.2587562 142.337481,27.3197298 142.050561,27.4604384 C141.768345,27.5988017 141.354429,27.7981388 140.829977,28.049069 C140.305526,28.3070346 139.689355,28.5907967 138.953242,28.9636743 C138.21948,29.3365518 137.398702,29.7539871 136.509722,30.2089446 C132.989078,32.0405004 128.269017,34.6717495 123.452532,37.7040179 C118.826543,40.5955778 114.141759,43.8037318 110.670503,46.3130336 C108.9678,47.5231268 107.530851,48.6159629 106.543095,49.3406117 C106.051569,49.7064538 105.658818,50.0136674 105.395417,50.2130045 C105.129663,50.4170318 104.988556,50.520218 104.988556,50.520218 L106.724183,43.5270051 C106.724183,43.5270051 106.891161,43.3980223 107.199247,43.1588178 C107.504981,42.9219585 107.963582,42.5584615 108.537421,42.1246103 C109.689802,41.2569078 111.366635,39.9623895 113.358609,38.5060564 C117.429574,35.4995846 122.946895,31.6089943 128.440699,28.0443787 C134.188496,24.2921517 139.893961,20.9362538 144.185995,18.5606251 C145.274878,17.9673042 146.2838,17.418541 147.184539,16.9260612 C148.085278,16.4406169 148.851965,16.0536685 149.501062,15.7136229 C150.150158,15.3759225 150.660499,15.1109214 151.010917,14.9280004 C151.363687,14.7427342 151.544775,14.6559639 151.544775,14.6559639 L142.480941,27.2587562 Z"
                    id="Fill-96"
                  />
                  <path
                    d="M149.51917,24.231178 C149.51917,24.231178 147.221462,25.0988805 143.573822,26.7639312 C140.071992,28.3515923 135.316654,30.7366015 130.46254,33.5085592 C125.813033,36.1421534 121.043584,39.1861475 117.513533,41.5523957 C116.638664,42.1433714 115.843756,42.682754 115.140568,43.1564727 C114.432676,43.6512976 113.816505,44.0828037 113.31322,44.434575 C112.809935,44.7863463 112.414832,45.0607278 112.146727,45.2483392 C111.87627,45.442986 111.73281,45.5461722 111.73281,45.5461722 L114.604357,37.589106 C114.604357,37.589106 114.773687,37.4671586 115.088828,37.2326444 C115.403969,37.0075108 115.864922,36.6745006 116.455224,36.25003 C117.047877,35.8279044 117.769879,35.3096281 118.602416,34.7139621 C119.43025,34.1370572 120.368618,33.4804175 121.401058,32.7628041 C125.575501,29.8782796 131.248041,26.1307429 136.842972,22.7959512 C142.72247,19.2688579 148.554933,16.1334033 152.905761,13.9829082 C155.179951,12.8408241 157.002596,12.0106439 158.321955,11.3915265 C158.992218,11.0749323 159.497855,10.854489 159.845921,10.7020548 C160.193988,10.5496206 160.382132,10.4675406 160.382132,10.4675406 L149.51917,24.231178 Z"
                    id="Fill-98"
                  />
                  <path
                    d="M156.487317,21.7556463 C156.487317,21.7556463 155.90407,21.9409125 154.892797,22.2598518 C154.391863,22.4193215 153.742767,22.6655614 153.02782,22.9141464 C152.312873,23.172112 151.529724,23.4324227 150.614874,23.8053003 C147.155377,25.1138894 142.411798,27.1846497 137.517703,29.6962966 C132.854085,32.0695801 128.047007,34.8485732 124.453458,37.0811482 C123.578589,37.6134954 122.755459,38.1505329 122.042864,38.5961099 C121.687742,38.8188983 121.356138,39.0299611 121.048052,39.2246079 C120.737615,39.4286352 120.453047,39.6139014 120.194349,39.7827516 C119.171317,40.4534622 118.590422,40.8333752 118.590422,40.8333752 L122.673146,31.8890042 C122.673146,31.8890042 123.359871,31.4246661 124.5734,30.6038665 C124.876782,30.3998391 125.215441,30.1700152 125.582322,29.9214302 C125.94685,29.6822257 126.341953,29.421915 126.765277,29.1428431 C127.614276,28.5917348 128.590273,27.9374402 129.634472,27.2737651 C133.928857,24.4994623 139.723691,20.9840947 145.419749,17.8861623 C151.447411,14.5865477 157.383352,11.7395455 161.774162,9.85639663 C162.931247,9.33812029 163.937817,8.93710103 164.855019,8.56187834 C165.774572,8.18900078 166.602406,7.83957465 167.253854,7.59098962 C168.563806,7.09850983 169.321086,6.81005738 169.321086,6.81005738 L156.487317,21.7556463 Z"
                    id="Fill-100"
                  />
                  <path
                    d="M163.31412,19.9245596 C163.31412,19.9245596 162.737929,20.0582327 161.743118,20.2927468 C160.792991,20.4827033 159.290191,20.9376608 157.578081,21.4066892 C154.186787,22.4080648 149.502002,24.0918766 144.589093,26.3033454 C139.937234,28.3741056 135.097231,30.8927879 131.468405,32.9447871 C131.023915,33.1933721 130.598239,33.4325766 130.196082,33.6577102 C129.791572,33.8875341 129.401173,34.1243934 129.038996,34.3354562 C128.314642,34.7575817 127.689063,35.1234238 127.174019,35.423602 C126.132172,36.0567903 125.541871,36.4179421 125.541871,36.4179421 L130.934547,26.446399 C130.934547,26.446399 131.640086,26.0008221 132.88654,25.2128544 C133.502711,24.8329414 134.257639,24.3709485 135.125453,23.8362562 C135.560536,23.5736003 136.033247,23.2781124 136.52007,22.9873148 C137.004541,22.6988624 137.519585,22.3963391 138.058147,22.0773998 C142.456011,19.4625666 148.387249,16.1723326 154.172676,13.3581624 C155.696642,12.5936462 157.142998,11.9534225 158.638743,11.2451896 C160.122728,10.5697888 161.559677,9.95536162 162.991923,9.32217332 C164.38654,8.754649 165.755287,8.19650524 167.069943,7.6618129 C168.356378,7.17636854 169.586369,6.7143756 170.736398,6.28052436 C172.989422,5.50428241 174.941416,4.80543014 176.213739,4.44193316 C177.53545,4.03856876 178.299785,3.80405458 178.299785,3.80405458 L163.31412,19.9245596 Z"
                    id="Fill-102"
                  />
                  <path
                    d="M169.920559,18.8413386 C169.920559,18.8413386 169.360831,18.914038 168.389538,19.0430208 C167.902715,19.113375 167.347691,19.1649681 166.660965,19.2798801 C165.967185,19.4088629 165.195794,19.5519165 164.360906,19.7043508 C161.056628,20.3633356 156.487081,21.6015705 151.632968,23.4073297 C147.032848,25.114593 142.181086,27.3424777 138.533445,29.1763786 C137.635058,29.6360264 136.816632,30.0511165 136.099333,30.4193038 C135.36322,30.8132876 134.728234,31.1533332 134.206135,31.4347502 C133.686387,31.7138221 133.286581,31.9248849 133.004365,32.0820094 C132.722149,32.2391339 132.573986,32.323559 132.573986,32.323559 L139.394204,21.2873215 C139.394204,21.2873215 140.127965,20.84878 141.379123,20.1452374 C142.011757,19.7840856 142.78785,19.3455441 143.681534,18.8366483 C144.563459,18.3558942 145.567677,17.8094761 146.670671,17.2067747 C151.16496,14.781898 157.220843,11.7613553 163.065064,9.29426613 C169.302036,6.64894614 175.296773,4.62743388 179.699341,3.40326984 C180.818797,3.10543682 181.858293,2.82871009 182.791957,2.58247019 C183.720918,2.34561087 184.482901,2.19317665 185.146108,2.04074243 C186.465468,1.74994484 187.232154,1.57874949 187.232154,1.57874949 L169.920559,18.8413386 Z"
                    id="Fill-104"
                  />
                </g>
              </g>
              <g
                id="Group"
                transform="translate(434.679376, 425.131506) scale(-1, 1) rotate(-15.000000) translate(-434.679376, -425.131506) translate(77.179376, 81.631506)"
              >
                <path
                  d="M224.68406,358.336985 C224.68406,358.336985 223.70713,359.348299 222.230013,360.87603 C221.468009,361.639178 220.79002,362.617499 219.955722,363.631682 C219.54932,364.146663 219.12924,364.678859 218.699391,365.223964 C218.486421,365.496517 218.269543,365.773373 218.052664,366.05023 L217.493861,366.91953 C216.753348,368.091507 216.006974,369.272091 215.301632,370.385254 C214.574796,371.498417 214.139086,372.623056 213.64476,373.555473 C213.183649,374.50367 212.798739,375.296942 212.529107,375.853524 C212.243843,376.408671 212.140289,376.744341 212.140289,376.744341 C212.140289,376.744341 217.116766,380.554343 222.206567,384.163516 C224.701644,385.965233 227.472216,387.789902 229.451474,389.112501 C231.463948,390.43223 232.806249,391.311572 232.806249,391.311572 C232.806249,391.311572 232.692925,391.938443 232.493632,393.04013 C232.347092,394.159031 232.26503,395.797217 232.108722,397.763901 C231.995398,398.746525 232.044244,399.849647 232.07746,401.018755 C232.110675,402.192167 232.143891,403.435868 232.181014,404.729777 C232.341231,406.049506 232.509262,407.420877 232.679248,408.819504 C232.774987,409.523837 232.839465,410.23104 232.962558,410.951153 C233.116912,411.677005 233.273221,412.407159 233.42953,413.140183 C234.480706,419.041668 236.856597,425.198493 238.724486,429.879229 C239.842093,432.250438 240.779945,434.240074 241.438395,435.6387 C241.758828,436.340165 242.040184,436.892443 242.262924,437.268279 C242.471986,437.646984 242.581403,437.849247 242.581403,437.849247 C242.581403,437.849247 240.920623,438.833306 238.454854,440.408374 C237.2122,441.203081 235.762437,442.151278 234.216935,443.202758 C232.665571,444.259976 231.139608,445.421912 229.556982,446.624013 C226.417132,449.046864 223.16005,451.656198 221.024483,453.686 C218.787315,455.741622 217.327783,457.184717 217.327783,457.184717 C217.327783,457.184717 218.033126,458.216114 219.267964,460.027873 C220.526249,461.841067 222.562169,464.421711 224.934154,467.543158 C226.090838,469.115358 227.552324,470.795144 229.062656,472.582516 C230.594481,474.372758 232.165383,476.27489 233.910179,478.225794 C237.56194,482.121865 241.362195,486.329219 245.715391,490.433291 C249.875156,494.617694 254.56637,498.672993 258.878535,502.520291 C261.100072,504.428161 263.360687,506.237051 265.461084,507.972782 C267.584928,509.70134 269.546602,511.358174 271.529768,512.817049 C275.437485,515.767792 278.665259,518.249457 281.017705,519.940719 C283.409228,521.614767 284.776928,522.573005 284.776928,522.573005 C284.776928,522.573005 290.91009,523.00909 296.785342,523.293119 C299.710268,523.435133 302.660594,523.499685 304.809839,523.55563 C306.949313,523.598665 308.371722,523.628789 308.371722,523.628789 C308.371722,523.628789 310.687045,525.11205 314.161005,527.336942 C315.956601,528.40707 318.053091,529.655075 320.298074,530.992018 C322.56455,532.307444 324.897457,533.790705 327.398395,535.119042 C332.349473,537.817314 337.222395,540.591615 341.071496,542.457885 C344.865889,544.372927 347.392228,545.648187 347.392228,545.648187 C347.392228,545.648187 348.615344,545.487524 350.444155,545.249399 C352.269059,544.982584 354.68012,544.598141 357.028658,544.203657 C361.694472,543.42473 366.094561,542.553995 366.094561,542.553995 C366.094561,542.553995 366.383732,542.688837 366.921043,542.938438 C367.4564,543.196646 368.251621,543.552399 369.27935,543.982746 C371.323086,544.856349 374.238243,546.10292 377.729788,547.594788 C379.46286,548.362239 381.387411,549.086656 383.405746,549.875624 C385.424082,550.66029 387.54988,551.486555 389.744063,552.34151 C391.924569,553.225155 394.232076,553.969655 396.545444,554.804527 C398.860766,555.616447 401.205396,556.441278 403.546119,557.264675 C405.904426,558.00774 408.254917,558.750805 410.564378,559.479525 C412.867977,560.189597 415.120776,560.957048 417.322774,561.536581 C419.513049,562.147673 421.623216,562.737248 423.62006,563.29383 C425.612995,563.856149 427.492607,564.379737 429.229587,564.777091 C432.687917,565.614832 435.556181,566.310559 437.558886,566.795416 C438.557307,567.050755 439.340804,567.188466 439.874208,567.306094 C440.407611,567.41655 440.690921,567.475364 440.690921,567.475364 C440.690921,567.475364 442.246192,569.158019 444.69633,571.709974 C447.154284,574.263363 450.561813,577.764949 454.139328,581.104439 C457.724658,584.499873 461.507328,587.94408 464.426392,590.518986 C467.337641,593.033645 469.359885,594.719169 469.359885,594.719169 C469.359885,594.719169 470.893664,594.891307 473.566542,595.191115 C474.893212,595.323088 476.520776,595.555476 478.339818,595.678842 C480.15886,595.813683 482.200642,595.96287 484.420225,596.127836 C488.85353,596.519452 493.847592,596.606956 499.164041,596.774791 C501.790026,596.836474 504.427735,596.754708 507.118198,596.738929 C508.45073,596.72028 509.791076,596.700197 511.131423,596.681549 C512.444416,596.611259 513.755455,596.540969 515.06454,596.470679 C517.651449,596.304279 520.275481,596.229685 522.735388,595.968608 C525.179665,595.714704 527.571188,595.467972 529.868925,595.229847 C532.151032,594.988853 534.245568,594.600106 536.265858,594.31034 C538.250978,593.989014 540.15599,593.742282 541.803092,593.366446 C545.101205,592.669285 547.863961,592.145696 549.694726,591.666577 C551.509861,591.186024 552.543452,590.912036 552.543452,590.912036 C552.543452,590.912036 552.654822,589.011339 552.713438,586.20548 C552.777915,583.436917 552.617699,579.635522 552.369559,576.009136 C552.295312,575.105408 552.223019,574.205984 552.150726,573.325208 C552.04131,572.425783 551.935802,571.543573 551.832248,570.692921 C551.615369,569.003094 551.384814,567.445239 551.173797,566.122641 C550.94715,564.810084 550.761533,563.721307 550.630625,562.961028 C550.495808,562.207922 550.3903,561.756058 550.3903,561.756058 C550.3903,561.756058 552.971347,560.688799 555.521132,559.630146 C557.908747,558.452431 560.269008,557.287626 560.269008,557.287626 C560.269008,557.287626 561.011474,557.574524 562.121266,558.003436 C563.221288,558.407962 564.682774,558.945895 566.142306,559.482394 C569.073094,560.542481 572.04882,561.559533 572.04882,561.559533 C572.04882,561.559533 572.201221,561.464857 572.488439,561.28698 C572.763933,561.101931 573.21332,560.866675 573.695923,560.493708 C574.680668,559.770726 576.077676,558.746501 577.736502,557.52862 C580.790383,554.950845 584.715684,551.523852 587.65038,547.534539 C588.023567,547.052551 588.431923,546.594949 588.769941,546.097182 C589.10405,545.596545 589.434252,545.100212 589.762501,544.609617 C590.391643,543.616951 591.085263,542.698879 591.604989,541.719123 C592.626857,539.771088 593.660448,538.029619 594.26419,536.38426 C594.922641,534.791978 595.50489,533.49807 595.760846,532.512576 C596.057832,531.557207 596.225864,531.012101 596.225864,531.012101 C596.225864,531.012101 594.90701,529.437033 593.592063,527.867702 C592.945336,527.097382 592.263439,526.31702 591.739805,525.727445 C591.225941,525.145043 590.882061,524.759166 590.882061,524.759166 C590.882061,524.759166 591.081355,523.888431 591.380295,522.594523 C591.733944,521.336476 591.911745,519.526152 592.165746,517.773207 C592.216547,517.331384 592.298609,516.903907 592.325963,516.459215 C592.349409,516.014524 592.370902,515.578439 592.392394,515.155265 C592.433425,514.313221 592.472502,513.531424 592.505718,512.864387 C592.521349,512.530151 592.535026,512.224605 592.546749,511.954922 C592.538933,511.675196 592.533072,511.432768 592.52721,511.231939 C592.513533,510.833152 592.505718,510.603633 592.505718,510.603633 C592.505718,510.603633 590.73943,508.956841 588.973142,507.357386 C587.214669,505.757931 585.460104,504.205815 585.460104,504.205815 L569.858545,497.548354 C569.858545,497.548354 569.842914,498.10637 569.821422,498.945546 C569.778437,499.777549 569.81556,500.936616 569.708098,502.035434 C569.585005,503.134252 569.461912,504.240243 569.370081,505.072246 C569.338819,505.498289 569.252849,505.822483 569.205956,506.059174 C569.159064,506.292996 569.129756,506.426403 569.129756,506.426403 C569.129756,506.426403 568.891385,507.58547 568.531875,509.338415 C568.27592,510.180459 567.973072,511.167387 567.646777,512.231778 C567.5061,512.779752 567.293129,513.309079 567.058666,513.839839 C566.835926,514.380642 566.609279,514.930051 566.382631,515.482329 C565.978182,516.622747 565.325594,517.626889 564.819544,518.638203 C564.542096,519.134536 564.319357,519.639476 564.032139,520.076995 C563.741014,520.51308 563.46552,520.926213 563.209565,521.307786 C562.699608,522.076672 562.271713,522.722192 561.970819,523.174056 C561.624986,523.598665 561.427646,523.842528 561.427646,523.842528 C561.427646,523.842528 563.778138,526.988361 566.060244,530.283381 C567.216929,531.940215 568.25052,533.554015 569.069186,534.812061 C569.870268,536.071542 570.405625,536.912152 570.405625,536.912152 C570.405625,536.912152 569.971869,537.398444 569.315372,538.130033 C568.617845,538.83867 567.611608,539.735225 566.632725,540.663339 C565.679242,541.624447 564.508881,542.42776 563.701937,543.093363 C562.869594,543.74749 562.312744,544.185009 562.312744,544.185009 C562.312744,544.185009 561.394431,543.88807 559.956391,543.371654 C558.524213,542.865279 556.627016,542.179594 554.74545,541.480998 C552.859977,540.780968 550.994042,540.065158 549.600941,539.522921 C548.21761,538.989291 547.262173,538.590504 547.262173,538.590504 C547.262173,538.590504 545.706901,539.403859 543.354456,540.63465 C542.094217,541.189797 540.615147,541.83962 539.018844,542.541085 C537.369788,543.208122 535.505807,543.833559 533.680903,544.51781 C531.738768,545.095909 529.779048,545.679746 527.930698,546.22772 C525.986609,546.689626 524.157797,547.122841 522.582987,547.495808 C519.284874,548.105466 517.069199,548.514295 517.069199,548.514295 C517.069199,548.514295 516.078593,547.939065 514.574122,547.015254 C513.069651,546.090009 511.082577,544.849177 509.138488,543.608344 C507.192445,542.367512 505.285479,541.12381 503.876747,540.189958 C502.475831,539.269017 501.522348,538.603414 501.522348,538.603414 C501.522348,538.603414 499.840076,538.716739 497.30006,538.888877 C496.045683,539.010809 494.486504,539.009374 492.841355,539.056712 C491.180575,539.092575 489.431872,539.182947 487.585476,539.114092 C485.744941,539.072492 483.925899,539.083968 482.173288,539.013678 C480.401139,538.917567 478.738405,538.82576 477.310135,538.749732 C475.887726,538.696656 474.662656,538.570421 473.80882,538.488655 C472.95303,538.408324 472.462612,538.363854 472.462612,538.363854 C472.462612,538.363854 470.266475,536.379957 468.183662,534.419011 C467.144209,533.450731 466.11648,532.456631 465.350567,531.694918 C464.594424,530.943246 464.088375,530.444044 464.088375,530.444044 C464.088375,530.444044 462.730443,530.261864 460.686707,529.986442 C460.172843,529.919021 459.619901,529.847296 459.031789,529.769834 C458.437816,529.667985 457.80672,529.561833 457.156085,529.451378 C455.854816,529.231901 454.463668,528.996645 453.06666,528.761389 C451.671605,528.557691 450.247242,528.219152 448.922526,527.95951 C447.591948,527.69126 446.347341,527.440225 445.27858,527.223617 C444.209819,527.031395 443.307137,526.770319 442.679948,526.632608 C442.050806,526.483421 441.689342,526.395917 441.689342,526.395917 C441.689342,526.395917 440.858952,527.246569 439.602621,528.530436 C438.95394,529.173087 438.178259,529.92189 437.312699,530.723769 C436.441279,531.504131 435.481934,532.311748 434.48742,533.132275 C432.484715,534.777633 430.31984,536.41295 428.61803,537.6337 C426.904496,538.811415 425.697011,539.578866 425.697011,539.578866 C425.697011,539.578866 424.130017,539.118395 421.775617,538.428406 C419.409495,537.784321 416.271598,536.714193 413.114163,535.682795 C411.539353,535.149166 409.941097,534.682957 408.469842,534.126375 C406.994679,533.588442 405.613301,533.084937 404.427309,532.65459 C402.051417,531.792463 400.464884,531.217233 400.464884,531.217233 C400.464884,531.217233 400.187436,530.713727 399.802526,529.92189 C399.425431,529.140094 398.925243,528.101524 398.425056,527.064389 C397.452034,525.007332 396.572798,523.001917 396.572798,523.001917 C396.572798,523.001917 396.099964,522.812565 395.27739,522.482633 C394.458723,522.13979 393.255146,521.710878 391.873769,521.078268 C390.480668,520.467176 388.853103,519.752801 387.106354,518.988219 C386.232979,518.606645 385.328343,518.21216 384.408076,517.811938 C383.495624,517.398805 382.589033,516.948376 381.67072,516.516595 C379.834093,515.644426 377.997466,514.773691 376.272209,513.954599 C374.552814,513.132637 373.007312,512.287723 371.647426,511.604906 C368.941333,510.219191 367.135967,509.293945 367.135967,509.293945 C367.135967,509.293945 362.147767,510.088652 356.749256,510.721261 C354.031439,511.042587 351.210068,511.346698 349.119439,511.500189 C346.979964,511.66372 345.545832,511.772742 345.545832,511.772742 L339.91872,508.424645 C338.285294,507.377469 336.380282,506.158154 334.342408,504.851335 C333.322494,504.197208 332.269364,503.521564 331.200604,502.834444 C330.17092,502.124372 329.125606,501.40139 328.080292,500.679842 C319.598593,494.97775 312.04693,488.85105 312.04693,488.85105 C312.04693,488.85105 313.031675,485.774072 314.237205,482.885013 C315.497444,479.987346 316.925714,477.291942 316.925714,477.291942 C316.925714,477.291942 316.546666,476.966313 315.8804,476.398256 C315.548244,476.114227 315.143796,475.76995 314.680731,475.375465 C314.246975,474.972374 313.756556,474.516207 313.221199,474.021308 C312.150484,473.030077 310.901969,471.875314 309.567484,470.641653 C308.215414,469.413731 306.966898,468.059574 305.612874,466.734107 C304.948562,466.069939 304.284251,465.407205 303.631662,464.754513 C302.982981,464.100386 302.422224,463.44339 301.83802,462.817953 C300.685243,461.562776 299.612575,460.395102 298.694262,459.393829 C297.789625,458.395425 297.137037,457.549077 296.630987,456.96524 C296.140569,456.378535 295.861167,456.044299 295.861167,456.044299 C295.861167,456.044299 294.66736,455.764573 292.871764,455.342834 C291.083983,454.911053 288.596722,454.327216 286.214968,453.700345 C281.402615,452.449471 276.449584,451.055148 276.449584,451.055148 C276.449584,451.055148 275.695395,450.072523 274.644219,448.599304 C273.665336,447.126084 272.364066,445.169442 271.070612,443.221406 C269.886574,441.279109 268.792413,439.345418 267.932715,437.900888 C267.491143,437.180775 267.184387,436.582594 266.98314,436.163723 C266.772123,435.746287 266.650984,435.508162 266.650984,435.508162 C266.650984,435.508162 268.91746,434.380654 271.197613,433.336346 C272.332804,432.828537 273.462134,432.322163 274.306201,431.944892 C275.140499,431.576229 275.755964,431.339538 275.755964,431.339538 C275.755964,431.339538 275.417947,430.570652 274.831789,429.233709 C274.536757,428.565237 274.1792,427.75762 273.76889,426.830941 C273.368349,425.908565 273.055732,424.88434 272.637606,423.761136 C271.73297,421.51903 271.117504,418.974247 270.353546,416.255892 C270.099544,414.924687 269.837727,413.556185 269.57591,412.171903 L269.37857,411.134768 L269.282831,410.111978 C269.2164,409.430596 269.151923,408.749214 269.087445,408.069266 C269.032737,407.393622 268.91746,406.706502 268.913552,406.046637 C268.915506,405.389642 268.915506,404.736949 268.915506,404.09143 C268.915506,402.803259 268.866659,401.532302 269.044461,400.360325 C269.177323,399.184044 269.247662,398.037888 269.403971,396.979236 C269.620849,395.9421 269.826004,394.966648 270.011621,394.070093 C270.111267,393.623967 270.173791,393.189317 270.289068,392.791964 C270.418023,392.398914 270.541116,392.027381 270.65444,391.678801 C270.881087,390.983074 271.076473,390.37772 271.23669,389.881387 C271.400814,389.386488 271.508276,388.992004 271.615738,388.733796 C271.731016,388.479891 271.793539,388.343615 271.793539,388.343615 C271.793539,388.343615 267.407127,385.291024 263.104731,382.057687 C260.912502,380.43528 258.976228,378.860212 257.430726,377.627986 C255.924301,376.401498 254.920018,375.58384 254.920018,375.58384 C254.920018,375.58384 255.328375,374.96701 255.934071,374.046068 C256.649183,373.169596 257.596804,372.010529 258.538564,370.860069 C258.978182,370.277667 259.517447,369.736865 260.033266,369.236229 C260.535407,368.732723 261.004333,368.26508 261.404874,367.864858 C262.202049,367.068716 262.72959,366.540825 262.72959,366.540825 L242.069492,357.727327 C242.069492,357.727327 237.829619,357.783273 233.464699,357.920983 C228.98841,358.025701 224.68406,358.336985 224.68406,358.336985"
                  id="Fill-1"
                  fillOpacity="0.8"
                  fill="url(#linearGradient-middle-1)"
                />
                <g id="Group-14" transform="translate(132.866812, 292.321335)" fill="#0076FF">
                  <path
                    d="M89.7707538,25.2468355 L89.8817019,25.0885013 C89.8900754,25.0775277 89.540484,24.9317349 88.9689963,24.7075588 C88.3975086,24.4833827 87.6041246,24.1792557 86.720726,23.8484784 L26.4151658,1.220804 C24.5457939,0.518490144 23.0029865,-0.0286248887 22.9736794,0.00116074344 L22.7873702,0.19398352 C22.7580631,0.222201487 24.25691,0.816346466 26.1304686,1.51552499 L86.5427902,24.0961695 C87.4282822,24.4269468 88.2300397,24.7201001 88.8140875,24.9285995 C89.3981354,25.137099 89.7623803,25.2593768 89.7707538,25.2468355"
                    id="Fill-5"
                  />
                  <path
                    d="M89.7665206,24.2757855 L89.8816963,24.1203575 C89.8903888,24.1095852 89.5274767,23.9664684 88.93204,23.7479458 C88.3366033,23.5278843 87.5108152,23.2308783 86.5915826,22.9061722 L74.4351122,18.6218988 C72.5749158,17.9663311 71.0493809,17.4554192 71.0276496,17.4800415 L70.8929157,17.6447028 C70.8733576,17.670864 72.3684687,18.2217871 74.2308383,18.8758159 L86.4068668,23.150856 C87.3260994,23.4740231 88.1627532,23.7617958 88.7712286,23.9649295 C89.377531,24.1680631 89.7578281,24.2880966 89.7665206,24.2757855"
                    id="Fill-7"
                  />
                  <path
                    d="M89.7668237,25.246838 L89.8816967,25.0907768 C89.8903664,25.0799606 89.5284078,24.9378059 88.9323682,24.7183931 C88.338496,24.4989803 87.5105428,24.2007643 86.5937255,23.8778257 L74.4345176,19.5915503 C72.5748741,18.9364022 71.0468453,18.4249541 71.0273385,18.4512218 L70.8929587,18.6150088 C70.8712845,18.6412765 72.366802,19.194444 74.2307804,19.8480469 L86.4073277,24.1219611 C87.3284798,24.4448996 88.1629353,24.7322995 88.7719794,24.9362607 C89.3788561,25.1402219 89.758154,25.2591993 89.7668237,25.246838"
                    id="Fill-9"
                  />
                  <path
                    d="M87.2378035,26.2178812 L87.3498211,26.0577978 C87.3581186,26.0467029 87.0096197,25.9008844 86.4370858,25.6774016 C85.8666262,25.4523339 85.074206,25.148017 84.1925867,24.8167553 L23.8856765,2.19110846 C22.0145692,1.48737555 20.4712168,0.94214105 20.4421752,0.972255747 L20.2554793,1.16720878 C20.2264377,1.19732348 21.7262278,1.79169248 23.6035583,2.49225542 L84.0141884,25.0687678 C84.8978821,25.3984444 85.6985999,25.6916665 86.2815059,25.9008844 C86.8644118,26.1085173 87.2295059,26.230561 87.2378035,26.2178812"
                    id="Fill-11"
                  />
                  <path
                    d="M89.7653089,25.246831 L89.8816985,25.0895879 C89.8903199,25.077133 89.528219,24.9354586 88.933339,24.715941 C88.3363037,24.4964234 87.5107999,24.1990627 86.5926155,23.8752354 L74.4363718,19.5923075 C72.5762941,18.9368685 71.0481421,18.4262177 71.0287439,18.4511275 L70.8929561,18.6192686 C70.8714024,18.6457353 72.3672239,19.1968645 74.2316124,19.8507466 L86.4072543,24.1227765 C87.3275941,24.4466038 88.1617193,24.7330665 88.7695315,24.9370154 C89.3773437,25.1394075 89.7566875,25.2592859 89.7653089,25.246831"
                    id="Fill-13"
                  />
                  <path
                    d="M87.2337433,27.1889593 L87.3498167,27.0295046 C87.3584147,27.0185617 86.995148,26.8763031 86.3997346,26.6574437 C85.8043211,26.4370211 84.9789104,26.1399977 84.0610709,25.8163985 L71.9056088,21.5330085 C70.0441357,20.8779937 68.5158362,20.3668008 68.4964906,20.3933766 L68.3610717,20.5622109 C68.3395766,20.5872234 69.8356335,21.1390616 71.6992561,21.7940764 L83.8762133,26.0665235 C84.7940528,26.3885594 85.6302111,26.6746398 86.2385215,26.8778664 C86.8446825,27.0810929 87.2251453,27.2014656 87.2337433,27.1889593"
                    id="Fill-15"
                  />
                  <path
                    d="M88.5026451,26.2178598 L88.615762,26.0543335 C88.624141,26.0431111 88.2701269,25.89722 87.6877841,25.6743753 C87.1075361,25.4499274 86.2989594,25.1453195 85.4024029,24.8150604 L23.9589552,2.19231426 C22.0485357,1.48850974 20.4732776,0.941818762 20.4460457,0.97227955 L20.2554227,1.17267947 C20.2281909,1.20314026 21.7573643,1.79953042 23.6698786,2.50012854 L85.2222537,25.0715723 C86.1188102,25.4018314 86.9357659,25.6936137 87.5285825,25.9020296 C88.1213991,26.1088423 88.494266,26.2306854 88.5026451,26.2178598"
                    id="Fill-17"
                  />
                  <path
                    d="M87.2322343,27.1889413 L87.3498183,27.0281931 C87.3583699,27.0171614 86.9949284,26.8753247 86.4005947,26.65469 C85.8062609,26.4356312 84.9788971,26.1377742 84.0617418,25.8147019 L71.9056927,21.5343874 C70.0435895,20.878787 68.5171352,20.3665991 68.4957563,20.3933905 L68.3610692,20.5651704 C68.3396903,20.5903858 69.8362141,21.1435487 71.7004552,21.7975732 L83.8757452,26.0684319 C84.7950384,26.3899283 85.628816,26.6767535 86.2381149,26.8800526 C86.8431381,27.0817759 87.2236828,27.201549 87.2322343,27.1889413"
                    id="Fill-19"
                  />
                  <path
                    d="M87.2325513,27.188927 L87.3498187,27.0275055 C87.3583473,27.014845 86.9958843,26.8739969 86.4010187,26.6540206 C85.8082852,26.4340443 84.9810169,26.1365224 84.0620667,25.8136796 L71.9067657,21.5328462 C70.045412,20.877665 68.5188034,20.3664971 68.497482,20.3934007 L68.3610254,20.5659 C68.3418362,20.5928036 69.8385949,21.1451182 71.7020808,21.7971342 L83.876571,26.0684722 C84.7955211,26.3897326 85.631318,26.6761765 86.2368443,26.8787446 C86.8445028,27.0828952 87.2240228,27.2015875 87.2325513,27.188927"
                    id="Fill-21"
                  />
                  <path
                    d="M87.2355408,28.1599695 L87.3497444,27.9944685 C87.3601265,27.981488 87.0050571,27.8370802 86.4236568,27.613167 C85.8443329,27.3876313 85.0366018,27.0842127 84.1395843,26.7548332 L22.6938803,4.13311281 C20.783565,3.42892211 19.207555,2.88211966 19.178485,2.91457085 L18.9895299,3.11901331 C18.9604599,3.14984193 20.4928649,3.74694372 22.407333,4.44951185 L83.9568585,27.0160653 C84.8559525,27.3454448 85.6719893,27.6375054 86.2637717,27.8435704 C86.8555541,28.051258 87.227235,28.17295 87.2355408,28.1599695"
                    id="Fill-23"
                  />
                  <path
                    d="M87.2330768,29.1310395 L87.3497409,28.968216 C87.3603467,28.9554455 86.9955062,28.813374 86.4015798,28.5946798 C85.8076534,28.3743892 84.9803988,28.0774758 84.0640553,27.7534251 L71.9055337,23.4737217 C70.0452714,22.8176389 68.5159109,22.3084164 68.4968204,22.3355536 L68.3610658,22.5095513 C68.3398542,22.5366885 69.835276,23.0890113 71.6997806,23.7434979 L83.8752715,28.0104308 C84.7958574,28.3328852 85.6315967,28.6202207 86.2382501,28.8229519 C86.8449034,29.0256831 87.2245921,29.1438099 87.2330768,29.1310395"
                    id="Fill-25"
                  />
                  <path
                    d="M85.965411,29.1310353 L86.0838792,28.9659176 C86.0923412,28.954696 85.7305902,28.8120215 85.1340183,28.5940021 C84.5416774,28.3727764 83.7145157,28.0762059 82.7963873,27.7539859 L70.6407063,23.473751 C68.7790636,22.8180895 67.2495548,22.3083088 67.2305153,22.3355612 L67.0951231,22.5119005 C67.0739681,22.5391529 68.5696288,23.0906139 70.433387,23.7446722 L82.610223,28.0120825 C83.5283514,28.3343024 84.3639751,28.6196514 84.9711245,28.8232431 C85.5761584,29.0252317 85.956949,29.14386 85.965411,29.1310353"
                    id="Fill-27"
                  />
                  <path
                    d="M77.2140783,53.4065947 L77.2224256,53.1948119 C77.2245124,53.1776824 76.8238449,53.0733482 76.1727603,52.9176255 C75.5216756,52.7603456 74.6201738,52.5516772 73.6247655,52.3289938 L4.06930824,36.7504973 C1.86563709,36.2568564 0.066807049,35.8893509 0.0584598098,35.9329533 L2.91355961e-05,36.2085824 C-0.00831810358,36.2506275 1.77799108,36.6835366 3.98374903,37.174063 L73.6059842,52.6637976 C74.6034793,52.886481 75.5049811,53.0795771 76.1581526,53.2134986 C76.8092372,53.3474201 77.2140783,53.422167 77.2140783,53.4065947"
                    id="Fill-29"
                  />
                  <path
                    d="M75.9462302,55.3482921 L75.9564922,55.1325858 C75.9564922,55.1151389 75.5624329,55.0104579 74.9200342,54.8518503 C74.2796879,54.6932427 73.3930545,54.4838807 72.4099588,54.2586579 L59.3629027,51.2673187 C57.3577157,50.8073566 55.7240116,50.4615921 55.7219592,50.4980718 L55.7014353,50.7328111 C55.6973305,50.7692908 57.3269298,51.168982 59.3341692,51.6257718 L72.3935396,54.5996643 C73.374583,54.823301 74.2632687,55.0183883 74.9056675,55.1547908 C75.5480662,55.2896073 75.9462302,55.3657389 75.9462302,55.3482921"
                    id="Fill-31"
                  />
                  <path
                    d="M75.9462437,55.3486309 L75.9564922,55.129173 C75.9564922,55.1131542 75.5629513,55.00743 74.9213977,54.8488437 C74.2798441,54.6902573 73.3923274,54.4804108 72.4105249,54.2561473 L59.3621853,51.2654335 C57.3575865,50.8056934 55.7239819,50.4612887 55.7198825,50.498132 L55.7014353,50.7352105 C55.6973359,50.7720538 57.3268411,51.1725243 59.3334896,51.6290607 L72.3941274,54.6021538 C73.3759299,54.8248154 74.2634465,55.020245 74.9070498,55.1548031 C75.5486034,55.2893612 75.9462437,55.3646497 75.9462437,55.3486309"
                    id="Fill-33"
                  />
                  <path
                    d="M77.2120432,55.3482197 L77.2224257,55.1284416 C77.2245022,55.1123994 76.8237406,55.0065209 76.1738008,54.8493073 C75.523861,54.693698 74.6226666,54.4835452 73.6280303,54.2621628 L4.07201571,38.6899996 C1.86678875,38.1975041 0.0664763405,37.8317419 0.0581704009,37.8750559 L2.88237666e-05,38.1622112 C-0.00827711582,38.2055252 1.77957638,38.6402688 3.98687983,39.1311601 L73.6093419,54.6086743 C74.6039782,54.8300567 75.5051727,55.0241673 76.1571889,55.1573176 C76.8092052,55.2904678 77.2120432,55.3658662 77.2120432,55.3482197"
                    id="Fill-35"
                  />
                  <path
                    d="M75.9462637,57.2902594 L75.9564843,57.0663936 C75.9585284,57.050053 75.5640159,56.9438393 74.9221665,56.7853358 C74.2823612,56.6268322 73.393175,56.4160389 72.412004,56.192173 L59.3644737,53.2051167 C57.3592054,52.7459466 55.7239204,52.4027946 55.7218763,52.4403779 L55.7014353,52.6838524 C55.697347,52.7214358 57.3285438,53.1217797 59.3358562,53.5793157 L72.393607,56.5467634 C73.3768221,56.7689952 74.2639643,56.963448 74.9058136,57.0990747 C75.547663,57.2330674 75.9462637,57.308234 75.9462637,57.2902594"
                    id="Fill-37"
                  />
                  <path
                    d="M75.9462772,57.2901871 L75.9564843,57.0640309 C75.9585257,57.0458723 75.5624887,56.9402227 74.9235217,56.7817483 C74.2825133,56.6232738 73.3944921,56.4136254 72.4146067,56.1891199 L59.3637572,53.2045182 C57.3590748,52.7456026 55.7259324,52.4038921 55.7218495,52.4402092 L55.7014352,52.6861747 C55.6973524,52.7257933 57.326412,53.1269317 59.3351772,53.5825457 L72.3941924,56.5473382 C73.3761193,56.7718436 74.2641405,56.9649843 74.9071903,57.0986971 C75.5481987,57.2340607 75.9462772,57.3083456 75.9462772,57.2901871"
                    id="Fill-39"
                  />
                  <path
                    d="M77.2120928,58.2616355 L77.2224257,58.0332101 C77.2244923,58.0166575 76.8235732,57.9107211 76.1746629,57.7534717 C75.5257525,57.5962224 74.6267844,57.38766 73.6327529,57.1658557 L4.07535079,41.6014784 C1.868229,41.1065567 0.0640929183,40.7424003 0.0578931379,40.7887475 L2.85215054e-05,41.0883489 C-0.00823785227,41.1330408 1.78143207,41.5700286 3.99062046,42.0599845 L73.612087,57.5267016 C74.6061184,57.7468507 75.5071532,57.9405157 76.1581301,58.0729362 C76.8091071,58.2053568 77.2120928,58.2781881 77.2120928,58.2616355"
                    id="Fill-41"
                  />
                  <path
                    d="M75.9442768,59.2322077 L75.9564922,58.9995125 C75.9564922,58.9826505 75.5615296,58.8764201 74.9222604,58.7179175 C74.2809553,58.559415 73.3953434,58.3486403 72.4140448,58.124376 L59.3660302,55.143179 C57.3606793,54.6845333 55.7258602,54.3439214 55.7238243,54.3827039 L55.7014295,54.6339474 C55.6993936,54.6744161 57.328105,55.0757311 59.3354919,55.5310044 L72.3936859,58.4936533 C73.3749845,58.7145451 74.2626323,58.910144 74.9059733,59.0433536 C75.5472784,59.1765632 75.9442768,59.2507559 75.9442768,59.2322077"
                    id="Fill-43"
                  />
                  <path
                    d="M75.9442928,59.2321249 L75.9564922,58.9969011 C75.9564922,58.9798559 75.562045,58.8724711 74.9215768,58.7139507 C74.2811085,58.5554303 73.3946191,58.3457743 72.4146011,58.1224821 L59.3673478,55.1429805 C57.3605473,54.6844645 55.7278615,54.3435604 55.723795,54.3827644 L55.7014295,54.6384424 C55.6993963,54.6776464 57.3280155,55.0799132 59.3368493,55.5350202 L72.3922355,58.4940676 C73.3742868,58.7173598 74.2628094,58.9099706 74.9053109,59.0446277 C75.5457792,59.1775803 75.9442928,59.2508747 75.9442928,59.2321249"
                    id="Fill-45"
                  />
                  <path
                    d="M79.7415704,58.2613698 L79.7543168,58.0514956 C79.7543168,58.0347665 79.3421828,57.9404752 78.6729963,57.800559 C78.0038098,57.6606429 77.0754463,57.475102 76.0493603,57.2789152 L4.21271767,43.4500312 C1.93111027,43.010512 0.0680100052,42.6880966 0.0595123985,42.7306798 L2.91516711e-05,43.0074704 C-0.00846845502,43.0500535 1.8418854,43.4393854 4.1277416,43.8758629 L76.0259918,57.6104556 C77.0542022,57.8066423 77.9825658,57.976975 78.6538767,58.0955996 C79.3251876,58.2127033 79.7415704,58.2780989 79.7415704,58.2613698"
                    id="Fill-47"
                  />
                  <path
                    d="M75.9443143,60.2030691 L75.9564844,59.9608756 C75.9585127,59.9434516 75.5629855,59.8354228 74.924057,59.6768645 C74.2831001,59.5183061 73.3967135,59.3092182 72.4149947,59.0861911 L59.3666538,56.1101729 C57.3585927,55.6536642 55.7257753,55.3138964 55.7217186,55.3539715 L55.7014351,55.6170739 C55.6973784,55.657149 57.3281675,56.0596433 59.3362287,56.5144096 L72.3947113,59.4677766 C73.3744017,59.6908037 74.2628167,59.8824676 74.9058019,60.0166324 C75.5467588,60.1490547 75.9443143,60.2222355 75.9443143,60.2030691"
                    id="Fill-49"
                  />
                  <path
                    d="M75.9443289,62.1456013 L75.9564844,61.9005753 C75.9585103,61.8811847 75.5634578,61.7736553 74.9232703,61.6167682 C74.2830827,61.4563555 73.3977599,61.2483478 72.4151935,61.0244751 L59.3663065,58.0506702 C57.3606555,57.5923482 55.725746,57.2556578 55.7237201,57.2962016 L55.7014351,57.562381 C55.6973833,57.6029248 57.3282409,58.004838 59.3359179,58.4596345 L72.3949344,61.4105233 C73.3754749,61.6326332 74.2628236,61.8265387 74.9050371,61.9587469 C75.5472506,62.0909552 75.9443289,62.1632291 75.9443289,62.1456013"
                    id="Fill-51"
                  />
                  <path
                    d="M83.5520162,92.2397421 L83.4400585,91.9941328 C83.4317654,91.9746638 83.0108875,91.9357257 82.3370683,91.8848067 C81.6611757,91.8338877 80.7323418,91.7724854 79.7081366,91.7155759 L6.77601523,87.5641796 C4.41868454,87.429394 2.51540434,87.3620012 2.53199066,87.4129202 L2.6480949,87.7468889 C2.66468122,87.7978079 4.59698747,87.9460721 6.95224488,88.0763648 L79.882293,92.1034589 C80.9064982,92.1588708 81.8291122,92.2037993 82.492565,92.2277612 C83.1560178,92.2532207 83.5603094,92.2592111 83.5520162,92.2397421"
                    id="Fill-53"
                  />
                  <path
                    d="M82.2860809,94.1766034 L82.1796735,93.8380105 C82.1717915,93.8111709 81.7717788,93.7595561 81.1333349,93.6914246 C80.4909499,93.6232931 79.6081632,93.5448387 78.6327627,93.4684488 L65.639246,92.4506055 C63.6332709,92.2936966 62.0154855,92.2131776 62.0312495,92.2689216 L62.1396273,92.6405479 C62.1573619,92.6962918 63.8027344,92.8655883 65.8087095,93.018368 L78.8002557,94.0031778 C79.7736857,94.0775031 80.6485904,94.133247 81.2791523,94.1642159 C81.9097142,94.1972493 82.2939629,94.2034431 82.2860809,94.1766034"
                    id="Fill-55"
                  />
                  <path
                    d="M82.2860808,94.1746056 L82.1796322,93.8207907 C82.1717472,93.7927443 81.7715793,93.7388091 81.1328878,93.6719295 C80.4902537,93.6050498 79.6071246,93.5252258 78.6333172,93.4497165 L65.638704,92.4443643 C63.6339222,92.2890309 62.0135381,92.2113643 62.0312796,92.2717717 L62.1396994,92.6601051 C62.1574409,92.7183551 63.8014802,92.8887904 65.8082333,93.0398089 L78.7989038,94.0106426 C79.7727113,94.0839944 80.6499266,94.1379296 81.280733,94.1681333 C81.9095682,94.1983371 82.2939659,94.2026519 82.2860808,94.1746056"
                    id="Fill-57"
                  />
                  <path
                    d="M84.8179577,96.1199036 L84.7059628,95.8322012 C84.6976669,95.8093955 84.2766491,95.7655384 83.6046799,95.7146642 C82.9285627,95.6620358 82.001494,95.6006359 80.9769482,95.5427445 L8.04339595,91.4359685 C5.68528161,91.302643 3.77929473,91.2429974 3.79796055,91.3043973 L3.91410338,91.6973566 C3.93276919,91.7587565 5.8657178,91.9131334 8.22383214,92.0394418 L81.1511625,95.9988581 C82.1757082,96.0549951 83.096555,96.0953436 83.7602283,96.1181493 C84.4218277,96.1392007 84.8262536,96.1427093 84.8179577,96.1199036"
                    id="Fill-59"
                  />
                  <path
                    d="M82.2860807,96.1120802 L82.181522,95.7227533 C82.171658,95.691892 81.7731511,95.6372913 81.1319891,95.5684469 C80.4908271,95.4996025 79.6089828,95.4212623 78.6344165,95.350044 L65.6395423,94.3743527 C63.6331985,94.2200463 62.0135246,94.1535759 62.0312799,94.2176724 L62.1397842,94.6473564 C62.1555667,94.7114529 63.8028598,94.8823769 65.8072309,95.0295614 L78.8001322,95.9672696 C79.7746985,96.0384879 80.6506244,96.0883408 81.2799496,96.1144541 C81.9092748,96.1429415 82.293972,96.1429415 82.2860807,96.1120802"
                    id="Fill-61"
                  />
                  <path
                    d="M84.8179638,98.0522966 L84.7113907,97.6404019 C84.7034964,97.6079496 84.3048342,97.5505339 83.6634224,97.483133 C83.0220105,97.415732 82.1398224,97.3383457 81.1648764,97.2659521 L68.1708583,96.3073608 C66.1637325,96.1575809 64.545401,96.0951726 64.5631632,96.1625736 L64.6717098,96.6169059 C64.689472,96.6843069 66.33346,96.8565538 68.3386122,96.9988447 L81.3326302,97.9174947 C82.3056027,97.9873919 83.1818701,98.0348222 83.8114405,98.0597856 C84.4410109,98.0847489 84.8258581,98.0847489 84.8179638,98.0522966"
                    id="Fill-63"
                  />
                  <path
                    d="M84.8179576,97.0927196 L84.7059025,96.8827157 C84.6976021,96.8648972 84.278433,96.8381694 83.6061023,96.8038051 C82.9316966,96.7719863 82.0041292,96.7350765 80.9811076,96.7007122 L8.04567958,94.2761211 C5.68422183,94.1984832 3.77928491,94.1704827 3.79796077,94.2137562 L3.91416607,94.5026708 C3.93284192,94.5472171 5.86890526,94.6439462 8.22828792,94.7190385 L81.1554155,97.0329003 C82.1784372,97.0659919 83.0977041,97.0889014 83.7596593,97.0990834 C84.4216145,97.1105382 84.826258,97.1092654 84.8179576,97.0927196"
                    id="Fill-65"
                  />
                  <path
                    d="M84.8179636,98.0609572 L84.7112971,97.8307181 C84.7033958,97.8125781 84.3043838,97.783275 83.6643842,97.7483903 C83.0224094,97.7149009 82.1414224,97.6772255 81.1656206,97.6423408 L68.1720496,97.1832581 C66.1651375,97.1120933 64.5453855,97.085581 64.5631633,97.1246518 L64.6718052,97.3786124 C64.689583,97.4176833 66.3350139,97.5041974 68.3399507,97.5697806 L81.3315464,98.0079324 C82.3053729,98.0400263 83.180434,98.0623525 83.8125323,98.0721203 C84.44068,98.081888 84.8258649,98.0790972 84.8179636,98.0609572"
                    id="Fill-67"
                  />
                  <path
                    d="M84.817963,98.0584617 L84.7132206,97.8125846 C84.7033393,97.7933291 84.3041326,97.7637054 83.6657971,97.7296381 C83.0235091,97.6955708 82.1420923,97.6570599 81.1677908,97.6244738 L68.1718339,97.1771551 C66.165919,97.1075393 64.5453769,97.0868027 64.5631634,97.1267948 L64.6718583,97.3978521 C64.6896447,97.4378441 66.3358783,97.5252342 68.3417932,97.5904065 L81.3337975,98.0125449 C82.3061228,98.0436498 83.1816108,98.0643865 83.8120411,98.0732736 C84.4424715,98.0821607 84.8258681,98.0777172 84.817963,98.0584617"
                    id="Fill-69"
                  />
                  <path
                    d="M84.8179569,99.0253655 L84.7058242,98.7576032 C84.6975181,98.7366339 84.2780588,98.7059864 83.6073391,98.6704998 C82.9324664,98.6350132 82.0063334,98.5963006 80.98468,98.5640401 L8.05066851,96.2057964 C5.68965233,96.1299841 3.78132,96.1122409 3.79793225,96.1686968 L3.91837107,96.5364667 C3.93705985,96.5929226 5.87446362,96.6993823 8.23755633,96.7703554 L81.1591086,98.9882659 C82.1786855,99.0189134 83.1006655,99.0382697 83.7610024,99.0463348 C84.4234159,99.0527869 84.826263,99.0463348 84.8179569,99.0253655"
                    id="Fill-71"
                  />
                  <path
                    d="M84.8179629,99.9930176 L84.7131182,99.7124547 C84.7032272,99.6904829 84.3056088,99.6583703 83.6646717,99.6245675 C83.0237346,99.5907647 82.141457,99.5518916 81.1681822,99.5231592 L68.1714022,99.1073853 C66.1655064,99.04316 64.5453599,99.0296389 64.5631637,99.0769628 L64.6739429,99.3845679 C64.6897685,99.4318918 66.3376099,99.5197789 68.3415274,99.5789338 L81.3343511,99.9659754 C82.3056477,99.9963979 83.1819907,100.013299 83.8130368,100.01837 C84.4421047,100.02344 84.8258757,100.014989 84.8179629,99.9930176"
                    id="Fill-73"
                  />
                  <path
                    d="M87.3498459,100.959317 L87.2449398,100.656155 C87.2350429,100.632556 86.8371914,100.601695 86.1958785,100.565388 C85.556545,100.532712 84.6737501,100.49459 83.6999046,100.46736 L70.7034216,100.071616 C68.6983291,100.009895 67.0772326,100.002634 67.0950468,100.053463 L67.2039117,100.38567 C67.2217259,100.436499 68.8685541,100.523636 70.8736466,100.579911 L83.8661709,100.944794 C84.838037,100.972024 85.7148939,100.988362 86.3443306,100.990177 C86.9737673,100.993808 87.3577633,100.982916 87.3498459,100.959317"
                    id="Fill-75"
                  />
                  <path
                    d="M110.136216,136.236609 L109.893781,135.954606 C109.874807,135.933537 109.472155,135.975675 108.833391,136.059952 C108.196736,136.144229 107.321863,136.272265 106.360555,136.424611 L36.9609298,147.403281 C34.6820418,147.761457 32.8669422,148.105047 32.9154292,148.166634 L33.2274324,148.563707 C33.2759194,148.625294 35.1669116,148.377326 37.4415834,148.011046 L106.742127,136.871926 C107.701326,136.717959 108.559335,136.568854 109.1728,136.455405 C109.786266,136.338714 110.155189,136.259299 110.136216,136.236609"
                    id="Fill-77"
                  />
                  <path
                    d="M111.402152,137.155182 L111.158057,136.924678 C111.138954,136.907457 110.735666,136.9419 110.094651,137.013435 C109.451513,137.084971 108.57277,137.192274 107.609125,137.319448 L94.6996727,139.023054 C92.7023372,139.286676 91.1061668,139.534401 91.1486181,139.572818 L91.4118164,139.828491 C91.4521452,139.866909 93.10987,139.680121 95.105083,139.41385 L107.995432,137.685075 C108.956955,137.556575 109.818717,137.432051 110.434262,137.33667 C111.049806,137.239964 111.421255,137.173728 111.402152,137.155182"
                    id="Fill-79"
                  />
                  <path
                    d="M111.402147,137.150022 L111.157409,136.924474 C111.138256,136.907622 110.733907,136.942621 110.093334,137.015212 C109.450633,137.086506 108.573835,137.194095 107.609783,137.322424 L94.7004255,139.029593 C92.7020927,139.294029 91.1081083,139.541614 91.1485432,139.579206 L91.4124338,139.828087 C91.4528686,139.868271 93.1106975,139.680314 95.1069022,139.411989 L107.994978,137.680191 C108.95903,137.550565 109.818803,137.426125 110.435966,137.331498 C111.051002,137.234279 111.4213,137.16817 111.402147,137.150022"
                    id="Fill-81"
                  />
                  <path
                    d="M110.13623,139.131384 L109.899996,138.867177 C109.881508,138.84755 109.493263,138.889823 108.874946,138.975879 C108.25663,139.061935 107.41235,139.191774 106.483848,139.344259 L39.3626131,150.347347 C37.1584483,150.708178 35.4000465,151.049383 35.4472933,151.106754 L35.7554244,151.478153 C35.800617,151.535524 37.6329702,151.283395 39.8330266,150.918034 L106.85566,139.760951 C107.782108,139.605447 108.612008,139.459001 109.205674,139.345769 C109.797285,139.231028 110.154717,139.151011 110.13623,139.131384"
                    id="Fill-83"
                  />
                  <path
                    d="M112.668129,139.083475 L112.437476,138.866243 C112.419425,138.850106 112.040352,138.886104 111.438649,138.958101 C110.836946,139.031339 110.014618,139.140576 109.110058,139.268433 L97.0098101,140.982703 C95.136508,141.248347 93.6422788,141.494129 93.6803867,141.531369 L93.9290906,141.770945 C93.9692041,141.808185 95.5236036,141.619503 97.3928944,141.348894 L109.475091,139.61228 C110.37564,139.481941 111.183928,139.359049 111.761563,139.263467 C112.337192,139.166644 112.68618,139.100854 112.668129,139.083475"
                    id="Fill-85"
                  />
                  <path
                    d="M112.668123,141.021011 L112.436835,140.808208 C112.418735,140.7924 112.040629,140.82888 111.43928,140.901841 C110.837932,140.974802 110.015351,141.084244 109.110312,141.211925 L97.0089254,142.930157 C95.1364988,143.196465 93.6421777,143.4421 93.6803905,143.478581 L93.9317904,143.713272 C93.9700032,143.749753 95.5246603,143.560054 97.3950757,143.290098 L109.47635,141.549978 C110.377367,141.418648 111.185869,141.295831 111.763084,141.199765 C112.338287,141.1037 112.686224,141.038035 112.668123,141.021011"
                    id="Fill-87"
                  />
                  <path
                    d="M113.934045,141.094532 L113.695978,140.809338 C113.677347,140.788152 113.288158,140.838672 112.671254,140.938082 C112.05435,141.039122 111.209729,141.190683 110.280232,141.365058 L43.1597848,154.087968 C40.9550759,154.505166 39.1975192,154.896289 39.2451327,154.958217 L39.5577252,155.362377 C39.6053386,155.424305 41.4374206,155.127703 43.6400594,154.705616 L110.656999,141.81648 C111.582356,141.638845 112.412485,141.469358 113.004548,141.338984 C113.594541,141.208609 113.952676,141.117347 113.934045,141.094532"
                    id="Fill-89"
                  />
                  <path
                    d="M115.199999,141.983338 L114.967431,141.778973 C114.94923,141.763792 114.569032,141.801161 113.970423,141.874733 C113.367769,141.948304 112.544682,142.058077 111.640701,142.187703 L99.5411102,143.910208 C97.6684341,144.178802 96.1719111,144.424039 96.2123577,144.459073 L96.4631264,144.684459 C96.5015507,144.720661 98.0567212,144.527974 99.9273749,144.257044 L112.006742,142.511184 C112.910723,142.381558 113.717632,142.256603 114.293996,142.160844 C114.870359,142.066252 115.2182,141.999687 115.199999,141.983338"
                    id="Fill-91"
                  />
                  <path
                    d="M115.199993,142.116808 L114.966779,141.780969 C114.948527,141.756162 114.5693,141.819132 113.969027,141.943164 C113.368753,142.067196 112.543377,142.248473 111.640939,142.466005 L99.5421813,145.341633 C97.6683544,145.788147 96.1737543,146.198406 96.2122853,146.255652 L96.4657792,146.623931 C96.5043103,146.683084 98.0597489,146.36251 99.931548,145.908363 L112.010026,142.996479 C112.912464,142.778947 113.719589,142.570955 114.295527,142.412576 C114.871465,142.252289 115.218245,142.143523 115.199993,142.116808"
                    id="Fill-93"
                  />
                  <path
                    d="M116.465915,144.009011 L116.225925,143.721654 C116.207144,143.702062 115.8169,143.757574 115.203362,143.8637 C114.58565,143.973091 113.74047,144.133096 112.813902,144.320857 L45.6919891,157.918037 C43.4861732,158.365399 41.7290332,158.780106 41.7770311,158.842149 L42.0921476,159.247061 C42.1422324,159.309103 43.9765864,158.992358 46.1803154,158.538466 L113.191624,144.776383 C114.118192,144.586989 114.94459,144.404126 115.53726,144.265345 C116.127843,144.128198 116.484697,144.031868 116.465915,144.009011"
                    id="Fill-95"
                  />
                  <path
                    d="M116.465927,144.045889 L116.231385,143.722689 C116.21303,143.698817 115.833684,143.763089 115.234072,143.886125 C114.632422,144.010998 113.808466,144.19647 112.90497,144.411324 L100.808729,147.298082 C98.9344339,147.746154 97.4394845,148.153825 97.4782349,148.210753 L97.7331717,148.567006 C97.7719221,148.622097 99.3280563,148.297061 101.198273,147.845317 L113.276158,144.925505 C114.177614,144.705142 114.985254,144.497633 115.562431,144.339706 C116.137568,144.181779 116.484282,144.071598 116.465927,144.045889"
                    id="Fill-97"
                  />
                  <path
                    d="M116.465925,144.041416 L116.230677,143.722495 C116.212266,143.699072 115.831777,143.763937 115.232405,143.888262 C114.630988,144.012587 113.808642,144.198174 112.90447,144.414391 L100.80657,147.306302 C98.9327664,147.753152 97.4374054,148.160362 97.4783182,148.214416 L97.7340229,148.567571 C97.77289,148.619824 99.3275744,148.295498 101.199333,147.841441 L113.27473,144.917097 C114.176857,144.699078 114.984883,144.491869 115.561753,144.33331 C116.136577,144.17475 116.484336,144.066641 116.465925,144.041416"
                    id="Fill-99"
                  />
                  <path
                    d="M156.974904,179.900529 L156.624088,179.648995 C156.596779,179.630247 156.273272,179.75992 155.769106,179.988019 C155.262839,180.212994 154.578013,180.537958 153.830167,180.905104 L99.3508014,207.677102 C97.5463064,208.564503 96.1388422,209.331604 96.2144672,209.386286 L96.6997272,209.747183 C96.7753521,209.801864 98.300455,209.119128 100.096547,208.228603 L154.38475,181.303497 C155.128395,180.934788 155.790113,180.592639 156.258567,180.339542 C156.724921,180.086446 157.002213,179.920839 156.974904,179.900529"
                    id="Fill-101"
                  />
                  <path
                    d="M158.240754,179.893181 L157.875079,179.648925 C157.846614,179.63072 157.511595,179.758158 156.988264,179.981174 C156.464934,180.202673 155.753292,180.519751 154.98034,180.879309 L144.596939,185.708298 C142.987533,186.457755 141.726285,187.101013 141.787596,187.143493 L142.188305,187.41354 C142.249616,187.456019 143.607209,186.87648 145.212235,186.122472 L155.556222,181.267691 C156.329174,180.906617 157.01454,180.571333 157.498457,180.322526 C157.982373,180.073718 158.269219,179.912904 158.240754,179.893181"
                    id="Fill-103"
                  />
                  <path
                    d="M156.974925,181.833017 L156.635347,181.591024 C156.610947,181.572987 156.299836,181.700747 155.81792,181.923201 C155.333971,182.145655 154.679216,182.464305 153.963458,182.823537 L144.382073,187.652887 C142.895657,188.401413 141.730518,189.046228 141.787453,189.086811 L142.161599,189.35586 C142.218534,189.396443 143.471109,188.816259 144.951425,188.064727 L154.500276,183.208322 C155.211967,182.846083 155.844354,182.5109 156.291703,182.262894 C156.739051,182.014888 157.00136,181.852557 156.974925,181.833017"
                    id="Fill-105"
                  />
                  <path
                    d="M158.240851,181.851779 L157.898474,181.591425 C157.873872,181.570402 157.562247,181.709474 157.078409,181.95204 C156.59457,182.19299 155.936468,182.539052 155.220961,182.930393 L103.017656,211.4433 C101.289368,212.387693 99.9403607,213.204334 100.012116,213.260933 L100.489804,213.631252 C100.56156,213.689468 102.025377,212.961768 103.747514,212.012523 L155.762204,183.342756 C156.473611,182.949798 157.107111,182.585948 157.556097,182.317508 C158.003033,182.04745 158.267504,181.872802 158.240851,181.851779"
                    id="Fill-107"
                  />
                  <path
                    d="M159.506772,182.801176 L159.163008,182.562026 C159.138307,182.544312 158.827478,182.672744 158.345796,182.894178 C157.862056,183.118565 157.205404,183.437431 156.491115,183.797631 L146.911001,188.627858 C145.424786,189.377783 144.261751,190.02142 144.319388,190.062754 L144.698146,190.326999 C144.755784,190.366858 146.007333,189.785223 147.48943,189.032345 L157.032493,184.17407 C157.744723,183.812394 158.376673,183.477289 158.823361,183.229283 C159.270049,182.981276 159.533533,182.81889 159.506772,182.801176"
                    id="Fill-109"
                  />
                  <path
                    d="M160.772689,182.799029 L160.426769,182.561996 C160.401912,182.544438 160.091206,182.673196 159.608575,182.895598 C159.125945,183.119463 158.469318,183.436971 157.754693,183.798374 L148.174577,188.629758 C146.6894,189.380364 145.527358,190.022695 145.585357,190.063664 L145.964419,190.327035 C146.022417,190.36654 147.277671,189.784199 148.756634,189.03213 L158.299465,184.171482 C159.012019,183.808616 159.643789,183.475013 160.091206,183.226274 C160.536552,182.978999 160.799617,182.816587 160.772689,182.799029"
                    id="Fill-111"
                  />
                  <path
                    d="M162.038601,182.815714 L161.689727,182.562375 C161.664659,182.541919 161.3513,182.681963 160.868726,182.922714 C160.384064,183.166612 159.728099,183.511215 159.011551,183.901451 L106.812184,212.424884 C105.08453,213.370577 103.734997,214.185667 103.810203,214.240741 L104.296954,214.602653 C104.37216,214.657727 105.836592,213.929181 107.557978,212.980341 L159.560974,184.305849 C160.275433,183.912466 160.90633,183.550554 161.355478,183.279906 C161.802537,183.010832 162.065758,182.83617 162.038601,182.815714"
                    id="Fill-113"
                  />
                  <path
                    d="M163.30452,184.737074 L162.956308,184.504084 C162.929038,184.486826 162.618584,184.614826 162.136122,184.837748 C161.651562,185.063547 160.994993,185.379952 160.281788,185.740942 L150.705956,190.579068 C149.22081,191.328374 148.056607,191.97269 148.117439,192.01296 L148.501312,192.268961 C148.562144,192.310669 149.814449,191.726757 151.295399,190.973137 L160.835571,186.110561 C161.546678,185.748133 162.178075,185.413031 162.624877,185.164221 C163.069582,184.91685 163.33179,184.755771 163.30452,184.737074"
                    id="Fill-115"
                  />
                  <path
                    d="M163.304494,184.73504 L162.951945,184.504056 C162.926612,184.486946 162.614174,184.615271 162.132851,184.839126 C161.649416,185.061556 160.992874,185.380942 160.279333,185.741677 L150.703528,190.580946 C149.219447,191.330933 148.056249,191.973983 148.11747,192.01248 L148.503795,192.26913 C148.565016,192.309053 149.81688,191.725888 151.296738,190.971624 L160.834544,186.108115 C161.545974,185.745954 162.177183,185.410884 162.62473,185.16279 C163.070165,184.914695 163.331937,184.753576 163.304494,184.73504"
                    id="Fill-117"
                  />
                  <path
                    d="M163.304505,186.708323 L162.95861,186.446645 C162.931522,186.425516 162.625218,186.575046 162.152217,186.830223 C161.679216,187.088651 161.035352,187.45435 160.335227,187.870434 L109.276159,218.130815 C107.584191,219.133643 106.265207,219.996693 106.342304,220.055205 L106.827807,220.42903 C106.90282,220.485917 108.336408,219.71226 110.020041,218.704556 L160.883241,188.288144 C161.581282,187.870434 162.200142,187.485231 162.63772,187.200798 C163.075298,186.91474 163.331593,186.729453 163.304505,186.708323"
                    id="Fill-119"
                  />
                  <path
                    d="M165.836322,186.730663 L165.481344,186.44678 C165.453544,186.423999 165.141335,186.586969 164.66019,186.865596 C164.176907,187.145975 163.520412,187.545515 162.80618,187.997626 L153.234609,194.048554 C151.750545,194.986071 150.589383,195.790408 150.649258,195.837722 L151.042728,196.153149 C151.102603,196.200463 152.357856,195.471477 153.835505,194.528703 L163.368584,188.446232 C164.080678,187.994121 164.711512,187.573553 165.158442,187.265136 C165.603234,186.954966 165.864121,186.753444 165.836322,186.730663"
                    id="Fill-121"
                  />
                  <path
                    d="M167.102249,187.699305 L166.744908,187.417808 C166.716923,187.395219 166.404787,187.558557 165.922591,187.838316 C165.438243,188.118076 164.783834,188.517733 164.069151,188.967781 L154.500575,195.021711 C153.01524,195.960035 151.854956,196.762824 151.91523,196.811478 L152.31132,197.124252 C152.371594,197.171169 153.626595,196.441361 155.10332,195.497823 L164.6353,189.414354 C165.347831,188.962568 165.978561,188.54206 166.424161,188.23276 C166.867609,187.923461 167.130234,187.721895 167.102249,187.699305"
                    id="Fill-123"
                  />
                  <path
                    d="M216.471785,218.691811 L216.062358,218.490681 C216.031184,218.47459 215.827509,218.691811 215.524076,219.055454 C215.220643,219.417488 214.817451,219.929163 214.383085,220.501982 L182.774085,262.235669 C181.726617,263.616226 180.947251,264.777954 181.036619,264.819789 L181.616467,265.099762 C181.705834,265.143206 182.624447,264.049058 183.661523,262.663674 L215.033595,220.820572 C215.463805,220.246144 215.837901,219.721597 216.099768,219.335427 C216.359556,218.952476 216.50296,218.707901 216.471785,218.691811"
                    id="Fill-125"
                  />
                  <path
                    d="M217.737881,218.699022 L217.348068,218.490711 C217.318387,218.474046 217.126448,218.699022 216.841509,219.077315 C216.556569,219.455609 216.17665,219.985553 215.769028,220.582156 L210.303731,228.571312 C209.454848,229.811181 208.819671,230.849404 208.884969,230.884401 L209.316336,231.11271 C209.383613,231.149373 210.121686,230.166143 210.962653,228.922941 L216.386397,220.912121 C216.790061,220.315518 217.144257,219.770575 217.387643,219.368951 C217.633007,218.968993 217.767562,218.715687 217.737881,218.699022"
                    id="Fill-127"
                  />
                  <path
                    d="M217.737777,218.699559 L217.342956,218.490543 C217.312893,218.475613 217.122497,218.701218 216.835901,219.079438 C216.551309,219.455999 216.170517,219.986834 215.763671,220.584023 L210.300305,228.573091 C209.452541,229.810601 208.817219,230.849047 208.885361,230.885542 L209.320266,231.112805 C209.388408,231.147641 210.127946,230.163938 210.967693,228.921452 L216.388971,220.912478 C216.793814,220.315288 217.146547,219.769523 217.389052,219.368079 C217.633561,218.969953 217.76784,218.714489 217.737777,218.699559"
                    id="Fill-129"
                  />
                  <path
                    d="M219.00366,219.660203 L218.608227,219.461725 C218.578117,219.445846 218.389434,219.663379 218.106408,220.025404 C217.825389,220.390605 217.448021,220.901886 217.044559,221.475092 L187.708228,263.212769 C186.736707,264.59418 186.014088,265.753296 186.1004,265.796167 L186.662438,266.070861 C186.746743,266.113733 187.601843,265.018131 188.565335,263.633544 L217.670829,221.789482 C218.070277,221.214688 218.419543,220.689117 218.660416,220.304862 C218.901289,219.920607 219.033769,219.676082 219.00366,219.660203"
                    id="Fill-131"
                  />
                  <path
                    d="M219.003502,219.667295 L218.600487,219.461748 C218.569644,219.445304 218.376361,219.672228 218.092606,220.04879 C217.804738,220.42864 217.424342,220.959773 217.019271,221.555037 L211.562121,229.545052 C210.714968,230.78491 210.081659,231.82251 210.151569,231.857042 L210.599821,232.083966 C210.667675,232.116853 211.407906,231.135162 212.246835,229.892015 L217.658748,221.882267 C218.061763,221.283715 218.415429,220.737782 218.65806,220.336555 C218.900692,219.938617 219.034345,219.683738 219.003502,219.667295"
                    id="Fill-133"
                  />
                  <path
                    d="M221.535271,219.666411 L221.126956,219.461744 C221.095708,219.445371 220.901967,219.671323 220.616563,220.049548 C220.331159,220.427773 219.949926,220.959907 219.543694,221.555898 L214.091856,229.546101 C213.246061,230.785565 212.612756,231.823637 212.683586,231.858021 L213.135649,232.083973 C213.206479,232.11672 213.946029,231.134318 214.785575,229.891579 L220.193665,221.881728 C220.59573,221.282463 220.947798,220.735592 221.189454,220.336082 C221.433193,219.936572 221.56652,219.682785 221.535271,219.666411"
                    id="Fill-135"
                  />
                  <path
                    d="M222.801136,221.603883 L222.391213,221.403852 C222.359841,221.387849 222.16952,221.610284 221.887175,221.979941 C221.602738,222.352798 221.226278,222.874478 220.824721,223.460168 L191.498483,266.074728 C190.525961,267.484545 189.810687,268.667127 189.898528,268.710333 L190.482041,268.983975 C190.571973,269.028782 191.429465,267.91021 192.389439,266.497193 L221.47516,223.777017 C221.874626,223.189727 222.221806,222.653644 222.460231,222.261584 C222.700747,221.869524 222.832508,221.619885 222.801136,221.603883"
                    id="Fill-137"
                  />
                  <path
                    d="M224.066909,221.608292 L223.64745,221.403712 C223.615349,221.389099 223.42274,221.614786 223.135967,221.991473 C222.851334,222.371407 222.470397,222.903964 222.063779,223.499843 L216.619374,231.493067 C215.774035,232.731911 215.144847,233.769423 215.21547,233.805143 L215.679871,234.02596 C215.752634,234.06168 216.490968,233.076125 217.329886,231.834033 L222.729349,223.821325 C223.131687,223.223823 223.484803,222.676653 223.724494,222.277235 C223.966324,221.877817 224.09901,221.622905 224.066909,221.608292"
                    id="Fill-139"
                  />
                  <path
                    d="M225.332721,221.605952 L224.907519,221.403855 C224.874978,221.387687 224.681901,221.614036 224.39554,221.990746 C224.10918,222.370689 223.729535,222.902609 223.323857,223.4992 L217.880834,231.490939 C217.036938,232.732625 216.409982,233.76898 216.481572,233.802933 L216.952332,234.026048 C217.023922,234.060001 217.765856,233.075382 218.601075,231.832079 L223.99854,223.819323 C224.399879,223.221114 224.749152,222.674643 224.992125,222.275299 C225.232929,221.875954 225.365262,221.62212 225.332721,221.605952"
                    id="Fill-141"
                  />
                  <path
                    d="M225.332815,223.54351 L224.921415,223.345963 C224.88993,223.330159 224.70522,223.552992 224.432353,223.922799 C224.159486,224.295767 223.798462,224.81887 223.410152,225.403608 L195.225085,268.023082 C194.293139,269.431193 193.606773,270.613312 193.697029,270.655982 L194.280545,270.926225 C194.370801,270.968895 195.195699,269.851572 196.119249,268.437139 L224.062933,225.716521 C224.447046,225.130203 224.778685,224.592877 225.009572,224.200945 C225.238361,223.809012 225.364299,223.559313 225.332815,223.54351"
                    id="Fill-143"
                  />
                  <path
                    d="M227.864262,223.548001 L227.429211,223.345969 C227.395746,223.329935 227.201646,223.557621 226.916074,223.934426 C226.628271,224.314437 226.248996,224.846773 225.842948,225.443247 L220.408156,233.437914 C219.567057,234.675756 218.940137,235.714774 219.013761,235.746843 L219.497895,235.968115 C219.571519,236.00339 220.312222,235.017285 221.148858,233.774632 L226.536799,225.760724 C226.936153,225.162648 227.286425,224.617484 227.527376,224.216628 C227.768328,223.817376 227.897728,223.564035 227.864262,223.548001"
                    id="Fill-145"
                  />
                  <path
                    d="M227.864112,223.545584 L227.422848,223.345966 C227.388904,223.329997 227.194295,223.556763 226.90917,223.935238 C226.621782,224.313713 226.241615,224.845495 225.836557,225.441155 L220.407868,233.437046 C219.56607,234.67787 218.939248,235.714286 219.013923,235.749419 L219.504972,235.9682 C219.579647,236.001736 220.321878,235.018019 221.156886,233.774001 L226.538055,225.760543 C226.940851,225.16169 227.289337,224.615535 227.529204,224.214703 C227.769071,223.815467 227.898056,223.561553 227.864112,223.545584"
                    id="Fill-147"
                  />
                  <path
                    d="M283.549761,243.856824 L283.104888,243.737814 C283.071522,243.728032 282.998118,244.001919 282.906919,244.451877 C282.81572,244.903464 282.706726,245.531122 282.60218,246.233773 L275.019307,296.850707 C274.772402,298.510332 274.645613,299.881398 274.741261,299.905852 L275.364084,300.059098 C275.459732,300.081922 275.733329,298.748353 275.975785,297.085468 L283.307305,246.422885 C283.409626,245.723495 283.487479,245.084425 283.529742,244.621426 C283.574229,244.158426 283.585351,243.866606 283.549761,243.856824"
                    id="Fill-149"
                  />
                  <path
                    d="M283.549721,245.799478 L283.104936,245.679944 C283.071577,245.670252 283.000411,245.941628 282.913678,246.389075 C282.826945,246.838137 282.722421,247.461656 282.624568,248.157864 L281.296884,257.467029 C281.094506,258.907906 280.987758,260.098406 281.063371,260.11779 L281.552635,260.245401 C281.628249,260.266401 281.848417,259.106592 282.046347,257.665715 L283.327329,248.345243 C283.422957,247.65065 283.496347,247.017439 283.534154,246.557069 C283.576408,246.0967 283.58308,245.807555 283.549721,245.799478"
                    id="Fill-151"
                  />
                  <path
                    d="M283.547327,245.799265 L283.080689,245.679942 C283.045691,245.670267 282.973362,245.942775 282.887034,246.389431 C282.800706,246.8377 282.698045,247.461728 282.600051,248.158318 L281.291132,257.465533 C281.088144,258.907087 280.985484,260.097095 281.067145,260.116445 L281.578114,260.245443 C281.657443,260.264793 281.881429,259.107035 282.075084,257.663868 L283.335006,248.346978 C283.428334,247.648776 283.49833,247.018297 283.537994,246.557129 C283.577658,246.097573 283.582324,245.80894 283.547327,245.799265"
                    id="Fill-153"
                  />
                  <path
                    d="M284.816497,245.800049 L284.440252,245.679943 C284.410002,245.670205 284.355172,245.9445 284.287108,246.394083 C284.220934,246.846913 284.141525,247.476654 284.067789,248.17781 L278.711499,298.797342 C278.535666,300.456094 278.458149,301.827567 278.539448,301.848667 L279.066947,302.001233 C279.148246,302.023956 279.350549,300.689813 279.518819,299.029437 L284.663352,248.367706 C284.735198,247.664928 284.786246,247.027071 284.814607,246.56288 C284.842967,246.100312 284.844857,245.808164 284.816497,245.800049"
                    id="Fill-155"
                  />
                  <path
                    d="M287.337948,245.798894 L286.824869,245.67994 C286.783408,245.670295 286.710851,245.943568 286.622747,246.39045 C286.532051,246.837332 286.43099,247.462646 286.337703,248.158689 L285.067961,257.469269 C284.871021,258.90958 284.782917,260.099122 284.871021,260.118412 L285.438518,260.245404 C285.526623,260.266301 285.749475,259.107301 285.938641,257.665383 L287.153965,248.346765 C287.244661,247.649114 287.309444,247.017371 287.343131,246.557629 C287.376818,246.097887 287.379409,245.808539 287.337948,245.798894"
                    id="Fill-157"
                  />
                  <path
                    d="M287.3348,245.798698 L286.792165,245.679941 C286.748316,245.670312 286.67432,245.941529 286.586622,246.389279 C286.496183,246.837028 286.394782,247.46131 286.301602,248.15781 L285.057379,257.467472 C284.865539,258.908616 284.780581,260.0978 284.876501,260.117058 L285.473947,260.245445 C285.564386,260.264703 285.791854,259.106011 285.975473,257.664867 L287.164884,248.345576 C287.255323,247.649076 287.315616,247.01677 287.348503,246.556182 C287.378649,246.097198 287.375908,245.806723 287.3348,245.798698"
                    id="Fill-159"
                  />
                  <path
                    d="M288.603491,246.770535 L288.142544,246.650933 C288.105296,246.642852 288.044767,246.915997 287.972599,247.36693 C287.902758,247.81948 287.823605,248.449816 287.749109,249.151267 L282.48779,299.773748 C282.315516,301.432017 282.25266,302.800979 282.352765,302.823606 L282.999953,302.972301 C283.100058,302.994928 283.314236,301.663141 283.477197,300.003255 L288.480106,249.340368 C288.552275,248.637301 288.598835,248.000499 288.622115,247.53502 C288.643068,247.072773 288.638412,246.780233 288.603491,246.770535"
                    id="Fill-161"
                  />
                  <path
                    d="M288.587452,246.76941 L287.975264,246.651004 C287.928886,246.641404 287.85159,246.913416 287.761926,247.361437 C287.672262,247.807857 287.573322,248.433486 287.48675,249.131118 L286.296386,258.441945 C286.113966,259.882011 286.049037,261.070866 286.151068,261.090066 L286.828185,261.216472 C286.930216,261.237273 287.155922,260.07882 287.332158,258.637154 L288.454502,249.316727 C288.537982,248.620695 288.596727,247.988666 288.621462,247.527845 C288.646197,247.067023 288.636921,246.77901 288.587452,246.76941"
                    id="Fill-163"
                  />
                  <path
                    d="M291.114809,246.769228 L290.461135,246.651004 C290.411614,246.641418 290.33238,246.913013 290.239942,247.360346 C290.154106,247.807678 290.055064,248.433944 289.969228,249.130505 L288.817045,258.441414 C288.635469,259.880866 288.579345,261.069493 288.694894,261.090262 L289.411294,261.216473 C289.523541,261.237242 289.751337,260.077373 289.919707,258.636323 L291.002562,249.317426 C291.085096,248.619267 291.137918,247.988209 291.157727,247.526498 C291.177535,247.067982 291.16433,246.778813 291.114809,246.769228"
                    id="Fill-165"
                  />
                  <path
                    d="M289.869251,246.77014 L289.512607,246.651006 C289.483641,246.641346 289.442002,246.915032 289.396742,247.367418 C289.351483,247.818194 289.302603,248.449281 289.257343,249.151203 L286.194182,299.779801 C286.0928,301.436403 286.072886,302.804831 286.148922,302.82576 L286.650397,302.972262 C286.726433,302.996411 286.865832,301.663401 286.959972,300.005189 L289.825802,249.341173 C289.86382,248.637641 289.889166,248.000114 289.898217,247.534849 C289.905459,247.071194 289.896407,246.778189 289.869251,246.77014"
                    id="Fill-167"
                  />
                  <path
                    d="M292.395512,246.768877 L292.020307,246.651002 C291.991738,246.641444 291.949836,246.913831 291.904126,247.361437 C291.86032,247.809043 291.810801,248.435054 291.772709,249.12956 L291.241326,258.441676 C291.157524,259.881661 291.142287,261.071561 291.205139,261.090675 L291.620341,261.216515 C291.683193,261.23563 291.797469,260.077589 291.873653,258.636011 L292.366943,249.317523 C292.405035,248.619831 292.425986,247.989041 292.4317,247.528692 C292.435509,247.06675 292.425986,246.778434 292.395512,246.768877"
                    id="Fill-169"
                  />
                  <path
                    d="M293.655187,248.710839 L293.249468,248.593132 C293.218576,248.583588 293.175326,248.857178 293.130018,249.304147 C293.084709,249.751117 293.037341,250.377828 293.00027,251.072937 L292.497755,260.384534 C292.417435,261.825653 292.411256,263.01386 292.479219,263.032947 L292.926128,263.158608 C292.996151,263.179286 293.109423,262.019711 293.181505,260.578592 L293.64283,251.260633 C293.677841,250.562342 293.696377,249.930859 293.698436,249.469574 C293.698436,249.008289 293.686079,248.720383 293.655187,248.710839"
                    id="Fill-171"
                  />
                  <path
                    d="M345.969198,258.333725 L345.608415,258.303557 C345.582065,258.301969 345.638818,258.58777 345.752323,259.05299 C345.865827,259.516622 346.036085,260.161262 346.238772,260.877352 L360.584985,311.633989 C361.047112,313.274168 361.484917,314.607906 361.559911,314.609493 L362.048388,314.625371 C362.123382,314.628547 361.803136,313.297985 361.332901,311.660982 L346.806297,260.920222 C346.601583,260.207308 346.407003,259.559493 346.257014,259.092685 C346.102972,258.625876 345.997574,258.335312 345.969198,258.333725"
                    id="Fill-173"
                  />
                  <path
                    d="M345.898229,258.33172 L345.607197,258.303576 C345.585822,258.300449 345.631861,258.58345 345.727227,259.040004 C345.820949,259.498122 345.962354,260.131356 346.131712,260.83495 L348.361311,270.213076 C348.706603,271.657788 349.025587,272.838263 349.074914,272.842953 L349.393898,272.869534 C349.441581,272.872661 349.198233,271.700004 348.849652,270.253728 L346.590457,260.87873 C346.421099,260.176699 346.259963,259.538774 346.135,259.080656 C346.008393,258.620975 345.921248,258.334847 345.898229,258.33172"
                    id="Fill-175"
                  />
                  <path
                    d="M347.158414,258.333277 L346.872824,258.303557 C346.851849,258.301992 346.900254,258.583551 346.993837,259.040302 C347.089033,259.498617 347.232635,260.132124 347.398825,260.836021 L349.635138,270.213489 C349.980427,271.660388 350.2999,272.839806 350.348306,272.842934 L350.659711,272.869526 C350.708116,272.874218 350.462864,271.701057 350.112734,270.254158 L347.852219,260.879819 C347.681188,260.177486 347.519838,259.540851 347.393985,259.080971 C347.268132,258.621092 347.181003,258.334841 347.158414,258.333277"
                    id="Fill-177"
                  />
                  <path
                    d="M347.264628,258.333784 L346.874579,258.303557 C346.845931,258.301966 346.912041,258.588332 347.044262,259.052881 C347.178685,259.51743 347.377015,260.163344 347.610604,260.879259 L364.204225,311.63762 C364.739717,313.274678 365.237746,314.607871 365.319281,314.611053 L365.845958,314.625371 C365.927494,314.628553 365.55287,313.298542 365.010768,311.663075 L348.227631,260.922214 C347.989635,260.20789 347.764861,259.560385 347.588568,259.094245 C347.414478,258.626514 347.29548,258.335375 347.264628,258.333784"
                    id="Fill-179"
                  />
                  <path
                    d="M349.678298,258.333302 L349.404419,258.303557 C349.38419,258.301991 349.43243,258.583792 349.527354,259.040935 C349.62539,259.498079 349.768553,260.132131 349.936615,260.836632 L352.18055,270.212771 C352.527566,271.659348 352.846572,272.83978 352.8917,272.844477 L353.192032,272.869526 C353.238716,272.874222 352.991292,271.700053 352.639607,270.255041 L350.369218,260.880468 C350.1996,260.177532 350.036207,259.540349 349.911717,259.08164 C349.787227,258.621365 349.700084,258.336433 349.678298,258.333302"
                    id="Fill-181"
                  />
                  <path
                    d="M349.673304,258.331771 L349.404237,258.303576 C349.384363,258.300443 349.433284,258.582395 349.529598,259.039784 C349.62744,259.497172 349.769618,260.131564 349.939314,260.834878 L352.188165,270.212912 C352.533672,271.660265 352.853189,272.839764 352.897524,272.844463 L353.192581,272.869526 C353.236916,272.874225 352.987723,271.700992 352.636101,270.255205 L350.364318,260.880303 C350.194622,260.17699 350.031041,259.539465 349.90568,259.08051 C349.781848,258.619989 349.694707,258.334904 349.673304,258.331771"
                    id="Fill-183"
                  />
                  <path
                    d="M352.303795,258.333849 L351.936823,258.303557 C351.911802,258.301962 351.980609,258.58735 352.114054,259.052899 C352.249583,259.518447 352.447665,260.164157 352.683277,260.880017 L369.307533,311.642353 C369.843396,313.276556 370.341727,314.609428 370.418875,314.611022 L370.910951,314.625371 C370.988099,314.62856 370.606531,313.300471 370.068583,311.664673 L353.260841,260.926253 C353.025229,260.210393 352.797956,259.563089 352.624895,259.094352 C352.451835,258.627209 352.332986,258.335444 352.303795,258.333849"
                    id="Fill-185"
                  />
                  <path
                    d="M352.369515,258.333366 L351.938497,258.303576 C351.906479,258.30044 351.990219,258.582665 352.150312,259.040497 C352.31533,259.498329 352.554236,260.131767 352.835014,260.835762 L356.598412,270.213474 C357.177206,271.660662 357.706742,272.839735 357.780631,272.844439 L358.253519,272.869526 C358.324944,272.874229 357.906242,271.701427 357.320058,270.255808 L353.519716,260.881232 C353.236476,260.178805 352.963087,259.54223 352.756199,259.081263 C352.546848,258.621863 352.403996,258.334934 352.369515,258.333366"
                    id="Fill-187"
                  />
                  <path
                    d="M353.572999,258.333939 L353.203342,258.303576 C353.175882,258.30038 353.249813,258.58803 353.395564,259.053064 C353.539202,259.519695 353.754659,260.165309 354.006025,260.882835 L371.77278,311.645001 C372.34522,313.27981 372.873301,314.610989 372.949345,314.612587 L373.443628,314.625371 C373.519672,314.628567 373.111993,313.300585 372.535329,311.667374 L354.589026,260.929178 C354.335548,260.21325 354.094743,259.566039 353.910971,259.096211 C353.727198,258.627981 353.600459,258.337136 353.572999,258.333939"
                    id="Fill-189"
                  />
                  <path
                    d="M353.612263,258.334962 L353.203845,258.303557 C353.173331,258.301986 353.257831,258.583067 353.422137,259.041591 C353.586443,259.498544 353.830555,260.13451 354.112222,260.837998 L357.891258,270.214173 C358.47337,271.658835 359.003843,272.83969 359.071913,272.842831 L359.520233,272.869526 C359.588303,272.874236 359.163455,271.702803 358.576648,270.25657 L354.760057,260.881966 C354.473695,260.180048 354.203764,259.544082 353.994861,259.082418 C353.788305,258.622325 353.645124,258.336533 353.612263,258.334962"
                    id="Fill-191"
                  />
                  <path
                    d="M356.13758,258.333408 L355.735405,258.303557 C355.705358,258.301986 355.793189,258.583218 355.957295,259.040418 C356.121401,259.497618 356.366404,260.133927 356.6507,260.836224 L360.43207,270.214318 C361.014531,271.65819 361.546142,272.838111 361.613171,272.841253 L362.052328,272.869533 C362.119357,272.872676 361.694068,271.70061 361.104674,270.256739 L357.286322,260.881786 C356.999714,260.17949 356.726975,259.543181 356.521265,259.082839 C356.313243,258.622497 356.169939,258.33655 356.13758,258.333408"
                    id="Fill-193"
                  />
                  <path
                    d="M400.320311,256.361447 L400.039343,256.412906 C400.019129,256.417731 400.16871,256.694326 400.429465,257.138166 C400.69022,257.585222 401.06215,258.199522 401.482592,258.876538 L430.806425,306.114908 C431.734228,307.610455 432.534686,308.813325 432.589263,308.798852 L432.949064,308.703973 C433.003641,308.6895 432.292123,307.464116 431.360277,305.973394 L401.925269,258.796132 C401.502806,258.119116 401.112684,257.508032 400.821608,257.067409 C400.530533,256.628394 400.342546,256.35823 400.320311,256.361447"
                    id="Fill-195"
                  />
                  <path
                    d="M400.314724,256.361448 L400.039286,256.415048 C400.01947,256.418398 400.168088,256.7065 400.425691,257.168803 C400.683294,257.632781 401.049884,258.272635 401.464031,258.97614 L406.980705,268.337776 C407.828815,269.776611 408.554067,270.937393 408.601625,270.927343 L408.896878,270.863693 C408.942454,270.853643 408.286556,269.677785 407.436465,268.242301 L401.897993,258.890714 C401.481865,258.18721 401.09546,257.552381 400.808133,257.095103 C400.522788,256.637825 400.336521,256.358098 400.314724,256.361448"
                    id="Fill-197"
                  />
                  <path
                    d="M400.352323,256.361485 L400.039502,256.413518 C400.016997,256.416875 400.188036,256.705573 400.482853,257.167156 C400.77542,257.632095 401.196266,258.271596 401.671124,258.97488 L407.979314,268.337447 C408.947035,269.775905 409.775224,270.937414 409.829236,270.927343 L410.162312,270.863561 C410.216324,270.85349 409.466903,269.678553 408.492431,268.241773 L402.161736,258.890956 C401.684627,258.185994 401.243527,257.551528 400.917202,257.094981 C400.588627,256.636756 400.377079,256.356449 400.352323,256.361485"
                    id="Fill-199"
                  />
                  <path
                    d="M401.60017,256.361446 L401.305343,256.41071 C401.283979,256.415478 401.446347,256.687223 401.728356,257.12424 C402.008228,257.562846 402.409877,258.166724 402.864936,258.832579 L434.456312,305.196119 C435.454024,306.662907 436.312869,307.843648 436.368416,307.827756 L436.746564,307.733996 C436.806384,307.719694 436.037269,306.519883 435.033148,305.056274 L403.330678,258.753122 C402.873482,258.087267 402.452605,257.488156 402.140687,257.055906 C401.826632,256.623657 401.623671,256.358268 401.60017,256.361446"
                    id="Fill-201"
                  />
                  <path
                    d="M401.612159,256.361485 L401.305397,256.412044 C401.283168,256.417099 401.454332,256.705282 401.747756,257.168734 C402.04118,257.632186 402.463533,258.270908 402.939236,258.975355 L409.250078,268.337086 C410.219267,269.776316 411.048413,270.935789 411.09954,270.927362 L411.42853,270.863322 C411.479657,270.854895 410.730536,269.67857 409.756902,268.242711 L403.419385,258.891091 C402.945905,258.186644 402.503546,257.552978 402.176778,257.096267 C401.847787,256.637871 401.636611,256.356429 401.612159,256.361485"
                    id="Fill-203"
                  />
                  <path
                    d="M401.610273,256.361448 L401.305385,256.413795 C401.283291,256.417172 401.45341,256.705924 401.747252,257.170291 C402.043303,257.632968 402.465287,258.271261 402.940294,258.97541 L409.252369,268.338729 C410.222268,269.775733 411.050769,270.935805 411.101584,270.927362 L411.428566,270.863195 C411.47938,270.853063 410.728206,269.679482 409.756098,268.242479 L403.417511,258.892668 C402.942503,258.18852 402.500636,257.553604 402.173654,257.095992 C401.846672,256.63838 401.634576,256.358071 401.610273,256.361448"
                    id="Fill-205"
                  />
                  <path
                    d="M404.124648,256.361482 L403.837151,256.409492 C403.816166,256.412692 403.97985,256.686347 404.258953,257.124835 C404.542253,257.561722 404.945168,258.166643 405.398447,258.832377 L437.002088,305.201658 C438.000981,306.665952 438.857175,307.842187 438.911737,307.827784 L439.278977,307.734966 C439.333538,307.718962 438.565482,306.520322 437.566588,305.05923 L405.853825,258.753961 C405.396348,258.088228 404.976645,257.488108 404.663966,257.056021 C404.351288,256.622334 404.147732,256.356681 404.124648,256.361482"
                    id="Fill-207"
                  />
                  <path
                    d="M404.13638,256.361449 L403.837224,256.414015 C403.815387,256.417406 403.98571,256.705672 404.280499,257.170288 C404.577472,257.631513 404.998912,258.270785 405.472758,258.976187 L411.792165,268.336342 C412.761694,269.775975 413.589288,270.937516 413.641694,270.927341 L413.960504,270.864601 C414.010727,270.854427 413.25956,269.679321 412.285664,268.24308 L405.944421,258.893099 C405.466207,258.187696 405.025115,257.553512 404.699755,257.097374 C404.372211,256.637845 404.1604,256.358057 404.13638,256.361449"
                    id="Fill-209"
                  />
                  <path
                    d="M404.134618,256.361487 L403.837192,256.410776 C403.815482,256.415875 403.986991,256.704812 404.280075,257.168812 C404.577501,257.631112 404.998673,258.270174 405.474121,258.975522 L411.79388,268.3405 C412.766484,269.778389 413.593632,270.937539 413.643565,270.927341 L413.96053,270.864455 C414.010463,270.855956 413.2593,269.68151 412.286695,268.24532 L405.943055,258.89224 C405.465437,258.186892 405.024725,257.552929 404.696905,257.095728 C404.369086,256.636827 404.158499,256.356388 404.134618,256.361487"
                    id="Fill-211"
                  />
                  <path
                    d="M405.385322,256.361447 L405.102724,256.409798 C405.084159,256.413021 405.247117,256.68701 405.529715,257.125392 C405.812312,257.563774 406.21455,258.168161 406.670419,258.835404 L438.280105,305.203965 C439.27848,306.665775 440.132461,307.840703 440.188156,307.82781 L440.545013,307.73272 C440.598644,307.718214 439.829236,306.519111 438.830862,305.060524 L407.113912,258.756431 C406.658043,258.090799 406.235177,257.489636 405.923701,257.057701 C405.610162,256.624154 405.408012,256.358224 405.385322,256.361447"
                    id="Fill-213"
                  />
                  <path
                    d="M405.397092,255.390383 L405.103073,255.441581 C405.081612,255.444994 405.255448,255.733411 405.549466,256.197608 C405.845631,256.660099 406.266271,257.300076 406.744857,258.004905 L413.065187,267.369058 C414.035234,268.804315 414.865783,269.966514 414.915144,269.956275 L415.226332,269.89313 C415.277839,269.884597 414.52455,268.710451 413.55021,267.273488 L407.206273,257.921281 C406.727688,257.218159 406.285586,256.583301 405.959376,256.125931 C405.631019,255.66856 405.418553,255.38697 405.397092,255.390383"
                    id="Fill-215"
                  />
                  <path
                    d="M407.927001,255.390383 L407.63464,255.439979 C407.615433,255.44511 407.786155,255.732427 408.082784,256.197606 C408.379413,256.659365 408.799815,257.298987 409.277836,258.003597 L415.600942,267.367041 C416.571922,268.805335 417.397789,269.963153 417.446871,269.956312 L417.758438,269.891323 C417.807521,269.882772 417.054211,268.707852 416.078963,267.272979 L409.734517,257.921506 C409.256496,257.216896 408.814754,256.582405 408.488248,256.125777 C408.161743,255.667438 407.948341,255.386963 407.927001,255.390383"
                    id="Fill-217"
                  />
                  <path
                    d="M439.481046,245.679983 L439.282631,245.789691 C439.265564,245.797641 439.487446,246.039316 439.858673,246.420909 C440.229901,246.802502 440.750472,247.327191 441.330781,247.90276 L481.052075,287.21793 C482.283098,288.437436 483.313573,289.404138 483.349843,289.377108 L483.588793,289.210161 C483.622929,289.183132 482.652192,288.176681 481.421169,286.960355 L441.646537,247.727864 C441.061961,247.152295 440.528589,246.637145 440.138161,246.265092 C439.747732,245.896219 439.498114,245.670443 439.481046,245.679983"
                    id="Fill-219"
                  />
                  <path
                    d="M439.488887,245.679893 L439.282659,245.787496 C439.264919,245.796853 439.497757,246.032333 439.883604,246.405046 C440.26945,246.779319 440.810521,247.290825 441.415901,247.855352 L449.436622,255.301817 C450.66512,256.440229 451.687391,257.349399 451.722871,257.332245 L451.940186,257.210607 C451.975667,257.190334 451.004399,256.251533 449.7759,255.11624 L441.744092,247.682251 C441.136495,247.120842 440.579901,246.617134 440.174097,246.253778 C439.766076,245.891981 439.506627,245.672096 439.488887,245.679893"
                    id="Fill-221"
                  />
                  <path
                    d="M439.490351,243.737849 L439.282448,243.844262 C439.266966,243.853651 439.496986,244.088385 439.884039,244.462396 C440.271092,244.836406 440.812967,245.348127 441.41677,245.91149 L449.438722,253.360396 C450.666233,254.49964 451.690265,255.408845 451.721229,255.390066 L451.940191,255.268005 C451.975579,255.249226 451.004628,254.311853 449.774905,253.174173 L441.744106,245.739351 C441.13588,245.177553 440.580735,244.673657 440.173776,244.310601 C439.764606,243.94911 439.505833,243.728459 439.490351,243.737849"
                    id="Fill-223"
                  />
                  <path
                    d="M439.479497,243.737856 L439.282411,243.847139 C439.267577,243.855175 439.490094,244.097847 439.860955,244.478731 C440.229697,244.861221 440.753142,245.386743 441.333805,245.963693 L481.06048,285.278234 C482.29174,286.493204 483.319556,287.462286 483.355583,287.434966 L483.588695,287.26622 C483.624722,287.238899 482.654125,286.232853 481.422865,285.019491 L441.643209,245.786912 C441.062546,245.211569 440.528506,244.695689 440.136452,244.324449 C439.744398,243.954815 439.496451,243.728214 439.479497,243.737856"
                    id="Fill-225"
                  />
                  <path
                    d="M442.01925,243.737765 L441.814527,243.844883 C441.796917,243.854335 442.030256,244.090626 442.415486,244.463966 C442.800716,244.837305 443.344441,245.349269 443.949802,245.913217 L451.973593,253.36111 C453.199725,254.500033 454.223336,255.408966 454.256356,255.390063 L454.472085,255.267191 C454.507306,255.249863 453.534325,254.311 452.308193,253.175228 L444.271194,245.739937 C443.665833,245.17914 443.1089,244.675052 442.703858,244.311164 C442.294414,243.950427 442.034659,243.729888 442.01925,243.737765"
                    id="Fill-227"
                  />
                  <path
                    d="M442.018548,243.737854 L441.814319,243.845335 C441.798947,243.853238 442.029528,244.088747 442.416025,244.46177 C442.802521,244.836373 443.344934,245.350069 443.951032,245.912764 L451.973036,253.360566 C453.200602,254.500181 454.22394,255.409028 454.25688,255.390061 L454.472089,255.268354 C454.507225,255.249387 453.534395,254.310509 452.306828,253.175635 L444.271648,245.740478 C443.665551,245.177783 443.109962,244.673571 442.701505,244.310032 C442.293048,243.949654 442.03392,243.72837 442.018548,243.737854"
                    id="Fill-229"
                  />
                  <path
                    d="M442.010326,243.737864 L441.814487,243.846717 C441.79764,243.856465 442.020855,244.098541 442.393581,244.480338 C442.764202,244.862136 443.284334,245.38853 443.869746,245.965288 L483.601942,285.280703 C484.829622,286.495957 485.855146,287.461011 485.89305,287.435016 L486.120477,287.266051 C486.158381,287.238431 485.187608,286.23276 483.957822,285.020755 L444.175086,245.789823 C443.59178,245.213065 443.056908,244.69642 442.667335,244.32437 C442.273551,243.953945 442.025066,243.728116 442.010326,243.737864"
                    id="Fill-231"
                  />
                  <path
                    d="M442.017621,243.737858 L441.81431,243.844481 C441.799007,243.852438 442.030738,244.089556 442.417686,244.461943 C442.802448,244.835921 443.346798,245.349941 443.954547,245.911704 L451.977702,253.361027 C453.20413,254.500466 454.227247,255.409153 454.260039,255.390057 L454.472095,255.267519 C454.507073,255.248422 453.536425,254.312682 452.30781,253.174834 L444.271538,245.741425 C443.663789,245.178071 443.108508,244.673598 442.699699,244.31076 C442.293076,243.949513 442.032924,243.728309 442.017621,243.737858"
                    id="Fill-233"
                  />
                  <path
                    d="M443.283073,241.795638 L443.08025,241.902613 C443.064983,241.910596 443.296158,242.146899 443.684357,242.520513 C444.070375,242.894127 444.611236,243.408246 445.219705,243.970263 L453.24321,251.418593 C454.471053,252.556998 455.493891,253.467083 455.524424,253.447923 L455.738151,253.324982 C455.770865,253.305822 454.798187,252.368594 453.572525,251.231786 L445.535935,243.799423 C444.929647,243.235808 444.373519,242.73127 443.963511,242.368832 C443.557865,242.007992 443.298339,241.787655 443.283073,241.795638"
                    id="Fill-235"
                  />
                  <path
                    d="M443.272978,241.795646 L443.080415,241.905698 C443.063671,241.913911 443.287629,242.157011 443.660196,242.53973 C444.030669,242.924091 444.553937,243.448071 445.137904,244.024613 L484.872766,283.339526 C486.101398,284.553386 487.12491,285.517574 487.160492,285.492936 L487.386544,285.320466 C487.422126,285.294185 486.450941,284.290574 485.222309,283.078358 L445.441399,243.850501 C444.857433,243.272316 444.321606,242.756549 443.928109,242.383686 C443.538798,242.012465 443.287629,241.787433 443.272978,241.795646"
                    id="Fill-237"
                  />
                  <path
                    d="M443.280055,241.795641 L443.080241,241.903354 C443.065037,241.911392 443.29743,242.147718 443.684027,242.520693 C444.070625,242.895277 444.613599,243.408118 445.22173,243.972405 L453.246884,251.419059 C454.474005,252.557279 455.496968,253.467211 455.529546,253.447919 L455.738048,253.325737 C455.772799,253.306445 454.801961,252.369183 453.572668,251.232572 L445.534483,243.798778 C444.928524,243.236099 444.370347,242.731296 443.96203,242.369574 C443.555886,242.007852 443.29743,241.787603 443.280055,241.795641"
                    id="Fill-239"
                  />
                  <path
                    d="M443.279807,241.795734 L443.080438,241.902206 C443.063102,241.910272 443.297143,242.145801 443.685045,242.520066 C444.070779,242.894331 444.612541,243.407333 445.221481,243.970344 L453.248224,251.418544 C454.474773,252.557471 455.495452,253.46571 455.527958,253.447965 L455.738162,253.323747 C455.770667,253.306002 454.797663,252.368726 453.571114,251.233024 L445.533536,243.799343 C444.926763,243.237945 444.369832,242.731397 443.962427,242.368424 C443.555022,242.007065 443.294976,241.786055 443.279807,241.795734"
                    id="Fill-241"
                  />
                  <path
                    d="M464.700884,224.31674 L464.600745,224.467056 C464.592571,224.479714 464.833722,224.674334 465.230191,224.979714 C465.624616,225.285093 466.176403,225.702814 466.787456,226.158509 L507.783165,256.682203 C509.027751,257.609417 510.051622,258.335682 510.067971,258.302454 L510.174241,258.092011 C510.19059,258.058783 509.193287,257.283468 507.948701,256.359419 L466.946861,225.921168 C466.333764,225.467055 465.775847,225.06041 465.369159,224.769271 C464.964516,224.479714 464.709059,224.305664 464.700884,224.31674"
                    id="Fill-243"
                  />
                  <path
                    d="M464.703162,224.316755 L464.600659,224.471755 C464.594509,224.483176 464.834366,224.683859 465.234127,224.99712 C465.629788,225.310382 466.183303,225.739485 466.79627,226.207745 L474.896043,232.371818 C476.128127,233.313234 477.140855,234.052335 477.157255,234.02623 L477.259758,233.856547 C477.276158,233.82881 476.288031,233.050551 475.055947,232.112398 L466.956174,225.96301 C466.341157,225.496381 465.781492,225.08033 465.373531,224.781753 C464.967619,224.484807 464.711362,224.305334 464.703162,224.316755"
                    id="Fill-245"
                  />
                  <path
                    d="M464.701149,224.316911 L464.600746,224.470976 C464.59255,224.482449 464.834337,224.682406 465.233901,224.997093 C465.629367,225.31014 466.18261,225.739556 466.795275,226.206669 L474.895158,232.372561 C476.126635,233.311704 477.138865,234.05089 477.155257,234.026305 L477.259758,233.854211 C477.276151,233.829626 476.286461,233.047826 475.054984,232.111961 L466.955101,225.96246 C466.340387,225.496986 465.778948,225.079042 465.373236,224.780746 C464.965476,224.484088 464.709345,224.303799 464.701149,224.316911"
                    id="Fill-247"
                  />
                  <path
                    d="M464.702845,223.34569 L464.600745,223.496588 C464.592577,223.507825 464.833534,223.703671 465.231726,224.008678 C465.627875,224.31529 466.179217,224.732667 466.789778,225.188572 L507.787179,255.711713 C509.030762,256.63797 510.051767,257.363564 510.070145,257.331458 L510.174287,257.117954 C510.188581,257.087453 509.192081,256.310489 507.95054,255.387442 L466.949055,224.950988 C466.336452,224.496689 465.776942,224.088943 465.370582,223.798384 C464.964222,223.507825 464.708971,223.334453 464.702845,223.34569"
                    id="Fill-249"
                  />
                  <path
                    d="M464.701068,223.345706 L464.600746,223.501189 C464.592556,223.512768 464.834148,223.712911 465.231342,224.027186 C465.628535,224.341461 466.183378,224.769867 466.795548,225.237972 L474.895023,231.402723 C476.129599,232.340585 477.14101,233.081613 477.157389,233.055147 L477.259759,232.884777 C477.276138,232.856658 476.287248,232.075933 475.054719,231.141378 L466.955244,224.991514 C466.33898,224.525064 465.780042,224.108236 465.372612,223.808848 C464.965181,223.512768 464.709257,223.334127 464.701068,223.345706"
                    id="Fill-251"
                  />
                  <path
                    d="M464.701019,223.345708 L464.600745,223.501911 C464.59256,223.513543 464.834035,223.712951 465.233082,224.027019 C465.630083,224.342749 466.18261,224.769815 466.79653,225.238424 L474.894123,231.403459 C476.128101,232.340677 477.141068,233.080149 477.157439,233.055223 L477.259759,232.882402 C477.27613,232.857476 476.28772,232.076461 475.055789,231.139243 L466.954102,224.992487 C466.340183,224.52554 465.77947,224.108444 465.372237,223.809332 C464.965004,223.513543 464.709204,223.334076 464.701019,223.345708"
                    id="Fill-253"
                  />
                  <path
                    d="M464.700754,223.345702 L464.600745,223.497199 C464.592581,223.508602 464.833419,223.704081 465.231414,224.010332 C465.627368,224.318212 466.180479,224.736864 466.792779,225.192983 L507.792393,255.715464 C509.035363,256.639105 510.055863,257.364007 510.07015,257.331428 L510.174241,257.1164 C510.190569,257.085449 509.196602,256.310048 507.951591,255.388036 L466.949936,224.951891 C466.335595,224.495773 465.776361,224.088524 465.370202,223.798563 C464.964043,223.508602 464.708918,223.334299 464.700754,223.345702"
                    id="Fill-255"
                  />
                  <path
                    d="M465.96688,221.403586 L465.866687,221.559567 C465.858508,221.572985 466.099789,221.772574 466.498515,222.086213 C466.895197,222.40153 467.449325,222.82922 468.062751,223.297164 L476.162014,229.462613 C477.394999,230.400178 478.407151,231.13983 478.423509,231.112995 L478.525747,230.941919 C478.54006,230.915083 477.552445,230.1335 476.319459,229.197613 L468.220196,223.050613 C467.606771,222.584347 467.044464,222.16672 466.637558,221.868175 C466.230653,221.571307 465.975059,221.391845 465.96688,221.403586"
                    id="Fill-257"
                  />
                  <path
                    d="M465.968788,221.40375 L465.866599,221.558775 C465.860468,221.572256 466.101634,221.771093 466.50017,222.084514 C466.896662,222.399621 467.450526,222.829311 468.063658,223.296073 L476.163142,229.460027 C477.395539,230.400292 478.407208,231.138348 478.423558,231.113072 L478.525747,230.939511 C478.540054,230.914235 477.55291,230.134052 476.320513,229.197158 L468.223073,223.050054 C467.607896,222.583292 467.045858,222.165397 466.639147,221.867141 C466.232435,221.570571 465.97492,221.390269 465.968788,221.40375"
                    id="Fill-259"
                  />
                  <path
                    d="M465.966658,221.403583 L465.866685,221.555688 C465.858524,221.567262 466.101316,221.764007 466.499168,222.069871 C466.894981,222.377389 467.449934,222.79568 468.062015,223.251996 L509.063268,253.775619 C510.303752,254.699826 511.323887,255.422327 511.340209,255.389261 L511.440182,255.174329 C511.456504,255.141263 510.462893,254.365855 509.220369,253.444955 L468.219115,223.012265 C467.604994,222.554295 467.04392,222.147578 466.637907,221.856593 C466.229853,221.567262 465.974819,221.39201 465.966658,221.403583"
                    id="Fill-261"
                  />
                  <path
                    d="M465.966798,221.403603 L465.866687,221.560122 C465.858514,221.572031 466.099599,221.772784 466.500046,222.085822 C466.896406,222.400561 467.452128,222.829287 468.065056,223.297143 L476.165926,229.462629 C477.397912,230.401743 478.411287,231.141805 478.427632,231.112883 L478.5257,230.939351 C478.542045,230.913832 477.555231,230.13464 476.321201,229.197227 L468.222375,223.050455 C467.607403,222.5826 467.045552,222.165783 466.638976,221.866355 C466.230357,221.57033 465.974971,221.391694 465.966798,221.403603"
                    id="Fill-263"
                  />
                  <path
                    d="M465.966663,219.46164 L465.866599,219.617167 C465.860473,219.62913 466.101443,219.830802 466.499657,220.143563 C466.89787,220.458034 467.451284,220.887013 468.065962,221.355301 L476.16501,227.519952 C477.39845,228.458237 478.4093,229.196559 478.425637,229.170923 L478.525701,228.996597 C478.542038,228.969251 477.555694,228.188202 476.322253,227.255044 L468.221164,221.107484 C467.608528,220.639196 467.046945,220.222181 466.638521,219.924801 C466.232139,219.627421 465.974832,219.447968 465.966663,219.46164"
                    id="Fill-265"
                  />
                  <path
                    d="M474.74902,199.069669 L474.728089,199.247083 C474.725996,199.260104 474.979265,199.413103 475.387427,199.645857 C475.795589,199.880238 476.360736,200.197629 476.984491,200.541063 L518.07487,223.157232 C519.301448,223.832706 520.297782,224.350298 520.297782,224.314489 L520.301968,224.076853 C520.304061,224.042672 519.309821,223.466485 518.083242,222.794266 L477.015888,200.25948 C476.392133,199.917674 475.826986,199.613304 475.414638,199.398454 C475.006476,199.181977 474.751113,199.05502 474.74902,199.069669"
                    id="Fill-267"
                  />
                  <path
                    d="M474.748924,199.069407 L474.728089,199.238556 C474.726005,199.250971 474.976026,199.395291 475.384394,199.618755 C475.790678,199.839115 476.353226,200.138619 476.972028,200.464503 L485.124798,204.741351 C486.362402,205.390017 487.368737,205.892811 487.37082,205.864878 L487.387488,205.681761 C487.389572,205.652277 486.391571,205.106032 485.153967,204.46047 L477.003281,200.19914 C476.382395,199.874807 475.819848,199.586167 475.41148,199.381325 C475.003112,199.176483 474.751008,199.056992 474.748924,199.069407"
                    id="Fill-269"
                  />
                  <path
                    d="M474.748938,199.069636 L474.728089,199.238267 C474.726004,199.250759 474.97619,199.395969 475.384827,199.617688 C475.789294,199.839408 476.352212,200.140759 476.971422,200.46553 L485.127479,204.742215 C486.36173,205.390197 487.366643,205.892969 487.370812,205.864864 L487.387491,205.680618 C487.387491,205.652513 486.388833,205.104461 485.152498,204.458039 L477.00478,200.19853 C476.383485,199.873759 475.820567,199.584899 475.41193,199.380355 C475.005378,199.175811 474.751023,199.055583 474.748938,199.069636"
                    id="Fill-271"
                  />
                  <path
                    d="M474.751167,197.127541 L474.728076,197.298157 C474.728076,197.312508 474.979981,197.459206 475.389328,197.685631 C475.796575,197.908867 476.363362,198.21502 476.984729,198.545091 L518.078906,220.289893 C519.304846,220.940468 520.295674,221.436371 520.297773,221.401291 L520.301971,221.171677 C520.301971,221.136597 519.311143,220.58329 518.087303,219.939094 L477.018316,198.272424 C476.392751,197.943947 475.828063,197.650551 475.416618,197.441666 C475.007271,197.234375 474.751167,197.11319 474.751167,197.127541"
                    id="Fill-273"
                  />
                  <path
                    d="M474.748972,197.127302 L474.728089,197.297937 C474.726001,197.310577 474.976599,197.455933 475.383822,197.678707 C475.788956,197.899902 476.352802,198.200094 476.970945,198.525565 L485.125837,202.800934 C486.364211,203.448717 487.366605,203.951144 487.368693,203.922705 L487.387488,203.73785 C487.389576,203.707831 486.389271,203.161165 485.152985,202.514962 L477.004358,198.255392 C476.382039,197.931501 475.820281,197.642368 475.41097,197.438554 C475.003747,197.234739 474.751061,197.114662 474.748972,197.127302"
                    id="Fill-275"
                  />
                  <path
                    d="M474.751067,197.127318 L474.728076,197.297438 C474.728076,197.311747 474.976791,197.454838 475.38435,197.679015 C475.789819,197.900011 476.352041,198.200503 476.972784,198.526433 L485.12814,202.80168 C486.365446,203.45036 487.368668,203.95277 487.370758,203.922561 L487.387478,203.736543 C487.391658,203.709514 486.390527,203.162588 485.15531,202.515498 L477.004135,198.254559 C476.383392,197.931809 475.82326,197.642447 475.413611,197.437349 C475.006052,197.233842 474.753157,197.114599 474.751067,197.127318"
                    id="Fill-277"
                  />
                  <path
                    d="M474.749146,195.185207 L474.728089,195.359079 C474.725983,195.373704 474.978669,195.519952 475.389282,195.745824 C475.79779,195.97007 476.364226,196.277191 476.987516,196.607061 L518.080447,218.350864 C519.303865,218.997605 520.29776,219.494847 520.29776,219.459098 L520.301971,219.226726 C520.301971,219.190977 519.310182,218.64011 518.086764,217.99337 L477.019102,196.330815 C476.393706,196.00257 475.829375,195.708449 475.416656,195.500452 C475.006043,195.29408 474.751252,195.172207 474.749146,195.185207"
                    id="Fill-279"
                  />
                  <path
                    d="M474.749027,195.185447 L474.728089,195.356011 C474.725995,195.370493 474.977257,195.513702 475.383463,195.737367 C475.789669,195.957812 476.352913,196.258713 476.972691,196.58375 L485.128219,200.857505 C486.365682,201.50758 487.368634,202.008008 487.370728,201.980653 L487.387478,201.79078 C487.391666,201.763426 486.392902,201.216333 485.157533,200.571087 L477.004099,196.311813 C476.384321,195.988385 475.821076,195.698748 475.412776,195.494393 C475.004477,195.290038 474.751121,195.170965 474.749027,195.185447"
                    id="Fill-281"
                  />
                  <path
                    d="M474.749045,195.185455 L474.728089,195.35711 C474.725993,195.370065 474.977463,195.51419 475.384006,195.737664 C475.790548,195.961139 476.352164,196.259106 476.974551,196.584602 L485.128453,200.861392 C486.364845,201.507525 487.366532,202.011154 487.370723,201.980385 L487.387488,201.792537 C487.389584,201.763388 486.392088,201.217656 485.155695,200.571522 L477.005985,196.310926 C476.383597,195.987049 475.821982,195.698799 475.413344,195.494757 C475.004706,195.290715 474.75114,195.17088 474.749045,195.185455"
                    id="Fill-283"
                  />
                  <path
                    d="M474.751327,195.185249 L474.728089,195.360845 C474.725977,195.375754 474.979482,195.521531 475.389315,195.74848 C475.797036,195.975429 476.36531,196.27858 476.990622,196.609892 L518.083802,218.352269 C519.306964,219.001641 520.299859,219.496953 520.299859,219.458852 L520.301971,219.225277 C520.301971,219.188833 519.313301,218.637197 518.090139,217.992795 L477.02231,196.33159 C476.396998,196.001934 475.830836,195.708723 475.418891,195.499996 C475.006945,195.292926 474.75344,195.171997 474.751327,195.185249"
                    id="Fill-285"
                  />
                  <path
                    d="M474.751166,194.214185 L474.728076,194.38792 C474.728076,194.401033 474.977864,194.545266 475.385081,194.768172 C475.790199,194.991079 476.352746,195.28938 476.974067,195.615544 L485.126804,199.888463 C486.363148,200.535874 487.368597,201.037414 487.370696,201.00955 L487.387488,200.817785 C487.389587,200.789922 486.390436,200.24249 485.156191,199.596718 L477.005553,195.340189 C476.384232,195.015664 475.823784,194.727197 475.414468,194.523959 C475.007251,194.319082 474.753265,194.201072 474.751166,194.214185"
                    id="Fill-287"
                  />
                  <path
                    d="M474.751202,194.214191 L474.728089,194.389019 C474.725988,194.402214 474.976024,194.545705 475.383646,194.768364 C475.789167,194.991022 476.352273,195.291199 476.974211,195.617765 L485.126648,199.889513 C486.36212,200.537698 487.366467,201.039092 487.370669,201.009404 L487.387478,200.818083 C487.39168,200.788395 486.391536,200.242469 485.156064,199.597583 L477.005729,195.342328 C476.38379,195.015762 475.822785,194.72878 475.413062,194.524264 C475.00544,194.319748 474.751202,194.200996 474.751202,194.214191"
                    id="Fill-289"
                  />
                </g>
                <path
                  d="M614.100072,467.494812 C614.100072,467.494812 614.226962,468.11464 614.357944,468.735932 C614.439808,469.339641 614.521672,469.946281 614.521672,469.946281 C614.572837,470.31847 615.129513,470.826934 615.761913,471.080433 L636.553333,479.397549 C637.173453,479.646652 637.609379,479.495725 637.527515,479.064923 C637.527515,479.064923 637.394486,478.363038 637.261457,477.664084 C637.081356,476.949011 636.905349,476.235404 636.905349,476.235404 C636.790739,475.797275 636.205411,475.253644 635.595524,475.02359 L615.084488,467.235452 C614.460274,466.999536 614.018208,467.115296 614.100072,467.494812"
                  id="Fill-291"
                  fill="#FFFFFF"
                />
                <path
                  d="M611.871125,460.757059 L612.431536,463.273125 C612.499959,463.654168 612.944704,464.144927 613.439952,464.373255 L616.672094,465.875185 C617.160826,466.102031 617.504567,465.968593 617.429628,465.571241 L616.823601,462.949906 C616.730742,462.549589 616.264818,462.054383 615.782604,461.843846 L612.596076,460.447184 C612.110603,460.233682 611.784782,460.373052 611.871125,460.757059"
                  id="Fill-293"
                  fill="#FFFFFF"
                />
                <path
                  d="M610.761434,452.904576 L611.446309,455.513218 C611.551799,455.916091 612.025694,456.414665 612.504457,456.626135 L615.644821,458.003004 C616.120338,458.211387 616.412465,458.04005 616.29886,457.620197 L615.563674,454.903506 C615.451692,454.488284 614.982666,453.997427 614.515264,453.804481 L611.425211,452.534119 C610.954562,452.341172 610.657567,452.504791 610.761434,452.904576"
                  id="Fill-295"
                  fill="#FFFFFF"
                />
                <path
                  d="M608.562379,447.358554 C608.562379,447.358554 608.637518,447.539823 608.753447,447.815146 C608.852201,448.083628 608.983157,448.442745 609.118407,448.801862 C609.384614,449.521806 609.65082,450.24346 609.65082,450.24346 C609.816126,450.688081 610.449439,451.213075 611.065578,451.416575 L631.183483,458.024325 C631.7803,458.222694 632.09803,457.967892 631.891935,457.458288 C631.891935,457.458288 631.55703,456.634029 631.226419,455.811481 C631.058967,455.401062 630.891514,454.990642 630.769145,454.684538 C630.627455,454.373303 630.535141,454.164674 630.535141,454.164674 C630.303284,453.65336 629.637768,453.094163 629.055978,452.916315 L609.309475,446.881442 C608.70407,446.696753 608.369165,446.908803 608.562379,447.358554"
                  id="Fill-297"
                  fill="#FFFFFF"
                />
                <path
                  d="M604.123582,439.368024 C604.123582,439.368024 604.536371,439.935801 604.951708,440.503577 C605.392526,441.076697 605.733968,441.633786 605.733968,441.633786 C605.955651,441.97846 606.712431,442.368556 607.420797,442.504822 L612.060849,443.387881 C612.764119,443.521476 613.141235,443.339787 612.901715,442.979082 C612.901715,442.979082 612.542436,442.401954 612.078686,441.806123 C611.640416,441.215636 611.202146,440.626484 611.202146,440.626484 C610.937146,440.265779 610.159982,439.875683 609.472001,439.755448 L604.918583,438.957889 C604.228054,438.837654 603.868774,439.020679 604.123582,439.368024"
                  id="Fill-299"
                  fill="#FFFFFF"
                />
                <path
                  d="M599.675483,432.645237 L601.493192,434.995214 C601.774987,435.358785 602.556907,435.750216 603.237279,435.867227 L607.70539,436.633373 C608.383223,436.750384 608.690406,436.538649 608.395917,436.161148 L606.484276,433.72202 C606.189787,433.350091 605.418022,432.964232 604.755421,432.861151 L600.381241,432.181371 C599.716102,432.07829 599.398764,432.284452 599.675483,432.645237"
                  id="Fill-301"
                  fill="#FFFFFF"
                />
                <path
                  d="M596.339317,424.869159 L597.868764,427.587029 C598.103003,428.006413 598.70927,428.435551 599.221054,428.547712 L615.808756,432.13361 C616.298887,432.239268 616.46817,431.940173 616.188657,431.465521 L614.381666,428.396538 C614.084438,427.921886 613.452582,427.465115 612.976229,427.374086 L596.776302,424.280721 C596.278297,424.184815 596.081457,424.448149 596.339317,424.869159"
                  id="Fill-303"
                  fill="#FFFFFF"
                />
                <path
                  d="M591.929501,418.089533 L593.076156,419.359277 C593.372312,419.677474 593.648218,419.994149 593.838061,420.230132 C594.035498,420.467638 594.169654,420.624453 594.169654,420.624453 C594.493654,421.014207 595.268215,421.393303 595.898495,421.473994 L600.021895,421.991636 C600.647113,422.070804 600.874925,421.805894 600.533207,421.40396 L600.188957,420.994415 C599.988989,420.750819 599.700427,420.423487 599.391615,420.09311 C598.794241,419.436923 598.196867,418.780737 598.196867,418.780737 C597.827305,418.375758 597.037556,417.998185 596.427526,417.932718 L592.405376,417.504903 C591.790283,417.439437 591.577658,417.701302 591.929501,418.089533"
                  id="Fill-305"
                  fill="#FFFFFF"
                />
                <path
                  d="M586.370835,411.38075 L588.800881,414.007704 C589.175513,414.412587 589.97034,414.790371 590.57532,414.84935 L594.526676,415.231916 C595.124062,415.290895 595.288597,414.999189 594.896246,414.578366 L592.364948,411.860551 C591.977659,411.442917 591.190426,411.071509 590.610758,411.025282 L586.763186,410.733575 C586.175925,410.687348 586.001265,410.977461 586.370835,411.38075"
                  id="Fill-307"
                  fill="#FFFFFF"
                />
                <path
                  d="M580.794809,403.426522 L582.839202,405.672197 C583.152946,406.018641 583.784481,406.325058 584.243963,406.355423 L599.198393,407.343686 C599.639658,407.372671 599.702406,407.080057 599.340083,406.692205 L596.992068,404.180141 C596.609503,403.79505 595.957727,403.466549 595.530631,403.449986 L581.003297,402.835773 C580.553935,402.817829 580.460824,403.081458 580.794809,403.426522"
                  id="Fill-309"
                  fill="#FFFFFF"
                />
                <path
                  d="M575.291996,396.855624 C575.291996,396.855624 576.005277,397.558171 576.718557,398.264231 C577.080292,398.617261 577.431838,398.970291 577.678939,399.233746 C577.928587,399.500714 578.099265,399.676351 578.099265,399.676351 C578.514496,400.11193 579.296557,400.475498 579.851897,400.489549 L583.464153,400.579124 C584.011851,400.593175 584.103558,400.240145 583.673043,399.790515 C583.673043,399.790515 583.49727,399.607853 583.234885,399.333859 C582.980142,399.061622 582.613312,398.696298 582.238839,398.332729 C581.500084,397.603837 580.758782,396.8767 580.758782,396.8767 C580.305339,396.428827 579.507994,396.068771 578.978128,396.068771 L575.472864,396.072284 C574.937903,396.07404 574.856385,396.423558 575.291996,396.855624"
                  id="Fill-311"
                  fill="#FFFFFF"
                />
                <path
                  d="M569.625367,389.148886 L571.485025,391.92693 C571.772848,392.355402 572.271742,392.694316 572.601139,392.685536 L574.751819,392.617051 C575.078018,392.606514 575.100404,392.239504 574.801388,391.796983 L572.872972,388.929382 C572.578753,388.488618 572.083058,388.153216 571.76965,388.176044 L569.687729,388.334087 C569.369524,388.358671 569.340742,388.723926 569.625367,389.148886"
                  id="Fill-313"
                  fill="#FFFFFF"
                />
                <path
                  d="M561.906635,383.280951 C561.906635,383.280951 562.545778,383.801233 563.129343,384.326919 L564.324263,385.380996 C564.691472,385.703975 565.302826,385.944521 565.685915,385.917493 L578.113474,385.030988 C578.478699,385.003961 578.435031,384.691792 578.018198,384.329622 C578.018198,384.329622 577.343327,383.744475 576.668455,383.159327 C576.007478,382.57418 575.288939,381.994438 575.288939,381.994438 C574.858212,381.636322 574.225024,381.376857 573.873694,381.411993 L561.884801,382.632289 C561.515606,382.670128 561.523546,382.960674 561.906635,383.280951"
                  id="Fill-315"
                  fill="#FFFFFF"
                />
                <path
                  d="M554.060644,375.944995 C554.060644,375.944995 554.585119,376.589319 555.107974,377.233643 C555.37183,377.555805 555.635685,377.877967 555.831554,378.120437 C556.032278,378.361211 556.156922,378.523987 556.156922,378.523987 C556.466103,378.924147 556.956583,379.202223 557.251195,379.146269 L559.177504,378.778326 C559.468878,378.722371 559.442979,378.344255 559.122467,377.930531 C559.122467,377.930531 558.991348,377.762667 558.785767,377.513416 C558.581805,377.262468 558.309856,376.930133 558.037906,376.597797 C557.495626,375.933126 556.953345,375.268454 556.953345,375.268454 C556.619884,374.859817 556.122928,374.585132 555.844504,374.652955 L553.991038,375.103982 C553.707758,375.173501 553.740133,375.549922 554.060644,375.944995"
                  id="Fill-317"
                  fill="#FFFFFF"
                />
                <path
                  d="M547.38929,370.453375 L549.57318,372.945636 C549.908785,373.32765 550.408101,373.577877 550.688045,373.50114 L552.506862,373.000686 C552.783531,372.925618 552.724596,372.543605 552.375894,372.148246 L550.116697,369.57758 C549.769632,369.182221 549.276865,368.933662 549.013292,369.022076 L547.268145,369.600935 C547.001298,369.689348 547.055322,370.071362 547.38929,370.453375"
                  id="Fill-319"
                  fill="#FFFFFF"
                />
                <path
                  d="M539.714867,362.224456 C539.714867,362.224456 539.901796,362.33935 540.181141,362.512969 C540.460485,362.685311 540.825942,362.917653 541.182998,363.152549 C541.901312,363.621063 542.621725,364.088301 542.621725,364.088301 C543.064895,364.376814 543.694994,364.550433 544.026847,364.47639 L554.749036,362.078923 C555.064086,362.008709 554.914962,361.692111 554.419284,361.371683 L552.80623,360.332525 C552.407167,360.070821 551.999703,359.812946 551.682553,359.621455 C551.373804,359.428688 551.165872,359.301027 551.165872,359.301027 C550.655491,358.984429 549.998088,358.792938 549.699841,358.873364 L539.462827,361.56062 C539.145677,361.6436 539.259095,361.941049 539.714867,362.224456"
                  id="Fill-321"
                  fill="#FFFFFF"
                />
                <path
                  d="M530.722616,357.197882 L533.130254,359.503326 C533.489404,359.864517 533.978248,360.064637 534.221007,359.950748 L535.805592,359.20396 C536.045025,359.091698 535.93861,358.699593 535.564496,358.327013 L533.078709,355.946727 C532.696281,355.580655 532.202449,355.385416 531.974654,355.509067 L530.469881,356.32907 C530.240423,356.454348 530.351827,356.843198 530.722616,357.197882"
                  id="Fill-323"
                  fill="#FFFFFF"
                />
                <path
                  d="M522.9443,351.690061 L525.441492,353.917948 C525.825675,354.259835 526.321069,354.431582 526.545176,354.299963 L528.012824,353.439626 C528.235246,353.311218 528.09202,352.919572 527.694356,352.564844 L525.116284,350.267937 C524.720306,349.914814 524.229966,349.741462 524.021024,349.882712 L522.634257,350.812068 C522.421946,350.954922 522.561802,351.348173 522.9443,351.690061"
                  id="Fill-325"
                  fill="#FFFFFF"
                />
                <path
                  d="M515.246077,345.250124 C515.246077,345.250124 516.004103,345.728844 516.725481,346.229456 C517.456503,346.724229 518.185596,347.220463 518.185596,347.220463 C518.635011,347.5255 519.188582,347.661235 519.421969,347.5255 L526.917358,343.123618 C527.137243,342.995181 526.909643,342.615709 526.406221,342.277102 C526.406221,342.277102 525.590331,341.725407 524.776369,341.175172 C523.968194,340.620558 523.129158,340.086378 523.129158,340.086378 C522.616093,339.753609 522.037447,339.595982 521.831063,339.734636 L514.808235,344.447394 C514.590278,344.593345 514.787018,344.952384 515.246077,345.250124"
                  id="Fill-327"
                  fill="#FFFFFF"
                />
                <path
                  d="M505.179544,340.665789 C505.179544,340.665789 505.861958,341.176575 506.540925,341.685784 C506.882132,341.941177 507.223339,342.19657 507.478383,342.387326 C507.733426,342.578083 507.897137,342.712085 507.897137,342.712085 C508.307274,343.032115 508.791512,343.159811 508.975902,342.995855 L510.183912,341.915953 C510.368302,341.753573 510.17185,341.353143 509.747926,341.020501 C509.747926,341.020501 509.580769,340.883346 509.313662,340.686283 C509.051726,340.489221 508.700179,340.225945 508.348633,339.96267 C507.64554,339.436119 506.942447,338.909568 506.942447,338.909568 C506.509907,338.584809 506.022222,338.461842 505.855065,338.635257 L504.731495,339.779796 C504.560891,339.956364 504.76079,340.352065 505.179544,340.665789"
                  id="Fill-329"
                  fill="#FFFFFF"
                />
                <path
                  d="M497.411557,334.021902 L500.228053,335.990897 C500.659881,336.292019 501.145906,336.391873 501.310245,336.210887 L502.385444,335.031363 C502.548035,334.853498 502.317261,334.455643 501.869699,334.143599 L498.964039,332.110636 C498.516477,331.798593 498.0322,331.697179 497.885344,331.884405 L496.901056,333.127898 C496.750703,333.319805 496.979729,333.71922 497.411557,334.021902"
                  id="Fill-331"
                  fill="#FFFFFF"
                />
                <path
                  d="M487.482644,329.528578 C487.482644,329.528578 487.683223,329.645812 487.980234,329.832101 C488.277245,330.018389 488.672617,330.264098 489.067989,330.511412 C489.858733,331.004435 490.651406,331.497458 490.651406,331.497458 C491.137425,331.800981 491.65623,331.881278 491.81245,331.678929 L496.819211,325.128308 C496.965788,324.937201 496.647562,324.508416 496.105613,324.169563 C496.105613,324.169563 495.226151,323.618726 494.346689,323.071101 C493.905029,322.79488 493.467227,322.520264 493.1355,322.314704 C492.805702,322.105932 492.581979,321.974245 492.581979,321.974245 C492.032316,321.646634 491.480723,321.542248 491.349575,321.744596 L486.840405,328.611588 C486.703471,328.825177 486.988911,329.236298 487.482644,329.528578"
                  id="Fill-333"
                  fill="#FFFFFF"
                />
                <path
                  d="M478.553349,324.101502 C478.553349,324.101502 479.317449,324.544626 480.079746,324.98775 C480.463598,325.204696 480.83844,325.437028 481.119571,325.609354 C481.402504,325.78168 481.591727,325.897077 481.591727,325.897077 C482.051268,326.178645 482.525226,326.235574 482.645969,326.024783 L483.429892,324.649252 C483.548832,324.443076 483.25869,324.038418 482.781128,323.747618 L482.296357,323.450663 C482.004413,323.272183 481.616957,323.033696 481.222292,322.807518 L479.649039,321.892036 C479.164268,321.610468 478.686706,321.558155 478.585787,321.775101 L477.895574,323.210638 C477.789249,323.429122 478.084797,323.829165 478.553349,324.101502"
                  id="Fill-335"
                  fill="#FFFFFF"
                />
                <path
                  d="M468.567206,319.714144 L471.71333,321.42287 C472.196223,321.68056 472.664483,321.717373 472.759599,321.494962 L473.390653,320.022451 C473.487597,319.796973 473.163839,319.392033 472.664483,319.123606 L469.421415,317.358127 C468.92023,317.086633 468.450141,317.052888 468.371488,317.284501 L467.837379,318.813765 C467.756896,319.048447 468.082484,319.451853 468.567206,319.714144"
                  id="Fill-337"
                  fill="#FFFFFF"
                />
                <path
                  d="M458.766232,314.107523 L462.708137,315.80151 C463.312848,316.061276 463.872432,316.070722 463.958174,315.823551 L466.699682,307.821193 C466.780912,307.586617 466.300302,307.161546 465.627899,306.868719 L461.252768,304.971642 C460.578109,304.677241 459.975654,304.64418 459.914732,304.889777 L457.782448,313.17709 C457.719269,313.430558 458.159264,313.843034 458.766232,314.107523"
                  id="Fill-339"
                  fill="#FFFFFF"
                />
                <path
                  d="M447.507029,309.780178 C447.507029,309.780178 447.718356,309.872517 448.036297,310.011782 C448.354239,310.15256 448.778796,310.334209 449.201448,310.535538 L450.884444,311.318144 C451.402289,311.55883 451.857307,311.548233 451.902999,311.295438 L452.190479,309.643941 C452.234268,309.395687 451.836365,308.991517 451.301385,308.741749 C451.301385,308.741749 450.433234,308.337579 449.563178,307.931895 C449.129102,307.724512 448.691219,307.535294 448.361854,307.389974 C448.034394,307.246168 447.815452,307.149288 447.815452,307.149288 C447.278568,306.91163 446.819743,306.928282 446.793089,307.185618 L446.612224,308.893123 C446.587474,309.153488 446.987281,309.551603 447.507029,309.780178"
                  id="Fill-341"
                  fill="#FFFFFF"
                />
                <path
                  d="M439.78534,304.271143 C439.78534,304.271143 440.660718,304.627348 441.534154,304.983553 C441.970872,305.160898 442.407591,305.338242 442.733674,305.47163 C443.059757,305.601986 443.279086,305.697479 443.279086,305.697479 C443.810912,305.929392 444.259276,305.899076 444.274804,305.632301 L444.377675,303.886138 C444.393203,303.620879 443.958426,303.213138 443.405249,302.973646 C443.405249,302.973646 443.182038,302.873606 442.844309,302.738703 C442.50658,302.599252 442.056275,302.415844 441.604029,302.230921 L439.800868,301.492742 C439.24381,301.265377 438.793505,301.30024 438.795446,301.573078 L438.807091,303.373809 C438.810973,303.649678 439.249633,304.051357 439.78534,304.271143"
                  id="Fill-343"
                  fill="#FFFFFF"
                />
                <path
                  d="M427.174336,303.193162 L430.169732,304.598009 C430.628917,304.813053 430.990998,304.750267 430.979477,304.459879 L430.58448,295.032489 C430.572959,294.756228 430.148337,294.333989 429.63484,294.087552 L426.285592,292.488067 C425.768804,292.24163 425.370515,292.271453 425.398494,292.557132 L426.287238,302.257643 C426.315217,302.557449 426.71186,302.976548 427.174336,303.193162"
                  id="Fill-345"
                  fill="#FFFFFF"
                />
                <path
                  d="M419.00389,297.710079 C419.00389,297.710079 419.209056,297.779229 419.520403,297.900994 C419.831751,298.022758 420.245681,298.182103 420.661411,298.341449 C421.489272,298.661644 422.317132,298.980335 422.317132,298.980335 C422.824647,299.175759 423.200783,299.096086 423.16119,298.804454 L422.884037,296.890802 C422.844443,296.602176 422.383721,296.202308 421.858209,295.997865 C421.858209,295.997865 421.003353,295.667147 420.148497,295.334927 C419.71837,295.169568 419.290042,295.002706 418.967896,294.877935 C418.64575,294.750158 418.433386,294.678002 418.433386,294.678002 C417.907875,294.487087 417.528139,294.574277 417.587529,294.870419 L417.974463,296.835181 C418.033853,297.135834 418.496376,297.528185 419.00389,297.710079"
                  id="Fill-347"
                  fill="#FFFFFF"
                />
                <path
                  d="M406.917058,295.592654 C406.917058,295.592654 407.715984,295.873907 408.513187,296.153647 C409.305226,296.422803 410.109317,296.737322 410.109317,296.737322 C410.600036,296.924824 410.940957,296.825024 410.873806,296.518066 L410.42441,294.505447 C410.357259,294.203025 409.890645,293.797779 409.382708,293.604229 C409.382708,293.604229 408.551068,293.276101 407.73148,292.994848 C406.906727,292.703011 406.081974,292.409662 406.081974,292.409662 C405.572315,292.228208 405.22795,292.335568 405.312319,292.647063 L405.871912,294.709582 C405.956281,295.024101 406.426339,295.420274 406.917058,295.592654"
                  id="Fill-349"
                  fill="#FFFFFF"
                />
                <path
                  d="M397.447251,294.444674 L401.116247,295.626759 C401.676324,295.808092 402.041848,295.660972 401.929832,295.298307 L398.313897,283.539042 C398.209742,283.193483 397.612327,282.741862 396.979538,282.529737 L392.852655,281.150923 C392.213971,280.938798 391.799317,281.053414 391.923124,281.407526 L396.181674,293.442211 C396.315306,293.811719 396.881279,294.26163 397.447251,294.444674"
                  id="Fill-351"
                  fill="#FFFFFF"
                />
                <path
                  d="M387.234277,289.040935 L391.996373,290.008755 C392.724337,290.156952 393.161621,290.007242 392.974575,289.674554 L391.751191,287.49696 C391.566673,287.167296 390.805849,286.774119 390.050082,286.619873 L385.121161,285.606686 C384.36792,285.46605 383.928109,285.623321 384.137904,285.959033 L385.533168,288.183507 C385.748018,288.523756 386.508841,288.907859 387.234277,289.040935"
                  id="Fill-353"
                  fill="#FFFFFF"
                />
                <path
                  d="M377.461104,286.936767 C377.461104,286.936767 378.601201,287.135669 379.738866,287.33457 C380.305267,287.429431 380.876531,287.535002 381.311664,287.623743 C381.744365,287.706364 382.031213,287.762974 382.031213,287.762974 C382.736176,287.900675 383.129983,287.729314 382.90634,287.382001 L381.447795,285.099221 C381.226582,284.754967 380.455984,284.357164 379.721849,284.213343 C379.721849,284.213343 379.425279,284.153672 378.977991,284.066461 C378.525842,283.973131 377.935132,283.86297 377.346852,283.761989 C376.167861,283.552377 374.984008,283.341235 374.984008,283.341235 C374.254736,283.212714 373.86336,283.393255 374.111312,283.745159 L375.73759,286.070779 C375.987974,286.425742 376.758572,286.814366 377.461104,286.936767"
                  id="Fill-355"
                  fill="#FFFFFF"
                />
                <path
                  d="M367.881617,283.653682 L372.114602,284.396971 C372.759778,284.510953 373.08349,284.295833 372.838458,283.918569 L364.799609,271.624593 C364.563569,271.261778 363.776769,270.855618 363.041673,270.717555 L358.242192,269.813728 C357.498104,269.67406 357.1092,269.861889 357.369968,270.232731 L366.204609,282.749855 C366.476617,283.13354 367.227449,283.5397 367.881617,283.653682"
                  id="Fill-357"
                  fill="#FFFFFF"
                />
                <path
                  d="M358.96962,281.530396 C358.96962,281.530396 359.230425,281.561309 359.632874,281.623134 C360.033075,281.681868 360.565927,281.760696 361.09878,281.839523 C362.162235,281.995632 363.221194,282.150196 363.221194,282.150196 C363.870959,282.246025 364.165489,282.018817 363.877704,281.644773 L361.984618,279.193396 C361.699081,278.822443 360.921162,278.439126 360.244418,278.33866 C360.244418,278.33866 359.144989,278.173277 358.041063,278.006348 C357.487976,277.924429 356.934889,277.840965 356.51895,277.777594 C356.100762,277.712677 355.830964,277.678673 355.830964,277.678673 C355.160964,277.593664 354.868682,277.830146 355.181199,278.207281 L357.236164,280.698844 C357.550929,281.07907 358.3266,281.451569 358.96962,281.530396"
                  id="Fill-359"
                  fill="#FFFFFF"
                />
                <path
                  d="M345.827227,280.57346 C345.827227,280.57346 346.839826,280.67905 347.850252,280.78464 C348.845467,280.877622 349.888488,281.028916 349.888488,281.028916 C350.518646,281.110866 350.770709,280.860287 350.451284,280.46787 L348.352206,277.900613 C348.034953,277.511349 347.246169,277.125236 346.589935,277.036981 C346.589935,277.036981 345.505629,276.876232 344.469127,276.77537 C343.419588,276.660324 342.367875,276.545279 342.367875,276.545279 C341.71816,276.47436 341.46827,276.735971 341.811598,277.13154 L344.071475,279.735043 C344.419149,280.133764 345.203587,280.508845 345.827227,280.57346"
                  id="Fill-361"
                  fill="#FFFFFF"
                />
                <path
                  d="M334.865925,280.703949 L338.804338,281.039075 C339.404719,281.088601 339.603437,280.789794 339.248282,280.368823 L327.602162,266.602244 C327.257578,266.192829 326.418313,265.804875 325.727029,265.733888 L321.207261,265.268344 C320.507521,265.195705 320.239041,265.473051 320.611108,265.887419 L333.071124,279.838894 C333.453761,280.263167 334.257088,280.652772 334.865925,280.703949"
                  id="Fill-363"
                  fill="#FFFFFF"
                />
                <path
                  d="M325.084078,278.608398 C325.084078,278.608398 325.312563,278.613263 325.656302,278.622992 C325.993976,278.624613 326.463079,278.648935 326.938248,278.678122 C327.878476,278.733253 328.816682,278.786763 328.816682,278.786763 C329.390929,278.819193 329.548644,278.504622 329.168509,278.081411 L326.669322,275.315135 C326.291209,274.895167 325.498587,274.523844 324.898054,274.48655 C324.898054,274.48655 323.92143,274.424933 322.940762,274.364937 C322.445373,274.329264 321.958072,274.30332 321.604223,274.296834 C321.24633,274.285484 321.007734,274.278998 321.007734,274.278998 C320.417311,274.261161 320.265662,274.588704 320.670061,275.013537 L323.326963,277.812242 C323.733385,278.237075 324.519941,278.595426 325.084078,278.608398"
                  id="Fill-365"
                  fill="#FFFFFF"
                />
                <path
                  d="M315.895983,278.789009 L319.868571,278.757477 C320.496054,278.772413 320.630831,278.428883 320.169056,277.989097 L317.139902,275.104768 C316.680337,274.668301 315.778882,274.298218 315.122676,274.278303 L310.973332,274.284941 C310.330383,274.284941 310.204444,274.643408 310.690523,275.084853 L313.896432,277.995736 C314.38693,278.43884 315.281756,278.793988 315.895983,278.789009"
                  id="Fill-367"
                  fill="#FFFFFF"
                />
                <path
                  d="M303.896412,279.91553 L307.677552,279.757875 C308.253403,279.732396 308.325384,279.366128 307.840569,278.937753 L291.833177,264.868277 C291.356829,264.449457 290.425305,264.118223 289.749951,264.12937 L285.340032,264.207401 C284.656208,264.220141 284.510129,264.572077 285.016115,264.995674 L301.906338,279.178216 C302.418676,279.609776 303.312092,279.939417 303.896412,279.91553"
                  id="Fill-369"
                  fill="#FFFFFF"
                />
                <path
                  d="M296.276487,278.780581 C296.276487,278.780581 296.496707,278.754899 296.829113,278.717132 C297.151132,278.674833 297.601958,278.631023 298.069405,278.60232 C298.987677,278.53434 299.903873,278.466359 299.903873,278.466359 C300.464809,278.42406 300.495972,278.056964 299.974509,277.646058 L296.54449,274.951 C296.025105,274.541605 295.127607,274.24249 294.539664,274.281768 C294.539664,274.281768 293.581917,274.346727 292.617939,274.413197 C292.129717,274.44039 291.658115,274.481178 291.317398,274.523477 C290.970449,274.559734 290.737765,274.583905 290.737765,274.583905 C290.168519,274.644332 290.147743,275.026535 290.694136,275.43744 L294.296591,278.146094 C294.847139,278.55851 295.732172,278.842519 296.276487,278.780581"
                  id="Fill-371"
                  fill="#FFFFFF"
                />
                <path
                  d="M284.279473,281.030652 L287.662529,280.525012 C288.206416,280.466449 288.196269,280.102217 287.642235,279.712274 L284.001442,277.144079 C283.449438,276.754137 282.540254,276.484176 281.969985,276.541311 L278.414427,277.039809 C277.862423,277.116941 277.886776,277.496885 278.465163,277.886828 L282.278458,280.462164 C282.858874,280.853535 283.755881,281.107784 284.279473,281.030652"
                  id="Fill-373"
                  fill="#FFFFFF"
                />
                <path
                  d="M275.492795,285.528601 L278.799201,284.762801 C279.302438,284.646564 279.225639,284.171358 278.631456,283.70128 L258.894071,268.175039 C258.301909,267.70838 257.335857,267.422915 256.731569,267.537443 L252.790559,268.289567 C252.178187,268.407514 252.18425,268.88101 252.804706,269.34767 L273.435386,284.892714 C274.059885,285.361082 274.981475,285.646548 275.492795,285.528601"
                  id="Fill-375"
                  fill="#FFFFFF"
                />
                <path
                  d="M265.761967,285.514235 C265.761967,285.514235 266.466946,285.293647 267.258602,285.125894 C268.029071,284.944932 268.795687,284.766612 268.795687,284.766612 C269.263746,284.656979 269.148176,284.273921 268.53758,283.910677 L264.517661,281.529114 C263.907064,281.167191 263.011395,280.963774 262.514443,281.074729 C262.514443,281.074729 261.707377,281.25569 260.898385,281.436652 C260.064353,281.607047 259.316999,281.828956 259.316999,281.828956 C258.845087,281.961045 258.977993,282.358632 259.613629,282.719235 L263.799199,285.095514 C264.438688,285.456116 265.317022,285.643683 265.761967,285.514235"
                  id="Fill-377"
                  fill="#FFFFFF"
                />
                <path
                  d="M259.359444,288.87318 C259.359444,288.87318 260.047354,288.581407 260.735265,288.291211 C261.076378,288.146113 261.419385,288.001016 261.67522,287.892192 C261.946215,287.795986 262.128142,287.729746 262.128142,287.729746 C262.577274,287.575185 262.419983,287.098885 261.775659,286.669901 L257.542071,283.843647 C256.897747,283.413085 255.991903,283.192284 255.51624,283.351576 C255.51624,283.351576 255.324838,283.417816 255.036787,283.5156 C254.765792,283.626 254.403833,283.772675 254.041875,283.91935 C253.316063,284.214277 252.584565,284.509205 252.584565,284.509205 C252.133539,284.692154 252.311675,285.187379 252.980635,285.614787 L257.379095,288.425269 C258.048055,288.8511 258.934948,289.051398 259.359444,288.87318"
                  id="Fill-379"
                  fill="#FFFFFF"
                />
                <path
                  d="M251.540527,292.23091 L254.358551,290.834519 C254.786323,290.620837 254.538986,290.087458 253.80711,289.640216 L229.363285,274.780163 C228.625328,274.331264 227.599486,274.149054 227.070346,274.375988 L223.611678,275.860171 C223.074429,276.090418 223.262973,276.638705 224.03134,277.084291 L249.373284,291.821766 C250.133542,292.264039 251.104646,292.446249 251.540527,292.23091"
                  id="Fill-381"
                  fill="#FFFFFF"
                />
                <path
                  d="M245.840537,294.455987 L248.784791,293.039631 C249.233651,292.823099 248.904783,292.330711 248.053727,291.937691 L242.438536,289.355621 C241.585258,288.961117 240.505328,288.821706 240.027581,289.044171 L236.898895,290.494638 C236.445591,290.7349 236.812233,291.251017 237.692176,291.638105 L243.494023,294.186064 C244.376188,294.574635 245.418343,294.690317 245.840537,294.455987"
                  id="Fill-383"
                  fill="#FFFFFF"
                />
                <path
                  d="M238.398206,300.067523 C238.398206,300.067523 239.017861,299.652258 239.637516,299.236993 C240.318915,298.851799 241.000315,298.468037 241.000315,298.468037 C241.419298,298.23463 241.035597,297.744904 240.144706,297.375461 L234.25909,294.94115 C233.363788,294.571708 232.274431,294.464312 231.82678,294.706311 C231.82678,294.706311 231.099072,295.100097 230.373569,295.496746 C229.712016,295.920603 229.046053,296.348755 229.046053,296.348755 C228.63589,296.610801 229.052668,297.120575 229.976637,297.484289 L236.038667,299.875642 C236.960431,300.237925 238.016711,300.323842 238.398206,300.067523"
                  id="Fill-385"
                  fill="#FFFFFF"
                />
                <path
                  d="M487.94149,450.717133 C486.607716,449.385228 484.973595,448.31 483.45408,447.630745 C482.691358,447.292682 481.954325,447.051656 481.286449,446.934273 C480.598814,446.798108 479.964531,446.769937 479.436949,446.89358 C478.399569,447.156518 477.868035,447.871771 477.873963,448.907871 C477.887794,449.950231 478.429208,451.302482 479.56341,452.706382 C480.701565,454.113412 482.240839,455.296631 483.86508,456.058838 C485.481417,456.822609 487.182721,457.173193 488.421649,456.83513 C489.046053,456.677054 489.518308,456.392205 489.808774,455.999364 C490.085409,455.587741 490.196063,455.083777 490.142712,454.523469 C490.039962,453.401289 489.27724,452.050603 487.94149,450.717133"
                  id="Fill-387"
                  fill="#FFFFFF"
                />
                <path
                  d="M507.922342,419.086493 C506.256405,418.589989 504.838845,418.515045 503.87765,418.752368 C502.865972,418.978761 502.334892,419.526788 502.454031,420.366785 C502.522688,421.19429 503.346569,422.21384 504.46729,423.178743 C505.608205,424.146769 507.175195,425.103865 508.887576,425.765869 C510.593899,426.427874 512.120502,426.651145 513.200837,426.438803 C514.297326,426.237392 514.820329,425.55509 514.703209,424.562083 C514.537625,423.553462 513.657203,422.402761 512.445612,421.420683 C511.187578,420.41987 509.582221,419.579873 507.922342,419.086493"
                  id="Fill-389"
                  fill="#FFFFFF"
                />
                <path
                  d="M509.648181,424.261009 C509.648181,424.261009 509.722245,424.898799 509.853443,426.017758 C509.906346,426.57643 509.912694,427.231981 509.9529,427.998944 C509.98041,428.765907 509.912694,429.595841 509.883069,430.519426 C509.709548,432.332688 509.345577,434.401065 508.623985,436.48236 C507.864302,438.570114 506.730068,440.662711 505.240328,442.572852 C503.725195,444.49914 501.89053,446.268806 499.80828,447.692935 C497.700636,449.131596 495.497768,450.329672 493.383776,451.183827 C492.357464,451.645619 491.293062,451.963707 490.408529,452.3044 C489.481674,452.60957 488.626766,452.832393 487.943263,453.040684 C487.266109,453.255434 486.673599,453.363616 486.288467,453.458881 C485.896987,453.549302 485.689608,453.596127 485.689608,453.596127 L486.73285,454.708626 C486.73285,454.708626 486.94446,454.660187 487.342289,454.568151 C487.735885,454.469657 488.338975,454.358246 489.028827,454.137037 C489.725026,453.923902 490.594746,453.694621 491.536414,453.379762 C492.437876,453.030996 493.521323,452.704835 494.566681,452.230125 C496.718762,451.353366 498.957604,450.129455 501.099105,448.653657 C503.215213,447.19562 505.077388,445.388817 506.611566,443.417319 C508.122467,441.466811 509.269397,439.329003 510.037545,437.197654 C510.765486,435.072763 511.12734,432.964019 511.298745,431.112006 C511.326254,430.169045 511.391854,429.324579 511.362228,428.543084 C511.31779,427.759974 511.311441,427.091506 511.254307,426.521531 C511.11676,425.379968 511.04058,424.730875 511.04058,424.730875 L509.648181,424.261009 Z"
                  id="Fill-391"
                  fill="#FFFFFF"
                />
                <path
                  d="M506.045848,413.197904 C504.426831,412.855239 503.128738,412.944559 502.320259,413.322953 C501.491207,413.702971 501.104454,414.360694 501.443892,415.278258 C501.707213,416.181206 502.665868,417.196211 503.937218,418.126768 C505.194167,419.052452 506.831698,419.913176 508.528888,420.432858 C510.221963,420.949293 511.64966,421.011005 512.573343,420.645603 C513.480568,420.281826 513.813834,419.476318 513.470282,418.397977 C513.050613,417.303396 512.022013,416.153598 510.674547,415.214922 C509.302395,414.268125 507.658692,413.54057 506.045848,413.197904"
                  id="Fill-393"
                  fill="#FFFFFF"
                />
                <path
                  d="M463.942911,370.85031 C463.311511,371.496933 463.220481,372.438109 463.534244,373.396714 C463.849944,374.369263 464.541386,375.381899 465.639557,376.220243 C466.704803,377.084731 467.990845,377.633751 469.230404,377.882988 C470.452532,378.133969 471.655291,378.067738 472.482309,377.574491 C473.305454,377.082988 473.578544,376.242901 473.305454,375.23898 C473.026553,374.249002 472.180167,373.110876 470.92124,372.094754 C469.62745,371.104776 468.184526,370.432009 466.919789,370.214144 C465.643431,369.998022 464.570438,370.207172 463.942911,370.85031"
                  id="Fill-395"
                  fill="#FFFFFF"
                />
                <path
                  d="M470.058219,375.068405 C470.058219,375.068405 470.889997,375.671391 472.348176,376.724961 C473.794032,377.788469 475.829322,379.330722 478.164462,381.232448 C480.468796,383.147426 483.138701,385.410281 485.716187,387.916649 C488.326533,390.426331 490.92661,393.153021 493.298718,395.914499 C495.654396,398.690886 497.771836,401.493778 499.540135,404.121075 C501.351563,406.771564 502.686516,409.224922 503.781177,411.325435 C504.832709,413.430917 505.563852,415.168644 506.023897,416.377929 C506.465459,417.583901 506.718073,418.276342 506.718073,418.276342 L508.020165,418.622562 C508.020165,418.622562 507.76139,417.916869 507.30956,416.686048 C506.839245,415.456884 506.091672,413.686026 505.015495,411.540787 C503.900296,409.40383 502.534537,406.902432 500.686141,404.205559 C498.882928,401.531879 496.724412,398.677634 494.325605,395.853207 C491.910367,393.045345 489.260999,390.268958 486.605471,387.717863 C483.978694,385.166767 481.263606,382.862499 478.914089,380.914389 C476.537874,378.979533 474.46767,377.410775 472.997168,376.329044 C471.51229,375.255596 470.664082,374.64267 470.664082,374.64267 L470.058219,375.068405 Z"
                  id="Fill-397"
                  fill="#FFFFFF"
                />
                <path
                  d="M456.928118,366.68828 C456.490915,367.458862 456.61443,368.47658 457.108489,369.459974 C457.614311,370.441651 458.455388,371.443923 459.641521,372.19391 C460.808049,372.962776 462.084367,373.398696 463.276382,373.489656 C464.44291,373.596061 465.519253,373.371236 466.164274,372.737952 C466.805374,372.108099 466.872033,371.177909 466.407382,370.144745 C465.932929,369.137324 464.929127,368.020066 463.554781,367.113902 C462.162789,366.226617 460.711982,365.686008 459.504282,365.629373 C458.292662,365.560724 457.3614,365.922847 456.928118,366.68828"
                  id="Fill-399"
                  fill="#FFFFFF"
                />
                <path
                  d="M390.787689,347.918597 C391.804957,349.01662 393.288743,350.030412 394.802766,350.776466 C396.323268,351.521016 397.85457,351.985795 399.191489,352.079052 C399.85023,352.11816 400.383701,352.03844 400.809183,351.877497 C401.241144,351.730091 401.552156,351.489429 401.742219,351.173559 C402.115865,350.546332 402.005715,349.625798 401.247623,348.554849 C400.489532,347.488413 399.200128,346.468605 397.655868,345.67141 C396.884818,345.274316 396.053293,344.932876 395.213129,344.67266 C394.381604,344.424477 393.550079,344.26955 392.76391,344.216905 C391.172134,344.09507 390.154866,344.492163 389.807137,345.172035 C389.452929,345.851907 389.77474,346.822078 390.787689,347.918597"
                  id="Fill-401"
                  fill="#FFFFFF"
                />
                <path
                  d="M397.038373,347.323002 C397.038373,347.323002 397.273845,347.338392 397.713532,347.366092 C398.157387,347.399949 398.786702,347.423032 399.632735,347.515368 C400.472516,347.601548 401.476919,347.683111 402.650113,347.816997 C403.839977,347.978584 405.146535,348.107854 406.623966,348.344848 C409.535069,348.761897 413.006721,349.415939 416.753437,350.254653 C420.475148,351.087211 424.505265,352.195237 428.522879,353.452538 C432.519654,354.706761 436.51643,356.136422 440.223554,357.606094 C443.914007,359.085001 447.312725,360.599302 450.192571,361.9474 C451.615823,362.644533 452.930716,363.266258 454.074736,363.852588 C455.214588,364.441996 456.214824,364.945224 457.025431,365.376123 C458.638312,366.248693 459.559362,366.748844 459.559362,366.748844 L460.009468,366.25331 C460.009468,366.25331 459.073831,365.747004 457.431777,364.859045 C456.608666,364.418912 455.589676,363.90645 454.43107,363.307809 C453.266212,362.712245 451.93048,362.078208 450.480138,361.368764 C447.552365,359.996044 444.093216,358.454042 440.338164,356.948974 C436.568525,355.4516 432.5009,353.994239 428.43119,352.715393 C424.34481,351.433469 420.24176,350.303899 416.449199,349.454412 C412.633716,348.597232 409.097466,347.929338 406.132184,347.499979 C404.627662,347.258367 403.296098,347.124481 402.085396,346.959816 C400.889281,346.822852 399.864039,346.736672 399.009671,346.648953 C398.146968,346.555079 397.507234,346.530456 397.055044,346.495061 C396.604938,346.465821 396.367382,346.450432 396.367382,346.450432 L397.038373,347.323002 Z"
                  id="Fill-403"
                  fill="#FFFFFF"
                />
                <g id="Group-429" transform="translate(0.000000, 210.000000)">
                  <g id="Group-11" transform="translate(553.520654, 351.206353)">
                    <path
                      d="M109.236672,2.56180462 C109.236672,2.56180462 108.523361,3.91692518 107.263596,6.31321402 C106.687941,7.57062495 105.690975,8.87608979 104.671065,10.4939051 C104.147554,11.2996092 103.584414,12.1597744 102.992074,13.0727989 C102.693818,13.5325147 102.387219,14.0034431 102.072278,14.4855841 C101.748994,14.9645215 101.356882,15.403414 100.987712,15.8791478 C99.4526336,17.7596579 97.8654127,19.9060664 96.0070503,22.0620856 C93.9839172,24.1203952 91.9294986,26.4189744 89.6018527,28.6678979 C88.3650301,29.7475093 87.1010934,30.8511477 85.8121282,31.978813 C84.4918775,33.093664 83.261312,34.3446677 81.7491764,35.3521982 C80.2850121,36.4270043 78.7999907,37.5162265 77.2982837,38.6198648 C76.5390874,39.1724849 75.7778053,39.7299104 75.0144376,40.2889377 L72.536621,41.804238 C70.8743148,42.8293883 69.1994943,43.8609458 67.5184168,44.8973087 C67.0929331,45.1535962 66.6841351,45.4291054 66.2440515,45.6709768 L64.8904295,46.3613514 L62.179014,47.7501097 C60.3623657,48.6839576 58.5498887,49.6178055 56.7436689,50.5468479 C54.8269068,51.3573574 52.9184874,52.1646632 51.0267537,52.9639601 C49.1058202,53.7440354 47.2912575,54.633033 45.3494669,55.3057879 C43.3951621,55.9785427 41.4679714,56.6416868 39.5824948,57.2920166 C37.6699041,57.9215229 35.8720271,58.6519425 33.9886362,59.1629159 C32.0969025,59.6802964 30.2573114,60.1848626 28.4823772,60.6686054 C26.7011858,61.161959 24.9846512,61.636091 23.343202,62.0893996 C21.6808958,62.5202831 20.0185896,62.8054031 18.4918541,63.1449841 C15.4008405,63.7985174 12.6852536,64.3735627 10.4326931,64.8508983 C8.1425899,65.288189 6.26337042,65.5028298 5.0098622,65.7142671 C3.74383976,65.9048809 3.0680716,66.007396 3.0680716,66.007396 L32.2616731,121.740333 C32.2616731,121.740333 33.066755,121.554525 34.5747191,121.205333 C36.0639119,120.836919 38.2935297,120.40123 41.0070308,119.657996 C43.6704751,118.865107 46.8803738,117.913639 50.524099,116.829222 C52.3178046,116.271797 54.2658523,115.759222 56.2159858,115.073652 C58.1369193,114.364056 60.1433667,113.61922 62.2248995,112.848756 C64.287661,112.078291 66.4255078,111.280596 68.6196686,110.460476 C70.7992294,109.648365 72.8807622,108.58317 75.0874373,107.618888 C77.2565696,106.630579 79.4674161,105.623048 81.7095481,104.5995 C83.9266516,103.577553 86.0019273,102.310531 88.1856596,101.155635 C90.3297635,99.9751106 92.4884673,98.7881788 94.6575997,97.5948398 C96.6869898,96.2669498 98.7268085,94.9342544 100.762456,93.6031608 C101.771937,92.9384149 102.781417,92.2752708 103.788813,91.6121266 L105.29052,90.6222159 C105.778574,90.2762277 106.235344,89.8966017 106.706713,89.5377991 C108.565075,88.0881725 110.413009,86.6433513 112.246343,85.214548 L114.957759,83.0857593 C115.794126,82.3184984 116.62215,81.5544411 117.448089,80.7983927 C119.077024,79.2814906 120.683017,77.7838101 122.26398,76.3117583 C123.884572,74.9069821 125.202738,73.2507236 126.608502,71.7402287 C127.974638,70.2169194 129.31366,68.7256461 130.619311,67.2696123 C133.061671,64.2710476 135.193261,61.240447 137.270622,58.4933646 C139.17487,55.6613869 140.774605,52.8726577 142.311769,50.404288 C142.678853,49.7811888 143.073051,49.1997363 143.394249,48.5830444 C143.700848,47.9599452 144.003275,47.352864 144.297359,46.7634026 C144.877185,45.5860815 145.425725,44.4776377 145.936723,43.4412749 C146.923261,41.3621419 147.888942,39.6546259 148.427054,38.0656429 C149.605477,35.0126172 150.272902,33.2890832 150.272902,33.2890832 L109.236672,2.56180462 Z"
                      id="Fill-405"
                      fillOpacity="0.1"
                      fill="#0367FD"
                    />
                    <path
                      d="M110.340635,4.71574152 L108.893156,7.50126712 C108.484358,8.39987544 107.877419,9.32090891 107.23085,10.2996071 C106.922166,10.7641283 106.600968,11.2526765 106.273512,11.7796678 L103.687239,15.7953738 C103.470326,16.1157333 103.226298,16.4216766 102.978099,16.7324253 L102.573473,17.2417968 C102.00199,17.9497913 101.422164,18.694627 100.823567,19.4634897 C99.8203432,20.7513348 98.7670626,22.1032518 97.5782112,23.4968155 C96.8127578,24.2848998 96.0410473,25.1066218 95.2526511,25.9475654 C93.9636859,27.3203058 92.6288352,28.7427018 91.1625852,30.1747086 L87.3749464,33.5096507 C86.9807483,33.84763 86.5928073,34.19522 86.2048663,34.5460136 C85.2954993,35.3677357 84.3506753,36.2198919 83.2869661,36.9374971 L76.6293984,41.8598203 L68.5973515,46.8574281 C68.3136958,47.0368294 68.0258686,47.2178325 67.698413,47.4004374 L58.1479735,52.3451858 L52.4206298,54.7927322 C51.7281761,55.0762503 51.0482365,55.3741846 50.374554,55.6737207 C49.1940455,56.192703 47.9655657,56.7325088 46.6891147,57.1762066 L40.9117141,59.1928695 C40.2255174,59.4187229 39.5560064,59.6621961 38.8927525,59.8976603 C37.7205867,60.3221366 36.5025355,60.7594273 35.2552844,61.1022119 L24.5931645,64.073546 C23.5127698,64.3538606 22.4365464,64.5765104 21.3936943,64.7943548 C20.8117829,64.911286 20.2444713,65.0282172 19.6750741,65.1579628 L11.5846275,66.8943112 C10.0474635,67.1938473 8.6896701,67.3940719 7.57590407,67.5558535 C7.02527816,67.6359433 6.53722338,67.7080242 6.0971398,67.7833087 L6.05959712,67.7881141 L32.9860382,118.983159 L33.3343508,118.903069 C33.8453483,118.776527 34.439774,118.64518 35.1155422,118.494611 C36.3940789,118.211093 37.9562713,117.865105 39.69992,117.394176 L49.1982169,114.607049 C49.8260138,114.414833 50.4746678,114.225821 51.1358361,114.035207 C52.3413731,113.684414 53.5927956,113.325611 54.8233611,112.897931 L67.2249582,108.336012 C68.6077801,107.826641 69.9468021,107.214754 71.3567382,106.56923 C72.1075917,106.226445 72.8647023,105.880457 73.6218129,105.552088 L80.241838,102.566338 C81.6538598,101.924017 82.9949676,101.183987 84.4049036,100.405514 C85.1557571,99.9922499 85.9086963,99.5789861 86.6595498,99.184944 L93.0772616,95.6930258 L103.70601,88.7892792 C104.010523,88.5762401 104.300436,88.3487849 104.592434,88.1213297 L113.316935,81.3713556 L120.662785,74.626187 C121.77238,73.6715158 122.767261,72.563072 123.722513,71.4994785 C124.135483,71.0381609 124.548452,70.5800469 124.959336,70.144358 L128.965974,65.7249991 C130.619937,63.7115398 132.136244,61.6772572 133.58998,59.7294716 C134.282434,58.8020309 134.962373,57.8890064 135.613113,57.038452 C136.902078,55.1403222 138.04713,53.2694229 139.146296,51.4770116 C139.667722,50.6248554 140.174548,49.7999298 140.664688,49.0166509 L141.065144,48.3663212 C141.302914,47.9898988 141.534427,47.6182818 141.730483,47.245063 L144.289642,42.1337277 C144.598326,41.4914069 144.902839,40.8859275 145.196924,40.3092805 C145.847663,39.0134264 146.410803,37.9033809 146.782059,36.8221677 L148.235795,33.1027942 L110.340635,4.71574152 Z M0.0694546904,64.2225132 L3.90297899,63.6554769 C4.34097687,63.5817942 4.8519744,63.5097134 5.42762875,63.4264199 C6.49968071,63.2774527 7.80533153,63.093246 9.25489594,62.8193387 L17.2952856,61.1454605 C17.8625971,61.0189185 18.44868,60.9019873 19.0472771,60.7834543 C20.042158,60.5832296 21.0724959,60.3781995 22.0778053,60.1203102 L32.7274109,57.2274641 C33.8974909,56.9151137 35.032114,56.5146643 36.1834227,56.1094096 C36.865448,55.8707418 37.5558161,55.6256668 38.2420128,55.4046187 L44.0110706,53.4376116 C45.2020076,53.0307551 46.3366307,52.5406051 47.5359106,52.0248263 C48.2304501,51.726892 48.9270753,51.4257541 49.6237005,51.1454396 L55.2780446,48.7827885 L64.7638272,43.9629803 C65.0349688,43.8124113 65.2956818,43.6522316 65.5563948,43.4888482 L73.5258705,38.6305969 L80.2439237,33.7531239 C81.2534046,33.0851744 82.1627716,32.2778686 83.0387673,31.5009969 C83.443394,31.1453978 83.8417635,30.7897988 84.240133,30.456625 L88.0194289,27.1889584 C89.4564791,25.8146163 90.7892441,24.4194508 92.0740379,23.073941 C92.8749483,22.236201 93.6591731,21.4160807 94.4079409,20.663236 C95.5675924,19.3321424 96.6187873,18.0042524 97.6199253,16.7436378 C98.228951,15.9731733 98.8212909,15.2283375 99.3927739,14.5363611 L99.8099147,14.0205823 C100.039342,13.7418696 100.264598,13.4679623 100.456483,13.1860459 L103.065699,9.21999568 C103.399412,8.69460615 103.728953,8.20285436 104.043894,7.73512953 C104.700891,6.76283854 105.261945,5.92830212 105.651972,5.0937657 L108.138132,0.419721024 L152.296661,33.4728094 L150.081643,39.2841302 C149.699959,40.4310171 149.130562,41.5891166 148.465222,42.9346264 C148.181566,43.5096716 147.883311,44.1135492 147.578798,44.7606753 L145.050924,49.932879 C144.838182,50.3493463 144.592069,50.7497956 144.343871,51.158254 L143.951758,51.8053801 C143.461618,52.6030752 142.96522,53.4328062 142.452137,54.2849624 C141.361314,56.106206 140.222519,58.0091412 138.910611,59.9809538 C138.247357,60.8667477 137.579932,61.781374 136.893735,62.7152219 C135.450428,64.6950434 133.936207,66.7629638 132.255129,68.8453003 L128.254748,73.3511563 C127.84595,73.7932524 127.44341,74.2497646 127.040869,74.7078786 C126.062673,75.8179242 125.046935,76.9744219 123.887284,77.9835542 L116.556034,84.8456541 L107.831533,91.7285773 C107.518677,91.9752541 107.207907,92.2235327 106.859595,92.4718113 L96.1787037,99.540543 L89.7005065,103.13818 C88.9517387,103.541833 88.2133994,103.955097 87.4771459,104.369962 C86.0984954,105.145232 84.6635309,105.949334 83.1785095,106.644514 L76.5459702,109.69754 C75.7888596,110.032316 75.0463489,110.379906 74.3100953,110.72269 C72.9251877,111.368215 71.4860518,112.04097 70.0198018,112.595191 L57.5952619,117.269236 C56.3000396,117.730554 55.0048173,118.113383 53.7533948,118.485 C53.1068265,118.677216 52.4727724,118.866228 51.8387184,119.064851 L42.2903646,121.938475 C40.4653734,122.447847 38.8552098,122.81626 37.534959,123.117398 C36.886305,123.264764 36.3106507,123.396111 35.793396,123.527458 L31.528131,124.52698 L0.0694546904,64.2225132 Z"
                      id="Fill-407"
                      fill="#3796FF"
                    />
                  </g>
                  <g id="Group-12" transform="translate(608.151332, 317.155876)">
                    <path
                      d="M64.1770823,3.09499284 C64.1770823,3.09499284 64.1729109,3.18949889 64.1624824,3.36890019 C64.1603967,3.55150509 64.137454,3.81419986 64.0853114,4.14256831 C63.9935404,4.81211961 63.8600553,5.79722498 63.6890276,7.0562377 C63.5054856,8.31685221 63.3386293,9.88981721 63.0487164,11.6533961 C62.6691182,13.3753283 62.2373774,15.33753 61.7639226,17.4967528 C60.6564137,21.7959769 59.1234211,26.7983901 56.8541749,31.8873003 C56.5830334,32.545639 56.3098061,33.2119867 56.0324075,33.8847416 C55.725809,34.5382749 55.3628964,35.1629758 55.0291838,35.8133056 C54.3429871,37.113965 53.6442762,38.4402532 52.9330511,39.7873648 C52.5659671,40.4537125 52.2510258,41.1729195 51.8297135,41.8136385 C51.4084013,42.4559592 50.9850033,43.1046871 50.557434,43.7550168 C49.7022953,45.0668889 48.8388137,46.3947789 47.9669894,47.7306779 L47.3079069,48.741412 L46.5591391,49.6800653 C46.0564843,50.3095716 45.5538296,50.9406798 45.0490892,51.5733897 C44.0416941,52.8484204 43.0280419,54.1250529 42.0164753,55.4032872 C39.7639148,57.8059832 37.4988401,60.1910595 35.2337653,62.4896387 C32.7350917,64.6312417 30.3657317,66.8080843 27.9713433,68.7831005 C25.4184414,70.6556016 22.9760818,72.4496146 20.6964071,74.1234929 C15.7178312,77.1605006 11.6173368,79.9027777 8.31566704,81.4068654 C5.08908266,83.0663275 3.22446311,84.0226005 3.22446311,84.0226005 L41.278136,130.828721 C41.278136,130.828721 43.3721831,129.459184 46.9908798,127.090126 C50.6658906,124.89246 55.2231543,121.120227 60.6689279,116.838623 C63.1467445,114.533636 65.7893317,112.071674 68.5487183,109.508798 C71.1162202,106.838602 73.6357508,103.918525 76.2637381,101.014467 C78.6414409,97.9630429 80.9899438,94.7978913 83.2967326,91.6087128 C84.3228991,89.9364363 85.3490656,88.2657617 86.3710606,86.603096 C86.875801,85.7749668 87.3784557,84.9500412 87.8811105,84.1267173 L88.6298783,82.896537 L89.2764466,81.5958775 C90.1274139,79.8723436 90.9742098,78.1600222 91.8064057,76.4733296 C92.2172895,75.6307842 92.6281732,74.7962477 93.0348855,73.9665167 C93.4395121,73.1415911 93.7315107,72.2349738 94.0798233,71.3844194 C94.7409915,69.6672926 95.3938169,67.9773964 96.0299567,66.3211379 C96.3407266,65.4930087 96.6744393,64.6937118 96.9539237,63.8639808 C97.2000368,63.0134264 97.4419785,62.1756864 97.6818344,61.3459554 C99.7049675,54.9211462 100.923019,48.6645257 101.719758,43.3081154 C102.030528,40.6267066 102.314183,38.1951782 102.560297,36.063186 C102.710467,33.8927505 102.750096,31.9609829 102.825181,30.4088413 C102.887752,28.8599033 102.933638,27.6489445 102.967009,26.8272224 C102.987866,26.4219677 102.987866,26.1016082 102.977437,25.8789584 C102.97118,25.6595122 102.967009,25.5473863 102.967009,25.5473863 L64.1770823,3.09499284 Z"
                      id="Fill-409"
                    />
                    <g id="Group-413" transform="translate(0.053323, 0.970885)" />
                    <mask id="mask-3" fill="white">
                      <use xlinkHref="#path-middle-2" />
                    </mask>
                    <g id="Clip-412" />
                    <path
                      d="M65.6272725,5.01426643 C65.6251868,5.03028441 65.6210154,5.04790418 65.6189296,5.06392215 L65.2330744,7.98560052 C65.1684175,8.44051097 65.1079321,8.93546635 65.0411896,9.46566128 C64.9223044,10.4123235 64.7909051,11.4695098 64.6031917,12.6388218 L63.3329979,18.5190199 C61.9689473,23.9154752 60.3712979,28.6760169 58.4566215,33.0264985 L57.6306826,35.0559758 C57.4325407,35.4820539 57.2156275,35.8937158 56.9924571,36.3117849 L54.539669,41.0162637 C54.412441,41.2501261 54.2893845,41.488794 54.1704994,41.7290636 C53.9369005,42.191983 53.7012159,42.6565042 53.4196458,43.0873877 L48.8957535,50.0920475 L43.5959791,56.8244018 C41.3496757,59.241514 39.0887724,61.6426082 36.7882406,63.9972504 C35.7975311,64.8542119 34.8276787,65.7159789 33.8682548,66.5697369 C32.4124332,67.8623874 30.9795545,69.1358163 29.5049616,70.362793 L22.1924827,75.7784699 C20.9306317,76.5537398 19.7250947,77.3113899 18.573786,78.0370041 C15.2012023,80.156182 12.2478451,82.0126652 9.77837139,83.1467377 L5.98238976,85.1185502 L40.9909346,128.099579 L45.4543415,125.201927 C48.4160415,123.449561 52.0514239,120.593556 56.1852896,117.349917 L59.0260187,115.129825 L66.899552,107.872082 C68.6703149,106.050838 70.4139636,104.112663 72.1888978,102.142453 C72.9960654,101.245446 73.8115757,100.342032 74.6020576,99.4802653 C76.7962184,96.6867307 79.1071786,93.625696 81.628795,90.1818317 L86.966112,81.5561529 L91.4044905,72.6661776 C91.6610322,72.1471953 91.8716883,71.5945752 92.0823444,71.0451587 C92.1991438,70.7376136 92.318029,70.4300685 92.4369141,70.1401432 L94.7416172,64.2439271 C94.948102,63.7217412 95.1504153,63.2027589 95.3235287,62.6997945 L96.0681251,60.1753619 C97.8159452,54.7036221 99.1445388,48.8378402 100.143591,42.3089142 L101.009158,35.1120387 C101.113444,33.6688193 101.167672,32.3313185 101.215643,31.1427848 C101.240671,30.5517216 101.263614,29.9974997 101.290728,29.48973 L101.442985,25.9065093 C101.447156,25.8488446 101.449242,25.7959853 101.453413,25.743126 L65.6272725,5.01426643 Z M0.461530773,82.9256897 L6.8980139,79.6484123 C9.30491654,78.5639955 12.2249024,76.7635753 15.555772,74.7068675 C16.7175092,73.9924658 17.9334748,73.2428247 19.1452689,72.5124051 L26.4056052,67.2312792 C27.8447411,66.0555599 29.2734484,64.8077598 30.7313557,63.5391363 C31.6991224,62.6917855 32.6814891,61.8364257 33.6388273,61.0259163 C35.9101592,58.7417532 38.181491,56.372695 40.402766,54.0292654 L45.6900261,47.4394711 L50.2431184,40.5389281 C50.5017457,40.1464878 50.7207446,39.7252151 50.9355722,39.3039424 C51.0669715,39.0524602 51.1941995,38.8041816 51.3255988,38.5687174 L53.8159296,33.8994781 C54.0286715,33.5070377 54.243499,33.1161992 54.4228696,32.738175 L55.2592369,30.7327247 C57.190599,26.454324 58.8028484,21.7818811 60.1877559,16.4975517 L61.4913211,10.700647 C61.674863,9.58579608 61.8146052,8.5446278 61.935576,7.61558533 C62.0085757,7.08058502 62.0753182,6.58242604 62.1420608,6.12751559 L62.5508588,3.20904082 C62.59883,2.9175137 62.6238584,2.69005847 62.6259441,2.50585178 L62.7010295,1.16514739 L104.452656,25.3378712 L104.49437,26.7122134 C104.511056,26.9572884 104.511056,27.308082 104.488113,27.7389655 L104.358799,31.3350005 C104.337942,31.8443721 104.319171,32.3969922 104.298314,32.98325 C104.2566,34.1910052 104.208629,35.5461258 104.1106,37.0454081 L103.293004,44.3303825 C102.329409,50.9826469 101.02793,56.9461384 99.305138,62.5043752 L98.5772272,65.0528348 C98.3936853,65.6054549 98.1872006,66.1468624 97.9807158,66.6898717 L95.7177268,72.6373453 C95.6009274,72.9288724 95.4882993,73.2284085 95.3798427,73.5279446 C95.1566724,74.1190078 94.9376734,74.7116728 94.6665319,75.2707001 L90.2677818,84.2856156 L84.9408933,93.0810849 C82.4109341,96.613048 80.1124881,99.7157295 77.8974702,102.589354 C77.0819599,103.497573 76.2768781,104.408996 75.4801391,105.312409 C73.7072905,107.319462 71.9636418,109.292876 70.1699362,111.174988 L62.2692887,118.594513 L59.3972741,120.885083 C55.2404656,124.212016 51.5800547,127.140102 48.5599551,128.961346 L41.572846,133.587336 L0.461530773,82.9256897 Z"
                      id="Fill-411"
                      fill="#FFFFFF"
                      mask="url(#mask-3)"
                    />
                  </g>
                  <g id="Group-418" transform="translate(563.140131, 135.521863)">
                    <path
                      d="M2.13909822,6.34051868 C2.13909822,6.34051868 2.50826786,6.630444 3.19655024,7.17345331 C3.53860573,7.44575886 3.97660361,7.77733091 4.46048698,8.17617845 C4.94645606,8.57502599 5.50125337,9.03314003 6.12696463,9.54731698 C7.37838714,10.5772727 8.89677979,11.8282764 10.6445999,13.2650886 C11.0825978,13.625493 11.5331099,13.99711 11.9982219,14.3799396 C12.4445626,14.7659728 12.9075889,15.1648203 13.3831295,15.5732786 C14.3321249,16.3901953 15.3311772,17.2519622 16.376115,18.1505706 C17.4168814,19.0523825 18.5285617,19.9878321 19.6360707,20.9649285 C20.726894,21.9484321 21.8552599,22.9655734 23.0169972,24.0131489 C24.1808201,25.0623261 25.3801,26.1419376 26.6044084,27.2471777 C27.7849169,28.3620287 28.9925397,29.5009066 30.2231051,30.6622097 C31.4432421,31.8283182 32.7447215,33.0120464 33.9648584,34.2198016 C35.1870811,35.4307604 36.4259894,36.6577372 37.6794976,37.8991301 C40.257428,40.3883232 42.612188,42.9399864 45.1046045,45.5028622 C46.370627,46.7875036 47.5177643,48.0785523 48.6982728,49.3679992 C49.8808671,50.6606496 51.0613757,51.9533001 52.2377128,53.2379416 C53.3806787,54.5257866 54.4652449,55.8056227 55.5706681,57.0742462 C56.6635771,58.3460733 57.7961145,59.6114932 58.822281,60.8528862 C59.8401046,62.0958809 60.8433283,63.3244595 61.8298664,64.5290111 C62.3241783,65.1328887 62.8164045,65.7319609 63.3023736,66.3230241 C63.5443153,66.6177549 63.7883426,66.9140874 64.0281986,67.2072163 C64.251369,67.4987434 64.476625,67.7886687 64.6977097,68.0769922 C66.4684725,70.3899876 68.2121212,72.5988662 69.7388567,74.6347506 C71.2197067,76.678644 72.5837572,78.5591541 73.7997228,80.2346342 C74.4296054,81.081985 74.9406029,81.8604585 75.4349148,82.5844709 C75.927141,83.3100851 76.3797388,83.9796364 76.7906226,84.5851158 C77.6144757,85.7992782 78.2631297,86.7555512 78.7073847,87.4090845 C78.9284694,87.737453 79.0994971,87.9873333 79.2162965,88.1587257 C79.3247532,88.3253126 79.3789815,88.4118096 79.3789815,88.4118096 L106.895677,93.9460195 C106.895677,93.9460195 106.824763,93.8467081 106.697535,93.6560942 C106.557793,93.4622767 106.355479,93.175555 106.090595,92.803938 C105.55874,92.0591022 104.782858,90.9682782 103.798406,89.5875289 C103.308266,88.9003578 102.763897,88.1395041 102.175728,87.3113749 C101.585474,86.488051 100.96602,85.6006553 100.223509,84.6411787 C98.7802018,82.7382434 97.1616954,80.6014457 95.4055325,78.2868486 C93.603484,75.9770568 91.5636653,73.4766511 89.4675326,70.8577125 C89.2047339,70.5325476 88.9419352,70.2041791 88.674965,69.8742089 C88.3954807,69.5426368 88.1139106,69.209463 87.8302548,68.8746873 C87.2629433,68.205136 86.6914603,67.5291776 86.1137203,66.8452101 C84.9582402,65.4836823 83.7839887,64.0981276 82.5909659,62.6933513 C81.391686,61.2933805 80.0839495,59.8677808 78.8137556,58.4325704 C77.5289618,57.0005636 76.2629394,55.5589459 74.9322601,54.1077175 C73.5765524,52.6596927 72.2125019,51.2052607 70.8463656,49.7508287 C69.4802294,48.3012021 68.1453787,46.8499737 66.6958143,45.4019489 C63.8404852,42.5219173 61.1040414,39.6563018 58.1652842,36.8611654 C56.728234,35.4692035 55.3057837,34.0916578 53.9041905,32.7333337 C52.504683,31.3782131 51.0321758,30.0519249 49.634754,28.7464601 C48.2310751,27.4441988 46.8503389,26.1675663 45.5050597,24.921368 C44.1097236,23.6831786 42.7519302,22.4738216 41.4295937,21.2981024 C40.1051716,20.1271885 38.8224635,18.9883106 37.5814695,17.8910794 C36.3258756,16.7970518 35.0723674,15.7510781 33.8939445,14.7435476 C32.7071788,13.7376189 31.5746414,12.7765404 30.5005038,11.8619142 C29.9603064,11.4070037 29.4367946,10.961704 28.9278828,10.5308206 C28.4043711,10.1031407 27.897545,9.68827515 27.4032331,9.28622401 C25.4322426,7.68122307 23.7157081,6.28445577 22.305772,5.13596707 C21.5987183,4.56252362 20.9688356,4.05155027 20.4244668,3.6062506 C19.8759266,3.16255273 19.3878719,2.79253755 19.0020166,2.48819605 C18.2261346,1.88271665 17.8131652,1.55915358 17.8131652,1.55915358 L2.13909822,6.34051868 Z"
                      id="Fill-414"
                      fill="url(#linearGradient-middle-4)"
                    />
                    <path
                      d="M100.839209,86.6893969 C100.344897,85.9910133 99.8318139,85.2718063 99.2311311,84.491731 L94.4319257,78.1502153 C93.2222173,76.5980736 91.906138,74.9642403 90.5233161,73.2407064 C89.8600622,72.4189843 89.1884654,71.5812443 88.5126972,70.7370971 L81.6778446,62.6143827 C80.9040484,61.7077654 80.0843666,60.7931391 79.2584278,59.8705039 C78.8120871,59.3723449 78.3678321,58.8741859 77.9360913,58.3856377 C77.5043505,57.9050985 77.0746955,57.4229575 76.6450404,56.9408165 C75.7982445,55.9893489 74.9493629,55.0330759 74.0921385,54.0944226 L69.1302482,48.803686 C68.0915675,47.6920386 67.0174299,46.5451517 65.895321,45.4254953 C65.098582,44.6213931 64.3101858,43.8172908 63.5259611,43.0163921 C61.5445421,40.9965257 59.5068091,38.9157909 57.3960764,36.9087388 L53.1349828,32.7744999 C52.23813,31.9079275 51.2912203,31.0333461 50.3776818,30.1875971 C49.8771128,29.7262795 49.3807152,29.2681654 48.9051747,28.8228658 L44.8109374,25.0282079 L36.9040328,18.0059283 C36.0885224,17.2979338 35.2750978,16.609161 34.4846159,15.9380079 C34.0570466,15.5760017 33.63782,15.2204027 33.2352791,14.8760162 L29.8397527,11.992781 L19.8012584,3.764348 C19.4592029,3.48723706 19.1421759,3.24056027 18.8606058,3.02111403 L18.2202947,2.52135325 L3.81642153,6.95833192 L4.2043625,7.26267342 C4.48593257,7.48211966 4.8008739,7.72879645 5.14292939,8.01071278 L11.3186995,13.0900122 L17.0981858,18.0123355 C17.4694411,18.3358985 17.851125,18.6626652 18.239066,18.9942372 C18.9398626,19.5933094 19.6573448,20.2100014 20.3935984,20.8603311 L27.4015645,27.1730145 L31.0265184,30.5928519 C31.4624306,31.0093192 31.9087713,31.4289901 32.3592834,31.8502628 C33.1643652,32.6031075 33.9965611,33.3831828 34.7995573,34.1760725 L38.4870823,37.8265687 C40.3037306,39.578935 42.0244366,41.3745498 43.6950856,43.1189072 C44.4459391,43.9021861 45.1967926,44.6886686 45.9539033,45.4639385 C46.9654698,46.4906906 47.901951,47.5190445 48.811318,48.5169642 L53.1662683,53.277506 C53.8941791,54.0944226 54.5991471,54.9113393 55.2999437,55.7234505 C55.7045703,56.1911754 56.109197,56.6589002 56.5263378,57.1378376 C56.9184502,57.5943498 57.3168197,58.0492603 57.7110178,58.5025689 C58.4264143,59.3226892 59.1355537,60.1364022 59.8071505,60.9469117 L64.2872431,66.4074389 L65.7242933,68.2142663 C66.4084042,69.1048656 67.0883438,69.9826506 67.7557692,70.8396121 C68.8153069,72.2075471 69.8393876,73.5258263 70.7988116,74.8040606 L74.8450777,80.3767136 C75.3894465,81.1039296 75.8524728,81.787897 76.2612708,82.3917747 L79.8382535,87.6568825 L105.171217,92.7762269 L100.839209,86.6893969 Z M74.0608529,81.9737055 C73.658312,81.3730315 73.2411712,80.7515342 72.7343451,80.0739739 L68.694336,74.4917101 C67.7661977,73.2487154 66.7546311,71.9448523 65.7076076,70.5913336 C65.0401823,69.7247612 64.3560713,68.840569 63.6698746,67.9435625 L57.8403314,60.7643068 C57.1979345,59.9874351 56.5117379,59.2009526 55.8234555,58.4096647 C55.4209146,57.9451435 55.0121166,57.4790204 54.6262613,57.0257118 C54.2153776,56.5531816 53.8044938,56.0790495 53.3956958,55.6033157 C52.7094991,54.8056206 52.019131,54.004722 51.3266773,53.2230449 L46.9821554,48.4657067 C46.104074,47.4982211 45.1967926,46.503505 44.2394544,45.5296122 C43.4635725,44.7319171 42.7022904,43.9326202 41.9410084,43.1381287 C40.3037306,41.4226038 38.6143102,39.6574231 36.8435474,37.9467035 L33.1247368,34.2625696 C32.3738833,33.516132 31.5667158,32.7584819 30.7866624,32.0280623 C30.3236361,31.5939752 29.8647811,31.1630917 29.4267833,30.7434208 L25.8518863,27.3652302 L18.8960628,21.09099 C18.2015233,20.4758998 17.5028124,19.8784294 16.8249586,19.2953751 C16.4265891,18.9557941 16.0365624,18.6194166 15.6611356,18.2958536 L11.3249566,14.5572586 L3.78305026,8.34548843 C3.48688026,8.10201523 3.20948161,7.88577259 2.96336851,7.6951587 L0.456352077,5.72174436 L17.40687,0.602400026 L20.0035717,2.63027547 C20.3164274,2.87214687 20.6668257,3.14445242 21.0443381,3.45199752 L29.5873825,10.403798 L34.5555299,14.6165251 C34.9580708,14.9609115 35.3689545,15.3101033 35.788181,15.6641005 C36.5974343,16.3496698 37.4275445,17.0528588 38.2785118,17.7928892 L46.237559,24.8520101 L50.3755961,28.6819076 C50.8532224,29.1272073 51.3391915,29.5773123 51.829332,30.0274174 C52.7637274,30.8907862 53.7356656,31.7861909 54.6742325,32.6928082 L58.9123834,36.7998166 C61.0690015,38.8453118 63.1359344,40.9516753 65.1465532,42.9987724 C65.9245209,43.7900602 66.7045742,44.5845517 67.4825419,45.3694324 C68.652622,46.5371427 69.7538738,47.7096584 70.8196686,48.8469345 L75.7940731,54.1440783 C76.6867545,55.1147675 77.550236,56.0854567 78.4095462,57.0481369 C78.8350298,57.5270743 79.2605135,58.0028082 79.6985113,58.4913564 C80.1344235,58.9815063 80.5745071,59.4716563 81.012505,59.9602045 C81.8593009,60.905265 82.7040111,61.84552 83.5049215,62.7809697 L88.2540699,68.3712424 L90.4232023,70.9821721 C91.0989704,71.8263193 91.7684815,72.6576521 92.427564,73.4745688 C93.8229001,75.2061117 95.1473223,76.847954 96.3945734,78.444946 L101.204207,84.7784527 C101.842433,85.6017765 102.376373,86.3530195 102.895713,87.0786337 L107.12135,92.9940713 L108.591771,95.1132492 L78.883001,89.1673775 L74.0608529,81.9737055 Z"
                      id="Fill-416"
                      fill="#083CD4"
                    />
                  </g>
                  <path
                    d="M298.276348,11.5451146 L301.056591,12.0448754 L301.119162,12.1249652 L298.338919,11.6252045 L298.276348,11.5451146 Z M286.202206,7.22506714 L286.277291,7.23788152 C286.957231,7.34840554 287.612142,7.46213315 288.235768,7.56144458 C289.19102,7.72162432 290.071187,7.86578608 290.878355,7.99392987 C291.310096,8.06280715 291.735579,8.13488804 292.144377,8.20536712 C293.352,8.40398999 294.392766,8.60101106 295.141534,8.73876564 L295.214534,8.75158002 L296.438842,10.3453684 L296.363757,10.332554 C295.650446,10.2044102 294.665994,10.0202035 293.493828,9.82798784 C293.105887,9.76071235 292.695003,9.69664045 292.282034,9.63096676 C291.495723,9.50442477 290.67187,9.36987379 289.791703,9.22250844 C289.113849,9.11358622 288.396367,8.99985861 287.645513,8.87171482 L287.566257,8.86370583 L286.202206,7.22506714 Z M283.271792,6.78457287 L283.421962,6.81020162 L284.825641,8.4600529 L284.602471,8.36234326 L283.271792,6.78457287 Z M299.471456,13.1453102 L302.397699,13.6658943 L306.268766,18.6026337 L303.336266,18.0932622 L299.471456,13.1453102 Z M305.912111,21.3032641 L308.700697,21.7773961 L308.76744,21.8590878 L305.976767,21.3865575 L305.912111,21.3032641 Z M268.336064,4.59171229 L270.38214,4.87523042 C271.283164,5.00177241 272.180017,5.12671261 273.053927,5.24844921 C273.458553,5.29810492 273.875694,5.35416783 274.288664,5.41503613 L274.292835,5.41023074 L274.370006,5.42464691 C275.339859,5.55759609 276.345168,5.70015606 277.348392,5.83951243 L277.423477,5.85392861 L278.858442,7.47334573 L278.906413,7.52139965 L278.827156,7.51339066 C277.867732,7.37403429 276.885365,7.23627972 275.909256,7.10813593 C275.475429,7.04726763 275.035346,6.98960293 274.597348,6.93033643 C273.539896,6.79098006 272.442815,6.64041111 271.324878,6.48183317 L269.858628,6.2816085 L268.336064,4.59171229 Z M265.340993,4.25853844 L265.397307,4.17204138 L267.070041,5.90518612 L266.924042,5.88916815 L265.340993,4.25853844 Z M307.138505,22.9435046 L310.075176,23.4384599 L314.044271,28.4985378 L311.105514,28.0131932 L307.138505,22.9435046 Z M250.307237,2.60067818 L251.906972,2.74323815 C252.720397,2.81051364 253.54425,2.8906035 254.353503,2.95627719 L254.945843,3.02675628 C255.433898,3.08121739 255.919867,3.13888209 256.407922,3.1933432 L256.489264,3.20615758 C257.12749,3.27663666 257.757372,3.35192114 258.370569,3.41919663 L259.505192,3.54894221 L261.17167,5.27567976 L261.088242,5.26767077 C260.583501,5.21160787 260.05999,5.15073957 259.553164,5.09627846 C259.071366,5.03861375 258.604168,4.98895803 258.12237,4.93129333 L258.076485,4.98094905 L258.016,4.92008075 C257.696887,4.88484121 257.361088,4.84319448 257.037804,4.81436212 C256.722863,4.77431719 256.424607,4.74228124 256.105495,4.7086435 C254.847815,4.59491589 253.579707,4.48599367 252.292827,4.37066426 L252.115542,4.35624808 L250.307237,2.60067818 Z M312.584278,29.7975954 L312.732363,29.8200206 L313.971272,31.4218179 L313.825272,31.3993928 L312.584278,29.7975954 Z M247.33928,2.37482476 L247.495708,2.38763913 L249.243528,4.06472096 L249.183042,4.15281982 L247.33928,2.37482476 Z M300.702022,28.0564417 L300.664479,28.0196004 L300.739564,28.030813 C301.776159,28.1669657 302.783554,28.3127293 303.715864,28.4408731 C304.245633,28.5177593 304.754545,28.5946456 305.246771,28.6635229 C306.268766,28.8028793 307.244876,28.9438374 308.093757,29.0607687 C308.560955,29.1264423 309.04901,29.1937178 309.624664,29.2802149 L309.699749,29.2930293 L311.084657,30.9893327 L311.009572,30.9781201 C310.506917,30.9044374 310.039719,30.8387637 309.58295,30.7859044 C308.73824,30.6673714 307.83513,30.5376258 306.856935,30.3982694 C306.306309,30.3245868 305.738997,30.2460987 305.152914,30.1596016 C304.450032,30.0634938 303.365466,29.9129248 302.216243,29.7591523 L302.136986,29.7527451 L300.702022,28.0564417 Z M294.722308,27.3180131 L294.880821,27.3372347 L296.3867,29.0031039 L296.249043,28.9854842 L294.722308,27.3180131 Z M232.172039,1.22953965 L232.245039,1.23274324 C232.386867,1.24235403 232.509923,1.24395582 232.651751,1.25356661 L233.006321,1.27438997 C234.789598,1.38971938 236.526989,1.49543801 238.253952,1.59955484 C238.929721,1.63959977 239.622174,1.68765369 240.295857,1.72769862 L241.369994,1.8045849 L243.215843,3.55054401 L243.240871,3.57617277 L243.180386,3.58578355 C242.884216,3.56656199 242.57136,3.53612784 242.266847,3.52171166 C241.92062,3.50249009 241.551451,3.47846313 241.203138,3.45763977 L240.275,3.40317866 L240.224943,3.45443617 L240.164457,3.39196607 L234.161801,3.03796886 L232.172039,1.22953965 Z M229.162368,1.08377609 L229.327138,1.09659047 L231.235558,2.82332801 L231.089558,2.82012442 L229.162368,1.08377609 Z M282.789994,26.054195 L285.808008,26.315288 C286.487947,26.3713509 287.163716,26.433821 287.816541,26.4930875 L287.897884,26.4994947 C288.744679,26.5940007 289.585218,26.6917104 290.400729,26.78942 L291.889921,26.9624141 L293.485485,28.7243912 L293.404143,28.717984 C292.133949,28.5690169 290.834555,28.4232533 289.491362,28.2742862 L289.470504,28.2726844 C288.83645,28.2166214 288.198225,28.1637621 287.543314,28.1060974 L286.721546,28.0324148 C286.022835,27.9715465 285.317867,27.9138817 284.594128,27.8498099 L284.533643,27.8450045 L282.789994,26.054195 Z M276.785252,25.5624432 L276.937508,25.5688504 L278.852184,27.4173246 L278.6019,27.3084023 L276.785252,25.5624432 Z M213.863728,0.503925447 L213.938813,0.505527245 C213.999298,0.500721852 214.070212,0.508730839 214.124441,0.508730839 L217.974651,0.632069235 C218.687961,0.651290804 219.395015,0.675317764 220.099983,0.699344724 L220.978065,0.731380671 C221.685118,0.749000442 222.408858,0.776230997 223.107569,0.800257957 L223.182654,0.801859755 L225.299644,2.59907638 L225.328844,2.61989975 L225.278787,2.64392671 C224.28182,2.61189076 223.274425,2.58626201 222.25243,2.54781887 C221.568319,2.53340269 220.861265,2.51097753 220.154211,2.48855237 L216.383258,2.38283374 C216.312344,2.37482476 216.264373,2.37001936 216.210145,2.37001936 L216.128802,2.37322296 L213.863728,0.503925447 Z M210.710143,0.388596038 L210.99797,0.511934434 L213.269302,2.31876185 L213.131645,2.32356724 L210.710143,0.388596038 Z M264.825824,24.8160057 L264.896738,24.8160057 C264.93428,24.8256165 264.957223,24.8272182 264.984337,24.8240147 L265.076108,24.8256165 C266.127303,24.8752722 267.165984,24.9377423 267.960637,24.9857962 L268.688548,25.0274429 C269.52283,25.0787004 270.348768,25.1363651 271.141336,25.1780119 L271.971446,25.2276676 C272.6201,25.2709161 273.254154,25.3045539 273.886123,25.3397934 L273.967465,25.3526078 L275.859199,27.1818604 L275.777856,27.169046 C275.237659,27.13701 274.712062,27.1129831 274.169779,27.0809471 C273.802695,27.0569202 273.427268,27.0376986 273.060184,27.0152734 C272.311416,26.9784321 271.529277,26.9287764 270.786766,26.8791207 C270.501025,26.8631027 270.215283,26.8454829 269.931628,26.8294649 L269.925371,26.8342703 L269.860714,26.8294649 C268.895033,26.7701984 267.985666,26.7205427 267.06587,26.6837014 L267.042927,26.6804978 C266.999128,26.6772942 266.97827,26.6756924 266.957413,26.6740906 L266.886499,26.6740906 L264.825824,24.8160057 Z M258.869053,24.5661253 L259.094309,24.6622331 L261.253012,26.6036115 L260.973528,26.4850785 L258.869053,24.5661253 Z M195.62633,0.606440478 L196.0393,0.590422504 C197.893491,0.5327578 199.797739,0.468685905 201.789586,0.465482311 L202.08367,0.473491297 C202.36524,0.467084108 202.640553,0.467084108 202.934638,0.473491297 C203.28295,0.481500284 203.618749,0.475093095 203.97749,0.4718895 L204.951514,0.479898487 L207.243702,2.32196544 L207.293759,2.37482476 L207.214503,2.37162116 C206.563763,2.37001936 205.93388,2.37482476 205.281055,2.37322296 C204.897285,2.37482476 204.523944,2.36681577 204.169375,2.36521397 C202.238012,2.37482476 200.30665,2.44530384 198.433688,2.50457034 L198.166718,2.52058831 L195.62633,0.606440478 Z M192.67923,0.74419505 L192.823144,0.740991455 L195.234218,2.56543864 L195.081961,2.57344763 L192.67923,0.74419505 Z M247.078567,24.5116642 L247.151566,24.5100624 C247.647964,24.5084606 248.133933,24.5100624 248.626159,24.5068588 C249.114214,24.5100624 249.604355,24.5068588 250.090324,24.5100624 L250.999691,24.4988498 C251.533631,24.4988498 252.067571,24.5004516 252.599426,24.5004516 L254.19499,24.497248 L255.878153,24.5501073 C255.92821,24.5485055 255.994952,24.5533109 256.045009,24.5517091 L256.118009,24.5517091 L258.187027,26.4370246 L258.120285,26.4322192 C258.026428,26.4306174 257.953428,26.4322192 257.865829,26.425812 L252.395027,26.4065904 L252.322027,26.4065904 C251.348003,26.409794 250.371894,26.4129976 249.391613,26.4162012 L249.318613,26.4162012 L247.078567,24.5116642 Z M241.146824,24.6269936 L241.303252,24.6189846 L243.591269,26.4450336 L243.441099,26.4450336 L241.146824,24.6269936 Z M177.386847,1.46500386 L179.086696,1.35127625 C179.82295,1.30162053 180.582146,1.2567702 181.347599,1.20391089 C182.040053,1.16546775 182.709564,1.11581204 183.435389,1.06775812 L183.535503,1.05974913 C184.47407,1.00208442 185.479379,0.934808935 186.522231,0.88355142 L186.60566,0.885153217 L189.237818,2.82012442 L189.15439,2.81852262 C188.174109,2.87138193 187.229285,2.94186102 186.255261,3.0107383 L186.182262,3.0716066 L186.132205,3.01714549 L185.750521,3.04597785 C185.187381,3.08281918 184.643012,3.12766951 184.056929,3.15490007 L182.530194,3.26222049 C181.76474,3.3166816 180.97843,3.36313372 180.208805,3.41599303 L180.142062,3.42240022 L177.386847,1.46500386 Z M174.416804,1.70527346 L174.575318,1.69726447 L177.42439,3.76678665 L177.015592,3.59539434 L174.416804,1.70527346 Z M229.318796,25.0562753 L229.395967,25.0546735 C230.255277,24.995407 231.271015,24.9297333 232.349324,24.876874 C232.881178,24.8560506 233.379662,24.844838 233.857288,24.8256165 L235.175453,24.7791643 C236.220391,24.750332 237.242386,24.7118888 238.264381,24.6750475 L238.339466,24.6750475 L240.748455,26.6036115 L239.866202,26.6356475 C238.664836,26.6820996 237.455128,26.7333571 236.251676,26.773402 L236.203705,26.7701984 C235.786564,26.781411 235.338138,26.797429 234.804198,26.8198542 L234.729112,26.8198542 C233.736317,26.8711117 232.774807,26.9367854 231.973897,26.9960519 L231.915497,27.0056626 L229.318796,25.0562753 Z M223.366196,25.3494042 L223.70408,25.4919641 L226.211096,27.3804832 L226.173554,27.4733875 L223.366196,25.3494042 Z M159.170307,3.15970546 L159.239135,3.15329827 C160.434243,2.99952572 161.535495,2.88900171 162.55749,2.79129207 C163.008002,2.75124713 163.443915,2.69838782 163.900684,2.65353749 C164.36371,2.60388178 164.853851,2.55742965 165.341905,2.50937573 L165.410734,2.50296854 C166.365986,2.40205531 167.346267,2.30114208 168.341148,2.20983963 L168.416233,2.19862705 L171.286162,4.12398746 L171.332048,4.15922701 L170.009711,4.32421213 C169.431971,4.37546965 168.86466,4.44114334 168.303605,4.50361344 L167.329581,4.60132308 C166.722642,4.67020036 166.103187,4.72466147 165.496247,4.79514055 C164.486767,4.8912484 163.423057,5.00337421 162.30512,5.15394316 L162.234206,5.16035035 L159.170307,3.15970546 Z M211.911508,26.6116205 L211.999108,26.6036115 C212.735362,26.5235216 213.494558,26.44183 214.232897,26.3537311 L214.869037,26.283252 C215.263235,26.2416053 215.661605,26.1935514 216.070403,26.1599136 C216.618943,26.0974435 217.163312,26.0349735 217.738966,25.967698 C218.671276,25.8635811 219.6307,25.7562607 220.644352,25.6729672 L220.704837,25.6649583 L223.362024,27.6383726 L223.280682,27.6383726 C222.390086,27.7152589 221.489062,27.8241811 220.640181,27.9298997 C220.043669,27.9955734 219.438815,28.0692561 218.813104,28.133328 C218.450191,28.1781783 218.03305,28.219825 217.640938,28.2646754 L216.602257,28.3912174 C215.978632,28.4504839 215.371692,28.5177593 214.783523,28.5946456 L214.700095,28.5946456 L211.911508,26.6116205 Z M155.84778,3.36153192 L156.35252,3.57136738 L159.391391,5.4935242 L159.243306,5.51114397 L155.84778,3.36153192 Z M206.20085,27.4173246 L206.227965,27.3116059 L209.16255,29.2754095 L209.02698,29.2994365 L206.20085,27.4173246 Z M141.245765,5.87635377 L141.327107,5.86353939 C141.852705,5.76422795 142.422102,5.65690753 143.037385,5.53997632 L144.407692,5.29490133 C145.271174,5.10909284 146.301512,4.96813467 147.271364,4.81916752 C147.54042,4.78713157 147.811562,4.75189203 148.061846,4.7102453 L150.354035,4.38027504 L153.543077,6.39853971 L153.46382,6.40975229 C153.102993,6.46901879 152.719224,6.51867451 152.358397,6.57794101 C151.972541,6.62919852 151.611715,6.68846503 151.255059,6.74132434 L150.468749,6.85345015 C149.607353,6.97358495 148.612472,7.12255211 147.799047,7.30035161 L147.342278,7.37883968 C146.339054,7.57586076 145.46723,7.74404948 144.699691,7.88340585 L144.618349,7.89622023 L141.245765,5.87635377 Z M194.773277,29.2273556 L194.846277,29.2113376 C195.932929,28.9966968 196.794325,28.8269062 197.634863,28.6747355 C198.763229,28.4649 199.806081,28.3047203 200.834334,28.1557531 L203.449807,27.7681182 L206.424021,29.7703649 L205.410369,29.9209338 C204.872257,30.0106345 204.321631,30.0875208 203.787691,30.1708142 L203.756405,30.1756196 C202.780296,30.3101706 201.800015,30.4719521 200.723791,30.6689732 C199.781053,30.8435691 198.877943,31.034183 198.008204,31.2135843 L197.943548,31.2231951 L194.773277,29.2273556 Z M137.891952,6.17268628 L138.498892,6.42416846 L141.767191,8.37515764 L141.623277,8.40879538 L137.891952,6.17268628 Z M189.279532,30.3758443 L189.42136,30.3518173 L192.44146,32.2643634 L192.299632,32.2899921 L189.279532,30.3758443 Z M143.961352,11.4025546 L146.845881,10.8098896 L157.22643,16.988022 L154.38153,17.5983068 L143.961352,11.4025546 Z M157.718657,19.5204636 L160.392529,18.924595 L160.576071,19.0287118 L157.87717,19.6213769 L157.718657,19.5204636 Z M164.476338,23.5970379 L167.25241,22.9451064 L177.599589,29.0944064 L174.865231,29.7623559 L164.476338,23.5970379 Z M178.1669,31.6684947 L180.759431,31.0245722 L180.942973,31.1270872 L178.344185,31.777417 L178.1669,31.6684947 Z M181.024315,32.3204263 L180.880402,32.2339292 L181.041001,32.251549 C181.118172,32.235531 181.376799,32.1618483 182.259052,31.9520129 C183.160076,31.7245576 184.528298,31.3881802 186.296975,30.9508895 L186.463832,30.9060392 L189.836415,32.8906661 L189.788444,32.9082859 C189.755073,32.9130913 189.740473,32.9275075 189.707102,32.9323129 L189.632016,32.9483308 C187.577598,33.4785257 186.057119,33.8581517 185.181124,34.0711908 C184.722269,34.196131 184.451127,34.2569993 184.40107,34.274619 L184.351013,34.3210712 L181.024315,32.3204263 Z"
                    id="Fill-419"
                    fill="#03D5FC"
                  />
                  <path
                    d="M93.9253082,169.253277 C93.9253082,169.253277 93.6896236,168.657408 93.4643676,167.552168 C93.2078259,166.445326 92.8344849,164.830714 92.3589443,162.785219 C91.9334607,160.752538 91.1951214,158.282566 90.7487807,155.497041 C90.3650111,152.735542 89.9353561,149.645675 89.4723297,146.305928 C88.1645932,133.313749 88.857047,116.948186 94.3758203,102.472743 C95.8358132,99.019268 96.8870081,95.5145354 98.7724847,92.3365695 C99.6067664,90.7395775 100.428534,89.1650107 101.233616,87.6224799 C102.082497,86.1023742 103.150378,84.6799781 104.059745,83.2511749 C105.006655,81.8463986 105.872222,80.4528349 106.812874,79.1313521 C107.857812,77.8531178 108.87355,76.6117249 109.855917,75.4103768 C110.844541,74.2202414 111.728879,73.046124 112.700817,71.9601054 C113.741584,70.9045209 114.742722,69.8905832 115.697974,68.9246994 C116.642798,67.9604174 117.543822,67.0425875 118.39479,66.1728115 C119.2103,65.2966284 120.236467,64.564607 121.054063,63.8277802 C122.743483,62.3861626 124.203476,61.1399642 125.396499,60.1228229 C126.572836,59.1056816 127.728316,58.4072979 128.397827,57.8867138 C129.100709,57.3821476 129.47405,57.1146475 129.47405,57.1146475 L69.4203697,32.4629862 C69.4203697,32.4629862 68.9072864,32.7577169 67.9416054,33.310337 C67.0072099,33.8821787 65.4575317,34.654245 63.7973112,35.7722996 C62.120405,36.8999649 60.0680721,38.2807142 57.6861979,39.879308 C56.5286321,40.70103 55.1291246,41.5211503 53.9402732,42.5014502 C52.7138791,43.4737412 51.4144854,44.5036969 50.0504349,45.5849101 C48.6822129,46.6757341 47.2472484,47.8194174 45.7517985,49.0127565 C44.331434,50.2429368 42.9965833,51.5724286 41.5386761,52.9259474 C40.0891117,54.2970859 38.591576,55.7162784 37.0481549,57.1771176 C35.6194476,58.6924179 34.2679113,60.2894098 32.824604,61.9072252 C31.4146679,63.5538728 29.8316184,65.2021223 28.4842535,66.9624976 C27.1869455,68.7565106 25.8646091,70.5857632 24.5193299,72.4470517 C21.5951726,76.168027 19.5908109,80.2750354 17.1609655,84.3564151 C7.57506905,101.580542 3.96054369,121.405988 3.63934524,137.371102 C3.72277341,141.498934 3.80411587,145.325628 3.87294411,148.753474 C4.03354333,152.218162 4.59459776,155.298418 4.85113937,157.835665 C5.17233782,160.395337 5.42679373,162.416805 5.59990718,163.80236 C5.74173506,165.191118 5.95239119,165.939158 5.95239119,165.939158 L93.9253082,169.253277 Z"
                    id="Fill-421"
                    fillOpacity="0.1"
                    fill="#0155FD"
                  />
                  <path
                    d="M105.42317,198.364181 C105.42317,198.364181 105.101971,197.733073 104.499203,196.552549 C103.886006,195.375228 102.968296,193.653295 102.127757,191.457231 C100.361166,187.101944 97.4849795,180.949441 95.3784183,173.677281 C94.8111068,171.880064 94.1269958,170.010767 93.5888841,168.091813 C93.1467148,166.184073 92.6920313,164.221871 92.2269193,162.214819 C91.7805786,160.220581 91.2320384,158.173484 90.8315832,156.105564 C90.5500131,154.055263 90.2642716,151.974528 89.9743587,149.869767 C89.8262737,148.822191 89.6781887,147.768208 89.5301037,146.70942 L89.302762,145.122039 L89.2339338,143.547472 C89.1484199,141.453923 89.0608203,139.349162 88.9753064,137.239594 C88.9294209,136.190417 88.8814497,135.138036 88.8355643,134.088859 C88.8960497,133.0557 88.9586208,132.022541 89.0191062,130.992585 C89.1400771,128.940682 89.2589622,126.895187 89.379933,124.862506 C90.6709839,109.120042 96.6152409,95.1395547 102.448955,85.6777377 C103.954834,83.3999819 105.32097,81.3320615 106.522336,79.5188269 C107.926015,77.7888857 109.139895,76.292807 110.13269,75.0706356 C111.117142,73.8548714 111.888853,72.9050056 112.410279,72.2594813 C113.015133,71.6459929 113.334246,71.3192262 113.334246,71.3192262 L46.6584541,48.2869821 C46.6584541,48.2869821 46.1975135,48.6569973 45.334032,49.3537791 C44.55815,50.0825969 43.4151841,51.1590047 41.9468484,52.5381523 C40.4847697,53.9333178 38.6910641,55.6408337 36.6116171,57.6206553 C34.7741117,59.7045936 32.677979,62.0816609 30.3607616,64.7102104 C21.2358058,75.7033456 11.2285971,92.2130709 6.97584623,111.154325 C6.48779145,113.617889 5.99347956,116.102277 5.49708196,118.596275 C5.25722598,119.852084 5.01319859,121.111097 4.7712569,122.371711 C4.65654317,123.654751 4.54182944,124.940994 4.42920142,126.225636 C4.20603107,128.810937 3.98494642,131.396238 3.76386178,133.970326 L3.61369108,135.911704 C3.6262053,136.563636 3.63663382,137.217169 3.64914805,137.869101 C3.6720908,139.176167 3.69711925,140.478429 3.7221477,141.774283 C3.77846171,144.382009 3.83477572,146.964106 3.89108974,149.509362 C4.09340304,152.083451 4.48134402,154.633512 4.76499979,157.124307 C5.07994112,159.632721 5.38653964,162.089879 5.68688104,164.47976 C6.10610758,166.888863 6.7088761,169.235497 7.19067376,171.500438 C8.93015106,180.673931 11.8063371,188.469879 13.5604144,194.004089 C14.3863532,196.797624 15.3499486,198.99529 15.9923454,200.496174 C16.6243138,202.003465 16.9642836,202.810771 16.9642836,202.810771 L105.42317,198.364181 Z"
                    id="Fill-423"
                    fillOpacity="0.2"
                    fill="#30BBEF"
                  />
                  <path
                    d="M101.18043,196.504174 C100.550548,195.283605 99.6891517,193.617736 98.8861556,191.511372 C98.5044717,190.561506 98.0706453,189.526745 97.6034475,188.410292 C95.8952558,184.341727 93.7907803,179.324898 92.1493311,173.593667 C91.9449321,172.933726 91.7238474,172.264175 91.4985914,171.585013 C91.1085647,170.402887 90.7081095,169.191928 90.3597969,167.916897 L89.0145177,162.022283 C88.8518327,161.279049 88.6745479,160.531009 88.497263,159.774961 C88.1927502,158.488718 87.884066,157.183253 87.6296101,155.824929 L86.1383316,144.746898 L85.7733334,135.019183 L86.3156165,124.362425 C87.9070087,106.082714 95.5114862,91.6312981 99.7329515,84.8685097 L103.88976,78.6647485 L107.535571,74.2197609 L109.879902,71.3621544 L48.2661149,50.1175161 L39.4894717,58.4917127 L33.3116159,65.5700552 C26.9981893,73.2634879 15.1659894,89.9622253 10.416841,111.700217 L8.46253618,121.922888 L7.21111366,136.262178 L7.55108345,149.781347 C7.69708274,151.474447 7.91608168,153.157936 8.13508062,154.820602 L9.40318877,164.626805 C9.68475883,166.194965 10.0435,167.737496 10.3938983,169.244787 L10.9299242,171.615447 C12.3523745,178.935661 14.4797928,185.314018 16.2109272,190.500638 C16.6176396,191.726013 17.0014091,192.869696 17.3497217,193.950909 C18.1151752,196.512183 18.9953423,198.543262 19.6377392,200.02973 L19.9193093,200.686467 L101.307658,196.742842 L101.18043,196.504174 Z M12.0958329,200.438189 C11.4367504,198.884445 10.5357261,196.763666 9.75150137,194.07585 C9.4198744,193.017062 9.04653335,191.870175 8.64816385,190.649605 C6.9295436,185.368479 4.81463955,178.876395 3.43181767,171.40401 L2.92082015,169.068589 C2.57459325,167.519651 2.22002354,165.937075 1.94053918,164.285622 L0.753773494,154.388117 C0.545203075,152.68861 0.334546952,150.968279 0.205233292,149.193488 L0.0216913236,137.519589 L1.24391398,121.846002 L3.52567436,110.590172 C8.61479258,88.5222094 20.8724761,71.6232474 27.409073,63.832105 L33.7725565,56.7009032 L42.6201137,48.4003893 L45.0499591,46.4606128 L116.760641,71.2772591 L109.181191,80.3226088 L105.166211,86.4687052 C101.109516,93.1273768 93.813723,107.376966 92.4309011,125.344327 L91.9345035,134.482581 L92.3745871,143.925176 L94.0097792,156.335902 C94.2642351,157.61734 94.5729193,158.889167 94.8795179,160.143374 C95.0651455,160.904228 95.2507732,161.658675 95.4176295,162.400307 L96.7900229,168.218035 C97.127907,169.409772 97.5241908,170.580686 97.9121317,171.727573 C98.1436449,172.414744 98.3709867,173.093906 98.5899856,173.781077 C100.235606,179.384164 102.333825,184.301682 104.033674,188.288556 C104.5113,189.408212 104.95764,190.44938 105.353924,191.423273 C106.123549,193.4079 106.949488,194.988874 107.556428,196.14377 L109.525333,199.981676 L13.9771381,204.955257 L12.0958329,200.438189 Z"
                    id="Fill-425"
                    fill="#A3E6FF"
                  />
                  <path
                    d="M115.619552,222.178423 C114.603814,220.699964 113.608933,219.003661 112.555652,217.212851 C111.936198,216.157267 111.283373,215.045619 110.561719,213.863493 L109.420839,211.965363 C107.839875,209.338415 106.050341,206.378294 104.609119,203.270807 C100.168655,194.874185 96.2975881,185.953776 93.3984593,177.470657 C93.0605752,176.391046 92.7060055,175.305027 92.3493501,174.217407 C91.2022128,170.719081 90.0258756,167.131055 89.3730502,163.579871 L87.7628866,156.59283 L86.1339516,144.712299 L85.7230679,133.456469 L86.2987222,124.617752 C86.3133222,123.285056 86.5490068,122.026044 86.7784342,120.813483 C86.8889765,120.22242 86.9995189,119.63456 87.0850327,119.032284 L87.9589428,113.871293 C88.4136263,111.817789 88.9788521,109.874809 89.5148781,108.026335 C89.8298194,106.94352 90.1343323,105.892741 90.3992167,104.891617 C90.6390727,103.818413 91.0436993,102.846122 91.4295546,101.909071 L94.3537118,94.6385124 L97.3821543,88.9265031 L29.8825096,70.0300997 L25.0728758,76.7992953 L20.2653276,85.2583872 C19.6521306,86.3283878 19.0159908,87.4400351 18.5550502,88.6365778 C18.1024524,89.7113838 17.6123119,90.816624 17.1096572,91.9555019 C16.081405,94.2797098 15.0093531,96.704831 14.0770433,99.2629014 L12.1727954,105.389776 C11.9767392,106.089762 11.7535688,106.791349 11.5262271,107.497742 C11.0673721,108.923341 10.5918316,110.405004 10.3686612,111.944331 L8.47275613,121.81781 L7.21090509,136.21957 L7.42573263,145.0695 C7.46744671,146.954816 7.5112465,148.846538 7.61553171,150.690207 L8.706355,159.298266 C9.10889591,163.834556 10.1851193,168.447733 11.2383999,172.956792 L12.0351389,176.418276 C14.6443548,186.882818 18.5175075,198.008903 23.287513,208.619208 C24.8497054,212.607684 26.8457243,216.394333 28.6144015,219.758107 L29.7281675,221.885294 C30.4811067,223.288469 31.1798176,224.63558 31.8430716,225.91862 C33.1028369,228.353352 34.1936602,230.466123 35.3282833,232.309791 L39.7833474,239.48264 L119.31542,227.528426 L115.619552,222.178423 Z M27.8718908,233.339747 C26.678868,231.374342 25.5150451,229.094984 24.288651,226.692288 C23.6337399,225.414054 22.9496289,224.068544 22.1966897,222.649351 L21.0870951,220.501341 C19.2913038,217.049468 17.2723421,213.160304 15.7018068,209.062906 C10.9422299,198.306837 7.08159143,186.970917 4.50991817,176.293336 L3.73820762,172.804621 C2.70578404,168.205861 1.64833202,163.499781 1.28124808,158.846559 L0.261338735,150.168021 C0.173739159,148.239457 0.148710709,146.320504 0.121596554,144.411162 L0.000625711257,135.447504 L1.14567731,122.911838 L3.46498037,110.880738 C3.71943628,109.258117 4.23251951,107.71879 4.7268314,106.240331 C4.95834457,105.546752 5.18777203,104.862785 5.39217104,104.157994 L7.39653277,97.9702509 C8.39141366,95.3352943 9.50726541,92.8877479 10.5793174,90.539513 C11.096572,89.4086441 11.5992267,88.3082093 12.0559959,87.2542267 C12.562822,85.9856031 13.2427616,84.8307073 13.8976727,83.7174581 L18.8720772,75.2039052 L25.494188,66.1008908 L104.068922,88.2185087 L100.003884,96.0945462 L97.1965266,103.313847 C96.8419569,104.204446 96.4686159,105.127082 96.2579598,106.120196 C96.0014181,107.14855 95.7052481,108.20894 95.3986496,109.299764 C94.8918235,111.119405 94.3578832,113.033553 93.9386567,115.027791 L93.1314892,120.127914 C93.0543181,120.731791 92.9458615,121.335669 92.8374049,121.945954 C92.6330059,123.099248 92.420264,124.297392 92.420264,125.545192 L91.9363807,134.324644 L92.4390354,145.38986 L94.14097,157.063759 L95.7928477,163.977116 C96.4561017,167.425786 97.6303531,170.93212 98.7754047,174.350356 C99.1424886,175.439578 99.5074869,176.527199 99.845371,177.582783 C102.738243,185.878491 106.590538,194.622703 111.02266,202.907199 C112.443024,205.92018 114.188759,208.790601 115.740523,211.332653 L116.881403,213.21957 C117.607228,214.392086 118.272567,215.511742 118.900364,216.575336 C119.970331,218.377358 120.894298,219.940712 121.841207,221.303842 L128.08372,230.270703 L34.8589998,244.699694 L27.8718908,233.339747 Z"
                    id="Fill-427"
                    fill="url(#linearGradient-middle-5)"
                  />
                </g>
                {data[2] ? (
                  <g
                    id="Group-9"
                    transform="translate(445.878810, 172.520488) scale(-1, 1) rotate(-15.000000) translate(-445.878810, -172.520488) translate(387.378810, 10.020488)"
                  >
                    <path
                      d="M19.5,310.5 L5.5,32.5"
                      id="Line"
                      stroke="#E538FF"
                      strokeWidth="2"
                      strokeLinecap="square"
                    />
                    <g id="Oval-3">
                      <use
                        fill="black"
                        fillOpacity="1"
                        filter="url(#filter-middle-7)"
                        xlinkHref="#path-middle-6"
                      />
                      <use fill="#E538FF" fillRule="evenodd" xlinkHref="#path-middle-6" />
                      <use
                        fill="black"
                        fillOpacity="1"
                        filter="url(#filter-middle-8)"
                        xlinkHref="#path-middle-6"
                      />
                    </g>
                    <g id="Oval-3">
                      <use
                        fill="black"
                        fillOpacity="1"
                        filter="url(#filter-middle-10)"
                        xlinkHref="#path-middle-9"
                      />
                      <use fill="#E538FF" fillRule="evenodd" xlinkHref="#path-middle-9" />
                    </g>
                    <g id="Oval-3">
                      <use
                        fill="black"
                        fillOpacity="1"
                        filter="url(#filter-middle-12)"
                        xlinkHref="#path-middle-11"
                      />
                      <use fill="#E538FF" fillRule="evenodd" xlinkHref="#path-middle-11" />
                    </g>
                    <g id="Oval-3">
                      <use
                        fill="black"
                        fillOpacity="1"
                        filter="url(#filter-middle-14)"
                        xlinkHref="#path-middle-13"
                      />
                      <use fill="#E538FF" fillRule="evenodd" xlinkHref="#path-middle-13" />
                    </g>
                    <text
                      id="效率水平-40分"
                      fontFamily="PingFangSC-Medium, PingFang SC"
                      fontSize="24"
                      fontWeight="400"
                      letterSpacing="0.96"
                      fill="#F29FFF"
                    >
                      <tspan x="17" y="25">
                        {data && data[2] && data[2].indexName}
                      </tspan>
                      <tspan x="17" y="58">
                        {data && data[2] && data[2].index}分
                      </tspan>
                    </text>
                  </g>
                ) : (
                  <g />
                )}
                <g id="Oval-2" className={styles.ball}>
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-middle-17)"
                    xlinkHref="#path-middle-16"
                  />
                  <use
                    fill="url(#linearGradient-middle-15)"
                    fillRule="evenodd"
                    xlinkHref="#path-middle-16"
                  />
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-middle-18)"
                    xlinkHref="#path-middle-16"
                  />
                </g>

                <g id="Group-15" transform="translate(338.307934, 415.239493)" fill="#1F73C7">
                  <path
                    d="M25.4537115,5.50395172 C25.4537115,5.50395172 25.0656353,5.16330599 24.4814786,4.65391447 C23.8952793,4.14452295 23.110957,3.46480857 22.3940373,2.76616943 C20.9213904,1.38150765 19.4528285,0 19.4528285,0 L0,4.79900432 C0,4.79900432 1.82191548,6.54008245 3.64791596,8.28589178 C4.54457616,9.16431617 5.51885159,10.0222387 6.25006878,10.6656806 C6.97720097,11.3122767 7.46331743,11.741238 7.46331743,11.741238 L25.4537115,5.50395172 Z"
                    id="Fill-474"
                  />
                  <path
                    d="M39.4532528,15.320607 C39.4532528,15.320607 38.9742379,14.9835603 38.2579128,14.4796588 C37.5657582,13.9607404 36.6450826,13.2699616 35.7266044,12.5758456 C33.8522937,11.2109734 32.1120192,9.78436498 32.1120192,9.78436498 L13.9995413,17.4563483 C13.9995413,17.4563483 16.1880683,19.2567115 18.5369994,20.9903328 C19.6971824,21.8646519 20.8573654,22.738971 21.7275026,23.3963789 C22.6305996,24.0354327 23.2326642,24.4609124 23.2326642,24.4609124 L39.4532528,15.320607 Z"
                    id="Fill-476"
                  />
                  <path
                    d="M48.3620518,24.3831057 L44.7221711,22.0097554 C43.7960476,21.4290085 42.9364953,20.7947511 42.2668669,20.3383376 L41.1625674,19.56873 L27.9990826,29.1423971 C27.9990826,29.1423971 28.5571063,29.5311355 29.3931628,30.1166039 C30.2390093,30.6942031 31.3315609,31.490566 32.4965577,32.227123 C34.7991396,33.7269923 37.1017215,35.2237139 37.1017215,35.2237139 L48.3620518,24.3831057 Z"
                    id="Fill-478"
                  />
                  <path
                    d="M63.6342787,31.7930817 C63.6342787,31.7930817 61.5226066,30.7219474 59.4109344,29.6491852 C57.3333558,28.5227036 55.2557772,27.3962219 55.2557772,27.3962219 L44.5439951,39.4831096 C44.5439951,39.4831096 47.171333,40.899351 49.7965399,42.3155924 C52.4707565,43.6618356 55.1407113,45.0080789 55.1407113,45.0080789 L63.6342787,31.7930817 Z"
                    id="Fill-480"
                  />
                  <path
                    d="M78.9065056,36.7876681 C78.9065056,36.7876681 78.3711517,36.5776538 77.5702119,36.2641767 C76.767181,35.9491553 75.6922905,35.5368479 74.6362212,35.0751254 C73.5759694,34.6257567 72.5136263,34.1748437 71.716869,33.836659 C70.9180205,33.503107 70.3910315,33.2668409 70.3910315,33.2668409 L63.6342787,46.4946504 C63.6342787,46.4946504 64.30138,46.7911411 65.3093511,47.2080811 C66.3152311,47.6296539 67.6577985,48.1902066 68.9982746,48.7507593 C70.3303859,49.3221217 71.6855006,49.8363477 72.6976542,50.227036 C73.7118991,50.6177243 74.385274,50.8786979 74.385274,50.8786979 L78.9065056,36.7876681 Z"
                    id="Fill-482"
                  />
                  <path
                    d="M94.1787325,42.1840485 C94.1787325,42.1840485 91.8069094,41.5168757 89.4397142,40.7159339 C88.2526457,40.3330202 87.0655772,39.9484344 86.1723833,39.6591589 L84.6914401,39.1374599 L81.4518768,54.9740353 C81.4518768,54.9740353 82.1969763,55.2315405 83.3169396,55.6144543 C84.4369029,55.9689421 85.934044,56.4421498 87.4242431,56.9153576 C90.4000134,57.8901991 93.3780976,58.7061899 93.3780976,58.7061899 L94.1787325,42.1840485 Z"
                    id="Fill-484"
                  />
                  <path
                    d="M106.810899,46.2509306 C106.810899,46.2509306 106.344013,46.1339327 105.644622,45.9534217 C104.939605,45.7478397 103.998334,45.4754018 103.057062,45.1996211 C101.168894,44.6848305 99.2694748,44.0296424 99.2694748,44.0296424 L100.011992,60.9458634 C100.011992,60.9458634 102.395172,61.7297492 104.755851,62.3498379 C105.935253,62.6757605 107.112781,63.0000118 107.994051,63.2440359 C108.869696,63.4579749 109.450959,63.5983723 109.450959,63.5983723 L106.810899,46.2509306 Z"
                    id="Fill-486"
                  />
                  <path
                    d="M121.79022,49.2034688 C121.79022,49.2034688 121.270229,49.144932 120.475861,49.0309394 C119.683705,48.9200277 118.62381,48.7752263 117.566128,48.6288844 C116.508445,48.497947 115.428636,48.3069324 114.620991,48.1698331 C113.811134,48.0327339 113.269016,47.9433884 113.269016,47.9433884 L117.937866,64.1287974 C117.937866,64.1287974 118.610534,64.2350878 119.619536,64.3906723 C120.626326,64.5493377 121.967238,64.7665398 123.286022,64.9144221 C124.604806,65.0792492 125.921377,65.2425359 126.908252,65.3642307 C127.892915,65.4905468 128.541243,65.5552453 128.541243,65.5552453 L121.79022,49.2034688 Z"
                    id="Fill-488"
                  />
                  <path
                    d="M135.846339,49.3876786 C135.846339,49.3876786 134.048068,49.3068012 132.243687,49.2259238 C130.396538,49.0738743 128.541243,48.9218249 128.541243,48.9218249 L136.05814,66.129295 C136.05814,66.129295 138.353329,66.2732567 140.640372,66.418836 C142.868355,66.4754501 145.086156,66.5336818 145.086156,66.5336818 L135.846339,49.3876786 Z"
                    id="Fill-490"
                  />
                  <path
                    d="M148.08786,48.9218249 C148.08786,48.9218249 147.673585,48.9562007 147.049019,49.0102197 C146.420246,49.0544172 145.60852,49.1591814 144.731604,49.17064 C143.005109,49.2393916 141.268099,49.3081431 141.268099,49.3081431 L151.999286,66.5336818 C151.999286,66.5336818 154.131644,66.4010895 156.253488,66.2684973 C157.32177,66.221026 158.320656,66.0769751 159.08822,66.0033127 C159.851579,65.9181917 160.358382,65.8625357 160.358382,65.8625357 L148.08786,48.9218249 Z"
                    id="Fill-492"
                  />
                  <path
                    d="M157.404241,47.9433884 C157.404241,47.9433884 156.001551,48.3138068 154.486313,48.5645266 C153.738073,48.7052532 152.989833,48.8475974 152.427089,48.952738 C151.839335,49.0319978 151.449583,49.0853769 151.449583,49.0853769 L164.60527,65.5552453 C164.60527,65.5552453 165.080476,65.4759855 165.789115,65.3579045 C166.474829,65.2090902 167.383555,65.0101318 168.290197,64.812791 C170.120154,64.4488429 171.812553,63.9474031 171.812553,63.9474031 L157.404241,47.9433884 Z"
                    id="Fill-494"
                  />
                  <path
                    d="M166.511235,44.0296424 C166.511235,44.0296424 165.321632,44.5100995 164.130033,44.993825 C163.545211,45.2520298 162.904502,45.4546716 162.427463,45.6082871 C161.950424,45.765171 161.631068,45.8697603 161.631068,45.8697603 L176.189733,61.6414993 C176.189733,61.6414993 176.570965,61.4993233 177.139818,61.2885105 C177.712664,61.0809661 178.471136,60.8015166 179.169728,60.4648698 C180.586873,59.8193577 181.994037,59.1803825 181.994037,59.1803825 L166.511235,44.0296424 Z"
                    id="Fill-496"
                  />
                </g>
                <g id="Group-10" transform="translate(342.774045, 344.195053)" fill="#FFFFFF">
                  <path
                    d="M30.9508084,3.93618989 C31.8422955,4.17083353 32.727307,4.41356832 33.4115719,4.61584732 C34.0807269,4.81327162 34.5275498,4.94273017 34.5275498,4.94273017 C34.5275498,4.94273017 34.2857906,4.98156774 33.9209932,5.03982409 C33.5497201,5.09160751 33.0813116,5.18384674 32.6236959,5.28579535 C31.6955132,5.48160142 30.7630133,5.67740749 30.7630133,5.67740749 C30.719842,5.68711688 30.6723536,5.67255279 30.6227066,5.63371522 L27.304993,2.99276065 C27.304993,2.99276065 29.1591999,3.46042969 30.9508084,3.93618989 M30.3356175,2.80828221 C28.5332162,2.33252201 26.6682164,1.86970767 26.6682164,1.86970767 C26.6682164,1.86970767 27.6762661,1.66419221 28.6821571,1.46191321 C29.7053167,1.279053 30.7651719,1.13017566 30.7651719,1.13017566 C30.8169774,1.1220845 30.8623073,1.13826682 30.9076371,1.17548615 L33.9598473,3.83747774 C33.9598473,3.83747774 32.1639217,3.30507942 30.3356175,2.80828221 M29.4959359,0.0249232241 C29.4959359,0.0249232241 29.1937369,0.0702337192 28.7361212,0.138199462 C28.2849812,0.2110199 27.6589975,0.288695035 27.086978,0.414917128 C25.9191946,0.649560764 24.747094,0.884204399 24.747094,0.884204399 C24.3304911,0.958643069 24.1578059,1.17063146 24.1707573,1.46514968 C24.1880258,1.76452259 24.3995651,2.06713197 24.7988996,2.37783251 L29.4031177,5.94603399 C29.8046107,6.25673453 30.2794948,6.49461463 30.8212945,6.66129252 C31.3652528,6.83120688 31.7883314,6.85709859 32.157446,6.78751462 C32.157446,6.78751462 33.1870812,6.56743507 34.2145579,6.34897375 C34.7131863,6.22922459 35.2679374,6.15802238 35.6672718,6.08843841 C36.0687648,6.02370913 36.3364268,5.98001687 36.3364268,5.98001687 C36.7076999,5.91852405 36.8890193,5.75022793 36.8911779,5.4702738 C36.8911779,5.1919379 36.7184927,4.89418321 36.3666467,4.57862798 L32.325814,0.958643069 C31.9761265,0.6463243 31.5249866,0.395498345 30.9659184,0.207783436 C30.4111673,0.0216867601 29.916856,-0.0398060546 29.4959359,0.0249232241"
                    id="Fill-498"
                  />
                  <path
                    d="M24.6859197,6.44241591 C26.4700012,6.81827473 28.226472,7.23378839 28.226472,7.23378839 C28.226472,7.23378839 27.3960245,7.5337858 26.5613292,7.83378321 C25.7754838,8.17171132 24.9875144,8.51308769 24.9875144,8.51308769 C24.9492841,8.52860479 24.9025582,8.51826005 24.8494605,8.47860522 L21.1283761,5.75966318 C21.1283761,5.75966318 22.9358206,6.09069481 24.6859197,6.44241591 M23.8469766,5.20621969 C22.9252011,5.00104904 22.0586472,4.84760209 21.3768732,4.71656874 C20.699347,4.59243188 20.2469549,4.50794985 20.2469549,4.50794985 C20.2469549,4.50794985 20.4614695,4.41829546 20.7843033,4.28553798 C21.1135088,4.15622875 21.5149271,3.9579546 21.9843105,3.81140414 C22.8933425,3.49761375 23.7981267,3.18554748 23.7981267,3.18554748 C23.8427288,3.17175449 23.8894547,3.18382336 23.9383046,3.22347819 L27.4172636,6.00104041 C27.4172636,6.00104041 25.6607928,5.59414737 23.8469766,5.20621969 M22.3517463,2.03210916 C22.3517463,2.03210916 21.2982887,2.39072676 20.2405832,2.75279259 C19.2423471,3.16140976 18.2356154,3.57175104 18.2356154,3.57175104 C17.8894186,3.7183015 17.7449929,3.95450636 17.8363209,4.29933097 C17.9340206,4.64932794 18.2080046,4.98208369 18.6561489,5.30104645 L23.7960028,8.9630838 C24.2441471,9.28204656 24.7368934,9.50618256 25.2721179,9.63894003 C25.8115902,9.77514575 26.2448671,9.78721462 26.5464619,9.65445714 C26.5464619,9.65445714 27.4215114,9.27687419 28.2923131,8.90273949 C29.2162125,8.56998375 30.1379879,8.24067624 30.1379879,8.24067624 C30.4565739,8.12688412 30.5712649,7.90274813 30.5181672,7.59240598 C30.4586978,7.27516734 30.2293159,6.95275633 29.8278976,6.62172471 L25.2062768,2.8355505 C24.8048585,2.506243 24.3227317,2.25796928 23.7514008,2.09245347 C23.1758221,1.91831704 22.7170583,1.90969643 22.3517463,2.03210916"
                    id="Fill-500"
                  />
                  <path
                    d="M20.2869155,6.13592353 C20.2869155,6.13592353 19.0224759,5.81099604 17.7580362,5.48786373 C16.4672997,5.15934588 15.20286,4.87391234 15.20286,4.87391234 L13.9932054,5.59377932 L23.2233959,11.6973896 L24.1700821,11.1067756 L17.4972592,6.57933287 L18.816484,6.88451338 L20.2869155,6.13592353 Z"
                    id="Fill-502"
                  />
                  <path
                    d="M15.9279202,11.3209032 C16.7666924,11.3673687 17.6182053,11.4330612 18.2743587,11.4987536 C18.9198948,11.5596394 19.3488365,11.5996958 19.3488365,11.5996958 C19.3488365,11.5996958 19.1874525,11.7086492 18.9453765,11.8720793 C18.6948066,12.0291003 18.3847794,12.2550184 18.1023574,12.496959 C17.5141551,12.9696245 16.9217059,13.4438922 16.9217059,13.4438922 C16.8941008,13.4663238 16.8495078,13.461517 16.7858036,13.4278697 L12.4878927,11.1366438 C12.4878927,11.1366438 14.2312647,11.2135521 15.9279202,11.3209032 M14.7132932,10.1336317 C13.0060203,10.0294851 11.2541544,9.95738354 11.2541544,9.95738354 C11.2541544,9.95738354 11.9018139,9.45267296 12.5473499,8.95116689 C13.228985,8.47049014 13.9467192,8.01544949 13.9467192,8.01544949 C13.9806947,7.99301791 14.0274112,7.99942693 14.0868684,8.0330743 L18.1894198,10.4268445 C18.1894198,10.4268445 16.4587887,10.2570054 14.7132932,10.1336317 M12.2373228,7.01884637 C12.2373228,7.01884637 12.0313458,7.1518336 11.7234421,7.35211558 C11.4240323,7.55880658 10.9823498,7.81036074 10.6213592,8.10838033 C9.86752602,8.68999919 9.11369283,9.27482256 9.11369283,9.27482256 C8.84188818,9.47510454 8.85038208,9.77312412 9.05211209,10.1208136 C9.26233599,10.4749122 9.62757348,10.7825453 10.1414541,11.050122 L16.0510817,14.1168397 C16.5628389,14.3828141 17.0852134,14.5430397 17.6139584,14.6007209 C18.1469503,14.6632089 18.4867061,14.5830961 18.7202882,14.4036434 C18.7202882,14.4036434 19.3721947,13.8765013 20.0219777,13.3525636 C20.3277579,13.0801801 20.7142301,12.8558643 20.9711705,12.6700026 C21.2366047,12.4889477 21.4149765,12.3671763 21.4149765,12.3671763 C21.6612994,12.1989394 21.6910281,11.9505898 21.5084093,11.6189228 C21.3236671,11.2840514 21.0178869,10.987634 20.5379818,10.699228 L15.053049,7.41460356 C14.5816378,7.13260653 14.0465224,6.93552907 13.4965427,6.85862079 C12.9444395,6.78011025 12.5218683,6.83298469 12.2373228,7.01884637"
                    id="Fill-504"
                  />
                  <path
                    d="M12.2136781,16.1906822 C13.0136666,16.1519114 13.876357,16.1519114 14.4968886,16.1441572 L15.5368737,16.1410556 C15.5368737,16.1410556 15.4136322,16.2728762 15.2320132,16.4713827 C15.0547185,16.6745416 14.7866142,16.9288779 14.5898603,17.2157818 C14.1660826,17.7787336 13.7401427,18.344787 13.7401427,18.344787 C13.7185214,18.3711512 13.6731166,18.3711512 13.6060906,18.3416854 L8.91426592,16.3519686 C8.91426592,16.3519686 10.5812691,16.2527154 12.2136781,16.1906822 M10.745591,15.0570244 C9.08939855,15.115956 7.42023327,15.2229634 7.42023327,15.2229634 C7.42023327,15.2229634 7.89590213,14.6212408 8.36940886,14.021069 C8.90777953,13.4519139 9.44398806,12.8858604 9.44398806,12.8858604 C9.46993363,12.8579454 9.51533839,12.8594963 9.58020232,12.8905129 L14.1163535,15.0136011 C14.1163535,15.0136011 12.4515125,15.0182536 10.745591,15.0570244 M7.55212328,12.0003357 C7.55212328,12.0003357 6.93159163,12.659439 6.30889785,13.3200932 C5.75971653,14.0179673 5.20621095,14.7173923 5.20621095,14.7173923 C5.00513275,14.959322 5.06351029,15.263285 5.36620865,15.6184254 C5.66242062,15.9720149 6.0905226,16.2620204 6.65267671,16.4930943 L13.0828548,19.1419144 C13.6406847,19.3714374 14.1768932,19.4877498 14.6914804,19.495504 C15.1995813,19.5001565 15.5282252,19.3931491 15.7011957,19.1775835 C15.7011957,19.1775835 16.1703782,18.5494968 16.6352364,17.9260626 C17.1671206,17.3320941 17.6968428,16.7412273 17.6968428,16.7412273 C17.8849482,16.5396193 17.8308949,16.2651221 17.584412,15.9394475 C17.3400911,15.6137729 16.9552318,15.3222166 16.4276718,15.0678802 L10.3434346,12.1414613 C9.81587462,11.887125 9.27101756,11.739796 8.70670133,11.7041269 C8.14454722,11.6684577 7.77266066,11.7754651 7.55212328,12.0003357"
                    id="Fill-506"
                  />
                  <path
                    d="M4.01038298,16.0108076 C4.01038298,16.0108076 3.61399103,16.7345859 3.21759909,17.4612306 C2.90135196,18.2194063 2.58510483,18.9804484 2.58510483,18.9804484 C2.47680102,19.2470281 2.5786066,19.5365394 2.95117171,19.866181 C3.31290644,20.1915229 3.78727713,20.4437704 4.37644986,20.6257899 L6.8501089,21.3882652 C7.43711555,21.5702847 7.96347207,21.6319134 8.42917846,21.5774508 C8.88405447,21.5186886 9.18947121,21.3767994 9.28261249,21.1274184 C9.28261249,21.1274184 9.5642024,20.4165391 9.84362623,19.7085263 C10.2010288,19.0277448 10.5562653,18.3512629 10.5562653,18.3512629 C10.5714278,18.3225984 10.6082511,18.319732 10.6689013,18.3397971 L12.7613309,19.0908067 C12.8306453,19.1151715 12.8588043,19.1424027 12.8436418,19.1710672 C12.8436418,19.1710672 12.7310058,19.3874841 12.564218,19.712826 C12.4060944,20.0424676 12.139667,20.4652688 11.9902078,20.9282002 C11.8147556,21.3839656 11.6371373,21.8411641 11.5050067,22.1851379 C11.3772082,22.530545 11.3317206,22.7741931 11.3317206,22.7741931 L13.3418393,23.3947792 C13.3418393,23.3947792 13.3591679,23.323118 13.3938251,23.1955611 C13.4198181,23.0680041 13.4718039,22.8902843 13.5584469,22.6839 C13.7165705,22.2682649 13.928846,21.7150404 14.1389554,21.163249 C14.4075488,20.6343892 14.6783083,20.1069627 14.8797534,19.712826 C14.9707286,19.5121746 15.0811985,19.3573864 15.152679,19.2484613 C15.2241595,19.1381031 15.265315,19.0750412 15.265315,19.0750412 L11.145438,17.552957 C10.5822582,17.3451395 10.0450713,17.246247 9.53387733,17.2605792 C9.01401904,17.272045 8.70427014,17.4039017 8.57863772,17.6446833 C8.57863772,17.6446833 8.21040476,18.3354975 7.84217181,19.029178 C7.55191759,19.7529563 7.2594973,20.479601 7.2594973,20.479601 C7.24650085,20.5096987 7.21184363,20.5168649 7.14902742,20.4967997 L4.69053091,19.7099596 C4.6190504,19.687028 4.58872533,19.6583635 4.60172179,19.6268326 C4.60172179,19.6268326 4.90930461,18.8815559 5.21255528,18.1377125 C5.59811685,17.4254 5.98151234,16.715954 5.98151234,16.715954 C5.99667487,16.6858563 6.03999639,16.6829898 6.11147691,16.7073547 L6.92158941,16.9982992 C6.92158941,16.9982992 7.03855753,16.7890484 7.15552565,16.5812309 C7.29198845,16.3805795 7.43061732,16.1799281 7.43061732,16.1799281 L6.62483697,15.8832507 C6.05949108,15.6739999 5.51580595,15.5779739 4.99594766,15.5994723 C4.46525899,15.6181042 4.14684578,15.7599934 4.01038298,16.0108076"
                    id="Fill-508"
                  />
                  <path
                    d="M5.87197117,26.8827321 C7.090851,26.5028761 8.30026748,26.1701222 8.30026748,26.1701222 C8.30026748,26.1701222 8.21131196,26.8766544 8.12235645,27.5831867 C8.09396639,28.3140297 8.06557633,29.0463922 8.06557633,29.0463922 C8.06368366,29.081339 8.03150826,29.0904555 7.96715746,29.0691836 L3.54020107,27.727532 C3.54020107,27.727532 4.70987146,27.2808213 5.87197117,26.8827321 M4.25941587,25.8859898 C3.63104925,26.0743984 3.05378474,26.2886373 2.61468517,26.4527351 L1.880329,26.7307897 C1.880329,26.7307897 1.88979235,26.534784 1.90493372,26.2384963 C1.92196775,25.943728 1.93143111,25.5471582 1.99956725,25.170341 C2.1055568,24.4091095 2.21154635,23.6509168 2.21154635,23.6509168 C2.21722436,23.6144506 2.25129243,23.6068535 2.31564323,23.6281254 L6.6990682,25.1612245 C6.6990682,25.1612245 5.48586638,25.5000561 4.25941587,25.8859898 M0.379441262,23.0112392 C0.379441262,23.0112392 0.252632336,23.8909858 0.123930739,24.7737713 C0.033082553,25.671751 0.000907153798,26.5940415 0.000907153798,26.5940415 C-0.0142342105,26.9131206 0.159891479,27.2443551 0.544103599,27.5862255 C0.939671742,27.9326543 1.39959068,28.1803204 1.92764576,28.3322628 L7.95769411,30.0796007 C8.47817851,30.2315431 8.9286341,30.2573733 9.3071682,30.163169 C9.69705834,30.073523 9.90335943,29.8911921 9.91282278,29.6070598 C9.91282278,29.6070598 9.9241788,28.791129 9.98474426,27.9919118 C10.0812705,27.2094083 10.1740113,26.4284243 10.1740113,26.4284243 C10.198616,26.1534085 10.0661291,25.8662373 9.72355572,25.5410805 C9.38098236,25.2159238 8.95513148,24.9576216 8.44221777,24.7722519 L2.52572966,22.6253055 C2.01092327,22.4384163 1.53775563,22.3776393 1.10622675,22.4490522 C0.676590537,22.5204652 0.415402002,22.7027961 0.379441262,23.0112392"
                    id="Fill-510"
                  />
                  <path
                    d="M7.3578967,34.6641205 C8.61091134,34.1035878 9.86621252,33.5969525 9.86621252,33.5969525 C9.86621252,33.5969525 9.98053867,34.386934 10.0971513,35.1799954 C10.2549214,35.9822963 10.462995,36.7984566 10.462995,36.7984566 C10.4721411,36.8369547 10.4401298,36.850814 10.3601015,36.8369547 L4.98448574,35.8621822 C4.98448574,35.8621822 6.14603946,35.2308129 7.3578967,34.6641205 M5.24514937,33.7463252 C4.60492291,34.0281315 3.98527515,34.325337 3.55540882,34.5609455 C3.11182334,34.7950141 2.81457534,34.9520865 2.81457534,34.9520865 C2.81457534,34.9520865 2.76655835,34.7334171 2.69338961,34.4038732 C2.60650174,34.0727893 2.533333,33.6400704 2.48760254,33.2150511 C2.37327638,32.3588528 2.26123675,31.5072743 2.26123675,31.5072743 C2.25666371,31.4656963 2.29324808,31.4533769 2.37098986,31.4703161 L7.76261128,32.6637579 C7.76261128,32.6637579 6.50273706,33.1780929 5.24514937,33.7463252 M0.00443847227,31.0083386 C0.00443847227,31.0083386 0.132483765,31.9985103 0.260529057,32.991762 C0.303972996,33.484538 0.450310473,33.9988729 0.523479211,34.3792344 C0.608080565,34.7611358 0.662957119,35.0167633 0.662957119,35.0167633 C0.740698904,35.372486 1.04480647,35.7189691 1.5729933,36.0515929 C2.09432057,36.3842167 2.70939528,36.6090458 3.34276217,36.7153006 L10.6413438,37.9503205 C11.2769973,38.0581152 11.7708862,38.0319365 12.193893,37.8887235 C12.6077537,37.7455104 12.7792429,37.5191415 12.7037877,37.2049968 C12.7037877,37.2049968 12.6511976,36.9801677 12.5688828,36.6429241 C12.4980006,36.3072205 12.3562361,35.8514027 12.3105057,35.4171438 C12.1778873,34.5393866 12.045269,33.6662491 12.045269,33.6662491 C11.9995385,33.3628839 11.7731728,33.0610586 11.2838568,32.7392143 C10.803687,32.4189099 10.2457753,32.1848413 9.61469498,32.0370085 L2.31611331,30.3384712 C1.68045989,30.1906384 1.12940783,30.178319 0.667530165,30.3061328 C0.210225549,30.4370264 -0.0367189432,30.6664752 0.00443847227,31.0083386"
                    id="Fill-512"
                  />
                  <path
                    d="M6.83911654,43.8675832 L9.02768054,44.0929754 C9.31948907,44.1231335 9.55843374,44.1151971 9.74239999,44.0739281 C10.2541222,44.3628111 10.7806463,44.5310616 11.3240868,44.5850287 L13.6691279,44.8215318 C14.2400576,44.8786735 14.6714267,44.8024846 14.9695789,44.6024887 C15.2656166,44.4009055 15.3417406,44.1310698 15.1873781,43.7882197 C15.1873781,43.7882197 15.0774212,43.5406058 14.9146005,43.1707721 C14.7390925,42.7993512 14.5318661,42.3088851 14.3690454,41.8231808 C14.0138003,40.8517722 13.6564405,39.8819509 13.6564405,39.8819509 C13.559171,39.5502117 13.2715916,39.2343452 12.7894732,38.926415 C12.3073547,38.6168976 11.774487,38.4105526 11.195099,38.3073802 L10.535358,38.1915095 L10.8758013,39.3708503 L11.5334277,39.4771974 C11.603208,39.4883082 11.6454991,39.5168791 11.6581865,39.5565608 C11.6581865,39.5565608 12.0197753,40.5501911 12.3813641,41.5454088 C12.5484139,42.0438112 12.7577548,42.5469754 12.937492,42.9263327 C13.1045418,43.30569 13.2166132,43.5612403 13.2166132,43.5612403 C13.2314151,43.5977475 13.2039259,43.6120329 13.1362601,43.6040965 L10.7764172,43.3326736 C10.7045223,43.3247372 10.6622312,43.3025154 10.6453148,43.264421 C10.6453148,43.264421 10.5268997,42.992998 10.3513917,42.5898317 C10.1610818,42.1834909 9.94539723,41.6501685 9.76566009,41.1200207 C9.57323563,40.5898729 9.38292571,40.059725 9.239136,39.6644951 C9.08688807,39.2660906 9.01710777,39.0057785 9.01710777,39.0057785 L6.99982269,38.6756266 C6.99982269,38.6756266 7.06537388,38.9248278 7.20916359,39.304185 C7.34660964,39.6835423 7.52846134,40.1930556 7.71242758,40.6993944 C8.04441266,41.7152465 8.53076021,42.7517331 8.53076021,42.7517331 C8.55190576,42.7961767 8.53076021,42.8152239 8.46943813,42.8088748 L6.27030135,42.55015 C6.1984065,42.5406264 6.15400085,42.5120555 6.1328553,42.4660247 C6.1328553,42.4660247 6.02289847,42.2104744 5.85796321,41.8247681 C5.67611151,41.4390617 5.50060348,40.932723 5.3229809,40.4279714 C4.96562117,39.4184684 4.61249055,38.4137272 4.61249055,38.4137272 C4.59980323,38.3692837 4.62940699,38.3518237 4.70130185,38.3629346 L5.50694715,38.4946779 L5.15381653,37.2391482 L4.34605667,37.0978813 C3.75609594,36.9931215 3.28877938,37.0343905 2.94199242,37.22645 C2.59520547,37.4200968 2.47679041,37.7073925 2.58040359,38.0835753 C2.58040359,38.0835753 2.93776332,39.1121255 3.29935215,40.142263 C3.48120385,40.6597127 3.66094099,41.1787496 3.84279268,41.5723923 C4.01195705,41.966035 4.12402844,42.2295217 4.12402844,42.2295217 C4.29107825,42.6199898 4.63997976,42.9771253 5.17284752,43.2993409 C5.70571528,43.6199692 6.25972858,43.807267 6.83911654,43.8675832"
                    id="Fill-514"
                  />
                  <path
                    d="M11.6743151,52.5300741 C11.857977,52.1493831 12.1614184,51.6546524 12.4688524,51.1699841 C13.0777315,50.2040015 13.7125628,49.3067782 13.7125628,49.3067782 C13.7125628,49.3067782 14.217633,50.2727607 14.7246996,51.2404203 C15.2058139,52.2114341 15.8107003,53.1858019 15.8107003,53.1858019 C15.8366526,53.2327594 15.820682,53.2562381 15.7567996,53.2562381 L11.3489141,53.1707084 C11.3489141,53.1707084 11.4786752,52.9141193 11.6743151,52.5300741 M11.299006,49.1541663 C11.0674323,49.5097016 10.7580019,49.9876617 10.4485716,50.4672989 C10.1491228,50.9637066 9.84767776,51.4651454 9.62209304,51.8408053 C9.42246055,52.2282046 9.28870678,52.4898249 9.28870678,52.4898249 C9.28870678,52.4898249 9.13698608,52.2231734 8.91140137,51.8273889 C8.70777622,51.4332814 8.43427971,50.9050097 8.16277952,50.3800921 C7.89127933,49.8534975 7.62177546,49.3285798 7.41815032,48.9344724 C7.21851782,48.542042 7.1127126,48.2837758 7.1127126,48.2837758 C7.09075303,48.2317871 7.1127126,48.2099855 7.17859133,48.2166937 L11.7262195,48.5822912 C11.7262195,48.5822912 11.5545356,48.8086934 11.299006,49.1541663 M5.20622229,48.132841 C5.20622229,48.132841 5.32600179,48.4347106 5.56356445,48.890869 C5.7991308,49.3487045 6.11255381,49.9574747 6.42597683,50.5679221 C7.02687063,51.7921708 7.76551086,53.0231277 7.76551086,53.0231277 C8.01305515,53.4524533 8.42030543,53.8230821 8.98127274,54.1283057 C9.54423637,54.4352064 10.0832441,54.5844641 10.6022886,54.5844641 L16.5393589,54.5878182 C17.0504181,54.5878182 17.4157456,54.4502999 17.6413303,54.1819714 C17.8629224,53.91532 17.866915,53.5983569 17.6453229,53.2226971 C17.6453229,53.2226971 16.9845394,52.1443519 16.4495243,51.072715 C16.1680425,50.5377351 15.8865607,50.0027552 15.6749502,49.6019395 C15.4593471,49.2028009 15.3535419,48.9361494 15.3535419,48.9361494 C15.1838543,48.5688748 14.8424827,48.2368183 14.3234383,47.9383029 C13.8043938,47.6364333 13.277364,47.4586657 12.7423489,47.405 L6.53976735,46.8029379 C5.99676697,46.7509493 5.591513,46.8498954 5.32200914,47.1098386 C5.05649792,47.3681048 5.01657142,47.7119007 5.20622229,48.132841"
                    id="Fill-516"
                  />
                  <path
                    d="M19.8171153,60.0916803 C19.9529786,59.6752176 20.1325945,59.122103 20.3122103,58.5706153 C20.5102483,58.0386492 20.7059835,57.5099367 20.8510579,57.1129957 C20.9938294,56.7241887 21.136601,56.4687799 21.136601,56.4687799 C21.136601,56.4687799 21.3024002,56.7095474 21.6178794,57.0658183 C21.9218446,57.4220891 22.3294345,57.9003705 22.7370243,58.3770252 C23.1423113,58.8553066 23.5522039,59.333588 23.8561692,59.6931125 C24.1854649,60.0510101 24.4065306,60.2885241 24.4065306,60.2885241 C24.4479804,60.3340747 24.4364665,60.3617304 24.3696863,60.3682376 L19.6513161,60.8009684 C19.6513161,60.8009684 19.7180963,60.5179039 19.8171153,60.0916803 M17.9610849,58.0711853 C17.5834311,59.1676536 17.2610437,60.3291942 17.2610437,60.3291942 C17.2610437,60.3291942 16.3790838,59.2896642 15.4994267,58.2501342 C14.5921364,57.2138577 13.8184066,56.1743277 13.8184066,56.1743277 C13.7792595,56.1255235 13.7953789,56.0978677 13.8690674,56.0962409 L18.8200171,55.9416942 C18.8200171,55.9416942 18.2995917,56.9763438 17.9610849,58.0711853 M11.7413105,56.2410268 L12.319305,56.9958655 C12.6693257,57.448118 13.1989621,58.0500368 13.7009654,58.6535824 C14.2121798,59.2571281 14.7233941,59.8623005 15.1056535,60.3178066 C15.4994267,60.7700591 15.7872726,61.0710185 15.7872726,61.0710185 C16.1741375,61.489108 16.712985,61.8291108 17.3969069,62.0828928 C18.0831316,62.3366748 18.702576,62.4294028 19.2552401,62.3675841 L25.5786391,61.6696837 C26.124395,61.6094918 26.4744156,61.4207821 26.6356093,61.1165691 C26.796803,60.8091025 26.7116006,60.4772337 26.3684883,60.111202 C26.3684883,60.111202 26.1105783,59.849286 25.7651633,59.4507182 C25.4266565,59.0537771 24.9753141,58.5266915 24.5239717,57.997979 C24.0795376,57.4708933 23.6074703,56.9438077 23.2965967,56.5468666 L22.7853824,55.8880096 C22.502142,55.5203511 22.0415885,55.2145112 21.4060248,54.9607293 C20.7681582,54.7053205 20.1533194,54.5800563 19.5684165,54.5881903 L12.7867668,54.6874256 C12.1926528,54.6971864 11.7873658,54.8484795 11.5732084,55.1526926 C11.3636566,55.4569056 11.418923,55.8213105 11.7413105,56.2410268"
                    id="Fill-518"
                  />
                  <path
                    d="M22.8676398,68.089721 C22.8676398,68.089721 22.8357107,67.2574001 22.8527396,66.4440741 C22.9016976,65.6411089 22.9506556,64.8381437 22.9506556,64.8381437 C22.9506556,64.8381437 23.5424087,65.515052 24.1362904,66.1902335 C24.7684871,66.8602346 25.3964266,67.5319624 25.3964266,67.5319624 L22.8676398,68.089721 Z M26.7353213,68.9427636 C26.7353213,68.9427636 26.9928829,69.2138723 27.2504445,69.4884346 C27.5122633,69.7595433 27.791111,70.0254715 27.791111,70.0254715 L29.3662812,69.6041306 C29.3662812,69.6041306 29.0916907,69.3451096 28.8383863,69.0791814 C28.5872105,68.8132531 28.3339061,68.5490517 28.3339061,68.5490517 L30.53063,68.0051075 L29.2662366,66.677193 L27.0290692,67.1710598 C27.0290692,67.1710598 25.8711062,65.9881971 24.8472456,64.7828859 C24.3214793,64.1836839 23.7957131,63.5862088 23.3997919,63.137239 C22.9974849,62.689996 22.7697238,62.386078 22.7697238,62.386078 L21.1455956,62.6105629 C21.1455956,62.6105629 21.0370366,62.9731923 20.9476351,63.5223169 C20.8582335,64.0852559 20.7390314,64.8364169 20.6198294,65.5910315 C20.3707822,67.1347968 20.3537533,68.7579953 20.3537533,68.7579953 L21.7011624,70.1843377 L26.7353213,68.9427636 Z"
                    id="Fill-520"
                  />
                  <path
                    d="M33.3879599,75.9237897 C33.2529923,75.3958009 33.1270225,74.683016 33.0190484,73.9825509 C32.791853,72.5869005 32.6366402,71.2598886 32.6366402,71.2598886 C32.6366402,71.2598886 33.7658692,72.2542675 34.8973477,73.2486464 C36.0040821,74.2553451 37.2187905,75.2198046 37.2187905,75.2198046 C37.275027,75.2655637 37.2772765,75.3007629 37.2255389,75.3218825 L33.6016586,76.8196107 C33.6016586,76.8196107 33.5161791,76.4623383 33.3879599,75.9237897 M30.5648874,71.951554 C30.6436185,72.4707429 30.7493432,73.1659282 30.8573173,73.8593535 C30.9855365,74.5756583 31.1137557,75.295483 31.2104825,75.8340316 C31.3387017,76.3778601 31.4241812,76.7421723 31.4241812,76.7421723 C31.4241812,76.7421723 31.1047579,76.474658 30.6233734,76.0751465 C30.1644835,75.6685951 29.5503809,75.1282866 28.9362783,74.5862181 C28.3244251,74.0459095 27.712572,73.503841 27.2514326,73.0990496 C26.7857944,72.6942582 26.5068613,72.4161841 26.5068613,72.4161841 C26.4528743,72.3633852 26.4528743,72.326426 26.5091108,72.3088264 L30.4794079,71.0979721 C30.4794079,71.0979721 30.4884058,71.4411648 30.5648874,71.951554 M24.8422608,72.9265733 C24.8422608,72.9265733 25.1684326,73.2486464 25.7105524,73.7185565 C26.2436745,74.1919864 26.9545039,74.8202931 27.6675828,75.4485998 C29.066747,76.7192928 30.587382,77.9459868 30.587382,77.9459868 C31.1070073,78.3771777 31.7143616,78.6763713 32.395948,78.8418078 C33.0775344,79.0090043 33.6264027,78.9931646 34.0470517,78.8048486 L38.8429008,76.6524142 C39.2568014,76.4676182 39.450255,76.1701845 39.4345088,75.7636331 C39.4165131,75.3606016 39.1825692,74.9734099 38.7259288,74.5985378 C38.7259288,74.5985378 37.391999,73.5302405 36.1660432,72.4179441 C35.5406933,71.8670757 34.9153433,71.3197274 34.4474556,70.9061361 C33.9705701,70.4978248 33.6848887,70.2144708 33.6848887,70.2144708 C33.2732374,69.8255191 32.7491132,69.545685 32.1057676,69.3661688 C31.4601726,69.1884126 30.8978075,69.1602532 30.4254209,69.2904904 L24.9322392,70.816378 C24.4508548,70.9483752 24.1944163,71.2194095 24.1719217,71.6330007 C24.1471776,72.0501119 24.3721237,72.4813027 24.8422608,72.9265733"
                    id="Fill-522"
                  />
                  <path
                    d="M43.9944931,83.634694 C43.7711712,83.1035348 43.4749279,82.3942019 43.1786846,81.6865499 C42.9097868,80.9973877 42.6408891,80.3099063 42.4403551,79.7955559 C42.2489364,79.2879291 42.1509482,78.9450289 42.1509482,78.9450289 C42.1509482,78.9450289 42.4563067,79.1786717 42.9439688,79.5114866 C43.4339096,79.8426207 44.0856449,80.2863739 44.739659,80.7301272 C45.3913943,81.1738805 46.0431295,81.6176337 46.5330704,81.9504487 C47.0275689,82.2799018 47.3693881,82.4916932 47.3693881,82.4916932 C47.4354731,82.5337153 47.4468671,82.5690138 47.40357,82.5975888 L44.4160701,84.5238814 C44.4160701,84.5238814 44.2474393,84.1675341 43.9944931,83.634694 M41.1368846,81.80085 C41.7111408,83.2111113 42.3765489,84.6852462 42.3765489,84.6852462 C42.3765489,84.6852462 40.9568598,83.7187382 39.5348919,82.753911 C38.0946936,81.7974883 36.747926,80.7940008 36.747926,80.7940008 C36.6841197,80.7452552 36.6750045,80.7099566 36.725138,80.6847433 L40.1091482,79.0139451 C40.1091482,79.0139451 40.533004,80.3989931 41.1368846,81.80085 M35.3282369,81.498291 C35.3282369,81.498291 36.902884,82.6597815 38.5755193,83.7725265 C39.400443,84.3339416 40.2276455,84.8970376 40.8474776,85.3189393 C41.4673098,85.7408411 41.9025596,86.0064207 41.9025596,86.0064207 C42.497325,86.3863004 43.1376663,86.623305 43.8121895,86.7174345 C44.4889916,86.8098831 44.9926052,86.7342433 45.3367032,86.493877 L49.2448361,83.7691647 C49.5798189,83.533841 49.6846435,83.2094305 49.5638674,82.8009758 C49.4476488,82.3908402 49.1331752,82.0244075 48.6113312,81.6932735 C48.6113312,81.6932735 48.2284937,81.4613116 47.6906981,81.0931981 C47.1506238,80.7267654 46.4282458,80.2359474 45.7058679,79.7451294 C44.2428817,78.7752596 42.8687685,77.7600059 42.8687685,77.7600059 C42.3856641,77.4087013 41.8273594,77.181782 41.1824605,77.0708437 C40.5352828,76.9599054 40.0043236,76.9952039 39.5964193,77.1784202 L34.8679203,79.3349938 C34.4531797,79.5249337 34.2822701,79.8274927 34.3688643,80.2527563 C34.4531797,80.6797007 34.7767686,81.0948789 35.3282369,81.498291"
                    id="Fill-524"
                  />
                  <path
                    d="M48.9632258,88.8018772 L50.0964527,87.9414469 C50.1274394,87.9169507 50.1805594,87.9246058 50.2491728,87.9613501 C50.2491728,87.9613501 50.6542129,88.1910023 51.2628797,88.5308876 C51.8649065,88.8768969 52.6860534,89.3254842 53.524907,89.7556994 L56.8515478,91.5025871 C57.4425079,91.7934799 58.0401081,91.9511745 58.6310682,91.9680156 C59.2220284,91.9894498 59.6314952,91.8639066 59.8749619,91.6005721 L60.8776022,90.5043655 C61.1144289,90.244093 61.1210689,89.924111 60.9041622,89.5474814 C60.6872554,89.1739138 60.3109887,88.8539317 59.7665085,88.5860041 C59.7665085,88.5860041 58.2370948,87.7837524 56.7076811,86.9815007 C55.9352276,86.5849679 55.182694,86.1715939 54.6293606,85.8531428 C54.0716004,85.5392848 53.697547,85.3295358 53.697547,85.3295358 C53.1774135,85.038643 52.6285067,84.8717624 52.0375466,84.8197079 C51.4443731,84.7707154 50.9884263,84.8533902 50.6719196,85.0738564 L50.2248261,85.3892454 L52.0840266,86.4303354 L52.5134134,86.1042293 C52.5488267,86.078202 52.6019467,86.081264 52.6661334,86.1180084 C52.6661334,86.1180084 53.0490402,86.3323505 53.6200803,86.6553946 C54.1889071,86.9830317 54.963574,87.4040608 55.7537342,87.8113107 C57.3252013,88.6349966 58.894455,89.4602135 58.894455,89.4602135 C58.9630683,89.4923648 58.980775,89.5260471 58.9520017,89.5566674 L57.8873881,90.6237847 C57.8630414,90.6498119 57.8121347,90.6467499 57.741308,90.6130676 C57.741308,90.6130676 55.6076541,89.4908338 53.4695736,88.370131 L49.3018659,86.0368646 L45.795945,88.5017983 C45.795945,88.5017983 46.4931452,88.8937381 47.5378388,89.4785857 C48.5913857,90.0603713 49.959226,90.864154 51.4067464,91.6021031 C52.8387734,92.3477073 54.2530938,93.1162767 55.3486941,93.6551938 C56.4442944,94.194111 57.1746945,94.5538995 57.1746945,94.5538995 L58.0157614,93.6337596 C58.0157614,93.6337596 55.6939742,92.523774 53.4629336,91.3203964 C51.1876264,90.1537632 49.0119191,88.9044552 49.0119191,88.9044552 C48.9410925,88.8661798 48.9233858,88.8324975 48.9632258,88.8018772"
                    id="Fill-526"
                  />
                  <path
                    d="M65.8105227,96.1434028 C65.2769544,95.4674729 64.7702713,94.7882933 64.4062867,94.2683472 C64.0443702,93.7581501 63.8024032,93.4185604 63.8024032,93.4185604 C63.8024032,93.4185604 64.1395026,93.595667 64.6441176,93.8588897 C65.1425283,94.1286117 65.8187951,94.4714512 66.5033343,94.7980423 L69.2249463,96.1304042 C69.2931934,96.1629008 69.3159424,96.1986471 69.2973296,96.237643 L68.010975,98.9121157 C68.010975,98.9121157 66.8652508,97.5050116 65.8105227,96.1434028 M64.3731972,96.6974704 C65.4465381,98.0720778 66.6150114,99.4938054 66.6150114,99.4938054 C66.6150114,99.4938054 65.1321878,98.7691305 63.6472961,98.0460805 L60.7188747,96.5252382 C60.6485595,96.4878671 60.6258105,96.450496 60.6506276,96.4147497 L62.3443968,93.9222581 C62.3443968,93.9222581 63.3081287,95.2952408 64.3731972,96.6974704 M60.0095184,97.5732545 C60.0095184,97.5732545 60.4334777,97.7958565 61.0725188,98.1289469 C61.7156961,98.4571629 62.5532743,98.9202399 63.4218739,99.3313222 C65.1466645,100.17136 66.869387,101.011398 66.869387,101.011398 C67.4670662,101.307117 68.0482007,101.409482 68.5797009,101.368861 C69.1132692,101.323366 69.4462324,101.134885 69.5827266,100.809919 L71.171023,97.0988037 C71.3075172,96.7803368 71.2351339,96.4131248 70.9600774,96.0036673 C70.6850208,95.5893353 70.2817425,95.2806173 69.7626508,95.0222691 C69.7626508,95.0222691 68.2591463,94.2829707 66.7515056,93.5469221 C65.992515,93.1894591 65.2624777,92.7800016 64.7040923,92.4940312 C64.1457069,92.2015616 63.775518,92.0065818 63.775518,92.0065818 C63.2605625,91.7368597 62.7456071,91.6133726 62.2203111,91.6312457 C61.6950152,91.6507437 61.3310306,91.7856047 61.1180169,92.071575 L58.6673252,95.3651085 C58.4543115,95.6510789 58.4625839,96.0247901 58.7252319,96.4553705 C58.9878798,96.8908253 59.4180434,97.2629117 60.0095184,97.5732545"
                    id="Fill-528"
                  />
                  <path
                    d="M79.7435998,100.940841 C79.0498627,100.286107 78.3895855,99.5985545 77.8966083,99.0947868 C77.4125538,98.5926601 77.0891073,98.257909 77.0891073,98.257909 C77.0891073,98.257909 77.4638591,98.4072343 78.0237563,98.6287607 C78.5814228,98.8486463 79.3264652,99.1571424 80.0781997,99.4213333 C81.5794379,99.9726881 83.0784454,100.520761 83.0784454,100.520761 C83.1498268,100.548657 83.1832867,100.581476 83.1765947,100.627422 L82.6010829,103.635259 C82.6010829,103.635259 81.1221514,102.27 79.7435998,100.940841 M78.4832735,101.700595 C79.8819011,103.046163 81.3831393,104.419627 81.3831393,104.419627 C81.3831393,104.419627 79.7525224,103.825608 78.1174443,103.228307 C76.4935194,102.588342 74.8673639,101.946735 74.8673639,101.946735 C74.7892906,101.915557 74.7580613,101.877816 74.7714453,101.836793 L75.7908596,98.9717166 C75.7908596,98.9717166 77.0891073,100.315644 78.4832735,101.700595 M74.4435374,103.151183 C74.4435374,103.151183 76.3306808,103.906014 78.2245162,104.628026 C80.122813,105.318861 82.0188791,106.008054 82.0188791,106.008054 C82.6746949,106.252554 83.2658214,106.308346 83.7766439,106.195121 C84.2852357,106.083537 84.5618383,105.84232 84.6153743,105.479673 L85.2221155,101.331384 C85.2734208,100.975301 85.1105822,100.592962 84.7380609,100.187651 C84.3655397,99.7856213 83.8948692,99.4886117 83.321588,99.272008 C83.321588,99.272008 81.6619725,98.6632204 80.002357,98.0544328 L76.7009714,96.7531698 C76.1254595,96.5234386 75.587869,96.4594421 75.0815079,96.5316433 C74.5773774,96.6022036 74.2517001,96.800757 74.1200908,97.1289444 L72.5653166,100.940841 C72.4314767,101.275592 72.5407793,101.662853 72.9021472,102.107547 C73.2679764,102.547318 73.7854909,102.888633 74.4435374,103.151183"
                    id="Fill-530"
                  />
                  <path
                    d="M93.4962588,104.983143 L93.5951803,106.627007 C93.59712,106.667638 93.5660858,106.677796 93.5020777,106.657481 C93.5020777,106.657481 91.9600658,106.149593 90.4161142,105.643398 C88.8682833,105.081335 87.3165732,104.517579 87.3165732,104.517579 L87.4077361,102.870329 C87.4096758,102.82462 87.4445892,102.812769 87.5066576,102.834777 C87.5066576,102.834777 88.9846616,103.374831 90.4607258,103.9115 L93.3992769,104.879873 C93.4594057,104.901881 93.4943192,104.937433 93.4962588,104.983143 M87.3456677,105.875333 C87.3456677,105.875333 88.9090157,106.442475 90.4684844,107.007923 C92.0260134,107.519197 93.5796632,108.028778 93.5796632,108.028778 C94.1188825,108.204846 94.5727577,108.218389 94.9277114,108.040629 C95.2846048,107.867947 95.4397758,107.58353 95.4029227,107.185684 L95.2535705,105.528276 C95.2186571,105.13551 95.0052969,104.742743 94.6290072,104.360134 C94.2527175,103.984297 93.8182387,103.69988 93.3216914,103.537356 C93.3216914,103.537356 91.8902388,103.061634 90.4549069,102.587605 C89.0156958,102.061095 87.5764846,101.536277 87.5764846,101.536277 C87.0741184,101.351745 86.6377,101.334815 86.2594706,101.449936 C85.877362,101.570136 85.6659415,101.817308 85.6329676,102.18976 L85.2353419,106.588069 C85.2023681,106.967292 85.3730562,107.37191 85.7551648,107.803614 C86.1372734,108.242091 86.6202432,108.55021 87.1924363,108.756751 C87.1924363,108.756751 88.9284121,109.381453 90.6605085,110.002769 C92.3887257,110.564832 94.1091843,111.125201 94.1091843,111.125201 L94.0219006,109.747132 C94.0219006,109.747132 92.3382951,109.198613 90.6508103,108.648401 C88.9594463,108.040629 87.2622633,107.42947 87.2622633,107.42947 C87.194376,107.405769 87.1614021,107.368524 87.1633418,107.321121 L87.2409273,105.900727 C87.2428669,105.860096 87.27972,105.853325 87.3456677,105.875333"
                    id="Fill-532"
                  />
                  <path
                    d="M98.1012071,111.211161 C98.1012071,111.211161 98.5455044,111.3348 99.2089348,111.522799 C99.8723652,111.710797 100.754929,111.956381 101.631461,112.16301 C102.505983,112.37472 103.382515,112.589817 104.037904,112.750717 C104.691282,112.916697 105.125528,113.00985 105.125528,113.00985 C105.694469,113.130101 106.150829,113.082678 106.482544,112.872661 C106.812249,112.662645 106.922821,112.351008 106.820291,111.936056 L105.268266,105.649116 L103.547367,105.276507 L104.904384,111.529573 C104.916446,111.582077 104.886291,111.599014 104.819947,111.585465 C104.819947,111.585465 104.395754,111.494006 103.756448,111.331413 C103.113122,111.1739 102.258704,110.963884 101.402276,110.752174 C100.545848,110.550626 99.6833881,110.310124 99.0340304,110.123819 C98.3866832,109.940901 97.9524379,109.82065 97.9524379,109.82065 L98.1012071,111.211161 Z"
                    id="Fill-534"
                  />
                  <path
                    d="M115.306518,107.419957 L116.068916,108.954392 C116.088805,108.993125 116.062286,109.008022 115.995991,109.002063 C115.995991,109.002063 114.391641,108.820315 112.782871,108.638566 C111.982906,108.55961 111.160843,108.431492 110.548715,108.345087 L109.523345,108.199092 C109.45484,108.190154 109.410643,108.164828 109.395174,108.127585 L108.822823,106.606558 C108.809564,106.563355 108.833873,106.545479 108.902378,106.555907 C108.902378,106.555907 109.297941,106.612517 109.8946,106.698922 C110.486839,106.780858 111.286804,106.907486 112.060251,106.986442 C113.618194,107.163722 115.171718,107.341001 115.171718,107.341001 C115.240223,107.34845 115.28442,107.375265 115.306518,107.419957 M116.714192,110.251957 L117.439022,111.713394 C117.46112,111.758086 117.436812,111.777453 117.366097,111.768514 C117.366097,111.768514 115.679983,111.583786 113.989449,111.397569 C113.147496,111.314143 112.283446,111.181556 111.63817,111.093661 C110.992894,111.002787 110.561974,110.943197 110.561974,110.943197 C110.486839,110.932769 110.442642,110.904464 110.424963,110.861262 L109.881341,109.413232 C109.863662,109.36854 109.89239,109.350663 109.963105,109.361091 C109.963105,109.361091 110.380766,109.420681 111.010573,109.508576 C111.63596,109.59647 112.477912,109.726078 113.295556,109.808014 C114.937474,109.991252 116.574971,110.173001 116.574971,110.173001 C116.643476,110.181939 116.689883,110.207265 116.714192,110.251957 M119.547217,112.115624 L118.692006,110.508193 C118.550576,110.23706 118.327381,109.995721 118.031261,109.785668 C118.121865,109.606899 118.097557,109.380458 117.951707,109.110815 L117.136273,107.57489 C116.941806,107.208414 116.58823,106.880671 116.084385,106.588681 C115.57612,106.296692 115.074484,106.137289 114.55075,106.083659 C114.55075,106.083659 113.034794,105.907869 111.514419,105.732079 C110.756441,105.656103 109.978574,105.530964 109.399594,105.450518 C108.816194,105.365603 108.43168,105.308993 108.43168,105.308993 C107.890267,105.231526 107.477026,105.292605 107.178696,105.492231 C106.880367,105.696326 106.787553,105.965969 106.909095,106.327976 L107.426199,107.840064 C107.512383,108.093321 107.693591,108.343597 107.967612,108.577487 C107.832811,108.753276 107.804083,108.960351 107.894687,109.216586 L108.354336,110.570762 C108.478087,110.937238 108.805145,111.291797 109.328879,111.610602 C109.854822,111.932386 110.429383,112.136481 111.043721,112.222886 C111.043721,112.222886 111.485691,112.283965 112.146435,112.37484 C112.80497,112.465714 113.691119,112.599791 114.55075,112.681726 C116.278852,112.870924 118.002533,113.058631 118.002533,113.058631 C118.535107,113.110772 118.943929,113.034795 119.240048,112.856026 C119.536168,112.675767 119.635611,112.42847 119.547217,112.115624"
                    id="Fill-536"
                  />
                  <path
                    d="M122.682869,113.363674 L121.797425,111.708637 C121.775828,111.666491 121.793105,111.645418 121.847096,111.64866 C121.847096,111.64866 123.402023,111.74754 124.924555,111.801033 C126.425491,111.825348 127.922108,111.848042 127.922108,111.848042 L129.010557,113.561436 C129.040792,113.610066 129.027834,113.634381 128.973844,113.634381 C128.973844,113.634381 127.45563,113.611687 125.933098,113.592235 C124.38465,113.5355 122.808127,113.441482 122.808127,113.441482 C122.749817,113.439861 122.708784,113.412304 122.682869,113.363674 M126.956758,110.458848 C126.956758,110.458848 125.516291,110.432912 124.069345,110.408597 C122.598644,110.350241 121.102027,110.254603 121.102027,110.254603 C120.581558,110.225425 120.214423,110.346999 119.989822,110.606359 C119.756583,110.857613 119.737147,111.183434 119.937991,111.58382 L120.771605,113.240478 C120.976769,113.644107 121.350383,114.00721 121.898927,114.329788 C122.443151,114.64264 122.998174,114.807982 123.555356,114.83716 C123.555356,114.83716 125.166433,114.932799 126.749435,114.984671 C128.306521,115.004123 129.854969,115.023575 129.854969,115.023575 C130.397034,115.036543 130.749052,114.882548 130.923981,114.582664 C131.09891,114.286021 131.051399,113.937507 130.783606,113.537121 L127.678071,108.871892 C127.412438,108.476369 127.023706,108.139202 126.511876,107.863632 C126.002206,107.591305 125.52061,107.458383 125.043334,107.442173 C125.043334,107.442173 123.671975,107.412995 122.298457,107.385438 C120.903342,107.323841 119.482311,107.229823 119.482311,107.229823 C119.041749,107.203887 118.722125,107.312494 118.519121,107.554022 C118.309637,107.787446 118.251328,108.090572 118.359309,108.474748 C118.359309,108.474748 118.858181,108.534725 119.570856,108.565524 C120.28785,108.606049 121.240242,108.661163 122.192635,108.716277 C123.149347,108.781117 124.056388,108.763286 124.756105,108.789222 C125.449343,108.80219 125.911502,108.810295 125.911502,108.810295 C125.963333,108.811916 126.004365,108.837851 126.0346,108.88486 L126.995631,110.39725 C127.023706,110.437775 127.010749,110.458848 126.956758,110.458848"
                    id="Fill-538"
                  />
                  <path
                    d="M131.218751,112.330296 C130.720108,112.345236 130.221465,112.360175 130.221465,112.360175 C130.221465,112.360175 131.268234,113.037418 132.316906,113.716322 C133.376998,114.393565 134.437089,115.024331 134.437089,115.024331 L136.115725,114.884899 L131.100751,107.226072 L129.755177,107.320686 L133.308482,112.959403 L132.202713,112.282159 C132.202713,112.282159 131.723103,112.323657 131.218751,112.330296"
                    id="Fill-540"
                  />
                  <path
                    d="M136.033942,112.460406 C135.436457,112.530286 134.801474,112.561898 134.801474,112.561898 C134.801474,112.561898 135.148965,112.721624 135.668951,112.964539 C136.188938,113.192481 136.88142,113.500285 137.573902,113.808089 C138.981365,114.417042 140.388828,115.024331 140.388828,115.024331 C140.388828,115.024331 140.916314,114.969426 141.4413,114.91452 C141.973786,114.864606 142.476273,114.784743 142.476273,114.784743 L135.243962,107.226072 C135.243962,107.226072 134.841473,107.289296 134.416484,107.322572 L133.571506,107.400771 L138.718872,112.976186 L137.24391,112.338948 C137.24391,112.338948 136.638926,112.398845 136.033942,112.460406"
                    id="Fill-542"
                  />
                  <path
                    d="M139.102669,110.79186 C139.102669,110.79186 140.429821,111.365925 141.756974,111.93832 C143.110289,112.507377 144.463605,113.074766 144.463605,113.074766 C144.463605,113.074766 144.93453,112.996333 145.386428,112.896206 C145.840704,112.801085 146.292602,112.705964 146.292602,112.705964 L138.855314,105.276507 L137.387835,105.56187 L142.713095,111.052192 L141.293184,110.456433 L139.102669,110.79186 Z"
                    id="Fill-544"
                  />
                  <path
                    d="M146.301689,110.61447 C146.117687,110.653335 145.872352,110.709097 145.622473,110.76148 L144.634316,110.97608 L147.189894,112.052459 C147.837307,112.324511 148.475633,112.577976 148.950402,112.76216 C149.431987,112.949724 149.752286,113.074766 149.752286,113.074766 L151.38104,112.613461 L143.793815,105.276507 L142.476273,105.627977 L147.930443,111.058878 L146.597,110.531672 C146.597,110.531672 146.478875,110.565467 146.301689,110.61447"
                    id="Fill-546"
                  />
                  <path
                    d="M149.725923,109.917366 C149.312613,110.079041 148.846818,110.194278 148.846818,110.194278 C148.846818,110.194278 150.082376,110.715423 151.287319,111.17121 C152.509756,111.635597 153.734381,112.099984 153.734381,112.099984 L155.197369,111.554759 L147.482237,104.301724 L146.292602,104.719672 L151.858081,110.09624 L150.574413,109.607774 C150.574413,109.607774 150.150168,109.76257 149.725923,109.917366"
                    id="Fill-548"
                  />
                </g>
              </g>
              {data[3] ? (
                <g id="Group-16" transform="translate(76.000000, 181.000000)">
                  <path
                    d="M127.5,287.5 L113.5,9.5"
                    id="Line"
                    stroke="#FD5E04"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                  <text
                    id="获利能力-80分"
                    fontFamily="PingFangSC-Medium, PingFang SC"
                    fontSize="24"
                    fontWeight="400"
                    letterSpacing="0.96"
                    fill="#F6B955"
                  >
                    <tspan x="0.16" y="25">
                      {data && data[3] && data[3].indexName}
                    </tspan>
                    <tspan x="44.32" y="58">
                      {data && data[3] && data[3].index}分
                    </tspan>
                  </text>
                  <g id="Oval-3">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-middle-20)"
                      xlinkHref="#path-middle-19"
                    />
                    <use fill="#FD5E04" fillRule="evenodd" xlinkHref="#path-middle-19" />
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-middle-21)"
                      xlinkHref="#path-middle-19"
                    />
                  </g>
                  <g id="Oval-3">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-middle-23)"
                      xlinkHref="#path-middle-22"
                    />
                    <use fill="#FF8500" fillRule="evenodd" xlinkHref="#path-middle-22" />
                  </g>
                  <g id="Oval-3">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-middle-25)"
                      xlinkHref="#path-middle-24"
                    />
                    <use fill="#FF8500" fillRule="evenodd" xlinkHref="#path-middle-24" />
                  </g>
                  <g id="Oval-3">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-middle-27)"
                      xlinkHref="#path-middle-26"
                    />
                    <use fill="#FF8500" fillRule="evenodd" xlinkHref="#path-middle-26" />
                  </g>
                </g>
              ) : (
                <g />
              )}
              {data[1] ? (
                <g id="Group-18" transform="translate(524.000000, 124.000000)">
                  <path
                    d="M18.5,312.5 L4.5,34.5"
                    id="Line"
                    stroke="#62FC78"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                  <text
                    id="发展能力-50分"
                    fontFamily="PingFangSC-Medium, PingFang SC"
                    fontSize="24"
                    fontWeight="400"
                    letterSpacing="0.96"
                    fill="#95FFA4"
                  >
                    <tspan x="17" y="25">
                      {data && data[1] && data[1].indexName}
                    </tspan>
                    <tspan x="17" y="58">
                      {data && data[1] && data[1].index}分
                    </tspan>
                  </text>
                  <g id="Oval-3">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-middle-29)"
                      xlinkHref="#path-middle-28"
                    />
                    <use fill="#62FC78" fillRule="evenodd" xlinkHref="#path-middle-28" />
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-middle-30)"
                      xlinkHref="#path-middle-28"
                    />
                  </g>
                  <g id="Oval-3">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-middle-32)"
                      xlinkHref="#path-middle-31"
                    />
                    <use fill="#62FC78" fillRule="evenodd" xlinkHref="#path-middle-31" />
                  </g>
                  <g id="Oval-3">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-middle-34)"
                      xlinkHref="#path-middle-33"
                    />
                    <use fill="#62FC78" fillRule="evenodd" xlinkHref="#path-middle-33" />
                  </g>
                  <g id="Oval-3">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-middle-36)"
                      xlinkHref="#path-middle-35"
                    />
                    <use fill="#62FC78" fillRule="evenodd" xlinkHref="#path-middle-35" />
                  </g>
                </g>
              ) : (
                <g />
              )}
              {data[4] ? (
                <g id="Group-17" transform="translate(409.000000, 273.000000)">
                  <path
                    d="M15.5,255.5 L5.5,35.5"
                    id="Line"
                    stroke="#FDC804"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                  <g id="Oval-3">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-middle-38)"
                      xlinkHref="#path-middle-37"
                    />
                    <use fill="#FDC804" fillRule="evenodd" xlinkHref="#path-middle-37" />
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-middle-39)"
                      xlinkHref="#path-middle-37"
                    />
                  </g>
                  <g id="Oval-3">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-middle-41)"
                      xlinkHref="#path-middle-40"
                    />
                    <use fill="#FDC804" fillRule="evenodd" xlinkHref="#path-middle-40" />
                  </g>
                  <g id="Oval-3">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-middle-43)"
                      xlinkHref="#path-middle-42"
                    />
                    <use fill="#FDC804" fillRule="evenodd" xlinkHref="#path-middle-42" />
                  </g>
                  <g id="Oval-3">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-middle-45)"
                      xlinkHref="#path-middle-44"
                    />
                    <use fill="#FDC804" fillRule="evenodd" xlinkHref="#path-middle-44" />
                  </g>
                  <text
                    id="管理能力-40分"
                    fontFamily="PingFangSC-Medium, PingFang SC"
                    fontSize="24"
                    fontWeight="400"
                    letterSpacing="0.96"
                    fill="#FCDB8C"
                  >
                    <tspan x="19" y="25">
                      {data && data[4] && data[4].indexName}
                    </tspan>
                    <tspan x="19" y="58">
                      {data && data[4] && data[4].index}分
                    </tspan>
                  </text>
                </g>
              ) : (
                <g />
              )}
              {data[0] ? (
                <g id="Group-9" transform="translate(265.000000, 238.000000)">
                  <path
                    d="M19.5,320.5 L5.5,42.5"
                    id="Line"
                    stroke="#ADE4FF"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                  <g id="Oval-3">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-middle-47)"
                      xlinkHref="#path-middle-46"
                    />
                    <use fill="#04ACFD" fillRule="evenodd" xlinkHref="#path-middle-46" />
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-middle-48)"
                      xlinkHref="#path-middle-46"
                    />
                  </g>
                  <g id="Oval-3">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-middle-50)"
                      xlinkHref="#path-middle-49"
                    />
                    <use fill="#ADE4FF" fillRule="evenodd" xlinkHref="#path-middle-49" />
                  </g>
                  <g id="Oval-3">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-middle-52)"
                      xlinkHref="#path-middle-51"
                    />
                    <use fill="#ADE4FF" fillRule="evenodd" xlinkHref="#path-middle-51" />
                  </g>
                  <g id="Oval-3">
                    <use
                      fill="black"
                      fillOpacity="1"
                      filter="url(#filter-middle-54)"
                      xlinkHref="#path-middle-53"
                    />
                    <use fill="#ADE4FF" fillRule="evenodd" xlinkHref="#path-middle-53" />
                  </g>
                  <text
                    id="贡献能力-40分"
                    fontFamily="PingFangSC-Medium, PingFang SC"
                    fontSize="24"
                    fontWeight="400"
                    letterSpacing="0.96"
                    fill="#D9EEFF"
                  >
                    <tspan x="17" y="25">
                      {data && data[0] && data[0].indexName}
                    </tspan>
                    <tspan x="17" y="58">
                      {data && data[0] && data[0].index}分
                    </tspan>
                  </text>
                </g>
              ) : (
                <g />
              )}
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
