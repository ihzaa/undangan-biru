// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
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
  const querySnapshot = await getDocs(collection(db, "ucapan"));
  $("#total-ucapan-ucapan").text(querySnapshot.size);
  let total_hadir = 0;
  let row_ucapan = "";
  querySnapshot.forEach((doc) => {
    if (doc.data().kehadiran == 1) total_hadir++;
    const createdAt = doc.data().created_at;
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
        .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
    }
    row_ucapan += `
    <div class="kado_confirm_cl" style="margin-bottom: 10px; border-radius: 5px; ">
        <div class="" style="font-weight: 800;">
            <p class="ucapan-header" style="color: #2c2c2c !important; font-size: 14px !important;">${
              doc.data().nama
            } - ${formattedDate}</p>
            <i style="font-size: 10px; color: #2c2c2c !important">${
              doc.data().ucapan
            }</i>
        </div>
    </div>`;
  });
  $("#wrapper-ucapan").html(row_ucapan);
  $("#total-hadir-ucapan").text(total_hadir);
};

getDataUcapan();

const storeUcapan = async (nama, ucapan, kehadiran) => {
  try {
    // Menyimpan data baru ke koleksi "ucapan"
    const docRef = await addDoc(collection(db, "ucapan"), {
      nama: nama,
      ucapan: ucapan,
      kehadiran: kehadiran,
      created_at: serverTimestamp(), // Timestamp Firestore sebagai waktu penyimpanan
    });
    if (kehadiran == 1) {
      Swal.fire({
        imageUrl: "./images/in-love.gif",
        title: "Terima kasih ucapannya!",
        text: "Kami tunggu kehadiranmu ya " + nama,
      });
    } else {
      Swal.fire({
        imageUrl: "./images/sad.gif",
        title: "Terima kasih ucapannya!",
        text: `TSemoga kita dapat bertemu di lain kesempatan`,
      });
    }
    $("#wrapper-ucapan")
      .prepend(`<div class="kado_confirm_cl" style="margin-bottom: 10px; border-radius: 5px; ">
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
      text: "Terjadi kesalahan saat menyimpan ucapan!",
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

$("#form_ucapan").submit(function (e) {
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
  let resp = storeUcapan(nama, ucapan, kehadiran);
  if (resp) {
    $("[name='form_ucapan_nama']").val("");
    $("[name='form_ucapan_ucapan']").val("");
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
