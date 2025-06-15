// Import the functions  need from the SDKs  need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7toeThQnuKMR64jASntEk0Iy5vaVNgOA",
  authDomain: "ev-recharge-bunk-e7664.firebaseapp.com",
  projectId: "ev-recharge-bunk-e7664",
  storageBucket: "ev-recharge-bunk-e7664.appspot.com",
  messagingSenderId: "60680591169",
  appId: "1:60680591169:web:a28eecfcd2b6930c3bf3c0",
  measurementId: "G-WE8GTN5PW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Exporting for use in other files
export { auth, db };
