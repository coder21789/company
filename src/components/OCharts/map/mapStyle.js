import React, { Component } from 'react';

export default class MapStyle extends Component {
  render() {
    return (
      <g id="Bitmap">
        <mask id="mask-2" fill="white">
          <use xlinkHref="#rect-bg" />
        </mask>
        <g id="Mask" />
        <image
          mask="url(#mask-2)"
          x="-93"
          y="-7"
          width="1181"
          height="903.175395"
        />
      </g>
    );
  }
}