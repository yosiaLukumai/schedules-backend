// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoQy-ej4cuwoF1qttsIXEsxDp5oFYC0BY",
  authDomain: "smart-notice-board-991a1.firebaseapp.com",
  projectId: "smart-notice-board-991a1",
  storageBucket: "smart-notice-board-991a1.appspot.com",
  messagingSenderId: "420691161760",
  appId: "1:420691161760:web:a9ce210bb6dd246da38fc5",
  measurementId: "G-R2JTGB42L4",
  databaseUrl: "https://smart-notice-board-991a1-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);