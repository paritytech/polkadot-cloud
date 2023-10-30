/* @license Copyright 2023 @polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { ExtensionConfig, IconRecords } from "../types";
import Enkrypt from "./jsx/Enkrypt";
import FearlessWallet from "./jsx/FearlessWallet";
import NovaWallet from "./jsx/NovaWallet";
import PolkadotJS from "./jsx/PolkadotJS";
import PolkaGate from "./jsx/PolkaGate";
import SubwalletJS from "./jsx/SubwalletJS";
import Talisman from "./jsx/Talisman";
import Ledger from "./jsx/Ledger";
import PolkadotVault from "./jsx/PolkadotVault";
import WalletConnect from "./jsx/WalletConnect";

// To add items to this list, refer to the instructions hosted in this package's README file:
// https://github.com/paritytech/polkadot-cloud/tree/main/packages/assets#adding-web-extension-wallets

// List of web3 wallet extensions and their metadata.
export const Extensions: Record<string, ExtensionConfig> = {
  enkrypt: {
    title: "Enkrypt",
    website: "enkrypt.com",
  },
  "fearless-wallet": {
    title: "Fearless Wallet",
    website: "fearlesswallet.io",
  },
  polkagate: {
    title: "PolkaGate",
    website: "polkagate.xyz",
  },
  "subwallet-js": {
    title: "SubWallet",
    website: "subwallet.app",
  },
  talisman: {
    title: "Talisman",
    website: "talisman.xyz",
  },
  // NOTE: Nova Wallet use the same identifier as Polkadot JS extension. We therefore test if the
  // `walletExtension` property exists to determine if the extension is Nova Wallet or Polkadot
  // JS.
  "polkadot-js": {
    title: window?.walletExtension?.isNovaWallet
      ? "Nova Wallet"
      : "Polkadot JS",
    website: window?.walletExtension?.isNovaWallet
      ? "novawallet.io"
      : "polkadot.js.org/extension",
  },
};

export const ExtensionsArray = Object.entries(Extensions).map(
  ([key, value]) => ({
    id: key,
    ...value,
  })
);

// List of extension icons keyed by the extension id.
export const ExtensionIcons: IconRecords = {
  enkrypt: Enkrypt,
  "fearless-wallet": FearlessWallet,
  novawallet: NovaWallet,
  "polkadot-js": PolkadotJS,
  polkagate: PolkaGate,
  "subwallet-js": SubwalletJS,
  talisman: Talisman,
};

// List of hardware based wallets and their metadata.
export const Hardware: Record<string, ExtensionConfig> = {
  ledger: {
    title: "Ledger",
    website: "ledger.com",
  },
  polkadotvault: {
    title: "Polkadot Vault",
    website: "signer.parity.io/",
  },
  walletconnect: {
    title: "WalletConnect",
    website: "walletconnect.com",
  },
};

export const HardwareArray = Object.entries(Hardware).map(([key, value]) => ({
  id: key,
  ...value,
}));

export const HardwareIcons: IconRecords = {
  ledger: Ledger,
  polkadotvault: PolkadotVault,
  walletconnect: WalletConnect,
};
