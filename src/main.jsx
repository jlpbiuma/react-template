import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/input.css";
import "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <Toaster />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
