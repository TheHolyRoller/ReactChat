import React, { useEffect, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  getDoc,
  addDoc,
  limit,
  doc,
} from "firebase/firestore";
import { db } from "../App";


import Message from './Message'; 
import SendMessage from './SendMessage'; 


const ChatBox = () => {




  const [messages, setMessages] = useState([]);

  useEffect(() => {
  // , orderBy("timestamp"), limit(50)
    const q = query(collection(db, "messages"));
    const unsubscribe =  onSnapshot(q, (querySnapShot) => {
      setMessages(
      
        querySnapShot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      
    });

    return () => unsubscribe();
  }, []);


  console.log(messages);


  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <SendMessage />
    </main>
  );
};
export default ChatBox