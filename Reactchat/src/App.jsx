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


const firebaseConfig = {
  apiKey: "AIzaSyCaNimQyX4LOyjl_Ju0GvBan317S0539SM",
  authDomain: "chatapp-27eac.firebaseapp.com",
  projectId: "chatapp-27eac",
  storageBucket: "chatapp-27eac.appspot.com",
  messagingSenderId: "779488758204",
  appId: "1:779488758204:web:894c24411798c2051d83b9",
  measurementId: "G-T1BDHKVBHV"
};



// Add in the new firebase config here 
// const firebaseConfig = {
//   apiKey: "AIzaSyDg4vDVWaXnukidCZJ70DUmFHEioo9tmBA",
//   authDomain: "commentcomponent.firebaseapp.com",
//   projectId: "commentcomponent",
//   storageBucket: "commentcomponent.appspot.com",
//   messagingSenderId: "742150394806",
//   appId: "1:742150394806:web:de3fcdbdd0aa273ca3e717",
//   measurementId: "G-0DB89PN04S"
// };



const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export  {auth}; 
export { app }; 

// export const auth = getAuth(app);
export const db = getFirestore(app);



// Use this site key in the HTML code your site serves to users.
// 6LcZZa8lAAAAAD39jpAgseZgd-0y7OwHWu-w-W4x

// Use this secret key for communication between your site and reCAPTCHA.
// 6LcZZa8lAAAAAK-moNUww0-YzvwFmVhKdoTAL2FK

function App() {
  
  const [user] = useAuthState(auth);
  
  // <Welcome />
  return (
    <div className="App">
      <NavBar />
      {!user ? <Welcome/> : <ChatBox/>}
    </div>
  )
}

export default App
