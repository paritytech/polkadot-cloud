// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { ExtensionAccount } from "./ExtensionsProvider/types";

export type MaybeAddress = string | null;

export type ImportedAccount =
  | ExtensionAccount
  | ExternalAccount
  | LedgerAccount
  | VaultAccount;

export interface ExternalAccount {
  address: string;
  network: string;
  name: string;
  source: string;
  addedBy: string;
}

export interface LedgerAccount {
  address: string;
  network: string;
  name: string;
  source: string;
  index: number;
}

export interface VaultAccount {
  address: string;
  network: string;
  name: string;
  source: string;
  index: number;
}
