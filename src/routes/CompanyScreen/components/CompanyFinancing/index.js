import React, { Component } from 'react';
import Odef from './Odef';
import Amout from './Amout';
import Circle from './Circle';

export default class CompanyFinancing extends Component {
  render() {
    const { className, data } = this.props;

    return (
      <svg
        className={className}
        width="600px"
        height="245px"
        viewBox="0 0 600 245"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <Odef />
        <defs>
          <text
            id="text-font-1"
            fontFamily="PingFangSC-Medium, PingFang SC"
            fontSize="24"
            fontWeight="400"
            letterSpacing="0.96"
            fill="#D9EEFF"
          >
            <tspan x="234" y="839" />
          </text>
          <text
            id="text-amout-num-1"
            fontFamily="DINAlternate-Bold, DIN Alternate"
            fontSize="50"
            fontWeight="bold"
            letterSpacing="0.7142858"
            fill="#FFFFFF"
          >
            <tspan x="579" y="929" opacity="0">
              {data && data[0] && data[0].amount}
              <animate
                attributeName="opacity"
                from="1"
                to="0"
                begin="FinanceAnimate1.begin"
                dur="3s"
              />
            </tspan>
            <tspan x="579" y="929" opacity="0">
              {data && data[1] && data[1].amount}
              <animate
                attributeName="opacity"
                from="0"
                to="1"
                begin="FinanceAnimate2.end"
                dur="2s"
              />
            </tspan>
            <tspan x="579" y="929" opacity="0">
              {data && data[2] && data[2].amount}
              <animate
                attributeName="opacity"
                from="0"
                to="1"
                begin="FinanceAnimate3.end"
                dur="2s"
              />
            </tspan>
            <tspan x="579" y="929" opacity="0">
              {data && data[3] && data[3].amount}
              <animate
                attributeName="opacity"
                from="0"
                to="1"
                begin="FinanceAnimate4.end"
                dur="2s"
              />
            </tspan>
            <tspan x="579" y="929" opacity="0">
              {data && data[4] && data[4].amount}
              <animate
                attributeName="opacity"
                from="0"
                to="1"
                begin="FinanceAnimate5.end"
                dur="2s"
              />
            </tspan>
            <tspan x="579" y="929" opacity="0">
              {data && data[5] && data[5].amount}
              <animate
                attributeName="opacity"
                from="0"
                to="1"
                begin="FinanceAnimate6.end"
                dur="2s"
              />
            </tspan>
          </text>
          <text
            id="text-yuan"
            fontFamily="PingFangSC-Regular, PingFang SC"
            fontSize="24"
            fontWeight="normal"
            letterSpacing="0.96"
            fill="#D9EEFF"
            opacity="0"
          >
            <tspan x="614" y="975">
              万元
            </tspan>
            {data[0] && data[0].amount !== '未透露' ? (
              <animate
                attributeName="opacity"
                from="0"
                to="1"
                begin="FinanceAnimate1.end"
                dur="2s"
              />
            ) : (
              ''
            )}
            {data[1] && data[1].amount !== '未透露' ? (
              <animate
                attributeName="opacity"
                from="0"
                to="1"
                begin="FinanceAnimate2.end"
                dur="2s"
              />
            ) : (
              ''
            )}
            {data[2] && data[2].amount !== '未透露' ? (
              <animate
                attributeName="opacity"
                from="0"
                to="1"
                begin="FinanceAnimate3.end"
                dur="2s"
              />
            ) : (
              ''
            )}
            {data[3] && data[3].amount !== '未透露' ? (
              <animate
                attributeName="opacity"
                from="0"
                to="1"
                begin="FinanceAnimate4.end"
                dur="2s"
              />
            ) : (
              ''
            )}
            {data[4] && data[4].amount !== '未透露' ? (
              <animate
                attributeName="opacity"
                from="0"
                to="1"
                begin="FinanceAnimate5.end"
                dur="2s"
              />
            ) : (
              ''
            )}
            {data[5] && data[5].amount !== '未透露' ? (
              <animate
                attributeName="opacity"
                from="0"
                to="1"
                begin="FinanceAnimate6.end"
                dur="2s"
              />
            ) : (
              ''
            )}
          </text>
        </defs>
        <g id="Page-1" stroke="transparent" strokeWidth="1" fill="transparent" fillRule="evenodd">
          <Amout />
          <Circle data={data} />
          <g id="amount-num" transform="translate(-152.000000, -821.000000)" fill="#FFFFFF">
            <g id="text-amout-num-1">
              <use filter="url(#filter-amout-num-2)" xlinkHref="#text-amout-num-1" />
              <use xlinkHref="#text-amout-num-1" />
            </g>
          </g>
          <g
            id="text-font-A"
            transform="translate(-155.000000, -820.000000)"
            stroke="transparent"
            strokeWidth="1"
            fillRule="evenodd"
            fontFamily="PingFangSC-Regular, PingFang SC"
            fontWeight="normal"
            letterSpacing="0.8"
            fontSize="20"
            fill="#83B4CC"
          >
            <text id="0轮">
              <tspan x="230.13" y="840">
                {data && data[0] && data[0].contentName}
              </tspan>
            </text>
            <animate
              attributeName="fill"
              from="#D9EEFF"
              to="#83B4CC"
              begin="FinanceAnimate1.begin"
              dur="2s"
            />
            <animate
              attributeName="fontSize"
              from="24"
              to="20"
              begin="FinanceAnimate1.begin"
              dur="2s"
            />
          </g>
          <g id="yuan" transform="translate(-152.000000, -815.000000)" fill="#D9EEFF">
            <use filter="url(#filter-yuan)" xlinkHref="#text-yuan" />
            <use xlinkHref="#text-yuan" />
          </g>
          <g
            id="text-font-A"
            transform="translate(-175.000000, -820.000000)"
            fill="#83B4CC"
            stroke="transparent"
            strokeWidth="1"
            fillRule="evenodd"
            fontFamily="PingFangSC-Regular, PingFang SC"
            fontSize="20"
            fontWeight="normal"
            letterSpacing="0.8"
          >
            <text id="A轮">
              <tspan x="217.13" y="882">
                {data && data[1] && data[1].contentName}
              </tspan>
            </text>
            <animate
              attributeName="fill"
              from="#83B4CC"
              to="#D9EEFF"
              begin="FinanceAnimate2.end"
              dur="2s"
            />
            <animate
              attributeName="fontSize"
              from="20"
              to="24"
              begin="FinanceAnimate2.end"
              dur="2s"
            />
          </g>
          <g
            id="text-font-a+"
            transform="translate(-175.000000, -820.000000)"
            fill="#83B4CC"
            stroke="transparent"
            strokeWidth="1"
            fillRule="evenodd"
            fontFamily="PingFangSC-Regular, PingFang SC"
            fontSize="20"
            fontWeight="normal"
            letterSpacing="0.8"
          >
            <text id="A+轮">
              <tspan x="191.18" y="926">
                {data && data[2] && data[2].contentName}
              </tspan>
            </text>
            <animate
              attributeName="fill"
              from="#83B4CC"
              to="#D9EEFF"
              begin="FinanceAnimate3.end"
              dur="2s"
            />
            <animate
              attributeName="fontSize"
              from="20"
              to="24"
              begin="FinanceAnimate3.end"
              dur="2s"
            />
          </g>
          <g
            id="text-font-b"
            transform="translate(-175.000000, -820.000000)"
            fill="#83B4CC"
            stroke="transparent"
            strokeWidth="1"
            fillRule="evenodd"
            fontFamily="PingFangSC-Regular, PingFang SC"
            fontSize="20"
            fontWeight="normal"
            letterSpacing="0.8"
          >
            <text id="B轮">
              <tspan x="199.43" y="971">
                {data && data[3] && data[3].contentName}
              </tspan>
            </text>
            <animate
              attributeName="fill"
              from="#83B4CC"
              to="#D9EEFF"
              begin="FinanceAnimate4.end"
              dur="2s"
            />
            <animate
              attributeName="fontSize"
              from="20"
              to="24"
              begin="FinanceAnimate4.end"
              dur="2s"
            />
          </g>
          <g
            id="text-font-c"
            transform="translate(-175.000000, -820.000000)"
            fill="#83B4CC"
            stroke="transparent"
            strokeWidth="1"
            fillRule="evenodd"
            fontFamily="PingFangSC-Regular, PingFang SC"
            fontSize="20"
            fontWeight="normal"
            letterSpacing="0.8"
          >
            <text id="C轮">
              <tspan x="218.42" y="1015">
                {data && data[4] && data[4].contentName}
              </tspan>
            </text>
            <animate
              attributeName="fill"
              from="#83B4CC"
              to="#D9EEFF"
              begin="FinanceAnimate5.end"
              dur="2s"
            />
            <animate
              attributeName="fontSize"
              from="20"
              to="24"
              begin="FinanceAnimate5.end"
              dur="2s"
            />
          </g>
          <g
            id="text-font-d"
            transform="translate(-175.000000, -820.000000)"
            fill="#83B4CC"
            stroke="transparent"
            strokeWidth="1"
            fillRule="evenodd"
            fontFamily="PingFangSC-Regular, PingFang SC"
            fontSize="20"
            fontWeight="normal"
            letterSpacing="0.8"
          >
            <text id="D轮及以上">
              <tspan x="236.44" y="1054">
                {data && data[5] && data[5].contentName}
              </tspan>
            </text>
            <animate
              attributeName="fill"
              from="#83B4CC"
              to="#D9EEFF"
              begin="FinanceAnimate6.end"
              dur="2s"
            />
            <animate
              attributeName="fontSize"
              from="20"
              to="24"
              begin="FinanceAnimate6.end"
              dur="2s"
            />
          </g>
        </g>
        <g id="Line">
          {data[0] ? (
            <g
              id="Line-1"
              strokeLinecap="square"
              transform="translate(-155.000000, -820.000000)"
              opacity="0"
            >
              <use
                fill="transparent"
                fillOpacity="1"
                filter="url(#filter-line-2)"
                xlinkHref="#path-finance-line-1"
              />
              <use
                stroke="#CCEEFF"
                strokeWidth="2"
                xlinkHref="#path-finance-line-1"
                fill="transparent"
              />
              <circle id="Oval-line" fill="#CCEEFF" cx="230.5" cy="848.5" r="3.5" />
              <animate
                id="FinanceAnimate2"
                attributeName="opacity"
                from="1"
                to="0"
                begin="FinanceAnimate1.begin"
                dur="3s"
              />
            </g>
          ) : (
            <g />
          )}
          {data[1] ? (
            <g
              id="Line-2"
              strokeLinecap="square"
              transform="translate(-190.000000, -780.000000)"
              opacity="0"
            >
              <use
                fill="transparent"
                fillOpacity="1"
                filter="url(#filter-line-2)"
                xlinkHref="#path-finance-line-1"
              />
              <use
                stroke="#CCEEFF"
                strokeWidth="2"
                xlinkHref="#path-finance-line-2"
                fill="transparent"
              />
              <circle id="Oval-line" fill="#CCEEFF" cx="230.5" cy="848.5" r="3.5" />
              <animate
                id="FinanceAnimate3"
                attributeName="opacity"
                from="0"
                to="1"
                begin="FinanceAnimate2.end"
                dur="2s"
              />
            </g>
          ) : (
            <g />
          )}
          {data[2] ? (
            <g
              id="Line-3"
              strokeLinecap="square"
              transform="translate(-220.000000, -735.000000)"
              opacity="0"
            >
              <use
                fill="transparent"
                fillOpacity="1"
                filter="url(#filter-line-2)"
                xlinkHref="#path-finance-line-1"
              />
              <use
                stroke="#CCEEFF"
                strokeWidth="2"
                xlinkHref="#path-finance-line-3"
                fill="transparent"
              />
              <circle id="Oval-line" fill="#CCEEFF" cx="230.5" cy="848.5" r="3.5" />
              <animate
                id="FinanceAnimate4"
                attributeName="opacity"
                from="0"
                to="1"
                begin="FinanceAnimate3.end"
                dur="2s"
              />
            </g>
          ) : (
            <g />
          )}
          {data[3] ? (
            <g
              id="Line-4"
              strokeLinecap="square"
              transform="translate(-210.000000, -690.000000)"
              opacity="0"
            >
              <use
                fill="transparent"
                fillOpacity="1"
                filter="url(#filter-line-2)"
                xlinkHref="#path-finance-line-1"
              />
              <use
                stroke="#CCEEFF"
                strokeWidth="2"
                xlinkHref="#path-finance-line-4"
                fill="transparent"
              />
              <circle id="Oval-line" fill="#CCEEFF" cx="230.5" cy="848.5" r="3.5" />
              <animate
                id="FinanceAnimate5"
                attributeName="opacity"
                from="0"
                to="1"
                begin="FinanceAnimate4.end"
                dur="2s"
              />
            </g>
          ) : (
            <g />
          )}
          {data[4] ? (
            <g
              id="Line-5"
              strokeLinecap="square"
              transform="translate(-190.000000, -645.000000)"
              opacity="0"
            >
              <use
                fill="transparent"
                fillOpacity="1"
                filter="url(#filter-line-2)"
                xlinkHref="#path-finance-line-1"
              />
              <use
                stroke="#CCEEFF"
                strokeWidth="2"
                xlinkHref="#path-finance-line-5"
                fill="transparent"
              />
              <circle id="Oval-line" fill="#CCEEFF" cx="230.5" cy="848.5" r="3.5" />
              <animate
                id="FinanceAnimate6"
                attributeName="opacity"
                from="0"
                to="1"
                begin="FinanceAnimate5.end"
                dur="2s"
              />
            </g>
          ) : (
            <g />
          )}
          {data[5] ? (
            <g
              id="Line-6"
              strokeLinecap="square"
              transform="translate(-170.000000, -605.000000)"
              opacity="0"
            >
              <use
                fill="transparent"
                fillOpacity="1"
                filter="url(#filter-line-2)"
                xlinkHref="#path-finance-line-1"
              />
              <use
                stroke="#CCEEFF"
                strokeWidth="2"
                xlinkHref="#path-finance-line-6"
                fill="transparent"
              />
              <circle id="Oval-line" fill="#CCEEFF" cx="230.5" cy="848.5" r="3.5" />
              <animate
                id="FinanceAnimate7"
                attributeName="opacity"
                from="0"
                to="1"
                begin="FinanceAnimate6.end"
                dur="2s"
              />
            </g>
          ) : (
            <g />
          )}
        </g>
      </svg>
    );
  }
}
