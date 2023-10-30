// Copyright 2023 @polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { ellipsisFn, setStateWithRef } from "@polkadot-cloud/utils";
import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import type { VaultAccount } from "../../../connect/types";
import { getLocalVaultAccounts, isLocalNetworkAddress } from "./Utils";
import { defaultVaultHardwareContext } from "./defaults";
import type { VaultHardwareContextInterface } from "./types";

export const VaultHardwareProvider = ({
  children,
  network = "polkadot",
}: {
  children: ReactNode;
  network?: string;
}) => {
  const [vaultAccounts, seVaultAccountsState] = useState<VaultAccount[]>(
    getLocalVaultAccounts(network)
  );
  const vaultAccountsRef = useRef(vaultAccounts);

  // Check if a Vault address exists in imported addresses.
  const vaultAccountExists = (address: string) =>
    !!getLocalVaultAccounts().find((a) =>
      isLocalNetworkAddress(network, a, address)
    );

  // Adds a vault account to state and local storage.
  const addVaultAccount = (address: string, index: number) => {
    let newVaultAccounts = getLocalVaultAccounts();

    if (
      !newVaultAccounts.find((a) => isLocalNetworkAddress(network, a, address))
    ) {
      const account = {
        address,
        network,
        name: ellipsisFn(address),
        source: "vault",
        index,
      };

      newVaultAccounts = [...newVaultAccounts].concat(account);
      localStorage.setItem(
        "polkadot_vault_accounts",
        JSON.stringify(newVaultAccounts)
      );

      // store only those accounts on the current network in state.
      setStateWithRef(
        newVaultAccounts.filter((a) => a.network === network),
        seVaultAccountsState,
        vaultAccountsRef
      );
      return account;
    }
    return null;
  };

  const removeVaultAccount = (address: string) => {
    let newVaultAccounts = getLocalVaultAccounts();

    newVaultAccounts = newVaultAccounts.filter((a) => {
      if (a.address !== address) {
        return true;
      }
      if (a.network !== network) {
        return true;
      }
      return false;
    });

    if (!newVaultAccounts.length) {
      localStorage.removeItem("polkadot_vault_accounts");
    } else {
      localStorage.setItem(
        "polkadot_vault_accounts",
        JSON.stringify(newVaultAccounts)
      );
    }
    setStateWithRef(
      newVaultAccounts.filter((a) => a.network === network),
      seVaultAccountsState,
      vaultAccountsRef
    );
  };

  const getVaultAccount = (address: string) => {
    const localVaultAccounts = getLocalVaultAccounts();
    if (!localVaultAccounts) {
      return null;
    }
    return (
      localVaultAccounts.find((a) =>
        isLocalNetworkAddress(network, a, address)
      ) ?? null
    );
  };

  const renameVaultAccount = (address: string, newName: string) => {
    let newVaultAccounts = getLocalVaultAccounts();

    newVaultAccounts = newVaultAccounts.map((a) =>
      isLocalNetworkAddress(network, a, address)
        ? {
            ...a,
            name: newName,
          }
        : a
    );
    localStorage.setItem(
      "polkadot_vault_accounts",
      JSON.stringify(newVaultAccounts)
    );
    setStateWithRef(
      newVaultAccounts.filter((a) => a.network === network),
      seVaultAccountsState,
      vaultAccountsRef
    );
  };

  // Refresh imported vault accounts on network change.
  useEffect(() => {
    setStateWithRef(
      getLocalVaultAccounts(network),
      seVaultAccountsState,
      vaultAccountsRef
    );
  }, [network]);

  return (
    <VaultHardwareContext.Provider
      value={{
        vaultAccountExists,
        addVaultAccount,
        removeVaultAccount,
        renameVaultAccount,
        getVaultAccount,
        vaultAccounts: vaultAccountsRef.current,
      }}
    >
      {children}
    </VaultHardwareContext.Provider>
  );
};

export const VaultHardwareContext =
  createContext<VaultHardwareContextInterface>(defaultVaultHardwareContext);

export const useVaultHardware = () => useContext(VaultHardwareContext);
