import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import HomePage from "./Pages/Home/HomePage";
import LoginForm from "./LoginForm/LoginForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
