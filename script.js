'use strict';
setTimeout(() => {
  const image = new Image();
  image.onload = event => draw(image);
  const date = new Date();
  const year = date.getFullYear();
  image.src = `image-${(year - 1900) % 12}.png`;
}, 1000);
function draw(image) {
  const context = canvas.getContext('2d');
  const width = image.naturalHeight * 500 / image.naturalWidth;
  context.fillStyle = 'white';
  context.fillRect(0, 0, 500, 740);
  context.fillStyle = 'black';
  context.drawImage(image, 0, 740 - width, 500, width);
  context.font = '60px hkkaing';
  context.fillText('謹賀新年', 30, 90);
  context.font = '30px hkkaing';
  context.fillText('昨年はたいへんお世話になり', 30, 150);
  context.fillText('ありがとうございました', 30, 180);
  context.fillText('皆様のご健康とご多幸を', 30, 210);
  context.fillText('お祈り申し上げます', 30, 240);
  context.fillText('新年もよろしくお願いいたします', 30, 270);
  context.fillText('　　　　　　　二〇二一年　元旦', 30, 330);
  try {
    const imageData = context.getImageData(0, 0, 500, 740);
    context.putImageData(imageData, 0, 0);
  } catch (error) {
    window.alert(error);
  }
}
button.onclick = event => {
  const a = document.createElement('a');
  a.download = Date.now();
  a.href = canvas.toDataURL();
  a.click();
};
