//mengambil element canvas html dengan id Viska_Canvas
var canvas = document.getElementById("Viska_Canvas");
//mengambil context 2d dari element canvas
var ctx = canvas.getContext("2d");

//menyiapkan data yang akan dibutuhkan untuk membuat animasi
//posisi x dan y awal
var posXRect = 0;
var posYRect = 200;

//ukuran lebar dan tinggi
var widthRect = 100;
var heightRect = 100;

//jumlah pergerakan horizontal dalam piksel (5 piksel)
var veloXRect = 5;

//fungsi untuk menggambarkan persegi berwarna hijau
function drawRect() {
  //membersihkan canvas supaya setiap menggambar ulang persegi,
  //canvas menjadi bersih lagi
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //menggambarkan persegi berwarna hijau
  ctx.fillStyle = "green";
  ctx.fillRect(posXRect, posYRect, widthRect, heightRect);

  //menambahkan batasan agar bola tidak bergerak keluar dari canvas
  if((posXRect+widthRect)+veloXRect>canvas.width||posXRect+veloXRect<0){
    veloXRect =-veloXRect;
  }

  //mengubah nilai posisi titik horizontal
  //sesuai jumlah pergerakan yang sudah ditentukan di awal(veloXRect)
  posXRect += veloXRect;

  //memanggil ulang fungsi menggambar persegi
  //dengan hitungan 60 fps supaya animasi lebih halus
  window.requestAnimationFrame(drawRect);

  

}

//menggambarkan persegi pertama kali program dijalankan
drawRect()
;

