import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { CheckedContextProvider } from "./context/CheckedContext";

ReactDOM.render(
  <React.StrictMode>
    <CheckedContextProvider>
      <App />
    </CheckedContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
