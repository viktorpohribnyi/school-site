// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrd6JiLMltVcOcSLIv3cN8vTFPJMZc9DM",
  authDomain: "school-site-9ab59.firebaseapp.com",
  projectId: "school-site-9ab59",
  storageBucket: "school-site-9ab59.firebasestorage.app",
  messagingSenderId: "37422160456",
  appId: "1:37422160456:web:618e68e35d3504d3d7567d",
  measurementId: "G-T9QGT5YL8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);   // <- Обов’язково створити цю змінну

export { db };