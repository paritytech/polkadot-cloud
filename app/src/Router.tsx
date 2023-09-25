// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./config/routes";
import { Error } from "./Error";
import { Menu } from "./Menu";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useEffect } from "react";

export const Router = () => {
  const { pathname } = useLocation();

  const BaseUri = import.meta.env.VITE_BASE_URI || "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const routesWithBase = routes.map((route) => ({
    ...route,
    path: `${BaseUri}${route.path}`,
  }));

  return (
    <>
      <Header />
      <Menu />
      <div className="main-area">
        <Routes>
          {routesWithBase.map((route) => (
            <Route key={`nav_page_${route.path}`} {...route} />
          ))}
          <Route key="nav_page_other" path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
