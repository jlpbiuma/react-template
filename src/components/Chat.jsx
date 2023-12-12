// Chat.jsx
import React, { useEffect, useRef } from "react";
import "./Chat.css";
import MessageUser from "./MessageUser";
import MessageBot from "./MessageBot";

const Chat = ({ messages }) => {
  const chatRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat when messages change
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="flex-grow custom-scrollbar" ref={chatRef}>
      {messages.length === 0 ? (
        <div className="p-4 rounded-lg text-black">
          Empieza a hablar con tu Chatbot de Orientación laboral!
        </div>
      ) : (
        messages.map((message, index) =>
          message.sender === "user" ? (
            <MessageUser key={index} message={message} />
          ) : (
            <MessageBot key={index} message={message} />
          )
        )
      )}
    </div>
  );
};

export default Chat;
