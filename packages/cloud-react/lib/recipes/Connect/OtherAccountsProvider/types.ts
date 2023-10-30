// Copyright 2023 @polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import type { ImportedAccount } from "../../../connect/types";
import type { MaybeAddress } from "../../../utils/types";
import type { NetworkName } from "../Utils";

export interface OtherAccountsContextInterface {
  addExternalAccount: (a: string, addedBy: string) => void;
  addOtherAccounts: (a: ImportedAccount[]) => void;
  renameOtherAccount: (a: MaybeAddress, n: string) => void;
  importLocalOtherAccounts: (g: (n: NetworkName) => ImportedAccount[]) => void;
  forgetOtherAccounts: (a: ImportedAccount[]) => void;
  forgetExternalAccounts: (a: ImportedAccount[]) => void;
  accountsInitialised: boolean;
  otherAccounts: ImportedAccount[];
}
