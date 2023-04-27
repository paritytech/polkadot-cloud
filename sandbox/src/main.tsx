import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/index.scss";
import "../../packages/odometers/styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
