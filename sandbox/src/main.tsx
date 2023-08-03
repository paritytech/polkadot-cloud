import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/index.scss";

import "../../packages/themes/chain/polkadot-relay/index.css";
import "../../packages/themes/chain/kusama-relay/index.css";
import "../../packages/themes/chain/westend-relay/index.css";

import "../../packages/core-ui/lib/styles/index.scss";

import "../../packages/themes/theme/default/fonts/index.css";
import "../../packages/react-odometer/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
