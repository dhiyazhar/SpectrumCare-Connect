// Import the functions you need from the SDKs you need

const firebase = require("firebase/app");
const firebaseConfig = require('./firebaseConfig.json')
const firebaseAanalytics = require("firebase/analytics");
const realtimeDatabase = require("firebase/database")

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const analytics = firebaseAanalytics.getAnalytics(app);
const db = realtimeDatabase.getDatabase(app)
console.log(db)