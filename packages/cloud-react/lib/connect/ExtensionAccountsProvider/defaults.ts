// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function,  no-unused-vars */

import { ExtensionAccountsContextInterface } from "./types";

export const defaultExtensionAccountsContext: ExtensionAccountsContextInterface =
  {
    connectExtensionAccounts: () => Promise.resolve(false),
    forgetAccounts: (a) => {},
    extensionAccountsSynced: "unsynced",
    extensionAccounts: [],
  };

export const defaultHandleImportExtension = {
  newAccounts: [],
  meta: {
    removedActiveAccount: null,
  },
};
