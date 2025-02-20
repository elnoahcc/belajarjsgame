var width = 100;
var height = 100;

//membuat fungsi/method untuk membuat canvas
//supaya lebih sedikit kode-nya
var createCanvas = function () {
  var newCanvas = document.createElement("canvas");
  newCanvas.width = width * 1.2;
  newCanvas.height = height * 1.2;
  newCanvas.style.border = "1px solid #000";
  newCanvas.style.margin = "60px";
  return newCanvas;
};

//untuk menggambarkan 1 lingkaran jingga
//yang nantinya bisa digunakan berulang-ulang
var canvasObjCirc = new createCanvas();
var ctxObjCirc = canvasObjCirc.getContext("2d");
ctxObjCirc.fillStyle = "orange";
ctxObjCirc.translate((width * 1.2 - width) / 2, (height * 1.2 - height) / 2);
ctxObjCirc.beginPath();
ctxObjCirc.arc(width / 2, height / 2, width / 2, Math.PI * 2, 0, false);
ctxObjCirc.fill();

//menggambarkan 1 segitiga hijau
//yang nantinya bisa digunakan berulang-ulang
var canvasObjTria = createCanvas();
var ctxObjTria = canvasObjTria.getContext("2d");
ctxObjTria.fillStyle = "green";
ctxObjTria.translate((width * 1.2 - width) / 2, (height * 1.2 - height) / 2);
ctxObjTria.beginPath();
ctxObjTria.moveTo(0, 0);
ctxObjTria.lineTo(width, 0);
ctxObjTria.lineTo(width / 2, height);
ctxObjTria.closePath();
ctxObjTria.fill();

//membuat tabel
var dl = document.createElement("dl");
document.body.appendChild(dl);

//menambahkan baris ke tabel
var dt1 = document.createElement("dt");
dl.appendChild(dt1);

//membuat canvas baru yang langsung berisi
//objek pertama (awal) yaitu lingkaran jingga
var canvasCirc = createCanvas();
var ctx = canvasCirc.getContext("2d");
ctx.drawImage(canvasObjCirc, 0, 0);
dt1.appendChild(canvasCirc);

//membuat canvas baru yang langsung berisi
//objek kedua (baru) yaitu segitiga hijau
var canvasTria = createCanvas();
var ctx = canvasTria.getContext("2d");
ctx.drawImage(canvasObjTria, 0, 0);
dt1.appendChild(canvasTria);

//membuat canvas baru yang langsung berisi
//objek pertama + kedua secara berurutan
//dengan compositing 'source-over'
var canvasSourceOver = createCanvas();
var ctx = canvasSourceOver.getContext("2d");
ctx.drawImage(canvasObjCirc, 0, 0);
ctx.globalCompositeOperation = "source-over";
ctx.drawImage(canvasObjTria, 0, 0);
dt1.appendChild(canvasSourceOver);

//menambahkan baris ke tabel
var dt2 = document.createElement("dt");
dl.appendChild(dt2);
//membuat canvas baru yang langsung berisi
//objek pertama + kedua secara berurutan
//dengan compositing 'source-in'
var canvasSourceIn = createCanvas();
var ctx = canvasSourceIn.getContext("2d");
ctx.drawImage(canvasObjCirc, 0, 0);
ctx.globalCompositeOperation = "source-in";
ctx.drawImage(canvasObjTria, 0, 0);
dt2.appendChild(canvasSourceIn);

//membuat canvas baru yang langsung berisi
//objek pertama + kedua secara berurutan
//dengan compositing 'source-out'
var canvasSourceOut = createCanvas();
var ctx = canvasSourceOut.getContext("2d");
ctx.drawImage(canvasObjCirc, 0, 0);
ctx.globalCompositeOperation = "source-out";
ctx.drawImage(canvasObjTria, 0, 0);
dt2.appendChild(canvasSourceOut);

//membuat canvas baru yang langsung berisi
//objek pertama + kedua secara berurutan
//dengan compositing 'source-atop'
var canvasSourceAtop = createCanvas();
var ctx = canvasSourceAtop.getContext("2d");
ctx.drawImage(canvasObjCirc, 0, 0);
ctx.globalCompositeOperation = "source-atop";
ctx.drawImage(canvasObjTria, 0, 0);
dt2.appendChild(canvasSourceAtop);




  

