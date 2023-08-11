/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { useState } from "react";
import { Buttons } from "./pages/Buttons";
import { SideMenu } from "./components/SideMenu";
import { Modal } from "./pages/Modal";
import { Statistics } from "./pages/Statistics";
import { GridPage } from "./pages/GridPage";
import { CardPage } from "./pages/CardPage";
import { LoadersPage } from "./pages/LoadersPage";
import { Extensions } from "./pages/Extensions";

export const App = () => {
  // store the current theme
  const [mode, setMode] = useState<string>("light");

  // store the current network
  const [theme, setTheme] = useState<string>("polkadot-relay");

  // store the visible Component
  const [component, setComponent] = useState<string>("buttons");

  const getComponent = (key: string) => {
    switch (key) {
      case "statistics":
        return <Statistics />;
      case "modal":
        return <Modal />;
      case "extensions":
        return <Extensions />;
      case "grid":
        return <GridPage />;
      case "card":
        return <CardPage />;
      case "loader":
        return <LoadersPage />;
      default:
        return <Buttons />;
    }
  };

  return (
    <div className={`main theme-${theme} theme-${mode}`}>
      <SideMenu
        mode={mode}
        setMode={setMode}
        theme={theme}
        setTheme={setTheme}
        component={component}
        setComponent={setComponent}
      />
      <div className="main">
        <div className="body">{getComponent(component)}</div>
      </div>
    </div>
  );
};
