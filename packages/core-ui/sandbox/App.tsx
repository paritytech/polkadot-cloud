// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useState } from "react";
import { Buttons } from "./components/Buttons";

const getComponent = (component: string) => {
  switch (component) {
    default:
      return <Buttons />;
  }
};

/*
 * Sandbox page for component tests and class inclusion.
 */
const Home = () => {
  // store the current theme
  const [theme, setTheme] = useState<string>("light");

  // store the current network
  const [network, setNetwork] = useState<string>("polkadot");

  // store the visible Component
  const [component, setComponent] = useState<string>("buttons");

  return (
    <>
      <main className={`theme-${network} theme-${theme}`}>
        <div className="nav">
          <section>
            <h5>Network</h5>
            <button
              className={network === "polkadot" ? "selected" : undefined}
              onClick={() => setNetwork("polkadot")}
            >
              Polkadot
            </button>
            <button
              className={network === "kusama" ? "selected" : undefined}
              onClick={() => setNetwork("kusama")}
            >
              Kusama
            </button>
            <button
              className={network === "westend" ? "selected" : undefined}
              onClick={() => setNetwork("westend")}
            >
              Westend
            </button>
          </section>
          <section>
            <h5>Theme</h5>
            <button
              className={theme === "light" ? "selected" : undefined}
              onClick={() => setTheme("light")}
            >
              Light
            </button>
            <button
              className={theme === "dark" ? "selected" : undefined}
              onClick={() => setTheme("dark")}
            >
              Dark
            </button>
          </section>
          <section>
            <h5>Category</h5>
            <button
              className="selected"
              onClick={() => setComponent("buttons")}
            >
              Buttons
            </button>
          </section>
        </div>
        <div className="body">{getComponent(component)}</div>
      </main>
    </>
  );
};

export default Home;
