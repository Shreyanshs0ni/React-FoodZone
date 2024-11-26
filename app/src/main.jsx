import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`*{
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  background-color: #ffffe4;
  color: #222222;
  min-height: 100vh;
}
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
