// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only
import type {
  Injected,
  InjectedAccount,
  InjectedWindow,
} from "@polkadot/extension-inject/types";
import {
  hasMetaMask,
  isMetamaskSnapsSupported,
} from "@chainsafe/metamask-polkadot-adapter/src/utils";
import { enablePolkadotSnap } from "@chainsafe/metamask-polkadot-adapter";
import type {
  SignerPayloadJSON,
  SignerPayloadRaw,
  SignerResult,
} from "@polkadot/types/types";
import type { HexString } from "@polkadot/util/types";
import { SnapConfig } from "@chainsafe/metamask-polkadot-types";
import { ExtensionAccount } from "../ExtensionsProvider/types";

interface Web3Window extends InjectedWindow {
  ethereum: unknown;
}

const transformAccounts = (accounts: string[]): ExtensionAccount[] =>
  accounts.map((address, i) => ({
    address,
    name: `Polkadot Snap ${i + 1}`,
    source: "metamask-polkadot-snap",
    type: "ethereum",
  }));

const injectPolkadotSnap = (win: Web3Window, config: SnapConfig): void => {
  win.injectedWeb3.Snap = {
    enable: async (): Promise<Injected> => {
      const snap = (await enablePolkadotSnap(config)).getMetamaskSnapApi();

      return {
        accounts: {
          get: async (): Promise<InjectedAccount[]> => {
            const response = await snap.getAddress();
            return transformAccounts([response]);
          },
          // Currently there is only available only one account, in that case this method will never return anything.
          subscribe: (
            // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
            _cb: (accounts: InjectedAccount[]) => void
          ): (() => void) => {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            return (): void => {};
          },
        },
        signer: {
          signPayload: async (
            payload: SignerPayloadJSON
          ): Promise<SignerResult> => {
            const signature = (await snap.signPayloadJSON(
              payload
            )) as HexString;
            return { id: 0, signature };
          },
          signRaw: async (raw: SignerPayloadRaw): Promise<SignerResult> => {
            const signature = (await snap.signPayloadRaw(raw)) as HexString;
            return { id: 0, signature };
          },
        },
      };
    },
    version: "0.1",
  };
};

// Initiate Polkadot snap and inject it into `injectedWeb3`. as `metamask-polkadot-snap`.
export const initPolkadotSnap = (config: SnapConfig): Promise<boolean> =>
  new Promise((resolve): void => {
    const win = window as Window & Web3Window;
    win.injectedWeb3 = win.injectedWeb3 || {};

    // Attempt to inject into `injectedWeb3`.
    if (hasMetaMask())
      isMetamaskSnapsSupported().then((result) => {
        if (result) {
          injectPolkadotSnap(win, config);
          // Overwrite `injectedWeb3` key with correct id and delete stale version.
          // Issue at: https://github.com/ChainSafe/metamask-snap-polkadot/issues/204
          window.injectedWeb3["metamask-polkadot-snap"] =
            window.injectedWeb3["Snap"];
          delete window.injectedWeb3["Snap"];
          resolve(true);
        } else {
          resolve(false);
        }
      });
    else resolve(false);
  });
