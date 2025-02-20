//mengambil element canvas html dengan id Viska_Canvas
var canvas = document.getElementById("Viska_Canvas");
//mengambil context 2d dari element canvas
var ctx = canvas.getContext("2d");

//menyiapkan objek bumi, bulan dan matahari
var earth = new Image();
var moon = new Image();
var sun = new Image();

//menentukan direktori gambar bumi, bulan dan matahari
earth.src = "./image/earth.png";
moon.src = "./image/moon.png";
sun.src = "./image/sun.png";

function draw() {
  ctx.fillStyle = "black";
  //mulai menggambarkan persegi panjang sebesar canvas dengan
  //background dari radRect
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

//menggambarkan pertama kali dengan mamanggil fungsi draw
draw();

//menyimpan state awal canvas
ctx.save();

//menggeser titik mulai canvas ke tengah
ctx.translate(canvas.width / 2, canvas.height / 2);

//menggambar matahari
ctx.drawImage(sun, -sun.width / 2, -sun.height / 2);

//garis orbit bumi
ctx.strokeStyle = "white";
ctx.beginPath();
ctx.arc(0, 0, 150, 0, Math.PI * 2, false);
ctx.stroke();

//menggambar bumi dan membuat bumi berputar-putar
var time = new Date();
ctx.rotate(
  ((2 * Math.PI) / 60) * time.getSeconds() +
    ((2 * Math.PI) / 60000) * time.getMilliseconds()
);
ctx.translate(150, 0);
ctx.drawImage(earth, -13, -13, 26, 26);

//menggambar bulan dan membuat bulan berputar-putar
ctx.save();
ctx.rotate(
  ((2 * Math.PI) / 6) * time.getSeconds() +
    ((2 * Math.PI) / 6000) * time.getMilliseconds()
);
ctx.translate(0, 25);
ctx.drawImage(moon, -5, -5, 10, 10);
ctx.restore();

//menggambar bayangan bumi
ctx.fillStyle = "rgba(0,0,0,0.5)";
ctx.fillRect(0, -13, 50, 26);

//mengembalikan canvas ke state awal
ctx.restore();

//menggambar terus menerus dengan memanggil fungsi draw
window.requestAnimationFrame(draw);
