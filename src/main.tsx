import React from "react";
import ReactDOM from "react-dom/client";
import CharacterCard from "./components/CharacterCard/CharacterCard.js";
import getCharacterImage from "./components/getCharacterImage/getCharacterImage.js";
import App from "./components/App/App.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
