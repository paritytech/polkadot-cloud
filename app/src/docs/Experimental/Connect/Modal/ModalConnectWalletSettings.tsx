/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";
import { Demo } from "@docs/Demo";
import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { useOverlay } from "@packages/cloud-react/lib/overlay/OverlayProvider/useOverlay";
import {
  Overlays,
  useActiveAccounts,
} from "@packages/cloud-react/lib/recipes/Connect";

export const ModalConnectWalletSettings = () => {
  const code = `
// entry file of the App
import {
  Connect,
  connectInfo,
  ConnectConfigProvider,
} from "@polkadot-cloud/recipes/Connect";
import type { ConnectType, DappInfo } from "@polkadot-cloud/react/recipes/Connect";

export const ModalConnectWalletSettings = () => {
  const dappInfo: DappInfo = {
    dappName: "dApp Name",
    network: 'polkadot',
    ss58: 0,
  };

  const walletSettings: ConnectType = {
    hardwareActive: false, // shows hardware wallets | defaults to true
    // webActive: true, // shows web wallets | defaults to true
    // devActive: true, // shows developer tools | defaults to true
    readOnlyActive: false, // shows readonly tab | defaults to true
    // proxiesActive: true, // // shows proxies tab | defaults to true

  };

  const providers = connectInfo(dappInfo, walletSettings);

  return (
    <ConnectConfigProvider dappInfo={dappInfo} wallets={walletSettings}>
      <Connect providers={providers}>
        <App />
      </Connect>
    </ConnectConfigProvider>
  );
};
`;

  const { openModal } = useOverlay().modal;
  const { activeAccount } = useActiveAccounts();

  return (
    <>
      <Demo showThemes={false} centered>
        <Overlays />
        <div style={{ display: "flex" }}>
          {activeAccount && (
            <p style={{ padding: "0 10rem" }}>{activeAccount}</p>
          )}
          <Button
            type="primary"
            text={"Connect"}
            onClick={() => {
              openModal({ key: "Connect" });
            }}
          />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
