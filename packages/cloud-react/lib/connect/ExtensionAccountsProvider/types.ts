// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { ReactNode } from "react";
import { ExtensionInjected } from "../ExtensionsProvider/types";

export interface ExtensionAccountsContextInterface {
  connectExtensionAccounts: (
    extensionsInjected: ExtensionInjected
  ) => Promise<boolean>;
  extensionAccountsSynced: boolean;
}

export interface ExtensionAccountsProviderProps {
  children: ReactNode;
  network: string;
  dappName: string;
}
