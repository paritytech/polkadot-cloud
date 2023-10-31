/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Doc } from "./main";

import { useActiveAccounts } from "@packages/cloud-react/lib/recipes/Connect/Providers/ActiveAccountsProvider";
import {
  ConnectProvider,
  connectInfo,
} from "@packages/cloud-react/lib/recipes/Connect/Providers/ConnectProvider";

export const ModalConnect = () => {
  const { activeAccount, setActiveAccount } = useActiveAccounts();

  console.log("activeAccount", activeAccount);

  const providers = connectInfo(
    "dApp Name",
    "polkadot",
    0,
    activeAccount,
    setActiveAccount,
    true
  );

  return (
    <ConnectProvider providers={providers}>
      <div className="doc">
        <Doc npm="@polkadot-cloud/react" folder="Recipes/ModalConnect" />
      </div>
    </ConnectProvider>
  );
};
