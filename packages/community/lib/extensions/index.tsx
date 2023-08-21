/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ExtensionConfig } from "../types";
import { Enkrypt } from "./jsx/Enkrypt";
import { FearlessWallet } from "./jsx/FearlessWallet";
import { PolkadotJS } from "./jsx/PolkadotJS";
import { PolkaGate } from "./jsx/PolkaGate";
import { SubwalletJS } from "./jsx/SubwalletJS";
import { Talisman } from "./jsx/Talisman";
import { WalletConnect } from "./jsx/WalletConnect";

// To add extensions to this list, refer to the instructions hosted in this package's README file:
// https://github.com/paritytech/polkadot-cloud/tree/main/packages/community#adding-web-extension-wallets
export const Extensions: Record<string, ExtensionConfig> = {
  // NOTE: Nova Wallet use the same identifier as Polkadot JS extension. We therefore test if the
  // `walletExtension` property exists to determine if the extension is Nova Wallet or Polkadot
  // JS.
  "polkadot-js": {
    title: window?.walletExtension?.isNovaWallet
      ? "Nova Wallet"
      : "Polkadot JS",
    Icon: window?.walletExtension?.isNovaWallet ? Enkrypt : PolkadotJS,
    website: window?.walletExtension?.isNovaWallet
      ? "novawallet.io"
      : "polkadot.js.org/extension",
  },
  enkrypt: {
    title: "Enkrypt",
    Icon: Enkrypt,
    website: "enkrypt.com",
  },
  "fearless-wallet": {
    title: "Fearless Wallet",
    Icon: FearlessWallet,
    website: "fearlesswallet.io",
  },
  polkagate: {
    title: "PolkaGate",
    Icon: PolkaGate,
    website: "polkagate.xyz",
  },
  "subwallet-js": {
    title: "SubWallet",
    Icon: SubwalletJS,
    website: "subwallet.app",
  },
  talisman: {
    title: "Talisman",
    Icon: Talisman,
    website: "talisman.xyz",
  },
  walletconnect: {
    title: "WalletConnect",
    Icon: WalletConnect,
    website: "walletconnect.com",
  },
};

export const ExtensionsArray = Object.entries(Extensions).map(
  ([key, value]) => ({
    id: key,
    ...value,
  })
);
