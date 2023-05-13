// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0
/* eslint-disable */

import type { ExtensionConfig } from "./types";
const EnkryptSVG = require("./icons/enkrypt.svg");
const FearlessSVG = require("./icons/fearless.svg");
const NovaWalletSVG = require("./icons/novawallet.svg");
const ParitySignerSVG = require("./icons/paritysigner.svg");
const PolkadotJSSVG = require("./icons/polkadotjs.svg");
const PolkaGateSVG = require("./icons/polkagate.svg");
const SubwalletSVG = require("./icons/subwallet.svg");
const TalismanSVG = require("./icons/talisman.svg");

export const Extensions: ExtensionConfig[] = [
  {
    id: "polkadot-js",
    title: (window as any)?.walletExtension?.isNovaWallet
      ? "Nova Wallet"
      : "Polkadot JS",
    icon: (window as any)?.walletExtension?.isNovaWallet
      ? NovaWalletSVG
      : PolkadotJSSVG,
    url: (window as any)?.walletExtension?.isNovaWallet
      ? "novawallet.io"
      : "polkadot.js.org/extension",
  },
  {
    id: "enkrypt",
    title: "Enkrypt",
    icon: EnkryptSVG,
    url: "enkrypt.com",
  },
  {
    id: "fearless-wallet",
    title: "Fearless Wallet",
    icon: FearlessSVG,
    url: "fearlesswallet.io",
  },
  {
    id: "parity-signer-companion",
    title: "Parity Signer Companion",
    icon: ParitySignerSVG,
    url: "parity.io/technologies/signer",
  },
  {
    id: "polkagate",
    title: "PolkaGate",
    icon: PolkaGateSVG,
    url: "polkagate.xyz",
  },
  {
    id: "subwallet-js",
    title: "SubWallet",
    icon: SubwalletSVG,
    url: "subwallet.app",
  },
  {
    id: "talisman",
    title: "Talisman",
    icon: TalismanSVG,
    url: "talisman.xyz",
  },
];
