import {initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPYY-0bXw9QHnHdmqCjZsert2IsgBEqbg",
  authDomain: "software-9da95.firebaseapp.com",
  projectId: "software-9da95",
  storageBucket: "software-9da95.appspot.com",
  messagingSenderId: "279852744195",
  appId: "1:279852744195:web:3063748305cf54250d1836"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };