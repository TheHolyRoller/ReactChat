import React, { useState } from "react";
import GoogleSignin from "../assets/SignIn.jpg";

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";



import { auth } from '../App'; 
import { db } from '../App'; 
import { app } from '../App';


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
        <button className="sign-in" onClick={googleSignIn} >
          Sign In  

        </button>
      )}
    </nav>
  );
};
export default NavBar;