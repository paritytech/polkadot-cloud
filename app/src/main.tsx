import * as ReactDOM from "react-dom/client";
import { App } from "./App";

import "@packages/cloud-core/dist/accent/cloud.css";
import "@packages/cloud-core/dist/theme/cloud/fonts/index.css";
import "@packages/cloud-core/dist/theme/cloud/index.css";
import "@packages/cloud-core/dist/theme/default/index.css";

import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
