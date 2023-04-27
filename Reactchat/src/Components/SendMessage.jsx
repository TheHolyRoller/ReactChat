import { useState } from "react";


 

import { addDoc, collection, serverTimestamp } from "firebase/firestore";


import {auth} from '../App'; 
import {db} from '../App';
const SendMessage = () => {
  
  
  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    // const { uid, displayName, photoURL } = auth.currentUser;
    const { uid,  displayName, photoURL } = auth.currentUser;
    
    
    console.log(auth.currentUser.displayName); 
    
    // Add in a try catch block here 
    await addDoc(collection(db, "messages"), {
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              title: inputTitle.current.value,
              message: inputMessage.current.value,
              name: user.displayName,
              photoURL: user.photoURL,  
    });
    setMessage("");
    
    console.log(message); 
    console.log(message.text); 
    console.log(db); 
    
    
  };

  
  console.log(auth.currentUser);
  // console.log(auth); 
  console.log("This is harder than expected"); 
  
  const [message, setMessage] = useState("");

  
  return (
    <form onSubmit={(e) => sendMessage(e)} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;