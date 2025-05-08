// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers/getEnvironments";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyDghcCxW9faBT99dtdZiNpYKKnzgrG4tNc",
//   authDomain: "journal-app-b0611.firebaseapp.com",
//   projectId: "journal-app-b0611",
//   storageBucket: "journal-app-b0611.firebasestorage.app",
//   messagingSenderId: "487209924895",
//   appId: "1:487209924895:web:bdaff51327cea9d59a582a",
// };

// Your web app's Firebase configuration
// Testing
const firebaseConfig = {
  apiKey: "AIzaSyBuf5NemWX3OUFJ3Mgswz_x0TresaN3xtU",
  authDomain: "journalappbd-testing.firebaseapp.com",
  projectId: "journalappbd-testing",
  storageBucket: "journalappbd-testing.firebasestorage.app",
  messagingSenderId: "370745253776",
  appId: "1:370745253776:web:7169a58b339051613c1d15",
};
const env = getEnvironments;
console.log(env);

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(Firebaseapp);
export const FirebaseDB = getFirestore(Firebaseapp);
