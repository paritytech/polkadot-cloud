/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { useState } from "react";
import { Buttons } from "./pages/Buttons";
import { SideMenu } from "./components/SideMenu";
import { Odometer } from "./pages/Odometer";
import { Modal } from "./pages/Modal";

export const App = () => {
  // store the current theme
  const [theme, setTheme] = useState<string>("light");

  // store the current network
  const [network, setNetwork] = useState<string>("polkadot");

  // store the visible Component
  const [component, setComponent] = useState<string>("buttons");

  const getComponent = (key: string) => {
    switch (key) {
      case "odometer":
        return <Odometer />;
      case "modal":
        return <Modal />;
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
          component={component}
          setComponent={setComponent}
        />
        <div className="body">{getComponent(component)}</div>
      </main>
    </>
  );
};
