// MessageBot.jsx
import React from "react";

const botIconUrl = "https://www.fulp.es/sites/default/files/fulp-ico.png";

const MessageBot = ({ message }) => {
  return (
    <div className="flex justify-start">
      <div className="flex my-2">
        {/* Bot icon */}
        <img
          src={botIconUrl}
          alt="Bot Icon"
          className="mx-4 h-8 w-8 rounded-full border-2 border-black"
        />
        <section className="flex flex-col">
          <h2 className="font-bold">Chatbot FULP</h2>
          <div className="bg-gray-200 p-4 rounded-lg text-black max-w-md mr-4">
            {message.message}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MessageBot;
