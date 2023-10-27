/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ExtensionsProvider } from "@packages/cloud-react/lib/connect/ExtensionsProvider";
import { Doc } from "./main";
import { ExtensionAccountsProvider } from "@packages/cloud-react/lib/connect/ExtensionAccountsProvider";

export const ModalConnect = () => (
  <ExtensionsProvider>
    <ExtensionAccountsProvider
      dappName={"Notify me"}
      network={"polkadot"}
      ss58={0}
      activeAccount={null}
      setActiveAccount={() => {
        console.log("12");
      }}
    >
      <div className="doc">
        <Doc npm="@polkadot-cloud/react" folder="Recipes/ModalConnect" />
      </div>
    </ExtensionAccountsProvider>
  </ExtensionsProvider>
);
