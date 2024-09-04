// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged ,
  signOut ,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword ,
  sendEmailVerification 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";


// firestore

import { doc, setDoc,getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";



const firebaseConfig = {

// enter your keys
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged ,
  signOut ,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword ,
  sendEmailVerification ,
  doc, 
  setDoc,
  db
};
