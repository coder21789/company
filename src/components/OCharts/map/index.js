import React, { Component } from 'react';
import classNames from 'classnames';
import Throttle from 'lodash-decorators/throttle';
import { dataFormate } from '../../../utils/utils';

import styles from './index.less';
import MapStyle from './mapStyle';
import pathStyleOrigin from './pathStyle';

// console.log(mapStyle);
export default class Map extends Component {
  static defaultProps = {
    pathStyle: pathStyleOrigin,
    formatData: [],
    container: '#svgWrap',
  };

  state = {
    isShowTooltip: false,
    transform: 'translate3d(0,0,0)',
    toltipId: 601001,
  };

  @Throttle(6000)
  handleMouseOver = e => {
    // console.log(e.target.tagName, e.target.id, 'tagName');
    if (e.target.tagName.toLowerCase() === 'path') {
      const { container } = this.props;

      const containerRef = document.getElementById(`${container}`);
      const containerLeft = containerRef.getBoundingClientRect().left;
      const containerTop = containerRef.getBoundingClientRect().top;

      const eleRefRect = e.target.getBoundingClientRect();
      const eleRefLeft = eleRefRect.left;
      const eleRefTop = eleRefRect.top;
      const eleRefWidth = eleRefRect.width;
      const eleRefHeight = eleRefRect.height;

      const eleTooltipRef = containerRef.querySelector('.svgTooltip');
      const eleTooltipOffsetWidth = eleTooltipRef.getBoundingClientRect().width;
      const eleTooltipOffsetHeight = eleTooltipRef.getBoundingClientRect().height;
      // console.log(eleRefLeft + eleRefWidth / 2 - eleTooltipOffsetWidth / 2 -containerLeft, eleRefTop + eleRefHeight / 2 -eleTooltipOffsetHeight / 2 -containerTop)
      this.setState({
        isShowTooltip: true,
        toltipId: e.target.id.split('p')[1],
        transform: `translate3d(
          ${eleRefLeft + eleRefWidth / 2 - eleTooltipOffsetWidth / 2 - containerLeft + 10}px,
          ${eleRefTop + eleRefHeight / 2 - eleTooltipOffsetHeight / 2 - containerTop - 40}px,
        0)`,
      });
    } else if (e.target.tagName.toLowerCase() === 'image') {
      this.setState({
        isShowTooltip: false,
        toltipId: '',
      });
    }
  };

  handleMouseOut = e => {
    const { container } = this.props;
    // console.log(container);
    const eleRef = document.getElementById(`${container}`).querySelector('.svgWrapG');
    const { clientX, clientY } = e;
    const eleContainer = eleRef.getBoundingClientRect();
    const isInX = eleContainer.x < clientX && clientX < eleContainer.x + eleContainer.width;
    const isInY = eleContainer.y < clientY && clientY < eleContainer.y + eleContainer.height;

    if (!(isInX && isInY)) {
      this.setState({
        isShowTooltip: false,
        toltipId: '',
      });
    }
  };

  render() {
    const { isShowTooltip, transform, toltipId } = this.state;
    const { onClick, pathStyle, formatData, container } = this.props;

    const path = pathStyle.map(v => {
      if (v.id.split('p')[1] === toltipId) {
        return {
          ...v,
          fill: 'rgba(91, 52, 249, 0.8)',
        };
      } else {
        return v;
      }
    });
    const currFormatData = formatData.filter(value => +value.areaId === +toltipId);
    let hoverData = {
      rank: 'xx',
      areaName: ' 未知',
      content: '--',
    };
    if (currFormatData && currFormatData.length > 0) {
      [hoverData] = currFormatData;
      hoverData = {
        rank: currFormatData[0].rank ? currFormatData[0].rank : 'xx',
        areaName: currFormatData[0].areaName ? currFormatData[0].areaName : '未知',
        content: dataFormate(currFormatData[0].content, 'int'),
      };
    }

    const showStyle = {
      transform,
      visibility: isShowTooltip ? 'visible' : 'hidden',
    };

    return (
      <div
        id={container}
        className={styles.mapWrap}
        onFocus={() => 0}
        onBlur={() => 0}
        onClick={onClick.bind(this, toltipId)}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <div
          className={classNames({
            svgTooltip: true,
            [styles.tooltip]: true,
          })}
          style={showStyle}
        >
          <div className={styles.rank}>No. {hoverData.rank}</div>
          <div>
            {hoverData.areaName}
            <span className={styles.value}>{hoverData.content}</span>
          </div>
        </div>
        <svg width="100%" viewBox="0 0 1031 718">
          <defs>
            <rect id="rect-bg" x="0" y="0" width="1039" height="761" />
          </defs>
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-210.000000, -294.000000)">
              <g transform="translate(202.000000, 269.000000)">
                <MapStyle />
                <g
                  className="svgWrapG"
                  transform="translate(79.000000, 83.000000)"
                  fillOpacity="0.6"
                >
                  {path.map(v => <path {...v} key={v.id} />)}
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
