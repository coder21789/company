import React, { Component } from 'react';
// import pathStyleOrigin from './pathStyle';

export default class Map extends Component {
  static defaultProps = {
    pathStyle: [],
    container: '#onePWrap',
  };

  render() {
    const { pathStyle, container } = this.props;

    return (
      <svg
        id={container}
        width="835px"
        height="591px"
        viewBox="0 0 835 591"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            x1="80.7563463%"
            y1="109.883511%"
            x2="50%"
            y2="10.9015129%"
            id="linearGradient-1"
          >
            <stop stopColor="#FDC261" offset="0%" />
            <stop stopColor="#FA8F32" offset="100%" />
          </linearGradient>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-313.000000, -2921.000000)">
            <g transform="translate(314.000000, 2923.000000)">
              <g>
                <g fillOpacity="0.6">{pathStyle.map(item => <path {...item} key={item.id} />)}</g>
              </g>

              {pathStyle.map(item => {
                return (
                  <g key={item.id} transform={item.tagstyle} fillOpacity={item.rank <= 5 ? 1 : 0}>
                    <g
                      transform="translate(17.500000, 22.500000) rotate(180.000000) translate(-17.500000, -22.500000) "
                      fill="url(#linearGradient-1)"
                      fillRule="nonzero"
                    >
                      <path d="M32.5815523,21.9303719 C32.671154,22.044314 32.7383432,22.1582355 32.7831199,22.2721365 C34.26104,24.5886157 35,27.0759668 35,29.73419 C35,33.9493883 33.2869541,37.5474793 29.8608622,40.5284629 C26.4347703,43.5094465 22.3144708,44.9999589 17.4999637,45 C12.685505,45 8.5652297,43.5094876 5.13913782,40.5284629 C1.71304594,37.5474382 -1.03297795e-15,33.9493472 0,29.73419 C0,27.0379588 0.761348367,24.5316241 2.2840451,22.215186 C2.2840451,22.139252 2.30643342,22.082281 2.35121007,22.0442729 L17.4663812,0 L32.5815523,21.9303719 Z" />
                    </g>
                    <text
                      fontFamily="PingFangSC-Regular, PingFang SC"
                      fontSize="20"
                      fontWeight="normal"
                      fill="#FFFFFF"
                    >
                      <tspan x="12" y="25">
                        {item.rank}
                      </tspan>
                    </text>
                  </g>
                );
              })}
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
