// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
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
    if (doc.data().kehadiran) total_hadir++;
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
  $("#box_ucapan").append(row_ucapan);
  $("#total-hadir-ucapan").text(total_hadir);
};

getDataUcapan();
