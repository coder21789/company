import React, { Component } from 'react';

export default class OCircle1 extends Component {
  render() {
    return (
      <g id="circle1" transform="scale(1)">
        <animateMotion dur="6s" begin="0" repeatCount="indefinite">
          <mpath xlinkHref="#Path-12" />
        </animateMotion>
        {/* <animateTransform
          id="first"
          attributeType="XML"
          attributeName="transform"
          type="scale"
          begin="0;second.end "
          from="1"
          to="0.512"
          dur="3s"
          fill="freeze"
        />
        <animateTransform
          id="second"
          attributeType="XML"
          attributeName="transform"
          type="scale"
          begin="first.end"
          from="0.512"
          to="1"
          dur="3s"
          fill="freeze"
        /> */}
        <g transform="translate(-583.026998, -625.384595)">
          <g id="Group-3" transform="translate(583.026998, 455.384595)">
            <g id="Group-2" transform="translate(71.302796, 68.735250)">
              <g id="Group">
                <ellipse
                  id="Oval-8"
                  fill="url(#linearGradient-circle8)"
                  cx="99.3146089"
                  cy="99.2842495"
                  rx="99.3146089"
                  ry="99.2842495"
                />
                <ellipse
                  id="Oval-4"
                  fill="url(#radialGradient-circle9)"
                  filter="url(#filter-10)"
                  cx="74.9926638"
                  cy="60.7862752"
                  rx="58.7780338"
                  ry="38.4979743"
                />
              </g>
            </g>
            <path
              d="M171.890669,25.4574999 C138.47067,25.4574999 107.711976,36.8484226 83.2875376,55.9584423 M28.0118128,169.292374 C28.0118128,219.318544 53.5587522,263.379731 92.3219911,289.149064 M171.890669,313.127249 C251.352767,313.127249 315.769526,248.730182 315.769526,169.292374 C315.769526,144.184807 309.33445,120.579773 298.023162,100.035658"
              id="Oval-3"
              stroke="#00B9FF"
              strokeWidth="2.54747592"
            />
            <g id="Oval-3" strokeDasharray="2.547475862503052,12.7373797416687">
              <use fill="black" fillOpacity="1" filter="url(#filter-12)" xlinkHref="#path-11" />
              <use stroke="#00B9FF" strokeWidth="15.2848555" xlinkHref="#path-11" />
            </g>
            <path
              d="M45.8375118,168.019499 C45.8375118,201.302423 58.8763731,231.540888 80.1261432,253.908418 M151.425526,291.294905 C157.681546,292.260348 164.090962,292.761249 170.617405,292.761249 M208.567413,286.887274 C224.150555,281.919449 238.404018,273.974005 250.658521,263.720016 C273.187027,244.869228 288.959726,218.216338 293.818309,187.918385 M295.397298,168.019499 C295.397298,158.744824 294.3848,149.706558 292.464275,141.009141 C280.118999,85.1015025 230.253926,43.2777498 170.617405,43.2777498 M86.0425987,76.3017898 C66.1706447,94.6241504 52.2671034,119.318963 47.5774852,147.14171"
              id="Oval-3"
              stroke="#00B9FF"
              strokeWidth="15.2848555"
            />
          </g>
          <text
            id="营收0-100万"
            fontFamily="PingFangSC-Semibold, PingFang SC"
            fontSize="42.8868"
            fontWeight="500"
            fill="#ADE3FF"
          >
            <tspan x="628.20907" y="855.17703">
              营收0-100万
            </tspan>
          </text>
        </g>
      </g>
    );
  }
}
