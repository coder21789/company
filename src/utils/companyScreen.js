export function initScreen() {
  let finStyle = {};

  const bdW = document.body.clientWidth;
  const bdH = document.body.clientHeight;
  const bdP = bdW / bdH;
  const w = 1920;
  const h = 1080;
  const p = w / h;
  finStyle = {
    transform: `scale(${bdW / w})`,
    transformOrigin: `0 0`,
    width: w,
    height: h,
  };
  if (p > bdP) {
    finStyle.transform = `scale(${bdW / w})`;
    finStyle.top = (bdH - bdW / p) / 2;
  } else {
    finStyle.transform = `scale(${bdH / h})`;
    finStyle.left = (bdW - bdH * p) / 2;
  }
  return finStyle;
}
