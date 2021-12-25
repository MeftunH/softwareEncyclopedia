import {initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyD98gWfUrJcjVMlJNFHk9GUU8FJ4ys-kGA",

  authDomain: "soft-58144.firebaseapp.com",

  projectId: "soft-58144",

  storageBucket: "soft-58144.appspot.com",

  messagingSenderId: "544296432504",

  appId: "1:544296432504:web:2275c39dfd3391b1aace8d"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
var auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };