//mengambil element canvas html dengan id Viska_Canvas
var canvas = document.getElementById("Viska_Canvas");
//mengambil context 2d dari element canvas
var ctx = canvas.getContext("2d");

//menentukan jenis bentuk setiap ujung gambar garis menjadi melengkung
ctx.lineCap = "round";

//menggeser titik tumpu canvas ke tengah
ctx.translate(canvas.width / 2, canvas.height / 2);

//mengubah skala tampilan canvas menjadi 75%
ctx.scale(0.75, 0.75);

//fungsi untuk menggambarkan objek jam
function drawClock() {
  //membersihkan tampilan seluruh canvas
  ctx.clearRect(
    -canvas.width / 2,
    -canvas.height / 2,
    canvas.width,
    canvas.height
  );

  //menggambar indikator menit
  ctx.save();
  ctx.lineWidth = 5;
  for (i = 0; i < 60; i++) {
    if (i % 5 != 0) {
      ctx.beginPath();
      ctx.moveTo(180, 0);
      ctx.lineTo(170, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  //menggambar indikator jam
  ctx.save();
  ctx.strokeStyle = "orange";
  ctx.lineWidth = 12;
  for (var i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(180, 0);
    ctx.lineTo(150, 0);
    ctx.stroke();
  }

  //menggambar garis lingkaran luar
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.strokeStyle = "#325FA2";
  ctx.arc(0, 0, 200, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.restore();

  //menyimpan state awal canvas
  ctx.save();

  //memutar canvas ke kiri 45 derajat
  ctx.rotate(-Math.PI / 2);

  //mengubah warna garis yang digambar menjadi biru
  ctx.strokeStyle = "#325FA2";

  //menyiapkan data waktu
  var now = new Date();
  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr = now.getHours();
  hr = hr >= 12 ? hr - 12 : hr;

  //menggambarkan jarum jam
  ctx.save();

  //membuat jarum jam bergerak sesuai jam sekarang
  ctx.rotate(
    hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec
  );
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  //menggambar jarum menit
  ctx.save();
  //membuat jarum bergerak sesuai menit sekarang
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(150, 0);
  ctx.stroke();
  ctx.restore();

  //menggambar jarum detik
  ctx.save();
  //membuat jarum bergerak sesuai detik sekarang
  ctx.rotate((sec * Math.PI) / 30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(110, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(115, 0, 5, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  //mengembalikan canvas ke state awal
  ctx.restore();
  window.requestAnimationFrame(drawClock);

}



//memanggil fungsi drawClock untuk pertama kali saja
drawClock();


