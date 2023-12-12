import { useState, useEffect } from "react";
import ChatbotHeader from "./components/ChatbotHeader";
import Chat from "./components/Chat";
import InputMessageUser from "./components/InputMessageUser";
import API from "./api/api";
import Notifications from "./utils/Notifications";

function App() {
  const [pregunta, setPregunta] = useState("");
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("chatMessages")) || []
  );
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (pregunta !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages.length,
          message: pregunta,
          sender: "user",
        },
      ]);

      setIsFetching(true);

      async function fetchData() {
        try {
          const { response } = await API.askChatbot(pregunta);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              id: prevMessages.length,
              message: response,
              sender: "bot",
            },
          ]);
          setIsFetching(false);
        } catch (error) {
          // Display an error notification if the API request fails
          Notifications.error("Error en la petición al servidor");
          setIsFetching(false);
        }
      }

      fetchData();
    }
  }, [pregunta]);

  // Save messages to local storage whenever the messages state changes
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  return (
    <div className="flex flex-col h-screen relative">
      <ChatbotHeader isFetching={isFetching} setMessages={setMessages} />
      <Chat messages={messages} />
      <InputMessageUser setPregunta={setPregunta} />
    </div>
  );
}

export default App;
