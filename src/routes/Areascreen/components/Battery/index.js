import React, { Component, Fragment } from 'react';

export default class Battery extends Component {
  static defaultProps = {
    isReverse: false,
    path: '',
  };

  shouldComponentUpdate(nextProps) {
    const { isReverse } = this.props;
    if (nextProps.isReverse === isReverse) {
      return false;
    }

    return true;
  }

  render() {
    const { isReverse, path } = this.props;

    return (
      <Fragment>
        {isReverse ? (
          <svg
            width="80px"
            height="256px"
            viewBox="0 0 80 256"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                <stop stopColor="#00EEFF" offset="0%" />
                <stop stopColor="#3796FE" offset="100%" />
              </linearGradient>
            </defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g transform="translate(-4822.000000, -2493.000000)" fill="url(#linearGradient-1)">
                <g transform="translate(4386.000000, 2180.000000)">
                  <g transform="translate(436.000000, 313.000000)">
                    <path
                      d="M0,240 L80,240 L80,256 L0,256 L0,240 Z M0,180 L80,180 L80,196 L0,196 L0,180 Z M0,210 L80,210 L80,226 L0,226 L0,210 Z M0,150 L80,150 L80,166 L0,166 L0,150 Z M0,120 L80,120 L80,136 L0,136 L0,120 Z M0,60 L80,60 L80,76 L0,76 L0,60 Z M0,90 L80,90 L80,106 L0,106 L0,90 Z M0,30 L80,30 L80,46 L0,46 L0,30 Z M0,0 L80,0 L80,16 L0,16 L0,0 Z"
                      id="效益-底色"
                      opacity="0.100000001"
                    />
                    <path d={path} />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        ) : (
          <svg
            width="80px"
            height="256px"
            viewBox="0 0 80 256"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <linearGradient
                x1="100%"
                y1="17.3106447%"
                x2="72.1724025%"
                y2="87.7042686%"
                id="linearGradient-1"
              >
                <stop stopColor="#EE3C7E" offset="0%" />
                <stop stopColor="#FAAA96" offset="100%" />
              </linearGradient>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-bottomcontent">
                <stop stopColor="#EE3C7E" offset="0%" />
                <stop stopColor="#FAAA96" offset="100%" />
              </linearGradient>
            </defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g transform="translate(-4972.000000, -2791.000000)">
                <g transform="translate(4386.000000, 2180.000000)">
                  <g transform="translate(586.000000, 611.000000)">
                    <path
                      d="M0,0 L80,0 L80,16 L0,16 L0,0 Z M0,30 L80,30 L80,46 L0,46 L0,30 Z M0,60 L80,60 L80,76 L0,76 L0,60 Z M0,90 L80,90 L80,106 L0,106 L0,90 Z M0,120 L80,120 L80,136 L0,136 L0,120 Z M0,150 L80,150 L80,166 L0,166 L0,150 Z M0,180 L80,180 L80,196 L0,196 L0,180 Z M0,210 L80,210 L80,226 L0,226 L0,210 Z M0,240 L80,240 L80,256 L0,256 L0,240 Z"
                      fill="url(#linearGradient-1)"
                      opacity="0.100000001"
                    />
                    <path d={path} fill="url(#linearGradient-bottomcontent)" />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        )}
      </Fragment>
    );
  }
}
