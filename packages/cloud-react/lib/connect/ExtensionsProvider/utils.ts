// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import {
  hasMetaMask,
  isMetamaskSnapsSupported,
} from "@chainsafe/metamask-polkadot-adapter/src/utils";
import { AnyJson } from "../../utils/types";

// Workaround for current `ethereum` snap types. See
// https://github.com/ChainSafe/metamask-snap-polkadot/blob/e0f3d4fc0be7366c62211e29d3a276e4fab5669e/packages/adapter/src/types.ts#L40
// for full type.
declare global {
  interface Window {
    injectedWeb3?: AnyJson;
    // eslint-disable-next-line
    ethereum: any;
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
