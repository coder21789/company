import React, { Component } from 'react';
import styles from './index.less';

export default class Neurons extends Component {
  static defaultProps = {
    className: '',
    fillOpacity: 1,
    data: [
      {
        id: 'text-9',
        value: ['高端制造'],
      },
      {
        id: 'text-13',
        value: ['文化', '创意'],
      },
      {
        id: 'text-7',
        value: ['金融服务'],
      },
      {
        id: 'text-3',
        value: ['时尚', '行业'],
      },
      {
        id: 'text-13',
        value: ['生物健康'],
      },
      {
        id: 'text-5',
        value: ['旅游', '休闲'],
      },
      {
        id: 'text-11',
        value: ['信息科技'],
      },
    ],
  };

  render() {
    const { className, data, fillOpacity } = this.props;

    return (
      <svg
        className={className}
        width="2527px"
        height="2054px"
        viewBox="0 0 2527 2054"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            x1="24.5473014%"
            y1="11.9988256%"
            x2="76.4717555%"
            y2="88.2675194%"
            id="linearGradient-1"
          >
            <stop stopColor="#2E8FFF" offset="0%" />
            <stop stopColor="#3EBAEC" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="100%"
            y1="100%"
            x2="-1.11022302e-14%"
            y2="1.72254642e-14%"
            id="linearGradient-2"
          >
            <stop stopColor="#0097FF" offset="0%" />
            <stop stopColor="#00FFFF" offset="100%" />
          </linearGradient>
          <text
            id="text-3"
            fontFamily="PingFangSC-Semibold, PingFang SC"
            fontSize="70.2372021"
            fontWeight="500"
            fill="#FFFFFF"
          >
            <tspan x="2234.71365" y="1395.92229">
              {data && data[3] && data[3].value && data[3].value[0]}
            </tspan>
            <tspan x="2234.71365" y="1493.92229">
              {data && data[3] && data[3].value && data[3].value[1]}
            </tspan>
          </text>
          <filter
            x="-12.8%"
            y="-9.2%"
            width="125.5%"
            height="118.4%"
            filterUnits="objectBoundingBox"
            id="filter-4"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0.531391723   0 0 0 0 0.797087585  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <text
            id="text-5"
            fontFamily="PingFangSC-Semibold, PingFang SC"
            fontSize="70.2372021"
            fontWeight="500"
            fill="#FFFFFF"
          >
            <tspan x="2063.80312" y="645.945057">
              {data && data[5] && data[5].value && data[5].value[0]}
            </tspan>
            <tspan x="2063.80312" y="743.945057">
              {data && data[5] && data[5].value && data[5].value[1]}
            </tspan>
          </text>
          <filter
            x="-12.8%"
            y="-9.2%"
            width="125.5%"
            height="118.4%"
            filterUnits="objectBoundingBox"
            id="filter-6"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0.531391723   0 0 0 0 0.797087585  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <text
            id="text-7"
            fontFamily="PingFangSC-Semibold, PingFang SC"
            fontSize="70.2372021"
            fontWeight="500"
            fill="#FFFFFF"
          >
            <tspan x="107.697043" y="1391.63002">
              {data && data[2] && data[2].value && data[2].value}
            </tspan>
          </text>
          <filter
            x="-6.4%"
            y="-18.4%"
            width="112.8%"
            height="136.7%"
            filterUnits="objectBoundingBox"
            id="filter-8"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0.531391723   0 0 0 0 0.797087585  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <text
            id="text-9"
            fontFamily="PingFangSC-Semibold, PingFang SC"
            fontSize="70.2372021"
            fontWeight="500"
            fill="#FFFFFF"
          >
            <tspan x="364.062831" y="571.025375">
              {data && data[0] && data[0].value && data[0].value[0]}
            </tspan>
          </text>
          <filter
            x="-6.4%"
            y="-18.4%"
            width="112.8%"
            height="136.7%"
            filterUnits="objectBoundingBox"
            id="filter-10"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0.531391723   0 0 0 0 0.797087585  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <text
            id="text-11"
            fontFamily="PingFangSC-Semibold, PingFang SC"
            fontSize="70.2372021"
            fontWeight="500"
            fill="#FFFFFF"
          >
            <tspan x="1625.99123" y="1039.27339">
              {data && data[4] && data[4].value && data[4].value[0]}
            </tspan>
          </text>
          <filter
            x="-6.4%"
            y="-18.4%"
            width="112.8%"
            height="136.7%"
            filterUnits="objectBoundingBox"
            id="filter-12"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0.531391723   0 0 0 0 0.797087585  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <text
            id="text-13"
            fontFamily="PingFangSC-Semibold, PingFang SC"
            fontSize="70.2372021"
            fontWeight="500"
            fill="#FFFFFF"
          >
            <tspan x="793.680384" y="988.936728">
              {data && data[1] && data[1].value && data[1].value[0]}
            </tspan>
            <tspan x="793.680384" y="1086.93673">
              {data && data[1] && data[1].value && data[1].value[1]}
            </tspan>
          </text>
          <filter
            x="-12.8%"
            y="-9.2%"
            width="125.5%"
            height="118.4%"
            filterUnits="objectBoundingBox"
            id="filter-14"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0.531391723   0 0 0 0 0.797087585  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <text
            id="text-15"
            fontFamily="PingFangSC-Semibold, PingFang SC"
            fontSize="70.2372021"
            fontWeight="500"
            fill="#FFFFFF"
          >
            <tspan x="1158.0256" y="310">
              {data && data[6] && data[6].value && data[6].value[0]}
            </tspan>
          </text>
          <filter
            x="-6.4%"
            y="-18.4%"
            width="112.8%"
            height="136.7%"
            filterUnits="objectBoundingBox"
            id="filter-16"
          >
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0.531391723   0 0 0 0 0.797087585  0 0 0 1 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
        </defs>
        <g id="大屏-0727" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="五常街道产业大脑" transform="translate(-1651.000000, -1186.000000)">
            <g id="树" transform="translate(1653.000000, 1188.000000)">
              <path
                d="M1361.4311,2047.6451 L1361.4311,1533.02411 C1361.4311,1468.37255 1413.84155,1415.9621 1478.4931,1415.9621 L2154.83668,1415.9621"
                id="Rectangle-13-Copy"
                stroke="url(#linearGradient-1)"
                strokeWidth="23.4124007"
              />
              <path
                d="M1361.4311,2045.8036 L1361.4311,784.997904 C1361.4311,720.346344 1413.84155,667.9359 1478.4931,667.9359 L2154.83668,667.9359"
                id="Rectangle-13-Copy-4"
                stroke="url(#linearGradient-1)"
                strokeWidth="23.4124007"
              />
              <path
                d="M1412.93838,1590.38449 C1477.58994,1590.38449 1530.00039,1642.79493 1530.00039,1707.44649 L1530.00039,2070.80611"
                id="Rectangle-11-Copy"
                stroke="url(#linearGradient-1)"
                strokeWidth="23.4124007"
                transform="translate(1471.469384, 1830.595298) scale(-1, 1) translate(-1471.469384, -1830.595298) "
              />
              <path
                d="M1203,2054 C1203,1649.33333 1203,1339.33333 1203,1124 C1203,1070 1203,1016 1091,1016 C1061.66667,1016 1033.33333,1016 1006,1016"
                id="Path-19"
                stroke="url(#linearGradient-1)"
                strokeWidth="23.4124007"
              />
              <path
                d="M1361.4311,2070.67643 L1361.4311,1136.18391 C1361.4311,1071.53235 1413.84155,1019.12191 1478.4931,1019.12191 L1639.76387,1019.12191"
                id="Rectangle-13"
                stroke="url(#linearGradient-1)"
                strokeWidth="23.4124007"
              />
              <path
                d="M1143,2056 C1143,1869.8814 1143,1680.21473 1143,1487 C1143,1438 1117,1371.47854 1019,1371.47854 C891.666667,1371.47854 693.666667,1371.47854 425,1371.47854"
                id="Path-17"
                stroke="url(#linearGradient-1)"
                strokeWidth="23.4124007"
              />
              <path
                d="M1085,2050 C1085,1860.66667 1085,1717 1085,1619 C1085,1587 1076,1522 992,1522 C975.333333,1522 961,1522 949,1522"
                id="Path-18"
                stroke="url(#linearGradient-1)"
                strokeWidth="23.4124007"
              />
              <path
                d="M1204,2051 C1204,1536.33333 1204,1069 1204,649 C1204,632 1204,560 1110,542 C960.666667,542 815.666667,542 675,542"
                id="Path-21"
                stroke="url(#linearGradient-1)"
                strokeWidth="23.4124007"
              />
              <path
                d="M1296,2051 C1296,1347.66667 1296,818 1296,462 C1296,454 1303.99838,439 1320,439 C1326.66667,439 1340.33333,439 1361,439"
                id="Path-22"
                stroke="url(#linearGradient-1)"
                strokeWidth="23.4124007"
              />
              <path
                d="M493.072766,1026.29032 L455.395537,1004.81272 C454.656722,1004.39156 454.200574,1003.60648 454.200574,1002.75606 L454.200574,959.852838 C454.200574,959.002415 454.656722,958.217335 455.395537,957.796179 L493.072766,936.318575 C493.799465,935.904326 494.690831,935.904326 495.41753,936.318575 L533.094759,957.796179 C533.833574,958.217335 534.289722,959.002415 534.289722,959.852838 L534.289722,1002.75606 C534.289722,1003.60648 533.833574,1004.39156 533.094759,1004.81272 L495.41753,1026.29032 C494.690831,1026.70457 493.799465,1026.70457 493.072766,1026.29032 Z"
                id="Star-Copy-23"
                fill="url(#linearGradient-2)"
                opacity="0.400000006"
              />
              <path
                d="M1927.08231,1379.81757 L1889.40508,1358.33997 C1888.66627,1357.91881 1888.21012,1357.13373 1888.21012,1356.28331 L1888.21012,1313.38009 C1888.21012,1312.52967 1888.66627,1311.74459 1889.40508,1311.32343 L1927.08231,1289.84583 C1927.80901,1289.43158 1928.70037,1289.43158 1929.42707,1289.84583 L1967.1043,1311.32343 C1967.84312,1311.74459 1968.29927,1312.52967 1968.29927,1313.38009 L1968.29927,1356.28331 C1968.29927,1357.13373 1967.84312,1357.91881 1967.1043,1358.33997 L1929.42707,1379.81757 C1928.70037,1380.23182 1927.80901,1380.23182 1927.08231,1379.81757 Z"
                id="Star-Copy-25"
                fill="url(#linearGradient-2)"
                opacity="0.200000003"
              />
              <path
                d="M1781.12987,599.122394 L1729.03014,569.423354 C1728.29132,569.002198 1727.83517,568.217118 1727.83517,567.366695 L1727.83517,508.0206 C1727.83517,507.170177 1728.29132,506.385097 1729.03014,505.963942 L1781.12987,476.264901 C1781.85657,475.850652 1782.74794,475.850652 1783.47464,476.264901 L1835.57437,505.963942 C1836.31319,506.385097 1836.76934,507.170177 1836.76934,508.0206 L1836.76934,567.366695 C1836.76934,568.217118 1836.31319,569.002198 1835.57437,569.423354 L1783.47464,599.122394 C1782.74794,599.536643 1781.85657,599.536643 1781.12987,599.122394 Z"
                id="Star-Copy-24"
                fill="url(#linearGradient-2)"
                opacity="0.300000012"
              />
              <path
                d="M975.742308,735.053345 L918.961071,702.685652 C918.222256,702.264497 917.766108,701.479417 917.766108,700.628994 L917.766108,635.945595 C917.766108,635.095172 918.222256,634.310093 918.961071,633.888937 L975.742308,601.521245 C976.469007,601.106996 977.360373,601.106996 978.087072,601.521245 L1034.86831,633.888937 C1035.60712,634.310093 1036.06327,635.095172 1036.06327,635.945595 L1036.06327,700.628994 C1036.06327,701.479417 1035.60712,702.264497 1034.86831,702.685652 L978.087072,735.053345 C977.360373,735.467594 976.469007,735.467594 975.742308,735.053345 Z"
                id="Star-Copy-36"
                fill="url(#linearGradient-2)"
                opacity="0.699999988"
              />
              <g id="Group-10" transform="translate(2087.215523, 1168.571069)">
                <g id="Group-7-Copy">
                  <path
                    d="M216.443733,431.166933 L63.6021888,342.688589 C62.6371018,342.129911 62.0428619,341.099285 62.0428619,339.984155 L62.0428619,163.013043 C62.0428619,161.897913 62.6371018,160.867287 63.6021888,160.308609 L216.443733,71.8302648 C217.412164,71.2696504 218.606439,71.2696504 219.57487,71.8302648 L372.416414,160.308609 C373.381501,160.867287 373.975741,161.897913 373.975741,163.013043 L373.975741,339.984155 C373.975741,341.099285 373.381501,342.129911 372.416414,342.688589 L219.57487,431.166933 C218.606439,431.727548 217.412164,431.727548 216.443733,431.166933 Z"
                    id="Star-Copy-9"
                    fill="url(#linearGradient-2)"
                  />
                  <path
                    d="M217.717723,465.759664 L34.5064754,360.038685 C33.5392793,359.48057 32.9434064,358.448761 32.9434064,357.332087 L32.9434064,145.892998 C32.9434064,144.776324 33.5392793,143.744515 34.5064754,143.186401 L217.717723,37.4654208 C218.684253,36.9076903 219.874845,36.9076903 220.841375,37.4654208 L404.052622,143.186401 C405.019818,143.744515 405.615691,144.776324 405.615691,145.892998 L405.615691,357.332087 C405.615691,358.448761 405.019818,359.48057 404.052622,360.038685 L220.841375,465.759664 C219.874845,466.317395 218.684253,466.317395 217.717723,465.759664 Z"
                    id="Star-Copy-10"
                    stroke="url(#linearGradient-1)"
                    strokeWidth="3.12489526"
                    opacity="0.600000024"
                  />
                  <path
                    d="M216.172124,501.776016 L1.56169267,377.79078 C0.595272181,377.232458 -1.54187774e-12,376.201084 -1.56319402e-12,375.084978 L-1.66267e-12,127.111018 C-1.65556457e-12,125.994911 0.595272181,124.963538 1.56169267,124.405215 L216.172124,0.419978721 C217.139354,-0.13881141 218.3313,-0.13881141 219.298529,0.419978721 L433.90896,124.405215 C434.875381,124.963538 435.470653,125.994911 435.470653,127.111018 L435.470653,375.084978 C435.470653,376.201084 434.875381,377.232458 433.90896,377.79078 L219.298529,501.776016 C218.3313,502.334807 217.139354,502.334807 216.172124,501.776016 Z"
                    id="Star-Copy-11"
                    stroke="url(#linearGradient-1)"
                    strokeWidth="3.12489526"
                    opacity="0.200000003"
                  />
                </g>
              </g>
              <g
                className={styles.opacityfadeIn}
                style={{ fillOpacity }}
                id="时尚-行业"
                fill="#FFFFFF"
                fillOpacity="1"
              >
                <use filter="url(#filter-4)" xlinkHref="#text-3" />
                <use xlinkHref="#text-3" />
              </g>
              <g id="Group-7-Copy-2" transform="translate(1936.205538, 442.006233)">
                <path
                  d="M196.477387,391.437064 L57.6067583,311.003091 C56.7297298,310.495115 56.1897617,309.558363 56.1897617,308.544846 L56.1897617,147.661134 C56.1897617,146.647617 56.7297298,145.710865 57.6067583,145.202889 L196.477387,64.7689159 C197.358069,64.2588239 198.444339,64.2588239 199.325021,64.7689159 L338.19565,145.202889 C339.072678,145.710865 339.612647,146.647617 339.612647,147.661134 L339.612647,308.544846 C339.612647,309.558363 339.072678,310.495115 338.19565,311.003091 L199.325021,391.437064 C198.444339,391.947156 197.358069,391.947156 196.477387,391.437064 Z"
                  id="Star-Copy-9"
                  fill="url(#linearGradient-2)"
                />
                <path
                  d="M197.817455,423.417105 L31.3528489,327.308006 C30.4739025,326.800542 29.9324499,325.862715 29.9324499,324.847793 L29.9324499,132.629557 C29.9324499,131.614635 30.4739025,130.676808 31.3528489,130.169345 L197.817455,34.0602449 C198.69641,33.5527763 199.779329,33.5527763 200.658284,34.0602449 L367.12289,130.169345 C368.001837,130.676808 368.543289,131.614635 368.543289,132.629557 L368.543289,324.847793 C368.543289,325.862715 368.001837,326.800542 367.12289,327.308006 L200.658284,423.417105 C199.779329,423.924574 198.69641,423.924574 197.817455,423.417105 Z"
                  id="Star-Copy-10"
                  stroke="url(#linearGradient-1)"
                  strokeWidth="2.84081388"
                  opacity="0.600000024"
                />
                <path
                  d="M196.41312,456.159242 L1.41914758,343.446274 C0.54090647,342.938621 -1.38555833e-12,342.00119 -1.40687462e-12,340.986784 L-1.49924517e-12,115.555029 C-1.48858703e-12,114.540624 0.54090647,113.603192 1.41914758,113.09554 L196.41312,0.382571701 C197.29271,-0.125860848 198.376862,-0.125860848 199.256452,0.382571701 L394.250424,113.09554 C395.128665,113.603192 395.669572,114.540624 395.669572,115.555029 L395.669572,340.986784 C395.669572,342.00119 395.128665,342.938621 394.250424,343.446274 L199.256452,456.159242 C198.376862,456.667675 197.29271,456.667675 196.41312,456.159242 Z"
                  id="Star-Copy-11"
                  stroke="url(#linearGradient-1)"
                  strokeWidth="2.84081388"
                  opacity="0.200000003"
                />
              </g>
              <g
                className={styles.opacityfadeIn}
                style={{ fillOpacity }}
                id="旅游-休闲"
                fill="#FFFFFF"
                fillOpacity="1"
              >
                <use filter="url(#filter-6)" xlinkHref="#text-5" />
                <use xlinkHref="#text-5" />
              </g>
              <g id="Group-11" transform="translate(0.000000, 1081.164773)">
                <path
                  d="M245.806576,490.009625 L72.0086579,389.361604 C70.9122538,388.726666 70.2372021,387.55566 70.2372021,386.288677 L70.2372021,184.973901 C70.2372021,183.706917 70.9122538,182.535911 72.0086579,181.900973 L245.806576,81.2529519 C246.907323,80.6154991 248.264952,80.6154991 249.365699,81.2529519 L423.163617,181.900973 C424.260021,182.535911 424.935073,183.706917 424.935073,184.973901 L424.935073,386.288677 C424.935073,387.55566 424.260021,388.726666 423.163617,389.361604 L249.365699,490.009625 C248.264952,490.647078 246.907323,490.647078 245.806576,490.009625 Z"
                  id="Star-Copy-3"
                  fill="url(#linearGradient-2)"
                />
                <path
                  d="M247.566759,529.815558 L39.2355498,409.553541 C38.1367485,408.919243 37.4598411,407.746893 37.4598411,406.478154 L37.4598411,165.955043 C37.4598411,164.686304 38.1367485,163.513954 39.2355498,162.879656 L247.566759,42.617639 C248.665346,41.9834648 250.018789,41.9834648 251.117376,42.617639 L459.448585,162.879656 C460.547387,163.513954 461.224294,164.686304 461.224294,165.955043 L461.224294,406.478154 C461.224294,407.746893 460.547387,408.919243 459.448585,409.553541 L251.117376,529.815558 C250.018789,530.449732 248.665346,530.449732 247.566759,529.815558 Z"
                  id="Star-Copy-4"
                  stroke="url(#linearGradient-1)"
                  strokeWidth="3.55101735"
                  opacity="0.600000024"
                />
                <path
                  d="M245.809265,570.785209 L1.77414442,429.747066 C0.676224699,429.112532 -1.74793513e-12,427.940676 -1.74793513e-12,426.672583 L-1.84741111e-12,144.589994 C-1.84030569e-12,143.321901 0.676224699,142.150045 1.77414442,141.515511 L245.809265,0.477368322 C246.908646,-0.15801057 248.263629,-0.15801057 249.36301,0.477368322 L493.39813,141.515511 C494.49605,142.150045 495.172275,143.321901 495.172275,144.589994 L495.172275,426.672583 C495.172275,427.940676 494.49605,429.112532 493.39813,429.747066 L249.36301,570.785209 C248.263629,571.420588 246.908646,571.420588 245.809265,570.785209 Z"
                  id="Star-Copy-5"
                  stroke="url(#linearGradient-1)"
                  strokeWidth="3.55101735"
                  opacity="0.200000003"
                />
              </g>
              <g
                className={styles.opacityfadeIn}
                style={{ fillOpacity }}
                id="金融服务"
                fill="#FFFFFF"
                fillOpacity="1"
              >
                <use filter="url(#filter-8)" xlinkHref="#text-7" />
                <use xlinkHref="#text-7" />
              </g>
              <g id="Group-8" transform="translate(256.365788, 260.560128)">
                <path
                  d="M245.806576,490.009625 L72.0086579,389.361604 C70.9122538,388.726666 70.2372021,387.55566 70.2372021,386.288677 L70.2372021,184.973901 C70.2372021,183.706917 70.9122538,182.535911 72.0086579,181.900973 L245.806576,81.2529519 C246.907323,80.6154991 248.264952,80.6154991 249.365699,81.2529519 L423.163617,181.900973 C424.260021,182.535911 424.935073,183.706917 424.935073,184.973901 L424.935073,386.288677 C424.935073,387.55566 424.260021,388.726666 423.163617,389.361604 L249.365699,490.009625 C248.264952,490.647078 246.907323,490.647078 245.806576,490.009625 Z"
                  id="Star-Copy-2"
                  fill="url(#linearGradient-2)"
                />
                <path
                  d="M247.566759,529.815558 L39.2355498,409.553541 C38.1367485,408.919243 37.4598411,407.746893 37.4598411,406.478154 L37.4598411,165.955043 C37.4598411,164.686304 38.1367485,163.513954 39.2355498,162.879656 L247.566759,42.617639 C248.665346,41.9834648 250.018789,41.9834648 251.117376,42.617639 L459.448585,162.879656 C460.547387,163.513954 461.224294,164.686304 461.224294,165.955043 L461.224294,406.478154 C461.224294,407.746893 460.547387,408.919243 459.448585,409.553541 L251.117376,529.815558 C250.018789,530.449732 248.665346,530.449732 247.566759,529.815558 Z"
                  id="Star-Copy-2"
                  stroke="url(#linearGradient-1)"
                  strokeWidth="3.55101735"
                />
                <path
                  d="M245.809265,570.785209 L1.77414442,429.747066 C0.676224699,429.112532 -1.74793513e-12,427.940676 -1.74793513e-12,426.672583 L-1.84741111e-12,144.589994 C-1.84030569e-12,143.321901 0.676224699,142.150045 1.77414442,141.515511 L245.809265,0.477368322 C246.908646,-0.15801057 248.263629,-0.15801057 249.36301,0.477368322 L493.39813,141.515511 C494.49605,142.150045 495.172275,143.321901 495.172275,144.589994 L495.172275,426.672583 C495.172275,427.940676 494.49605,429.112532 493.39813,429.747066 L249.36301,570.785209 C248.263629,571.420588 246.908646,571.420588 245.809265,570.785209 Z"
                  id="Star-Copy-2"
                  stroke="url(#linearGradient-1)"
                  strokeWidth="3.55101735"
                  opacity="0.6"
                />
              </g>
              <g
                className={styles.opacityfadeIn}
                style={{ fillOpacity }}
                id="高端制造"
                fill="#FFFFFF"
                fillOpacity="1"
              >
                <use filter="url(#filter-10)" xlinkHref="#text-9" />
                <use xlinkHref="#text-9" />
              </g>
              <path
                d="M1644.26796,1735.66237 L1526.50158,1667.66992 C1525.76912,1667.24703 1525.31791,1666.46551 1525.31791,1665.61974 L1525.31791,1529.63484 C1525.31791,1528.78907 1525.76912,1528.00754 1526.50158,1527.58466 L1644.26796,1459.59221 C1645.00042,1459.16932 1645.90284,1459.16932 1646.6353,1459.59221 L1764.40168,1527.58466 C1765.13414,1528.00754 1765.58535,1528.78907 1765.58535,1529.63484 L1765.58535,1665.61974 C1765.58535,1666.46551 1765.13414,1667.24703 1764.40168,1667.66992 L1646.6353,1735.66237 C1645.90284,1736.08525 1645.00042,1736.08525 1644.26796,1735.66237 Z"
                id="Star-Copy-19"
                fill="url(#linearGradient-2)"
                opacity="0.800000012"
              />
              <path
                d="M2028.68276,1875.9836 L1969.00724,1841.96605 C1968.26843,1841.54489 1967.81228,1840.75981 1967.81228,1839.90939 L1967.81228,1771.92627 C1967.81228,1771.07585 1968.26843,1770.29077 1969.00724,1769.86961 L2028.68276,1735.85206 C2029.40946,1735.43781 2030.30082,1735.43781 2031.02752,1735.85206 L2090.70304,1769.86961 C2091.44185,1770.29077 2091.898,1771.07585 2091.898,1771.92627 L2091.898,1839.90939 C2091.898,1840.75981 2091.44185,1841.54489 2090.70304,1841.96605 L2031.02752,1875.9836 C2030.30082,1876.39785 2029.40946,1876.39785 2028.68276,1875.9836 Z"
                id="Star-Copy-30"
                fill="url(#linearGradient-2)"
                opacity="0.400000006"
              />
              <path
                d="M885.57489,1610.94236 L798.387207,1561.24171 C797.648392,1560.82056 797.192244,1560.03548 797.192244,1559.18505 L797.192244,1459.83575 C797.192244,1458.98533 797.648392,1458.20025 798.387207,1457.77909 L885.57489,1408.07845 C886.301589,1407.6642 887.192955,1407.6642 887.919653,1408.07845 L975.107336,1457.77909 C975.846151,1458.20025 976.302299,1458.98533 976.302299,1459.83575 L976.302299,1559.18505 C976.302299,1560.03548 975.846151,1560.82056 975.107336,1561.24171 L887.919653,1610.94236 C887.192955,1611.35661 886.301589,1611.35661 885.57489,1610.94236 Z"
                id="Star-Copy-28"
                fill="url(#linearGradient-2)"
              />
              <g id="Group-7" transform="translate(666.082800, 784.997904)">
                <path
                  d="M196.477387,391.437064 L57.6067583,311.003091 C56.7297298,310.495115 56.1897617,309.558363 56.1897617,308.544846 L56.1897617,147.661134 C56.1897617,146.647617 56.7297298,145.710865 57.6067583,145.202889 L196.477387,64.7689159 C197.358069,64.2588239 198.444339,64.2588239 199.325021,64.7689159 L338.19565,145.202889 C339.072678,145.710865 339.612647,146.647617 339.612647,147.661134 L339.612647,308.544846 C339.612647,309.558363 339.072678,310.495115 338.19565,311.003091 L199.325021,391.437064 C198.444339,391.947156 197.358069,391.947156 196.477387,391.437064 Z"
                  id="Star-Copy-9"
                  fill="url(#linearGradient-2)"
                />
                <path
                  d="M197.817455,423.417105 L31.3528489,327.308006 C30.4739025,326.800542 29.9324499,325.862715 29.9324499,324.847793 L29.9324499,132.629557 C29.9324499,131.614635 30.4739025,130.676808 31.3528489,130.169345 L197.817455,34.0602449 C198.69641,33.5527763 199.779329,33.5527763 200.658284,34.0602449 L367.12289,130.169345 C368.001837,130.676808 368.543289,131.614635 368.543289,132.629557 L368.543289,324.847793 C368.543289,325.862715 368.001837,326.800542 367.12289,327.308006 L200.658284,423.417105 C199.779329,423.924574 198.69641,423.924574 197.817455,423.417105 Z"
                  id="Star-Copy-10"
                  stroke="url(#linearGradient-1)"
                  strokeWidth="2.84081388"
                  opacity="0.600000024"
                />
                <path
                  d="M196.41312,456.159242 L1.41914758,343.446274 C0.54090647,342.938621 -1.38555833e-12,342.00119 -1.40687462e-12,340.986784 L-1.49924517e-12,115.555029 C-1.48858703e-12,114.540624 0.54090647,113.603192 1.41914758,113.09554 L196.41312,0.382571701 C197.29271,-0.125860848 198.376862,-0.125860848 199.256452,0.382571701 L394.250424,113.09554 C395.128665,113.603192 395.669572,114.540624 395.669572,115.555029 L395.669572,340.986784 C395.669572,342.00119 395.128665,342.938621 394.250424,343.446274 L199.256452,456.159242 C198.376862,456.667675 197.29271,456.667675 196.41312,456.159242 Z"
                  id="Star-Copy-11"
                  stroke="url(#linearGradient-1)"
                  strokeWidth="2.84081388"
                  opacity="0.200000003"
                />
              </g>
              <g id="Group-9" transform="translate(1518.294186, 728.808142)">
                <path
                  d="M245.806576,490.009625 L72.0086579,389.361604 C70.9122538,388.726666 70.2372021,387.55566 70.2372021,386.288677 L70.2372021,184.973901 C70.2372021,183.706917 70.9122538,182.535911 72.0086579,181.900973 L245.806576,81.2529519 C246.907323,80.6154991 248.264952,80.6154991 249.365699,81.2529519 L423.163617,181.900973 C424.260021,182.535911 424.935073,183.706917 424.935073,184.973901 L424.935073,386.288677 C424.935073,387.55566 424.260021,388.726666 423.163617,389.361604 L249.365699,490.009625 C248.264952,490.647078 246.907323,490.647078 245.806576,490.009625 Z"
                  id="Star-Copy-6"
                  fill="url(#linearGradient-2)"
                />
                <path
                  d="M247.566759,529.815558 L39.2355498,409.553541 C38.1367485,408.919243 37.4598411,407.746893 37.4598411,406.478154 L37.4598411,165.955043 C37.4598411,164.686304 38.1367485,163.513954 39.2355498,162.879656 L247.566759,42.617639 C248.665346,41.9834648 250.018789,41.9834648 251.117376,42.617639 L459.448585,162.879656 C460.547387,163.513954 461.224294,164.686304 461.224294,165.955043 L461.224294,406.478154 C461.224294,407.746893 460.547387,408.919243 459.448585,409.553541 L251.117376,529.815558 C250.018789,530.449732 248.665346,530.449732 247.566759,529.815558 Z"
                  id="Star-Copy-7"
                  stroke="url(#linearGradient-1)"
                  strokeWidth="3.55101735"
                  opacity="0.600000024"
                />
                <path
                  d="M245.809265,570.785209 L1.77414442,429.747066 C0.676224699,429.112532 -1.74793513e-12,427.940676 -1.74793513e-12,426.672583 L-1.84741111e-12,144.589994 C-1.84030569e-12,143.321901 0.676224699,142.150045 1.77414442,141.515511 L245.809265,0.477368322 C246.908646,-0.15801057 248.263629,-0.15801057 249.36301,0.477368322 L493.39813,141.515511 C494.49605,142.150045 495.172275,143.321901 495.172275,144.589994 L495.172275,426.672583 C495.172275,427.940676 494.49605,429.112532 493.39813,429.747066 L249.36301,570.785209 C248.263629,571.420588 246.908646,571.420588 245.809265,570.785209 Z"
                  id="Star-Copy-8"
                  stroke="url(#linearGradient-1)"
                  strokeWidth="3.55101735"
                  opacity="0.200000003"
                />
              </g>
              <g
                className={styles.opacityfadeIn}
                style={{ fillOpacity }}
                id="生物健康"
                fill="#FFFFFF"
                fillOpacity="1"
              >
                <use filter="url(#filter-12)" xlinkHref="#text-11" />
                <use xlinkHref="#text-11" />
              </g>
              <g
                className={styles.opacityfadeIn}
                style={{ fillOpacity }}
                id="文化-创意"
                fill="#FFFFFF"
                fillOpacity="1"
              >
                <use filter="url(#filter-14)" xlinkHref="#text-13" />
                <use xlinkHref="#text-13" />
              </g>
              <path
                d="M694.761229,1881.44548 L594.699321,1824.40599 C593.960506,1823.98483 593.504358,1823.19975 593.504358,1822.34933 L593.504358,1708.32233 C593.504358,1707.47191 593.960506,1706.68683 594.699321,1706.26567 L694.761229,1649.22618 C695.487928,1648.81193 696.379294,1648.81193 697.105993,1649.22618 L797.167901,1706.26567 C797.906716,1706.68683 798.362864,1707.47191 798.362864,1708.32233 L798.362864,1822.34933 C798.362864,1823.19975 797.906716,1823.98483 797.167901,1824.40599 L697.105993,1881.44548 C696.379294,1881.85973 695.487928,1881.85973 694.761229,1881.44548 Z"
                id="Star-Copy-27"
                fill="url(#linearGradient-2)"
                opacity="0.600000024"
              />
              <g id="Group-3" transform="translate(1050.000000, 0.000000)">
                <path
                  d="M245.806576,490.009625 L72.0086579,389.361604 C70.9122538,388.726666 70.2372021,387.55566 70.2372021,386.288677 L70.2372021,184.973901 C70.2372021,183.706917 70.9122538,182.535911 72.0086579,181.900973 L245.806576,81.2529519 C246.907323,80.6154991 248.264952,80.6154991 249.365699,81.2529519 L423.163617,181.900973 C424.260021,182.535911 424.935073,183.706917 424.935073,184.973901 L424.935073,386.288677 C424.935073,387.55566 424.260021,388.726666 423.163617,389.361604 L249.365699,490.009625 C248.264952,490.647078 246.907323,490.647078 245.806576,490.009625 Z"
                  id="Star-Copy-12"
                  fill="url(#linearGradient-2)"
                />
                <path
                  d="M247.566759,529.815558 L39.2355498,409.553541 C38.1367485,408.919243 37.4598411,407.746893 37.4598411,406.478154 L37.4598411,165.955043 C37.4598411,164.686304 38.1367485,163.513954 39.2355498,162.879656 L247.566759,42.617639 C248.665346,41.9834648 250.018789,41.9834648 251.117376,42.617639 L459.448585,162.879656 C460.547387,163.513954 461.224294,164.686304 461.224294,165.955043 L461.224294,406.478154 C461.224294,407.746893 460.547387,408.919243 459.448585,409.553541 L251.117376,529.815558 C250.018789,530.449732 248.665346,530.449732 247.566759,529.815558 Z"
                  id="Star-Copy-13"
                  stroke="url(#linearGradient-1)"
                  strokeWidth="3.55101735"
                  opacity="0.600000024"
                />
                <path
                  d="M245.809265,570.785209 L1.77414442,429.747066 C0.676224699,429.112532 -1.74793513e-12,427.940676 -1.74793513e-12,426.672583 L-1.84741111e-12,144.589994 C-1.84030569e-12,143.321901 0.676224699,142.150045 1.77414442,141.515511 L245.809265,0.477368322 C246.908646,-0.15801057 248.263629,-0.15801057 249.36301,0.477368322 L493.39813,141.515511 C494.49605,142.150045 495.172275,143.321901 495.172275,144.589994 L495.172275,426.672583 C495.172275,427.940676 494.49605,429.112532 493.39813,429.747066 L249.36301,570.785209 C248.263629,571.420588 246.908646,571.420588 245.809265,570.785209 Z"
                  id="Star-Copy-14"
                  stroke="url(#linearGradient-1)"
                  strokeWidth="3.55101735"
                  opacity="0.200000003"
                />
              </g>
              <g
                className={styles.opacityfadeIn}
                style={{ fillOpacity }}
                id="信息科技"
                fill="#FFFFFF"
                fillOpacity="1"
              >
                <use filter="url(#filter-16)" xlinkHref="#text-15" />
                <use xlinkHref="#text-15" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
