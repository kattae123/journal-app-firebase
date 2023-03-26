// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgwt53-zGi1jUP8AqJ58XxNVdpsttCGFU",
  authDomain: "react-cursos-1c394.firebaseapp.com",
  projectId: "react-cursos-1c394",
  storageBucket: "react-cursos-1c394.appspot.com",
  messagingSenderId: "363091895839",
  appId: "1:363091895839:web:1a9d324b62b39100a9172a",
  measurementId: "G-HQKLKN9055"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const analytics = getAnalytics( FirebaseApp );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp )