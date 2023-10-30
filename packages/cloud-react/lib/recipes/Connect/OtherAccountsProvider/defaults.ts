// Copyright 2023 @polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import type { OtherAccountsContextInterface } from "./types";

export const defaultOtherAccountsContext: OtherAccountsContextInterface = {
  addExternalAccount: (a, b) => {},
  addOtherAccounts: (a) => {},
  renameOtherAccount: (a, n) => {},
  importLocalOtherAccounts: (n) => {},
  forgetOtherAccounts: (a) => {},
  forgetExternalAccounts: (a) => {},
  otherAccounts: [],
  accountsInitialised: false,
};
