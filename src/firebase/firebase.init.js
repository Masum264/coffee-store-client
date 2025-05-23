// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHz09iJD524zHSyXOgZxEgxwTrEcSI_fo",
  authDomain: "coffee-store-app-b30ca.firebaseapp.com",
  projectId: "coffee-store-app-b30ca",
  storageBucket: "coffee-store-app-b30ca.firebasestorage.app",
  messagingSenderId: "560556360892",
  appId: "1:560556360892:web:455f391c9d9a8960223cb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);