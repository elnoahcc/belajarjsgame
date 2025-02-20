function get_data_kelas(id) {
    const kelas = {
    id: 0,
    nama: "",
    jumlah_peserta: 0,
    jumlah_peserta_lulus: 0,
    jumlah_peserta_ongoing: 0,
    jumlah_peserta_tidak_lulus: 0,
    };
    const ary_jml_peserta = [100, 200, 300];
    const ary_jml_peserta_lulus = [10, 20, 30];
    const ary_jml_peserta_ongoing = [20, 40, 60];
    const ary_jml_peserta_tidak_lulus = [70, 140, 210];
    kelas.id = id;
    kelas.jumlah_peserta = ary_jml_peserta[id - 1];
    kelas.jumlah_peserta_lulus = ary_jml_peserta_lulus[id - 1];
    kelas.jumlah_peserta_ongoing = ary_jml_peserta_ongoing[id - 1];
    kelas.jumlah_peserta_tidak_lulus = ary_jml_peserta_tidak_lulus[id -
   1];
    switch (id) {
    case 1:
    kelas.nama = "Pemrograman Dasar";
    break;
    case 2:
    kelas.nama = "Pemrograman Berorientasi Objek";
    break;
    case 3:
    kelas.nama = "Pemrograman Game";
    break;
    default:
    kelas.nama = "Tidak Diketahui";
    }
    return kelas;
   }

   //Langkah #5 - Saatnya Uji Coba
   //Setelah selesai membuat fungsi, selanjutnya kita akan melakukan pengujian dengan memanggil fungsi sebagai berikut:
   
   let kelas = get_data_kelas(1);
   console.log("ID = " + kelas.id);
   console.log("Nama = " + kelas.nama);
   console.log("Jumlah Peserts = " + kelas.jumlah_peserta);
   console.log("Jumlah Peserts Lulus = " + kelas.jumlah_peserta_lulus);
   console.log("Jumlah Peserts OnGoing = " +
   kelas.jumlah_peserta_ongoing);
   console.log("Jumlah Peserts Tidak Lulus = " +
   kelas.jumlah_peserta_tidak_lulus);