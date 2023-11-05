import { useState } from 'react'

import { useAuthState } from "react-firebase-hooks/auth";
import './App.css'; 

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Import the components here 
import Welcome from './Components/Welcome'; 
import NavBar from './Components/Navbar';
import ChatBox from './Components/ChatBox'; 


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkDQg2_25Gcn-24sIudE_r6yjqQTOEu1c",
  authDomain: "reachchat-93c86.firebaseapp.com",
  projectId: "reachchat-93c86",
  storageBucket: "reachchat-93c86.appspot.com",
  messagingSenderId: "803212449474",
  appId: "1:803212449474:web:6f912d2feae448a5280d5b",
  measurementId: "G-91CXKFMK3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export  {auth}; 
export { app }; 

// export const auth = getAuth(app);
export const db = getFirestore(app);


function App() {
  
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <NavBar />
      {!user ? <Welcome/> : <ChatBox/>}
    </div>
  )
}
export default App
