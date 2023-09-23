import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./App";

// NOTE: order here is important. dist/styles/index.scss relies on fonts.

import "@packages/cloud-core/dist/template/cloud/fonts/index.css";
import "@packages/cloud-core/dist/template/cloud/index.css";
import "@packages/cloud-core/dist/theme/cloud/index.css";

import "./styles/index.scss";

// NOTE: ensure this is last.
//
// IMPORTANT: This CSS is being sourced from `cloud-core`'s `dist` folder. The package must be built
// for the CSS to be available.
import "../../packages/cloud-core/dist/css/styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
