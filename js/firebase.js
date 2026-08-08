// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB2MyXa058NlawqB-W_ZjBzEkwivRXJVE",
  authDomain: "irine-healthcity-5cc74.firebaseapp.com",
  projectId: "irine-healthcity-5cc74",
  storageBucket: "irine-healthcity-5cc74.firebasestorage.app",
  messagingSenderId: "788411114875",
  appId: "1:788411114875:web:695cfe6b2ae5846214c9de",
  measurementId: "G-FNFEQ6B8FQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore Database
const db = getFirestore(app);

// Export database
export { db };