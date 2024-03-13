// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoenVgH_QAnCzh9iVUwv2qAaAmEia8FDQ",
  authDomain: "codelab-9ee16.firebaseapp.com",
  projectId: "codelab-9ee16",
  storageBucket: "codelab-9ee16.appspot.com",
  messagingSenderId: "509482161524",
  appId: "1:509482161524:web:c2a4295e9604532fa88821",
  measurementId: "G-M4TR95HV4N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

