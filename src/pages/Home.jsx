import React from "react";
import { TextCard } from "../components/TextCard.jsx";
import Notifications from "../utils/Notifications.js";

export const Home = () => {
  return (
    <div>
      Home
      <div>
        <button onClick={Notifications.success}>Success</button>
        <TextCard />
      </div>
    </div>
  );
};
