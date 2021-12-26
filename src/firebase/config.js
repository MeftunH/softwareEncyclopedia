import {initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyDtAe3eXsb22ZCMzMUUT__mK41FtxviZ9s",
  authDomain: "final-51c0f.firebaseapp.com",
  projectId: "final-51c0f",
  storageBucket: "final-51c0f.appspot.com",
  messagingSenderId: "678341501805",
  appId: "1:678341501805:web:25159a97918f91a1627064"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
var auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };