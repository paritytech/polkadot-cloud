/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import {
  ExtensionConfig,
  HardwareConfig,
  ExtensionIconRecords,
  ExtensionIcon,
} from "../types";
import Enkrypt from "./jsx/Enkrypt";
import FearlessWallet from "./jsx/FearlessWallet";
import MetaMask from "./jsx/MetaMask";
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
    features: "*",
  },
  "fearless-wallet": {
    title: "Fearless Wallet",
    website: "fearlesswallet.io",
    features: "*",
  },
  "metamask-polkadot-snap": {
    title: "MetaMask Polkadot Snap",
    website: [
      "snaps.metamask.io",
      "snaps.metamask.io/snap/npm/chainsafe/polkadot-snap",
    ],
    features: ["getAccounts", "signer"],
  },
  polkagate: {
    title: "PolkaGate",
    website: "polkagate.xyz",
    features: "*",
  },
  "subwallet-js": {
    title: "SubWallet",
    website: "subwallet.app",
    features: "*",
  },
  talisman: {
    title: "Talisman",
    website: "talisman.xyz",
    features: "*",
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
    features: "*",
  },
};

export const ExtensionsArray = Object.entries(Extensions).map(
  ([key, value]) => ({
    id: key,
    ...value,
  })
);

// List of extension icons keyed by the extension id.
export const ExtensionIcons: ExtensionIconRecords = {
  enkrypt: Enkrypt,
  "fearless-wallet": FearlessWallet,
  "metamask-polkadot-snap": MetaMask,
  novawallet: NovaWallet,
  "polkadot-js": PolkadotJS,
  polkagate: PolkaGate,
  "subwallet-js": SubwalletJS,
  talisman: Talisman,
};

// List of hardware based wallets and their metadata.
export const Hardware: Record<string, HardwareConfig> = {
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

export const HardwareIcons: ExtensionIconRecords = {
  ledger: Ledger,
  polkadotvault: PolkadotVault,
  walletconnect: WalletConnect,
};

// Helper to get the correct icon from `ExtensionIcons`.
export const getExtensionIcon = (id: string): ExtensionIcon | null => {
  // Workaround to return Nova Wallet icon when `isNovaWallet` is true.
  if (id === "polkadot-js" && window?.walletExtension?.isNovaWallet)
    id = "novawallet";

  return ExtensionIcons[id] || null;
};
