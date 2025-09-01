import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdnrRtNU5YdpPYTGAkAjGN7EXfgLZL0FA",
  authDomain: "sendly-d9d65.firebaseapp.com",
  projectId: "sendly-d9d65",
  storageBucket: "sendly-d9d65.firebasestorage.app",
  messagingSenderId: "320376105556",
  appId: "1:320376105556:web:31ebe7d40be3fdfd185bc1",
  measurementId: "G-6H44PCZK9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
 export {app, auth, provider};