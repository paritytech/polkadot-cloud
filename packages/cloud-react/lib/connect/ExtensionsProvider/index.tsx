// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { setStateWithRef } from "@polkadot-cloud/utils";
import { Extensions, ExtensionsArray } from "@polkadot-cloud/assets/extensions";
import { ReactNode, useEffect, useRef, useState, createContext } from "react";
import type { ExtensionStatus, ExtensionsContextInterface } from "./types";
import { defaultExtensionsContext } from "./defaults";
import { AnyJson } from "../../utils/types";
import { polkadotSnapAvailable } from "./utils";
import { ExtensionFeature } from "@polkadot-cloud/assets/types";

export const ExtensionsContext = createContext<ExtensionsContextInterface>(
  defaultExtensionsContext
);

export const ExtensionsProvider = ({ children }: { children: ReactNode }) => {
  // Store whether initial `injectedWeb3` checking is underway.
  //
  // Injecting `injectedWeb3` is an asynchronous process, so we need to check for its existence for
  // a period of time.
  const [checkingInjectedWeb3, setCheckingInjectedWeb3] =
    useState<boolean>(true);
  const checkingInjectedWeb3Ref = useRef(checkingInjectedWeb3);

  // Store whether injected interval has been initialised.
  const intervalInitialisedRef = useRef<boolean>(false);

  // Store each extension's status in state.
  const [extensionsStatus, setExtensionsStatus] = useState<
    Record<string, ExtensionStatus>
  >({});
  const extensionsStatusRef = useRef(extensionsStatus);

  // Listen for window.injectedWeb3 with an interval.
  let injectedWeb3Interval: ReturnType<typeof setInterval>;
  const injectCounter = 0;

  // Handle completed interval check for `injectedWeb3`.
  //
  // Clear interval and move on to checking for Metamask Polkadot Snap.
  const handleClearInterval = (hasInjectedWeb3: boolean) => {
    clearInterval(injectedWeb3Interval);
    // Check if Metamask Polkadot Snap is available.
    handleSnapInjection(hasInjectedWeb3);
  };

  // Handle injecting of `metamask-polkadot-snap` into injectedWeb3 if avaialble, and complete
  // `injectedWeb3` syncing process.
  const handleSnapInjection = async (hasInjectedWeb3: boolean) => {
    const snapAvailable = await polkadotSnapAvailable();

    if (hasInjectedWeb3 || snapAvailable)
      setStateWithRef(
        getExtensionsStatus(snapAvailable),
        setExtensionsStatus,
        extensionsStatusRef
      );

    setStateWithRef(false, setCheckingInjectedWeb3, checkingInjectedWeb3Ref);
  };

  // Setter for an extension status.
  const setExtensionStatus = (id: string, status: ExtensionStatus) => {
    setStateWithRef(
      {
        ...extensionsStatusRef.current,
        [id]: status,
      },
      setExtensionsStatus,
      extensionsStatusRef
    );
  };

  // Removes an extension from the `extensionsStatus` state.
  const removeExtensionStatus = (id: string) => {
    const newExtensionsStatus = { ...extensionsStatusRef.current };
    delete newExtensionsStatus[id];

    setStateWithRef(
      newExtensionsStatus,
      setExtensionsStatus,
      extensionsStatusRef
    );
  };

  // Getter for the currently installed extensions.
  //
  // Loops through the supported extensios and checks if they are present in `injectedWeb3`. Adds
  // `installed` status to the extension if it is present.
  const getExtensionsStatus = (snapAvailable: boolean) => {
    const { injectedWeb3 }: AnyJson = window;

    const newExtensionsStatus = { ...extensionsStatus };
    if (snapAvailable)
      newExtensionsStatus["metamask-polkadot-snap"] = "installed";

    ExtensionsArray.forEach((e) => {
      if (injectedWeb3[e.id] !== undefined) {
        newExtensionsStatus[e.id] = "installed";
      }
    });

    return newExtensionsStatus;
  };

  // Checks if an extension has been installed.
  const extensionInstalled = (id: string): boolean =>
    extensionsStatus[id] !== undefined;

  // Checks whether an extension can be connected to.
  const extensionCanConnect = (id: string): boolean =>
    extensionInstalled(id) && extensionsStatus[id] !== "connected";

  // Checks whether an extension supports a feature.
  const extensionHasFeature = (
    id: string,
    feature: ExtensionFeature
  ): boolean => {
    const features = Extensions[id].features;
    if (features === "*" || features.includes(feature)) return true;
    else return false;
  };

  // Check for `injectedWeb3` and Metamask Snap on mount. To trigger interval on soft page
  // refreshes, no empty dependency array is provided to this `useEffect`.
  //
  // Interval duration.
  const checkEveryMs = 500;
  // Total interval iterations.
  const totalChecks = 10;
  useEffect(() => {
    if (!intervalInitialisedRef.current) {
      intervalInitialisedRef.current = true;

      injectedWeb3Interval = setInterval(() => {
        if (injectCounter + 1 === totalChecks) handleClearInterval(false);
        else {
          // if injected is present
          const injectedWeb3 = (window as AnyJson)?.injectedWeb3 || null;
          if (injectedWeb3 !== null) handleClearInterval(true);
        }
      }, checkEveryMs);
    }

    return () => clearInterval(injectedWeb3Interval);
  });

  return (
    <ExtensionsContext.Provider
      value={{
        extensionsStatus: extensionsStatusRef.current,
        checkingInjectedWeb3: checkingInjectedWeb3Ref.current,
        setExtensionStatus,
        removeExtensionStatus,
        extensionInstalled,
        extensionCanConnect,
        extensionHasFeature,
      }}
    >
      {children}
    </ExtensionsContext.Provider>
  );
};
