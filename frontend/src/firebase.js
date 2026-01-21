import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

// 👇 PUNE DATELE REALE AICI (doar pentru test)
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmBD49PirBmTDsHzurMVAG3-ugl7ECmyY",
  authDomain: "shop-chat-f4465.firebaseapp.com",
  projectId: "shop-chat-f4465",
  storageBucket: "shop-chat-f4465.firebasestorage.app",
  messagingSenderId: "493442886656",
  appId: "1:493442886656:web:9acc078e16a0abe3c43ce5",
  measurementId: "G-RRQF68JN3T"
};

const app = initializeApp(firebaseConfig);

// Păstrăm setarea pentru conexiune stabilă
export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

console.log("Firebase conectat la proiectul:", firebaseConfig.projectId);