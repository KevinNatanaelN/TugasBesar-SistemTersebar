<?php
require '../koneksi.php';

$id = $_GET["id"];

if (hapus($id) > 0){
    echo"<script>alert('Data Berhasil Dihapus');document.location.href='pelanggan.php'</script>";
} else {
    echo"<script>alert('Data Gagal Dihapus');document.location.href='pelanggan.php'</script>";
}

?>