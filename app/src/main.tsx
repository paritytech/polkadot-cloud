import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./App";

// NOTE: order here is important. dist/styles/index.scss relies on fonts.

import "@packages/cloud-core/dist/template/cloud/fonts/index.css";
import "@packages/cloud-core/dist/template/cloud/index.css";
import "@packages/cloud-core/dist/theme/cloud/index.css";

import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
