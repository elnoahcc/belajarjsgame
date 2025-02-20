var canvas = document.getElementById("Viska_Canvas"); 
var ctx = canvas.getContext("2d");


var canvasWidth = canvas.width;
var canvasHeight = canvas.height;


//menentukan warna 1 dan 2 
var color1 = "Lavender"; 
var color2 = "#FFFACD"; 
//menentukan banyaknya garis yang digambar 
var numberOfStripes = 50; 
//menentukan tebalnya pola garis yang digambar 
var thickness = canvasWidth / numberOfStripes; 
//mengatur ketebalan garis pada pola 
ctx.lineWidth = thickness; 
//menggambar garis sebanyak numberOfStripes (50) 
for (var i = 0; i < numberOfStripes * 2; i++) { 
//mulai menggambar 
ctx.beginPath(); 
//mengatur warna mana yang dipakai 
ctx.strokeStyle = i % 2 ? color1 : color2; 

//mengatur posisi awal garis yang akan digambar 
ctx.moveTo(i * thickness - 640, -10); 
//mengatur posisi ke dua (terakhir) yang garis akan digambar 
ctx.lineTo(i * thickness, 640); 

//menggambar garisnya 
ctx.stroke(); 
} 
//mengatur ulang ketebalan garis pada gambar segitiga yang berubah 
ctx.lineWidth = 1;





//menentukan warna gradient pada persegi kosong yang sudah dibuat sebelumnya 
//yaitu dengan warna hitam dan putih 
var lineGradient = ctx.createLinearGradient(10, 150, 60, 150); 
lineGradient.addColorStop(0, "black"); 
lineGradient.addColorStop(1, "white"); 
ctx.fillStyle = lineGradient; 
ctx.fillRect(10, 10, 70, 70); 
//menggambar persegi kosongan dengan garis tepi pada titik koordinat (100, 10) dan 
//dengan lebar 70 piksel serta tinggi 70 piksel 
ctx.strokeRect(10, 10, 70, 70); 

//menggambar persegi kosongan dengan garis tepi pada titik koordinat (100, 10) dan 
//dengan lebar 70 piksel serta tinggi 70 piksel 
ctx.strokeRect(10, 10, 70, 70); 
//menggambar persegi penuh atau persegi dengan isi yang titik koordinatnya berada di (180, 10) dan 
//dengan lebar 50 piksel serta tinggi 50 piksel 
ctx.fillStyle = "#0000ff"; 
ctx.fillRect(90, 10, 70, 70); 
//menggambar persegi transparan dengan titik koordinatnya berada di (190, 20) dan 
//dengan lebar 20 piksel serta tinggi 20 piksel 
ctx.clearRect(110, 35, 20, 20);


//menggambar lingkaran dengan titik koordinatnya berada di (50, 140) dan 
//dengan lebar lingkaran sebesar 60 piksel 
ctx.beginPath(); 
ctx.arc(50, 140, 30, 0, 50); 
ctx.stroke(); 
ctx.closePath();


//membuat garis luar menjadi warna jingga 
ctx.strokeStyle = "rgb(255, 165, 0)"; 
//menggambar segitiga dengan tiga titik koordinat 
ctx.beginPath(); 
ctx.moveTo(130, 110); // titik awal 
ctx.lineTo(90, 170); // titik ke-2 
ctx.lineTo(170, 170); // titik ke-3 
ctx.closePath(); //dari titik ke-3 menuju titik awal 
ctx.stroke(); //gambar garis 
ctx.fill(); //bentuk segitiga full warna hitam


//menentukan warna dari radial gradient yang akan tampil (2 warna berbeda) 
var radGradient = ctx.createRadialGradient(95+25, 150-25, 2, 95+25, 
150-25, 25); 
radGradient.addColorStop(0, '#A7D30C'); 
radGradient.addColorStop(1, '#019F62'); 
//mengatur agar tampilan gambar berikutnya menggunakan style 
radGradient 
ctx.fillStyle = radGradient; 
//menggambar bentuk persegi 
ctx.fillRect(90, 100, 50, 50);