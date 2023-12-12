import axios from "axios";

const chatbotURL = axios.create({
  baseURL: "http://192.168.70.205:5000/",
  timeout: 5000,
});

async function isWorking() {
  const { data } = await chatbotURL.get("isWorking");
  return data;
}

async function askChatbot(question) {
  const { data } = await chatbotURL.post("chatbot/askOrientador", {
    question: question,
  });
  return data;
}

export default { isWorking, askChatbot };
