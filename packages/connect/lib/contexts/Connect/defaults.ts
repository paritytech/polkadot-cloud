// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ConnectContextInterface } from "../../contexts/Connect/types";

export const defaultConnectContext: ConnectContextInterface = {
  // eslint-disable-next-line
  formatAccountSs58: (a: string) => null,
  // eslint-disable-next-line
  connectExtensionAccounts: async (e) =>
    await new Promise((resolve) => resolve()),
  // eslint-disable-next-line
  getAccount: (a) => null,
  // eslint-disable-next-line
  connectToAccount: (a) => {},
  // eslint-disable-next-line
  disconnectFromAccount: () => {},
  // eslint-disable-next-line
  addExternalAccount: (a, b) => {},
  getActiveAccount: () => null,
  // eslint-disable-next-line
  accountHasSigner: (a) => false,
  // eslint-disable-next-line
  isReadOnlyAccount: (a) => false,
  // eslint-disable-next-line
  forgetAccounts: (a) => {},
  accounts: [],
  activeAccount: null,
  activeAccountMeta: null,
};

export const defaultHandleImportExtension = {
  newAccounts: [],
  meta: {
    removedActiveAccount: null,
  },
};
