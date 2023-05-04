/**
Okay so now I have a working prototype of the 

full stack chat app as well as the customer feedback component. 

To be acceptable there is still a lot of styling and reworking as 
well as component building and shifting around that needs to be done 

but for the most part a lot of the hard work has been done up front. 


So Now basically I need to figure out how to plug in this 

chat app into the customer feedback component and then 
I need to figure out how to make things look more acceptable for both the 
chat app and customer review section. 

Okay that's great. 

So the plan for now really needs to be flushing out the basic remaining components 
and functionality of the payment system. 

With Stripe things have been made a lot easier but certain things still 
need to be added. One of these features include adding up all the items in the 
basket and then including that in the price to be paid. 

Once that is done that's the payment section pretty much done. 





*/



import React from "react";
import { auth } from "../App";

import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  
  const data = message.data; 
  const text = data.message; 
  console.log(text); 

  
  const image = user.photoURL; 
  const name = user.displayName; 
  // console.log(image); 
  console.log(name); 
  
  {`chat-bubble ${message.uid === user.uid ? "right" : ""}`}
  
  return (

    <div
      className="message">
      <img
        className="chat-bubble__left"
        src={image}
        alt="Image is not showing up"/>
      <div className="chat-bubble__right">
      
        <p className="user-name">
        
        {/* Add in the user name here  */}
            {name}
        </p>
        <p className="user-message">
        
        {text}
        
        </p>

      </div>
    </div>
  );
};
export default Message;
