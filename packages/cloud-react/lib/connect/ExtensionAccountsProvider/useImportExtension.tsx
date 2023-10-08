// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import Keyring from "@polkadot/keyring";
import { isValidAddress } from "@polkadot-cloud/utils";
import { useExtensions } from "../ExtensionsProvider/useExtensions";
import type {
  ExtensionAccount,
  ExtensionInterface,
} from "../ExtensionsProvider/types";
import { defaultHandleImportExtension } from "./defaults";
import { ImportedAccount } from "../types";
import { HandleImportExtension } from "./types";
import { AnyFunction } from "../../utils/types";
import {
  addToLocalExtensions,
  getActiveAccountLocal,
  getInExternalAccounts,
} from "./utils";

export const useImportExtension = () => {
  const { setExtensionStatus } = useExtensions();

  // Handles importing of an extension.
  //
  // Adds extension metadata to state and updates local storage with
  // connected extensions. Calls separate method to handle account importing.
  const handleImportExtension = (
    id: string,
    currentAccounts: ExtensionAccount[],
    extension: ExtensionInterface,
    newAccounts: ExtensionAccount[],
    forget: (a: ImportedAccount[]) => void,
    network: {
      name: string;
      ss58: number;
    }
  ): HandleImportExtension => {
    // update extensions status to connected.
    setExtensionStatus(id, "connected");
    // update local active extensions
    addToLocalExtensions(id);

    if (newAccounts.length) {
      return handleInjectedAccounts(
        id,
        currentAccounts,
        extension,
        newAccounts,
        forget,
        network
      );
    }
    return defaultHandleImportExtension;
  };

  // Handles importing of extension accounts.
  //
  // Gets accounts to be imported and commits them to state.
  const handleInjectedAccounts = (
    id: string,
    currentAccounts: ExtensionAccount[],
    extension: ExtensionInterface,
    newAccounts: ExtensionAccount[],
    forget: (a: ImportedAccount[]) => void,
    network: {
      name: string;
      ss58: number;
    }
  ): HandleImportExtension => {
    const keyring = new Keyring();
    keyring.setSS58Format(network.ss58);

    // Remove accounts that do not contain correctly formatted addresses.
    newAccounts = newAccounts.filter((i) => isValidAddress(i.address));

    // Reformat addresses to ensure correct ss58 format
    newAccounts.forEach(async (account) => {
      const { address } = keyring.addFromAddress(account.address);
      account.address = address;
      return account;
    });

    // Remove newAccounts from local external accounts if present
    const inExternal = getInExternalAccounts(newAccounts, network.name);
    forget(inExternal);

    // Find any accounts that have been removed from this extension
    const goneFromExtension = currentAccounts
      .filter((j) => j.source === id)
      .filter((j) => !newAccounts.find((i) => i.address === j.address));

    // Check whether active account is present in forgotten accounts
    const activeGoneFromExtension = goneFromExtension.find(
      (i) => i.address === getActiveAccountLocal(network.name, network.ss58)
    );
    // Commit remove forgotten accounts
    forget(goneFromExtension);

    // Remove accounts that have already been added to `currentAccounts` via another extension.
    // Note: does not include external accounts.
    newAccounts = newAccounts.filter(
      (i) =>
        !currentAccounts.find(
          (j) => j.address === i.address && j.source !== "external"
        )
    );

    // Format accounts properties
    newAccounts = newAccounts.map((a) => ({
      address: a.address,
      source: id,
      name: a.name,
      signer: extension.signer,
    }));
    return {
      newAccounts,
      meta: {
        removedActiveAccount: activeGoneFromExtension?.address ?? null,
      },
    };
  };

  // Get active extension account.
  //
  // Checks if the local active account is in the extension.
  const getActiveExtensionAccount = (
    network: {
      name: string;
      ss58: number;
    },
    accounts: ImportedAccount[]
  ) => {
    return (
      accounts.find(
        (a) => a.address === getActiveAccountLocal(network.name, network.ss58)
      ) ?? null
    );
  };

  // Connect active extension account.
  //
  // Connects to active account if it is provided.
  const connectActiveExtensionAccount = (
    account: ImportedAccount | null,
    callback: AnyFunction
  ) => {
    if (account !== null) {
      callback(account);
    }
  };

  return {
    handleImportExtension,
    getActiveExtensionAccount,
    connectActiveExtensionAccount,
  };
};
