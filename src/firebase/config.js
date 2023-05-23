// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0CtiVsNlXGu80BLX4DdZOa3XF8MBVq4c",
  authDomain: "mymoney-23330.firebaseapp.com",
  projectId: "mymoney-23330",
  storageBucket: "mymoney-23330.appspot.com",
  messagingSenderId: "319981608318",
  appId: "1:319981608318:web:90b9ebb7225b42dbf0e72f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.Timestamp
export {projectFirestore, projectAuth, timestamp}