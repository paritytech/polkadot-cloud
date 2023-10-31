/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";
import { Demo } from "@docs/Demo";
import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { useOverlay } from "@packages/cloud-react/lib/overlay/OverlayProvider/useOverlay";
import { Overlays } from "@packages/cloud-react/lib/recipes/Connect";

export const ModalConnect = () => {
  const code = `// In the main entry of your app:
// e.g. main.tsx

import {
  useActiveAccounts,
  Connect,
  connectInfo,
  ConnectConfigProvider,
} from "@packages/cloud-react/lib/recipes/Connect";
import type {
  ConnectType,
  DappInfo,
} from "@packages/cloud-react/lib/recipes/Connect";

const dappInfo: DappInfo = {
  dappName: "dApp Name",
  network: "polkadot",
  ss58: 0,
  activeAccount,
  setActiveAccount,
};

const walletSettings: ConnectType = {
  hardwareActive: true,
  webActive: true,
  devActive: true,
};

const providers = connectInfo(dappInfo, walletSettings);

......

return (
  <ConnectConfigProvider dappInfo={dappInfo} wallets={walletSettings}>
    <Connect providers={providers}>
      <App />      
    </Connect>
  </ConnectConfigProvider>
  );
};

// Where <App /> should be as follows
// App.tsx

import { Button, useOverlay } from "@polkadot-cloud/react";
import { Overlays } from "@polkadot-cloud/react/recipes/Connect";

const { openModal } = useOverlay().modal;

return (
  <>
    <Overlays />
    <Button
      type="primary"
      text={"Connect"}
      onClick={() => {
        openModal({ key: "Connect" });
      }}
    />
  </>
`;

  const { openModal } = useOverlay().modal;

  return (
    <>
      <Demo showThemes={false} centered>
        <Overlays />
        <Button
          type="primary"
          text={"Connect"}
          onClick={() => {
            openModal({ key: "Connect" });
          }}
        />
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
