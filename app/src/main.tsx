import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./App";

// NOTE: order here is important. dist/styles/index.scss relies on fonts.

import "@packages/cloud-core/dist/template/default/fonts/index.css";
import "@packages/cloud-core/dist/template/default/index.css";

import "@packages/cloud-core/dist/theme/polkadot-relay/index.css";
import "@packages/cloud-core/dist/theme/kusama-relay/index.css";
import "@packages/cloud-core/dist/theme/westend-relay/index.css";
import "@packages/cloud-core/dist/theme/xcm/index.css";

import "./styles/index.scss";

import "@packages/react-odometer/lib/styles/index.scss";

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
