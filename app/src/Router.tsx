// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Route, Routes } from "react-router-dom";
import { routes } from "./config/routes";
import { Error } from "./Error";
import { SideMenu } from "./components/SideMenu";

export const Router = () => (
  <>
    <SideMenu />
    <div className="body">
      <Routes>
        {routes.map((route) => (
          <Route key={`nav_page_${route.path}`} {...route} />
        ))}
        <Route key="nav_page_other" path="*" element={<Error />} />
      </Routes>
    </div>
  </>
);
