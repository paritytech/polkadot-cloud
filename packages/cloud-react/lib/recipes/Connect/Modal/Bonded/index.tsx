// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { VoidFn, MaybeAddress } from "../../../../utils/types";
import {
  matchedProperties,
  removedFrom,
  setStateWithRef,
} from "@polkadot-cloud/utils";
import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  createContext,
  useContext,
} from "react";
// import { useApi } from "contexts/Api";

import { useImportedAccounts } from "../../ImportedAccountsProvider";
import { useOtherAccounts } from "../../OtherAccountsProvider";
import * as defaults from "./defaults";
import type { BondedAccount, BondedContextInterface } from "./types";

// TODO: FIX MANY THINGS

export const BondedProvider = ({
  children,
  network = "polkadot",
}: {
  children: ReactNode;
  network: string;
}) => {
  // const { api, isReady } = useApi();
  const { accounts } = useImportedAccounts();
  const { addExternalAccount } = useOtherAccounts();

  // Balance accounts state.
  const [bondedAccounts, setBondedAccounts] = useState<BondedAccount[]>([]);
  const bondedAccountsRef = useRef(bondedAccounts);

  const unsubs = useRef<Record<string, VoidFn>>({});

  // Handle the syncing of accounts on accounts change.
  const handleSyncAccounts = () => {
    // Sync removed accounts.
    const handleRemovedAccounts = () => {
      const removed = removedFrom(accounts, bondedAccountsRef.current, [
        "address",
      ]).map(({ address }) => address);

      removed?.forEach((address) => {
        const unsub = unsubs.current[address];
        if (unsub) unsub();
      });

      unsubs.current = Object.fromEntries(
        Object.entries(unsubs.current).filter(([key]) => !removed.includes(key))
      );
    };
    // Sync added accounts.
    const handleAddedAccounts = () => {
      // addedTo(accounts, bondedAccountsRef.current, ["address"])?.map(
      //   ({ address }) => subscribeToBondedAccount(address)
      // );
    };
    // Sync existing accounts.
    const handleExistingAccounts = () => {
      setStateWithRef(
        matchedProperties(accounts, bondedAccountsRef.current, ["address"]),
        setBondedAccounts,
        bondedAccountsRef
      );
    };
    handleRemovedAccounts();
    handleAddedAccounts();
    handleExistingAccounts();
  };

  // Handle accounts sync on connected accounts change.
  // useEffectIgnoreInitial(() => {
  //   if (isReady) {
  //     handleSyncAccounts();
  //   }
  // }, [accounts, network, isReady]);

  // Unsubscribe from subscriptions on unmount.
  useEffect(
    () => () =>
      Object.values(unsubs.current).forEach((unsub) => {
        unsub();
      }),
    []
  );

  // Subscribe to account, get controller and nominations.
  // const subscribeToBondedAccount = async (address: string) => {
  //   if (!api) return undefined;

  //   const unsub = await api.queryMulti<AnyApi>(
  //     [
  //       [api.query.staking.bonded, address],
  //       [api.query.staking.nominators, address],
  //     ],
  //     async ([controller, nominations]) => {
  //       const newAccount: BondedAccount = {
  //         address,
  //       };

  //       // set account bonded (controller) or null
  //       let newController = controller.unwrapOr(null);
  //       newController =
  //         newController === null
  //           ? null
  //           : (newController.toHuman() as string | null);
  //       newAccount.bonded = newController;

  //       // add bonded (controller) account as external account if not presently imported
  //       if (newController) {
  //         if (accounts.find((s) => s.address === newController) === undefined) {
  //           addExternalAccount(newController, "system");
  //         }
  //       }

  //       // set account nominations.
  //       const newNominations = nominations.unwrapOr(null);
  //       newAccount.nominations =
  //         newNominations === null
  //           ? defaults.nominations
  //           : {
  //               targets: newNominations.targets.toHuman(),
  //               submittedIn: newNominations.submittedIn.toHuman(),
  //             };

  //       // remove stale account if it's already in list.
  //       const newBonded = Object.values(bondedAccountsRef.current)
  //         .filter((a) => a.address !== address)
  //         .concat(newAccount);

  //       setStateWithRef(newBonded, setBondedAccounts, bondedAccountsRef);
  //     }
  //   );

  //   unsubs.current[address] = unsub;
  //   return unsub;
  // };

  const getBondedAccount = (address: MaybeAddress) =>
    bondedAccountsRef.current.find((a) => a.address === address)?.bonded ||
    null;

  const getAccountNominations = (address: MaybeAddress) =>
    bondedAccountsRef.current.find((a) => a.address === address)?.nominations
      ?.targets || [];

  const getAccount = (address: MaybeAddress) =>
    bondedAccountsRef.current.find((a) => a.address === address) || null;

  const isController = (address: MaybeAddress) =>
    bondedAccountsRef.current.filter((a) => (a?.bonded || "") === address)
      ?.length > 0 || false;

  return (
    <BondedContext.Provider
      value={{
        getAccount,
        getBondedAccount,
        getAccountNominations,
        isController,
        bondedAccounts: bondedAccountsRef.current,
      }}
    >
      {children}
    </BondedContext.Provider>
  );
};

export const BondedContext = createContext<BondedContextInterface>(
  defaults.defaultBondedContext
);

export const useBonded = () => useContext(BondedContext);
