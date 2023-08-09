import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/index.scss";

import "../../packages/themes/lib/theme/polkadot-relay/index.css";
import "../../packages/themes/lib/theme/kusama-relay/index.css";
import "../../packages/themes/lib/theme/westend-relay/index.css";
import "../../packages/themes/lib/theme/xcm/index.css";

import "../../packages/core-ui/lib/styles/index.scss";

import "../../packages/themes/lib/template/default/fonts/index.css";
import "../../packages/react-odometer/lib/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
