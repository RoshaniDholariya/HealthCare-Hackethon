// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjv5snotOSEm-N4dsx5oHyDrnCXmrdv8Q",
  authDomain: "healthcare-hackethon.firebaseapp.com",
  projectId: "healthcare-hackethon",
  storageBucket: "healthcare-hackethon.firebasestorage.app",
  messagingSenderId: "522893493254",
  appId: "1:522893493254:web:f3707a4774a63543342f87",
  measurementId: "G-D35BVT1X79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);