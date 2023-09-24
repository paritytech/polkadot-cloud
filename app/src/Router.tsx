// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Route, Routes } from "react-router-dom";
import { routes } from "./config/routes";
import { Error } from "./Error";
import { Menu } from "./Menu";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Router = () => (
  <>
    <Header />
    <Menu />
    <div className="main-area">
      <Routes>
        {routes.map((route) => (
          <Route key={`nav_page_${route.path}`} {...route} />
        ))}
        <Route key="nav_page_other" path="*" element={<Error />} />
      </Routes>
    </div>
    <Footer />
  </>
);
