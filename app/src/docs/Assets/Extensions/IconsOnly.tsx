/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import EnkryptSVG from "@packages/assets/lib/extensions/svg/enkrypt.svg?react";
import FearlessWalletSVG from "@packages/assets/lib/extensions/svg/fearlesswallet.svg?react";
import PolkadotJSSVG from "@packages/assets/lib/extensions/svg/polkadotjs.svg?react";
import PolkaGateSVG from "@packages/assets/lib/extensions/svg/polkagate.svg?react";
import SubwalletJSSVG from "@packages/assets/lib/extensions/svg/subwalletjs.svg?react";
import TalismanSVG from "@packages/assets/lib/extensions/svg/talisman.svg?react";
import LedgerSVG from "@packages/assets/lib/extensions/svg/ledger.svg?react";
import PolkadotVaultSVG from "@packages/assets/lib/extensions/svg/polkadotvault.svg?react";
import WalletConnectSVG from "@packages/assets/lib/extensions/svg/walletconnect.svg?react";
import MetamaskSVG from "@packages/assets/lib/extensions/svg/metamask.svg?react";
import { Demo } from "@docs/Demo";

export const IconsOnly = () => {
  return (
    <>
      <Demo showThemes={false} standalone>
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
          <PolkadotVaultSVG />
        </div>
        <div className="svg-box sm">
          <WalletConnectSVG />
        </div>
      </Demo>
    </>
  );
};
