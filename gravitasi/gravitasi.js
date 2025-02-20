//mengambil element canvas html dengan id Viska_Canvas
var canvas = document.getElementById("Viska_Canvas");
//mengambil context 2d dari element canvas
var ctx = canvas.getContext("2d");

//membuat objek bola yang di dalamnya terdapat
//beberapa sifat dan juga fungsi dengan nama draw
var ball = {
  x: 200,
  y: 200,
  radius: 25,

  //sifat bola yang berupa warna bola (jingga)
  color: "orange",

  //fungsi untuk menggambarkan bola
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

//menggambarkan bola ke dalam canvas menggunakan fungsi
//yang terdapat di dalam objek bola
ball.draw();

var ball = {
    x: 200,
    y: 200,
    vx: 5,
    vy: 2,
    radius: 25,
  
    //sifat bola yang berupa warna bola (jingga)
    color: "orange",
  
    //fungsi untuk menggambarkan bola
    draw: function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    },
  };

  //untuk menampung pemanggilan fungsi drawBall
var raf;
//fungsi untuk menggambar ulang bola dengan
//posisi yang berbeda serta menampung pemanggilan
//ulang fungsi drawBall
function drawBall() {
  //membersihkan canvas dengan
  //menggambar persegi kosongan
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  raf = window.requestAnimationFrame(drawBall);
}

//event listener untuk mendeteksi ketika
//pointer berada di dalam area canvas
canvas.addEventListener("mouseover", function (e) {
    raf = window.requestAnimationFrame(drawBall);
  });
  
  //event listener untuk mendeteksi ketika
  //pointer keluar area canvas
  canvas.addEventListener("mouseout", function (e) {
    window.cancelAnimationFrame(raf);
  });
  
//melakukan pengecekan posisi x dari bola
if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    //membalikkan nilai kecepatan x atau horizontal
    ball.vx = -ball.vx;
  }
  //melakukan pengecekan posisi y dari bola
  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    //membalikkan nilai kecepatan y atau vertikal
    ball.vy = -ball.vy;
  }

 //mengubah kecepatan pergerakan  
 //vertikal bola  ball.vy 
 ball.vy*= 0.99;  ball.vy += 0.25; 


//membersihkan canvas dengan
  //menggambar persegi kosongan
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //menggambar persegi samar-samar
  //seukuran canvas untuk membuat efek trailing
  ctx.fillStyle = "rgba(255,255,255,0.3";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

 
//event listener untuk mendeteksi ketika
//pointer berada di dalam area canvas
canvas.addEventListener("mouseover", function (e) {
  raf = window.requestAnimationFrame(drawBall);
});


//event listener untuk mendeteksi ketika
//terjadi klik di dalam area canvas
canvas.addEventListener("click", function (e) {
  raf = window.requestAnimationFrame(drawBall);
});

//event listener untuk mendeteksi ketika
//mouse sedang bergerak
canvas.addEventListener("mousemove", function (e) {
    //menggambarkan persegi panjang samar-samar
    //seukuran canvas untuk membuat efek trailing
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    //mengubah nilai posisi x sebelumya dengan
    //nilai posisi x pada mouse
    ball.x = e.clientX;
  
    //mengubah nilai posisi y sebelumnya dengan
    //nilai posisi y pada mouse
    ball.y = e.clientY;
  
    //mengatur ulang bola dengan posisi
    //x dan y baru
    ball.draw();
  });
  

//variabel boolean yang nantinya digunakan
//untuk membatasi pergerakan bola
var running = false;

//event listener untuk mendeteksi ketika
//terjadi klik di dalam area canvas
canvas.addEventListener("click", function (e) {
  //batasan jika variabel running bernilai false, maka
  //kode di dalam kurung batasan akan dijalankan
  if (!running) {
    raf = window.requestAnimationFrame(drawBall);
    //mengubah variabel running menjadi bernilai true
    running = true;
  }
});

//event listener untuk mendeteksi ketika
//pointer keluar area canvas
canvas.addEventListener("mouseout", function (e) {
  window.cancelAnimationFrame(raf);
  //mengubah variabel running menjadi bernilai false
  running = false;
});

//event listener untuk mendeteksi ketika
//mouse sedang bergerak
canvas.addEventListener("mousemove", function (e) {
  //batasan jika variabel running bernilai false, maka
  //kode di dalam kurung batasan akan dijalankan
  if (!running) {
    //menggambarkan persegi panjang samar-samar
    //seukuran canvas untuk membuat efek trailing
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //mengubah nilai posisi x sebelumya dengan
    //nilai posisi x pada mouse
    ball.x = e.clientX;

    //mengubah nilai posisi y sebelumnya dengan
    //nilai posisi y pada mouse
    ball.y = e.clientY;

    //mengatur ulang bola dengan posisi
    //x dan y baru
    ball.draw();
  }
});





 