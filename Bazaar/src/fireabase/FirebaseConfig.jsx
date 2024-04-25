// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCwConkA0bqm4zGYPyNrA7PqxNPLAuiuVs",
  authDomain: "apnabazaar-6f690.firebaseapp.com",
  projectId: "apnabazaar-6f690",
  storageBucket: "apnabazaar-6f690.appspot.com",
  messagingSenderId: "862498546786",
  appId: "1:862498546786:web:35fbf17d66dd7504aadd3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}