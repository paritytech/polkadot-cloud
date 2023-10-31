// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import type { ExtensionAccount } from "../../../../connect/ExtensionsProvider/types";
import type { MaybeAddress } from "../../../../utils/types";
import type { ImportedAccount } from "../../../../connect/types";

export interface ImportedAccountsContextInterface {
  accounts: ImportedAccount[];
  getAccount: (address: MaybeAddress) => ExtensionAccount | null;
  isReadOnlyAccount: (address: MaybeAddress) => boolean;
  accountHasSigner: (address: MaybeAddress) => boolean;
  requiresManualSign: (address: MaybeAddress) => boolean;
}
