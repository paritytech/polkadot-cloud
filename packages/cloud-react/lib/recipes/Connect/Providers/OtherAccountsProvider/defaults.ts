// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

/* eslint-disable @typescript-eslint/no-unused-vars, no-unused-vars, @typescript-eslint/no-empty-function */

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
