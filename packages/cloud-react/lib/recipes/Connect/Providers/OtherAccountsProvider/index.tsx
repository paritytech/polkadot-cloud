// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useEffectIgnoreInitial } from "../../../../base/hooks/useEffectIgnoreInitial";

import { useExtensions } from "../../../../connect/ExtensionsProvider/useExtensions";
import { useExtensionAccounts } from "../../../../connect/ExtensionAccountsProvider/useExtensionAccounts";

import {
  getLocalLedgerAccounts,
  getLocalVaultAccounts,
} from "../HardwareProviders/Utils";
import type { AnyFunction, MaybeAddress } from "../../../../utils/types";
import type { NetworkName } from "../../Utils";
import { ellipsisFn, setStateWithRef } from "@polkadot-cloud/utils";
import Keyring from "@polkadot/keyring";
import type {
  ExternalAccount,
  ImportedAccount,
} from "../../../../connect/types";
import {
  getActiveAccountLocal,
  getLocalExternalAccounts,
  removeLocalExternalAccounts,
} from "../../Utils";
import type { OtherAccountsContextInterface } from "./types";
import { defaultOtherAccountsContext } from "./defaults";
import { useActiveAccounts } from "../ActiveAccountsProvider";
import { useConnectConfig } from "../ConnectConfigProvider";

export const OtherAccountsContext =
  createContext<OtherAccountsContextInterface>(defaultOtherAccountsContext);

export const OtherAccountsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { checkingInjectedWeb3 } = useExtensions();
  const { extensionAccountsSynced } = useExtensionAccounts();
  const { activeAccount, setActiveAccount } = useActiveAccounts();

  const { network, ss58 } = useConnectConfig();

  // Store whether other (non-extension) accounts have been initialised.
  const [otherAccountsSynced, setOtherAccountsSynced] =
    useState<boolean>(false);

  // Store other (non-extension) accounts list.
  const [otherAccounts, setOtherAccounts] = useState<ImportedAccount[]>([]);
  const otherAccountsRef = useRef(otherAccounts);

  // Store unsubscribe handlers for connected extensions.
  const unsubs = useRef<Record<string, AnyFunction>>({});

  // Store whether all accounts have been synced.
  const [accountsInitialised, setAccountsInitialised] =
    useState<boolean>(false);

  // Handle forgetting of an imported other account.
  const forgetOtherAccounts = (forget: ImportedAccount[]) => {
    // Unsubscribe and remove unsub from context ref.
    if (forget.length) {
      for (const { address } of forget) {
        if (otherAccountsRef.current.find((a) => a.address === address)) {
          const unsub = unsubs.current[address];
          if (unsub) {
            unsub();
            delete unsubs.current[address];
          }
        }
      }
      // Remove forgotten accounts from context state.
      setStateWithRef(
        [...otherAccountsRef.current].filter(
          (a) =>
            forget.find(({ address }) => address === a.address) === undefined
        ),
        setOtherAccounts,
        otherAccountsRef
      );
      // If the currently active account is being forgotten, disconnect.
      if (forget.find(({ address }) => address === activeAccount) !== undefined)
        setActiveAccount(null);
    }
  };

  // Checks `localStorage` for previously added accounts from the provided source, and adds them to
  // `accounts` state. if local active account is present, it will also be assigned as active.
  // Accounts are ignored if they are already imported through an extension.
  const importLocalOtherAccounts = (
    getter: (n: NetworkName) => ImportedAccount[]
  ) => {
    // Get accounts from provided `getter` function. The resulting array of accounts must contain an
    // `address` field.
    let localAccounts = getter(network as NetworkName);

    if (localAccounts.length) {
      const activeAccountInSet =
        localAccounts.find(
          ({ address }) =>
            address === getActiveAccountLocal(network as NetworkName, ss58)
        ) ?? null;

      // remove already-imported accounts.
      localAccounts = localAccounts.filter(
        (l) =>
          otherAccountsRef.current.find(
            ({ address }) => address === l.address
          ) === undefined
      );

      // set active account for networkData.
      if (activeAccountInSet) {
        setActiveAccount(activeAccountInSet?.address || null);
      }
      // add accounts to imported.
      addOtherAccounts(localAccounts);
    }
  };

  // Renames an other account.
  const renameOtherAccount = (address: MaybeAddress, newName: string) => {
    setStateWithRef(
      [...otherAccountsRef.current].map((a) =>
        a.address !== address
          ? a
          : {
              ...a,
              name: newName,
            }
      ),
      setOtherAccounts,
      otherAccountsRef
    );
  };

  // Adds an external account (non-wallet) to accounts.
  const addExternalAccount = (address: string, addedBy: string) => {
    // ensure account is formatted correctly
    const keyring = new Keyring();
    keyring.setSS58Format(ss58);
    const formatted = keyring.addFromAddress(address).address;

    const newAccount = {
      address: formatted,
      network,
      name: ellipsisFn(address),
      source: "external",
      addedBy,
    };

    // get all external accounts from localStorage.
    const localExternalAccounts = getLocalExternalAccounts();
    const existsLocal = localExternalAccounts.find(
      (l) => l.address === address && l.network === network
    );

    // check that address is not sitting in imported accounts (currently cannot check which
    // network).
    const existsImported = otherAccountsRef.current.find(
      (a) => a.address === address
    );

    // add external account if not there already.
    if (!existsLocal && !existsImported) {
      localStorage.setItem(
        "external_accounts",
        JSON.stringify(localExternalAccounts.concat(newAccount))
      );

      // add external account to imported accounts
      addOtherAccounts([newAccount]);
    } else if (existsLocal && existsLocal.addedBy !== "system") {
      // the external account needs to change to `system` so it cannot be removed. This will replace
      // the whole entry.
      localStorage.setItem(
        "external_accounts",
        JSON.stringify(
          localExternalAccounts.map((item) =>
            item.address !== address ? item : newAccount
          )
        )
      );
      // re-sync account state.
      setStateWithRef(
        [...otherAccountsRef.current].map((item) =>
          item.address !== newAccount.address ? item : newAccount
        ),
        setOtherAccounts,
        otherAccountsRef
      );
    }
  };

  // Get any external accounts and remove from localStorage.
  const forgetExternalAccounts = (forget: ImportedAccount[]) => {
    if (!forget.length) return;
    removeLocalExternalAccounts(
      network as NetworkName,
      forget.filter((i) => "network" in i) as ExternalAccount[]
    );

    // If the currently active account is being forgotten, disconnect.
    if (forget.find((a) => a.address === activeAccount) !== undefined)
      setActiveAccount(null);
  };

  // Re-sync other accounts on network switch. Waits for `injectedWeb3` to be injected.
  useEffect(() => {
    if (!checkingInjectedWeb3) {
      // unsubscribe from all accounts and reset state.
      unsubscribe();
      setStateWithRef([], setOtherAccounts, otherAccountsRef);
    }
    return () => unsubscribe();
  }, [network, checkingInjectedWeb3]);

  // Unsubscrbe all account subscriptions.
  const unsubscribe = () => {
    Object.values(unsubs.current).forEach((unsub) => {
      unsub();
    });
  };

  // Add other accounts to context state.
  const addOtherAccounts = (a: ImportedAccount[]) => {
    setStateWithRef(
      [...otherAccountsRef.current].concat(a),
      setOtherAccounts,
      otherAccountsRef
    );
  };

  // Once extensions are fully initialised, fetch accounts from other sources.
  useEffectIgnoreInitial(() => {
    if (extensionAccountsSynced) {
      // Fetch accounts from supported hardware wallets.
      importLocalOtherAccounts(getLocalVaultAccounts);
      importLocalOtherAccounts(getLocalLedgerAccounts);

      // Mark hardware wallets as initialised.
      setOtherAccountsSynced(true);

      // Finally, fetch any read-only accounts that have been added by `system` or `user`.
      importLocalOtherAccounts(getLocalExternalAccounts);
    }
  }, [extensionAccountsSynced]);

  // Account fetching complete, mark accounts as initialised. Does not include read only accounts.
  useEffectIgnoreInitial(() => {
    if (extensionAccountsSynced && otherAccountsSynced === true) {
      setAccountsInitialised(true);
    }
  }, [extensionAccountsSynced, otherAccountsSynced]);

  return (
    <OtherAccountsContext.Provider
      value={{
        addExternalAccount,
        addOtherAccounts,
        renameOtherAccount,
        importLocalOtherAccounts,
        forgetOtherAccounts,
        forgetExternalAccounts,
        accountsInitialised,
        otherAccounts: otherAccountsRef.current,
      }}
    >
      {children}
    </OtherAccountsContext.Provider>
  );
};

export const useOtherAccounts = () => useContext(OtherAccountsContext);
