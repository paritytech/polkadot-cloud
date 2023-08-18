/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { useState } from "react";
import { SideMenu } from "./components/SideMenu";
import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./config/routes";
import { ErrorPage } from "./pages/ErrorPage";

export const Router = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={`nav_page_${route.path}`} {...route} />
      ))}
      <Route key="nav_page_other" path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export const App = () => {
  // store the current theme
  const [mode, setMode] = useState<string>("light");

  // store the current network
  const [theme, setTheme] = useState<string>("polkadot-relay");

  // store the visible Component
  const [component, setComponent] = useState<string>("buttons");

  return (
    <div className={`main theme-${theme} theme-${mode}`}>
      <HashRouter basename="/">
        <SideMenu
          mode={mode}
          setMode={setMode}
          theme={theme}
          setTheme={setTheme}
          component={component}
          setComponent={setComponent}
        />

        <div className="body">
          <Router />
        </div>
      </HashRouter>
    </div>
  );
};
