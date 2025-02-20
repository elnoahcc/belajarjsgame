function konterMenurun(angka_awal) {
    console.log(angka_awal);
    let angka_berikutnya = angka_awal - 1;
    if (angka_berikutnya > 0) {
    konterMenurun(angka_berikutnya);
    } else {
    console.log("Selesai");
    }
   }
   konterMenurun(3);