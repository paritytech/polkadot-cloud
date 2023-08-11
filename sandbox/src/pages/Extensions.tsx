/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Enkrypt } from "../../../packages/community/lib/extensions/jsx/Enkrypt";
import { FearlessWallet } from "../../../packages/community/lib/extensions/jsx/FearlessWallet";
import { NovaWallet } from "../../../packages/community/lib/extensions/jsx/NovaWallet";
import { PolkadotJS } from "../../../packages/community/lib/extensions/jsx/PolkadotJS";
import { PolkaGate } from "../../../packages/community/lib/extensions/jsx/PolkaGate";
import { SubwalletJS } from "../../../packages/community/lib/extensions/jsx/SubwalletJS";
import { Talisman } from "../../../packages/community/lib/extensions/jsx/Talisman";
import { Separator } from "../../../packages/core-ui/lib/core/Separator";

import { ReactComponent as EnkryptSVG } from "../../../packages/community/lib/extensions/svg/enkrypt.svg";
import { ReactComponent as FearlessWalletSVG } from "../../../packages/community/lib/extensions/svg/fearlesswallet.svg";
import { ReactComponent as NovaWalletSVG } from "../../../packages/community/lib/extensions/svg/novawallet.svg";
import { ReactComponent as PolkadotJsSVG } from "../../../packages/community/lib/extensions/svg/polkadotjs.svg";
import { ReactComponent as PolkaGateSVG } from "../../../packages/community/lib/extensions/svg/polkagate.svg";
import { ReactComponent as SubwalletJsSVG } from "../../../packages/community/lib/extensions/svg/subwalletjs.svg";
import { ReactComponent as TalismanSVG } from "../../../packages/community/lib/extensions/svg/talisman.svg";
import { CodeDrawer } from "../components/CodeDrawer";

export const Extensions = () => (
  <>
    <h1 className="sb-title">Extensions</h1>
    <h4>Enkrypt: TSX / SVG</h4>
    <div className="sb-row">
      <div className="svg-box">
        <Enkrypt />
      </div>
      <div className="svg-box">
        <EnkryptSVG />
      </div>
    </div>
    <CodeDrawer>
      <code>
        <p>{`<Enkrypt /> <EnkryptSVG />`}</p>
      </code>
    </CodeDrawer>
    <Separator />

    <h4>Fearless Wallet: TSX / SVG</h4>
    <div className="sb-row">
      <div className="svg-box">
        <FearlessWallet />
      </div>
      <div className="svg-box">
        <FearlessWalletSVG />
      </div>
    </div>
    <CodeDrawer>
      <code>
        <p>{`<FearlessWallet /> <FearlessWalletSVG />`}</p>
      </code>
    </CodeDrawer>
    <Separator />

    <h4>Nova Wallet: TSX / SVG</h4>
    <div className="sb-row">
      <div className="svg-box">
        <NovaWallet />
      </div>
      <div className="svg-box">
        <NovaWalletSVG />
      </div>
    </div>
    <CodeDrawer>
      <code>
        <p>{`<NovaWallet /> <NovaWalletSVG />`}</p>
      </code>
    </CodeDrawer>
    <Separator />

    <h4>Polkadot JS: TSX / SVG</h4>
    <div className="sb-row">
      <div className="svg-box">
        <PolkadotJS />
      </div>
      <div className="svg-box">
        <PolkadotJsSVG />
      </div>
    </div>
    <CodeDrawer>
      <code>
        <p>{`<PolkadotJS /> <PolkadotJsSVG />`}</p>
      </code>
    </CodeDrawer>
    <Separator />

    <h4>PolkaGate: TSX / SVG</h4>
    <div className="sb-row">
      <div className="svg-box">
        <PolkaGate />
      </div>
      <div className="svg-box">
        <PolkaGateSVG />
      </div>
    </div>
    <CodeDrawer>
      <code>
        <p>{`<PolkaGate /> <PolkaGateSVG />`}</p>
      </code>
    </CodeDrawer>
    <Separator />

    <h4>SubwalletJS: TSX / SVG</h4>
    <div className="sb-row">
      <div className="svg-box">
        <SubwalletJS />
      </div>
      <div className="svg-box">
        <SubwalletJsSVG />
      </div>
    </div>
    <CodeDrawer>
      <code>
        <p>{`<SubwalletJS /> <SubwalletJsSVG />`}</p>
      </code>
    </CodeDrawer>
    <Separator />

    <h4>Talisman: TSX / SVG</h4>
    <div className="sb-row">
      <div className="svg-box">
        <Talisman />
      </div>
      <div className="svg-box">
        <TalismanSVG />
      </div>
    </div>
    <CodeDrawer>
      <code>
        <p>{`<Talisman /> <TalismanSVG />`}</p>
      </code>
    </CodeDrawer>
  </>
);
