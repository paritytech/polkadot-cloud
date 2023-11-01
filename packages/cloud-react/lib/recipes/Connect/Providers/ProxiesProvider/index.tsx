// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import type { VoidFn, AnyApi, MaybeAddress } from "../../../../utils/types";
import {
  ellipsisFn,
  localStorageOrDefault,
  matchedProperties,
  removedFrom,
  setStateWithRef,
} from "@polkadot-cloud/utils";
import { useRef, useState, ReactNode, createContext, useContext } from "react";
import { isSupportedProxy } from "./proxies";
import { useEffectIgnoreInitial } from "../../../../base/hooks/useEffectIgnoreInitial";
import { useActiveAccounts } from "../ActiveAccountsProvider";
import { useImportedAccounts } from "../ImportedAccountsProvider";
import { useOtherAccounts } from "../OtherAccountsProvider";
import * as defaults from "./defaults";
import type {
  Delegates,
  ProxiedAccounts,
  Proxies,
  ProxiesContextInterface,
  Proxy,
  ProxyDelegate,
} from "./type";
import { useConnectConfig } from "../ConnectConfigProvider";

// TODO: Fix API
//import { useApi } from "contexts/Api";

export const ProxiesProvider = ({ children }: { children: ReactNode }) => {
  const { network } = useConnectConfig();
  // TODO: Fix API
  // const { api, isReady } = useApi();
  const api = {};
  const isReady = false;
  const { accounts } = useImportedAccounts();
  const { addExternalAccount } = useOtherAccounts();
  const { activeProxy, setActiveProxy, activeAccount } = useActiveAccounts();

  // store the proxy accounts of each imported account.
  const [proxies, setProxies] = useState<Proxies>([]);
  const proxiesRef = useRef(proxies);
  const unsubs = useRef<Record<string, VoidFn>>({});

  // Handle the syncing of accounts on accounts change.
  const handleSyncAccounts = () => {
    // Sync removed accounts.
    const handleRemovedAccounts = () => {
      const removed = removedFrom(accounts, proxiesRef.current, [
        "address",
      ]).map(({ address }) => address);

      removed?.forEach((address) => {
        // if delegates still exist for removed account, re-add the account as a read only system
        // account.
        if (delegatesRef.current[address]) {
          addExternalAccount(address, "system");
        } else {
          const unsub = unsubs.current[address];
          if (unsub) unsub();
        }
      });

      unsubs.current = Object.fromEntries(
        Object.entries(unsubs.current).filter(([key]) => !removed.includes(key))
      );
    };
    // Sync added accounts.
    const handleAddedAccounts = () => {
      // TODO: Fix API
      // addedTo(accounts, proxiesRef.current, ["address"])?.map(({ address }) =>
      //   subscribeToProxies(address)
      // );
    };
    // Sync existing accounts.
    const handleExistingAccounts = () => {
      setStateWithRef(
        matchedProperties(accounts, proxiesRef.current, ["address"]),
        setProxies,
        proxiesRef
      );
    };
    handleRemovedAccounts();
    handleAddedAccounts();
    handleExistingAccounts();
  };

  // store the delegates and the corresponding delegators
  const [delegates, setDelegates] = useState<Delegates>({});
  const delegatesRef = useRef(delegates);

  // TODO: Fix API
  // const subscribeToProxies = async (address: string) => {
  //   if (!api) return undefined;

  //   const unsub = await api.queryMulti<AnyApi>(
  //     [[api.query.proxy.proxies, address]],
  //     async ([result]) => {
  //       const data = result.toHuman();
  //       const newProxies = data[0];
  //       const reserved = new BigNumber(rmCommas(data[1]));

  //       if (newProxies.length) {
  //         setStateWithRef(
  //           [...proxiesRef.current]
  //             .filter(({ delegator }) => delegator !== address)
  //             .concat({
  //               address,
  //               delegator: address,
  //               delegates: newProxies.map((d: AnyApi) => ({
  //                 delegate: d.delegate.toString(),
  //                 proxyType: d.proxyType.toString(),
  //               })),
  //               reserved,
  //             }),
  //           setProxies,
  //           proxiesRef
  //         );
  //       } else {
  //         // no proxies: remove stale proxies if already in list.
  //         setStateWithRef(
  //           [...proxiesRef.current].filter(
  //             ({ delegator }) => delegator !== address
  //           ),
  //           setProxies,
  //           proxiesRef
  //         );
  //       }
  //     }
  //   );

  //   unsubs.current[address] = unsub;
  //   return unsub;
  // };

  // Gets the delegates of the given account
  const getDelegates = (address: MaybeAddress): Proxy | undefined =>
    proxiesRef.current.find(({ delegator }) => delegator === address) ||
    undefined;

  // Gets delegators and proxy types for the given delegate address
  const getProxiedAccounts = (address: MaybeAddress) => {
    const delegate = delegatesRef.current[address || ""];
    if (!delegate) {
      return [];
    }
    const proxiedAccounts: ProxiedAccounts = delegate
      .filter(({ proxyType }) => isSupportedProxy(proxyType))
      .map(({ delegator, proxyType }) => ({
        address: delegator,
        name: ellipsisFn(delegator),
        proxyType,
      }));
    return proxiedAccounts;
  };

  // Gets the delegates and proxy type of an account, if any.
  const getProxyDelegate = (
    delegator: MaybeAddress,
    delegate: MaybeAddress
  ): ProxyDelegate | null =>
    proxiesRef.current
      .find((p) => p.delegator === delegator)
      ?.delegates.find((d) => d.delegate === delegate) ?? null;

  // Subscribe new accounts to proxies, and remove accounts that are no longer imported.
  useEffectIgnoreInitial(() => {
    if (isReady) {
      handleSyncAccounts();
    }
  }, [accounts, isReady, network]);

  // If active proxy has not yet been set, check local storage `activeProxy` & set it as active
  // proxy if it is the delegate of `activeAccount`.
  useEffectIgnoreInitial(() => {
    const localActiveProxy = localStorageOrDefault(
      `${network}_active_proxy`,
      null
    );

    if (!localActiveProxy) {
      setActiveProxy(null);
    } else if (
      proxiesRef.current.length &&
      localActiveProxy &&
      !activeProxy &&
      activeAccount
    ) {
      try {
        const { address, proxyType } = JSON.parse(localActiveProxy);
        // Add proxy address as external account if not imported.
        if (!accounts.find((a) => a.address === address)) {
          addExternalAccount(address, "system");
        }

        const isActive = (
          proxiesRef.current.find(
            ({ delegator }) => delegator === activeAccount
          )?.delegates || []
        ).find((d) => d.delegate === address && d.proxyType === proxyType);
        if (isActive) {
          setActiveProxy({ address, proxyType });
        }
      } catch (e) {
        // Corrupt local active proxy record. Remove it.
        localStorage.removeItem(`${network}_active_proxy`);
      }
    }
  }, [accounts, activeAccount, proxiesRef.current, network]);

  // Reset active proxy state, unsubscribe from subscriptions on network change & unmount.
  useEffectIgnoreInitial(() => {
    setActiveProxy(null, false);
    unsubAll();
    return () => unsubAll();
  }, [network]);

  const unsubAll = () => {
    for (const unsub of Object.values(unsubs.current)) {
      unsub();
    }
    unsubs.current = {};
  };

  // Listens to `proxies` state updates and reformats the data into a list of delegates.
  useEffectIgnoreInitial(() => {
    // Reformat proxiesRef.current into a list of delegates.
    const newDelegates: Delegates = {};
    for (const proxy of proxiesRef.current) {
      const { delegator } = proxy;

      // checking if delegator is not null to keep types happy.
      if (delegator) {
        // get each delegate of this proxy record.
        for (const { delegate, proxyType } of proxy.delegates) {
          const item = {
            delegator,
            proxyType,
          };
          // check if this delegate exists in `newDelegates`.
          if (Object.keys(newDelegates).includes(delegate)) {
            // append delegator to the existing delegate record if it exists.
            newDelegates[delegate].push(item);
          } else {
            // create a new delegate record if it does not yet exist in `newDelegates`.
            newDelegates[delegate] = [item];
          }
        }
      }
    }

    setStateWithRef(newDelegates, setDelegates, delegatesRef);
  }, [proxiesRef.current]);

  // Queries the chain to check if the given delegator & delegate pair is valid proxy.
  const handleDeclareDelegate = async (delegator: string) => {
    if (!api) return [];

    // TODO: Fix API
    const result: AnyApi = ""; // api.query && (await api.query.proxy.proxies(delegator)).toHuman();

    let addDelegatorAsExternal = false;
    for (const { delegate: newDelegate } of result[0] || []) {
      if (
        accounts.find(({ address }) => address === newDelegate) &&
        !delegatesRef.current[newDelegate]
      ) {
        // TODO: Fix API
        // subscribeToProxies(delegator);
        addDelegatorAsExternal = true;
      }
    }
    if (addDelegatorAsExternal) {
      addExternalAccount(delegator, "system");
    }

    return [];
  };

  return (
    <ProxiesContext.Provider
      value={{
        proxies: proxiesRef.current,
        delegates: delegatesRef.current,
        handleDeclareDelegate,
        getDelegates,
        getProxyDelegate,
        getProxiedAccounts,
      }}
    >
      {children}
    </ProxiesContext.Provider>
  );
};

export const ProxiesContext = createContext<ProxiesContextInterface>(
  defaults.defaultProxiesContext
);

export const useProxies = () => useContext(ProxiesContext);
