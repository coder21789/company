import React, { Component } from 'react';

const drawPyramid = (canvasId, colors) => {
  const { x1, y1, x2, y2, circle, shade1, shade2 } = colors;
  const canvas = document.getElementById(canvasId);
  const c = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  c.clearRect(0, 0, canvas.width, canvas.height);

  c.beginPath();
  const { height } = canvas; // 计算等边三角形的高
  c.moveTo(100, 15); // 从A（100,0）开始
  c.lineTo(0, height); // 从A(100,0)开始，画到B (0,173)结束
  c.lineTo(144, height); // B(0,173)-C(200,173)
  const grd = c.createLinearGradient(100, 0, 72, height); // 使用渐变颜色填充
  grd.addColorStop(0, x1); // 起始颜色
  grd.addColorStop(1, y1); // 终点颜色
  c.fillStyle = grd; // 以上面定义的渐变填充
  c.fill(); // 闭合形状并且以填充方式绘制出
  c.closePath();

  c.beginPath();
  c.moveTo(100, 15); // 从A（100,0）开始
  c.lineTo(144, height); // B(0,173)-C(200,173)
  c.lineTo(210, height - 4); // B(0,173)-C(200,173)
  c.lineTo(100, 23); // B(0,173)-C(200,173)
  const grd1 = c.createLinearGradient(100, 0, 177, height); // 使用渐变颜色填充,从(0,0)到(200,0) （左到右）
  grd1.addColorStop(0, x2); // 起始颜色
  grd1.addColorStop(1, y2); // 终点颜色
  c.fillStyle = grd1; // 以上面定义的渐变填充
  c.fill(); // 闭合形状并且以填充方式绘制出来
  c.closePath();

  c.fillStyle = circle;
  c.shadowBlur = 22; // 模糊尺寸
  c.shadowColor = shade1; // 颜色
  c.beginPath();
  c.arc(100, 15, 15, 0, Math.PI * 2, false); // 画圆
  c.fill(); // 闭合形状并且以填充方式绘制出来
  c.closePath();

  c.fillStyle = circle;
  c.shadowBlur = 12; // 模糊尺寸
  c.shadowColor = shade2; // 颜色
  c.beginPath();
  c.arc(100, 15, 15, 0, Math.PI * 2, false); // 画圆
  c.fill(); // 闭合形状并且以填充方式绘制出来
  c.closePath();
};
export default class Pyramid extends Component {
  componentDidMount() {
    const { id, colors } = this.props;
    drawPyramid(`pyramid${id}`, colors);
  }

  // componentDidUpdate() {
  //   const { id, colors } = this.props;
  //   drawPyramid(`pyramid${id}`, colors);
  // }

  render() {
    const { rate, id } = this.props;
    return (
      <div>
        <canvas id={`pyramid${id}`} width="210px" height={`${rate * 425}px`} />
      </div>
    );
  }
}
