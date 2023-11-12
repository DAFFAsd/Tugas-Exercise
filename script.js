function submitMail() { //function tombol submit
    const to = "daffa.sayra.firdaus@gmail.com"
    const inputField1 = document.getElementById("inputField1").value;
    const inputField2 = document.getElementById("inputField2").value;

    // Cek panjang input subjek dan isi pesan
    if (
        (inputField1.length >= 5 && inputField1.length <= 20) &&
        (inputField2.length >= 20 && inputField2.length <= 540)
    ) {
        // Redirect ke gmail sekaligus menyimpan karakter dari input subject dan message agar terisi di email
        window.open(`mailto:${to}?subject=${inputField1}&body=${inputField2}`);
    } else if ((inputField1.length < 5 || inputField1.length > 20) && (inputField2.length < 20 || inputField2.length > 540)) { 
        alert("Panjang kedua input belum sesuai"); //alert kalau keduanya belum sesuai panjangnya
    } else if (inputField1.length < 5 || inputField1.length > 20) { 
        //alert kalau panjang subjek belum sesuai
        alert("Panjang Subject harus di antara 5 sampai 20 karakter");
    } else if (inputField2.length < 20 || inputField2.length > 540) { 
        //alert kalau panjang isi pesan belum sesuai
        alert("Panjang Isi pesan harus di antara 20 sampai 540 karakter");
    }
}
