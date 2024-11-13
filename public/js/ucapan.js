// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getFirestore,
  getDoc, // Menambahkan impor getDoc untuk membaca dokumen tunggal
  setDoc, // Menambahkan impor setDoc untuk menulis data ke dokumen tunggal
  doc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBkn-AHaDaw0fiSfhoTJyufNDir5CJD3o",
  authDomain: "ayu-ihza.firebaseapp.com",
  projectId: "ayu-ihza",
  storageBucket: "ayu-ihza.firebasestorage.app",
  messagingSenderId: "833970633121",
  appId: "1:833970633121:web:51afafd055ba2ddbf8b3e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Function to get data from the "ucapan" collection
const getDataUcapan = async () => {
  try {
    const docRef = doc(db, "ucapan", "1"); // Mendapatkan referensi ke dokumen dengan ID '1'
    const docSnap = await getDoc(docRef); // Membaca dokumen

    if (docSnap.exists()) {
      const data = docSnap.data();
      $("#total-ucapan-ucapan").text(data.ucapan.length);

      let total_hadir = 0;
      let row_ucapan = "";

      // Loop melalui array ucapan
      (data.ucapan || []).forEach((ucapanItem) => {
        if (ucapanItem.kehadiran == 1) total_hadir++;
        const createdAt = ucapanItem.created_at;
        let formattedDate = createdAt;

        if (createdAt && createdAt.toDate) {
          const date = createdAt.toDate();
          formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(
            date.getMonth() + 1
          )
            .toString()
            .padStart(2, "0")}/${date.getFullYear()} ${date
            .getHours()
            .toString()
            .padStart(2, "0")}:${date
            .getMinutes()
            .toString()
            .padStart(2, "0")}`;
        }

        row_ucapan += `
        <div class="kado_confirm_cl" style="margin-bottom: 10px; border-radius: 5px;">
            <div class="" style="font-weight: 800;">
                <p class="ucapan-header" style="color: #2c2c2c !important; font-size: 14px !important;">${ucapanItem.nama} - ${formattedDate}</p>
                <i style="font-size: 10px; color: #2c2c2c !important">${ucapanItem.ucapan}</i>
            </div>
        </div>`;
      });

      $("#wrapper-ucapan").html(row_ucapan);
      $("#total-hadir-ucapan").text(total_hadir);
    } else {
      console.log("No document found!");
    }
  } catch (e) {
    console.error("Error reading document: ", e);
  }
};

getDataUcapan();

const storeUcapan = async (nama, ucapan, kehadiran) => {
  try {
    // Referensi ke dokumen dengan ID '1'
    const docRef = doc(db, "ucapan", "1");

    // Mengambil data dokumen saat ini
    const docSnap = await getDoc(docRef);
    let data = docSnap.exists()
      ? docSnap.data()
      : { ucapan: [], total_ucapan: 0, total_hadir: 0 };

    // Pastikan `ucapan` adalah array, inisialisasi jika belum ada
    data.ucapan = data.ucapan || [];

    // Mendapatkan waktu server terlebih dahulu
    const timestamp = serverTimestamp();

    // Membuat data ucapan baru dengan timestamp
    const newUcapan = {
      nama: nama,
      ucapan: ucapan,
      kehadiran: kehadiran,
      created_at: new Date(), // Menggunakan waktu lokal untuk sementara
    };

    // Update array ucapan dan total hadir
    data.ucapan.push(newUcapan);
    data.total_ucapan += 1;
    if (kehadiran == 1) data.total_hadir += 1;

    // Menyimpan pembaruan data ke Firestore tanpa menggunakan serverTimestamp dalam array
    await setDoc(docRef, {
      ...data,
      last_updated: timestamp, // Menyimpan waktu server di luar array
    });

    // Notifikasi pengguna
    if (kehadiran == 1) {
      Swal.fire({
        imageUrl:
          "https://cdn.jsdelivr.net/gh/ihzaa/undangan-biru@8c6b6d5b021e997d336ccf4d70e80df7d58a6c2b/public/images/valentines-day.gif",
        title: "Terima kasih ucapannya!",
        text: "Kami tunggu kehadiranmu ya " + nama,
      });
    } else {
      Swal.fire({
        imageUrl:
          "https://cdn.jsdelivr.net/gh/ihzaa/undangan-biru@8c6b6d5b021e997d336ccf4d70e80df7d58a6c2b/public/images/pray.gif",
        title: "Terima kasih ucapannya!",
        text: `Semoga kita dapat bertemu di lain kesempatan`,
      });
    }

    // Update tampilan di halaman tanpa reload
    $("#wrapper-ucapan").prepend(`
      <div class="kado_confirm_cl" style="margin-bottom: 10px; border-radius: 5px;">
          <div class="" style="font-weight: 800;">
              <p class="ucapan-header" style="color: #2c2c2c !important; font-size: 14px !important;">${nama} - ${formatDate()}</p>
              <i style="font-size: 10px; color: #2c2c2c !important">${ucapan}</i>
          </div>
      </div>`);

    return true;
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Terjadi kesalahan saat menyimpan ucapan!" + e,
    });
    return false;
  }
};

const formatDate = () => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-GB"); // "en-GB" untuk format dd/mm/yyyy
  const formattedTime = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${formattedDate} ${formattedTime}`;
};

$("#form_ucapan").submit(async function (e) {
  e.preventDefault();
  const nama = DOMPurify.sanitize($("[name='form_ucapan_nama']").val());
  const ucapan = DOMPurify.sanitize($("[name='form_ucapan_ucapan']").val());
  const kehadiran = parseInt($("[name='form_ucapan_kehadiran']").val());

  if (nama === "" || ucapan.length < 1 || kehadiran === "") {
    Swal.fire({
      icon: "error",
      title: "Duhh...",
      text: "Semua field harus diisi!",
    });
    return;
  }
  if (ucapan.length > 500) {
    Swal.fire({
      icon: "error",
      title: "Duhh...",
      text: "Maap, ucapan kamu maksimal 500 karakter!",
    });
    return;
  }
  $("#kucing_imut").css("opacity", "1").show();
  const resp = await storeUcapan(nama, ucapan, kehadiran);
  $("#kucing_imut").hide();
  if (resp) {
    $("[name='form_ucapan_nama']").val("");
    $("[name='form_ucapan_kehadiran']").val("");
    $("#total-ucapan-ucapan").text(
      parseInt($("#total-ucapan-ucapan").text()) + 1
    );
    $("#total-hadir-ucapan").text(
      parseInt($("#total-hadir-ucapan").text()) + (kehadiran == 1 ? 1 : 0)
    );
    openEditModal("ucapan-slide");
  }
});

$(document).ready(function () {
  $("#form_ucapan_ucapan").emojioneArea({
    pickerPosition: "bottom",
    filtersPosition: "bottom",
    tonesStyle: "bullet",
  });
});

// Pilih elemen pertama dengan kelas 'li-mn-rsvp' yang ingin diawasi
const targetNode = document.querySelector(".li-mn-rsvp");

// Fungsi yang dijalankan ketika kelas 'is-active' ditambahkan
function onClassAdded() {
  $("#menu_auto_scroll").css("background-color", "#4970ea");
  autoPilot = !1; // Mematikan autoPilot
  $("#notif_scroll1").hide();
  $("#tutorial-swipe").show();
}

// Buat instance MutationObserver
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      // Cek apakah kelas 'is-active' ada di classList
      if (mutation.target.classList.contains("is-active")) {
        onClassAdded();
      }
    }
  }
});

// Konfigurasi observer untuk memantau perubahan pada atribut "class"
observer.observe(targetNode, { attributes: true });
