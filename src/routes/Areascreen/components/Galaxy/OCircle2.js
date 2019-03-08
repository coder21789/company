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
          <mpath xlinkHref="#Path-15" />
        </animateMotion>
        <g transform="translate(-900.494209, -242.480933)">
          <g id="Group-3-Copy" transform="translate(900.494209, 142.480933)">
            <g id="Group-2" transform="translate(37.957210, 36.590407)">
              <g id="Group">
                <ellipse
                  id="Oval-8"
                  fill="url(#linearGradient-13)"
                  cx="52.8689709"
                  cy="52.8528094"
                  rx="52.8689709"
                  ry="52.8528094"
                />
                <ellipse
                  id="Oval-4"
                  fill="url(#radialGradient-14)"
                  filter="url(#filter-15)"
                  cx="39.9214678"
                  cy="32.3588629"
                  rx="31.2897991"
                  ry="20.4939465"
                />
              </g>
            </g>
            <path
              d="M91.5039881,13.5520024 C73.7132421,13.5520024 57.3392113,19.6158269 44.3371469,29.7888225 M14.911761,90.1208161 C14.911761,116.751663 28.5113756,140.207121 49.1465326,153.925123 M91.5039881,166.68963 C133.804707,166.68963 168.096215,132.408604 168.096215,90.1208161 C168.096215,76.7550964 164.670578,64.1892326 158.649146,53.2528129"
              id="Oval-3"
              stroke="#FFE66B"
              strokeWidth="1.35865382"
            />
            <g id="Oval-3" strokeDasharray="1.35865387916565,6.793269395828247">
              <use fill="black" fillOpacity="1" filter="url(#filter-17)" xlinkHref="#path-16" />
              <use stroke="#FFE66B" strokeWidth="8.15192294" xlinkHref="#path-16" />
            </g>
            <path
              d="M24.4010635,89.443216 C24.4010635,107.160991 31.3421489,123.258085 42.6542155,135.165178 M80.6096085,155.067437 C83.9399274,155.581379 87.351905,155.848028 90.8261807,155.848028 M111.028424,152.721086 C119.323927,150.076522 126.911591,145.846858 133.435133,140.388267 C145.42792,130.353271 153.824332,116.164916 156.410742,100.036155 M157.251298,89.443216 C157.251298,84.5059512 156.712307,79.6945361 155.689938,75.0645675 C149.118074,45.3027899 122.572985,23.0384041 90.8261807,23.0384041 M45.8037715,40.6183657 C35.2251691,50.3720602 27.8237814,63.5180551 25.327318,78.3291693"
              id="Oval-3"
              stroke="#FFE66B"
              strokeWidth="8.15192294"
            />
          </g>
          <text
            id="营收5000万-3亿"
            fontFamily="PingFangSC-Semibold, PingFang SC"
            fontSize="34.30944"
            fontWeight="500"
            fill="#ADE3FF"
          >
            <tspan x="861" y="362">
              营收5000万-3亿
            </tspan>
          </text>
        </g>
      </g>
    );
  }
}
