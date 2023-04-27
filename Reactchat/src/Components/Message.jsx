import React from "react";
import { auth } from "../App";


import { useAuthState } from "react-firebase-hooks/auth";
// This used to take { message } as a parameter 
const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  // const message = "my message"; 
  
  {`chat-bubble ${message.uid === user.uid ? "right" : ""}`}
  
  return (
    // The above chat bubble used to be the class name 
    <div
      className="message">
      <img
        className="chat-bubble__left"
        src={message.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  );
};
export default Message;
