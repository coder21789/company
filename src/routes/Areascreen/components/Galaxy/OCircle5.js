import React, { Component } from 'react';

export default class OCircle2 extends Component {
  render() {
    return (
      <g>
        <animateMotion
          dur="6s"
          begin="0"
          repeatCount="indefinite"
          // xlinkHref="url(#circle1)"
          // rotate="auto"
        >
          <mpath xlinkHref="#Path-11" />
        </animateMotion>
        <g transform="translate(-16.000000, -453.005595)">
          <g id="Group-3" transform="translate(16.000000, 323.005595)">
            <g id="Group-2" transform="translate(57.113185, 55.056593)">
              <g id="Group">
                <ellipse
                  id="Oval-8"
                  fill="url(#linearGradient-27)"
                  cx="79.5505076"
                  cy="79.5261899"
                  rx="79.5505076"
                  ry="79.5261899"
                />
                <ellipse
                  id="Oval-4"
                  fill="url(#radialGradient-19)"
                  filter="url(#filter-28)"
                  cx="60.0687506"
                  cy="48.689504"
                  rx="47.0809127"
                  ry="30.8366859"
                />
              </g>
            </g>
            <path
              d="M137.683571,20.3913307 C110.914318,20.3913307 86.2767573,29.5154031 66.7129033,44.8224339 M22.4373227,135.602349 C22.4373227,175.673063 42.9002941,210.965854 73.9494555,231.606962 M137.683571,250.813368 C201.332316,250.813368 252.929819,199.231638 252.929819,135.602349 C252.929819,115.491313 247.775356,96.5837985 238.71507,80.1280643"
              id="Oval-3"
              stroke="#EE3C7E"
              strokeWidth="2.03798074"
            />
            <g id="Oval-3" strokeDasharray="2.037980818748474,10.18990345001221">
              <use fill="black" fillOpacity="1" filter="url(#filter-30)" xlinkHref="#path-29" />
              <use stroke="#EE3C7E" strokeWidth="12.2278844" xlinkHref="#path-29" />
            </g>
            <path
              d="M36.7156189,134.582783 C36.7156189,161.242239 47.1596819,185.463099 64.1806421,203.37938 M121.291093,233.325769 C126.302134,234.099085 131.436044,234.500304 136.663693,234.500304 M167.06146,229.795279 C179.543479,225.816076 190.960432,219.451815 200.776228,211.23842 C218.821449,196.139033 231.455303,174.790201 235.347004,150.521691 M236.611766,134.582783 C236.611766,127.153814 235.80076,119.914209 234.262429,112.94762 C224.373925,68.1658801 184.432249,34.6652623 136.663693,34.6652623 M68.9196935,61.117354 C53.0023572,75.7934737 41.8656898,95.573896 38.1093289,117.859778"
              id="Oval-3"
              stroke="#EE3C7E"
              strokeWidth="12.2278844"
            />
          </g>
          <text
            id="营收100万-1000万"
            fontFamily="PingFangSC-Semibold, PingFang SC"
            fontSize="34.30944"
            fontWeight="500"
            fill="#ADE3FF"
          >
            <tspan x="0" y="643">
              营收100万-1000万
            </tspan>
          </text>
        </g>
      </g>
    );
  }
}
