/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "@docs/SimpleEditor";
import EnkryptSVG from "@packages/assets/lib/extensions/svg/enkrypt.svg?react";
import FearlessWalletSVG from "@packages/assets/lib/extensions/svg/fearlesswallet.svg?react";
import MetamaskSVG from "@packages/assets/lib/extensions/svg/metamask.svg?react";
import NovaWalletSVG from "@packages/assets/lib/extensions/svg/novawallet.svg?react";
import PolkadotJSSVG from "@packages/assets/lib/extensions/svg/polkadotjs.svg?react";
import PolkaGateSVG from "@packages/assets/lib/extensions/svg/polkagate.svg?react";
import SubwalletJSSVG from "@packages/assets/lib/extensions/svg/subwalletjs.svg?react";
import TalismanSVG from "@packages/assets/lib/extensions/svg/talisman.svg?react";
import LedgerSVG from "@packages/assets/lib/extensions/svg/ledger.svg?react";
import LedgerSquareSVG from "@packages/assets/lib/extensions/svg/ledgersquare.svg?react";
import PolkadotVaultSVG from "@packages/assets/lib/extensions/svg/polkadotvault.svg?react";
import WalletConnectSVG from "@packages/assets/lib/extensions/svg/walletconnect.svg?react";
import { Demo } from "@docs/Demo";

export const ExtensionsSvg = () => {
  const code = `import EnkryptSVG from "@polkadot-cloud/assets/extensions/svg/enkrypt.svg?react";
import FearlessWalletSVG from "@polkadot-cloud/assets/extensions/svg/fearlesswallet.svg?react";
import MetaMaskSVG from "@polkadot-cloud/assets/extensions/svg/metamask.svg?react";
import NovaWalletSVG from "@polkadot-cloud/assets/extensions/svg/novawallet.svg?react";
import PolkadotJSSVG from "@polkadot-cloud/assets/extensions/svg/polkadotjs.svg?react";
import PolkaGateSVG from "@polkadot-cloud/assets/extensions/svg/polkagate.svg?react";
import SubwalletJSSVG from "@polkadot-cloud/assets/extensions/svg/subwalletjs.svg?react";
import TalismanSVG from "@polkadot-cloud/assets/extensions/svg/talisman.svg?react";
import LedgerSVG from "@packages/assets/lib/extensions/svg/ledger.svg?react";
import LedgerSquareSVG from "@packages/assets/lib/extensions/svg/ledgersquare.svg?react";
import PolkadotVaultSVG from "@packages/assets/lib/extensions/svg/polkadotvault.svg?react";
import WalletConnectSVG from "@packages/assets/lib/extensions/svg/walletconnect.svg?react";

const App = () => (
  <>
    <EnkryptSVG />
    <FearlessWalletSVG />
    <MetaMaskSVG />
    <NovaWalletSVG />
    <PolkadotJsSVG />
    <PolkaGateSVG />
    <SubwalletJsSVG />
    <TalismanSVG />
    <LedgerSVG />
    <LedgerSquareSVG />
    <PolkadotVaultSVG />
    <WalletConnectSVG />

  </>
)`;

  return (
    <>
      <Demo showThemes={false}>
        <div className="svg-box sm">
          <EnkryptSVG />
        </div>
        <div className="svg-box sm">
          <FearlessWalletSVG />
        </div>
        <div className="svg-box sm">
          <MetamaskSVG />
        </div>
        <div className="svg-box sm">
          <NovaWalletSVG />
        </div>
        <div className="svg-box sm">
          <PolkadotJSSVG />
        </div>
        <div className="svg-box sm">
          <PolkaGateSVG />
        </div>
        <div className="svg-box sm">
          <SubwalletJSSVG />
        </div>
        <div className="svg-box sm">
          <TalismanSVG />
        </div>
        <div className="svg-box sm" style={{ width: "8rem" }}>
          <LedgerSVG />
        </div>
        <div className="svg-box sm">
          <LedgerSquareSVG />
        </div>
        <div className="svg-box sm">
          <PolkadotVaultSVG />
        </div>
        <div className="svg-box sm">
          <WalletConnectSVG />
        </div>
      </Demo>
      <SimpleEditor code={code} language="javascript" />
    </>
  );
};
