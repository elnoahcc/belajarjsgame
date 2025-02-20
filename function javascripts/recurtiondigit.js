function jumlahDigit(angka_awal) {
 let angka_berikutnya = angka_awal - 1;
 if (angka_berikutnya > 0) {
 return angka_awal + jumlahDigit(angka_berikutnya);
 }
 return 1;
}
console.log(jumlahDigit(5));