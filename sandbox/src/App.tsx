/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { useState } from "react";
import { Buttons } from "./pages/Buttons";
import { SideMenu } from "./components/SideMenu";
import { ReactOdometer } from "packages/odometer/lib";

export const App = () => {
  // store the current theme
  const [theme, setTheme] = useState<string>("light");

  // store the current network
  const [network, setNetwork] = useState<string>("polkadot");

  // store the visible Component
  const [component, setComponent] = useState<string>("buttons");

  const [value, setValue] = useState<number>(0);

  const getComponent = (key: string) => {
    switch (key) {
      default:
        return <Buttons />;
    }
  };

  return (
    <>
      <main className={`theme-${network} theme-${theme}`}>
        <SideMenu
          theme={theme}
          setTheme={setTheme}
          network={network}
          setNetwork={setNetwork}
          setComponent={setComponent}
        />
        <div className="body">
          <button onClick={() => setValue(value + 100000)}> click me </button>
          {""}
          <ReactOdometer duration={250} value={value} />
          {getComponent(component)}
        </div>
      </main>
    </>
  );
};
