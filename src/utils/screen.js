export function initScreen() {
  const finStyle = {};

  const bdW = document.body.clientWidth;
  const bdH = document.body.clientHeight;
  const bdP = bdW / bdH;
  const w = 9600;
  const h = 3240;
  const p = w / h;

  finStyle.width = w;
  finStyle.height = h;
  finStyle.transformOrigin = `0 0`;
  finStyle.backgroundColor = '#00296F';
  /* eslint-disable */
  if (window.location.href.includes('partScreen')) {
    if (p > bdP) {
      finStyle.transform = `scale(${bdW / w})`;
      finStyle.top = (bdH - bdW / p) / 2;
    } else {
      finStyle.transform = `scale(${bdH / h})`;
      finStyle.left = (bdW - bdH * p) / 2;
    }
  } else if (p > bdP) {
    finStyle.transform = `scale(${bdW / w}, ${bdH / h})`;
  } else {
    finStyle.transform = `scale(${bdH / h})`;
    finStyle.left = (bdW - bdH * p) / 2;
  }

  return finStyle;
}
