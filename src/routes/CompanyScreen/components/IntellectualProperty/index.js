import React, { Component } from 'react';

export default class intellectualProperty extends Component {
  static defaultProps = {
    className: '',
    data: [],
  };

  render() {
    const { className, data } = this.props;

    return (
      <svg
        className={className}
        width="506px"
        height="248px"
        viewBox="0 0 506 248"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="第一页" transform="translate(-1368.000000, -126.000000)">
            <g id="Group-35" transform="translate(1368.000000, 122.000000)">
              <text
                id="数量(个)"
                opacity="0.8"
                fontFamily="PingFangSC-Regular, PingFang SC"
                fontSize="17.976"
                fontWeight="normal"
                fill="#ADE3FF"
              >
                <tspan x="0" y="19">
                  数量(个)
                </tspan>
              </text>
              <g
                id="Group-17"
                transform="translate(55.500000, 53.000000)"
                opacity="0.2"
                stroke="#CCEEFF"
                strokeWidth="1.68525"
              >
                <path d="M0,98.30625 L450,98.30625" id="Path-26" />
                <path d="M0,49.99575 L450,49.99575" id="Path-26" />
                <path d="M0,1.68525 L450,1.68525" id="Path-26" />
                <path d="M0,146.61675 L450,146.61675" id="Path-26" />
                <path d="M0,191.55675 L450,191.55675" id="Path-26" />
              </g>
              <text
                id="200"
                opacity="0.8"
                fontFamily="PingFangSC-Regular, PingFang SC"
                fontSize="16.8525"
                fontWeight="normal"
                fill="#ADE3FF"
              >
                <tspan x="5.08275" y="206">
                  {data && data[0]}
                </tspan>
              </text>
              <text
                id="400"
                opacity="0.8"
                fontFamily="PingFangSC-Regular, PingFang SC"
                fontSize="16.8525"
                fontWeight="normal"
                fill="#ADE3FF"
              >
                <tspan x="4.58275" y="158">
                  {data && data[1]}
                </tspan>
              </text>
              <text
                id="600"
                opacity="0.8"
                fontFamily="PingFangSC-Regular, PingFang SC"
                fontSize="16.8525"
                fontWeight="normal"
                fill="#ADE3FF"
              >
                <tspan x="4.58275" y="109.5">
                  {data && data[2]}
                </tspan>
              </text>
              <text
                id="800"
                opacity="0.8"
                fontFamily="PingFangSC-Regular, PingFang SC"
                fontSize="16.8525"
                fontWeight="normal"
                fill="#ADE3FF"
              >
                <tspan x="4.58275" y="59.5">
                  {data && data[3]}
                </tspan>
              </text>
              <text
                id="0"
                opacity="0.8"
                fontFamily="PingFangSC-Regular, PingFang SC"
                fontSize="16.8525"
                fontWeight="normal"
                fill="#ADE3FF"
              >
                <tspan x="28.8885" y="251">
                  0
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
