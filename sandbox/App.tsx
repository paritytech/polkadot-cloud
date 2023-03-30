// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from "react";
import { Buttons } from "./components";

const getComponent = (component: string) => {
  switch (component) {
    case "buttons":
      return <Buttons />;
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
        <div className="sidenav">
          <h5>
            <p>Network:</p>
            <button onClick={() => setNetwork("polkadot")}>Polkadot</button>
            <button onClick={() => setNetwork("kusama")}>Kusama</button>
            <button onClick={() => setNetwork("westend")}>Westend</button>
            <p>Theme:</p>
            <button onClick={() => setTheme("light")}>Light</button>
            <button onClick={() => setTheme("dark")}>Dark</button>
          </h5>
          <h5>
            <p>Component:</p>
            <button onClick={() => setComponent("buttons")}>Buttons</button>
          </h5>
        </div>
        <div className="body">{getComponent(component)}</div>
      </main>
    </>
  );
};

export default Home;
