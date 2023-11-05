
import React from "react";
import { auth } from "../App";

import { useAuthState } from "react-firebase-hooks/auth";


const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  
  const data = message.data; 
  const text = data.message; 
  console.log(text); 

  
  // const image = user.photoURL; 
  // const name = user.displayName; 
  // console.log(image); 
  // console.log(name); 
  
  // {`chat-bubble ${message.uid === user.uid ? "right" : ""}`}
  
  
  return (

    <div
      className="message">
      <img
        className="chat-bubble__left"
        // src={image}
        alt="Image is not showing up"/>
      <div className="chat-bubble__right">
      
        <p className="user-name">
        
        {/* Add in the user name here  */}
            {/* {name} */}
        </p>
        <p className="user-message">
        
        {text}
        
        </p>

      </div>
    </div>
  );
};
export default Message;
