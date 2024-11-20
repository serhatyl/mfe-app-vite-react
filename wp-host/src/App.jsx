import React from "react";
import ReactDOM from "react-dom/client";

import ButtonModule from "remote/Button";
const Button = ButtonModule.default;

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: wp-host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Button />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
