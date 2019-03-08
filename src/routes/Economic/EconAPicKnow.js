/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Select } from 'antd';

import classNames from 'classnames';
import html2canvas from 'html2canvas';
import Canvas2Image from '../../utils/canvas2image';

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts-wordcloud/dist/echarts-wordcloud.min.js';
import numeral from 'numeral';
import { getFormatMoney, convertBase64UrlToBlob } from 'utils/utils';

import Map from './components/map';

import styles from './EconAPicKnow.less';

import editIcon from '../../assets/edit-icon.svg';
import shareIcon from '../../assets/share-icon.svg';
import downIcon from '../../assets/download-icon.svg';

import indAgriculture from '../../assets/ind-agriculture.svg';
import indIndustry from '../../assets/ind-industry.svg';
import indService from '../../assets/ind-service.svg';

import indRocket from '../../assets/apic-rocket.svg';
import ind2mi from '../../assets/apic-2mi.svg';

import patentDes from '../../assets/apic-patent.svg';
import patentApp from '../../assets/apic-patentapp.svg';
import patentAppIcon from '../../assets/apic-patentapp-icon.svg';
import patentAut from '../../assets/apic-patentauthor.svg';
import patentAutIcon from '../../assets/apic-patentauthor-icon.svg';

// import investBg from '../../assets/apic-invest.svg';
// import financeBg from '../../assets/apic-finance.svg';
// import changeMoneyBg from '../../assets/apic-changeMoney.svg';

const { Option } = Select;

@connect(({ econapicknow }) => ({
  econapicknow,
}))
export default class EconAPicKnow extends Component {
  state = {
    selectData: [],
    currentDate: '',
    canvasImg: '',
    fetchData: {
      dateId: 3,
      year: 2018,
    },
    isShowQrCode: false,
    isEdit: false,
    hotIndustryName: [],
    initContent: [
      '面对复杂严峻的宏观形势和经济下行压力，今年上半年，余杭及时出台系列政策措施，大力推进全面创新改革，积极推进供给侧结构性改革，全区经济运行保持稳定增长，基本符合预期，呈现出健康平稳、稳中向好的发展态势',
      '区政府的领导下，各区域齐头并进超过5个街道的营收增幅都超过0.0%',
      '深入实施数字经济"一号工程"实现经济增长0亿元，较上一季度增加了0.0亿元',
      '在以“2+X”为重点的创新平台建设的推动下，深入实施高新技术企业、科技中小微企业“双倍增”计划，在区各级领导的带领下，科技创新力度空前，成效明显',
      '三季度企业服务、金融、',
    ],
    cacheContent: [],
  };

  async componentDidMount() {
    const { dispatch } = this.props;

    await dispatch({
      type: 'econapicknow/fetchGetListquarter',
      payload: {},
    });

    const {
      econapicknow: { getListquarterData },
    } = this.props;

    this.setState({
      selectData: getListquarterData,
    });

    const { currentDate } = this.state;

    if (getListquarterData.length > 0) {
      if (!currentDate) {
        this.setState({
          currentDate: getListquarterData[0] && getListquarterData[0].dateName,
          fetchData: {
            dateId: getListquarterData[0] && getListquarterData[0].dateId,
            year: getListquarterData[0] && getListquarterData[0].year,
          },
        });
      } else {
        this.setState({
          currentDate: getListquarterData.find(item => item.dateName === currentDate).dateName,
        });
      }
    }

    this.init();
  }

  async init() {
    const { dispatch } = this.props;
    const { fetchData, currentDate, initContent } = this.state;

    await dispatch({
      type: 'econapicknow/fetchGetContentList',
      payload: fetchData,
    });

    await dispatch({
      type: 'econapicknow/fetchGetEntirety',
      payload: fetchData,
    });

    await dispatch({
      type: 'econapicknow/fetchGetAreadevelop',
      payload: fetchData,
    });

    await dispatch({
      type: 'econapicknow/fetchGetSpecial',
      payload: fetchData,
    });

    await dispatch({
      type: 'econapicknow/fetchGetDigitaleconomy',
      payload: fetchData,
    });

    await dispatch({
      type: 'econapicknow/fetchGetInnovation',
      payload: fetchData,
    });

    await dispatch({
      type: 'econapicknow/fetchGetParentinvention',
      payload: fetchData,
    });

    await dispatch({
      type: 'econapicknow/fetchGetRising',
      payload: fetchData,
    });

    await dispatch({
      type: 'econapicknow/fetchGetRisingrank',
      payload: fetchData,
    });

    const { econapicknow } = this.props;

    const {
      getListquarterData,
      getDigitaleconomyData,
      getAreadevelopData,
      getRisingrankData,
    } = econapicknow;

    if (getListquarterData.length > 0) {
      if (!currentDate) {
        this.setState({
          currentDate: getListquarterData[0] && getListquarterData[0].dateName,
        });
      } else {
        this.setState({
          currentDate: getListquarterData.find(item => item.dateName === currentDate).dateName,
        });
      }
    }

    // 更新初始化编辑信息
    let initContentCopy = [];

    initContentCopy[0] = initContent[0];
    initContentCopy[1] = getAreadevelopData.areaContent;
    initContentCopy[2] = getDigitaleconomyData.digitalContent;
    initContentCopy[3] = initContent[3];
    initContentCopy[4] = getRisingrankData.content;

    this.setState({
      initContent: initContentCopy,
    });

    this.drawPieReneve();
    this.drawBarReveneGrow();
    this.drawPieDig();
    this.drawBarIntellSum();
    this.drawWordCloud();
    this.drawBarFinance();
  }

  // 1营收
  drawPieReneve() {
    const { econapicknow } = this.props;

    const {
      getEntiretyData: { entirety },
    } = econapicknow;

    const myChart = echarts.init(document.getElementById('js-pieRevene'));

    const fontSize = 10;
    const echartData = [
      {
        value: 1,
        name: '第一产业',
      },
      {
        value: 1,
        name: '第二产业',
      },
      {
        value: 1,
        name: '第三产业',
      },
    ];
    const rich = {
      total: {
        color: '#000000',
        fontSize: fontSize * 4,
        align: 'center',
        height: 55,
        verticalAlign: 'bottom',
      },
      unit: {
        color: 'rgba(0,0,0,0.65)',
        fontSize: fontSize * 2,
        align: 'center',
        height: 55,
        verticalAlign: 'bottom',
      },
      title: {
        color: 'rgba(0,0,0,0.65)',
        fontSize: fontSize * 1.8,
        align: 'center',
      },
      subTotal: {
        color: 'rgba(0,0,0,0.85)',
        fontSize: fontSize * 1.8,
        align: 'center',
      },
    };

    const option = {
      title: {
        text: `{total| ${getFormatMoney(entirety.companyRevenue).value}}{unit| ${
          getFormatMoney(entirety.companyRevenue).unit
        }}\n{title| 企业营收 环比}{subTotal| ${(entirety.ringRatio * 100).toFixed(2)}%}`,
        textStyle: {
          fontSize: 36,
          rich: rich,
        },
        left: 'center',
        top: '45%',
      },
      // tooltip: {
      //   trigger: 'item',
      //   formatter: '{b}<br/>{c} ({d}%)',
      //   textStyle: {
      //     fontSize: fontSize * 1.6,
      //   },
      // },
      series: [
        {
          name: 'pie',
          type: 'pie',
          radius: ['80%', '95%'],
          hoverAnimation: false,
          color: ['#00D3D1', '#FA8F32', '#EB5252'],
          label: {
            normal: {
              show: false,
            },
          },
          data: echartData,
        },
      ],
    };

    myChart.setOption(option);
  }

  // 2营收增长
  drawBarReveneGrow() {
    const {
      econapicknow: { getSpecialData },
    } = this.props;

    const { currentDate } = this.state;

    let xAxisData = [];
    let seriesData = [];
    let seriesData2 = [];

    for (let i = 0; i < getSpecialData.length; i = i + 1) {
      let currentData = getSpecialData[i];
      xAxisData.push(currentData.industryName);
      seriesData.push(Math.abs(currentData.lastIndustryRevenue));
      seriesData2.push(
        currentData.industryRevenue > 0
          ? currentData.industryRevenue * -1
          : currentData.industryRevenue
      );
    }

    const myChart = echarts.init(document.getElementById('js-barReveneGrow'));

    let option = {
      color: ['#37A2DA', '#FF9F7F'],
      legend: {
        orient: 'vertical',
        x: '90%',
        left: '3%',
        top: 'center',
        data: ['上季度'].concat(currentDate),
      },
      grid: {
        left: '14%',
        right: '5%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            margin: 19,
            fontSize: 20,
            lineHeight: 22,
            formatter: function(value) {
              const getValue = getSpecialData.find(item => item.industryName === value);

              if (getValue) {
                const percentValue = `${(getValue.industryRevenueRingRatio * 100).toFixed(2)}%`;
                if (getValue.industryRevenueRingRatio > 0) {
                  return [`{title| ${value}}`, `{up| +${percentValue}}`].join('\n');
                } else {
                  return [`{title| ${value}}`, `{down| ${percentValue}}`].join('\n');
                }
              } else {
                return value + '\n' + '0%';
              }
            },
            rich: {
              title: {
                color: 'rgba(0,0,0,0.45)',
              },
              up: {
                color: '#FA8F32',
              },
              down: {
                color: 'rgba(0,0,0,0.85)',
              },
            },
          },
          data: xAxisData,
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '环比',
          nameLocation: 'start',
          nameTextStyle: {
            fontSize: 20,
          },
          nameGap: '20',
          // min: function (value) {
          //   return value.min - 30;
          // },
          // max: function (value) {
          //   return value.max + 30;
          // },
          offset: 20,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
            formatter: function(value) {
              if (value < 0) {
                return -value;
              } else {
                return value;
              }
            },
          },
        },
      ],
      series: [
        {
          name: '上季度',
          type: 'bar',
          stack: '总量',
          barWidth: '40px',
          label: {
            normal: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              show: true,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#62A3F8',
                },
                {
                  offset: 1,
                  color: '#336AEE',
                },
              ]),
            },
          },
          data: seriesData,
        },
        {
          name: currentDate,
          type: 'bar',
          stack: '总量',
          barWidth: '40px',
          label: {
            normal: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              show: true,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#31C9DB',
                },
                {
                  offset: 1,
                  color: '#39EAC7',
                },
              ]),
            },
          },
          data: seriesData2,
        },
      ],
    };

    myChart.setOption(option);
  }

  // 2数字经济势头强劲
  drawPieDig() {
    const {
      econapicknow: { getDigitaleconomyData },
    } = this.props;

    const myChart = echarts.init(document.getElementById('js-pieDig'));
    // getDigitaleconomyData.digitalEconomyTotalRatio || 0
    // show: true,

    let option = {
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        top: '0%',
      },
      series: [
        {
          type: 'pie',
          silent: true,
          radius: ['80', '100'],
          center: ['50%', '50%'],
          hoverAnimation: false,
          align: 'center',
          label: {
            normal: {
              position: 'center',
              color: '#fff',
              fontSize: 16,
              padding: [30, 0, 0, 0],
              formatter: function(params) {
                if (params.name) {
                  return `{title| ${params.name}}\n{percent| ${(params.value * 100).toFixed(2)}%}`;
                }
              },
              verticalAlign: 'middle',
              rich: {
                title: {
                  color: 'rgba(0,0,0,0.45)',
                  fontSize: 20,
                  lineHeight: 28,
                },
                percent: {
                  color: 'rgba(0,0,0,0.85)',
                  fontSize: 32,
                },
              },
            },
          },
          data: [
            {
              value: getDigitaleconomyData.digitalEconomyTotalRatio || 0,
              name: '占营收比重达',
              itemStyle: {
                normal: {
                  color: '#07C2FC',
                },
              },
              label: {
                normal: {
                  textStyle: {
                    fontSize: 20,
                    fontWeight: 600,
                    color: 'rgba(0,0,0,0.45)',
                  },
                },
              },
            },
            {
              value: 1 - getDigitaleconomyData.digitalEconomyTotalRatio,
              name: '',
              itemStyle: {
                normal: {
                  color: '#EEEEEE',
                },
              },
            },
          ],
        },
      ],
    };

    myChart.setOption(option);
  }

  // 3知识产权概况
  drawBarIntellSum() {
    const {
      econapicknow: { getInnovationData },
    } = this.props;

    let xAxisData = [];
    let seriesData = [];

    for (let i = 0; i < getInnovationData.length; i = i + 1) {
      let currentData = getInnovationData[i];
      xAxisData.push(currentData.partentName);
      seriesData.push(currentData.partentNum);
    }

    const myChart = echarts.init(document.getElementById('js-barIntellSum'));

    var option = {
      grid: {
        left: '1%',
        right: '0%',
        bottom: '0%',
        top: 30,
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: xAxisData,
          axisLabel: {
            textStyle: {
              color: 'rgba(0,0,0,0.45)',
              fontFamily: 'PingFangSC-Regular',
              fontSize: 18,
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: '#fff',
              opacity: 0.2,
            },
          },
          splitLine: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          splitNumber: 5,
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: '总数量',
          type: 'bar',
          data: seriesData,
          barWidth: '40',
          barGap: 0, //柱间距离
          label: {
            //图形上的文本标签
            normal: {
              show: true,
              position: 'top',
              textStyle: {
                color: 'rgba(0,0,0,0.85)',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 26,
              },
            },
          },
          itemStyle: {
            normal: {
              show: true,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#62A3F8',
                },
                {
                  offset: 1,
                  color: '#336AEE',
                },
              ]),
            },
          },
        },
      ],
    };

    myChart.setOption(option);
  }

  // 4词云
  drawWordCloud() {
    const {
      econapicknow: { getRisingData },
    } = this.props;
    const chart = echarts.init(document.getElementById('js-wordCloud'));

    let data = [];
    data = getRisingData.map(value => {
      return {
        value: value.value,
        name: value.name,
      };
    });
    let option = {
      series: [
        {
          type: 'wordCloud',
          sizeRange: [12, 20],
          rotationRange: [0, 0],
          rotationStep: 40,
          gridSize: 33,
          // shape: 'rectangle',
          left: 'center',
          top: 'center',
          bottom: null,
          right: null,
          width: '100%',
          height: '100%',
          drawOutOfBound: false,
          // 字符的范围
          textStyle: {
            normal: {
              color: function(item) {
                const dataIndex = item.dataIndex;
                if (dataIndex < 3) {
                  return `#1889F2`;
                } else if (dataIndex < 8) {
                  return `#45A0F3`;
                } else {
                  return `#333333`;
                }
              },
              cursor: 'default',
            },
            emphasis: {
              cursor: 'default',
            },
          },
          data: data.sort(function(a, b) {
            return b.value - a.value;
          }),
        },
      ],
    };

    chart.setOption(option);
  }

  // 4融资额
  drawBarFinance() {
    const {
      econapicknow: {
        getRisingrankData: { risingRank },
      },
    } = this.props;

    let xAxisData = [];
    let seriesData = [];

    for (let i = 0; i < risingRank.length; i = i + 1) {
      let currentData = risingRank[i];
      xAxisData.push(currentData.industryName);
      seriesData.push(currentData.financingAmount);
    }

    this.setState({
      hotIndustryName: xAxisData,
    });

    const myChart = echarts.init(document.getElementById('js-barFinance'));

    var option = {
      grid: {
        left: '1%',
        right: '0%',
        bottom: '0%',
        top: '60',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: xAxisData,
          axisLabel: {
            textStyle: {
              color: 'rgba(0,0,0,0.65)',
              fontStyle: 'normal',
              fontFamily: '微软雅黑',
              fontSize: 24,
              padding: [17, 0, 0, 0],
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: '#fff',
              opacity: 0.2,
            },
          },
          splitLine: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          splitNumber: 5,
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: '总数量',
          type: 'bar',
          data: seriesData,
          barWidth: '40%',
          barGap: 0, //柱间距离
          label: {
            //图形上的文本标签
            normal: {
              show: true,
              position: 'top',
              textStyle: {
                color: 'rgba(0,0,0,0.85)',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 28,
              },
              padding: [0, 0, 17, 0],
              formatter: function(params) {
                let formatterData = getFormatMoney(params.value);
                return `${formatterData.value}${formatterData.unit}`;
              },
            },
          },
          itemStyle: {
            normal: {
              show: true,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#62A3F8',
                },
                {
                  offset: 1,
                  color: '#336AEE',
                },
              ]),
            },
          },
        },
      ],
    };

    myChart.setOption(option);
  }

  downloadFile(filename, content) {
    var base64Img = content;
    var oA = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
    oA.href = base64Img;
    oA.download = filename;
    var event = document.createEvent('MouseEvents');
    event.initMouseEvent(
      'click',
      true,
      false,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    );
    oA.dispatchEvent(event);
  }

  saveImgLocal = isDownload => {
    let $jsImage = document.getElementById('js-image');
    const { width, height } = $jsImage;

    const SCALE = 0.99;

    var canvas = document.createElement('canvas');
    canvas.width = width * SCALE; //定义canvas 宽度 * 缩放
    canvas.height = height * SCALE; //定义canvas高度 *缩放
    canvas.getContext('2d').scale(SCALE, SCALE);
    var opts = {
      scale: SCALE, // 添加的scale 参数
      canvas: canvas, //自定义 canvas
      // logging: true, //日志开关，便于查看html2canvas的内部执行流程
      width: width, //dom 原始宽度
      height: height,
      useCORS: true,
      ignoreElements: element => {
        if (typeof element.className === 'string' && element.className.includes('tools') > 0) {
          return true;
        }
        return false;
      },
    };
    return html2canvas($jsImage, opts).then(canvas => {
      const { currentDate } = this.state;

      const fileName = currentDate ? currentDate : Math.ceil(Math.random() * 10000000);

      let context = canvas.getContext('2d');
      context.mozImageSmoothingEnabled = false;
      context.webkitImageSmoothingEnabled = false;
      context.msImageSmoothingEnabled = false;
      context.imageSmoothingEnabled = false;

      const canvasImg = Canvas2Image.convertToJPEG(canvas, canvas.width, canvas.height);

      if (isDownload) {
        this.downloadFile(fileName, canvasImg.src);
      }
      this.setState({
        canvasImg: canvasImg.src,
      });
    });
  };

  handleChangeQuarter = key => {
    const { selectData } = this.state;

    this.setState({
      currentDate: key,
    });
    const currentDataInfo = selectData.find(item => item.dateName === key);
    if (currentDataInfo) {
      this.setState(
        {
          fetchData: {
            dateId: currentDataInfo.dateId,
            year: currentDataInfo.year,
          },
        },
        () => {
          this.init();
        }
      );
    }
  };

  handleShowEdit = e => {
    console.log(e, 'edit');
    const { initContent } = this.state;

    this.setState({
      isEdit: true,
      cacheContent: initContent,
    });
  };

  handleShowQrCode = () => {
    const { dispatch } = this.props;
    const { fetchData } = this.state;

    dispatch({
      type: 'econapicknow/fetchGetcodejsp',
      payload: fetchData,
    });

    this.setState({
      isShowQrCode: true,
    });
  };

  handleHideQrCode = e => {
    if (e.target.className === e.currentTarget.className) {
      this.setState({
        isShowQrCode: false,
      });
    }
  };

  handleSaveEdit = e => {
    this.setState({
      isEdit: false,
    });
    this.saveImgLocal().then(() => {
      const { canvasImg, fetchData } = this.state;

      const { dispatch } = this.props;

      // 创建 formData
      let formData = new FormData();
      formData.append('file', convertBase64UrlToBlob(canvasImg));

      formData.append('year', fetchData.year);
      formData.append('dateId', fetchData.dateId);

      const cardDes = styles.cardDes;
      let messageList = [];
      let editNodeList = document.querySelectorAll(`.${cardDes}`);

      for (let i = 0; i < editNodeList.length; ++i) {
        messageList.push(editNodeList[i].innerText);
      }
      formData.append('messageList', JSON.stringify(messageList));

      console.log('上次成功', `'${messageList}'`, messageList, formData.get('messageList'));

      dispatch({
        type: 'econapicknow/fetchGetRisingupload',
        payload: formData,
      });
    });
  };

  handleCancelEdit = e => {
    console.log('已取消编辑');
    const { cacheContent } = this.state;
    this.setState({
      isEdit: false,
      initContent: cacheContent,
    });

    const cardDes = styles.cardDes;
    let editNodeList = document.querySelectorAll(`.${cardDes}`);

    for (let i = 0; i < cacheContent.length; ++i) {
      editNodeList[i].innerText = cacheContent[i];
    }
  };

  render() {
    const {
      selectData,
      currentDate,
      isShowQrCode,
      isEdit,
      hotIndustryName,
      initContent,
    } = this.state;
    const { econapicknow } = this.props;

    const {
      pathStyle,
      getEntiretyData: { entirety, industrialList },
      getDigitaleconomyData,
      getParentinventionData,
      qrCodeImg,
      getAreadevelopData,
      getRisingrankData,
      getContentListData,
    } = econapicknow;

    // 对编辑内容的获取
    const editData = JSON.parse(getContentListData);
    return (
      <Fragment>
        <Select
          value={currentDate}
          onChange={this.handleChangeQuarter}
          style={{ width: '224px', marginBottom: '12px' }}
        >
          {selectData.map(item => (
            <Option key={item.dateName} value={item.dateName}>
              {item.dateName}
            </Option>
          ))}
        </Select>
        <div
          onClick={this.handleHideQrCode}
          style={{
            display: isShowQrCode ? 'block' : 'none',
          }}
          className={styles.model}
        >
          <div className={styles.qrCode}>
            <img src={qrCodeImg} alt="" />
            <h6>扫码分享到微信</h6>
          </div>
        </div>

        <div className={styles.wrap} id="js-image">
          <div
            className={styles.tools}
            style={{
              display: isEdit ? 'none' : 'block',
            }}
          >
            <ul>
              <li onClick={this.handleShowEdit}>
                <img
                  className={classNames({
                    [styles.icon]: true,
                    [styles.iconEdit]: true,
                  })}
                  src={editIcon}
                  alt=""
                />
                <span>编辑</span>
              </li>
              <li onClick={this.handleShowQrCode}>
                <img
                  className={classNames({
                    [styles.icon]: true,
                    [styles.iconEdit]: true,
                  })}
                  src={shareIcon}
                  alt=""
                />
                <span>微信分享</span>
              </li>
              <li onClick={this.saveImgLocal.bind(this, true)}>
                <img
                  className={classNames({
                    [styles.icon]: true,
                    [styles.iconEdit]: true,
                  })}
                  src={downIcon}
                  alt=""
                />
                <span>下载图片</span>
              </li>
            </ul>
          </div>
          <header>
            <small>一图看懂</small>
            <h1>
              余杭区<br />
              {currentDate}经济运行情况
            </h1>
          </header>
          <main>
            <div className={styles.card}>
              <div
                dataeditindex={0}
                className={styles.cardDes}
                contentEditable={isEdit ? 'true' : 'false'}
                suppressContentEditableWarning={true}
              >
                {editData.length === 5 ? editData[0] : initContent[0]}
                {/* 面对复杂严峻的宏观形势和经济下行压力，今年上半年，余杭及时出台系列政策措施，大力推进全面创新改革，积极推进供给侧结构性改革，全区经济运行保持稳定增长，基本符合预期，呈现出健康平稳、稳中向好的发展态势。 */}
              </div>

              <div className={styles.innerCard}>
                <header>
                  <span className={styles.innerCardMiniB} />
                  <h2>
                    <span>营收</span>
                  </h2>
                </header>
                <main className={styles.flex}>
                  <div className={styles.left}>
                    <div
                      id="js-pieRevene"
                      style={{
                        width: '400px',
                        height: '400px',
                      }}
                    />
                  </div>
                  {industrialList.length ? (
                    <div className={styles.right}>
                      <div className={styles.miniPanel}>
                        <h3>第一产业</h3>
                        <div className={styles.miniPanelContent}>
                          <img src={indAgriculture} alt="" />
                          <div className={styles.miniPanelRight}>
                            <p>
                              {industrialList[0] &&
                                (industrialList[0].revenueValue >= 0 ? '增长' : '降低')}
                              <em>
                                {
                                  getFormatMoney(
                                    Math.abs(industrialList[0] && industrialList[0].revenueValue)
                                  ).value
                                }
                              </em>
                              {
                                getFormatMoney(
                                  Math.abs(industrialList[0] && industrialList[0].revenueValue)
                                ).unit
                              }
                            </p>
                            <p>
                              环比
                              <span
                                className={classNames({
                                  [styles.miniPanelStatus]: true,
                                  [styles.up]: industrialList[0] && industrialList[0].ringRatio > 0,
                                })}
                              >
                                {industrialList[0] && industrialList[0].ringRatio
                                  ? (industrialList[0].ringRatio * 100).toFixed(2)
                                  : 0}%
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.miniPanel}>
                        <h3>第二产业</h3>
                        <div className={styles.miniPanelContent}>
                          <img src={indIndustry} alt="" />
                          <div className={styles.miniPanelRight}>
                            <p>
                              {industrialList[1] &&
                                (industrialList[1].revenueValue >= 0 ? '增长' : '降低')}
                              <em>
                                {industrialList[1] &&
                                  getFormatMoney(Math.abs(industrialList[1].revenueValue)).value}
                              </em>
                              {industrialList[1] &&
                                getFormatMoney(Math.abs(industrialList[1].revenueValue)).unit}
                            </p>
                            <p>
                              环比
                              <span
                                className={classNames({
                                  [styles.miniPanelStatus]: true,
                                  [styles.up]: industrialList[1].ringRatio > 0,
                                })}
                              >
                                {industrialList[1] && industrialList[1].ringRatio
                                  ? (industrialList[1].ringRatio * 100).toFixed(2)
                                  : 0}%
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.miniPanel}>
                        <h3>第三产业</h3>
                        <div className={styles.miniPanelContent}>
                          <img src={indService} alt="" />
                          <div className={styles.miniPanelRight}>
                            <p>
                              {industrialList[2] &&
                                (industrialList[2].revenueValue >= 0 ? '增长' : '降低')}
                              <em>
                                {industrialList[2] &&
                                  getFormatMoney(Math.abs(industrialList[2].revenueValue)).value}
                              </em>
                              {industrialList[2] &&
                                getFormatMoney(Math.abs(industrialList[2].revenueValue)).unit}
                            </p>
                            <p>
                              环比
                              <span
                                className={classNames({
                                  [styles.miniPanelStatus]: true,
                                  [styles.up]: industrialList[2] && industrialList[2].ringRatio > 0,
                                })}
                              >
                                {industrialList[2] && industrialList[2].ringRatio
                                  ? (industrialList[2].ringRatio * 100).toFixed(2)
                                  : 0}%
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    '暂无数据'
                  )}
                </main>
              </div>
              <div className={styles.innerCard}>
                <header>
                  <span className={styles.innerCardMiniB} />
                  <h2>
                    <span>税收</span>
                  </h2>
                </header>
                <main className={styles.taxWrap}>
                  <span className={styles.num}>
                    <em>{getFormatMoney(entirety.companyTaxRevenue).value}</em>
                    {getFormatMoney(entirety.companyTaxRevenue).unit}
                  </span>
                  <span className={styles.percent}>
                    环比<em>{numeral(entirety.taxRingRatio * 100).format('0, 0.00')}%</em>
                  </span>
                </main>
              </div>
              <div className={styles.sumWrap}>
                <p>
                  营收比上一季度{entirety.revenueIncrease > 0 ? `快` : `慢`}
                  {Math.abs(entirety.revenueIncrease)}个百分点
                </p>
                <p>
                  税收较上一季度{entirety.taxRevenueIncrease > 0 ? `快` : `慢`}
                  {Math.abs(entirety.taxRevenueIncrease)}个百分点
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.titleWrap}>
                <h2>
                  01
                  <span>区域发展 齐头并进</span>
                </h2>
              </div>
              <div
                dataeditindex={1}
                className={styles.cardDes}
                contentEditable={isEdit ? 'true' : 'false'}
                suppressContentEditableWarning={true}
              >
                {/* 在区委政府的领导下，各区域齐头并进，超过5个街道的营收增幅都超过5% */}
                {/* {getAreadevelopData.areaContent} */}
                {editData.length === 5 ? editData[1] : initContent[1]}
              </div>
              <div className={styles.map}>
                <Map pathStyle={pathStyle} />
              </div>

              <div className={styles.listWrap}>
                {getAreadevelopData.areaList.slice(0, 5).map(item => {
                  return (
                    <div key={item.area} className={styles.listbox}>
                      <header>
                        <span>No.{item.areaRingRatioRank}</span>
                        <h3>{item.area}</h3>
                      </header>
                      <main>
                        <p>
                          <span>营收</span>&emsp;{getFormatMoney(item.areaRevenue).value}
                          <span>{getFormatMoney(item.areaRevenue).unit}</span>&emsp;&emsp;
                          <em
                            style={{
                              color: item.areaRingRatio > 0 ? '#FA8F32' : 'rgba(0,0,0,0.85)',
                            }}
                          >
                            {item.areaRingRatio ? (item.areaRingRatio * 100).toFixed(2) : 0}%
                          </em>
                        </p>
                        <p>
                          <span>税收</span>&emsp;{getFormatMoney(item.areaTaxRevenue).value}
                          <span>{getFormatMoney(item.areaTaxRevenue).unit}</span>&emsp;&emsp;
                          <em
                            style={{
                              color: item.areaTaxRingRatio > 0 ? '#FA8F32' : 'rgba(0,0,0,0.85)',
                            }}
                          >
                            {item.areaTaxRingRatio ? (item.areaTaxRingRatio * 100).toFixed(2) : 0}%
                          </em>
                        </p>
                      </main>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.titleWrap}>
                <h2>
                  02
                  <span>特色产业 发展迅猛</span>
                </h2>
              </div>
              <main>
                <div className={styles.innerCard}>
                  <header>
                    <span className={styles.innerCardMiniB} />
                    <h2>
                      <span>营收增长</span>
                    </h2>
                  </header>
                  <main>
                    <div
                      id="js-barReveneGrow"
                      style={{
                        width: '100%',
                        height: '450px',
                      }}
                    />
                  </main>
                </div>

                <div className={styles.innerCard}>
                  <header>
                    <span className={styles.innerCardMiniB} />
                    <h2>
                      <span>数字经济势头强劲</span>
                    </h2>
                  </header>
                  <main>
                    <div
                      dataeditindex={2}
                      className={styles.cardDes}
                      contentEditable={isEdit ? 'true' : 'false'}
                      suppressContentEditableWarning={true}
                      style={{
                        marginTop: '30px',
                      }}
                    >
                      {/* {getDigitaleconomyData.digitalContent} */}
                      {editData.length === 5 ? editData[2] : initContent[2]}
                      {/* 深入实施数字经济“一号工程”，实现信息经济总值{
                        getFormatMoney(getDigitaleconomyData.digitalEconomy).value
                      }
                      {getFormatMoney(getDigitaleconomyData.digitalEconomy).unit}， 较上一季度{getDigitaleconomyData.digitalEconomyQuarter >=
                      0
                        ? '增加'
                        : '减少'}了{
                        getFormatMoney(Math.abs(getDigitaleconomyData.digitalEconomyQuarter)).value
                      }
                      {getFormatMoney(Math.abs(getDigitaleconomyData.digitalEconomyQuarter)).unit} */}
                    </div>
                    <div className={styles.digitalEconWrap}>
                      <div
                        className={styles.compareToPie}
                        id="js-pieDig"
                        style={{
                          width: '260px',
                          height: '260px',
                        }}
                      />
                      <div
                        style={{
                          margin: '0 20px',
                        }}
                      >
                        <img src={ind2mi} alt="" />
                      </div>
                      <div
                        className={styles.compareToUp}
                        style={{
                          backgroundImage: `url(${indRocket})`,
                        }}
                      >
                        <div>
                          <p>
                            较上一季度
                            <span
                              style={{
                                color:
                                  getDigitaleconomyData.digitalEconomyQuarterPercent <= 0
                                    ? '#000'
                                    : '#07c2fc',
                              }}
                            >
                              {(getDigitaleconomyData.digitalEconomyQuarterPercent * 100).toFixed(
                                2
                              )}%
                            </span>
                          </p>
                          <p>
                            较去年同期
                            <span
                              style={{
                                color:
                                  getDigitaleconomyData.digitalEconomyQuarterLy <= 0
                                    ? '#000'
                                    : '#07c2fc',
                              }}
                            >
                              {(getDigitaleconomyData.digitalEconomyQuarterLy * 100).toFixed(2)}%
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              </main>
            </div>

            <div className={styles.card}>
              <div className={styles.titleWrap}>
                <h2>
                  03
                  <span>科技创新 成效明显</span>
                </h2>
              </div>
              <main>
                <div
                  dataeditindex={3}
                  className={styles.cardDes}
                  contentEditable={isEdit ? 'true' : 'false'}
                  suppressContentEditableWarning={true}
                >
                  {/* 在以“2+X”为重点的创新平台建设的推动下，深入实施高新技术企业、科技中小微企业“双倍增”计划，在区各级领导的带领下，科技创新力度空前，成效明显。 */}
                  {editData.length === 5 ? editData[3] : initContent[3]}
                </div>
                <div className={styles.innerCard}>
                  <header>
                    <span className={styles.innerCardMiniB} />
                    <h2>
                      <span>
                        知识产权概况<i>（个数）</i>
                      </span>
                    </h2>
                  </header>
                  <main>
                    <div
                      id="js-barIntellSum"
                      style={{
                        width: '100%',
                        height: '350px',
                      }}
                    />
                  </main>
                </div>
                <div className={styles.innerCard}>
                  <header>
                    <span className={styles.innerCardMiniB} />
                    <h2>
                      <span>发明专利详解</span>
                    </h2>
                  </header>
                  <main>
                    {/* 全区发明 */}
                    <div className={styles.regionalApp}>
                      <div className={styles.regingalImg}>
                        <img src={patentApp} alt="" />
                      </div>
                      <div className={styles.regingalText}>
                        <span>
                          {getParentinventionData.inventionNum
                            ? getParentinventionData.inventionNum
                            : '-'}
                          <i>件</i>
                        </span>
                        <img src={patentAppIcon} alt="" />
                      </div>
                      <div
                        className={styles.compareToUp}
                        style={{
                          backgroundImage:
                            getParentinventionData.inventionRingRatio > 0 &&
                            getParentinventionData.inventionRatio > 0
                              ? `url(${indRocket})`
                              : '',
                        }}
                      >
                        <div>
                          <p>
                            较上一季度
                            <span
                              style={{
                                color:
                                  getParentinventionData.inventionRingRatio > 0
                                    ? '#07c2fc'
                                    : '#000',
                              }}
                            >
                              {getParentinventionData.inventionRingRatio > 0
                                ? `+${numeral(
                                    getParentinventionData.inventionRingRatio * 100
                                  ).format('0, 0.00')}%`
                                : `${numeral(
                                    getParentinventionData.inventionRingRatio * 100
                                  ).format('0, 0.00')}%`}
                            </span>
                          </p>
                          <p>
                            较去年同期
                            <span
                              style={{
                                color:
                                  getParentinventionData.inventionRatio > 0 ? '#07c2fc' : '#000',
                              }}
                            >
                              {getParentinventionData.inventionRatio > 0
                                ? `+${numeral(getParentinventionData.inventionRatio * 100).format(
                                    '0, 0.00'
                                  )}%`
                                : `${numeral(getParentinventionData.inventionRatio * 100).format(
                                    '0, 0.00'
                                  )}%`}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.regionalApp}>
                      <div className={styles.regingalImg}>
                        <img src={patentAut} alt="" />
                      </div>
                      <div className={styles.regingalText}>
                        <span>
                          {getParentinventionData.inventionAuthNum
                            ? getParentinventionData.inventionAuthNum
                            : '-'}
                          <i>件</i>
                        </span>
                        <img src={patentAutIcon} alt="" />
                      </div>
                      <div
                        className={styles.compareToUp}
                        style={{
                          backgroundImage:
                            getParentinventionData.inventionAuthRingRatio > 0 &&
                            getParentinventionData.inventionAuthRatio > 0
                              ? `url(${indRocket})`
                              : '',
                        }}
                      >
                        <div>
                          <p>
                            较上一季度
                            <span
                              style={{
                                color:
                                  getParentinventionData.inventionAuthRingRatio > 0
                                    ? '#07c2fc'
                                    : '#000',
                              }}
                            >
                              {getParentinventionData.inventionAuthRingRatio > 0
                                ? `+${numeral(
                                    getParentinventionData.inventionAuthRingRatio * 100
                                  ).format('0, 0.00')}%`
                                : `${numeral(
                                    getParentinventionData.inventionAuthRingRatio * 100
                                  ).format('0, 0.00')}%`}
                            </span>
                          </p>
                          <p>
                            较去年同期
                            <span
                              style={{
                                color:
                                  getParentinventionData.inventionAuthRatio > 0
                                    ? '#07c2fc'
                                    : '#000',
                              }}
                            >
                              {getParentinventionData.inventionAuthRatio > 0
                                ? `+${numeral(
                                    getParentinventionData.inventionAuthRatio * 100
                                  ).format('0, 0.00')}%`
                                : `${numeral(
                                    getParentinventionData.inventionAuthRatio * 100
                                  ).format('0, 0.00')}%`}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              </main>
            </div>

            <div className={styles.card}>
              <div className={styles.titleWrap}>
                <h2>
                  04
                  <span>新兴产业 潜力无限</span>
                </h2>
              </div>
              <main>
                <div className={styles.wordCloud}>
                  <div
                    id="js-wordCloud"
                    style={{
                      width: '992px',
                      height: '273px',
                    }}
                  />
                </div>
                <div
                  dataeditindex={4}
                  className={styles.cardDes}
                  contentEditable={isEdit ? 'true' : 'false'}
                  suppressContentEditableWarning={true}
                  style={{
                    marginTop: '30px',
                  }}
                >
                  {editData.length === 5 ? editData[4] : initContent[4]}
                  {/* {currentDate}，{hotIndustryName.join('、')}三个新兴产业受到青睐，投融资火热 */}
                </div>
                <div className={styles.innerCard}>
                  <header>
                    <span className={styles.innerCardMiniB} />
                    <h2>
                      <span>融资额</span>
                    </h2>
                  </header>
                  <main>
                    <div
                      id="js-barFinance"
                      className={styles.investChart}
                      style={{
                        width: '100%',
                        height: '250px',
                      }}
                    />
                  </main>
                </div>
              </main>
            </div>
            <div className={styles.footer}>余杭区多维度市场主体服务平台出品</div>
          </main>

          <div
            style={{
              display: isEdit ? 'block' : 'none',
            }}
            className={styles.editBox}
          >
            <div onClick={this.handleSaveEdit} className={styles.editBtn}>
              保存
            </div>
            <div onClick={this.handleCancelEdit} className={styles.cancelBtn}>
              取消
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
