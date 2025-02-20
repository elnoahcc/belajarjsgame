//mengambil elemen canvas html dengan id Viska_Canvas
var canvas = document.getElementById("Viska_Canvas");

//mengambil context dari elemen canvas
var ctx = canvas.getContext("2d");

//menyimpan state # canvas
ctx.save();

//menggambar persegi warna hitam (warna default)
//dengan lebar dan tinggi 100 piksel
//pada titik koordinat x=0 dan y=0
ctx.fillRect(0, 0, 100, 100);

//menggeser posisi canvas x dan y masing-masing bertambah 50 piksel
ctx.translate(50, 50);

//menyimpan state #2 canvas
ctx.save();

//menggambar persegi warna biru dengan lebar dan tinggi 50 piksel
//pada titik koordinat x=0 dan y=0
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 100, 100);

//menggeser posisi canvas x dan y masing-masing bertambah 50 piksel
ctx.translate(50, 50);

//menyimpan state #2 canvas
ctx.save();

//menggambar persegi warna biru dengan lebar dan tinggi 50 piksel
//pada titik koordinat x=0 dan y=0
ctx.fillStyle = "pink";
ctx.fillRect(0, 0, 50, 50);

//mengembalikan canvas ke state #2
ctx.restore();

//menggambar persegi warna jingga / orange dengan lebar dan tinggi 50 piksel
//pada titik koordinat x=0 dan y=0
ctx.fillStyle = "orange";
ctx.fillRect(0, 0, 50, 50);

//mengembalikan canvas ke state #1
ctx.restore();

//menggambar persegi warna kuning dengan lebar dan tinggi 50 piksel
//pada titik koordinat x=0 dan y=0
ctx.fillStyle = "yellow";
ctx.fillRect(0, 0, 50, 50);

//memutar canvas sebanyak 45 derajat
ctx.rotate((Math.PI / 180) * 45);

//membuat persegi dengan ukuran 10x10 piksel
//lalu mengatur skalanya dengan skala (10,1)
//hingga pada tampilan akan terlihat persegi panjang dengan ukuran 100x10
ctx.fillStyle = "brown";
ctx.save();
ctx.translate(300, 20);
ctx.scale(10, 1);
ctx.translate(-300, -20);
ctx.fillRect(300, 20, 10, 10);
ctx.restore();

//membuat teks 'VISKA JAYA' lalu mengatur skalanya dengan skala (-1,1)
//agar terlihat terbalik secara horizontal
ctx.save();
ctx.translate(450, 10);
ctx.scale(-1, 1);
ctx.font = "30px Poppins";
ctx.translate(-450, -10);
ctx.fillText("VISKA JAYA", 450, 120);
ctx.restore();ctx.restore();
//4.3
//menyimpan state canvas terakhir
ctx.save();

//menggeser canvas x: 200, dan y: 240
ctx.translate(200, 240);

//membuat garis menjadi putus-putus
ctx.setLineDash([4]);

ctx.save();
ctx.fillStyle = "pink";
ctx.setTransform(1, 1, 0, 1, 10, 0);
ctx.fillRect(190, 90, 50, 50);
ctx.restore();

ctx.save();
ctx.fillStyle = "cyan";
ctx.setTransform(1, 1, 0, 1, 0, -150);
ctx.fillRect(350, 130, 50, 50);
ctx.restore();

ctx.save();
ctx.strokeStyle = "black";
ctx.strokeRect(50, 90, 100, 50);
ctx.restore();

//mengembalikan state terakhir canvas
ctx.restore();



