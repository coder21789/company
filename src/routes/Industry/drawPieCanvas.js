import sector from '../../assets/sector.png';

export default function drawPieCanvas(canvasId, data, name) {
  try {
    if (data.length > 0) {
      const canvas = document.getElementById(canvasId);
      canvas.onmousemove = dragCircle;
      canvas.onmouseout = stopDragging;
      const c = canvas.getContext('2d');
      const pi2 = Math.PI * 2;
      let startAgl = Math.PI * 1.5; // 园的弧度的起点
      let agl; // 园的弧度的终点
      let sum = 0;
      let rSum = 0;
      //  计算画布的宽度
      const cW = canvas.offsetWidth;
      //  计算画布的高度
      const cH = canvas.offsetHeight;
      canvas.width = cW;
      canvas.height = cH;
      c.clearRect(0, 0, canvas.width, canvas.height);
      const min = cW > cH ? cH : cW; // 获取canvas宽高的最小值

      let rL = 0; // 园的半径
      for (const item of data) {
        sum += item.value * 1.0;
        rSum += item.y * 1.0;
      }
      rL = min * 0.15;

      const dataArr = data.sort((a, b) => a.y * 1.0 > b.y * 1.0);

      for (let i = 0; i < dataArr.length; i += 1) {
        // 绘制饼图
        agl = (dataArr[i].value / sum) * pi2 + startAgl; // 终点
        rL += (dataArr[i].y / rSum) * min * 0.12;
        c.strokeStyle = dataArr[i].color;
        c.lineWidth = min * 0.13; // 线的粗细
        c.beginPath();
        c.arc(cW / 2, cH / 2, rL, startAgl, agl, false); // 画圆
        c.stroke();
        c.closePath();
        startAgl = agl;
      }
      c.fillStyle = '#ffffff';
      c.beginPath();
      c.arc(cW / 2, cH / 2, min * 0.2, 0, pi2, false); // 画圆
      c.fill();
      c.closePath();

      // 绘制图例
      const img = new Image();
      img.src = sector;
      img.onload = () => {
        c.drawImage(img, (cW - 26 - 135) / 2, cH * 0.9 - 5, 26, 17);
      };
      c.fillStyle = '#000000';
      c.fillText(`半径：企业年累计${name}均值`, (cW - 26 - 135) / 2 + 34, cH * 0.9);
      c.fillStyle = 'rgba(0,0,0,0.45)';
      c.fillText(`角度：${name}企业数`, (cW - 26 - 135) / 2 + 34, cH * 0.9 + 18);
    }
  } catch (e) {
    const canvas = document.getElementById(canvasId);
    const c = canvas.getContext('2d');
    c.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function dragCircle() {
  // console.log(1, params);
}
function stopDragging() {}
