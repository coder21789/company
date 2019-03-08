import React, { Component } from 'react';
import classNames from 'classnames';
import Throttle from 'lodash-decorators/throttle';
import pathStyleOrigin from './pathStyle';

import styles from './index.less';

export default class MiniMap extends Component {
  static defaultProps = {
    pathStyle: pathStyleOrigin,
    formatData: [],
    container: '#svgWrap',
    title: '',
  };

  state = {
    isShowTooltip: false,
    transform: 'translate3d(0,0,0)',
    toltipId: 601001,
  };

  @Throttle(600)
  handleMouseOver = e => {
    e.persist();
    const { container } = this.props;
    this.timeId = setTimeout(() => {
      if (!this.timeId) clearTimeout(this.timeId);
      if (e.target.tagName.toLowerCase() === 'path') {
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
        const eleTooltipOffsetHeight = 137 + 100;
        this.setState({
          isShowTooltip: true,
          toltipId: e.target.id.split('p')[1],
          transform: `translate3d(${eleRefLeft +
            eleRefWidth / 2 -
            eleTooltipOffsetWidth / 2 -
            containerLeft}px, ${eleRefTop +
            eleRefHeight / 2 -
            eleTooltipOffsetHeight / 2 -
            containerTop}px, 0)`,
        });
      }
    }, 600);
  };

  @Throttle(800)
  handleMouseOut = e => {
    e.persist();
    const { container } = this.props;
    this.mouseOuttimeId = setTimeout(() => {
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
    }, 1000 / 16);
  };

  render() {
    const { isShowTooltip, transform, toltipId } = this.state;

    const { pathStyle, formatData, container, title } = this.props;

    const path = pathStyle.map(v => {
      if (v.id.split('p')[1] === toltipId) {
        return {
          ...v,
          fill: 'rgba(91, 52, 249, 0.6)',
        };
      } else {
        return v;
      }
    });

    const currFormatData = formatData.filter(value => +value.areaId === +toltipId);
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
          <div className={styles.rank}>
            {currFormatData[0] && currFormatData[0].rank ? (
              <span style={{ color: '#EB5252' }}>No.{currFormatData[0].rank}</span>
            ) : (
              ''
            )}{' '}
            {currFormatData[0] && currFormatData[0].streetName}
          </div>
          <div>
            <pre style={{ marginBottom: 0 }}>
              {currFormatData[0] && currFormatData[0].formatData.join('\n')}
            </pre>
          </div>
        </div>
        <svg width="100%" viewBox="0 0 1031 718">
          <defs>
            <rect id="path-1" x="0" y="0" width="1039" height="761" />
          </defs>
          <g className="svgWrapG" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-210.000000, -294.000000)">
              <g transform="translate(202.000000, 269.000000)">
                <g transform="translate(79.000000, 83.000000)" fillOpacity="0.6">
                  {path.map(item => <path {...item} key={item.id} />)}
                </g>
              </g>
            </g>
          </g>
        </svg>
        <div className={styles.mapRank}>
          <p>
            <span>{title}高</span>
            <span>低</span>
          </p>
          <ul className="minMap_color_rank">
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
      </div>
    );
  }
}
