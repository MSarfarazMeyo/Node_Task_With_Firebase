const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDRiNVTetIQZKmmFEvCmorlxtBUnHGUAyA",
  authDomain: "nodetask-58785.firebaseapp.com",
  projectId: "nodetask-58785",
  storageBucket: "nodetask-58785.appspot.com",
  messagingSenderId: "537712452167",
  appId: "1:537712452167:web:1302819099434809138762",
  measurementId: "G-DN3YCXH1C0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

module.exports = {
  db,
};
