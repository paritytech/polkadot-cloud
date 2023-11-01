/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Doc } from "./main";

import {
  Connect,
  connectInfo,
  ConnectConfigProvider,
} from "@packages/cloud-react/lib/recipes/Connect";
import type { DappInfo } from "@packages/cloud-react/lib/recipes/Connect";

export const ModalConnect = () => {
  const dappInfo: DappInfo = {
    dappName: "dApp Name",
    network: "polkadot",
    ss58: 0,
  };
  const providers = connectInfo(dappInfo);

  return (
    <ConnectConfigProvider dappInfo={dappInfo}>
      <Connect providers={providers}>
        <div className="doc">
          <Doc npm="@polkadot-cloud/react" folder="Recipes/ModalConnect" />
        </div>
      </Connect>
    </ConnectConfigProvider>
  );
};
