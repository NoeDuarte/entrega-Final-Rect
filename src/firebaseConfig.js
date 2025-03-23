// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByb5HT7jGKOy0N8ySkMYxaYOnzthteXOk",
  authDomain: "entrega-final-3ac11.firebaseapp.com",
  projectId: "entrega-final-3ac11",
  storageBucket: "entrega-final-3ac11.firebasestorage.app",
  messagingSenderId: "16560292986",
  appId: "1:16560292986:web:50bfceab708964224d67c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);