// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp, getApps } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEZtoz9ABTHjJHH_CWPM0BmlDnHhi8mqc",
  authDomain: "irrigate-54ff9.firebaseapp.com",
  projectId: "irrigate-54ff9",
  storageBucket: "irrigate-54ff9.appspot.com",
  messagingSenderId: "785954796136",
  appId: "1:785954796136:web:41e74180663cfc202b41dd",
  measurementId: "G-MS3MEW589V"
};

// Initialize Firebase

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export default firebase_app;