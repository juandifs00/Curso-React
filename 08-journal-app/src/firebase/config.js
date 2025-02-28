// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDghcCxW9faBT99dtdZiNpYKKnzgrG4tNc",
  authDomain: "journal-app-b0611.firebaseapp.com",
  projectId: "journal-app-b0611",
  storageBucket: "journal-app-b0611.firebasestorage.app",
  messagingSenderId: "487209924895",
  appId: "1:487209924895:web:bdaff51327cea9d59a582a",
};

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(Firebaseapp);
export const FirebaseDB = getFirestore(Firebaseapp);
