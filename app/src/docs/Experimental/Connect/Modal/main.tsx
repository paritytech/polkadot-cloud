/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { DocProps } from "@docs/types";
import { ModalConnect } from "./ModalConnect";
import { Note } from "@docs/Note";

import {
  Connect,
  connectInfo,
  ConnectConfigProvider,
} from "@packages/cloud-react/lib/recipes/Connect";
import type {
  ConnectType,
  DappInfo,
} from "@packages/cloud-react/lib/recipes/Connect";
import { ModalConnectWalletSettings } from "./ModalConnectWalletSettings";

const walletSettings: ConnectType = {
  hardwareActive: false, // shows hardware wallets | defaults to true
  webActive: true, // shows web wallets | defaults to true
  devActive: true, // shows developer tools | defaults to true
  readOnlyActive: false, // shows readonly tab | defaults to true
  proxiesActive: true, // // shows proxies tab | defaults to true
};

export const Doc = ({ folder, npm }: DocProps) => {
  const dappInfo: DappInfo = {
    dappName: "dApp Name",
    network: "polkadot",
    ss58: 0,
  };

  const providers = connectInfo(dappInfo, walletSettings);

  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Web/Hardware Wallets Connect component"
        subtitle="A light-weight and Connect recipe for connecting to web/hardware wallets."
        npm={npm}
        status="stable"
      />
      <h4>Introduction</h4>
      <p>
        The <code>Connect</code> recipe is meant to bring a simple solution to
        integrating easily hardware wallets (supporting: <code>Ledger</code> and{" "}
        <code>Polkadot Vault</code>) and web extension wallets (supporting:{" "}
        <code>Enkrypt</code>, <code>Fearless Wallet</code>,
        <code>PolkaGate</code>, <code>SubWallet</code>, <code>Talisman</code>),
        developer tools (supporting:
        <code>PolkadotJS</code>) and also Metamask Snap (for Polkadot and Kusama
        networks).
      </p>
      <p>
        The idea behind this recipe, is to provide to the developers a very easy
        and simple solution, on integrating with most known Wallets without the
        hustle of building everything from scratch;
      </p>

      <Note>
        <p>
          There is a known bug that do not allow Enkrypt wallet to work at the
          same time with Metamask Wallet; Only one of the two will stay
          connected;
        </p>
      </Note>

      <p>The settings that need to be addded</p>

      <ConnectConfigProvider dappInfo={dappInfo}>
        <Connect providers={providers}>
          <ModalConnect />
        </Connect>
      </ConnectConfigProvider>

      <p>
        The <code>'wallets'</code> prop receive 5 different booleans that can
        show/hide different parts of the modal (hardware/web/dev wallets, read
        only and proxy accounts), and this way it is more adjustable to the
        project's needs.
      </p>
      <p>
        The example below shows only the web wallets, the developer tools active
        and the proxies accounts active, while hiding the hardware wallets and
        the read only accounts.
      </p>

      <Note>
        <p>
          <code>Button</code> code remains the same as above, so its not shown
          here for reducing repeatance.
        </p>
      </Note>

      <ConnectConfigProvider dappInfo={dappInfo} wallets={walletSettings}>
        <Connect providers={providers}>
          <ModalConnectWalletSettings />
        </Connect>
      </ConnectConfigProvider>
    </>
  );
};
