// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { setStateWithRef } from "@polkadot-cloud/utils";
import { ExtensionsArray } from "@polkadot-cloud/assets/extensions";
import { ReactNode, useEffect, useRef, useState, createContext } from "react";
import type {
  ExtensionInjected,
  ExtensionStatus,
  ExtensionsContextInterface,
} from "./types";
import { defaultExtensionsContext } from "./defaults";
import { AnyJson } from "../../../utils/types";

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

  // Store the installed extensions in state.
  const [extensions, setExtensionsState] = useState<ExtensionInjected[] | null>(
    null
  );
  const extensionsRef = useRef(extensions);

  // Store each extension's status in state.
  const [extensionsStatus, setExtensionsStatus] = useState<
    Record<string, ExtensionStatus>
  >({});
  const extensionsStatusRef = useRef(extensionsStatus);

  // Setter for injected extensions.
  const setExtensions = (e: ExtensionInjected[] | null) =>
    setStateWithRef(e, setExtensionsState, extensionsRef);

  // Listen for window.injectedWeb3 with an interval.
  let injectedWeb3Interval: ReturnType<typeof setInterval>;
  const injectCounter = 0;

  // Handle completed interval check for `injectedWeb3`.
  //
  // If `injectedWeb3` is present, get installed extensions and add to state.
  const handleClearInterval = (hasInjectedWeb3: boolean) => {
    clearInterval(injectedWeb3Interval);
    if (hasInjectedWeb3) {
      setExtensions(getInstalledExtensions());
    }
    setStateWithRef(false, setCheckingInjectedWeb3, checkingInjectedWeb3Ref);
  };

  // Sets an interval to listen to `window` until the `injectedWeb3` property is present. Cancels
  // after 500 * 10 milliseconds.
  const checkEveryMs = 500;
  const totalChecks = 10;

  // To trigger interval on soft page refreshes, no empty dependency array is provided to this
  // `useEffect`.
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

  // Setter for an extension status.
  const setExtensionStatus = (id: string, status: ExtensionStatus) => {
    setStateWithRef(
      Object.assign(extensionsStatusRef.current || {}, {
        [id]: status,
      }),
      setExtensionsStatus,
      extensionsStatusRef
    );
  };

  // Getter for the currently installed extensions.
  //
  // Loops through the supported extensios and checks if they are present in `injectedWeb3`.
  const getInstalledExtensions = () => {
    const { injectedWeb3 }: AnyJson = window;
    const installed: ExtensionInjected[] = [];
    ExtensionsArray.forEach((e) => {
      if (injectedWeb3[e.id] !== undefined) {
        installed.push({
          ...e,
          ...injectedWeb3[e.id],
        });
      }
    });
    return installed;
  };

  return (
    <ExtensionsContext.Provider
      value={{
        extensions: extensionsRef.current || [],
        extensionsStatus: extensionsStatusRef.current,
        checkingInjectedWeb3: checkingInjectedWeb3Ref.current,
        setExtensionStatus,
      }}
    >
      {children}
    </ExtensionsContext.Provider>
  );
};
