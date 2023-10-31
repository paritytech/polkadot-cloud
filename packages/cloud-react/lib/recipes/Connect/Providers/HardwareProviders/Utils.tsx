// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { localStorageOrDefault } from "@polkadot-cloud/utils";
import type { LedgerApp, LedgerAddress } from "./types";

import type { MaybeString } from "../../../../utils/types";
import type { LedgerAccount, VaultAccount } from "../../../../connect/types";

// TODO: Icons of Kusama and Polkadot
// import KusamaSVG from "../../assets/appIcons/kusama.svg";
// import PolkadotSVG from "../../assets/appIcons/polkadot.svg";

export const LedgerApps: LedgerApp[] = [
  {
    network: "polkadot",
    appName: "Polkadot",
    Icon: null,
  },
  {
    network: "kusama",
    appName: "Kusama",
    Icon: null,
  },
];

// Gets ledger app from local storage, fallback to first entry.
export const getLedgerApp = (network: string) => {
  return LedgerApps.find((a) => a.network === network) || LedgerApps[0];
};

// Gets saved ledger addresses from local storage.
export const getLocalLedgerAddresses = (network?: string) => {
  const localAddresses = localStorageOrDefault(
    "ledger_addresses",
    [],
    true
  ) as LedgerAddress[];

  return network
    ? localAddresses.filter((a) => a.network === network)
    : localAddresses;
};

// Gets imported Ledger accounts from local storage.
export const getLocalLedgerAccounts = (network?: string) => {
  const localAddresses = localStorageOrDefault(
    "ledger_accounts",
    [],
    true
  ) as LedgerAccount[];

  return network
    ? localAddresses.filter((a) => a.network === network)
    : localAddresses;
};

// Gets imported Vault accounts from local storage.
export const getLocalVaultAccounts = (network?: string) => {
  const localAddresses = localStorageOrDefault(
    "polkadot_vault_accounts",
    [],
    true
  ) as VaultAccount[];

  return network
    ? localAddresses.filter((a) => a.network === network)
    : localAddresses;
};

// Gets whether an address is a local network address.
export const isLocalNetworkAddress = (
  chain: string,
  a: { address: MaybeString; network: string },
  address: string
) => a.address === address && a.network === chain;
