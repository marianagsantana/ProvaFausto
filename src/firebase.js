// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjLp2oid-hkIuTjp8tPiaYXi58hg3Vels",
  authDomain: "provafausto-44d08.firebaseapp.com",
  projectId: "provafausto-44d08",
  storageBucket: "provafausto-44d08.appspot.com",
  messagingSenderId: "201376295180",
  appId: "1:201376295180:web:6c52136e4c37b503f74129",
  measurementId: "G-PCX2M9TS9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);