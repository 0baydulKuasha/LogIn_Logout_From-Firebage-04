// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAviVZeuPKrXukWCtuYYTbo0nHjg_LaGM8",
  authDomain: "login-logout-from-24f65.firebaseapp.com",
  projectId: "login-logout-from-24f65",
  storageBucket: "login-logout-from-24f65.appspot.com",
  messagingSenderId: "905792705532",
  appId: "1:905792705532:web:56003a38a84abffcb41879"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;