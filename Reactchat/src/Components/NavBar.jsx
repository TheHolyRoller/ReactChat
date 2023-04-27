import React, { useState } from "react";
import GoogleSignin from "../assets/SignIn.jpg";

// import auth from '../App'; 
// import app from '../App'; 

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";



import { auth } from '../App'; 
import { db } from '../App'; 
import { app } from '../App';


const firebaseConfig = {
  apiKey: "AIzaSyCaNimQyX4LOyjl_Ju0GvBan317S0539SM",
  authDomain: "chatapp-27eac.firebaseapp.com",
  projectId: "chatapp-27eac",
  storageBucket: "chatapp-27eac.appspot.com",
  messagingSenderId: "779488758204",
  appId: "1:779488758204:web:894c24411798c2051d83b9",
  measurementId: "G-T1BDHKVBHV"
};



const NavBar = () => {
  const [user] = useAuthState(auth);  
  
  
  
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  
  
  
  
  const signOut = () => {
    auth.signOut();
  };
  
  
  
  
  
  return (
    <nav className="nav-bar">
      <h1>React Chat</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button>
      )}
    </nav>
  );
};
export default NavBar;