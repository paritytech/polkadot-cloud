/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Enkrypt } from "packages/community/lib/extensions/jsx/Enkrypt";
import { FearlessWallet } from "packages/community/lib/extensions/jsx/FearlessWallet";
import { NovaWallet } from "packages/community/lib/extensions/jsx/NovaWallet";
import { PolkadotJS } from "packages/community/lib/extensions/jsx/PolkadotJS";
import { PolkaGate } from "packages/community/lib/extensions/jsx/PolkaGate";
import { SubwalletJS } from "packages/community/lib/extensions/jsx/SubwalletJS";
import { Talisman } from "packages/community/lib/extensions/jsx/Talisman";
import { Separator } from "packages/core-ui/lib/core/Separator";

export const Extensions = () => (
  <>
    <h1 className="sb-title">Extensions</h1>
    <h4>Enkrypt</h4>
    <div className="sb-row">
      <div className="svg-box">
        <Enkrypt />
      </div>
    </div>
    <Separator />

    <h4>Fearless Wallet</h4>
    <div className="sb-row">
      <div className="svg-box">
        <FearlessWallet />
      </div>
    </div>
    <Separator />

    <h4>Nova Wallet</h4>
    <div className="sb-row">
      <div className="svg-box">
        <NovaWallet />
      </div>
    </div>
    <Separator />

    <h4>Polkadot JS</h4>
    <div className="sb-row">
      <div className="svg-box">
        <PolkadotJS />
      </div>
    </div>
    <Separator />

    <h4>PolkaGate</h4>
    <div className="sb-row">
      <div className="svg-box">
        <PolkaGate />
      </div>
    </div>
    <Separator />

    <h4>SubwalletJS</h4>
    <div className="sb-row">
      <div className="svg-box">
        <SubwalletJS />
      </div>
    </div>
    <Separator />

    <h4>Talisman</h4>
    <div className="sb-row">
      <div className="svg-box">
        <Talisman />
      </div>
    </div>
  </>
);
