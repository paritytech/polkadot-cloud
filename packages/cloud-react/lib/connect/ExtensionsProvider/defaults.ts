// Copyright 2023 @polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function,  no-unused-vars */

import type { ExtensionsContextInterface } from "./types";

export const defaultExtensionsContext: ExtensionsContextInterface = {
  checkingInjectedWeb3: false,
  extensions: [],
  extensionsStatus: {},
  setExtensionStatus: (id, status) => {},
};
