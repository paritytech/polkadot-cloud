// Copyright 2023 @polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only
/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-unused-vars */

import type { ImportedAccountsContextInterface } from "./types";

export const defaultImportedAccountsContext: ImportedAccountsContextInterface =
  {
    accounts: [],
    getAccount: (address) => null,
    isReadOnlyAccount: (address) => false,
    accountHasSigner: (address) => false,
    requiresManualSign: (address) => false,
  };
