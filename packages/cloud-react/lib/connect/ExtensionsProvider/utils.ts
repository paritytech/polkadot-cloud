// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import {
  hasMetaMask,
  isMetamaskSnapsSupported,
} from "@chainsafe/metamask-polkadot-adapter/src/utils";
import { AnyJson } from "../../utils/types";

// Workaround for current `ethereum` snap types.
declare global {
  interface Window {
    injectedWeb3?: AnyJson;
    ethereum?: AnyJson;
  }
}

// Determines if Metamask Polkadot Snap is available and supported.
export const polkadotSnapAvailable = async (): Promise<boolean> => {
  if (!hasMetaMask()) return false;
  if (!(await isMetamaskSnapsSupported())) {
    return false;
  }
  return true;
};
