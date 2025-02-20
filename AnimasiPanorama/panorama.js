//mengambil element canvas html dengan id Viska_Canvas
var canvas = document.getElementById("Viska_Canvas");
//mengambil context 2d dari element canvas
var ctx = canvas.getContext("2d");

//menyiapkan data yang akan dibutuhkan untuk membuat animasi
//yaitu posisi x dan y awal
var posXImage = 0;
var posYImage = 150;

//untuk menampung lebar dan tinggi gambar
var widthImage;
var heightImage;

//jumlah pergerakan horizontal dalam piksel (1 piksel)
var veloXImage = 1;

var img = new Image();
img.src = "belajarjsgame/image/image.jpg";
img.onload = function () {
  //menampung ukuran lebar dan tinggi gambar
  //setelah gambar berhasil dimuat
  widthImage = img.width;
  heightImage = img.height;

  //menampilkan gambar panorama sekali
  //setelah gambar berhasil dimuat
  //dengan memanggil fungsi drawPanorama()
  drawPanorama();
};

//fungsi untuk menampilkan gambar panorama
function drawPanorama() {

  //membersihkan canvas supaya setiap menampilkan
  //ulang gambar, canvas menjadi bersih lagi
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //mengatur ulang nilai posisi x gambar
  if (posXImage > canvas.width) {
    posXImage = canvas.width - widthImage;
  }

  //membuat objek gambar baru ke canvas
  //untuk mengisi kekosongan belakang gambar
  if (posXImage > canvas.width - widthImage) {
    ctx.drawImage(img, posXImage - widthImage + 1, posYImage);
  }

  //membuat objek gambar baru ke canvas
  ctx.drawImage(img, posXImage, posYImage);

  //mengubah nilai posisi titik horizontal sesuai
  //jumlah pergerakan yang sudah ditentukan di awal (veloXImage)
  posXImage += veloXImage;

  //memanggil ulang fungsi membuat objek gambar panorama
  //dengan hitungan 60 fps supaya animasi lebih halus
  window.requestAnimationFrame(drawPanorama);


  //menggambarkan persegi berwarna hijau
  ctx.drawImage(img, posXImage, posYImage);
}
