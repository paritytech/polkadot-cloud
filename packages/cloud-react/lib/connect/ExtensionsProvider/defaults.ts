// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function,  no-unused-vars */

import type { ExtensionsContextInterface } from "./types";

export const defaultExtensionsContext: ExtensionsContextInterface = {
  checkingInjectedWeb3: false,
  extensionsStatus: {},
  setExtensionStatus: (id, status) => {},
  removeExtensionStatus: (id) => {},
  extensionInstalled: (id) => false,
  extensionCanConnect: (id) => false,
  extensionHasFeature: (id, feature) => false,
};
