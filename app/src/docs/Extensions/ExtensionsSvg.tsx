/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../lib/SimpleEditor";
import { ReactComponent as EnkryptSVG } from "@packages/community/lib/extensions/svg/enkrypt.svg";
import { ReactComponent as FearlessWalletSVG } from "@packages/community/lib/extensions/svg/fearlesswallet.svg";
import { ReactComponent as NovaWalletSVG } from "@packages/community/lib/extensions/svg/novawallet.svg";
import { ReactComponent as PolkadotJSSVG } from "@packages/community/lib/extensions/svg/polkadotjs.svg";
import { ReactComponent as PolkaGateSVG } from "@packages/community/lib/extensions/svg/polkagate.svg";
import { ReactComponent as SubwalletJSSVG } from "@packages/community/lib/extensions/svg/subwalletjs.svg";
import { ReactComponent as TalismanSVG } from "@packages/community/lib/extensions/svg/talisman.svg";

export const ExtensionsSvg = () => {
  const code = `import { ReactComponent as EnkryptSVG } from "@polkadot-cloud/community/extensions/svg/enkrypt.svg";
import { ReactComponent as FearlessWalletSVG } from "@polkadot-cloud/community/extensions/svg/fearlesswallet.svg";
import { ReactComponent as NovaWalletSVG } from "@polkadot-cloud/community/extensions/svg/novawallet.svg";
import { ReactComponent as PolkadotJSSVG } from "@polkadot-cloud/community/extensions/svg/polkadotjs.svg";
import { ReactComponent as PolkaGateSVG } from "@polkadot-cloud/community/extensions/svg/polkagate.svg";
import { ReactComponent as SubwalletJSSVG } from "@polkadot-cloud/community/extensions/svg/subwalletjs.svg";
import { ReactComponent as TalismanSVG } from "@polkadot-cloud/community/extensions/svg/talisman.svg";

const App = () => (
  <>
    <EnkryptSVG />
    <FearlessWalletSVG />
    <NovaWalletSVG />
    <PolkadotJsSVG />
    <PolkaGateSVG />
    <SubwalletJsSVG />
    <TalismanSVG />
  </>
)`;

  return (
    <>
      <div className="demo">
        <div className="svg-box">
          <EnkryptSVG />
        </div>
        <div className="svg-box">
          <FearlessWalletSVG />
        </div>
        <div className="svg-box">
          <NovaWalletSVG />
        </div>
        <div className="svg-box">
          <PolkadotJSSVG />
        </div>
        <div className="svg-box">
          <PolkaGateSVG />
        </div>
        <div className="svg-box">
          <SubwalletJSSVG />
        </div>
        <div className="svg-box">
          <TalismanSVG />
        </div>
      </div>
      <SimpleEditor code={code} language="javascript" />
    </>
  );
};
