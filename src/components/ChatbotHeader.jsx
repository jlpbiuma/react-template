import React, { useState, useEffect } from "react";
import API from "../api/api";
import DeleteIcon from "../icons/DeleteIcon";

const ChatbotHeader = ({ isFetching, setMessages }) => {
  const [isWorking, setIsWorking] = useState(false);

  useEffect(() => {
    // Mock API call to get response every 5 seconds
    const fetchData = async () => {
      try {
        // Simulate API response (true for green, false for red)
        const response = await API.isWorking();
        if (response) {
          setIsWorking(true);
        } else {
          setIsWorking(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch data initially
    fetchData();

    // Set up interval to fetch data every 5 seconds
    const intervalId = setInterval(fetchData, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleClearLocalStorage = () => {
    // Clear local storage
    localStorage.removeItem("chatMessages");
    // Delete the messages
    setMessages([]);
  };

  return (
    <div className="bg-blue-400 p-4 flex flex-row justify-between items-center">
      <div className="flex items-center">
        <img
          src="https://www.fulp.es/sites/default/files/fulp-ico-darkblue.png"
          alt="Fulp Logo"
          className="w-12 h-12 mr-4 bg-white rounded-lg"
        />
        <section>
          <h1 className="text-white text-2xl font-bold mr-4">
            Chatbot Orientador
          </h1>
          <p className={`text-${isWorking ? "green-700" : "red-700"}`}>
            {isWorking ? (isFetching ? "Escribiendo..." : "Online") : "Offline"}
          </p>
        </section>
      </div>
      <div>
        <button
          onClick={handleClearLocalStorage}
          className="text-white"
          title="Clear Local Storage"
        >
          <DeleteIcon width="25px" height="25px" fill="white" />
        </button>
      </div>
    </div>
  );
};

export default ChatbotHeader;
