// import React, { Component } from 'react';
// // import sector from '../../assets/sector.png';

// // import styles from './index.less';

// export default class OPieCanvas extends Component {
//   componentDidMount() {
//     this.bindReSize();
//     window.addEventListener('resize', this.bindReSize);
//   }

//   shouldComponentUpdate() {
//     this.bindReSize();

//     return true;
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.bindReSize);
//   }

//   @Bind()
//   bindReSize() {
//     const ecnoGrowthChart = this.drawPieCanvas();
//     ecnoGrowthChart.resize();
//   }

//   drawPieCanvas(canvasId, option) {
//     const canvas = document.getElementById(canvasId);
//     const { data, color } = option;
//     const pi2 = Math.PI * 2;
//     const c = canvas.getContext('2d');
//     c.clearRect(0, 0, canvas.width, canvas.height);
//     let startAgl = Math.PI * 1.5; // 园的弧度的起点
//     let agl; // 园的弧度的终点
//     let sum = 0;
//     let rSum = 0;
//     //  计算画布的宽度
//     const cW = canvas.offsetWidth;
//     //  计算画布的高度
//     const cH = canvas.offsetHeight;
//     canvas.width = cW;
//     canvas.height = cH;
//     const min = cW > cH ? cH : cW; // 获取canvas宽高的最小值

//     // console.log(min, cW, cH);

//     let rL = 0; // 园的半径
//     for (const item of data) {
//       sum += item.value * 1.0;
//       rSum += item.y * 1.0;
//     }

//     rL = min * 0.2;

//     for (let i = 0; i < data.length; i += 1) {
//       // 绘制饼图
//       agl = (data[i].value / sum) * pi2 + startAgl; // 终点
//       rL += (data[i].y / rSum) * min * 0.066;
//       c.strokeStyle = color[i];
//       c.lineWidth = min * 0.13; // 线的粗细
//       // console.log(rL);
//       c.beginPath();
//       // console.log(y*1.0);
//       c.arc(cW / 2, cH / 2, rL, startAgl, agl, false); // 画圆
//       c.stroke();
//       c.closePath();
//       startAgl = agl;
//     }
//     c.fillStyle = '#ffffff';
//     c.beginPath();
//     c.arc(cW / 2, cH / 2, min * 0.2, 0, pi2, false); // 画圆
//     c.fill();
//     c.closePath();

//     // 绘制图例
//     const img = new Image();
//     img.src = sector;
//     img.onload = () => {
//       c.drawImage(img, (cW - 26 - 135) / 2, cH * 0.9 - 5, 26, 17);
//     };
//     c.fillStyle = '#000000';
//     c.fillText('半径：企业年累计营收均值', (cW - 26 - 135) / 2 + 34, cH * 0.9);
//     c.fillStyle = 'rgba(0,0,0,0.45)';
//     c.fillText('角度：营收企业数', (cW - 26 - 135) / 2 + 34, cH * 0.9 + 18);
//   }

//   render() {
//     return <div id="pieChart" style={{ width: '100%', height: '266px' }} />;
//   }
// }
