// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Route, Routes, useLocation } from "react-router-dom";
import { Side } from "@packages/cloud-react/lib/base/structure/Side";
import { Body } from "@packages/cloud-react/lib/base/structure/Body";
import { Main } from "@packages/cloud-react/lib/base/structure/Main";
import { routes } from "./config/routes";
import { Error } from "./Error";
import { Menu } from "./Menu";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useEffect } from "react";
import { useUi } from "./contexts/UI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Router = () => {
  const { sideMenuOpen } = useUi();
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let scrollHash = false;
    try {
      if (hash) {
        const element = document?.querySelector(hash);
        if (element) {
          scrollHash = true;
          element?.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    } catch {
      scrollHash = false;
    }
    if (!scrollHash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <Body>
        {/* App header */}
        <Header />

        {/*Fixed menu toggle on smaller screens */}
        <ToggleMenu />

        {/* Left side menu */}
        <Side
          open={sideMenuOpen}
          minimised={false}
          style={{
            minHeight: "calc(100vh - 5.5rem)",
          }}
          width="20rem"
        >
          <Menu />
        </Side>

        <Main
          style={{
            minHeight: "calc(100vh - 5.5rem)",
          }}
        >
          <div className="main-area">
            <div>
              <Routes>
                {routes.map((route) => (
                  <Route key={`nav_page_${route.path}`} {...route} />
                ))}
                <Route key="nav_page_other" path="*" element={<Error />} />
              </Routes>
            </div>
          </div>
        </Main>
      </Body>

      {/* App footer */}
      <Footer />
    </>
  );
};

const ToggleMenu = () => {
  const { setSideMenu, sideMenuOpen } = useUi();

  if (sideMenuOpen) {
    return <></>;
  }

  return (
    <button
      className="toggle-menu"
      type="button"
      onClick={() => setSideMenu(!sideMenuOpen)}
    >
      <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>{" "}
    </button>
  );
};
