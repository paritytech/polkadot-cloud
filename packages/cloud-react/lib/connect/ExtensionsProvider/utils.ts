// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import {
  GetSnapsResponse,
  hasMetaMask,
} from "@chainsafe/metamask-polkadot-adapter/src/utils";
import { AnyFunction, AnyJson } from "../../utils/types";
import { SnapRpcMethodRequest } from "@chainsafe/metamask-polkadot-types";

// Workaround for current `ethereum` snap types. See
// https://github.com/ChainSafe/metamask-snap-polkadot/blob/e0f3d4fc0be7366c62211e29d3a276e4fab5669e/packages/adapter/src/types.ts#L40
// for full type.
declare global {
  interface Window {
    injectedWeb3?: AnyJson;
    ethereum: {
      isMetaMask: boolean;

      send: (
        request: SnapRpcMethodRequest | { method: string; params?: never[] }
      ) => Promise<unknown>;
      on: (eventName: unknown, callback: unknown) => unknown;
      request: <T>(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        request: SnapRpcMethodRequest | { method: string; params?: any }
      ) => Promise<T>;
    };
  }
}

const withTimeout = (fn: AnyFunction, args: AnyJson, timeout: number) => {
  return new Promise((resolve, reject) => {
    fn(...args).then(resolve, reject);
    setTimeout(() => {
      reject();
    }, timeout);
  });
};

// Checks if snaps are supported. Note that other extensions may inject `window.ethereum`, which may
// break the request. We wrap the request in a timeout to ensure it doesn't hang the extension
// discovery process.
const getWalletSnaps = async (): Promise<GetSnapsResponse> => {
  const ethRequest = window?.ethereum?.request ? true : false;
  if (ethRequest) {
    const response = await withTimeout(
      window.ethereum.request,
      [
        {
          method: "wallet_getSnaps",
        },
      ],
      200
    );
    return response as Promise<GetSnapsResponse>;
  }
  return;
};

// Determines if Metamask Polkadot Snap is available and supported.
export const polkadotSnapAvailable = async (): Promise<boolean> => {
  if (!hasMetaMask()) return false;

  try {
    await getWalletSnaps();
    return true;
  } catch (e) {
    return false;
  }
};
