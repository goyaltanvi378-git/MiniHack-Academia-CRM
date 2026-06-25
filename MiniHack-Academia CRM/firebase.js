import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCyCVAcleaKn15ZBk5WrMBpreFd5vhhdB8",
  authDomain: "academia-crm.firebaseapp.com",
  projectId: "academia-crm",
  storageBucket: "academia-crm.firebasestorage.app",
  messagingSenderId: "424264941580",
  appId: "1:424264941580:web:6aeb26033562847914ee29",
  measurementId: "G-P99556K8HE"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.signOut = signOut;
window.onAuthStateChanged = onAuthStateChanged;
window.auth = auth;
window.db = db;