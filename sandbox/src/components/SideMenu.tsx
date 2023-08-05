/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { Dispatch, SetStateAction } from "react";

interface SideMenuProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  network: string;
  setNetwork: Dispatch<SetStateAction<string>>;
  component: string;
  setComponent: Dispatch<SetStateAction<string>>;
}

export const SideMenu = ({
  theme,
  setTheme,
  network,
  setNetwork,
  component,
  setComponent,
}: SideMenuProps) => {
  return (
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
          className={component === "buttons" ? "selected" : undefined}
          onClick={() => setComponent("buttons")}
        >
          Buttons
        </button>
        <button
          className={component === "modal" ? "selected" : undefined}
          onClick={() => setComponent("modal")}
        >
          Modal
        </button>
        <button
          className={component === "odometer" ? "selected" : undefined}
          onClick={() => setComponent("odometer")}
        >
          Odometer
        </button>
        <button
          className={component === "grid" ? "selected" : undefined}
          onClick={() => setComponent("grid")}
        >
          Grid
        </button>
      </section>
    </div>
  );
};
