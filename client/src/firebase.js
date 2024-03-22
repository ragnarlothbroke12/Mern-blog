// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e9ef5.firebaseapp.com",
  projectId: "mern-blog-e9ef5",
  storageBucket: "mern-blog-e9ef5.appspot.com",
  messagingSenderId: "1072197234001",
  appId: "1:1072197234001:web:0a58ca92339e90f2cfb770"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);