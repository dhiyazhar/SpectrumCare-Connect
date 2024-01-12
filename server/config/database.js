// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, query } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKszcjzxui4bsDDZlFeKyJiDHvsV56_Go",
  authDomain: "spectrumcare-connect.firebaseapp.com",
  projectId: "spectrumcare-connect",
  storageBucket: "spectrumcare-connect.appspot.com",
  messagingSenderId: "836102676419",
  appId: "1:836102676419:web:106f460ec14c055ef7a776",
  measurementId: "G-77RLR2H690"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Users = collection(db, "Users")

export default Users;
