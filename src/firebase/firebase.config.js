// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_D6QN81Srw_Kvl4URkE_aEKObjTWFE9g",
  authDomain: "joblinker-tp.firebaseapp.com",
  projectId: "joblinker-tp",
  storageBucket: "joblinker-tp.appspot.com",
  messagingSenderId: "551367985763",
  appId: "1:551367985763:web:f9a2b30374f2a11ac04656"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;