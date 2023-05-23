import { useState } from "react";
import { Router } from "./router/router.jsx";
import "./styles/input.css";

// import Formulario from "./components/Formulario";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col">
        <Router />
      </div>
    </div>
  );
}

export default App;
