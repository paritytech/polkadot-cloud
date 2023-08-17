/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { useState } from "react";
import { Buttons } from "./pages/Buttons";
import { SideMenu } from "./components/SideMenu";
import { Modal } from "./pages/Modal";
import { GridPage } from "./pages/GridPage";
import { CardPage } from "./pages/CardPage";
import { LoadersPage } from "./pages/LoadersPage";
import { Extensions } from "./pages/Extensions";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Buttons />,
    errorElement: <ErrorPage />,
  },
  {
    path: "buttons",
    element: <Buttons />,
  },
  {
    path: "modal",
    element: <Modal />,
  },
  {
    path: "extensions",
    element: <Extensions />,
  },
  {
    path: "grid",
    element: <GridPage />,
  },
  {
    path: "card",
    element: <CardPage />,
  },
  {
    path: "loader",
    element: <LoadersPage />,
  },
]);

export const App = () => {
  // store the current theme
  const [mode, setMode] = useState<string>("light");

  // store the current network
  const [theme, setTheme] = useState<string>("polkadot-relay");

  // store the visible Component
  const [component, setComponent] = useState<string>("buttons");

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

      <div className="body">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};
