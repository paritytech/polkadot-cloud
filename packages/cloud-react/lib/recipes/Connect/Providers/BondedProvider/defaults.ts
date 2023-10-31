// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only
/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */

import type { BondedContextInterface, Nominations } from "./types";

export const nominations: Nominations = {
  targets: [],
  submittedIn: 0,
};

export const defaultBondedContext: BondedContextInterface = {
  getAccount: (address) => null,
  getBondedAccount: (address) => null,
  getAccountNominations: (address) => [],
  isController: (address) => false,
  bondedAccounts: [],
};
