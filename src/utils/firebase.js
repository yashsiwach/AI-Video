// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVChmuU2akrAx0-48QHaHBynB9BdSjBtM",
  authDomain: "netflixgpt-9c4d8.firebaseapp.com",
  projectId: "netflixgpt-9c4d8",
  storageBucket: "netflixgpt-9c4d8.appspot.com",
  messagingSenderId: "13454223167",
  appId: "1:13454223167:web:03611464738501aa9a958a",
  measurementId: "G-3M5D6YG5NY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();