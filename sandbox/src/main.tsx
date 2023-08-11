import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/index.scss";

import "../../packages/themes/lib/theme/polkadot-relay/index.css";
import "../../packages/themes/lib/theme/kusama-relay/index.css";
import "../../packages/themes/lib/theme/westend-relay/index.css";
import "../../packages/themes/lib/theme/xcm/index.css";

// NOTE: order here is important. lib/styles/index.scss relies on fonts.
import "../../packages/themes/lib/template/default/fonts/index.css";
import "../../packages/react-odometer/lib/styles/index.scss";

// NOTE: ensure this is last.
import "../../packages/core-ui/lib/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
