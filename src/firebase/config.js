import {initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8C5oTeGF1TKUP3Y7HichipSPfKoqwWt0",
  authDomain: "softwareencyclopedia-e3a04.firebaseapp.com",
  projectId: "softwareencyclopedia-e3a04",
  storageBucket: "softwareencyclopedia-e3a04.appspot.com",
  messagingSenderId: "672057606439",
  appId: "1:672057606439:web:c4c9e91d4c4a4ef509a902"
};

var app = initializeApp(firebaseConfig);
var auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };