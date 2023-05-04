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

    const user = auth.currentUser; 
    
    try{
      await addDoc(collection(db, "messages"), {
        created_at: serverTimestamp(),
        name: user.displayName,
        id: user.uid, 
        message: message, 
      });
      
      console.log(message); 
      
    }
    catch(e) {
      
      console.log()
      console.error(e); 
    }
   
    setMessage("");
    
  };

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