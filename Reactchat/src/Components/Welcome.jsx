import React from 'react'
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

import auth from '../App'; 


const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};


const logging = () => {
  
  console.log("is this working????????");
}

function Welcome() {
  logging(); 
  
  
  return (
    <div>
      Welcome 
    </div>
  );
  
}

export default Welcome
