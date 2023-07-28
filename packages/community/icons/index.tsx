/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ExtensionConfig } from "../types";

// TODO: add url for instructions (readme section) for adding a new extension.
export const Extensions: ExtensionConfig[] = [
  {
    // NOTE: Nova Wallet use the same identifier as Polkadot JS extension. We therefore test if the
    // `walletExtension` property exists to determine if the extension is Nova Wallet or Polkadot
    // JS.
    id: "polkadot-js",
    title: window?.walletExtension?.isNovaWallet
      ? "Nova Wallet"
      : "Polkadot JS",
    icon: window?.walletExtension?.isNovaWallet ? "novawallet" : "polkadotjs",
    website: window?.walletExtension?.isNovaWallet
      ? "novawallet.io"
      : "polkadot.js.org/extension",
  },
  {
    id: "enkrypt",
    title: "Enkrypt",
    icon: "enkrypt",
    website: "enkrypt.com",
  },
  {
    id: "fearless-wallet",
    title: "Fearless Wallet",
    icon: "fearless",
    website: "fearlesswallet.io",
  },
  {
    id: "polkagate",
    title: "PolkaGate",
    icon: "polkagate",
    website: "polkagate.xyz",
  },
  {
    id: "subwallet-js",
    title: "SubWallet",
    icon: "subwallet",
    website: "subwallet.app",
  },
  {
    id: "talisman",
    title: "Talisman",
    icon: "talisman",
    website: "talisman.xyz",
  },
];
