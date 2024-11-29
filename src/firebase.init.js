// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV6id7Boy4ltIcpTLxmfasTe7126qNvyw",
  authDomain: "simple-firebase-fa99b.firebaseapp.com",
  projectId: "simple-firebase-fa99b",
  storageBucket: "simple-firebase-fa99b.firebasestorage.app",
  messagingSenderId: "618736164403",
  appId: "1:618736164403:web:05c71e4a39e6d6a07f4d46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app