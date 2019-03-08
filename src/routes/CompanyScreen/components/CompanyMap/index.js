import React, { Component } from 'react';

export default class CompanyMap extends Component {
  static defaultProps = {
    className: '',
    data: [],
  };

  render() {
    const { className, data } = this.props;

    return (
      <svg
        className={className}
        width="434px"
        height="248px"
        viewBox="0 0 434 248"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <ellipse id="path-map-1" cx="41" cy="16" rx="41" ry="16" />
          <filter
            x="-1.2%"
            y="-3.1%"
            width="102.4%"
            height="106.2%"
            filterUnits="objectBoundingBox"
            id="filter-2"
          >
            <feGaussianBlur stdDeviation="1" in="SourceAlpha" result="shadowBlurInner1" />
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
              values="0 0 0 0 0   0 0 0 0 0.618376359   0 0 0 0 1  0 0 0 1 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <ellipse id="path-map-3" cx="41" cy="12.5151515" rx="29.4235294" ry="11.6363636" />
          <filter
            x="-6.8%"
            y="-17.2%"
            width="113.6%"
            height="134.4%"
            filterUnits="objectBoundingBox"
            id="filter-4"
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
              values="0 0 0 0 0.410629735   0 0 0 0 0.775082373   0 0 0 0 1  0 0 0 0.661316803 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <radialGradient
            cx="50%"
            cy="50%"
            fx="50%"
            fy="50%"
            r="57.9964989%"
            gradientTransform="translate(0.500000,0.500000),scale(0.395978,1.000000),rotate(90.000000),scale(1.000000,2.169700),translate(-0.500000,-0.500000)"
            id="radialGradient-5"
          >
            <stop stopColor="#60C0FF" stopOpacity="0.464588995" offset="0%" />
            <stop stopColor="#3DB4FF" offset="100%" />
            <animate
              attributeName="fy"
              id="mapAnimite1"
              begin="0;mapAnimite2.end"
              dur="1s"
              from="50%"
              to="0%"
            />
            <animate
              attributeName="fy"
              id="mapAnimite2"
              begin="mapAnimite1.end"
              dur="1s"
              from="0%"
              to="50%"
            />
          </radialGradient>
          <ellipse id="path-map-6" cx="51" cy="23" rx="51" ry="20" />
          <filter
            x="-1.0%"
            y="-2.5%"
            width="102.0%"
            height="105.0%"
            filterUnits="objectBoundingBox"
            id="filter-7"
          >
            <feGaussianBlur stdDeviation="1" in="SourceAlpha" result="shadowBlurInner1" />
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
              values="0 0 0 0 0   0 0 0 0 0.618376359   0 0 0 0 1  0 0 0 1 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <ellipse id="path-map-8" cx="51" cy="17.3939394" rx="36.6" ry="14.5454545" />
          <filter
            x="-6.8%"
            y="-17.2%"
            width="113.7%"
            height="134.4%"
            filterUnits="objectBoundingBox"
            id="filter-9"
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
              values="0 0 0 0 0.410629735   0 0 0 0 0.775082373   0 0 0 0 1  0 0 0 0.661316803 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <radialGradient
            cx="50%"
            cy="50%"
            fx="50%"
            fy="50%"
            r="57.9964989%"
            gradientTransform="translate(0.500000,0.500000),scale(0.397919,1.000000),rotate(90.000000),scale(1.000000,2.169700),translate(-0.500000,-0.500000)"
            id="radialGradient-10"
          >
            <stop stopColor="#60C0FF" stopOpacity="0.464588995" offset="0%" />
            <stop stopColor="#3DB4FF" offset="100%" />
            <animate
              attributeName="fy"
              id="mapAnimite3"
              begin="0;mapAnimite3.end"
              dur="1s"
              from="50%"
              to="0%"
            />
            <animate
              attributeName="fy"
              id="mapAnimite4"
              begin="mapAnimite4.end"
              dur="1s"
              from="0%"
              to="50%"
            />
          </radialGradient>
          <ellipse id="path-map-11" cx="51" cy="23" rx="51" ry="20" />
          <filter
            x="-1.0%"
            y="-2.5%"
            width="102.0%"
            height="105.0%"
            filterUnits="objectBoundingBox"
            id="filter-12"
          >
            <feGaussianBlur stdDeviation="1" in="SourceAlpha" result="shadowBlurInner1" />
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
              values="0 0 0 0 0   0 0 0 0 0.618376359   0 0 0 0 1  0 0 0 1 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <ellipse id="path-map-13" cx="51" cy="16.3939394" rx="36.6" ry="14.5454545" />
          <filter
            x="-6.8%"
            y="-17.2%"
            width="113.7%"
            height="134.4%"
            filterUnits="objectBoundingBox"
            id="filter-14"
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
              values="0 0 0 0 0.410629735   0 0 0 0 0.775082373   0 0 0 0 1  0 0 0 0.661316803 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <ellipse id="path-map-15" cx="51" cy="21" rx="51" ry="20" />
          <filter
            x="-1.0%"
            y="-2.5%"
            width="102.0%"
            height="105.0%"
            filterUnits="objectBoundingBox"
            id="filter-16"
          >
            <feGaussianBlur stdDeviation="1" in="SourceAlpha" result="shadowBlurInner1" />
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
              values="0 0 0 0 0   0 0 0 0 0.618376359   0 0 0 0 1  0 0 0 1 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <ellipse id="path-map-17" cx="51" cy="15.3939394" rx="36.6" ry="14.5454545" />
          <filter
            x="-6.8%"
            y="-17.2%"
            width="113.7%"
            height="134.4%"
            filterUnits="objectBoundingBox"
            id="filter-18"
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
              values="0 0 0 0 0.410629735   0 0 0 0 0.775082373   0 0 0 0 1  0 0 0 0.661316803 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <ellipse id="path-map-19" cx="41" cy="22" rx="41" ry="16" />
          <filter
            x="-1.2%"
            y="-3.1%"
            width="102.4%"
            height="106.2%"
            filterUnits="objectBoundingBox"
            id="filter-20"
          >
            <feGaussianBlur stdDeviation="1" in="SourceAlpha" result="shadowBlurInner1" />
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
              values="0 0 0 0 0   0 0 0 0 0.618376359   0 0 0 0 1  0 0 0 1 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <ellipse id="path-map-21" cx="41" cy="15.5151515" rx="29.4235294" ry="11.6363636" />
          <filter
            x="-6.8%"
            y="-17.2%"
            width="113.6%"
            height="134.4%"
            filterUnits="objectBoundingBox"
            id="filter-22"
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
              values="0 0 0 0 0.410629735   0 0 0 0 0.775082373   0 0 0 0 1  0 0 0 0.661316803 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <linearGradient
            x1="50%"
            y1="100%"
            x2="50%"
            y2="3.061617e-15%"
            id="linearGradient-23"
            fy="100%"
          >
            <stop stopColor="#43A298" stopOpacity="0.304630888" offset="0%" />
            <stop stopColor="#20695F" stopOpacity="0" offset="100%" />
          </linearGradient>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="3.061617e-15%" id="linearGradient-24">
            <stop stopColor="#43A298" offset="0%" />
            <stop stopColor="#20695F" stopOpacity="0" offset="100%" />
          </linearGradient>
          <ellipse
            id="path-map-25"
            cx="216.593407"
            cy="108.380682"
            rx="124.021978"
            ry="62.5511364"
          />
          <filter
            x="-1.6%"
            y="-3.2%"
            width="103.2%"
            height="106.4%"
            filterUnits="objectBoundingBox"
            id="filter-26"
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
          <ellipse id="path-map-27" cx="216" cy="106.522727" rx="84.2637363" ry="42.1136364" />
          <filter
            x="-3.0%"
            y="-5.9%"
            width="105.9%"
            height="111.9%"
            filterUnits="objectBoundingBox"
            id="filter-28"
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
              values="0 0 0 0 0   0 0 0 0 1   0 0 0 0 0.864639946  0 0 0 0.5 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <ellipse id="path-map-29" cx="216" cy="106.522727" rx="84.2637363" ry="42.1136364" />
          <filter
            x="-3.0%"
            y="-5.9%"
            width="105.9%"
            height="111.9%"
            filterUnits="objectBoundingBox"
            id="filter-30"
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
              values="0 0 0 0 0   0 0 0 0 1   0 0 0 0 0.864639946  0 0 0 0.5 0"
              type="matrix"
              in="shadowInnerInner1"
            />
          </filter>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-31">
            <stop stopColor="#07639B" stopOpacity="0.251500226" offset="0%" />
            <stop stopColor="#0696FF" offset="100%" />
          </linearGradient>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="2.06828035%" id="linearGradient-32">
            <stop stopColor="#36E0FC" offset="0%" />
            <stop stopColor="#02202B" stopOpacity="0.00501019022" offset="100%" />
          </linearGradient>
          <radialGradient
            cx="50%"
            cy="53.0318902%"
            fx="50%"
            fy="53.0318902%"
            r="168.453427%"
            gradientTransform="translate(0.500000,0.530319),scale(1.000000,0.558275),rotate(90.000000),translate(-0.500000,-0.530319)"
            id="radialGradient-33"
          >
            <stop stopColor="#69C3FF" stopOpacity="0.166949728" offset="0%" />
            <stop stopColor="#00A4FE" stopOpacity="0.280797101" offset="23.4781431%" />
            <stop stopColor="#0166FF" offset="99.9074241%" />
            <animate
              attributeName="fy"
              id="mapAnimite5"
              begin="0;mapAnimite5.end"
              dur="1s"
              from="53.0318902%"
              to="100%"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fy"
              id="mapAnimite6"
              begin="mapAnimite6.end"
              dur="1s"
              from="23.4781431%"
              to="53.0318902%"
              repeatCount="indefinite"
            />
          </radialGradient>
          <linearGradient x1="50%" y1="100%" x2="0%" y2="0%" id="linearGradient-34" fy="100%">
            <stop stopColor="#3DB4FF" stopOpacity="0" offset="0%" />
            <stop stopColor="#3DB4FF" offset="100%" />
          </linearGradient>
          <linearGradient x1="0%" y1="100%" x2="100%" y2="32.8111494%" id="linearGradient-35">
            <stop stopColor="#3DB4FF" stopOpacity="0" offset="0%" />
            <stop stopColor="#3DB4FF" offset="100%" />
          </linearGradient>
          <linearGradient x1="100%" y1="100%" x2="0%" y2="66.3986735%" id="linearGradient-36">
            <stop stopColor="#3DB4FF" stopOpacity="0" offset="0%" />
            <stop stopColor="#3DB4FF" offset="100%" />
          </linearGradient>
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="第一页" transform="translate(-955.000000, -829.000000)">
            {data[4] ? (
              <g id="Group-32" opacity="0.6" transform="translate(982.000000, 893.000000)">
                <g id="Oval-5" opacity="0.8">
                  <use
                    fillOpacity="0.1"
                    fill="#0263FF"
                    fillRule="evenodd"
                    xlinkHref="#path-map-1"
                  />
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-2)"
                    xlinkHref="#path-map-1"
                  />
                </g>
                <g id="Oval-5" opacity="0.8">
                  <use
                    fillOpacity="0.1"
                    fill="#0263FF"
                    fillRule="evenodd"
                    xlinkHref="#path-map-3"
                  />
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-4)"
                    xlinkHref="#path-map-3"
                  />
                </g>
                <ellipse
                  id="Oval-5"
                  fill="url(#radialGradient-5)"
                  cx="41"
                  cy="7.03030303"
                  rx="15.9176471"
                  ry="6.3030303"
                />
              </g>
            ) : (
              <g />
            )}
            {data[0] ? (
              <g id="Group-32" opacity="0.8" transform="translate(956.000000, 965.000000)">
                <g id="Oval-5">
                  <use
                    fillOpacity="0.1"
                    fill="#0263FF"
                    fillRule="evenodd"
                    xlinkHref="#path-map-6"
                  />
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-7)"
                    xlinkHref="#path-map-6"
                  />
                </g>
                <g id="Oval-5">
                  <use
                    fillOpacity="0.1"
                    fill="#0263FF"
                    fillRule="evenodd"
                    xlinkHref="#path-map-8"
                  />
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-9)"
                    xlinkHref="#path-map-8"
                  />
                </g>
                <ellipse
                  id="Oval-5"
                  fill="url(#radialGradient-10)"
                  cx="51"
                  cy="8.78787879"
                  rx="19.8"
                  ry="7.87878788"
                />
              </g>
            ) : (
              <g />
            )}
            {data[2] ? (
              <g id="Group-32" opacity="0.8" transform="translate(1272.000000, 940.000000)">
                <g id="Oval-5">
                  <use
                    fillOpacity="0.1"
                    fill="#0263FF"
                    fillRule="evenodd"
                    xlinkHref="#path-map-11"
                  />
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-12)"
                    xlinkHref="#path-map-11"
                  />
                </g>
                <g id="Oval-5">
                  <use
                    fillOpacity="0.1"
                    fill="#0263FF"
                    fillRule="evenodd"
                    xlinkHref="#path-map-13"
                  />
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-14)"
                    xlinkHref="#path-map-13"
                  />
                </g>
                <ellipse
                  id="Oval-5"
                  fill="url(#radialGradient-10)"
                  cx="51"
                  cy="8.78787879"
                  rx="19.8"
                  ry="7.87878788"
                />
              </g>
            ) : (
              <g />
            )}
            {data[1] ? (
              <g id="Group-32" transform="translate(1157.000000, 1007.000000)">
                <g id="Oval-5" opacity="0.8">
                  <use
                    fillOpacity="0.1"
                    fill="#0263FF"
                    fillRule="evenodd"
                    xlinkHref="#path-map-15"
                  />
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-16)"
                    xlinkHref="#path-map-15"
                  />
                </g>
                <g id="Oval-5" opacity="0.8">
                  <use
                    fillOpacity="0.1"
                    fill="#0263FF"
                    fillRule="evenodd"
                    xlinkHref="#path-map-17"
                  />
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-18)"
                    xlinkHref="#path-map-17"
                  />
                </g>
                <ellipse
                  id="Oval-5"
                  fill="url(#radialGradient-10)"
                  cx="51"
                  cy="8.78787879"
                  rx="19.8"
                  ry="7.87878788"
                />
              </g>
            ) : (
              <g />
            )}
            {data[3] ? (
              <g id="Group-32" opacity="0.5" transform="translate(1225.000000, 868.000000)">
                <g id="Oval-5" opacity="0.8">
                  <use
                    fillOpacity="0.1"
                    fill="#0263FF"
                    fillRule="evenodd"
                    xlinkHref="#path-map-19"
                  />
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-20)"
                    xlinkHref="#path-map-19"
                  />
                </g>
                <g id="Oval-5" opacity="0.8">
                  <use
                    fillOpacity="0.1"
                    fill="#0263FF"
                    fillRule="evenodd"
                    xlinkHref="#path-map-21"
                  />
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-22)"
                    xlinkHref="#path-map-21"
                  />
                </g>
                <ellipse
                  id="Oval-5"
                  fill="url(#radialGradient-5)"
                  cx="41"
                  cy="7.03030303"
                  rx="15.9176471"
                  ry="6.3030303"
                />
              </g>
            ) : (
              <g />
            )}
            <g id="Group-34" transform="translate(956.000000, 844.000000)">
              <g id="Group-33" transform="translate(0.000000, 14.000000)">
                <ellipse
                  id="Oval-4"
                  stroke="url(#linearGradient-23)"
                  fillOpacity="0.02"
                  fill="#0263FF"
                  cx="216"
                  cy="109"
                  rx="216"
                  ry="109"
                />
                <ellipse
                  id="Oval-4"
                  stroke="url(#linearGradient-24)"
                  fillOpacity="0.05"
                  fill="#0263FF"
                  opacity="0.6"
                  cx="216.593407"
                  cy="109.619318"
                  rx="167.934066"
                  ry="84.8465909"
                />
                <g id="Oval-4" opacity="0.8">
                  <use
                    fillOpacity="0.1"
                    fill="#0263FF"
                    fillRule="evenodd"
                    xlinkHref="#path-map-25"
                  />
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-26)"
                    xlinkHref="#path-map-25"
                  />
                </g>
                <g id="Oval-4">
                  <use
                    fillOpacity="0.1"
                    fill="#0263FF"
                    fillRule="evenodd"
                    xlinkHref="#path-map-27"
                  />
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-28)"
                    xlinkHref="#path-map-27"
                  />
                </g>
                <g id="Oval-4-Copy">
                  <use
                    fillOpacity="0.1"
                    fill="#0263FF"
                    fillRule="evenodd"
                    xlinkHref="#path-map-29"
                  />
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-30)"
                    xlinkHref="#path-map-29"
                  />
                </g>
              </g>
              <g id="Group-31" transform="translate(129.000000, 0.000000)">
                <polygon
                  id="Rectangle-7"
                  fill="url(#linearGradient-31)"
                  points="84.5751987 0 153.661036 24.6910035 84.5751987 49.382007 15.4893617 24.6910035"
                />
                <path
                  d="M83.7952128,30.1704681 L2.97655205,58.9977826 L83.7952128,87.8250971 L164.613873,58.9977826 L83.7952128,30.1704681 Z"
                  id="Rectangle-7"
                  stroke="url(#linearGradient-32)"
                  strokeWidth="2"
                />
                <path
                  d="M83.7952128,64.7635977 L2.97655205,93.5909122 L83.7952128,122.418227 L164.613873,93.5909122 L83.7952128,64.7635977 Z"
                  id="Rectangle-7"
                  stroke="url(#linearGradient-32)"
                  strokeWidth="2"
                />
                <polygon
                  id="Rectangle-7"
                  fillOpacity="0.2"
                  fill="#0038FF"
                  points="84.5751987 98.5707341 153.661036 123.261738 84.5751987 147.952741 15.4893617 123.261738"
                />
                <polygon
                  id="Rectangle-4"
                  fill="url(#radialGradient-33)"
                  points="17.8723404 25.8748177 84.5957447 49.285367 84.5957447 145.391833 17.8723404 121.981283"
                />
                <polygon
                  id="Rectangle-4"
                  fill="url(#radialGradient-33)"
                  points="84.5957447 49.285367 151.319149 25.8748177 151.319149 121.981283 84.5957447 145.391833"
                />
              </g>
            </g>
            {data[1] ? (
              <path
                id="Path-8"
                d="M1177.0249,875.488154 L1184.66712,869.115383 L1185.94799,870.651405 L1175.37389,879.469047 L1174.00854,880.607601 L1173.74454,878.849534 L1171.69999,865.234017 L1173.67782,864.93702 L1175.15547,874.777357 L1178.03102,867.214525 L1178.09536,867.077532 C1181.03638,861.878846 1184.60913,861.191719 1187.91551,865.379991 C1190.8543,869.102627 1193.8218,876.883183 1196.88964,888.798525 C1202.97223,912.423097 1209.46399,952.441877 1216.37219,1008.8785 L1214.387,1009.1215 C1207.48865,952.765298 1201.00816,912.815986 1194.9528,889.297199 C1191.95166,877.640861 1189.05876,870.055921 1186.34572,866.619244 C1184.01292,863.664226 1182.14995,864.004164 1179.87318,867.997045 L1177.0249,875.488154 Z"
                fill="url(#linearGradient-34)"
                fillRule="nonzero"
              />
            ) : (
              <path />
            )}
            {data[0] ? (
              <path
                id="Path-7"
                d="M1131.69812,868.047931 L1129.54511,858.332982 L1131.49773,857.900245 L1134.47673,871.342271 L1134.86139,873.077936 L1133.17834,872.505352 L1120.14384,868.070922 L1120.788,866.177496 L1130.2093,869.38269 L1124.83113,863.377045 C1086.08686,824.838443 1046.87135,861.034327 1006.94221,973.33501 L1005.05779,972.66499 C1045.40962,859.175469 1085.885,821.816725 1126.2812,862.000829 L1131.69812,868.047931 Z"
                fill="url(#linearGradient-34)"
                fillRule="nonzero"
              />
            ) : (
              <path />
            )}
            {data[3] ? (
              <path
                id="Path-9"
                d="M1144.09345,866.903589 L1143.22328,856.991046 L1145.21562,856.81615 L1146.41962,870.531575 L1146.57508,872.302542 L1144.98089,871.515759 L1132.63447,865.422446 L1133.5196,863.628973 L1142.44332,868.033089 L1137.89646,861.384703 C1109.17783,823.522239 1076.07712,835.637069 1037.85452,898.519415 L1036.14548,897.480585 C1074.98856,833.57745 1109.68332,820.879197 1139.51856,860.215777 L1144.09345,866.903589 Z"
                fill="url(#linearGradient-35)"
                fillRule="nonzero"
                opacity="0.6"
              />
            ) : (
              <path />
            )}
            {data[4] ? (
              <path
                id="Path-10"
                d="M1186.86134,858.364659 L1194.08352,851.519534 L1195.45933,852.971133 L1185.4664,862.442345 L1184.17609,863.665289 L1183.80101,861.927531 L1180.89612,848.469294 L1182.8511,848.047323 L1184.9508,857.775147 L1187.37429,849.940536 C1200.56366,815.44047 1227.05851,823.974457 1265.79298,874.390757 L1264.20702,875.609243 C1226.25386,826.2099 1201.62095,818.275641 1189.26375,850.592966 L1186.86134,858.364659 Z"
                fill="url(#linearGradient-36)"
                fillRule="nonzero"
              />
            ) : (
              <path />
            )}
            {data[2] ? (
              <path
                id="Path"
                d="M1189.38225,862.824113 L1197.90215,857.68339 L1198.93539,859.395818 L1187.14689,866.508746 L1185.62473,867.427184 L1185.63027,865.649415 L1185.67319,851.881312 L1187.67318,851.887547 L1187.64216,861.838966 L1191.69804,854.682978 C1207.57788,829.875994 1227.13227,825.46034 1249.8528,841.595571 C1272.26054,857.508667 1297.91287,893.479586 1326.88836,949.540849 L1325.11164,950.459151 C1296.2721,894.660899 1270.77363,858.905745 1248.69478,843.226213 C1226.92873,827.768815 1208.66077,831.893974 1193.4103,855.715089 L1189.38225,862.824113 Z"
                fill="url(#linearGradient-36)"
                fillRule="nonzero"
              />
            ) : (
              <path />
            )}
          </g>
        </g>
      </svg>
    );
  }
}
