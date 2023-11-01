/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Edit } from "@docs/Edit";
import { Header } from "@docs/Header";
import { DocProps } from "@docs/types";
import { ModalConnect } from "./ModalConnect";
import { Note } from "@docs/Note";

export const Doc = ({ folder, npm }: DocProps) => {
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

      <ModalConnect />
    </>
  );
};
