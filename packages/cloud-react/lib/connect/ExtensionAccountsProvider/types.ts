// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { ReactNode } from "react";
import { ExtensionAccount } from "../ExtensionsProvider/types";
import { ImportedAccount } from "../types";
import { MaybeAddress } from "../../utils/types";

export interface ExtensionAccountsContextInterface {
  connectExtensionAccounts: (id?: string) => Promise<boolean>;
  forgetAccounts: (a: ExtensionAccount[]) => void;
  extensionAccountsSynced: Sync;
  extensionAccounts: ImportedAccount[];
}

export interface ExtensionAccountsProviderProps {
  children: ReactNode;
  network: string;
  ss58: number;
  dappName: string;
  activeAccount?: MaybeAddress;
  setActiveAccount?: (a: MaybeAddress) => void;
  onExtensionEnabled?: (id: string) => void;
}

export interface HandleImportExtension {
  newAccounts: ExtensionAccount[];
  meta: {
    removedActiveAccount: MaybeAddress;
  };
}
export type Sync = "synced" | "unsynced" | "syncing";
