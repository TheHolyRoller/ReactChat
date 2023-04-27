import React from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaNimQyX4LOyjl_Ju0GvBan317S0539SM",
  authDomain: "chatapp-27eac.firebaseapp.com",
  projectId: "chatapp-27eac",
  storageBucket: "chatapp-27eac.appspot.com",
  messagingSenderId: "779488758204",
  appId: "1:779488758204:web:894c24411798c2051d83b9",
  measurementId: "G-T1BDHKVBHV"
};


// Initialize Firebase

const auth = getAuth(app);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function firebase() {
  return (
    <div>
      Firebase 
      
    </div>
  )
}

export default firebase
