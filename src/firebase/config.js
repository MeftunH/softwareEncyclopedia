import {initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyAjUAd1oq0uLxvMvhYFXKnAxngFA4SF0H8",
  authDomain: "mobileproject-ec098.firebaseapp.com",
  projectId: "mobileproject-ec098",
  storageBucket: "mobileproject-ec098.appspot.com",
  messagingSenderId: "759396065454",
  appId: "1:759396065454:web:1f7bbb9bfe257e7e1f0d3f"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
var auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };