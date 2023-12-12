import React, { useState } from "react";

const InputMessageUser = ({ setPregunta }) => {
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    // Send the input text using setPregunta
    setPregunta(input);
    // Clear the input field after sending the message
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="bg-gray-200 rounded-t-lg mx-4">
      <div className="relative m-2">
        <textarea
          className="w-full h-full p-4 border border-black rounded-lg max-w-32"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-blue-500 text-white p-4 rounded-lg absolute top-0 right-0 mr-2 mt-3"
          onClick={handleSendMessage}
        >
          <img
            src="https://static.thenounproject.com/png/373675-200.png"
            alt="Send Icon"
            className="h-6 w-6"
          />
        </button>
      </div>
    </div>
  );
};

export default InputMessageUser;
