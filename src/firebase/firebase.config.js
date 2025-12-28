// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZbLp_xLUBqx2mpJGDEyEmHHklyzHaaIA",
  authDomain: "dragon-news-ms09.firebaseapp.com",
  projectId: "dragon-news-ms09",
  storageBucket: "dragon-news-ms09.firebasestorage.app",
  messagingSenderId: "52288994106",
  appId: "1:52288994106:web:39cbc17bab157c2f1fee03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;